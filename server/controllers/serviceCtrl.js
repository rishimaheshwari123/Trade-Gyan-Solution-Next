const Service = require('../models/serviceModel');
const Auth = require("../models/authModel"); // Adjust the path as necessary
const mailSender = require('../utils/mailSenderr');
const { messageViaEmail } = require('../template/messageViaEmail');
const axios = require("axios");
const serviceModel = require('../models/serviceModel');
const authModel = require('../models/authModel');
const { serviceExpiredEmail } = require('../template/expiryService');

const createService = async (req, res) => {
  try {
    const {
      serviceName,
      description,
      serviceCategory,
      price,
      duration,
      availablePlans,
      riskLevel,
      investmentType,
      minInvestment,
      maxInvestment,
      serviceAvailability
    } = req.body;

    if (!serviceName || !description || !serviceCategory || !price || !duration) {
      return res.status(400).json({
        success: false,
        message: 'Please Provide All Fields',
      });
    }
    const newService = new Service({
      serviceName,
      description,
      serviceCategory,
      price,
      duration,
      availablePlans,
      riskLevel,
      investmentType,
      minInvestment,
      maxInvestment,
      serviceAvailability
    });

    const savedService = await newService.save();

    return res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: savedService
    });
  } catch (error) {
    console.error('Error creating service:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create service',
      error: error.message
    });
  }
};


const getAllService = async (req, res) => {
  try {
    const services = await Service.find({})
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(100); // Limit results to 100

    return res.status(200).json({
      success: true,
      services
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error in getting all services",
      success: false
    });
  }
};



const getSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Service ID is required"
      });
    }

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found"
      });
    }

    return res.status(200).json({
      success: true,
      service
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Error in getting service",
      success: false
    });
  }
};

const deleteServiceCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceModel.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Service Delete Successfully!"
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Error in deleting service",
      success: false
    });
  }
}

const singleServiceAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Service ID is required"
      });
    }

    const service = await Service.findById(id).populate("usersEnroled.user");
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found"
      });
    }

    return res.status(200).json({
      success: true,
      service
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Error in getting service",
      success: false
    });
  }
};




const getServices = async (req, res) => {
  try {
    console.log("first")
    const userId = req.user.id; // Assuming the user ID is available in req.user

    // Find the user by ID and populate their subscriptions with the corresponding service details
    const user = await Auth.findById(userId).populate("subscriptions.service");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // console.log(user)
    // Filter and extract the services from the user's subscriptions
    const services = user.subscriptions
      .map(subscription => ({
        serviceId: subscription.service, // Service ID
        serviceName: subscription.service.serviceName, // Assuming service has a name field
        description: subscription.service.description, // Assuming service has a description field
        enrollmentDate: subscription.enrollmentDate,
        expirationDate: subscription.expirationDate,
        // Add any other service fields you want to include
      }));

    // Send success response along with the services
    return res.status(200).json({
      success: true, // Success flag
      message: "Active services retrieved successfully",
      services
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


// POST route to send a message to users of a specific service
const sendServiceEnrolledMessage = async (req, res) => {
  const { serviceId } = req.params;
  const { message, sendVia } = req.body;
  // console.log(req.body);

  try {
    // Find the service by ID and populate users enrolled
    const service = await Service.findById(serviceId).populate("usersEnroled.user");

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    // Filter users whose subscription has not expired
    const activeUsers = service.usersEnroled.filter(
      (userEnrolment) => new Date(userEnrolment.expirationDate) > new Date()
    );

    // Check if there are any active users
    if (activeUsers.length === 0) {
      return res.status(404).json({ message: "No active users found for this service" });
    }

    // Iterate over the active users to send messages
    for (const userEnrolment of activeUsers) {
      const user = userEnrolment.user; // Enrolled user object

      // Send WhatsApp message
      if (sendVia.includes("whatsapp") || sendVia.includes("both")) {
        try {
          await sendWhatsAppMessage(user.whatsappNumber, message);
          console.log(`WhatsApp message sent to ${user.whatsappNumber}`);
        } catch (error) {
          console.error(`Failed to send WhatsApp message to ${user.whatsappNumber}:`, error.message);
        }
      }

      // Send Email
      if (sendVia.includes("email") || sendVia.includes("both")) {
        try {
          await sendEmail(user?.email, message, user?.name);
          console.log(`Email sent to ${user.email}`);
        } catch (error) {
          console.error(`Failed to send email to ${user.email}:`, error.message);
        }
      }

      // Send SMS
      if (sendVia.includes("sms") || sendVia.includes("both")) {
        try {
          await sendSMS(user.contactNumber, message); // Assuming sendSMS is defined
          // console.log(`SMS sent to ${user.contactNumber}`);
        } catch (error) {
          console.error(`Failed to send SMS to ${user.phoneNumber}:`, error.message);
        }
      }
    }

    return res.status(200).json({ message: "Messages sent successfully to active users." });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};





const sendEmail = async (recipientEmail, messageContent, name) => {
  try {
    // Create a transporter object using SMTP transport
    const res = await mailSender(recipientEmail, "TradeGyan Solution", messageViaEmail(messageContent, name))
    console.log(res)


  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Function to send WhatsApp message using WhatsApp Business API
const sendWhatsAppMessage = async (whatsappNumber, messageContent) => {
  try {

    const sanitizeContactNumber = (number) => {
      // Remove leading 0, +91, or 91
      return number.replace(/^(0|\+91|91)/, '');
    };
  
    // Sanitize the contact number
    const sanitizedNumber = sanitizeContactNumber(whatsappNumber);

    console.log('No.',sanitizedNumber)
    const url = `http://cloudapi.msg24.in/wapp/api/send?apikey=cea1e160b903415087e2e2d878ffd0d0&mobile=${sanitizedNumber}&msg=${messageContent}`;

    // Send the WhatsApp message via the API
    await axios.post(url);
  } catch (error) {
    throw new Error(`Failed to send WhatsApp message: ${error.message}`);
  }
};


const sendSMS = async (contactNumber, messageContent) => {
  // Utility function to sanitize the contact number
  const sanitizeContactNumber = (number) => {
    // Remove leading 0, +91, or 91
    return number.replace(/^(0|\+91|91)/, '');
  };

  // Sanitize the contact number
  const sanitizedNumber = sanitizeContactNumber(contactNumber);

  const url = `http://mysms.msg24.in/api/mt/SendSMS`;
  const params = {
    apikey: "fhKQG4QS6kmRZoIzorwjJg", // Your API key
    senderid: "TDGYAN",
    channel: "trans",
    DCS: 0,
    flashsms: 0,
    number: `91${sanitizedNumber}`, // Prepend country code
    text: `TradeGyan option: {#var#} ${messageContent} CALL{#var#}{#var#} Call - {#var#} www.tradegyan.co`,
    route: 8,
  };

  try {
    const response = await axios.get(url, { params });
    console.log("SMS sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
};



module.exports = {
  createService, deleteServiceCtrl, getAllService, getSingleService, getServices, singleServiceAdmin, sendServiceEnrolledMessage
};

"use client"

import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"
import { toast } from "react-toastify"
import { sendContactForm } from "../../../services/operations/auth"

const InquiryForm = ({ onClose, showModal }) => {
  const [name, setName] = useState("")
  const [contactNumber, setContactNumber] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    if (name && contactNumber) {
      const response = await sendContactForm({ name, contact: contactNumber })
      if (response?.data?.success) {
        toast.success("Inquiry submitted successfully!")
        onClose()
      }
    } else {
      toast.error("Please fill in all fields.")
    }
  }

  return (
    <div className="relative">
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg relative w-full max-w-md max-h-[90vh] overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-black hover:text-gray-600"
            >
              <FaTimes size={20} />
            </button>

            <div className="pt-4">
              {/* Highlighted Advice Message */}
              <div className="mb-4 text-center text-base sm:text-lg font-semibold text-blue-600">
                "Free" Advice is more Expensive than "Fee" Advice
              </div>

              <h2 className="text-xl font-semibold mb-4 text-center">
                Inquiry Form
              </h2>

            
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center mb-1 text-sm font-medium"
                  >
                    <AiFillPhone className="text-blue-500 mr-2" />
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="flex items-center mb-1 text-sm font-medium"
                  >
                    <AiFillPhone className="text-blue-500 mr-2" />
                    Contact Number:
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter contact number"
                    value={contactNumber}
                    onChange={e => setContactNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-4 text-center text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
                  One-time service for two days recommendation in any segment -{" "}
                  <strong className="text-green-600">₹1000</strong>
                </div>



  {/* Disclaimer Section - Always Visible */}
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-bold text-red-700 mb-3 text-center">
                  Disclaimer
                </h3>
                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    Please trade only with company calls provided through our
                    official hotline numbers:{" "}
                    <strong className="text-blue-600">7771004878-79</strong>.
                    The company is not responsible for any calls made from
                    numbers other than the official company numbers.
                  </p>
                  <p>
                    Please make payments only to the official company account
                    listed with KYC details on the company website. The company
                    is not responsible for any payments made to accounts other
                    than the official company account.
                  </p>
                </div>
              </div>

                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InquiryForm

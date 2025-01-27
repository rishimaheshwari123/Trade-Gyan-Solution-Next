import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const offices = [
  {
    city: "Bhopal",
    address: "Plot No.9, Sector C, JK Road Bhoapl, MP 462023 India",
    phone: "+917771004878, +917771004879",
    email: "info@tradegyan.co",
  },
];

const ReachUs = () => {
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-bold mb-3">Reach Us</h2>
      {offices?.map((office, index) => (
        <div key={index} className="mb-4 p-3 bg-white shadow-md rounded-lg">
          <h3 className="text-md font-semibold">{office.city}</h3>
          <div className="mt-1">
            <p className="flex items-center text-gray-700 text-sm">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />{" "}
              {office?.address}
            </p>
            <p className="flex items-center text-gray-700 text-sm">
              <FaPhoneAlt className="text-blue-500 mr-2" /> <a href="tel:917771004878">917771004878</a>  <a href="tel:917771004879">+917771004879</a>
            </p>
            <p className="flex items-center text-gray-700 text-sm">
              <FaEnvelope className="text-blue-500 mr-2" /> <a href="mailto:info@tradegyan.co">info@tradegyan.co</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReachUs;

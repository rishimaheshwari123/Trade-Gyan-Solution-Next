import React from 'react';

const data = [
  {
    designation: 'Customer Care',
    contactPerson: 'Himanshu Muralia',
    address: 'Plot No - 01 Ravidas Nagar near quality bazaar, Indrapuri Bhopal',
    contactNo: '917771004878',
    email: 'compliance@tradegyan.com',
    workingHours: 'Mon-Fri 09 AM - 06 PM'
  },
  {
    designation: 'Head of Customer Care',
    contactPerson: 'Sumit Khare',
    address: 'Plot No.9, Sector C, Govindpura Industrial Area, JK Road, Bhopal, MP 462023, India',
    contactNo: '9109976842',
    email: 'rasumitkhare@gmail.com',
    workingHours: 'Mon-Fri 09 AM - 06 PM'
  },
  {
    designation: 'Compliance Officer',
    contactPerson: 'Sumit Khare',
    address: 'Plot No.9, Sector C, Govindpura Industrial Area, JK Road, Bhopal, MP 462023, India',
    contactNo: '9109976843',
    email: 'compliance.sumitkharera@gmail.com',
    workingHours: 'Mon-Fri 09 AM - 06 PM'
  },
  {
    designation: 'CEO',
    contactPerson: 'Sumit Khare',
    address: 'Plot No.9, Sector C, Govindpura Industrial Area, JK Road, Bhopal, MP 462023, India',
    contactNo: '9109976842',
    email: 'rasumitkhare@gmail.com',
    workingHours: 'Mon-Fri 09 AM - 06 PM'
  },
  {
    designation: 'Principal Officer',
    contactPerson: 'Sumit Khare',
    address: 'Plot No.9, Sector C, Govindpura Industrial Area, JK Road, Bhopal, MP 462023, India',
    contactNo: '9109976842',
    email: 'rasumitkhare@gmail.com',
    workingHours: 'Mon-Fri 09 AM - 06 PM'
  }
];

const DataTable = () => {
  return (
    <div className="overflow-x-auto max-w-full px-6 py-8 w-11/12 mx-auto">
      
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 ">
        If you have a grievance, you can reach out to our Support Team for assistance.
      </h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-300">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left border-b border-gray-400">Details of Designation</th>
              <th className="px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left border-b border-gray-400">Contact Person Name</th>
              <th className="px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left border-b border-gray-400">Address (Physical Location)</th>
              <th className="px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left border-b border-gray-400">Contact No.</th>
              <th className="px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left border-b border-gray-400">Email-ID</th>
              <th className="px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-left border-b border-gray-400">Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-6 py-4 text-xs sm:text-sm md:text-base lg:text-lg">{row.designation}</td>
                <td className="px-6 py-4 text-xs sm:text-sm md:text-base lg:text-lg">Himanshu Muralia</td>
                <td className="px-6 py-4 text-xs sm:text-sm md:text-base lg:text-lg">Plot No - 01 Ravidas Nagar near quality bazaar, Indrapuri Bhopal</td>
                <td className="px-6 py-4 text-xs sm:text-sm md:text-base lg:text-lg">917771004878</td>
                <td className="px-6 py-4 text-xs sm:text-sm md:text-base lg:text-lg">compliance@tradegyan.com</td>
                <td className="px-6 py-4 text-xs sm:text-sm md:text-base lg:text-lg">{row.workingHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8 text-gray-700 space-y-4">
        <p className="text-lg sm:text-xl">
          We aim to resolve all grievances within 21 working days from the date of receipt.
        </p>

        <p className="text-lg sm:text-xl">
          If your grievance is not resolved within this timeframe, you can escalate it to SEBI’s SCORES Platform (SEBI Complaints Redress System).
        </p>

        <div className="flex items-center space-x-2">
          <span className="font-bold">SCORES Portal:</span>
          <a href="https://scores.sebi.gov.in" className="text-blue-500 hover:underline">scores.sebi.gov.in</a>
        </div>

        <p className="text-lg sm:text-xl">
          In case you are unsatisfied with the resolution provided through our support or the SCORES platform, you can access the Online Dispute Resolution (ODR) Portal.
        </p>

        <div className="flex items-center space-x-2">
          <span className="font-bold">ODR Portal:</span>
          <a href="https://smartodr.in" className="text-blue-500 hover:underline">smartodr.in</a>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";


const ComplaintTrends = () => {
  const [currentMonthData, setCurrentMonthData] = useState({});
  const [pastMonthsData, setPastMonthsData] = useState([]);
  const [pastYearsData, setPastYearsData] = useState([]);
  const [grandTotalYears, setGrandTotalYears] = useState({});
  const BASE_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch current month data
        const currentMonthResponse = await axios.get(
          `${BASE_URL}/current-month-data`
        );
        setCurrentMonthData(currentMonthResponse?.data?.monthEndData);
      } catch (error) {
        console.error("Error fetching current month data:", error);
      }

      try {
        const monthsResponse = await axios.get(`${BASE_URL}/monthly-trend`);
        setPastMonthsData(monthsResponse?.data?.pastMonthsData);
      } catch (error) {
        console.error("Error fetching past months data:", error);
      }

      try {
        const yearsResponse = await axios.get(`${BASE_URL}/annual-trend`);
        setPastYearsData(yearsResponse?.data?.pastYearsData);
        setGrandTotalYears(yearsResponse?.data?.grandTotal);
      } catch (error) {
        console.error("Error fetching past years data:", error);
      }
    };

    fetchData();
  }, [BASE_URL]);

  return (
    <div>
      
      <div className="p-4 w-full md:w-10/12 mx-auto text-center bg-white">
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4">
            Data for the Month End – {currentMonthData?.month}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Sr No.</th>
                  <th className="border border-gray-300 p-2">Received From</th>
                  <th className="border border-gray-300 p-2">
                    Pending Last Month
                  </th>
                  <th className="border border-gray-300 p-2">Received</th>
                  <th className="border border-gray-300 p-2">Resolved</th>
                  <th className="border border-gray-300 p-2">Total Pending</th>
                  <th className="border border-gray-300 p-2">
                    Pending &lt; 3 Months
                  </th>
                  <th className="border border-gray-300 p-2">
                    Avg Resolution Time (Days)
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentMonthData?.sources?.map((source, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">
                      {source?.name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {source?.data?.pendingLastMonth || 0}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {source?.data?.received || 0}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {source?.data?.resolved || 0}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {source?.data?.pending || 0}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {source?.data?.pendingComplaintsLessThanThreeMonths || 0}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {source?.data?.averageResolutionTime || 0}
                    </td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td>Grand Total</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{currentMonthData?.grandTotal?.received || 0}</td>
                  <td>{currentMonthData?.grandTotal?.resolved || 0}</td>
                  <td>{currentMonthData?.grandTotal?.pending || 0}</td>
                  <td>
                    {currentMonthData?.grandTotal
                      ?.pendingComplaintsLessThanThreeMonths || 0}
                  </td>
                  <td>
                    {currentMonthData?.grandTotal?.averageResolutionTime || 0}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
          Trend of monthly disposal of complaints
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Month</th>
                <th className="border border-gray-300 p-2">Received</th>
                <th className="border border-gray-300 p-2">Resolved</th>
                <th className="border border-gray-300 p-2">Pending</th>
              </tr>
            </thead>
            <tbody>
              {pastMonthsData?.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border border-gray-300 p-2">{item?.month}</td>
                  <td className="border border-gray-300 p-2">
                    {item?.received}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item?.resolved}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item?.pending}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
          Trend of annual disposal of complaints
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Year</th>
                <th className="border border-gray-300 p-2">Received</th>
                <th className="border border-gray-300 p-2">Resolved</th>
                <th className="border border-gray-300 p-2">Pending</th>
              </tr>
            </thead>
            <tbody>
              {pastYearsData?.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border border-gray-300 p-2">{item?.year}</td>
                  <td className="border border-gray-300 p-2">
                    {item?.received}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item?.resolved}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item?.pending}
                  </td>
                </tr>
              ))}
              <tr className="font-bold">
                <td>Grand Total</td>
                <td>{grandTotalYears?.received}</td>
                <td>{grandTotalYears?.resolved}</td>
                <td>{grandTotalYears?.pending}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintTrends;

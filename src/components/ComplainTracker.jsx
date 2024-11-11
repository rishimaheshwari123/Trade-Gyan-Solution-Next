"use client";
import axios from "axios";

// This function fetches data from the server at the time of request (SSR)
export async function getServerSideProps() {
  const BASE_URL = process.env.NEXT_PUBLIC_SOCKET_BASE_URL;

  try {
    // Fetch current month data
    const currentMonthResponse = await axios.get(
      `${BASE_URL}/current-month-data`
    );
    const currentMonthData = currentMonthResponse?.data?.monthEndData || {};

    // Fetch monthly trend data
    const monthsResponse = await axios.get(`${BASE_URL}/monthly-trend`);
    const pastMonthsData = monthsResponse?.data?.pastMonthsData || [];

    // Fetch annual trend data
    const yearsResponse = await axios.get(`${BASE_URL}/annual-trend`);
    const pastYearsData = yearsResponse?.data?.pastYearsData || [];
    const grandTotalYears = yearsResponse?.data?.grandTotal || {};

    return {
      props: {
        currentMonthData,
        pastMonthsData,
        pastYearsData,
        grandTotalYears,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        currentMonthData: {},
        pastMonthsData: [],
        pastYearsData: [],
        grandTotalYears: {},
      },
    };
  }
}

const ComplaintTrends = ({
  currentMonthData,
  pastMonthsData,
  pastYearsData,
  grandTotalYears,
}) => {
  return (
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
                  <td className="border border-gray-300 p-2">{source?.name}</td>
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
                <td className="border border-gray-300 p-2">{item?.received}</td>
                <td className="border border-gray-300 p-2">{item?.resolved}</td>
                <td className="border border-gray-300 p-2">{item?.pending}</td>
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
                <td className="border border-gray-300 p-2">{item?.received}</td>
                <td className="border border-gray-300 p-2">{item?.resolved}</td>
                <td className="border border-gray-300 p-2">{item?.pending}</td>
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
  );
};

export default ComplaintTrends;

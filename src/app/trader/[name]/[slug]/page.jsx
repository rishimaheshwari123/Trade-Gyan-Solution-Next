"use client";
import React, { useEffect, useState } from "react";
import { datas } from "../../../../data/traderData";
import { useParams } from "next/navigation";

function TraderSingleData() {
  const { name, slug } = useParams();
  const [traderData, setTraderData] = useState(null);

  useEffect(() => {
    if (name) {
      const traderType = datas[name];
      setTraderData(traderType?.[slug]);
    }
  }, [name, slug]);

  useEffect(() => {
    if (traderData && traderData.length > 0) {
      const firstData = traderData[0]; // Assuming you want to use the first item's details
      document.title = `${firstData.name} | Trader Details`;
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.content = firstData.description || "Default description for trader data.";
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = firstData.description || "Default description for trader data.";
        document.head.appendChild(newMeta);
      }
    }
  }, [traderData]);

  return (
    <div className="relative mt-3">
      {traderData ? (
        traderData.map((data) => (
          <div
            key={data.name}
            className="container mx-auto p-4 text-gray-800 lg:w-[70%] grid lg:grid-cols-2 gap-6"
          >
            <div className="flex flex-col gap-5">
              <h6 className="text-4xl font-bold text-center text-blue-600 mb-6">
                {data?.name}
              </h6>
              <p className="text-lg leading-relaxed lg:text-2xl">
                {data.description}
              </p>
              <p className="text-base lg:text-lg mt-4">
                <strong>What:</strong> {data.what}
              </p>
              <p className="text-base lg:text-lg">
                <strong>Whom:</strong> {data.whom}
              </p>
              <p className="text-base lg:text-lg">
                <strong>Ideal for:</strong> {data.idealFor}
              </p>
              <p className="text-base lg:text-lg">
                <strong>Product Description:</strong> {data.productDescription}
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-4">Features:</h2>
              <ul className="list-disc list-inside space-y-2">
                {data.features &&
                  Object.entries(data.features).map(([key, value]) => (
                    <li key={key} className="text-base lg:text-lg">
                      <strong>
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{" "}
                      {value}
                    </li>
                  ))}
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Sample Recommendations:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {data.sample &&
                  data.sample.map((recommendation, index) => (
                    <li key={index} className="text-base lg:text-lg">
                      {recommendation}
                    </li>
                  ))}
              </ul>

              {data.pricing && (
                <>
                  <h2 className="text-2xl font-semibold mt-6 mb-4">Pricing:</h2>
                  <table className="min-w-full table-auto border border-gray-300 mb-6">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                          Period
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                          Amount
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                          GST (18%)
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricing.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                            {item.period}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                            {item.amount}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                            {item.gst}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-base lg:text-lg">
                            {item.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              <p className="italic text-sm lg:text-base">
                <strong>Disclaimer:</strong> {data.disclaimer}
              </p>
            </div>

            <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
              {data.image && (
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-4xl font-semibold text-[#6c75aa]">
                    Risko Meter
                  </h3>
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-[80%] h-auto rounded-lg mb-6 bg-white"
                  />
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="container mx-auto p-4 text-gray-800 text-center">
          <p className="text-xl">No trader data found.</p>
        </div>
      )}
    </div>
  );
}

export default TraderSingleData;

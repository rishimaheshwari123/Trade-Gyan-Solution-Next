"use client";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

function Articles() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [blog, setBlog] = useState([]);

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blog/getAll`);

      if (response?.data?.success) {
        setBlog(response.data.blogs);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = {year: "numeric", month: "long", day: "numeric"};
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h6 className="text-3xl  text-center font-bold mb-4">List of Articles</h6>

      {blog.length === 0 ? (
        <p className="text-gray-500">No articles available at the moment.</p>
      ) : (
        <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blog.map(
            (article, index) =>
              article.type === "articles" && (
                <Link
                  key={index}
                  href={`/podcast/${article._id}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {/* Card for image, title, description, and date */}
                  <div className="card bg-gray-100 p-4 rounded-lg">
                    {/* Image */}
                    <Image
                      className="w-full object-cover rounded-lg"
                      src={article?.image}
                      alt={article.title || "Article thumbnail"}
                      width={500}
                      height={500}
                    />

                    {/* Title and Description */}
                    <div className="px-4 py-4">
                      <h2 className="font-bold text-xl text-gray-800 mb-2">
                        {article.title}
                      </h2>

                      <div
  dangerouslySetInnerHTML={{
    __html: article?.desc?.substring(0, 50) + (article?.desc?.length > 50 ? "..." : ""),
  }}
></div>

                   
                    </div>

                    {/* Date */}
                    <div className="px-4 pb-4">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {formatDate(article.createdAt)}
                      </span>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Articles;

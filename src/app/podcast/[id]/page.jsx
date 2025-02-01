"use client";
import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

const SinglePodcast = ({params}) => {
  const [singleBlog, setSingleBlog] = useState(null);
  const {id} = params;

  const getSingleBlog = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/get/${id}`
      );
      if (response?.data?.success) {
        setSingleBlog(response.data.blog);
      } else {
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      toast.error("Error in getting details about single blog");
    }
  };

  useEffect(() => {
    getSingleBlog(id);
  }, [id]);

  const formatDescription = (desc) => {
    if (!desc) return "";
    const words = desc.split(" ");
    return words.reduce((acc, word, index) => {
      if ((index + 1) % 80 === 0) {
        return acc + word + "<br /><br />";
      }
      return acc + word + " ";
    }, "");
  };
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      weekday: 'long', // e.g. 'Monday'
      year: 'numeric', // e.g. '2025'
      month: 'long', // e.g. 'February'
      day: 'numeric', // e.g. '1'
      hour: '2-digit', // e.g. '12'
      minute: '2-digit', // e.g. '30'
      hour12: true, // Show time in 12-hour format
    };
    return date.toLocaleDateString('en-US', options); // You can change the locale if necessary
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {singleBlog ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={singleBlog.image}
            alt={singleBlog.title}
            className="flex justify-center items-center  lg:h-[50vh] object-fit mx-auto"
          />
          <div className="p-6">
            <h6 className="text-3xl font-bold mb-2">{singleBlog.title}</h6>
            <br />
            <p className="text-gray-500 text-sm mb-6">
              {formatDate(singleBlog.createdAt)}
            </p>
            <p
              className="text-gray-700 text-lg mb-4"
              dangerouslySetInnerHTML={{
                __html: formatDescription(singleBlog.desc),
              }}></p>
            <br />
            <Link
              href="/podcast"
              className="bg-orange-500 px-8 w-fit py-4 rounded-md flex m-auto text-white text-xl">
              Back To Blog
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No blog found</p>
      )}
    </div>
  );
};

export default SinglePodcast;

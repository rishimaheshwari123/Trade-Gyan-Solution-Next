"use client"
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./globals.css";
import store from "../redux/store"
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Footer from "@/components/comman/Footer";
import Notification from "@/components/core/home/Notification";
import Complain from "@/components/trader/comman/Complain";
import useSocket from "@/socket io/useSocket";


export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(true);

  useSocket();

  useEffect(() => {
    setShowModal(true);
  }, []);

  function handleCloseModal() {
    console.log("Modal state before toggle:", showModal);
    setShowModal(false);
  }
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Notification />
          {showModal && (
            <Complain onClose={handleCloseModal} showModal={showModal} />
          )}
          {children}
          <ToastContainer />
          <Footer />

        </Provider>
      </body>
    </html>
  );
}

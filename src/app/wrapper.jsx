"use client";

import store from "../redux/store";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Footer from "../components/comman/Footer";
import Notification from "../components/core/home/Notification";
import Complain from "../components/trader/comman/Complain";
import useSocket from "../socket io/useSocket";
import {useEffect, useState} from "react";
import Navbar from "../components/comman/Navbar";
import Whatsapp from "../components/comman/Whatsapp";
import { usePathname } from 'next/navigation'
import Head from 'next/head';

const Wrapper = ({children}) => {
  const [showModal, setShowModal] = useState(true);
  useSocket();

  useEffect(() => {
    setShowModal(true);
  }, []);

  function handleCloseModal() {
    console.log("Modal state before toggle:", showModal);
    setShowModal(false);
  }

  const pathname = usePathname()
   const removeNavbar = pathname.includes("investor") || pathname.includes("trader")
   const isAdminRoute = pathname.startsWith("/admin") || pathname.includes("profile") || pathname.includes("subscription") || pathname.includes("chats") ;

  return (
    <Provider store={store}>
    {!isAdminRoute &&  <Notification />}
    { removeNavbar || isAdminRoute ?  null : <Navbar />}
      {showModal && (
        <Complain onClose={handleCloseModal} showModal={showModal} />
      )}
      {children}
      <ToastContainer />
    {!isAdminRoute &&  <Footer />}

 
      <div className="fixed bottom-0 md:left-10 left-0 z-50">
        <Whatsapp />
      </div>
    </Provider>
  );
};

export default Wrapper;

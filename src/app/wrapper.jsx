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
  return (
    <Provider store={store}>
      <Notification />
      <Navbar/>
      {showModal && (
        <Complain onClose={handleCloseModal} showModal={showModal} />
      )}
      {children}
      <ToastContainer />
      <Footer />
    </Provider>
  );
};

export default Wrapper;

import Link from "next/link";
import React from "react";
import {FaWhatsapp} from "react-icons/fa";

function Whatsapp() {
  return (
    <div className="btn-pink">
      <Link
        href="https://wa.me/917771004878"
        className=" flex justify-center items-center gap-2">
        Ask To Us
        <FaWhatsapp />
      </Link>
    </div>
  );
}

export default Whatsapp;

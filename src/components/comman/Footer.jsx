"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link"; // Use Next.js Link component

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm sm:text-base">
            An Investment advisory company supporting investors to diversify
            their investments and reap earnings through its profound enterprise
            knowledge and an eager eye for detail that allows it to anticipate
            the market waft efficiently.
          </p>
          <div className="mt-4 flex items-center">
            <FaPhone className="mr-2" />
            <span>+917771004878</span>
          </div>
          <div className="mt-4 flex items-center">
            <FaPhone className="mr-2" />
            <span>+917771004879</span>
          </div>
          <p className="text-sm mt-1 sm:text-base">info@tradegyan.co</p>
        </div>

        {/* Client Zone */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Client Zone</h3>
          <ul className="text-sm sm:text-base space-y-2">
            <li>
              <Link href="/faq">
                <p className="hover:text-yellow-400">FAQs</p>
              </Link>
            </li>
            <li>
              <Link href="/risk-profile">
                <p className="hover:text-yellow-400">Risk Profile</p>
              </Link>
            </li>
            <li>
              <Link href="/refund-policy">
                <p className="hover:text-yellow-400">Refund Policy</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:text-yellow-400">Contact Us</p>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer-and-terms">
                <p className="hover:text-yellow-400">Complaint Data</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Know More About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Know More About
          </h3>
          <ul className="text-sm sm:text-base space-y-2">
            <li>
              <Link href="/disclaimer-and-terms">
                <p className="hover:text-yellow-400">Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer-and-terms">
                <p className="hover:text-yellow-400">
                  Disclaimer And Disclosure
                </p>
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions">
                <p className="hover:text-yellow-400">Terms & Conditions</p>
              </Link>
            </li>
            <li>
              <Link href="/career">
                <p className="hover:text-yellow-400">Career</p>
              </Link>
            </li>
            <li>
              <Link href="/podcast">
                <p className="hover:text-yellow-400">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:text-yellow-400">About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/investment-charter">
                <p className="hover:text-yellow-400">Investment Charter</p>
              </Link>
            </li>
            <li>
              <Link href="/complaint-escalation">
                <p className="hover:text-yellow-400">Complaint Escalation</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 justify-center gap-4">
              <Link href="https://www.facebook.com/tradegyansolutions?mibextid=ZbWKwL">
                <p className="text-2xl text-blue-600 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  <FaFacebook />
                </p>
              </Link>
              <Link href="https://www.instagram.com/tradegyan">
                <p className="text-2xl text-pink-600 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  <FaInstagram />
                </p>
              </Link>
              <Link href="https://wa.me/7771004878">
                <p className="text-2xl text-green-500 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  <FaWhatsapp />
                </p>
              </Link>
              <Link href="#">
                <p className="text-2xl text-blue-400 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  <FaTwitter />
                </p>
              </Link>
              <Link href="#">
                <p className="text-2xl text-blue-700 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  <FaLinkedin />
                </p>
              </Link>
              <Link href="tel:+7771004878">
                <p className="text-2xl text-green-600 bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  <FaPhone />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t border-gray-700 pt-4 p-4">
        <div className="max-w-7xl mx-auto text-sm sm:text-base flex flex-col gap-2">
          <p>
            Copyright © 2017 Trade Gyan Solutions (Investment Advisor #
            INA000008808)2024. All rights reserved. Himanshu Muralia, Proprietor
            of Trade Gyan Solutions.
          </p>
          <p>
            Contact Details :+91 7771004878 E-Mail id :-{" "}
            <a href="mailto: info@tradegyan.co"> info@tradegyan.co</a>
          </p>
          <p>
            Principal Officer Contact Details :{" "}
            <a href="tel:917771004878">+917771004878</a>
          </p>
          <p>
            E-Mail id :-{" "}
            <a href="mailto: info@tradegyan.co"> info@tradegyan.co</a>
          </p>
          <p>SEBI Registration Number: INA000008808</p>
          <p>Trade Name : TRADE GYAN SOLUTIONS</p>
          <p>Type of Registration : Individual.</p>
          <p>Validity of Registration- Nov. 2017 to Perpetual.</p>
          <p>
            Address :- Plot No.9, Sector C, Govindpura Industrial Area, J.K.
            Road, Bhopal, Madhya Pradesh, 462023
          </p>
          <p>
            Registration granted by SEBI, membership of BASL and certification
            from NISM in no way guarantee performance of the intermediary or
            provide any assurance of returns to investors.
          </p>
          <p>
            Standard Warning:- “Investment in securities market are subject to
            market risks. Read all the related documents carefully before
            investing.”
          </p>
          <p>
            SEBI Office Address - 305, 3rd Floor, Satguru Parinay, AB Rd,
            Opposite C-21 Mall, Indore, Madhya Pradesh 452010
          </p>
          <hr />
          <p className="text-center">Made By TG IT Team❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

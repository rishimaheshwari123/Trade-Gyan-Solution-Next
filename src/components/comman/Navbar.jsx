"use client";
import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserCircle,
} from "react-icons/fa";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { navLinks } from "../../data/navbar";
import image from "../../assets/tradegyan.png";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state.auth);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setToken(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    Router.push("/client-login");
    setIsOpen(false);
  };

  const goToProfile = () => {
    Router.push("/profile");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div>
      <nav className="bg-white text-black p-1 border-b-2 relative">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={image}
                alt="logo"
                className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto max-w-full"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.path}
                    className="flex items-center font-bold hover:text-[#efcc41]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {link.sublinks && (
                      <FaChevronDown className="ml-1 mt-[3px]" />
                    )}
                  </Link>
                  {link.sublinks && activeDropdown === index && (
                    <ul className="absolute left-0 z-50 top-4 mt-2 w-40 bg-white text-black shadow-lg">
                      {link.sublinks.map((sublink, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-2 px-4 font-bold hover:text-[#efcc41]"
                        >
                          <Link href={sublink.path}>{sublink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Conditional Buttons */}
              {token && user ? (
                <>
                  {user?.role === "Admin" && (
                    <li>
                      <Link
                        href="/admin/dashboard"
                        className="px-4 py-2 font-bold bg-blue-500 text-white rounded"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {user?.role === "user" && (
                    <li>
                      <Link
                        href="https://onboarding.dashboardfinreport.com/TradeGyan/onb_process.aspx?a=t830uy5QEhGwzE+RR1buWS3drG1f1V/0LDkpH9b1rKY=&p="
                        className="px-2 py-2 font-bold bg-red-500 text-white rounded"
                      >
                        Subscribe
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <li>
                  <Link
                    href="/client-login"
                    className="px-4 py-2 font-bold bg-green-500 text-white rounded"
                  >
                    Client-Login
                  </Link>
                </li>
              )}

              {token && user?.role === "user" && (
                <li
                  onClick={goToProfile}
                >
                 <Link href='/profile'
                  className="flex items-center space-x-2 cursor-pointer border-2 p-4 rounded-full"
                 
                 >
                 <FaUserCircle size={28} className="text-orange-700" />
                 <span className="font-bold">Profile</span>
                 </Link>
                </li>
              )}
            </ul>

            {/* Mobile Sidebar Button */}
            <div className="lg:hidden">
              <button onClick={toggleSidebar}>
                {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Mobile Sidebar */}
          <div
            className={`lg:hidden fixed top-0 left-0 z-50 w-64 h-full bg-white p-4 border-r-4 border-gray-300 transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Image src={image} alt="not found" className="h-14" />
              <button onClick={toggleSidebar}>
                <FaTimes size={24} />
              </button>
            </div>
            <hr className="border-b border-gray-300 mb-4" />

            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <Link
                      href={link.path}
                      className="block text-black font-bold"
                      onClick={toggleSidebar}
                    >
                      {link.name}
                    </Link>
                    {link.sublinks && <FaChevronDown />}
                  </div>
                  {link.sublinks && activeDropdown === index && (
                    <ul className="mt-2 bg-blue-400 space-y-2">
                      {link.sublinks.map((sublink, subIndex) => (
                        <li key={subIndex} className="py-1 px-4">
                          <Link
                            href={sublink.path}
                            className="text-white"
                            onClick={toggleSidebar}
                          >
                            {sublink?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {token && user ? (
                <>
                  {user.role === "Admin" && (
                    <li>
                      <Link
                        href="/admin/dashboard"
                        className="block text-blue-500 font-bold"
                        onClick={toggleSidebar}
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                  {token && user?.role === "user" && (
                    <li
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={goToProfile}
                    >
                      <FaUserCircle size={24} className="text-gray-700" />
                      <span className="font-bold">{user.name}</span>
                    </li>
                  )}
                  {user?.role === "user" && (
                    <li>
                      <Link
                        href="https://onboarding.dashboardfinreport.com/TradeGyan/onb_process.aspx?a=t830uy5QEhGwzE+RR1buWS3drG1f1V/0LDkpH9b1rKY=&p="
                        className="px-2 py-2 font-bold bg-red-500 text-white rounded"
                      >
                        Subscribe Now
                      </Link>
                    </li>
                  )}

                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 text-center font-bold bg-red-500 text-white rounded"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    href="/client-login"
                    className="block text-center font-bold bg-green-500 text-white rounded"
                    onClick={toggleSidebar}
                  >
                    Client-Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

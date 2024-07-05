import React from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="container ml-auto fixed z-30 top-0 left-0 bottom-0 w-[70%] md:w-[400px] bg-white pt-[30px] shadow-lg translate-x-[-100%]">
        <ul className="font-[700] text-[18px] mt-0">
          <li>
            <Link to="/">
              <motion.img
                src="/images/logo.svg"
                alt=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="pb-[30px]"
              />
            </Link>
          </li>
          <motion.li
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="py-[15px]">
            <Link to="/aboutUs">About Us</Link>
          </motion.li>
          <motion.li
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="py-[15px]">
            <Link to="/services">Services</Link>
          </motion.li>
          <motion.li
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="py-[15px]">
            <Link to="/work">Work</Link>
          </motion.li>
          <motion.li
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="py-[15px]">
            <Link to="/news">News</Link>
          </motion.li>
          <motion.li
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="py-[15px]">
            <Link to="/contacts">Contacts</Link>
          </motion.li>
          <li>
            <Link
              to="/contacts"
              className="flex flex-col md:flex-row gap-[10px] py-[15px]">
              <img
                src="/images/phone.svg"
                alt=""
                className="w-[40px] md:w-auto"
              />
              <motion.div
                whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
                className="flex flex-col">
                <span className="font-[700] text-[14px]">Call us</span>
                <span className="font-[400] text-[18px] text-nowrap">
                  (405) 555-0128
                </span>
              </motion.div>
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="flex flex-col md:flex-row gap-[10px] py-[15px]">
              <img
                src="/images/chat.svg"
                alt=""
                className="w-[40px] md:w-auto"
              />
              <motion.div
                whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
                className="flex flex-col">
                <span className="font-[700] text-[14px]">Talk to us</span>
                <span className="font-[400] text-[18px]">
                  hello@createx.com
                </span>
              </motion.div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="shadw"></div>
    </>
  );
};

export default Menu;

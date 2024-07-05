import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center text-customGray h-[80px]">
      <Link to="/">
        <motion.img
          src="/images/logo.svg"
          alt=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex gap-[30px] font-[700] text-[16px]">
          <li>
            <Link
              to="/aboutUs"
              className="hover:text-primary transition-all duration-500">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-primary transition-all duration-500">
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className="hover:text-primary transition-all duration-500">
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="hover:text-primary transition-all duration-500">
              News
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="hover:text-primary transition-all duration-500">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="group gap-[30px] hidden lg:flex">
        <Link to="/contacts" className="flex gap-[10px]">
          <img src="/images/phone.svg" alt="" />
          <motion.div
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="flex flex-col">
            <span className="font-[700] text-[14px]">Call us</span>
            <span className="font-[400] text-[18px] text-nowrap">
              (405) 555-0128
            </span>
          </motion.div>
        </Link>
        <Link to="/contacts" className="flex gap-[10px]">
          <img src="/images/chat.svg" alt="" />
          <motion.div
            whileHover={{ color: "#FF5A30", transition: { duration: 0.3 } }}
            className="flex flex-col">
            <span className="font-[700] text-[14px]">Talk to us</span>
            <span className="font-[400] text-[18px]">hello@createx.com</span>
          </motion.div>
        </Link>
      </div>
      <div className="relative lg:hidden">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

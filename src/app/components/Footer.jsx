import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between"><Link  href={"/"}>
        <span className="text-slate-200 bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 font-semibold">iLunaweb</span></Link>
        <p className="text-slate-200">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

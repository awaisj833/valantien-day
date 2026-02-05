import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaInstagram, FaWeixin } from "react-icons/fa";
import FooterBg from "../assets/images/FooterBg.png";
import CurrencySelector from "../components/CurrencySelector";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../store/slices/globalSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.global);
  return (
    <footer className="w-full relative overflow-hidden bg-[#F0E5DB]">
      {/* Top Section */}
      <div className="relative w-full py-16 px-4 md:px-8 lg:px-16 border-b border-[#ded4ca]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${FooterBg})` }}
        ></div>
        {/* Background Overlay - simulating the .background class */}
        <div className="absolute inset-0 bg-[#ded4ca] opacity-0 z-0 h-full w-full"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Text */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-fondamento text-secondary text-3xl md:text-[30px] leading-[42px] mb-4">
              Keep Up With The Most Recent Styles
            </h2>
            <p className="font-fondamento text-[#736c69] text-base leading-[26px]">
              Pellentesque habitant morbi tristique senectus et. Massa Nisi Rhoncus Odio
              Elit Metus Et Tortor. Quisque Eget Libero Pretium.
            </p>
          </div>

          {/* Subscribe Form */}
          <form className="w-full max-w-[680px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-end gap-5">
              <input 
                type="email" 
                placeholder="Enter Your Email Here"
                className="flex-1 bg-transparent border-b border-[#aca09a] outline-none font-fondamento text-secondary text-base placeholder-secondary/55 py-3 pl-2"
              />
              <button type="submit" className="bg-[#001f33] text-white px-10 py-3 font-fondamento font-medium text-base hover:bg-[#001f33]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="relative w-full py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Our Shop */}
          <div className="flex flex-col gap-4">
            <h3 className="font-fondamento text-secondary text-[19.4px]">Our Shop</h3>
            <div className="flex flex-col gap-2 font-fondamento text-[#736c69] text-base">
              <Link to="#" className="hover:text-secondary">Ordering Info Summary</Link>
              <Link to="#" className="hover:text-secondary">Measurement Guide</Link>
              <Link to="#" className="hover:text-secondary">Payment Methods</Link>
              <Link to="#" className="hover:text-secondary">Shipping Charges And Delivery</Link>
              <Link to="#" className="hover:text-secondary">Returns And Exchanges</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-fondamento text-secondary text-[19.4px]">Contact Us</h3>
            <div className="flex flex-col gap-2 font-fondamento text-[#736c69] text-base">
              <Link to="#" className="hover:text-secondary">Submit A Ticket</Link>
              <Link to="#" className="hover:text-secondary">Customer Service</Link>
              <Link to="#" className="hover:text-secondary">Wholesale And Franchises</Link>
              <Link to="#" className="hover:text-secondary">Khadhija Affiliate Program</Link>
            </div>
          </div>

           {/* Follow Us On */}
           <div className="flex flex-col gap-4">
            <h3 className="font-fondamento text-secondary text-[19.4px]">Follow Us On</h3>
            <div className="flex flex-col gap-2 font-fondamento text-[#736c69] text-base">
              <Link to="#" className="flex items-center gap-2 hover:text-secondary"><span>Facebook</span></Link>
              <Link to="#" className="flex items-center gap-2 hover:text-secondary"><span>Youtube</span></Link>
              <Link to="#" className="flex items-center gap-2 hover:text-secondary"><span>Whatsapp</span></Link>
              <Link to="#" className="flex items-center gap-2 hover:text-secondary"><span>Instagram</span></Link>
              <Link to="#" className="flex items-center gap-2 hover:text-secondary"><span>Wechat</span></Link>
            </div>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-fondamento text-secondary text-[19.4px]">About Us</h3>
            <p className="font-fondamento text-[#736c69] text-base leading-[26px]">
              Etiam Commodo A Mi Ullamcorper Faucibus.<br />
              Vestibulum Ac Ante Sed Purus Ornare Imperdiet. Nunc
              Lectus Augue, Tristique Id Tincidt Sit Amet, Molestie
              Nec Sapien. Quisque Finibus Aliquet.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4 mt-2">
                 <FaFacebookF className="text-[#736c69] w-5 h-5 hover:text-secondary cursor-pointer" />
                 <FaInstagram className="text-[#736c69] w-5 h-5 hover:text-secondary cursor-pointer" />
                 <span className="text-[#736c69] text-lg hover:text-secondary cursor-pointer">X</span>
                 <FaYoutube className="text-[#736c69] w-5 h-5 hover:text-secondary cursor-pointer" />
                 <FaWhatsapp className="text-[#736c69] w-5 h-5 hover:text-secondary cursor-pointer" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#ded4ca] w-full py-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Currency / Payment Placeholders */}
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 font-fondamento text-secondary text-base">
                 <CurrencySelector currency={currency} setCurrency={(val) => dispatch(setCurrency(val))} className="!w-[100px] !bg-transparent !border-none" openUp={true} />
             </div>
             {/* Payment Icons Placeholder */}
             <div className="flex gap-2">
                 <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">VISA</div>
                 <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">MC</div>
                 <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">AMEX</div>
             </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 font-fondamento text-[#736c69] text-base">
            <span>&copy;</span>
            <span className="text-black font-medium">Khadija</span>
            <span>Wedding all rights Reserved</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency, setLanguage } from "../store/slices/globalSlice";
// import { logo, HeaderBg } from "../assets/images"; // Invalid import, files missing
const logo = "https://placehold.co/130x40/transparent/000000?text=LOGO";
const HeaderBg = "https://placehold.co/1920x41/001f33/ffffff?text=Header+Background";
import CurrencySelector from "../components/CurrencySelector";
import {
  ThreadsIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  XIconSocial,
  SearchIcon2,
  HeadsetIcon,
  AccountIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
  DropdownHoverIcon,
  MenuIcon,
  XIcon, // Importing XIcon for closing the menu
} from "../assets/icons/icons";

const SOCIAL_ICONS = [
  { Icon: ThreadsIcon },
  { Icon: InstagramIcon },
  { Icon: FacebookIcon },
  { Icon: YoutubeIcon },
  { Icon: XIconSocial },
];

const SHOP_MENU = [
  { to: "/wishlist", label: "Wishlist" },
  { to: "/checkout", label: "Checkout" },
  { to: "/account", label: "My Account" },
];

const PAGES_MENU = [
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
];

const CURRENCIES = ["USD, $", "INR, ₹"];
const LANGUAGES = ["English", "العربية", "简体中文", "Nederlands", "Français", "Deutsch", "Italiano"];

const NavItem = ({ to, label }) => (
  <div className="flex h-full items-center">
    <Link to={to} className="px-4 flex items-center justify-center font-fondamento text-[16px] text-black">
      {label}
    </Link>
  </div>
);

const DropdownItem = ({ to, label }) => (
  <Link to={to} className="group/item px-6 py-3 font-fondamento text-[15px] text-black hover:bg-gray-50 flex items-center">
    <DropdownHoverIcon className="w-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover/item:w-[18px] group-hover/item:opacity-100 group-hover/item:rotate-[360deg] group-hover/item:mr-2 h-[18px] text-[#001f33]" />
    {label}
  </Link>
);

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currency, language } = useSelector((state) => state.global);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  if (location.pathname === "/login") return null;

  const headerTextStyle = "font-fondamento text-black text-[16px]";
  const topText = "font-fondamento text-white text-[12px] md:text-[16px] leading-[28.8px] text-center whitespace-nowrap";

  return (
    <div className="relative w-full bg-[#F0E5DB]">
      {/* Top Bar */}
      <div
        className="w-full relative bg-cover bg-center px-4 md:px-[30px] py-1 md:h-[41px]"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <div className="absolute inset-0 bg-[#001f33] opacity-50 z-0" />
        
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
           {/* Top Text */}
           <div className="flex flex-col md:flex-row items-center gap-1 md:gap-[25px]">
              <p className={topText}>Flat 20% Off + Free Shipping</p>
              <div className="hidden md:block h-[20px] w-[2px] bg-[#dddddd]" />
              <p className={topText}>Rated 4.2 Out Of 5 Based On 5826 Reviews</p>
           </div>
           
           {/* Social Icons */}
           <div className="flex gap-4 items-center">
            {SOCIAL_ICONS.map((item, idx) => (
              <item.Icon key={idx} className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-white hover:opacity-80 cursor-pointer" />
            ))}
           </div>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="w-full bg-[#F0E5DB] border-b border-[#aca09a]">
        <div className="container mx-auto px-4 md:px-[30px] py-4 h-auto md:h-[83px] flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
            
            {/* Hamburger Menu (Mobile) */}
             <button 
               className="md:hidden p-2 -ml-2 text-black"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
             </button>

            {/* Logo */}
            <Link to="/" className="w-[100px] md:w-[130px] md:h-[40px] flex-shrink-0 mx-auto md:mx-0">
               <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </Link>

            {/* Right Icons (Mobile - partially visible or grouped) */}
             <div className="flex md:hidden items-center gap-3">
                 <Link to="/cart">
                    <ShoppingBagIcon className="w-5 h-5 text-black" />
                 </Link>
             </div>

            {/* Search Bar - Full width on mobile/tablet, centered on desktop */}
            <div className="order-last md:order-none w-full md:w-[300px] lg:w-[450px] xl:w-[600px] h-[41px] mt-2 md:mt-0">
                 <div className="w-full h-full flex items-center rounded-full border border-[#aca09a] pr-2 overflow-hidden bg-[#F0E5DB]">
                    <input 
                      type="text" 
                      placeholder="Enter Keyword" 
                      className="flex-1 ml-5 bg-transparent border-none outline-none font-fondamento text-[#736c69] text-[16px] placeholder-[#736c69]"
                    />
                    <SearchIcon2 className="h-full w-[40px] md:w-[50px] text-black" />
                 </div>
            </div>

            {/* Right Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-[10px] lg:gap-[15px] xl:gap-[30px] flex-shrink-0">
               <Link to="/help" className="flex items-center gap-2">
                 <HeadsetIcon className="w-5 h-5 text-black" />
                 <span className={headerTextStyle}>Help</span>
               </Link>
               <div className="w-[1px] h-[30px] bg-[#aca09a]" />
               <Link to="/login" className="flex items-center gap-2">
                  <AccountIcon className="w-5 h-5 text-black" />
                  <span className={headerTextStyle}>Log In</span>
               </Link>
               <div className="w-[1px] h-[30px] bg-[#aca09a]" />
               <Link to="/cart" className="flex items-center gap-2">
                  <ShoppingBagIcon className="w-5 h-5 text-black" />
                  <span className={headerTextStyle}>Cart</span>
               </Link>
            </div>

        </div>
      </div>

      {/* Navigation Bar (Desktop) */}
      <div className="hidden md:block w-full border-b border-[#aca09a] bg-[#F0E5DB]">
         <div className="container mx-auto px-4 md:px-[30px] h-[83px] flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-6 h-full flex-wrap">
                <NavItem to="/" label="Home" />
                <NavItem to="/collection" label="Collection" />
                
                {/* Shop Dropdown */}
                <div className="group relative flex h-full items-center px-4 cursor-pointer">
                   <div className="flex items-center gap-2">
                      <span className={headerTextStyle}>Shop</span>
                      <ChevronDownIcon className="w-3 h-3 text-black" />
                   </div>
                   <div className="hidden group-hover:block absolute top-[60px] left-0 w-[220px] bg-white shadow-lg z-50 py-2 border border-gray-100">
                      {SHOP_MENU.map((item) => <DropdownItem key={item.to} {...item} />)}
                   </div>
                </div>
    
                <NavItem to="/sarees" label="Sarees" />
                <NavItem to="/lehenga" label="Lehenga" />
                <NavItem to="/blog" label="Blog" />
    
                 {/* Pages Dropdown */}
                <div className="group relative flex h-full items-center px-4 cursor-pointer">
                   <div className="flex items-center gap-2">
                      <span className={headerTextStyle}>Pages</span>
                      <ChevronDownIcon className="w-3 h-3 text-black" />
                   </div>
                   <div className="hidden group-hover:block absolute top-[60px] left-0 w-[220px] bg-white shadow-lg z-50 py-2 border border-gray-100">
                      {PAGES_MENU.map((item) => <DropdownItem key={item.to} {...item} />)}
                   </div>
                </div>
            </div>

            {/* Currency & Language (Desktop) */}
            <div className="flex gap-2 lg:gap-[20px] ml-auto">
               {/* Currency */}
               {/* Currency */}
               <CurrencySelector currency={currency} setCurrency={(val) => dispatch(setCurrency(val))} />
    
               {/* Language */}
               <div className="group relative w-[120px] lg:w-[150px] h-[41px] border border-[#aca09a] cursor-pointer bg-[#F0E5DB]">
                  <div className="w-full h-full flex items-center justify-between px-3">
                     <span className={headerTextStyle}>{language}</span>
                     <ChevronDownIcon className="w-3 h-3 text-black" />
                  </div>
                  <div className="hidden group-hover:block absolute top-full -left-[1px] w-[calc(100%+2px)] bg-white border border-[#aca09a] z-50">
                     {LANGUAGES.map(l => (
                        <div 
                           key={l} 
                           onClick={() => dispatch(setLanguage(l))} 
                           className={`px-3 py-2 cursor-pointer font-fondamento text-[15px] border-b border-[#eee] last:border-none ${
                               language === l ? "bg-[#001f33] text-[#FFFFFF]" : "text-black hover:bg-gray-100"
                           }`}
                        >
                           {l}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

       {/* Mobile Menu Overlay */}
       {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-xl z-50 border-t border-gray-200 md:hidden flex flex-col p-4 animate-fadeIn">
            <Link to="/" className="py-2 border-b border-gray-100">Home</Link>
            <Link to="/collection" className="py-2 border-b border-gray-100">Collection</Link>
            
            {/* Mobile Shop Accordion (Simplified as links for now) */}
            <div className="py-2 border-b border-gray-100">
               <p className="font-bold text-gray-500 mb-2">Shop</p>
               {SHOP_MENU.map(item => (
                 <Link key={item.to} to={item.to} className="block pl-4 py-1 text-sm text-gray-700">{item.label}</Link>
               ))}
            </div>

            <Link to="/sarees" className="py-2 border-b border-gray-100">Sarees</Link>
            <Link to="/lehenga" className="py-2 border-b border-gray-100">Lehenga</Link>
            <Link to="/blog" className="py-2 border-b border-gray-100">Blog</Link>

            {/* Mobile Pages Accordion */}
            <div className="py-2 border-b border-gray-100">
               <p className="font-bold text-gray-500 mb-2">Pages</p>
               {PAGES_MENU.map(item => (
                 <Link key={item.to} to={item.to} className="block pl-4 py-1 text-sm text-gray-700">{item.label}</Link>
               ))}
            </div>

            <div className="flex flex-col gap-4 mt-4">
                 <Link to="/help" className="flex items-center gap-2 text-sm">
                    <HeadsetIcon className="w-4 h-4" /> Help
                 </Link>
                 <Link to="/login" className="flex items-center gap-2 text-sm">
                    <AccountIcon className="w-4 h-4" /> Log In
                 </Link>
            </div>
            
            {/* Mobile Currency/Language */}
            <div className="flex gap-4 mt-6">
                 <CurrencySelector currency={currency} setCurrency={(val) => dispatch(setCurrency(val))} />
                 <select 
                    value={language} 
                    onChange={(e) => dispatch(setLanguage(e.target.value))}
                    className="border p-2 rounded text-sm bg-gray-50"
                 >
                    {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                 </select>
            </div>
        </div>
       )}

    </div>
  );
};

export default Header;

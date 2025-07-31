"use client";
import "../Styles/HeaderStyle.css";
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { Tally2, Tally3, X } from 'lucide-react';

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <header className="header-section">
      <nav className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-display-flex">
            <Link className="navbar-brand" href="/">
            <Image src="/img/logo.png" className="header-logo" alt="B & B" width={300} height={200} />
          </Link>
          
          <div className="navbarnav" id="navbarNav">
           
            <div className="display-flex">
              {/* <Link className="me-3 header-btnn-top login-menu-header" href="/" >  
                Login/Join
              </Link>
              <Link className="me-3 header-btnn-top book-menu-header" href="/" >  
                Book Now
              </Link> */}
              <button onClick={toggleSidebar} className="sidebar-toggle border-0 bg-transparent ms-3">
              
                <Tally3 size={20} className="toggle-image-s" />
              </button>
              
            </div>
          </div>
          </div>
        </div>
      </nav>

      <div className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button onClick={toggleSidebar} className="close-btn">
            <X color="black" size={24} />
          </button>
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-nav">
            <li><Link href="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link href="/" onClick={toggleSidebar}>About Us</Link></li>
            <li><Link href="/" onClick={toggleSidebar}>Services</Link></li>
            <li><Link href="/" onClick={toggleSidebar}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
</header>
    
    </>
  );
};

export default MainHeader;

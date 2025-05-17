import React from 'react';
import '../styles/posfeatures.css';
import heroImg from '../assets/pos3.png';         // Hero section image
import accessImg from '../assets/login.png';      // Account Access Control section image
import salesImg from '../assets/reports.png';     // Sales Reports section image
import menuImg from '../assets/posfeatures.png';  // Core Management Features section image
import { FaUsersCog, FaUtensils, FaChartLine } from 'react-icons/fa';
import { FaUserPlus, FaSignInAlt, FaChartBar, FaBoxes} from 'react-icons/fa';

const features = [
  {
    icon: <FaUsersCog />,
    title: 'Account Management',
    desc: `The Account Management section is responsible for assigning user roles, ensuring that each user has the appropriate permissions and access levels based on their responsibilities. This helps maintain system security, streamline operations, and facilitate a seamless user experience.`,
  },
  {
    icon: <FaUtensils />,
    title: 'Menu & Inventory Management',
    desc: `Effortlessly update menu items, prices, and descriptions across locations, while gaining insights into best-sellers and customer preferences with organized, easy-to-navigate menus. Real-time stock monitoring, low inventory alerts, and historical data analysis help prevent shortages and optimize purchasing decisions.`,
  },
  {
    icon: <FaChartLine />,
    title: 'User Activity & Sales Logs',
    desc: `The system records detailed transaction logs for all sales and user activity logs for logins, logouts, and actions taken, accessible through the admin dashboard with proper credentials. Logs are securely stored for 12 months, with older entries archived safely for compliance and auditing purposes.`,
  },
];

export default function PosFeatures() {
  return (
    <div className="posfeatures-page">
      {/* Hero Section */}
      <section className="posfeatures-hero">
        <div className="hero-left">
          <h2>Sparkle POS</h2>
          <p>
            Sparkle POS is designed to keep you moving. It’s fast, intuitive, and built to speed up service, simplify checkout, and keep your lines short.
          </p>
          <a href="#features" className="hero-btn">Get Started</a>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="POS Dashboard" className="dashboard-img" />
        </div>
      </section>

      {/* Account Access Control */}
      <section className="posfeatures-section2">
        <h2>Account Access Control</h2>
        <div className="access-content">
          <div className="access-cards">
            <div className="access-card">
              <div className="access-icon-title">
                    <FaUserPlus />
                    <h3>Registration</h3>
              </div>
              <p>
                Customers and operators can create accounts by providing basic information such as name, email, phone number, and password. This ensures personalized and secure access.
              </p>
              </div>
            <div className="access-card">
                <div className="access-icon-title">
                    <FaSignInAlt />
                    <h3>Sign In/Out</h3>
                </div>
                <p>
                Authorized users can securely access their accounts using their registered credentials. Ensures secure termination of sessions to protect data privacy.
              </p>
            </div>
          </div>
          <img src={accessImg} alt="Account Access" className="access-img" />
        </div>
      </section>

      {/* Sales Reports & Inventory */}
      <section className="posfeatures-section">
        <h2>Sales Reports & Inventory</h2>
        <div className="sales-content">
          <img src={salesImg} alt="Sales and Inventory" className="sales-img" />
          <div className="sales-cards">
            <div className="sales-card">
                <div className="access-icon-title">
                    <FaChartBar />
                    <h3>Sales Dashboard</h3>
                </div>
                <p>
                    Track transactions and analyze sales trends with detailed reports. Get insights into revenue, peak hours, and top-selling items to make data-driven decisions.
                </p>
            </div>
            <div className="sales-card">
                <div className="access-icon-title">
                        <FaBoxes />
                        <h3>Inventory Tracking</h3>
                </div>
              <p>
                Stay in control of stock levels by monitoring available items in real-time. Receive alerts for low inventory and streamline restocking with ease.
              </p>
            </div>
          </div>

        </div>
      </section>

        {/* Menu Management */}
        <section className="posfeatures-section">
        <div className="menu-content">
            <img src={menuImg} alt="Menu Management" className="menu-img" />
        </div>
        </section>
        

      {/* Core Management Features */}
      <section className="posfeatures-section">
        <h2>Core Management Features</h2>
        <div className="core-features">
          {features.map((item, idx) => (
            <div className="core-card" key={idx}>
                <div className="core-header">
                    <div className="core-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    </div>
                    <p>{item.desc}</p>
            </div>

          ))}
        </div>
        
      </section>
    </div>
  );
}
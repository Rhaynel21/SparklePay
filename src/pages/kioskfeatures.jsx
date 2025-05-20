import React from 'react';
import '../styles/kioskfeatures.css';
import heroImg from '../assets/pos4.png';
import {
  FaMoneyBillWave,
  FaCoins,
  FaCashRegister,
  FaTv,
  FaTabletAlt,
  FaUndo,
  FaPrint,
  FaCamera,
  FaMobileAlt,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaMoneyBillWave />,
    title: 'Bill Acceptance Slot',
    desc: 'Accepts Philippine Peso notes for payments and dispenses change in cash.',
  },
  {
    icon: <FaCoins />,
    title: 'Coin Dispenser',
    desc: 'Dispenses coin change to customers following their payment.',
  },
  {
    icon: <FaCashRegister />,
    title: 'Coin Acceptance Slot',
    desc: 'Accepts coin payments from customers.',
  },
  {
    icon: <FaTv />,
    title: '5-Inch Display Monitor',
    desc: 'Displays the customer’s ordered items and payment details.',
  },
  {
    icon: <FaTabletAlt />,
    title: '23-Inch Touch Screen Monitor',
    desc: 'Enables customers to browse, select items, and choose payment options.',
  },
  {
    icon: <FaUndo />,
    title: 'Coin Return Button',
    desc: 'Allows jammed coins to be returned when pressed.',
  },
  {
    icon: <FaPrint />,
    title: 'Receipt Printer',
    desc: 'A thermal printer that generates official receipts for the customer.',
  },
  {
    icon: <FaCamera />,
    title: 'Camera',
    desc: 'Captures images of discount card users for verification purposes.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'POS Terminal Cradle',
    desc: 'Provides a suitable terminal slot for the handheld POS.',
  },
];

// ✅ Named export
export function SelfCheckout() {
  return (
    <div className="kioskfeatures-page">
      {/* Hero Section */}
      <section className="kioskfeatures-hero">
        <div className="hero-left">
          <h2>Sparkle Pay</h2>
          <p>
            Sparkle POS is designed to make checkout seemless. It's fast, easy to use and built to streamline orders,
            reduce wait times, and enhance customer satisfaction.
          </p>
          <button
              className="btn secondary"
              onClick={() => {
                document.getElementById('self-checkout')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </button>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="POS Dashboard" className="dashboard-img" />
        </div>
      </section>

      <section className="self-checkout-section" id="self-checkout">
        <h2>Self Checkout Features</h2>
        <div className="checkout-grid">
          {features.map((item, idx) => (
            <div className="checkout-card" key={idx}>
              <div className="icon">{item.icon}</div>
              <div className="text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
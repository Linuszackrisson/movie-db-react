import React from 'react';
import './footer.css';
import Logo from '../logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer-copyright">
        <p>&copy; 2024 Just Managing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
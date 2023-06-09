import React from "react";
import Container from "../../../Components/Container/Container";
import {  FaFutbol} from 'react-icons/fa';
import logo from "../../../assets/logo.png"

const Footer = () => {
  return (
    <div className="bg-neutral">
      <Container>
        <footer className="footer text-white p-10">
          <div>
          {/* <FaFutbol size={50} className="text-red-400"/> */}
            <p>
              Sports Arena Ltd.
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </Container>
      <div className="p-4 footer-center bg-base-300 text-base-content">
        <Container>
          <div>
            <p>Copyright © 2023 - All right reserved by Sports Arena Ltd</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

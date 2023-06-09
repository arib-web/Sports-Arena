import React from "react";
import Container from "../../../Components/Container/Container";
import { FaFacebook, FaFutbol, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/Lovepik_com-400319982-colorful-football.png";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <Container>
        <footer className="footer text-white p-10">
          <div>
            <img src={logo} className="w-28" alt="" />
            <p className="text-lg font-bold">Sports Arena Ltd.</p>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Maiores, reiciendis.
            </p>
            <div className="grid grid-flow-col gap-4">
              <a>
                <FaFacebook size={26}></FaFacebook>
              </a>
              <a>
                <FaTwitter size={26}></FaTwitter>
              </a>
              <a>
                <FaYoutube size={26}></FaYoutube>
              </a>
            </div>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Sport Arena</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Media & Brand</a>
            <a className="link link-hover">News</a>
            <a className="link link-hover">Sponsor</a>
          </div>
          <div>
            <span className="footer-title">Contact US</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
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

import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom"; // Fixed import

export default function Navbar() {
  return (
    <div>
      <nav className={`${styles.navbar} navbar-expand-lg py-2`}>
        <div
          className={`d-flex justify-content-around flex-lg-row flex-column`}
        >
          <div
            className={`logoContainer d-flex justify-content-around col-lg-3 `}
          >
            <div
              className={`${styles.logo} col-4 d-flex justify-content-center`}
            >
              <img
                src={logo}
                alt="Gamma"
                width="85"
                height="70"
                className={`object-fit-contain`}
              />
              <p className={`mt-3 ${styles.logoname}`}>GAMMA</p>
            </div>
            <button
              className={`navbar-toggler`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon`}></span>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse col-lg-9`}
            id="navbarSupportedContent"
          >
            <ul
              className={`navbar-nav col-lg-4 ms-auto mb-2 mb-lg-0 text-center`}
            >
              <li className={`nav-item mx-4 my-1`}>
                <Link className={`nav-link active`} to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item mx-4 my-1`}>
                <Link className={`nav-link active`} to="/about">
                  About
                </Link>
              </li>
              <li className={`nav-item mx-4 my-1`}>
                <Link className={`nav-link active`} to="/doctors">
                  Doctors
                </Link>
              </li>
              <li className={`nav-item mx-4 my-1`}>
                <Link className={`nav-link active`} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <form className="d-flex col-lg-6 justify-content-center">
              <Link
                className="btn btn-outline-light mx-2 px-3 text-light"
                to="/login"
              >
                Log In
              </Link>
              <Link
                className="btn btn-outline-light mx-2 px-3 text-light"
                to="/signup"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

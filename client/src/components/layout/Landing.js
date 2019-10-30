import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            <i>Pleronix</i>
            <i>
              <b style={{ color: "green", fontWeight: "bold" }}>pro</b>
            </i>
          </h1>
          <p className="lead">Your Dashboard for Competitive Intelligence</p>
          <div className="buttons">
            <Link to="register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

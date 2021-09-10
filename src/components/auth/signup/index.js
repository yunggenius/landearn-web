import React from "react";
import SocialButtons from "../social-buttons";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../../responsive";

const Signup = () => {
    const isSmallMobile = useMediaQuery({
      query: mediaQueries.lessTextQuery,
    });

    let headerText = "Register with this simple form";
    if (isSmallMobile) {
      headerText = "Register with this form";
    }
  return (
    <div className="auth-form">
      <div className="auth-header axiforma-regular-bold-black-16px">
        {headerText}
      </div>
      <div className="auth-inputs">
        <input type="text" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <input
          type="text"
          placeholder="Referral (optional)"
          className="auth-input"
        />

        <div className="continue-button">
          <div className="button-text">Continue</div>
        </div>

        <div className="division">
          <div className="line"></div>
          <div className="middle-or axiforma-medium-black-12px">or</div>
          <div className="line"></div>
        </div>

        <SocialButtons />
      </div>
    </div>
  );
};

export default Signup;
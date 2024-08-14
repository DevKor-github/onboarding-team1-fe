/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: "dark" | "light";
  className: any;
  vectorClassName: any;
  vector: string;
  divClassName: any;
}

export const LogoM = ({
  color,
  className,
  vectorClassName,
  vector = "/img/vector.svg",
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`w-[78px] h-[17px] relative ${className}`}>
      <img
        className={`w-[17px] left-0 top-0 h-[17px] absolute ${vectorClassName}`}
        alt="Vector"
        src={color === "light" ? "/img/vector-1.svg" : vector}
      />
      <div
        className={`[font-family:'Montserrat',Helvetica] left-[19px] tracking-[0] text-[13px] top-0 font-bold text-center leading-[normal] absolute ${
          color === "light" ? "text-labellabel-98" : "text-labellabel-50"
        } ${divClassName}`}
      >
        DEVKOR
      </div>
    </div>
  );
};

LogoM.propTypes = {
  color: PropTypes.oneOf(["dark", "light"]),
  vector: PropTypes.string,
};

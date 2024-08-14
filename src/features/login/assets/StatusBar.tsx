/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  timeClassName: any;
  levelsClassName: any;
  cap: string;
  wifi: string;
  cellularConnection: string;
}

export const StatusBar = ({
  className,
  timeClassName,
  levelsClassName,
  cap = "/img/cap.svg",
  wifi = "/img/wifi.svg",
  cellularConnection = "/img/cellular-connection.svg",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[390px] h-[54px] ${className}`}>
      <div className={`absolute w-[139px] h-[54px] top-0 left-0 ${timeClassName}`}>
        <div className="absolute w-[37px] top-[17px] left-[52px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-labelsprimary text-[17px] text-center tracking-[0] leading-[22px]">
          9:41
        </div>
      </div>
      <div className={`absolute w-[139px] h-[54px] top-0 left-[251px] ${levelsClassName}`}>
        <div className="absolute w-[27px] h-[13px] top-[23px] left-[81px]">
          <div className="absolute w-[25px] h-[13px] top-0 left-0 rounded-[4.3px] border border-solid border-labelsprimary">
            <div className="relative w-[21px] h-[9px] top-px left-px bg-labelsprimary rounded-[2.5px]" />
          </div>
          <img className="absolute w-px h-1 top-[5px] left-[26px]" alt="Cap" src={cap} />
        </div>
        <img className="absolute w-[17px] h-3 top-6 left-[57px]" alt="Wifi" src={wifi} />
        <img className="absolute w-[19px] h-3 top-6 left-[30px]" alt="Cellular connection" src={cellularConnection} />
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  cap: PropTypes.string,
  wifi: PropTypes.string,
  cellularConnection: PropTypes.string,
};

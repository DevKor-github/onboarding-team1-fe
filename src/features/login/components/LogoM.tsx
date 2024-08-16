/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

interface Props {
  color: "light"| "dark" ;
  className: any;
  vectorClassName: any;
  vector: string;
  divClassName: any;
}

export const LogoM = ()=> {
  return (
    <div className="flex items-center w-[234px] gap-[6px]">
      <img className="flex "
      alt="logo" src = "src/features/login/assets/vector-2.svg"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
      <div className="text-[39px] text-[#505156] text-center font-montserrat font-bold leading-none">
        DEVKORD
      </div>
    </div>
  );
};


export default LogoM;
import MainLogo from '@assets/main_logo.svg';

interface Props {
  size: string;
  fontSize: number;
}

export const LogoM = () => {
  return (
    <div className="flex w-[234px] items-center gap-[6px]">
      <MainLogo />
    </div>
  );
};

export default LogoM;

import {
  VscSourceControl,
  VscSync,
  VscError,
  VscWarning,
} from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-fill text-fillText rounded-b-xl">
      <div className="flex flex-row py-1 px-6 gap-4 items-center">
        <div className="flex justify-center items-center gap-1">
          <VscSourceControl />
          <span>main</span>
        </div>
        <VscSync />
        <div className="flex justify-center items-center gap-1">
          <VscError />
          <span>0</span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <VscWarning />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

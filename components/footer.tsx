import {
  VscSourceControl,
  VscSync,
  VscError,
  VscWarning,
  VscBell,
} from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-fill text-fillText rounded-b-xl flex justify-between">
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
      <div className="flex flex-row py-1 px-6 gap-4 items-center">
        <div>
          <span>Ln 1, Col 1</span>
        </div>
        <div>
          <span>Spaces: 2</span>
        </div>
        <div>
          <span>UTF-8</span>
        </div>
        <div>
          <span>LF</span>
        </div>
        <div>
          <span>Typescript</span>
        </div>
        <div>
          <span>Prettier</span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <VscBell />
        </div>
      </div>
    </div>
  );
};

export default Footer;

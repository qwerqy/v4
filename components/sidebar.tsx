import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="min-h-screen px-2 bg-fill text-fillText py-4 flex flex-col justify-between ">
      <div className="items-center flex flex-col gap-10">
        <VscFiles size={"2.4rem"} />
        <VscSearch size={"2.4rem"} />
        <VscSourceControl size={"2.4rem"} />
      </div>
      <div className="items-center flex flex-col gap-10">
        <VscAccount size={"2.4rem"} />
        <VscSettingsGear size={"2.4rem"} />
      </div>
    </div>
  );
};

export default Sidebar;

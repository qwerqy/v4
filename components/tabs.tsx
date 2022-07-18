import { VscClose, VscEllipsis } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { ReactNode } from "react";

interface TabProps {
  icon: ReactNode;
  title: string;
}

const Tab = (props: TabProps) => (
  <div className="flex items-center gap-2">
    {props.icon}
    <span>{props.title}</span>
    <VscClose />
  </div>
);

const Tabs = () => {
  return (
    <div className="text-fillText flex py-4 items-center px-2">
      <div className="flex grow">
        <Tab title="index.tsx" icon={<SiTypescript color="#43728D" />} />
      </div>
      <div>
        <VscEllipsis />
      </div>
    </div>
  );
};

export default Tabs;

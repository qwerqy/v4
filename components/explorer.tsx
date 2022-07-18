import Tree, { ReactTreeTheme } from "@naisutech/react-tree";
import { VscFolderOpened, VscJson, VscChevronRight } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

const data = [
  {
    id: 12345677,
    parentId: null,
    label: "AMINROSLAN",
  },
  {
    id: 12345678,
    parentId: 12345677,
    label: "src",
    items: [
      {
        id: 87654321,
        label: "home.tsx",
        parentId: 12345678,
      },
      {
        id: 87654322,
        label: "work.tsx",
        parentId: 12345678,
      },
      {
        id: 87654323,
        label: "package.json",
        parentId: 12345678,
      },
    ],
  },
];

const Explorer = () => {
  return (
    <div className="min-h-screen bg-base text-fillText py-4 hidden lg:block">
      <div>
        <span className="font-extrabold ml-10">EXPLORER</span>
      </div>
      <Tree
        nodes={data}
        customTheme={customTheme}
        theme="base"
        IconRenderer={({ data, type }) => {
          if (type === "node") {
            if (data?.label === "AMINROSLAN") {
              return <VscChevronRight />;
            }
            return <VscFolderOpened />;
          }

          if (type === "leaf") {
            if (data?.label === "package.json") {
              return <VscJson color="#9DA038" />;
            }
            return <SiTypescript color="#43728D" />;
          }

          return <div />;
        }}
      />
    </div>
  );
};

const customTheme: { [key: string]: ReactTreeTheme } = {
  base: {
    text: "", // text color
    bg: "", // background color of whole tree
    indicator: "transparent", // open folder indicator color
    separator: "transparent", // row seperator color
    icon: "#D0D0D0", // fill & stroke color of default icons - has no effect when using custom icons
    selectedBg: "#3f464e", // background of selected element
    selectedText: "#fafafa", // text color of selected element
    hoverBg: "#505a63", // background of hovered element
    hoverText: "#fafafa", // text color of hovered element
    accentBg: "#2d3439", // background of empty folder element
    accentText: "#999", // text color of empty folder element
    textSize: "default", // preferred text size
  },
};

export default Explorer;

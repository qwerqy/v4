import Tree, { ReactTreeTheme } from "@naisutech/react-tree";
import { VscFolderOpened, VscJson } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

const data = [
  {
    id: 12345678,
    parentId: null,
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
    <div className="min-h-screen bg-base w-72 text-fillText py-4">
      <div>
        <span>EXPLORER</span>
      </div>
      <Tree
        nodes={data}
        customTheme={customTheme}
        theme="base"
        IconRenderer={({ data, type }) => {
          if (type === "node") {
            return <VscFolderOpened />;
          }

          if (type === "leaf") {
            if (data?.label === "package.json") {
              return <VscJson />;
            }
            return <SiTypescript />;
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

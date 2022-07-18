import Image from "next/image";
import Explorer from "../components/explorer";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Overview from "../components/overview";
import Sidebar from "../components/sidebar";
import Tabs from "../components/tabs";

const DefaultLayout: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <>
      <div className="fixed h-screen w-screen overflow-hidden top-0">
        <Image
          src="/bg.png"
          layout="fill"
          alt="colorful"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="bg-base sm:w-5/6 mx-auto sm:my-10 sm:rounded-md drop-shadow-xl relative">
        <Nav />
        <div className="flex">
          <Sidebar />
          <Explorer />
          <div>
            <Tabs />
            <div className="flex w-full h-full">
              <main className="px-2 py-1 grow overflow-x-auto">{children}</main>
              <Overview />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;

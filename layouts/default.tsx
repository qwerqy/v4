import Explorer from "../components/explorer";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Overview from "../components/overview";
import Sidebar from "../components/sidebar";
import Tabs from "../components/tabs";

const DefaultLayout: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <div className="bg-base container mx-auto my-20 rounded-md drop-shadow-xl">
      <Nav />
      <div className="flex">
        <Sidebar />
        <Explorer />
        <div>
          <Tabs />
          <div className="flex">
            <main className="px-2 py-1 grow">{children}</main>
            <Overview />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

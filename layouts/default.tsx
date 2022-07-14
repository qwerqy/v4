import Footer from "../components/footer";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";

const DefaultLayout: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <div className="bg-base container mx-auto my-20 rounded-md drop-shadow-xl">
      <Nav />
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

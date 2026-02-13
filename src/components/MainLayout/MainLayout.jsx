import { Outlet } from "react-router-dom";
import CollapsibleExample from "../navbar/navbar";
import Footer from "../footer/Footer";

function MainLayout({ setShowLogin }) {
  return (
    <>
      <CollapsibleExample setShowLogin={setShowLogin} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;

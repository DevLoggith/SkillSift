import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-[1_0_auto] max-w-7xl items-center px-3 py-12 my-12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

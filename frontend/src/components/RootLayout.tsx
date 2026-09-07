import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-[1_0_auto]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

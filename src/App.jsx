import React from "react";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

import Navbar from "./Pages/Shared/Navbar/Navbar";
import Main from "../src/Layout/Main";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto bg-green-50">
        <Toaster />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

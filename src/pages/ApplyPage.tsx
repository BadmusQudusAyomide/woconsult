import React from "react";
import Header from "../components/Header";
import Apply from "../components/Apply";
import Footer from "../components/Footer";

const ApplyPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Apply />
      </main>
      <Footer />
    </div>
  );
};

export default ApplyPage;

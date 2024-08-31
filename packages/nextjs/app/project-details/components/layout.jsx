import React from "react";
import Footer from "../../landing/components/Footer";
import Navbar from "../../landing/components/Navbar";

function ProjectLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default ProjectLayout;

import React, { useRef, useState, useEffect } from "react";

const NavbarScroll = () => {
  // Refs for sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // State to track active section
  const [active, setActive] = useState("section1");

  // Scroll to section
  const scrollToSection = (sectionRef, name) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActive(name);
  };

  // Highlight section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // Offset for nav

      if (section3Ref.current.offsetTop <= scrollPos) {
        setActive("section3");
      } else if (section2Ref.current.offsetTop <= scrollPos) {
        setActive("section2");
      } else {
        setActive("section1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#333",
          color: "white",
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
          zIndex: 1000,
        }}
      >
        <button
          style={{
            background: active === "section1" ? "#555" : "transparent",
            color: "white",
            border: "none",
            margin: "0 10px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection(section1Ref, "section1")}
        >
          Section 1
        </button>
        <button
          style={{
            background: active === "section2" ? "#555" : "transparent",
            color: "white",
            border: "none",
            margin: "0 10px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection(section2Ref, "section2")}
        >
          Section 2
        </button>
        <button
          style={{
            background: active === "section3" ? "#555" : "transparent",
            color: "white",
            border: "none",
            margin: "0 10px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection(section3Ref, "section3")}
        >
          Section 3
        </button>
      </nav>

      {/* Spacer for fixed nav */}
      <div style={{ height: "60px" }}></div>

      {/* Sections */}
      <div
        ref={section1Ref}
        style={{ height: "500px", background: "#f99", padding: "20px" }}
      >
        <h2>Section 1</h2>
        <p>Content for Section 1</p>
      </div>
      <div
        ref={section2Ref}
        style={{ height: "500px", background: "#9f9", padding: "20px" }}
      >
        <h2>Section 2</h2>
        <p>Content for Section 2</p>
      </div>
      <div
        ref={section3Ref}
        style={{ height: "500px", background: "#99f", padding: "20px" }}
      >
        <h2>Section 3</h2>
        <p>Content for Section 3</p>
      </div>
    </>
  );
};

export default NavbarScroll;

import React, { useRef } from 'react'

const Scroll_SectionThreePages = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    function scrollToSection1() {
        section1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
    function scrollToSection2() {
        section2Ref.current.scrollIntoView({behavior: "smooth"});
    }
    function scrollToSection3() {
        section3Ref.current.scrollIntoView({behavior: "smooth"})
    }
  return (
    <>
     <div style={{ padding: "20px" }}>
      {/* Buttons to scroll */}
      <button onClick={scrollToSection1}>Go to Section 1</button>
      <button onClick={scrollToSection2}>Go to Section 2</button>
      <button onClick={scrollToSection3}>Go to Section 3</button>

      {/* Spacer */}
      <div style={{ height: "50px" }}></div>

      {/* Sections */}
      <div
        ref={section1Ref}
        style={{ height: "300px", background: "#f99", marginBottom: "20px" }}
      >
        Section 1
      </div>
      <div
        ref={section2Ref}
        style={{ height: "300px", background: "#9f9", marginBottom: "20px" }}
      >
        Section 2
      </div>
      <div
        ref={section3Ref}
        style={{ height: "300px", background: "#99f", marginBottom: "20px" }}
      >
        Section 3
      </div>
    </div>
    </>
  )
}

export default Scroll_SectionThreePages;
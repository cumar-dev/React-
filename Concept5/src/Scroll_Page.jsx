import React, { useRef } from 'react'

const Scroll_Page = () => {
    const sectionRef = useRef(null);
    function scrollSection() {
        sectionRef.current.scrollIntoView({behavior: "smooth"});
    }
  return (
    <>
    <button onClick={scrollSection}>Scroll down</button>
    <div style={{height: "500px"}}></div>
    <div ref={sectionRef} style={{height: "200px", background: "#eee"}}>
        scroll target section
    </div>
    </>
  )
}

export default Scroll_Page;
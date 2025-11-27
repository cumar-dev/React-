import React, { useRef } from 'react'

const Scroll = () => {
    const sectionRef = useRef(null);
    const scrollSection = ()=> {
        sectionRef.current.scrollIntoView({behavior: "smooth"})
    }
    const scrollTop = ()=> {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
  return (
    <>
         <button
        onClick={scrollSection}
        style={{ margin: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        Scroll Down
      </button>

      <div style={{ height: "600px" }}></div>

      {/* Target Section */}
      <div
        ref={sectionRef}
        style={{
          height: "200px",
          background: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          animation: "fadeIn 1s ease-in-out"
        }}
      >
        📍 Target Section
      </div>

      {/* Scroll Up Button */}
      <button
        onClick={scrollTop}
        style={{
          margin: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          background: "#333",
          color: "white",
          border: "none"
        }}
      >
        Scroll to Top
      </button>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default Scroll
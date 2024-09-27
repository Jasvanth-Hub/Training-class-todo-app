import React, { useState } from "react";

const ToggleTheme = () => {
  const [lighttheme, settheme] = useState(true);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:"3rem",
        backgroundColor: lighttheme === true ? "white" : "black",
      }}
    >
      <h1 style={{ color: !lighttheme ? "white" : "black" }}>⁠♡⁠⁠</h1>
      <button onClick={() => settheme(!lighttheme)} style={{ backgroundColor:lighttheme?"black":"white",color:lighttheme?"white":"black",borderRadius:"4px",padding:"6px"}}>
        {lighttheme ? "Dark theme" : "Light theme"}
      </button>
    </div>
  );
};

export default ToggleTheme;

import React from "react";

const Box3 = () => {
  console.log("Box3이 렌더링 되었습니다.");
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        color: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Box3
    </div>
  );
};

export default React.memo(Box3);

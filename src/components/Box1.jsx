const Box1 = () => {
  console.log("Box1이 렌더링 되었습니다.");
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#91c49f",
        color: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Box1
    </div>
  );
};

export default Box1;

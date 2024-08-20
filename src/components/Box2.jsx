const Box2 = () => {
  console.log("Box2이 렌더링 되었습니다.");
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        color: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Box2
    </div>
  );
};

export default Box2;

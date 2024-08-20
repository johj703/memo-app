import { useState, useCallback } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  const [count, setCount] = useState(0);
  console.log("App 컴포넌트가 렌더링 되었습니다.");

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  const initCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;

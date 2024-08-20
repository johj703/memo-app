import { useState } from "react";

const HeavyComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>나는 {value}를 가져오는 엄청 무거운 작업을 하는 컴포넌트야!</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        누르면 아래 count가 올라가요!
      </button>
      <br />
      {value}
    </div>
  );
};

export default HeavyComponent;

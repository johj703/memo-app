import { useState } from "react";

// custom hook을 만들 때 주의사항
// 1) custom hook의 함수 이름은 use로 시작하는 것이 좋아요(useInput)
// 2) 파일 이름은 원하는 대로(useInput)
const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.event);
        }}
      />
      <input
        type="text"
        name="body"
        value={body}
        onChange={(e) => {
          setBody(e.target.event);
        }}
      />
    </div>
  );
};

export default App;

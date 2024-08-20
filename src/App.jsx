import useInput from "./hooks/useInput";

// custom hook을 만들 때 주의사항
// 1) custom hook의 함수 이름은 use로 시작하는 것이 좋아요(useInput)
// 2) 파일 이름은 원하는 대로(useInput)
const App = () => {
  const [title, inChangeTitleHandler] = useInput();
  const [body, inChangeBodyHandler] = useInput();

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={inChangeTitleHandler}
      />
      <input
        type="text"
        name="body"
        value={body}
        onChange={inChangeBodyHandler}
      />
    </div>
  );
};

export default App;

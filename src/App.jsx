import { useState } from "react";

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

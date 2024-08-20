import HeavyComponent from "./components/HeavyComponent";

const App = () => {
  return (
    <div>
      <h1>useMemo</h1>
      <nav
        style={{
          backgroundColor: "yellow",
          marginBottom: "30px",
        }}
      >
        네비게이션 바
      </nav>
      <HeavyComponent />
      <footer
        style={{
          backgroundColor: "green",
          marginTop: "30px",
        }}
      >
        푸터 영역이에요.
      </footer>
    </div>
  );
};

export default App;

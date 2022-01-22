import './App.css';

function App() {
  const name = "가현";
  const naver = {
    name : "네이버",
    url : "httmps://naver.com",
  };
  return (
    <div className="App">
      <h1
        style = {{
          color: "white",
          backgroundColor: "orange",
        }}
        >
           Welcome, {name}! </h1>
        <p>{2+3}</p>
        <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;


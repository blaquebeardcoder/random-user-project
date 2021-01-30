import './App.css';

function App() {
  
  function refreshUser() {
    console.log("Clicked");
  }
  
  
  return (
    <div className="App">
      {/* <Header>
        <h1>Random User App</h1>
      </Header> */}
      <button onClick={refreshUser}></button>
    </div>
  );
}

export default App;

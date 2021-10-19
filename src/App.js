import './App.css';
import Resume from "./Resume"
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="App-title">Hello, I'm Matthew Dillon.<br />A full-stack developer.</h1>
      <Resume />
    </div>
  );
}

export default App;

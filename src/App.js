import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
      <Dictionary defaultKeyword="developer" />
      </main>
      <footer className="App-footer">
        This project was coded by <a href="https://goofy-dubinsky-84ab58.netlify.app/" target="_blank" rel="noreferrer">Zyna Pen</a>
        <br />
        Open-sourced on <a href="https://github.com/zynapen/dictionary-project" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://vigilant-mclean-242a81.netlify.app/" target="_blank" rel="noreferrer">Netifly</a>
      </footer>
      </div>
    </div>
  );
}

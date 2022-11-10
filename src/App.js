import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

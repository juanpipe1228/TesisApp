import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Header, Footer, Info, Modal } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <BrowserRouter>
          {/* <Modal /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

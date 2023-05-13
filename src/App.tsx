import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Animation1 from "./example/Animation/Animation1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example/:exampleId" element={<Home />} />
        <Route path="/test" element={<Animation1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

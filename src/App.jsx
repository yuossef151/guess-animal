import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import VideoPage from "./VideoPage";

function App() {
  return (
    <BrowserRouter basename="/guess-animal">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
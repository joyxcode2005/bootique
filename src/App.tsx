import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Collections from "./pages/Collections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sarees" element={<Collections />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

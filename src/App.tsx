import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Collections from "./pages/Collections";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sarees" element={<Collections />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

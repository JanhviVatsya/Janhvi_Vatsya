import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConditionalRenderer from "./components/ConditionalRenderer";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ConditionalRenderer />} />
          <Route path="home" element={<ConditionalRenderer />} />
          <Route path="about" element={<ConditionalRenderer />} />
          <Route path="skills" element={<ConditionalRenderer />} />
          <Route path="projects" element={<ConditionalRenderer />} />
          <Route path="contact" element={<ConditionalRenderer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
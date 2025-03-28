import { Route, Routes } from "react-router-dom";
// import "@configs/styles/css/normalize.css";
import "@configs/styles/sass/app.scss";

import IndexPage from "@/pages/_hero-ui/index";
import DocsPage from "@/pages/_hero-ui/docs";
import PricingPage from "@/pages/_hero-ui/pricing";
import BlogPage from "@/pages/_hero-ui/blog";
import AboutPage from "@/pages/_hero-ui/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;

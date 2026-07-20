import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import PaperDoodles from "./components/PaperDoodles";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Desktop from "./pages/Desktop";
import FolderPage from "./pages/FolderPage";

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <PaperDoodles />
      <CursorGlow />

      <div className={loading ? "invisible" : "visible"}>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/folder/:id" element={<FolderPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Navigation from './Navigation';
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ScrollToTop from "../helpers/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* Scroll to Top used for smaller screens */}
        <ScrollToTop />
        <Routes>
          <Route element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

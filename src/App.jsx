import './App.css';
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Packages from './components/packages';
import Booking from './components/booking';
import Faq from './components/faqs'
import Addons from './components/addons'

function App() {

  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/addons" element={<Addons />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

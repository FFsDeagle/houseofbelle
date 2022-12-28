import './App.css';
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Packages from './components/packages';
import Booking from './components/booking';
import Faq from './components/faqs'
import Addons from './components/addons'
import Booknow from './components/Booknow';
import { useState } from 'react'
import NewBooking from './components/NewBooking';

function App() {
  document.title = 'House of Belle';
  const [selection, setSelection] = useState(true);
  const selectionData = { selection, setSelection };

  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/addons" element={<Addons />} />
        {/* <Route path="/booknow" element={<Booknow />} /> */}
        {/* <Route path="/newbooking" element={<NewBooking />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

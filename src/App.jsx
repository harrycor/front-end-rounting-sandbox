import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="users" element={<User />} />
    <Route path="users/:userid" element={<UserDetails />} />
    <Route path="*" element={<h2>404 page not found</h2>} />
  </Routes>
  </BrowserRouter>
  )
};

export default App;
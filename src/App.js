import Footer from "./components/Footer";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Songs from "./pages/Songs/Songs";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="course" element={<Course />} />
        <Route path="songs" element={<Songs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;

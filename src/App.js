import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="home" element={<Home/>}/>                
      </Routes>       
    </BrowserRouter>
  );
}


export default App;

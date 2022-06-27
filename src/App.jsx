import WebRoute from './router';
import Login from "@/Pages/Login";
import Register_1 from "@/Pages/Register/Register_1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register_1 />} />
        </Routes>
      </BrowserRouter> */}
      <WebRoute />
    </div>
  );
}

export default App;

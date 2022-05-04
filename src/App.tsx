import React from 'react';
import RouterApp from "./routes/RouterApp";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <BrowserRouter>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <NavBar />
    <RouterApp />
</BrowserRouter>

  );
}

export default App;

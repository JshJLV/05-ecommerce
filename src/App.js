import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Xbox from "./pages/Xbox";
import Nintendo from "./pages/Nintendo";
import Playstation from "./pages/Playstation";
import Accesorios from "./pages/Accesorios";
import Coleccionables from "./pages/Coleccionables";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<User />} />
        <Route path="/products/xbox" element={<Xbox />} />
        <Route path="/products/playstation" element={<Playstation />} />
        <Route path="/products/nintendo" element={<Nintendo />} />
        <Route path="/products/accesorios" element={<Accesorios />} />
        <Route path="/products/coleccionables" element={<Coleccionables />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

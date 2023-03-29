import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Xbox from "./pages/Xbox";
import Nintendo from "./pages/Nintendo";
import Playstation from "./pages/Playstation";
import Accesorios from "./pages/Accesorios";
import Coleccionables from "./pages/Coleccionables";
// import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<User />} />
        <Route path="/products">
          <Route path=":category" element={<Xbox />} />
          <Route path=":catagory" element={<Playstation />} />
          <Route path=":category" element={<Nintendo />} />
          <Route path=":category" element={<Accesorios />} />
          <Route path=":category" element={<Coleccionables />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

import Carousel from "../components/Carousel/Carousel";
import SliderProducts from "../components/SliderProducts/SliderProducts";
import Categories from "../components/Categories/Categories";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [datos, setDatos] = useState([]);

  const getProducts = async () => {
    await axios.get("http://localhost:4000/products/").then((res) => {
      setDatos(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="bg-gray-200 pb-8">
      <Carousel />
      <SliderProducts categoria={"Nintendo"} />
      <SliderProducts categoria={"Xbox"} />
      <SliderProducts categoria={"Playstation"} />
      <SliderProducts categoria={"Accesorios"} />
      <Categories />
    </main>
  );
}

export default Home;

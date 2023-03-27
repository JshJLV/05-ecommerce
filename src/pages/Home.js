import Carousel from "../components/Carousel/Carousel";
import SliderProducts from "../components/Cards/SliderProducts";
import Categories from "../components/Categories/Categories";

function Home() {
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

import TextDescription from "../components/ProductView/TextDescription";

function ProductView() {
  return (
    <main>
      <div className="h-72">
        <img
          className="max-h-full mx-auto"
          src="https://cdn.gameplanet.com/wp-content/uploads/2022/08/20140206/portada-tears-of-the-kingdom-nsw-768x949.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 p-4 gap-3">
        <div>
          <span className="text-lg">Titulo del juego</span>
        </div>
        <div className="text-lg mt-2">
          <span>Precio del juego</span>
        </div>
        <div className="flex flex-col justify-around mt-2 gap-3">
          <button className="bg-blue-500 text-white rounded-2xl p-2 hover:bg-blue-600">
            Comprar
          </button>
          <button className="bg-blue-300 text-blue-500 rounded-2xl p-2 hover:bg-blue-400">
            Añadir al carrito
          </button>
        </div>
      </div>
      <TextDescription />
    </main>
  );
}

export default ProductView;

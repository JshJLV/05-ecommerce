import TextDescription from "../components/ProductView/TextDescription";

function ProductView() {
  return (
    <main>
      <div className="xl:flex xl:h-96 py-2">
        <div className="h-72 xl:h-96 xl:flex-1">
          <img
            className="max-h-full mx-auto"
            src="https://cdn.gameplanet.com/wp-content/uploads/2022/08/20140206/portada-tears-of-the-kingdom-nsw-768x949.jpg"
            alt=""
          />
        </div>
        <div className="mt-4 p-4 gap-3 xl:flex-1 xl:flex flex-col justify-around border-2">
          <div className="text-lg mt-2 flex-col">
            <span className="text-2xl block">Titulo del juego</span>
            <span className="text-lg block font-bold">$Precio del juego</span>
            <span className="text-sm block font-bold">
              Envio gratis del producto de 3 a 5 dias
            </span>
          </div>
          <div className="flex flex-col justify-around mt-2 gap-4 xl:w-80 content-end">
            <label className="block">
              Cantidad:
              <select className="bg-gray-100 rounded-md p-2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </label>
            <button className="bg-blue-500 text-white rounded-2xl p-2 hover:bg-blue-600 hover:shadow-inner hover:shadow-blue-600">
              Comprar
            </button>
            <button className="bg-blue-300 text-blue-500 rounded-2xl p-2 hover:bg-blue-400">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <TextDescription />
    </main>
  );
}

export default ProductView;

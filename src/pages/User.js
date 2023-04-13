function User() {
  return (
    <main className="p-4">
      <div className="P-2 text-2xl">Perfil de usuario: Nombre</div>
      <form className="border-2 p-4">
        <label className="profile__data-label">
          <p className="">Nombre: </p>
          <div className="container__input-form">
            <input
              type="text"
              placeholder="Nombre"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
        <label className="profile__data-label">
          <p className="block">Apellido: </p>
          <div className="container__input-form">
            <input
              type="text"
              placeholder="Apellido"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
        <label className="profile__data-label">
          <p className="block">Codigo Postal: </p>
          <div className="container__input-form">
            <input
              type="text"
              placeholder="Codigo postal"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
        <label className="profile__data-label">
          <p className="block">Calle y Colonia: </p>
          <div className="container__input-form">
            <input
              type="text"
              placeholder="Calle"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
        <label className="profile__data-label">
          <p className="block">Estado: </p>
          <div className="container__input-form">
            <input
              type="text"
              placeholder="Estado"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
        <label className="profile__data-label">
          <p className="block">Email: </p>
          <div className="container__input-form">
            <input
              type="email"
              placeholder="Email"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
        <label className="profile__data-label">
          <p className="block">Contraseña: </p>
          <div className="container__input-form">
            <input
              type="email"
              placeholder="Email"
              className="profile__data-input"
            />
            <button className="profile__data-button">Editar</button>
          </div>
        </label>
      </form>
    </main>
  );
}

export default User;

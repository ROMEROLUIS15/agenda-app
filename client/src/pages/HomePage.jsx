import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold text-red-700">README</h1>
      <p className="text-md text-white">
        Agenda App es una aplicacion Full Stack diseña con el stack MERN <b className="text-slate-300">(MongoDB, Express.js, React.js, Node.js) </b> 
        y desplegada tanto el Backend como el Frontend en Vercel, en esta primera fase de la aplicacion se trabajo 
        en las funcionalidades necesarias y requeridas por el cliente para agregar, editar y eliminar tareas de 
        usuarios de manera practica y eficiente luego de haber realizado el registro y verificando su autenticidad para realizar el Login.
        Se implemento el uso Jsonwebtoken, Bcrypt, Moongose ODM y distintos administradores de paquetes (npm) que acoplan el perfecto funcionamiento.
      </p>
<b></b>
      <Link
        className="bg-white hover:bg-slate-200  text-black font-semibold px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-yellow-600 text-gray-200 py-2 px-2">
      {/*Contenedor Principal*/}
      <div className="max-w-[14400px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 px-4">
        {/*Sección de pintores*/}
        <div>
          <h6 className="font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Pintores
          </h6>
          <ul>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Vincent Van Gogh
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Leonardo da Vinci
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Salvador Dalí
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Pablo Picasso
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Miguel Ángel
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Sandro Botticelli
            </li>
          </ul>
        </div>
        {/*Sección de cuadros*/}
        <div>
          <h6 className="font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Cuadros
          </h6>
          <ul>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              La Noche Estrellada
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Mona Lisa
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              La Persistencia de la Memória
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Guernica
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              La creación de Adán
            </li>
          </ul>
        </div>
        {/*Compañía*/}
        <div>
          <h6 className="font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Compañía
          </h6>
          <ul>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Apoyo
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Blog
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Obras
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Pintores
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Contactos
            </li>
          </ul>
        </div>
        {/*Legalidad*/}
        <div>
          <h6 className="font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Legalidad
          </h6>
          <ul>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Condiciones
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Privacidad
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Terminos
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Políticas
            </li>
            <li className="py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              Reclamos
            </li>
          </ul>
        </div>
        {/*Firma*/}
        <div className="col-span-2 py-8 md:pt-2">
          <p className="uppercase transition-transform duration-500font-bold uppercase transition-transform duration-500 hover:scale-105 cursor-pointer mb-4">
            Nombre: Edgar Muñoz Manjón
          </p>
          <p className="uppercase transition-transform duration-500font-bold uppercase transition-transform duration-500 hover:scale-105 cursor-pointer mb-4">
            Curso: Desarrollo de Aplicaciones Web 2º curso
          </p>
          <p className="uppercase transition-transform duration-500font-bold uppercase transition-transform duration-500 hover:scale-105 cursor-pointer mb-4">
            Año de promoción: 2023 - 2024
          </p>
          <p className="uppercase transition-transform duration-500font-bold uppercase transition-transform duration-500 hover:scale-105 cursor-pointer mb-4">
            Fecha de realización de la web : 13 de Marzo de 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

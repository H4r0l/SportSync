/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react";
import Link from 'next/link'
import { signIn, useSession, signOut } from 'next-auth/react'

const Topbar = () => {

   // Es una llamada a la funcion de conexión a la base de datos, solo como prueba para ver si funciona
  // Estado local para controlar si la lista desplegable de navegación está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  // Obtener la sesión del usuario actual
  const { data: session } = useSession();

  // Verificar si el usuario está autenticado
  const loggedIn = session && session.user
  return (
    // Barra de navegación
    <nav
      className="relative flex w-full flex-wrap rounded-b-[20px] items-center justify-between bg-[#011627] py-8 text-gray-700 shadow-lg hover:text-gray-900 focus:text-gray-700 lg:py-4 "
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3 mx-12">
        {/* Logo y enlace a la página de inicio */}
        <Link href="/">
          <div className="font-bold text-white font-sans">SportSync</div>
        </Link>

        {/* Botón de menú para dispositivos móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block border-0 bg-transparent px-2 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-gray-200 lg:hidden"
        >
          <span className="w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>

        {/* Contenido de la lista desplegable de navegación */}
        <div
          className={`${
            isOpen ? "visible" : "hidden"
          } mt-2 flex basis-full items-center lg:mt-0 lg:flex lg:basis-auto`}
          id="navbarSupportedContent4"
        >
          {/* Resto del contenido de la barra de navegación */}
          {loggedIn ? (
            // Mostrar enlaces y botón de cierre de sesión si el usuario está autenticado
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  Dashboard
                </button>
              </Link>
              <img
                src={session.user.image}
                alt=""
                className="h-10 rounded-full cursor-pointer"
              />
              <button
                onClick={() => {
                  signOut();
                }}
                className="hover:underline"
              >
                Log out
              </button>
            </div>
          ) : (
            // Mostrar botón de inicio de sesión si el usuario no está autenticado
            <button
              onClick={() => signIn()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
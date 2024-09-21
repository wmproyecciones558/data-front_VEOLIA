import { Link } from "react-router-dom";
import {
  RiBarChart2Line,
  RiEarthLine,
  RiArrowRightSLine,
  RiDropFill,
} from "react-icons/ri";
import { TbSunElectricity } from "react-icons/tb";
import { BiSolidLandscape } from "react-icons/bi";
import { BsFillCloudsFill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";
import { RiHomeOfficeLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import React, { useState } from "react";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [showSubmenu3, setShowSubmenu3] = useState(false);
  return (
    <nav className="sidebar bg-slate-100">

      <ul>
      <Link to="home" className=" gap-2 py-2   px-0 flex items-center">
                <RiDropFill /> Home
      </Link>
      </ul>

      {/*lista de analitica */}

      <ul>
        <li>
          <button
            onClick={() => setShowSubmenu(!showSubmenu)}
            className="w-full flex items-center justify-normal  px-2  rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <RiBarChart2Line className="text-primary" /> Sensores
            </span>
            <RiArrowRightSLine
              className={`mt-1 ${showSubmenu && "rotate-90"} transition-all`}
            />
          </button>
          <ul
            className={` ${
              showSubmenu ? "h-full w-60 " : "h-0"
            } overflow-y-hidden transition-all `}
          >
            <li>
              <Link to="aguaId" className=" gap-2  flex items-center">
                <RiDropFill className="colorIcons" /> Sensores Agua
              </Link>
            </li>
            <li>
              <Link
                to="corrienteId"
                className="gap-2  px-0 flex items-center"
              >
                <TbSunElectricity /> sensores de corriente
              </Link>
            </li>
            <li>
              <Link to="tierraId" className="gap-2 flex items-center">
                <BiSolidLandscape /> sensores de tierra
              </Link>
            </li>

            <li>
              <Link to="aireId" className="gap-2  flex items-center">
                <BsFillCloudsFill /> sensores de aire
              </Link>
            </li>
          </ul>
        </li>
        <li></li>
      </ul>

      {/*lista de estadisticas */}

      <ul>
        <li>
          <button
            onClick={() => setShowSubmenu2(!showSubmenu2)}
            className="w-full flex items-center justify-normal  px-2  rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <MdLibraryBooks className="text-primary" /> Reportes
            </span>
            <RiArrowRightSLine
              className={`mt-1 ${showSubmenu2 && "rotate-90"} transition-all`}
            />
          </button>
          <ul
            className={` ${
              showSubmenu2 ? "h-full w-60 " : "h-0"
            } overflow-y-hidden transition-all `}
          >
            <li>
              <Link to="new" className=" gap-2  flex items-center">
                <RiDropFill /> Humedad
              </Link>
            </li>
            <li>
              <Link
                to="corrienteId"
                className="gap-2  flex items-center"
              >
                <TbSunElectricity /> vientos
              </Link>
            </li>
            <li>
              <Link to="tierraId" className="gap-2  flex items-center">
                <BiSolidLandscape /> Temperatura
              </Link>
            </li>
          </ul>
        </li>
        <li></li>
      </ul>
  {/*lista de pronosticos */}

  <ul>
        <li>
          <button
            onClick={() => setShowSubmenu3(!showSubmenu3)}
            className="w-full flex items-center justify-normal  px-2  rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <TbChartArrowsVertical className="text-primary" /> Historial
            </span>
            <RiArrowRightSLine
              className={`mt-1 ${showSubmenu3 && "rotate-90"} transition-all`}
            />
          </button>
          <ul
            className={` ${
              showSubmenu3 ? "h-full w-60 " : "h-0"
            } overflow-y-hidden transition-all `}
          >
            <li>
              <Link to="new" className=" gap-2  flex items-center">
                <RiDropFill /> Mediciones humedad
              </Link>
            </li>
            <li>
              <Link
                to="corrienteId"
                className="gap-2 py-2 px-0 flex items-center"
              >
                <TbSunElectricity /> Mediciones vientos
              </Link>
            </li>
            <li>
              <Link to="tierraId" className="gap-2  flex items-center">
                <BiSolidLandscape /> Mediciones Temperatura
              </Link>
            </li>

          
          </ul>
        </li>
        <ul>
      <Link to="home" className=" gap-2 pt-5   px-0 flex items-center">
                <ImExit /> salir
      </Link>
      </ul>
      </ul>      
    </nav>
  );
};
export default Sidebar;

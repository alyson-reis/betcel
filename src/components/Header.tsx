import { motion } from "motion/react"
import {scrollToSection} from '../utils/scrollToSection'
import logo from "../assets/images/logo-betcel-primary.png";


function Header() {

  return (
    <motion.div className=" fixed bg-[#388199] flex justify-around items-center h-25 w-screen gap-75">
      <img src={logo} alt="logo-betcel-gray" className="h-25" />
      <div className="flex justify-items-end text-emerald-100 gap-8 text-md text-center font-medium">
        <button className="cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-105 transform transition-all duration-200" onClick={() => scrollToSection('home')}>
        Home
        </button>
        <button className="cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-105 transform transition-all duration-200" onClick={() => scrollToSection('servicos')}>
        Serviços
        </button>
        <button className="cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-105 transform transition-all duration-200" onClick={() => scrollToSection('localizacao')}>
        Localização
          </button>
         <button className="cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-105 transform transition-all duration-200" onClick={() => scrollToSection('diferencias')}>
         Diferenciais
          </button>
      </div>
    </motion.div>
  )
}

export default Header

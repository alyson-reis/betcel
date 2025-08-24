import { motion } from "motion/react"
import services from "../assets/images/printer-services.png"

function ServicesSection() {
  
  return (
    <div id="servicos" className="h-160 flex justify-center items-center gap-70 ml-15 ">
      <motion.div className="mb-30"
       initial={{x:-200, opacity: 0}}
       animate={{x: 0, opacity: 1}}
       transition={{duration: 1, delay: 0.1}}
       >
      <h1 className="text-5xl mb-15 font-bold text-blue mt-15">
      Nossos Serviços
      </h1>
      <p className="mb-4  font-medium">
      Impressão colorida e preto e branco
      </p>
      <p className="mb-4 font-medium">
      Cópias e digitalizações
      </p>
      <p className="mb-4 font-medium">
      Manutenção e conserto de impressoras
      </p>
      <p className="mb-4 font-medium">
      Venda de suprimentos (tinta, toner, papel)
      </p>
      <p className="mb-4 font-medium">
      Consultoria para otimização do seu parque de impressão
      </p> 
      </motion.div>
      <img src={services} className="w-140 mb-20"></img>
      </div>
  )
}

export default ServicesSection

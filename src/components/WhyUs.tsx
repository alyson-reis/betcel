import {motion} from "motion/react"
import handshake from "../assets/images/handshake.png"

function WhyUs() {
  return (
    <div id="diferencias" className="h-screen flex justify-center items-center gap-45">
      <img src={handshake} className="w-120 h-100"></img>
      <motion.div className="ml-20 mb-20 w-120">
      <h1 className="text-5xl mb-15 font-bold text-blue">
        Por que a BETCEL ?</h1>
      <p className="mb-4 font-medium text-lg">
        Oferecemos atendimento personalizado, preços competitivos e soluções sob medida para seu negócio ou uso pessoal. Nosso compromisso é garantir a sua satisfação com serviços rápidos, confiáveis e de alta qualidade.</p>
      </motion.div>
    </div>
  )
}

export default WhyUs

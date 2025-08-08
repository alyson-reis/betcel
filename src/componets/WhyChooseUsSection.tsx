import {motion} from "motion/react"

function WhyChooseUsSection() {
  return (
    <div className="h-screen flex justify-between items-center ml-15">
      <img src="/src/image/servico-de-impressora.jpg" alt="IMAGEM" className="h-100 w-150 mr-5"></img>
      <motion.div className="mb-30 mr-15 w-100"
       initial={{x:400, opacity: 0}}
       animate={{x: 0, opacity: 1}}
       transition={{duration: 1, delay:0.1}}
       >
      <h1 className="text-4xl mb-15 font-bold text-blue">Porque a BETCEL ?</h1>
      <p className="mb-4 font-medium">Oferecemos atendimento personalizado, preços competitivos e soluções sob medida para seu negócio ou uso pessoal. Nosso compromisso é garantir a sua satisfação com serviços rápidos, confiáveis e de alta qualidade.</p>
      </motion.div>
    </div>
  )
}

export default WhyChooseUsSection

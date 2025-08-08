import { motion } from "motion/react"

function ServicesSection() {
  return (
    <div className="h-screen flex justify-between items-center ml-15">
      <motion.div className="mb-30"
       initial={{x:-200, opacity: 0}}
       animate={{x: 0, opacity: 1}}
       transition={{duration: 1, delay:0.1}}
       >
      <h1 className="text-5xl mb-15 font-bold text-blue">Nossos Serviços</h1>
      <p className="mb-4  font-medium">Impressão colorida e preto e branco</p>
      <p className="mb-4 font-medium">Cópias e digitalizações</p>
      <p className="mb-4 font-medium">Manutenção e conserto de impressoras</p>
      <p className="mb-4 font-medium">Venda de suprimentos (tinta, toner, papel)</p>
      <p className="mb-4 font-medium">Consultoria para otimização do seu parque de impressão</p> 
      </motion.div>
      <img src="/src/image/servico-de-impressora.jpg" alt="IMAGEM" className="h-100 w-150 mr-5"></img>
    </div>
  )
}

export default ServicesSection

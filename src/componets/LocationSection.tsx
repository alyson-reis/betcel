import { motion} from "motion/react"

function LocationSection() {
  return (
    <div className="h-screen flex justify-between items-center bg-green-500 ">
      <motion.div className="mb-30 ml-12"
       initial={{x:-200, opacity: 0}}
       animate={{x: 0, opacity: 1}}
       transition={{duration: 1, delay:0.1}}
       >
        <h1 className="text-5xl mb-15 font-bold text-white">Localização</h1>
        <p className="mb-4 text-white text-lg font-medium w-150">Estamos localizados no coração da cidade, facilitando o acesso para nossos clientes. Venha nos visitar na Rua Exemplo, 123 – Centro, ou entre em contato para atendimento personalizado.</p>
        </motion.div>
        <img src="/src/image/localizacao.png" alt="IMAGEM" className="h-100 w-150 mr-5"></img>
    </div>
  )
}

export default LocationSection

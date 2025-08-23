import { motion } from "motion/react"

function Mapa() {
  return (
    <div className="w-150 h-80 mr-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.099635040941!2d-41.71932543637494!3d-22.3120713123877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x962548787687cf%3A0xa8d6e683cfe4b9ed!2sBetcel%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1754790732417!5m2!1spt-BR!2sbr"width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
  )
}

function LocationSection() {
  return (
    <div id="localizacao" className="h-screen flex justify-between items-center bg-green-500">
      <motion.div className="mb-30 ml-12"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}>
          
        <h1 className="text-5xl mb-15 font-bold text-white">Localização</h1>
        <p className="mb-4 text-white text-lg font-medium w-150">
           Rua Av. dos bandeirantes, 61 - Loja 4 Lagomar, Macaé - RJ, 27970-430.
        </p>
      </motion.div>

      <Mapa />
    </div>
  )
}

export default LocationSection


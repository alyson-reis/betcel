import { motion } from "motion/react"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Header() {

  return (
    <motion.div 
    className=" fixed bg-[#388199] flex justify-around items-center h-25 w-screen gap-75">
      <img src="/src/image/logo-betcel.png" alt="logo-betcel" className="h-25" />
      <div className="flex justify-items-end text-emerald-100 gap-8 text-md text-center font-medium">
        <p>Home</p>
        <p>Serviços</p>
        <p>Localização</p>
        <div className="bg-green-600 flex justify-center items-center w-35 h-8">
        <WhatsAppIcon sx={{fontSize:20}} />
        <p>WhatsApp</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Header

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon  from "@mui/icons-material/ArrowCircleRightOutlined";
import { motion } from "motion/react"

function HeroSection() {
  return (
    
  <div 
    className="h-screen flex flex-col justify-center bg-cover bg-center bg-amber-300"
    style={{ backgroundImage: "linear-gradient(to right, rgba(56, 129, 153, 0.8), rgba(0,0,0,0)), url('/src/image/servico-de-impressora.jpg')" }}
  > 
    <motion.div 
    className="ml-20"
    initial={{x: -100, opacity:0}}
    animate={{x: 0, opacity:1}}
    transition={{duration: 1, delay:0.1}}>
      <h1 className="text-5xl text-white font-bold mb-15">Serviços de Qualidade</h1>
      <p className="text-white font-medium w-150">Oferecemos soluções completas para todas as suas necessidades de impressão. Com equipamentos modernos e equipe especializada, garantimos rapidez, eficiência e qualidade em cada trabalho, desde pequenas impressões até grandes volumes.</p>
    </motion.div>
    <div className="flex justify-around gap-300">
      <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 50, color: "white" }}/>
      <ArrowCircleRightOutlinedIcon sx={{ fontSize: 50, color: "white"}}/>
    </div>
  </div>
    )
}

export default HeroSection

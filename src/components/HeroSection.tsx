import { motion, AnimatePresence } from "motion/react";
import useTrocaConteudo from "../utils/useContentSwitch";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import printer from "../assets/images/printer-service.jpg"

function HeroSection() {
  const conteudos = [
    {
      titulo: "Serviços de Impressão",
      texto: "Atendemos empresas e residências com impressões rápidas e de alta qualidade, utilizando tecnologia moderna."
    },
    {
      titulo: "Manutenção Especializada",
      texto: "Nossa equipe realiza manutenção preventiva e corretiva para garantir que seus equipamentos funcionem perfeitamente."
    },
    {
      titulo: "Soluções Personalizadas",
      texto: "Oferecemos projetos sob medida para atender necessidades específicas de impressão e acabamento."
    }
  ];

  const { conteudoAtual, proximo, anterior, indice } = useTrocaConteudo(conteudos);

  return (
    <div id="home" className="h-screen flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to right, rgba(56, 129, 153, 0.9), rgba(0,0,0,0)), url(${printer})` }}> 
      
      <div className="ml-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={indice} 
          initial={{ opacity: 0, x: -50}} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 50 }} 
          transition={{ duration: 0.5 }}>
            <h1 className="text-5xl text-white font-bold mb-5">{conteudoAtual.titulo}</h1>
            <p className="text-white font-medium w-150">{conteudoAtual.texto}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-10 p-5">
        
        <ArrowBackIcon sx={{ fontSize: 50, color: "white", backgroundColor:"#383838", borderRadius:"5em", transition: "color 0.3s ease, transform 0.3s ease", "&:hover": { color: "#383838", transform: "scale(1.2)", cursor:"pointer" , backgroundColor:"#ffffff", borderRadius:"5em"}}} 
        onClick={anterior}/>

        <ArrowForwardIcon sx={{ fontSize: 50, color: "white", backgroundColor:"#383838", borderRadius:"5em", transition: "color 0.3s ease, transform 0.3s ease", "&:hover": { color: "#383838", transform: "scale(1.2)" , cursor:"pointer", backgroundColor:"#ffffff", borderRadius:"5em"}}} 
        onClick={proximo}
        />
      </div>
      <a className="fixed bottom-10 right-10" href="https://wa.me/5522998215253" target="_blank">
      <WhatsAppIcon sx={{fontSize:70, color:"white", backgroundColor:"green", borderRadius:"5em", transition:"color 0.3s ease, transform 0.3s ease", padding:1, "&:hover":{color:"green", transform:"scale(1.2)", cursor:"pointer", backgroundColor:"#f5f5f5"}}}/>
      </a>
    </div>
  );
}

export default HeroSection;

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import {scrollToSection} from '../utils/scrollToSection'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import logo from "../assets/images/logo-betcel-gray.png"

function Footer() {
  return (

  <div className="bg-[#333435] h-60 flex justify-evenly pr-20 items-center text-white">

      <img src={logo} alt="logo-betcel-cinza" className="h-30" />

      <nav>
        <h2 className="font-medium text-lg mt-4 mb-4">
        Acesso Rápido
        </h2>
        <div className='flex flex-col items-start gap-1'> 
        <button className="font-medium  cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-102 transform transition-all duration-200" onClick={() => scrollToSection('home')}>
        Home
        </button>
        <button className="font-medium cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-102 transform transition-all duration-200" onClick={() => scrollToSection('servicos')}>
        Serviços
        </button>
        <button className="font-medium cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-102 transform transition-all duration-200" onClick={() => scrollToSection('localizacao')}>
        Localização
        </button>
        <button className="font-medium cursor-pointer hover:text-[#FFFFFF] hover:font-medium hover:scale-102 transform transition-all duration-200" onClick={() => scrollToSection('diferencias')}>
        Diferencias
        </button>
        </div>
      </nav>
      
      <div className='mt-5'>
        <h2 className="font-medium text-lg mb-6 ml-7">
        Contato
        </h2>
        <div className="flex">
          <PlaceOutlinedIcon sx={{fontSize: 20, marginRight:1}}/>
          <p className="font-medium text-sm mb-2"> 
          Av. dos bandeirantes, 61 - Loja 4 <br/> 
          Lagomar, Macaé - RJ, 27970-430
          </p>
        </div>
        <div className="flex">
          <EmailOutlinedIcon sx={{fontSize: 20, marginRight:1}}/>
          <p className="font-medium text-sm mb-2">
          mmbetcel@gmail.com
          </p>
        </div>
        <div className="flex">
          <WhatsAppIcon sx={{fontSize: 20, marginRight:1}}/>
          <p className="font-medium text-sm mb-2">
          (22) 99752-5153
          </p>
        </div>
      </div>

          <nav className='mb-15 flex flex-col items-center'>
          <h2 className="font-medium text-lg">
          Siga-nos
          </h2>
          <div className="flex gap-5 mt-5">

            <FacebookOutlinedIcon sx={{fontSize: 35}} 
            className='cursor-pointer hover:text-[#3636db] hover:font-medium hover:scale-120 transform transition-all' 
            onClick={() => window.open('https://www.facebook.com/profile.php?id=61573854668161', "_blank")}
            style={{cursor: "pointer"}}/>
            
            <InstagramIcon sx={{fontSize: 35}} 
            className='cursor-pointer hover:text-[#e63487] hover:font-medium hover:scale-120 transform transition-all'
            onClick={() => window.open("https://www.instagram.com/betcelinfo/", "_blank")} 
            style={{ cursor: "pointer" }}/>

          </div>
        </nav>
    </div>
  )
}

export default Footer

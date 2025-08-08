import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="bg-[#333435] h-50 flex justify-around items-center text-white">
      <img src="/src/image/logo-betcel-cinza.png" alt="/src/image/logo-betcel-cinza.png" className="h-30" />
      <div>
        <h1 className="font-medium text-lg mb-3">Acesso Rápido</h1>
        <h2 className="font-medium mb-1">Home</h2>
        <h2 className="font-medium mb-1">Serviços</h2>
        <h2 className="font-medium mb-1">Localização</h2>
      </div>
      <div>
        <h1 className="font-medium text-lg mb-3">Contato</h1>
        <div className="flex ">
          <PlaceOutlinedIcon sx={{fontSize: 20, marginRight:1}}/>
          <p className="font-medium mb-1">Avenida...</p>
        </div>
        <div className="flex">
          <LocalPhoneOutlinedIcon sx={{fontSize: 20, marginRight:1}}/>
          <p className="font-medium mb-1">xx xxxx-xxxx</p>
        </div>
        <div className="flex">
          <WhatsAppIcon sx={{fontSize: 20, marginRight:1}}/>
          <p className="font-medium mb-1">xx xxxxx-xxxx</p>
        </div>
      </div>
          <div className='mb-12 flex flex-col items-center'>
          <h1 className="font-medium text-lg">Siga-nos</h1>
          <div className="flex gap-5 mt-5">
            <FacebookOutlinedIcon sx={{fontSize: 35}} />
            <InstagramIcon sx={{fontSize: 35}} />
          </div>
        </div>
    </div>
  )
}

export default Footer

function CallToActionBanner() {
  return (
    <div className="h-30 bg-red-500 flex justify-around items-center gap-60">
      <div className="text-white w-70">
      <p className="font-medium mb-3">
        Cansado de mandar sua impressora todo mês para manuntenção ?</p>
      <h1 className="font-bold text-xl">
        TEMOS A SOLUÇÃO</h1>
      </div>
      <a href="https://wa.me/5522998215253" target="_blank" className=" flex justify-center items-center bg-green-600 w-75 h-12 border-none text-white font-bold rounded-md
      cursor-pointer hover:bg-amber-50 hover:text-green-600 hover:scale-105 transform transition-all duration-200 hover:border">ENTRE EM CONTATO</a>
    </div>
  )
}

export default CallToActionBanner

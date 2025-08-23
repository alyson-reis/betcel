     export const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
          section.scrollIntoView({behavior: "smooth"})
      } else{
        console.warn(`Elemento com id "${id}" não encontrado.`)
      }
      }
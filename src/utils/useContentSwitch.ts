import { useState } from "react";
import type { conteudo } from "../types/conteudo";

export default function useTrocaConteudo(conteudos: conteudo[]) {
  const [indice, setIndice] = useState(0);

  function proximo() {
    setIndice((prev) => (prev + 1) % conteudos.length);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + conteudos.length) % conteudos.length);
  }

  return {
    conteudoAtual: conteudos[indice],
    proximo,
    anterior,
    indice
  };
}

"use client";

import Quadrado from "./components/Quadrado";
import Botao from "./components/Botao";
import Imagem from "./components/Imagem";
import ListaItens from "./components/ListaItens";
import Paragrafo from "./components/Paragrafo";
import Titulo from "./components/Titulo";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
export default function Home() {
  const frutas = [{ texto: "Banana" }, { texto: "Uva" }, { texto: "Abobora" }];
  const handleButton = () => alert("OH! voce me clicou!!");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cabecalho
        titulo="Titulo da 7a questao, usando o titulo feito na 2a"
        descricao="Descricao da atividade 7"
      />
      <Quadrado />
      <Botao texto="Botao" onClick={handleButton} />
      <ListaItens itens={frutas} />
      <Imagem url="https://imgur.com/J2zTt0a.jpg" />
      <Paragrafo texto="Pinguim da antartida" />
      <Rodape informacoes="informacoes importantes do rodapé" />
    </main>
  );
}

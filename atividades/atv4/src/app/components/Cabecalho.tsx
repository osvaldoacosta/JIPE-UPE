import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo: string;
  descricao: string;
}

const Cabecalho = ({ titulo, descricao }: CabecalhoProps) => {
  return (
    <header>
      <Titulo texto={titulo} />
      <p className="text-orange-300">{descricao}</p>
    </header>
  );
};

export default Cabecalho;

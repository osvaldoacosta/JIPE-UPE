interface TituloProps {
  texto: string;
}

const Titulo = ({ texto }: TituloProps) => {
  return <h1 className="text-orange-700">{texto}</h1>;
};

export default Titulo;

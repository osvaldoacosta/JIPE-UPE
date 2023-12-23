interface ParagrafoProps {
  texto: string;
}

const Paragrafo = ({ texto }: ParagrafoProps) => {
  return <p text-white>{texto}</p>;
};

export default Paragrafo;

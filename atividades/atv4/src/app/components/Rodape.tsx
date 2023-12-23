interface RodapeProps {
  informacoes: string;
}

const Rodape = ({ informacoes }: RodapeProps) => {
  return <footer className="text-lime-500">{informacoes}</footer>;
};

export default Rodape;

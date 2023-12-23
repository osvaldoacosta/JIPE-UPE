interface BotaoProps {
  texto: string;
  onClick: () => void;
}

const Botao = ({ texto, onClick }: BotaoProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-800 rounded-full text-sky-300/100"
    >
      {texto}
    </button>
  );
};

export default Botao;

interface Itens {
  texto: string;
}

interface ItensProps {
  itens: Itens[];
}

const ListaItens = ({ itens }: ItensProps) => {
  return (
    <ul className="bg-blue-400 text-black">
      {itens.map((item: Itens) => (
        <li>{item.texto}</li>
      ))}
    </ul>
  );
};

export default ListaItens;

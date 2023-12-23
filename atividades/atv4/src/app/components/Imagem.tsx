interface ImagemProps {
  url: string;
}
const Imagem = ({ url }: ImagemProps) => {
  return (
    <img
      className="avatar rounded-full"
      src={url}
      alt="Pinguim"
      width={200}
      height={400}
    />
  );
};

export default Imagem;

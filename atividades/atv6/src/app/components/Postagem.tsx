//Propriedades de uma postagem:
//Username, location, foto de perfil
//Boolean pra dizer se foi curtida, qtd de likes. as hashtags(#alguma coisa)
//Imagem da postagem, descricao da postagem

//coracao vazio
import { FaRegHeart } from "react-icons/fa";
//coracao preenchido
import { FaHeart } from "react-icons/fa";
//Icone de comentarios
import { IoChatbubbleOutline } from "react-icons/io5";
//Icone de compartilhar
import { FiSend } from "react-icons/fi";

interface PostagemProps {
  username: string;
  location: string;
  profilePictureUrl: string;
  likesQty: number;
  isLiked: boolean;
  postPictureUrl: string;
  postDescription: string;
  hashtags: string[];
}

const Postagem = ({
  username,
  location,
  profilePictureUrl,
  likesQty,
  isLiked,
  postPictureUrl,
  postDescription,
  hashtags,
}: PostagemProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={profilePictureUrl}
            alt="Profile picture"
          />
          <div>
            <span className="font-bold">{username}</span>
            <p className="text-gray-600 text-xs">{location}</p>
          </div>
        </div>
        <img className="w-full" src={postPictureUrl} alt="Post" />
        <div className="mt-2 text-2xl flex flex-wrap">
          {isLiked ? (
            <FaHeart className="text-red-700 mr-2" />
          ) : (
            <FaRegHeart className="mr-2 " />
          )}
          <IoChatbubbleOutline className="mr-2" />
          <FiSend className="mr-2" />
        </div>
        <div className="pt-4">
          <div className="flex items-center mb-2 text-xs">
            <div className="mr-1">
              <FaHeart />
            </div>
            <span className=" font-bold text-sm">{likesQty} likes</span>
          </div>
          <p className="text-sm">
            <span className="font-bold">{username}</span> {postDescription}
            <span className="flex flex-wrap">
              {hashtags.map((tag, index) => (
                <a key={index} className="text-blue-600 text-xs mr-1 mt-1">
                  #{tag}
                </a>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Postagem;

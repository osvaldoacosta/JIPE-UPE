import Postagem from "./components/Postagem";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Postagem
        username="Marcia"
        location="Recife"
        profilePictureUrl="https://i.imgur.com/1bX5QH6.jpg"
        likesQty={100}
        isLiked={true}
        postPictureUrl="https://i.imgur.com/XZcedbY.jpeg"
        postDescription="Muito bom participar de eventos como esse e conhecer pessoas novas"
        hashtags={["evento", "hoje", "familia"]}
      />

      <Postagem
        username="Osvaldo"
        location="California"
        profilePictureUrl="https://i.imgur.com/bdoUxOY.jpeg"
        likesQty={10000}
        isLiked={false}
        postPictureUrl="https://i.imgur.com/bdoUxOY.jpeg"
        postDescription="New pfp!!"
        hashtags={["titulo", "campeao", "john-cena"]}
      />

      <Postagem
        username="MemesAgora"
        location="Marte"
        profilePictureUrl="https://i.imgur.com/8nLFCVP.png"
        likesQty={55}
        isLiked={true}
        postPictureUrl="https://i.imgur.com/6amXGTM.jpeg"
        postDescription="Fofo!!"
        hashtags={["fofo", "tiorro", "cake", "bolo", "dogo"]}
      />
    </main>
  );
}

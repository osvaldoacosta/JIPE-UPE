import Profile from "../Components";

const calculaNascimento = (ano: number) => {
  return 2023 - ano;
};

export default function Home() {
  const name = "Osvaldo";
  const nascimento = 2002;
  return (
    <main>
      <Profile />
      <p>Seja bem vindo, {name}</p>
      <p>
        Voce nasceu em {nascimento}, logo você tem{" "}
        {calculaNascimento(nascimento)}
      </p>
    </main>
  );
}

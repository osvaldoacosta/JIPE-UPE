interface AvatarProps {
  name: string;
  size: number;
}
interface CardProps {
  children: React.ReactNode;
}
function Card({ children }: CardProps) {
  return (
    <div className="p-4 border-2 border-black inline-block">{children}</div>
  );
}
function Avatar({ name, size }: AvatarProps) {
  return (
    <img
      className="avatar rounded-full"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Home() {
  return (
    <main>
      <Card>
        <Avatar name="Maria" size={40} />
      </Card>
    </main>
  );
}

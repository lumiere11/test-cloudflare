import Link from "next/link";

const Home = () => {
  const emojis = [
    "😀","😂","🥰","😎","🤔","🙃","😴","😡","🤯","🤩",
    "🍎","🍕","🍔","🍣","🍩","☕","🍺","🌞","🌈","⭐"
  ];

  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-purple-300 via-pink-200 to-yellow-200 p-4 min-h-screen">
      <h1 className="mb-6 font-bold text-gray-800 text-4xl">🌟 Emoji Landing Page 🌟</h1>
      <p className="mb-6 text-gray-700 text-center">Disfruta de estos emojis:</p>

      <div className="gap-4 grid grid-cols-5 max-w-md">
        {emojis.map((emoji, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded-lg text-3xl text-center"
          >
            {emoji}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

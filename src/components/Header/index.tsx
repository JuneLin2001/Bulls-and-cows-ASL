const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 pb-4">
      <div>
        <h1 className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
          Bulls and cows ASL
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Guess the 4-digit secret code using hand signs.
        </p>
      </div>
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-800"
        title="Reset Game"
      ></button>
    </header>
  );
};

export default Header;

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-800 pb-4">
      <div>
        <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Bulls and cows ASL
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Guess the 4-digit secret code using hand signs.
        </p>
      </div>
      <button
        className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        title="Reset Game"
      ></button>
    </header>
  );
};

export default Header;

function Elimination({ languages, notMatchCount }) {
  return (
    <div className="flex flex-wrap justify-center gap-1 max-w-88">
      {languages.map((language, index) => {
        const isLanguageLost = index < notMatchCount;
        return (
          <span
            key={language.name}
            className="relative rounded px-2 py-1 text-sm cursor-pointer font-semibold"
            style={{
              backgroundColor: language.color,
              color: language.text,
            }}
          >
            {language.name}
            {isLanguageLost && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/70 rounded">
                💀
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
export default Elimination;

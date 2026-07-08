function Match() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="w-10 h-10 bg-[#323232] border-b-2 border-gray-300"
        />
      ))}
    </div>
  );
}
export default Match;

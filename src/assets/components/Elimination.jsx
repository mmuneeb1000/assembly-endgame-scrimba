function Elimination() {
  const languages = [
    { name: "HTML", color: "#E2680F", text: "#F9F4DA" },
    { name: "CSS", color: "#328AF1", text: "#F9F4DA" },
    { name: "JavaScript", color: "#F4EB13", text: "#1E1E1E" },
    { name: "React", color: "#2ED3E9", text: "#1E1E1E" },
    { name: "TypeScript", color: "#298EC6", text: "#F9F4DA" },
    { name: "Node.js", color: "#599137", text: "#F9F4DA" },
    { name: "Python", color: "#FFD742", text: "#1E1E1E" },
    { name: "Ruby", color: "#D02B2B", text: "#F9F4DA" },
    { name: "Assembly", color: "#2D519F", text: "#F9F4DA" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-1 max-w-sm">
      {languages.map((language) => (
        <span
          className="rounded px-2 py-1 text-sm cursor-pointer font-semibold"
          style={{
            backgroundColor: language.color,
            color: language.text,
          }}
        >
          {language.name}
        </span>
      ))}
    </div>
  );
}
export default Elimination;

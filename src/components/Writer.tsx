import { useTypewriter, Cursor } from "react-simple-typewriter";

const Writer = () => {
  const [text] = useTypewriter({
    words: ["Calmness", "Comforts", "Quitness"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <span>
      <span className="text-[#ff478c]">{text}</span>
      <Cursor />
    </span>
  );
};

export default Writer;

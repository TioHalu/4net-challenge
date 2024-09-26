import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [input, setInput] = useState(0);
  const [generate, setGenerate] = useState([]);
  const [randomGenerate, setRandomGenerate] = useState([]);

  const genereateArray = () => {
    let arr = [];
    for (let i = 0; i < input; i++) {
      arr.push(i+1);
    }
    setGenerate(arr);
    setRandomGenerate([]);
  };
  const randomGenerateArray = () => {
    let arr = [];
    arr = generate.sort(() => Math.random() - 0.5);
    setRandomGenerate(arr);
    setGenerate([]);
  };

  let array = randomGenerate.length > 0 ? randomGenerate : generate;
  
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex gap-4 items-center justify-center">
        <input
          type="text"
          value={input}
          className="text-black"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={genereateArray}>Generete</button>
      </div>

      <div className="flex gap-4 items-center justify-center">
        {array.map((i) => (
          <div
            key={i}
            onClick={()=>randomGenerateArray()}
            className="w-32 h-32 bg-[#f0f0f0] rounded-3xl flex items-center justify-center text-black cursor-pointer relative"
          >
            <span className={randomGenerate.length>0 ? "absolute top-1 left-2" : ""}>
              {i}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomCharacterFromWord(word: string) {
  const index = Math.floor(Math.random() * word.length);
  const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
  return word.substring(0, index) + randomChar + word.substring(index + 1);
}

function App() {
  const [title, setTitle] = useState('Easy Start React/TS Template');
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (!isShaking) return;

    const interval = setInterval(() => {
      const words = title.split(' ');
      const newTitle = words.map(word => getRandomCharacterFromWord(word)).join(' ');
      setTitle(newTitle);
    }, 100);

    return () => clearInterval(interval);
  }, [title, isShaking]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
      <h3 className="text-xl text-gray-700">
        By <a href="https://github.com/bassceo" className="text-blue-500">Yaroslav Lukyanchuk</a>
      </h3>
      <label className="mt-4 gap-1 flex">
        <input
          type="checkbox"
          checked={isShaking}
          onChange={() => setIsShaking(!isShaking)}
        />
        Shake Characters
      </label>
    </div>
  );
}

export default App;
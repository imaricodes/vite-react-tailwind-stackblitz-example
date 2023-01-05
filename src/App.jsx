import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="m-10">
      <div className="mb-5 font-bold">Switch Button</div>
      <div
        className={`cursor-pointer	w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 ${
          isSelected ? 'bg-red-500 justify-end' : 'justify-start'
        }`}
        onClick={() => setSelected(!isSelected)}
      >
        <motion.div
          layout
          className="bg-white w-8 h-8 rounded-full shadow-md"
        ></motion.div>
      </div>
    </div>
  );
}

export default App;

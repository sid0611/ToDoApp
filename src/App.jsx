import { useState,useRef, useCallback } from 'react';
import './App.css';

function App() {
  const [itemsList, setItemsList] = useState(["Learn React", "Learn Node"]);
  const [newItem, setNewItem] = useState("");

  const setNewChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && newItem.trim() !== "") {
      setItemsList((prev) => [...prev, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 to-red-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">TodoApp</h1>

        <ul className="flex flex-col items-center gap-2 max-h-60 overflow-y-auto">
          {itemsList.map((item, index) => (
            <div className='flex bg-gray-400 w-60  hover:bg-green-500'>
            <li 
              key={index} 
              className=" text-black px-4 py-2 rounded-md shadow-md w-50 text-center transition duration-300 overflow-hidden"
            >
              {item}
            </li>
            <button className='bg-red-400 cursor-pointer  flex items-end justify-end'>X</button>
            </div>
          ))}
        </ul>
        <div className="mt-4 flex">
          <input 
            type="text" 
            placeholder="Add a task..." 
            value={newItem} 
            onChange={setNewChange} 
            onKeyDown={handleSubmit} 
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

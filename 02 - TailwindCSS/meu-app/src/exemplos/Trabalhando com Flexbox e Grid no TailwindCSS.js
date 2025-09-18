// src/App.js

/*

*/
import React from 'react';

function App() {
  return (
    <div className="flex flex-wrap justify-around items-center h-screen bg-gray-200">
      <div className="bg-blue-300 p-6 m-4 rounded-lg w-60">
        <h2 className="text-xl font-semibold text-white">Item 1</h2>
      </div>
      <div className="bg-blue-500 p-6 m-4 rounded-lg w-60">
        <h2 className="text-xl font-semibold text-white">Item 2</h2>
      </div>
      <div className="bg-blue-700 p-6 m-4 rounded-lg w-60">
        <h2 className="text-xl font-semibold text-white">Item 3</h2>
      </div>
    </div>
  );
}

export default App;

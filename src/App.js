import React from 'react';
import './index.css';
import placeholder from './images/hypergirl.png';

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 pr-4">
          <h1 className="text-4xl font-bold mb-4">I'm Varvara Mironov</h1>
          <p className="text-xl mb-6">A frontend developer</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
        </div>
        <div className="w-[300px] h-[300px]  rounded-lg flex items-center justify-center">
          <img
            src={placeholder}
            className='rounded-[20px]'
          ></img>
        </div>
      </div>
    </div>
  );
}
export default App;
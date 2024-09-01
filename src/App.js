import React from 'react';
import './index.css';
import placeholderPfp from './images/hypergirl.png';

function App() {
  const handleDownload = () => {
    // Replace 'your-resume.pdf' with the actual name of your PDF file
    const pdfUrl = process.env.PUBLIC_URL + '/Brian_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Varvara_Mironov_Resume.pdf'; // You can change the download file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="App min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 pr-4">
          <h1 className="text-4xl font-bold mb-4">I'm Varvara Mironov</h1>
          <p className="text-xl mb-6">A front end developer crafting mobile and web experiences </p>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full"
            onClick={handleDownload}>
              My Resume
          </button>
        </div>
        <div className="w-[300px] h-[300px]  rounded-lg flex items-center justify-center">
          <img
            src={placeholderPfp}
            className='rounded-[20px]'
          ></img>
        </div>
      </div>
    </div>
  );
}
export default App;
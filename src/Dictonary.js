import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'



const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );

      const firstDefinition = response.data[0].meanings[0].definitions[0].definition;
      setDefinition(firstDefinition);
      const firstExample = response.data[0].meanings[0].definitions[0].example;
      setExample(firstExample);

    } catch (error) {
      console.error(error);
      setDefinition('No definition found.');
      setExample('No definition found.');
    }
  };
  return (
   
    <div className="bg-white-700"> 
      <div className="container py-10">
        <h1 className="text-8xl mt-2 font-bold text-center text-indigo-500">WORD WIZARDRY</h1>
        <div className="flex items-center justify-center mt-4">
          <div className="flex border-3 border-gray-200 rounded">
            <input className="px-4 py2 md:w-80 " type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button className="bg-red-500 border-1 px-4 py-2 text-white" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <br></br><br></br>
        <h3 className="text-indigo-700 font-semibold text-center mt-4"> <span className="text-black text-3xl font-black">Definition:<br></br> <br></br> </span>{definition}</h3>
        <h3 className="text-indigo-700 font-semibold text-center mt-4"> <span className="text-black text-3xl font-black">Example:<br></br> <br></br> </span>{example}</h3>

      </div>
    </div>
  )
}

export default Dictionary
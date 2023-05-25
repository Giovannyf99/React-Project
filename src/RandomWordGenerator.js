import React, { useState, useEffect } from 'react';
import axios from 'axios';

const words = [
    'apple',
    'banana',
    'cat',
    'dog',
    'elephant',
    'fish',
    'giraffe',
    'horse',
    'igloo',
    'jaguar',
    'koala',
    'lion',
    'monkey',
    'noodle',
    'octopus',
    'penguin',
    'quokka',
    'rabbit',
    'squirrel',
    'tiger',
    'unicorn',
    'vulture',
    'whale',
    'x-ray',
    'yak',
    'zebra',
    'acorn',
    'butterfly',
    'cactus',
    'dolphin',
    'eagle',
    'flamingo',
    'guitar',
    'hedgehog',
    'ice cream',
    'jellyfish',
    'kiwi',
    'lizard',
    'mushroom',
    'narwhal',
    'ostrich',
    'panda',
    'quail',
    'raccoon',
    'snake',
    'toucan',
    'umbrella',
    'violet',
    'watermelon',
    'xylophone',
    'yoga',
    'zeppelin',
];



const RandomWordGenerator = () => {
    const [randomWord, setRandomWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const fetchRandomWord = async () => {
        try {
            const randomIndex = Math.floor(Math.random() * words.length);
            const word = words[randomIndex];
            const wordResponse = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const wordData = wordResponse.data[0];
            setRandomWord(wordData.word);
            setDefinition(wordData.meanings[0].definitions[0].definition);

            const imageResponse = await axios.get(`https://api.unsplash.com/photos/random`, {
                params: {
                    query: word,
                    client_id: 'WbRWEh0KII4th-xi8PMhzL1L1eWqPArRi2_V-PHYPBs',
                },
            });
            const imageData = imageResponse.data;
            setImageUrl(imageData.urls.regular);
        } catch (error) {
            console.log('Error fetching random word or image:', error);
        }
    };

    useEffect(() => {
        fetchRandomWord();
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <div className="container  py-10">
                <h1 className="text-7xl font-bold text-center text-indigo-500 mb-10">RANDOM WORD GENERATOR</h1>
                <div className="flex items-center justify-center mb-10">
                    <button
                        className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600"
                        onClick={fetchRandomWord}
                    >
                        Generate Random Word
                    </button>
                </div>
                {randomWord && (
                    <div className="text-black text-center">
                        <h2 className="text-3xl text-black font-bold mb-2">Random Word: {randomWord}</h2>
                        <p className="text-lg text-indigo-500">Definition: {definition}</p>
                        {imageUrl && (
                            <div className="mt-4">
                                <img src={imageUrl} alt={randomWord} className="mx-auto max-w-lg" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


export default RandomWordGenerator;

import React, { useState, useEffect } from 'react'
import '../assets/css/Jokes.css'

function Jokes() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        const getJokes = async () => {
            await fetch('https://official-joke-api.appspot.com/jokes/ten')
                .then((response) => response.json())
                .then((data) => {
                    const jokes = data.map((joke) => ({
                        id: joke.id,
                        type: joke.type,
                        setup: joke.setup,
                        punchline: joke.punchline,
                    }));
                    setJokes(jokes);
                    console.log(jokes)
                });
        };
        getJokes();
    }, []);

    return (
        <div className="jokes">
            {jokes.map((joke) => {
                return (
                    <div key={joke.id} className='jokes__container'>
                        <p className='jokes__call'>{joke.setup} </p>
                        <p className='jokes__response'>{joke.punchline}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Jokes

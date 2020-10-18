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
            <hr/>
            <div className="jokes__header">
                <h2>Top Ten Jokes</h2>
            </div>
            {jokes.map((joke) => {
                return (
                    <div key={joke.id} className='jokes__container'>
                        <li className='jokes__call'>{joke.setup} </li>
                        <p className='jokes__response'>{joke.punchline}</p>
                    </div>
                );
            })}
             <hr/>
        </div>
    )
}

export default Jokes

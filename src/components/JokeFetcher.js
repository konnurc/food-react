import React, { useEffect, useState } from 'react'

const JokeFetcher = () => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        setLoading(true)
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
         const data = await response.json();
         console.log(data)
         setJoke(`${data.setup} ... ${data.punchline}`)
          setLoading(false)
    }

    useEffect(()=>{
        fetchJoke();
    },[]);

    return loading === true ? (
        <h1>Loaading Joke......</h1>
    ) : (
        <div>
            <div>{joke}</div>
            <button onClick={fetchJoke}>Get Another Joke</button>
        </div>
    )
  
}

export default JokeFetcher

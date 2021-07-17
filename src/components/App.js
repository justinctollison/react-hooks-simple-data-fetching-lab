import { data } from "browserslist";
import React, { useState, useEffect } from "react"

function App(){
const [fetchData, setFetchData] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        setFetchData(data.message);
        setLoading(!loading)
    });
}, []);

if (!loading) return <p>Loading...</p>

    return <div>
            <img src={fetchData} alt="A Random Dog"></img>
        </div>
}

export default App;

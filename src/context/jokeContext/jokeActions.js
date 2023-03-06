export const getJoke = async ()=>{
    const res = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist&type=single`)
    const data = await res.json()
    return data
    // console.log(res)
}



export const getQuote = async ()=>{
    const res = await fetch(`https://api.quotable.io/random`)
    const data = await res.json()
    return data
    // console.log(data)
}


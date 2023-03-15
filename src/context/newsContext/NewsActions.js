export const getNews = async (topic)=>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=76900f7299d74baf843818d30a8b35cd`)
    const data = await res.json()
    return data.articles
}


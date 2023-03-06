import { useContext } from "react"
import { getNews } from "../context/NewsActions"
import NewsContext from "../context/NewsContext"

function Navbar (){

  //  const getNews   = async (topic)=>{
  //       const res =  await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2022-12-05&sortBy=publishedAt&apiKey=76900f7299d74baf843818d30a8b35cd`)
  //       const data = await res.json()
  //       return data.articles
  //       }

const{dispatch} = useContext(NewsContext)    
 const handleClick = async  (e)=>{
    e.preventDefault()
  const data = await getNews()
  dispatch({
    type:"get-news",
    payload:data
  })
    console.log(data);
    // console.log(123);
 }   

    

    return(
        <>
            <nav className="navbar bg-dark  ">
        <div className="container-fluid ">
          <span className="navbar-brand text-center text-light mb-0 h1 w-100 fs-1 ">Khabar Khajana </span>
        </div>
      </nav>
    <nav className="navbar bg-light ">
        <div className="container-fluid justify-content-evenly">
          <a href="www.google.com" className="navbar-brand">Home</a>
          <a href="www.google.com" className="navbar-brand">Top 10</a>
          <a href="www.google.com" className="navbar-brand ">About</a>
          <form className="d-flex" role="search" onSubmit={(e)=>handleClick(e)}>
            <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit"  >Search</button>
          </form>
        </div>
      </nav>
        </>
    )
}

export default Navbar
import { useContext, useEffect, useState } from "react"
import { getNews } from "../context/newsContext/NewsActions"
import NewsContext from "../context/newsContext/NewsContext"

function Navbar (){

  const {dispatch} = useContext(NewsContext)
  
  const fetchNews = async (topic)=>{
    const data = await getNews(topic)
    // console.log(data)
    dispatch({
      type:"GET_NEWS",
      payload: data
    })
  }
const [text, setText] = useState("")
const handleSubmit = async (e)=>{
  e.preventDefault()
  fetchNews(text)
  setText("")
}

useEffect(()=>{
fetchNews("india")
},[])



    return(
        <>
        <nav class="navbar bg-body p-3 shadow p-3 mb-3 bg-body-tertiary rounded">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold">Atom News</a>
    <form class="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
      <input value={text} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)}/>
      <button class="btn btn-outline-success" type="submit" >Search</button>
    </form>
  </div>
</nav>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#" onClick={(e)=>fetchNews("Business")}>Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#" onClick={(e)=>fetchNews("Finance")}>Finance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>fetchNews("sports")}>Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>fetchNews("Health")}>Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"onClick={(e)=>fetchNews("web development")}>Web Development</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>fetchNews("Programing")}>Programming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"onClick={(e)=>fetchNews("meta")}>Meta</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#"onClick={(e)=>fetchNews("science")}>Science</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>fetchNews("technology")}>Technology</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>fetchNews("Entertainment")}>Entertainment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"onClick={(e)=>fetchNews("bollywood")}>Bollywood</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>fetchNews("Fashion")}>Fashion</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
import { useContext } from "react"
import { getNews } from "../context/newsContext/NewsActions"
import NewsContext from "../context/newsContext/NewsContext"

function Navbar (){

  const {dispatch} = useContext(NewsContext)
const handleSubmit = async (e)=>{
  e.preventDefault()
  const data = await getNews()
  // console.log(data)
  dispatch({
    type:"GET_NEWS",
    payload: data
  })
}




    return(
        <>
        <nav class="navbar bg-body p-3 shadow p-3 mb-3 bg-body-tertiary rounded">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold">Atom News</a>
    <form class="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
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
          <a class="nav-link " aria-current="page" href="#">Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Finance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Web Development</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Programming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Meta</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Science</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Technology</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bollywood</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Fashion</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
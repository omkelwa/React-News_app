import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { NewsProvider } from "./context/newsContext/NewsContext"
import { QuoteProvider } from "./context/quoteContext/quoteContext"
import { JokeProvider } from "./context/jokeContext/jokeContext"


function App() {
  return (
    <NewsProvider>
      <QuoteProvider>
        <JokeProvider>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </JokeProvider>
      </QuoteProvider>
    </NewsProvider>
  )
}

export default App
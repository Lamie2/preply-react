import React from "react"
import logo from "./logo.svg"
import "./App.scss"
import { HomePage } from "./pages/HomePage/HomePage"
import { Header } from "./pages/Header/Header"

export const App = () => {
  return (
    <div className="App">
    
     <Header />
      <main>
        <HomePage />
      </main>
      <footer>
     
      </footer>
    </div>
  )
}

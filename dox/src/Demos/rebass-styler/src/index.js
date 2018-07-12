import React from "react"
import ReactDOM from "react-dom"
import Rebass from "./components/Demo"

const App = props => <Rebass />

export default App

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

import Header from './components/Header.jsx'
import Log from './components/Log.jsx'
import './App.css'
import data from './data.js'


function App() {
  const logData = data.map(log => {
    return (
      <Log 
        key={index}
        {...log}
      />
    )
  }) 
  return (
      <>
        <Header />
        <Log />
      </>
      
   )
}
  


export default App

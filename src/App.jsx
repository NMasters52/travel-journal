import Header from './components/Header.jsx'
import Log from './components/Log.jsx'
import './App.css'
import data from './data.js'


function App() {
    const logData = data.map(log => {
      return (
        <Log 
        key={log.id}
          {...log}
        />
      )
    }) 
    return (
        <>
          <Header />
          <section>
                {logData}
            </section>
        </>
        
    )
  }
  


export default App

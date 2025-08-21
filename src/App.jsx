import './App.css'
import Footer from './Footer'
import Header from './header'
import Slide from './Slide'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Slide />
        <section className="content-section">
          <div className="container">
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App

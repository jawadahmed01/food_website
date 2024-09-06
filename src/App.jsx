import Explore from "./components/Explore"
import FoodMenu from "./components/FoodMenu"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Explore />
        <FoodMenu />
        <Footer />
      </main>
    </>
  )
}

export default App

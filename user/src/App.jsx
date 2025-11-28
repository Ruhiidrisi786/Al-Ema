import MainPage from "./components/MainPage"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import About from "./components/About"
import Features from "./components/Features"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
        <Navbar />
        <MainPage/>
        <About />
        <Products />
        <Features />
        <Client />
        <Contact />
        <Footer />

    </>
  )
}
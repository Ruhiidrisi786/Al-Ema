import MainPage from "./MainPage";
import Navbar from "./Navbar";
import About from "./About";
import Products from "./Products";
import Features from "./Features";
import Client from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
      <About />
      <Products />
      <Features />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

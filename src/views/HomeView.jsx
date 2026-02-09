import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import About from "../components/About";
import Work from "../components/Work";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";


const HomeView = () => {

  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <About />
        <Work />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView
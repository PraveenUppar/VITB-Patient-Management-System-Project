import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Contact from "../../components/Home/ContactUs";
import Solution from "../../components/Home/Solution";
import About from "../../components/Home/About";
import Features from "../../components/Home/Features";
import Hero from "../../components/Home/Hero";
import Action from "../../components/Home//Action";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header></Header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero></Hero>

        {/* Features Section */}
        <Features></Features>

        {/* Call to Action Section */}
        <Action></Action>

        {/* About Section */}
        <About></About>

        {/* Solution Section */}
        <Solution></Solution>

        {/* Contact Us Section */}
        <Contact></Contact>
      </main>

      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default Home;

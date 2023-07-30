import Cards from "../components/Card";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import interpret from "../img/interpret.jpg";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <div id="about">

        <h1>About Me</h1>
        <img className="aboutImg" src={interpret} alt="interpret.png" />
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          pretium lectus id turpis. Duis risus. Praesent id justo in neque
          elementum ultrices. Nunc auctor. Cras elementum. Proin in tellus sit
          amet nibh dignissim sagittis. Integer malesuada. Fusce nibh. Nullam at
          arcu a est sollicitudin euismod. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Mauris tincidunt sem sed arcu. Aliquam id dolor. Integer
          pellentesque quam vel velit. Morbi leo mi, nonummy eget tristique non,
          rhoncus non leo. Praesent id justo in neque elementum ultrices. Mauris
          suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel
          sagittis velit mauris vel metus. Etiam ligula pede, sagittis quis,
          interdum ultricies, scelerisque eu. Praesent id justo in neque
          elementum ultrices. Nulla non lectus sed nisl molestie malesuada.
          Suspendisse sagittis ultrices augue. Aenean vel massa quis mauris
          vehicula lacinia. In convallis. Nulla non lectus sed nisl molestie
          malesuada. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos hymenaeos. Sed elit dui, pellentesque a, faucibus
          vel, interdum nec, diam. Aenean id metus id velit ullamcorper
          pulvinar. Cras pede libero, dapibus nec, pretium sit amet, tempor
          quis. Nullam eget nisl. Fusce aliquam vestibulum ipsum. Etiam quis
          quam. Quisque porta. Sed vel lectus. Donec odio tempus molestie,
          porttitor ut, iaculis quis, sem. Maecenas aliquet accumsan leo. In sem
          justo, commodo ut, suscipit at, pharetra vitae, orci.
        </p>
      </div>  
      <div>
        <h1 id="concerts">Concerts</h1>
      </div>
      <div id="cards">
        <Cards />
      </div>
      <Footer />
    </>
  );
}

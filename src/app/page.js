import Header from "@/Components/Header/Header";
import HomePage from "./Home/page";
import Services from "./Services/page";
import ConsultationPage from "./contactus/page";
import Footer from "./footer/page";
import ClientReview from "./clients/page";
import Container from "@/Components/Container/Container";
import OurCompany from "./about/page";
import TechnologyPage from "./Technology/page";


export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div style={{ marginTop: "70px" }}>
          <div id="home">
            <HomePage />
          </div>
          <div id="about">
            <OurCompany />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="clients">
            <ClientReview />
          </div>
          <div id="Technology">
            <TechnologyPage />
          </div>
          <div id="contact">
            <ConsultationPage />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
}

import HomePage from "../module/Home";
import Services from "../module/Services";
import ConsultationPage from "../module/Contactus";
import ClientReview from "../module/ClientReview";
import OurCompany from "../module/OurCompany";
import TechnologyPage from "../module/Technology";

export default function Home() {
  return (
    <div>
      <HomePage />
      <OurCompany />
      <Services />
      <ClientReview />
      <TechnologyPage />
      <ConsultationPage />
    </div>
  );
}

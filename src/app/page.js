import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import HomePage from "./Home/page";
import Services from "./Services/page";
import ConsultationPage from "./contactus/page";
import Footer from "./footer/page";
import ClientReview from "./clients/page";

export default function Home() {
  return (
   <div>
    <Header />
     <div style={{marginTop:'70px'}}>
        <HomePage />
        <Services />
        <ClientReview />
        <ConsultationPage />
        <Footer />
      </div>
   </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import HomePage from "./Home/page";
import Services from "./Services/page";
import ConsultationPage from "./contactus/page";

export default function Home() {
  return (
   <div>
    <Header />
     <div style={{ marginTop: '80px' }}>
        <HomePage />
        <Services />
        <ConsultationPage />
      </div>
   </div>
  );
}

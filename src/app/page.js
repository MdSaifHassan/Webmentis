import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import HomePage from "./Home/page";

export default function Home() {
  return (
   <div>
    <Header />
     <div style={{ marginTop: '80px' }}> {/* Adjust according to the height of your AppBar */}
        <HomePage />
      </div>
   </div>
  );
}

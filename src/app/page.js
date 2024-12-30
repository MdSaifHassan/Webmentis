import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "@/Components/Header/Header";
import HomePage from "./Home/page";

export default function Home() {
  return (
   <div>
    <ResponsiveAppBar />
     <div style={{ marginTop: '64px' }}> {/* Adjust according to the height of your AppBar */}
        <HomePage />
      </div>
   </div>
  );
}

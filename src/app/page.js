import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "./Header";
import GridLayout from "./Main";
import CenteredContent from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <GridLayout/>
      <CenteredContent/>
    </div>
  );
}

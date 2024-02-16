import Image from "next/image";
import classes from "./hero.module.css";
import dungbuiImg from "@/public/images/site/dungbui.jpg";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={dungbuiImg}
          alt="An image showing Dung Bui"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I am Dũng Bùi</h1>
      <p>I blog about web development - especially on web development</p>
    </section>
  );
}

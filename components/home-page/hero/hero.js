import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/pic.jpg"
          alt="Hero Banner"
          width={300}
          height={200}
        />
      </div>
      <h1>I'm Nimesh</h1>
      <p>Description Here</p>
    </section>
  );
};

export default Hero;

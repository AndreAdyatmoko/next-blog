import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Adyatmoko Blog!</b> Discovery the world with our blogs!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img src="https://source.unsplash.com/random/300x300" alt="random" fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus ut molestias culpa hic dicta, quaerat omnis inventore quidem nihil illo velit, tempora consectetur praesentium molestiae quis voluptates, neque rem.</p>
          <button className={styles.button}>Readmore</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

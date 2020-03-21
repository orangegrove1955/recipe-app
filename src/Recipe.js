import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, url, serves }) => {
  return (
    <a href={url}>
      <div className={styles.recipe}>
        <img src={image} alt="" />
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.bottomRow}>
          <p>{calories} calories</p>
          <p>{serves} Servings</p>
        </div>
      </div>
    </a>
  );
};

export default Recipe;

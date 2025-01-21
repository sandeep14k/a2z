import React from "react";
import styles from "../css/Sponsers.module.css";

const Sponsers = () => {
  const stickers = [
    {
      img: "1.png",
    },
    {
      img: "2.png",
    },
    {
      img: "3.png",
    },
    {
      img: "4.png",
    },
  ];
  return (
    <div className={styles.herosectional}>
      <div className={styles.para}>
        <span className={styles.clients}>CLIENTS</span>
        <h2 className={styles.official}>Official Sponsors</h2>
      </div>
      <div>
        <h3 className={styles.platinum}>Platinum Sponsors</h3>
      </div>
      <div className={styles.stickerscontainer}>
        {stickers.map((sticker, index) => (
          <div key={index} className={styles.sticker}>
            <img
              src={sticker.img}
              alt={sticker.description}
              className={styles.stickerimg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
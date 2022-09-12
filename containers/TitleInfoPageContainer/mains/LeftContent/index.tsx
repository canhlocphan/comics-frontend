// libs
import React from "react";
// components
import MainInfo from "../../components/MainInfo";
import PricingAndPromotion from "../../components/PricingAndPromotion";
import ChapterSession from "../../components/ChapterSession";
// others
import styles from "./styles.module.scss";

const LeftContent = () => <div className={styles["left-content-wrapper"]}>
  <MainInfo />
  <PricingAndPromotion />
  <ChapterSession />
</div>;

export default LeftContent;

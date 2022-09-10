// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface ITitleName {
	titleName: string;
}

const TitleName = ({ titleName }: ITitleName) => (
	<div className={styles["title-name-wrapper"]}>{titleName}</div>
);

export default TitleName;

// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface IFreeChapters {
	freeChapters: number;
}

const FreeChapters = ({ freeChapters }: IFreeChapters) => (
	<div className={styles["free-chapters-wrapper"]}>
		<div className={styles["free-chapters-title"]}>FREE</div>
		<div className={styles["free-chapters"]}>{`${freeChapters} chapters`}</div>
	</div>
);

export default FreeChapters;

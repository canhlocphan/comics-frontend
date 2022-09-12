// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface ITitle {
	title: string;
}

const Title = ({ title }: ITitle) => (
	<div className={styles["title-wrapper"]}>{title}</div>
);

export default Title;

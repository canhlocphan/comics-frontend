// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface IBorderItem {
	children: React.ReactNode;
	style?: object;
}

const BorderItem = ({ children, style }: IBorderItem) => (
	<div className={styles["border-item-wrapper"]} style={style}>
		{children}
	</div>
);

export default BorderItem;

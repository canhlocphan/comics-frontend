// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface IPrice {
	price: string;
}

const Price = ({ price }: IPrice) => (
	<div className={styles["price-wrapper"]}>
		<div className={styles["price"]}>{price}</div>
	</div>
);

export default Price;

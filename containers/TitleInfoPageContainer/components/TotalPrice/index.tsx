// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface TotalPrice {
	totalPrice: number;
}

const TotalPrice = ({ totalPrice }: TotalPrice) => (
	<div className={styles["total-price-wrapper"]}>
		<div className={styles["total-price-wrapper-inner"]}>
			<div className={styles["total-price-title"]}>Total Price</div>
			<div className={styles["total-price-title-wrapper"]}>
				<div className={styles["total-price-text"]}>
					Instant access to all chapters
				</div>
				<div className={styles["circle"]} />
				<div className={styles["total-price-text"]}>No Ad</div>
			</div>
		</div>
		<div className={styles["total-price-right"]}>
			<Image src="/images/price.svg" alt="reads" width={16} height={13} />
			<div className={styles["total-price"]}>{totalPrice}</div>
		</div>
	</div>
);

export default TotalPrice;

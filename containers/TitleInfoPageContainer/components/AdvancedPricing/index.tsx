// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface TotalPrice {
	discount: number;
	totalPrice: number;
	price: number;
}

const AdvancedPricing = ({ discount, totalPrice, price }: TotalPrice) => (
	<div className={styles["advanced-pricing-wrapper"]}>
		<div className={styles["advanced-pricing-wrapper-inner"]}>
			<div className={styles["advanced-pricing-title-wrapper"]}>
				<div className={styles["advanced-pricing-title"]}>
					Save money with INKR Extra
				</div>
				<Image src="/images/union.svg" alt="reads" width={16} height={16} />
			</div>
			<div className={styles["advanced-pricing-title-wrapper"]}>
				<div className={styles["advanced-pricing-text"]}>
					Instant access to all chapters
				</div>
				<div className={styles["circle"]} />
				<div className={styles["advanced-pricing-text"]}>No Ad</div>
				<div className={styles["circle"]} />
				<div className={styles["advanced-pricing-text"]}>Extra saving</div>
			</div>
		</div>
		<div className={styles["advanced-pricing-right-wrapper"]}>
			<div className={styles["advanced-pricing-right-wrapper-inner"]}>
				<div className={styles["advanced-pricing-right-dis"]}>{`-${discount}%`}</div>
				<div className={styles["advanced-pricing-right"]}>
					<Image src="/images/price.svg" alt="reads" width={16} height={13} />
					<div className={styles["advanced-pricing-del"]}>{totalPrice}</div>
					<div className={styles["advanced-pricing"]}>{price}</div>
				</div>
			</div>
			<div className={styles["advanced-pricing-des"]}>Saving rates may vary</div>
		</div>
	</div>
);

export default AdvancedPricing;

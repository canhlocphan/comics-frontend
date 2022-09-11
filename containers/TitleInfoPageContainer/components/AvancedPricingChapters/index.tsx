// libs
import React from "react";
// components
import TotalPrice from "../TotalPrice";
import AdvancedPricing from "../AdvancedPricing";
// others
import styles from "./styles.module.scss";

interface IAvancedPricingChapters {
	advancedPrice: {
		discount: number;
		totalPrice: number;
		price: number;
	};
}

const AvancedPricingChapters = ({ advancedPrice }: IAvancedPricingChapters) => {
	const { discount, totalPrice, price } = advancedPrice;
	return (
		<div className={styles["advanced-pricing-chapters-wrapper"]}>
			<TotalPrice totalPrice={35} />
			<AdvancedPricing {...{ discount, totalPrice, price }} />
		</div>
	);
};

export default AvancedPricingChapters;

// libs
import React from "react";
// components
import PricingChapters from "../PricingChapters";
import AvancedPricingChapters from "../AvancedPricingChapters";
import LearnMore from "../LearnMore";
// dataSources
import { pricingAndPromotion } from "../../../../dataSources";
// others
import styles from "./styles.module.scss";

const PricingAndPromotion = () => (
	<div className={styles["pricing-and-promotion-wrapper"]}>
		<div className={styles["pricing-and-promotion-title"]}>
			Pricing & Promotion
		</div>
		<div className={styles["pricing-and-promotion-wrapper-inner"]}>
			<PricingChapters detailPrice={pricingAndPromotion} />
			<AvancedPricingChapters advancedPrice={pricingAndPromotion} />
			<LearnMore />
		</div>
	</div>
);

export default PricingAndPromotion;

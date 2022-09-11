// libs
import React from "react";
// components
import FreeChapters from "../FreeChapters";
import LockedChapters from "../LockedChapters";
// others
import styles from "./styles.module.scss";

interface IPricingChapters {
	detailPrice: {
		freeChapters: number;
		lockedChapters: number;
		pricingUnlocked: number;
	};
}

const PricingChapters = ({ detailPrice }: IPricingChapters) => {
	const { freeChapters, lockedChapters, pricingUnlocked } = detailPrice;
	return (
		<div className={styles["pricing-chapters-wrapper"]}>
			<FreeChapters freeChapters={freeChapters} />
			<LockedChapters
				lockedChapters={lockedChapters}
				pricingUnlocked={pricingUnlocked}
			/>
		</div>
	);
};

export default PricingChapters;

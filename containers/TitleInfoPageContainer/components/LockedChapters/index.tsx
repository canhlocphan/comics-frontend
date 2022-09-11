// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface LockedChapters {
	lockedChapters: number;
	pricingUnlocked: number;
}

const LockedChapters = ({
	lockedChapters,
	pricingUnlocked,
}: LockedChapters) => (
	<div className={styles["locked-chapters-wrapper"]}>
		<div className={styles["locked-chapters-title"]}>LOCKED</div>
		<div className={styles["locked-chapters"]}>
			<div>{`${lockedChapters} chapters`}</div>
			<div className={styles["locked-detail"]}>{`(`}</div>
			<Image src="/images/price.svg" alt="price" width={16} height={13} />
			<div
				className={styles["locked-detail"]}
			>{`${pricingUnlocked}/ chapter)`}</div>
		</div>
	</div>
);

export default LockedChapters;

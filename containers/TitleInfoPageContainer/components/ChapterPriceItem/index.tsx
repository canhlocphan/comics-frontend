// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface IChapterPriceItem {
	price?: string;
}

const ChapterPriceItem = ({ price }: IChapterPriceItem) => (
	<div className={styles["chapter-item-price-wrapper"]}>
		{price === "FREE" ? (
			<div className={styles["chapter-item-price"]}>{price}</div>
		) : (
			<div className={styles["chapter-item-price"]}>
				<Image src="/images/price.svg" alt="reads" width={16} height={16} />
				<div className={styles["chapter-item-price-icon"]}>{`${price}`}</div>
			</div>
		)}
	</div>
);

export default ChapterPriceItem;

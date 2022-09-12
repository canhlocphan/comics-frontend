// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface IRelatedTitleItem {
	title: string;
	image: string;
	tag: string;
	type: string;
	reads: string;
}

const RelatedTitleItem = ({
	title,
	image,
	tag,
	type,
	reads,
}: IRelatedTitleItem) => (
	<div className={styles["related-title-item-wrapper"]}>
		<div className={styles["related-title-item-image"]}>
			<Image src={image} alt="anime1" width={80} height={120} />
		</div>
		<div className={styles["related-title-item"]}>
			<div className={styles["related-title-title"]}>{title}</div>
			<div className={styles["related-title-tag-wrapper"]}>
				<Image src="/images/union.svg" alt="anime" width={16} height={16} />
				<div className={styles["related-title-tag"]}>{tag}</div>
			</div>
			<div className={styles["related-title-text"]}>{type}</div>
			<div className={styles["related-title-text"]}>{reads}</div>
		</div>
	</div>
);

export default RelatedTitleItem;

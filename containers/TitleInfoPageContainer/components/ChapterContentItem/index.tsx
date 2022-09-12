// libs
import React from "react";
import Image from "next/image";
// components
import ChapterPriceItem from "../ChapterPriceItem";
// others
import styles from "./styles.module.scss";

interface IChapterContentItem {
	title: string;
	description?: string;
	image: string;
	isBlocked: boolean;
	isWatched?: boolean;
}

const ChapterContentItem = ({
	title,
	description,
	image,
	isBlocked,
	isWatched,
}: IChapterContentItem) => (
	<div className={styles["chapter-item-wrapper-inner"]}>
		<div className={styles["chapter-item-image-wrapper"]}>
			<Image src={image} alt={title} width={78} height={62} />
			{isBlocked && <div className={styles["chapter-item-image"]}></div>}
			{isBlocked && (
				<div className={styles["chapter-item-image-icon"]}>
					<Image src="/images/lock.svg" alt="lock" width={16} height={13} />
				</div>
			)}
			{isWatched && (
				<div className={styles["chapter-item-watched-wrapper"]}>
					<div className={styles["chapter-item-watched"]}></div>
				</div>
			)}
		</div>
		<div className={styles["chapter-item-content"]}>
			<div className={styles["chapter-item-content-title"]}>{title}</div>
			<div className={styles["chapter-item-content-description"]}>
				{description}
			</div>
		</div>
	</div>
);

export default ChapterContentItem;

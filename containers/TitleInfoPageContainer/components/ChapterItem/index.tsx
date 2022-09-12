// libs
import React from "react";
import Image from "next/image";
// components
import ChapterPriceItem from "../ChapterPriceItem";
// others
import styles from "./styles.module.scss";
import ChapterContentItem from "../ChapterContentItem";

interface IChapterItem {
	title: string;
	description?: string;
	image: string;
	isBlocked: boolean;
	price?: string;
	isWatched?: boolean;
}

const ChapterItem = ({
	title,
	description,
	image,
	isBlocked,
	price,
	isWatched,
}: IChapterItem) => (
	<div className={styles["chapter-item-wrapper"]}>
		<div className={styles["chapter-item-wrapper-inner"]}>
			<ChapterContentItem
				{...{ title, description, image, isBlocked, isWatched }}
			/>
			{price && <ChapterPriceItem price={price} />}
		</div>
	</div>
);

export default ChapterItem;

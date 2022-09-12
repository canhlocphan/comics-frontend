// libs
import React from "react";
// components
import ChapterItem from "../ChapterItem";
// others
import styles from "./styles.module.scss";

interface IChapters {
	chapters: {
		title: string;
		description?: string;
		image: string;
		isBlocked: boolean;
		price?: string;
		isWatched?: boolean;
	}[];
}

const Chapters = ({ chapters }: IChapters) => (
	<div className={styles["chapters-wrapper"]}>
		{chapters.map(
			({ title, description, image, isBlocked, price, isWatched }) => (
				<ChapterItem
					key={title}
					{...{ title, description, image, isBlocked, price, isWatched }}
				/>
			)
		)}
	</div>
);

export default Chapters;

// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface IContentAndChapter {
	content: string;
	chapters: string;
}

const ContentAndChapter = ({ content, chapters }: IContentAndChapter) => (
	<div className={styles["content-and-chapter-wrapper"]}>
		<div className={styles["content"]}>{content}</div>
		<div className={styles["circle"]} />
		<div className={styles["chapter"]}>{chapters}</div>
	</div>
);

export default ContentAndChapter;

// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import Chapters from "../Chapters";
// others
import styles from "./styles.module.scss";

interface ILastRead {
	lastReads: {
		title: string;
		image: string;
		isBlocked: boolean;
		isWatched: boolean;
	}[];
}

const LastRead = ({ lastReads }: ILastRead) => (
	<div className={styles["last-read-wrapper"]}>
		<div className={styles["last-read-wrapper-inner"]}>
			<Title title="Last read" />
		</div>
		<Chapters chapters={lastReads} />
	</div>
);

export default LastRead;

// libs
import React from "react";
// components
import ChapterList from "../ChapterList";
import LastRead from "../LastRead";
// dataSources
import { chapterSession } from "../../../../dataSources";
// others
import styles from "./styles.module.scss";

const ChapterSession = () => (
	<div className={styles["chapter-session-wrapper"]}>
		<LastRead lastReads={chapterSession?.lastReads} />
		<ChapterList
			chapters={chapterSession?.chapters}
			subTitle={chapterSession.subTitle}
		/>
	</div>
);

export default ChapterSession;

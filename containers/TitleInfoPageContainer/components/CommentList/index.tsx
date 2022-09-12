// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

const CommentList = () => (
	<div className={styles["comment-list-wrapper"]}>
		<div>
			<Image src="/images/avatar.svg" alt="reads" width={32} height={32} />
		</div>
		<div className={styles["comment-list-wrapper-inner"]}>
			<div className={styles["comment-des"]}>
				<div className={styles["comment-des-user"]}>Han solo</div>
				<div className={styles["comment-des-time"]}>
					Commented on Chapter 35
				</div>
				<div className={styles["comment-des-time"]}>24 min. ago</div>
			</div>
			<div className={styles["comment-des-inbox"]}>
				I had no idea such a sequel was coming as I thought the show had ended
				and Kyoto Animation took a hard hit from the tragedy but currently 4
				episodes in as of writing this review, and I love every second of it.
			</div>
			<div className={styles["comment-list-interactive-wrapper"]}>
				<Image src="/images/like.svg" alt="reads" width={12} height={12} />
				<div className={styles["comment-list-interactive-text"]}>61</div>
				<Image src="/images/message.svg" alt="reads" width={12} height={12} />
				<div className={styles["comment-list-interactive-text"]}>12</div>
				<div className={styles["comment-list-interactive-reply"]}>Reply</div>
			</div>
		</div>
	</div>
);

export default CommentList;

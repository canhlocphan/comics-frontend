// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

const CommentForm = () => (
	<div className={styles["comment-form-wrapper"]}>
		<div>
			<Image
				src="/images/comment-avatar.svg"
				alt="reads"
				width={32}
				height={32}
			/>
		</div>
		<div className={styles["comment-form-wrapper-inner"]}>
			<div className={styles["comment-form-input"]}>Add your comment</div>
			<div className={styles["comment-form-button"]}>
				<Image src="/images/Send.svg" alt="reads" width={14} height={14} />
				<div className={styles["comment-form-button-text"]}>Add comment</div>
			</div>
		</div>
	</div>
);

export default CommentForm;

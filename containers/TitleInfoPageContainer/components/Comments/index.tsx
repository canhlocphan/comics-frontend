// libs
import React from "react";
// components
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
// others
import styles from "./styles.module.scss";

const Comments = () => (
	<div className={styles["comments-wrapper"]}>
		<CommentList />
		<CommentForm />
	</div>
);

export default Comments;

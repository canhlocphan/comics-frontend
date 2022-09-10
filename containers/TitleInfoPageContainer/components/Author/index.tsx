// libs
import React from "react";
// others
import styles from "./styles.module.scss";

interface IAuthor {
	author: string;
}

const Author = ({ author }: IAuthor) => (
	<div className={styles["author-wrapper"]}>{author}</div>
);

export default Author;

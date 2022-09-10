// libs
import React from "react";
// components
import BorderItem from "../../../../components/BorderItem";
// others
import styles from "./styles.module.scss";

interface ICategoryItem {
	tag: string;
}

const CategoryItem = ({ tag }: ICategoryItem) => (
	<BorderItem>
		<div className={styles["category-item"]}>{tag}</div>
	</BorderItem>
);

export default CategoryItem;

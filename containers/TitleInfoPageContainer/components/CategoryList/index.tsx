// libs
import React from "react";
// components
import CategoryItem from "../CategoryItem";
// others
import styles from "./styles.module.scss";

interface ICategoryList {
	categories: { key: string; tag: string }[];
}

const CategoryList = ({ categories }: ICategoryList) => (
	<div className={styles["categorie-list-wrapper"]}>
		{categories.map(({ key, tag }) => (
			<CategoryItem key={key} tag={tag} />
		))}
	</div>
);

export default CategoryList;

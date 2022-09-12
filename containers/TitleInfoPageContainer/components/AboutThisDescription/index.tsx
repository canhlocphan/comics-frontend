// libs
import React from "react";
// components
import AboutThisImages from "../AboutThisImages";
import CategoryItem from "../CategoryItem";
// others
import styles from "./styles.module.scss";

const categories = [
	{ key: "1", tag: "Horror" },
	{ key: "2", tag: "Psychological" },
	{ key: "3", tag: "Seinen" },
];

const AboutThisDescription = ({ isShow }: { isShow: boolean }) => (
	<div className={styles["about-this-description-wrapper"]}>
		<div className={styles["about-this-description"]}>Genres</div>
		<div className={styles["about-this-categories"]}>
			{categories.map(({ key, tag }) => (
				<CategoryItem key={key} tag={tag} />
			))}
		</div>
		<div className={styles["about-this-description"]}>Summary</div>
		<div className={styles["about-this-content"]}>
			Kasane is an ugly girl who is severely bullied by her classmates because
			of her appearance; making things worse, Kasane's mother was a beautiful
			actress to whom Kasane is a dark contrast, even though she is as talented
			as her mother. However, there is nothing to do with this.
		</div>
		{isShow && <AboutThisImages />}
	</div>
);

export default AboutThisDescription;

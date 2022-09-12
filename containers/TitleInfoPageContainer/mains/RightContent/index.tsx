// libs
import React from "react";
// components
import AboutThis from "../../components/AboutThis";
import Comments from "../../components/Comments";
import GetApp from "../../components/GetApp";
import RelatedTitles from "../../components/RelatedTitles";
// others
import styles from "./styles.module.scss";

const RightContent = () => (
	<div className={styles["right-content-wrapper"]}>
		<AboutThis />
		<RelatedTitles />
		<Comments />
		<GetApp />
	</div>
);

export default RightContent;

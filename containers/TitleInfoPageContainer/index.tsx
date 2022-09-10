// libs
import React from "react";
// components
import LeftContent from "./mains/LeftContent";
import RightContent from "./mains/RightContent";
// others
import css from "./styles.module.scss";

const TitleInfoPageContainer = () => (
	<div className={css["title-info-page-container"]}>
		<LeftContent />
		<RightContent />
	</div>
);

export default TitleInfoPageContainer;

// libs
import React, { useState } from "react";
// components
import Title from "../../../../components/Title";
import AboutThisDescription from "../AboutThisDescription";
// others
import styles from "./styles.module.scss";

const AboutThis = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className={styles["about-this-wrapper"]}>
			<Title title="About This" />
			<AboutThisDescription isShow={isShow} />
			<div
				className={styles["about-this-show"]}
				onClick={() => setIsShow(true)}
			>
				Show More
			</div>
		</div>
	);
};

export default AboutThis;

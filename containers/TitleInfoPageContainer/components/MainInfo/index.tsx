// libs
import React from "react";
// components
import Poster from "../Poster";
import MainInfoSession from "../MainInfoSession";
import Others from "../Others";
// dataSources
import { mainInfo } from "../../../../dataSources";
// others
import styles from "./styles.module.scss";

const MainInfo = () => (
	<div className={styles["main-info-wrapper"]}>
		<div className={styles["main-info-wrapper-inner"]}>
			<Poster poster={mainInfo?.poster} />
			<MainInfoSession mainInfo={mainInfo} />
		</div>
		<Others />
	</div>
);

export default MainInfo;

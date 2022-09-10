// libs
import React from "react";
import Image from "next/image";
// components
import BorderItem from "../../../../components/BorderItem";
// others
import styles from "./styles.module.scss";

const Others = () => (
	<div className={styles["others-wrapper"]}>
		<BorderItem style={{ padding: "6px 8px 6px 8px", cursor: "pointer" }}>
			<Image src="/images/share.svg" alt="reads" width={16} height={13} />
		</BorderItem>
		<BorderItem style={{ padding: "6px 8px 6px 8px", cursor: "pointer" }}>
			<Image src="/images/other.svg" alt="reads" width={16} height={13} />
		</BorderItem>
	</div>
);

export default Others;

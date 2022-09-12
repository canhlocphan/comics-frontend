// libs
import React from "react";
import Image from "next/image";
// components
import BorderItem from "../../../../components/BorderItem";
// others
import styles from "./styles.module.scss";

const FunctionChapters = () => (
	<div className={styles["function-chapter-wrapper"]}>
		<BorderItem style={{ padding: "6px 8px 6px 8px", cursor: "pointer" }}>
			<Image src="/images/bell.svg" alt="reads" width={16} height={16} />
		</BorderItem>
		<BorderItem style={{ padding: "6px 8px 6px 8px", cursor: "pointer" }}>
			<Image src="/images/sort.svg" alt="reads" width={16} height={16} />
		</BorderItem>
	</div>
);

export default FunctionChapters;

// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface IPoster {
	poster: {
		src: string;
		alt: string;
	};
}

const Poster = ({ poster }: IPoster) => (
	<div className={styles["poster-wrapper"]}>
		<Image src={poster.src} alt={poster.alt} width={180} height={270} />
	</div>
);

export default Poster;

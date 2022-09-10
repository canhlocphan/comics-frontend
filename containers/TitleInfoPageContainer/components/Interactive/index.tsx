// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

interface IInteractive {
	reads: string;
	likes: string;
}

const Interactive = ({ reads, likes }: IInteractive) => (
	<div className={styles["interactive-wrapper"]}>
		<div className={styles["reads-wrapper"]}>
			<Image src="/images/reads.svg" alt="reads" width={16} height={13} />
			<div className={styles["reads"]}>{reads}</div>
		</div>
		<div className={styles["likes-wrapper"]}>
			<Image src="/images/likes.svg" alt="likes" width={16} height={13} />
			<div className={styles["likes"]}>{likes}</div>
		</div>
	</div>
);

export default Interactive;

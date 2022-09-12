// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

const GetApp = () => (
	<div className={styles["get-app-wrapper"]}>
		<div className={styles["get-app-wrapper-inner"]}>
			<div className={styles["get-app-header"]}>Get The App</div>
			<div className={styles["get-app-content"]}>
				Love this title? Scan the QR code to continute reading right on your
				mobidle devices
			</div>
		</div>
		<Image src="/images/qrcode.svg" alt="qrcode" width={100} height={100} />
	</div>
);

export default GetApp;

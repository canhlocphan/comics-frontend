// libs
import React from "react";
import Image from "next/image";
// components
import Title from "../../../../components/Title";
import CategoryItem from "../CategoryItem";
// others
import styles from "./styles.module.scss";

const aboutThisImages = [
	{ key: "1", image: "/images/Rectangle 1959.svg" },
	{ key: "2", image: "/images/Rectangle 1959.svg" },
	{ key: "3", image: "/images/Rectangle 1959.svg" },
	{ key: "4", image: "/images/Rectangle 1959.svg" },
	{ key: "5", image: "/images/Rectangle 1959.svg" },
];

const AboutThisImages = () => (
	<div className={styles["about-this-images-wrapper"]}>
		{aboutThisImages.map(({ key, image }: { key: string; image: string }) => (
			<Image key={key} src={image} alt="about" width={84} height={126} />
		))}
	</div>
);

export default AboutThisImages;

import { motion } from "motion/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
const MusicPlayerSongDetails = () => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
	const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(false);
	const [titleOffset, setTitleOffset] = useState<number>(0);
	const onTitleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
		setIsMouseOver(true);
		const textTruncated =
			e.currentTarget.offsetWidth < e.currentTarget.scrollWidth;
		setTitleOffset(e.currentTarget.scrollWidth - e.currentTarget.offsetWidth);
		if (textTruncated) {
			setIsAnimationPlaying(true);
		}
	};
	const onTitleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
		setIsMouseOver(false);
	};
	return (
		<div className="flex flex-row gap-4 w-[30%] min-w-[245px]">
			<button
				className="flex rounded-lg overflow-hidden w-[56px] h-[56px] shrink-0"
				type="button"
			>
				<img
					className="w-[56px] h-[56px]"
					src={"https://placehold.jp/56x56.png"}
					alt="songThumbnail"
				/>
			</button>
			<div className="flex flex-col my-auto truncate overflow-hidden">
				{isMouseOver || isAnimationPlaying ? (
					<motion.a
						className="text-start text-white text-sm hover:underline"
						href={"/"}
						onMouseEnter={onTitleEnter}
						onMouseLeave={onTitleLeave}
						initial={{ transform: "translateX(0px)" }}
						animate={{
							transform: [
								"translateX(0px)",
								"translateX(0px)",
								`translateX(-${titleOffset}px)`,
								`translateX(-${titleOffset}px)`,
								"translateX(0px)",
							],
						}}
						transition={{
							duration: 25 / 4, // Divide character length of title by 4
							ease: "linear",
							repeat: Number.POSITIVE_INFINITY,
						}}
						onUpdate={(latest) => {
							const translateX = latest.transform.toString();
							const startIndex = translateX.indexOf("(");
							const endIndex = translateX.indexOf("px");
							if (
								Number.parseFloat(
									translateX.substring(startIndex + 1, endIndex),
								) === 0
							) {
								setIsAnimationPlaying(false);
							}
						}}
					>
						Knockin' On Heaven's Door
					</motion.a>
				) : (
					<a
						className="text-start text-white text-sm hover:underline"
						href={"/"}
						onMouseEnter={onTitleEnter}
						onMouseLeave={onTitleLeave}
					>
						Knockin' On Heaven's Door
					</a>
				)}
				<a
					className="text-start text-[#ffffff80] text-sm hover:underline hover:text-white"
					href={"/"}
				>
					Bob Dylan
				</a>
			</div>
			<button type="button">
				<FaHeart size={20} color="#ffffff" />
			</button>
		</div>
	);
};

export default MusicPlayerSongDetails;

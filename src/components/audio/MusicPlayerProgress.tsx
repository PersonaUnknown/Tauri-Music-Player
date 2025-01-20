import { motion } from "motion/react";
import { useRef, useState } from "react";
import { FaBackward, FaForward, FaPlay, FaShuffle } from "react-icons/fa6";
import { SlLoop } from "react-icons/sl";
const MusicPlayerProgress = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const [knobPosition, setKnobPosition] = useState<number>(
		divRef?.current?.offsetLeft ?? 0,
	);
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
	const [audioProgress, setAudioProgress] = useState<number>(10);

	const knobSize = 25;
	const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsMouseOver(true);
	};
	const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsMouseOver(false);
	};
	const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (isMouseOver) {
			const left = divRef?.current?.offsetLeft ?? 0;
			const right =
				left + ((divRef?.current?.offsetWidth ?? 0) * audioProgress) / 100;
			const clampedX = Math.max(Math.min(e.pageX, right), left);
			setKnobPosition(clampedX);
		}
	};
	return (
		<div className="flex flex-col w-[30%] min-w-[245px]">
			<div className="flex flex-row gap-6 mx-auto">
				<button type="button">
					<FaShuffle size={20} color={"#ffffff"} />
				</button>
				<button type="button">
					<FaBackward size={20} color={"#ffffff"} />
				</button>
				<button type="button">
					<FaPlay size={30} color={"#ffffff"} />
				</button>
				<button type="button">
					<FaForward size={20} color={"#ffffff"} />
				</button>
				<button type="button">
					<SlLoop size={20} color={"#ffffff"} />
				</button>
			</div>
			<div className="flex flex-row mt-auto text-white items-center gap-2">
				<div>0:00</div>
				<div
					className="w-full bg-[#3f3f3f] h-2 rounded-full overflow-hidden cursor-pointer"
					onMouseEnter={onMouseEnter}
					onMouseMove={onMouseMove}
					onMouseLeave={onMouseLeave}
					ref={divRef}
				>
					<motion.div
						className="h-full"
						style={{
							backgroundColor: isMouseOver ? "#293265" : "#ffffff",
						}}
						animate={{
							width: `${audioProgress}%`,
						}}
						transition={{
							duration: 0,
						}}
					/>
				</div>
				<div>10:00</div>
				<motion.div
					className="text-white rounded-full absolute bg-[#d3d3d3] z-10 pointer-events-none"
					style={{
						opacity: isMouseOver ? 1 : 0,
						width: knobSize,
						height: knobSize,
						left: knobPosition - knobSize / 2,
					}}
				/>
			</div>
		</div>
	);
};
export default MusicPlayerProgress;

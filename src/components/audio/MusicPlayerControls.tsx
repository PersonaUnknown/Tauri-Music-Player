import { useState } from "react";
import {
	FaVolumeHigh,
	FaVolumeLow,
	FaVolumeOff,
	FaVolumeXmark,
} from "react-icons/fa6";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { MdInfoOutline } from "react-icons/md";
const MusicPlayerControls = () => {
	const [volumeLevel, setVolumeLevel] = useState<number>(1);
	const [isMuted, setIsMuted] = useState<boolean>(false);
	const onToggleMute = () => {
		setIsMuted((prev) => !prev);
	};
	const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseFloat(e.currentTarget.value);
		setVolumeLevel(value);
	};
	return (
		<div className="flex flex-row w-[30%] min-w-[245px] gap-2 ml-auto">
			<button type="button">
				<MdInfoOutline size={25} className="text-white" />
			</button>
			<button type="button">
				<LiaMicrophoneAltSolid size={25} className="text-white" />
			</button>
			<button type="button">
				<HiOutlineQueueList size={25} className="text-white" />
			</button>
			<button type="button" onClick={onToggleMute}>
				{isMuted ? (
					<FaVolumeXmark size={25} className="text-white" />
				) : volumeLevel <= 0 ? (
					<FaVolumeOff size={25} className="text-white" />
				) : volumeLevel >= 0.5 ? (
					<FaVolumeHigh size={25} className="text-white" />
				) : (
					<FaVolumeLow size={25} className="text-white" />
				)}
			</button>
			<input
				type="range"
				min={0}
				max={1}
				step={0.01}
				value={volumeLevel}
				onChange={onSliderChange}
			/>
		</div>
	);
};
export default MusicPlayerControls;

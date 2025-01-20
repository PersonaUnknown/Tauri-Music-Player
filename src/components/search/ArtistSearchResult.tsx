import { motion } from "motion/react";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import type { SpotifyArtist } from "../../types/type";
const ArtistSearchResult = ({ artist }: ArtistSearchResultProps) => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
	const onMouseEnter = () => {
		setIsMouseOver(true);
	};
	const onMouseLeave = () => {
		setIsMouseOver(false);
	};
	const navigate = useNavigate();
	const navigateToArtistPage = () => {};
	return (
		<button
			className="hover:bg-[#282828] p-4 rounded-xl text-start"
			type="button"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={navigateToArtistPage}
		>
			<div className="w-48 h-48 mb-2 relative">
				<img
					className="w-48 h-48 rounded-full"
					src={artist.thumbnail}
					alt="artist"
				/>
				<motion.div
					className={"absolute right-2"}
					initial={{
						bottom: 10,
						opacity: 0,
					}}
					animate={{
						bottom: isMouseOver ? 25 : 10,
						opacity: isMouseOver ? 1 : 0,
					}}
				>
					<FaPlayCircle size={55} color="#293265" />
				</motion.div>
			</div>
			<div className="text-white font-semibold">{artist.artistName}</div>
			<div className="text-[#ffffff80]">{artist.type}</div>
		</button>
	);
};
interface ArtistSearchResultProps {
	artist: SpotifyArtist;
}
export default ArtistSearchResult;

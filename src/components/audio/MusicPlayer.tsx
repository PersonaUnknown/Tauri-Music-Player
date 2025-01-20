import MusicPlayerControls from "./MusicPlayerControls";
import MusicPlayerProgress from "./MusicPlayerProgress";
import MusicPlayerSongDetails from "./MusicPlayerSongDetails";
const MusicPlayer = () => {
	return (
		<div className="absolute bottom-0 left-0 right-0 flex flex-row m-0 p-4 bg-black w-screen">
			<MusicPlayerSongDetails />
			<MusicPlayerProgress />
			<MusicPlayerControls />
		</div>
	);
};
export default MusicPlayer;

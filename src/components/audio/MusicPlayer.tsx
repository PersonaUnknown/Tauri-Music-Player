import MusicPlayerSongDetails from "./MusicPlayerSongDetails";
const MusicPlayer = () => {
	return (
		<div className="absolute bottom-0 flex flex-row p-4 bg-black w-screen">
			<MusicPlayerSongDetails />
			<div className="flex flex-col w-[30%] min-w-[240px]" />
			<div className="flex flex-row w-[30%] min-w-[240px]" />
		</div>
	);
};
export default MusicPlayer;

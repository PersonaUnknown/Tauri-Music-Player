import { FaPlusCircle } from "react-icons/fa";
import { MdLocalLibrary } from "react-icons/md";
const UserSideBar = () => {
	return (
		<div className="flex flex-col text-white min-w-72 p-4 bg-[#3f3f3f] gap-4">
			<div className="flex flex-row items-center gap-3 text-[#1f1f1f]">
				<MdLocalLibrary size={40} />
				<div className="text-xl font-bold">Your Library</div>
				<button
					type="button"
					className="ml-auto text-[#ffffff] hover:text-[#ffffff80] transition hover:scale-110"
				>
					<FaPlusCircle size={20} />
				</button>
			</div>
			<div className="flex flex-row flex-wrap gap-2">
				<button
					className="rounded-full bg-[#282828] hover:bg-[#1f1f1f] px-4 py-2 text-white"
					type="button"
				>
					Songs
				</button>
				<button
					className="rounded-full bg-[#282828] hover:bg-[#1f1f1f] px-4 py-2 text-white"
					type="button"
				>
					Playlists
				</button>
			</div>
			<div className="bg-[#282828] rounded-xl p-4">
				<div className="font-bold">Create your first playlist</div>
				<div className="text-sm">It's easy, we'll help you</div>
				<button
					type="button"
					className="bg-white rounded-full mt-8 px-4 p-1.5 text-black font-bold transition hover:bg-[#ffffff80] hover:scale-105"
				>
					Create Playlist
				</button>
			</div>
		</div>
	);
};
export default UserSideBar;

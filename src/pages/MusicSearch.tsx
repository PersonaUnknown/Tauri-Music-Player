import { useRef } from "react";
import ArtistSearchResult from "../components/search/ArtistSearchResult";
import SearchBar, { type SearchBarRef } from "../components/search/SearchBar";
import { TestArtists } from "../debug/data";
const MusicSearch = () => {
	const searchBarRef = useRef<SearchBarRef>(null);
	const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div className="bg-[#121212] flex flex-col w-screen h-screen">
			<div className="text-white text-4xl text-center p-4">Music Search</div>
			<div className="mx-auto">
				<SearchBar ref={searchBarRef} onSubmit={onSearchSubmit} />
			</div>
			<div className="h-2" />
			<div className="flex flex-row flex-wrap gap-4 p-4">
				{TestArtists.map((artist) => {
					return <ArtistSearchResult artist={artist} key={artist.artistName} />;
				})}
			</div>
		</div>
	);
};

export default MusicSearch;

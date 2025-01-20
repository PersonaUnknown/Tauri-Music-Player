import { forwardRef, useImperativeHandle, useState } from "react";
const SearchBar = forwardRef((props: SearchBarProps, ref) => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	useImperativeHandle(
		ref,
		() => {
			return {
				getSearchQuery,
			};
		},
		[],
	);
	const getSearchQuery = (): string => {
		return searchQuery;
	};
	return (
		<form onSubmit={props.onSubmit}>
			<input
				type="text"
				className="bg-[#3f3f3f] rounded-full p-4 w-96 text-lg text-white"
				placeholder="Search..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</form>
	);
});
interface SearchBarProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface SearchBarRef {
	getSearchQuery: () => string;
}
export default SearchBar;

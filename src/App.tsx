import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/audio/MusicPlayer";
import UserSideBar from "./components/navigation/UserSideBar";
import MusicSearch from "./pages/MusicSearch";
function App() {
	return (
		<main className="bg-[#121212] flex flex-row">
			<UserSideBar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MusicSearch />} />
				</Routes>
			</BrowserRouter>
			<MusicPlayer />
		</main>
	);
}

export default App;

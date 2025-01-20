import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/audio/MusicPlayer";
import MusicSearch from "./pages/MusicSearch";
function App() {
	return (
		<main>
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

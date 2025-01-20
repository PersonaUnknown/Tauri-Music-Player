import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicSearch from "./pages/MusicSearch";
function App() {
	return (
		<main className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MusicSearch />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<main className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div />} />
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;

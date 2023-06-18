import "./App.css";
import { Header } from "./components/Header";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { Graph } from "./components/Graph";

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className="mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
				<div className="grid md:grid-cols-2 gap-4">
					<Graph />
					<AddTransaction />
				</div>
			</div>
		</GlobalProvider>
	);
}

export default App;

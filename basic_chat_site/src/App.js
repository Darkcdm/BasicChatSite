import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<input
					type="text"
					className="input-text"
					placeholder="Enter your name"
					onKeyDown={setName(this)}
				/>
				<textarea className="input-text" placeholder="enter text here" />
			</header>
		</div>
	);
}
function setName(input) {
	console.log(input);
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes> <Route path={ "login" } element={ <Login/> }/> <Route path={ "/*" } element={ <Home/> }/> </Routes>
	);
}

export default App;

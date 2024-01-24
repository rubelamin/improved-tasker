import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./components/task/TaskBoard";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<TaskBoard />
			<Footer />
			<ToastContainer />
		</>
	);
}

export default App;

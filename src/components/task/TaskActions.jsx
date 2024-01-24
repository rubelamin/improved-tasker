/* eslint-disable react/prop-types */
import SearchForm from "./SearchForm";

export default function TaskActions({ onClickModal, setAllDeleteModal }) {
	return (
		<div className="flex items-center space-x-5">
			<SearchForm />
			<button
				className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
				onClick={onClickModal}
			>
				Add Task
			</button>
			<button
				className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
				onClick={() => setAllDeleteModal(true)}
			>
				Delete All
			</button>
		</div>
	);
}

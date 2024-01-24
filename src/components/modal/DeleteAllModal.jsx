/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function DeleteAllModal({ setAllDeleteModal }) {
	const { handleDeleteAll } = useContext(TaskContext);
	return (
		<>
			<div className="bg-black bg-opacity-70 fixed inset-0 z-50 h-full overflow-y-auto min-h-screen">
				<div className="mx-auto absolute z-10 top-1/4 left-1/4 my-3 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
					<h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
						Do you want to delete all tasks?
					</h2>
					<p className="text-red-300 animate-pulse">
						If you perform this operation all the tasks will be
						deleted and cannot be undone.
					</p>

					<div className="mt-16 flex justify-between lg:mt-20">
						<button
							type="submit"
							className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
							onClick={() => setAllDeleteModal(false)}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
							onClick={handleDeleteAll}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

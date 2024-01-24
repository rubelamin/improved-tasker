import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../../context/TaskContext";

/* eslint-disable react/prop-types */
export default function TaskModal({ onClickModal }) {
	const { handleTaskForm, taskToModify } = useContext(TaskContext);
	const isTaskAdd = taskToModify === null ? true : false;

	const [errors, setErrors] = useState({
		title: "",
		description: "",
		tags: [],
		priority: "",
	});
	const [taskElm, setTaskElm] = useState(
		taskToModify || {
			id: crypto.randomUUID(),
			title: "",
			description: "",
			tags: [],
			priority: "",
			isFavorite: false,
		}
	);

	function handleTaskChange(event) {
		let { value, name } = event.target;

		setErrors({
			...errors,
			[name]: "",
		});

		if (name === "tags") {
			setTaskElm({
				...taskElm,
				[name]: value.split(","),
			});
		} else {
			setTaskElm({
				...taskElm,
				[name]: value,
			});
		}
	}
	function onSaveTask(e) {
		e.preventDefault();

		const newErrors = {
			title: taskElm.title === "" ? "Title can not be empty!" : "",
			description:
				taskElm.description === ""
					? "Description can not be empty!"
					: "",
			tags: taskElm.tags.length === 0 ? "Tags can not be empty!" : [],
			priority:
				taskElm.priority === ""
					? "Please select any one from the priority list."
					: "",
		};

		setErrors(newErrors);
		if (Object.values(newErrors).some((error) => error != "")) {
			toast.warning("Please fill up  all the fields!", {
				position: "bottom-right",
			});
			return;
		}
		handleTaskForm(taskElm, isTaskAdd);
	}
	return (
		<>
			<div className="bg-black bg-opacity-70 fixed inset-0 z-0 min-h-screen"></div>
			<form className="mx-auto absolute z-10 top-1/4 left-1/4 my-3 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
				<h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
					Add New Task
				</h2>

				<div className="space-y-9 text-white lg:space-y-10">
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="title">Title</label>
						<input
							className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
							type="text"
							name="title"
							id="title"
							value={taskElm.title}
							onChange={handleTaskChange}
							required
						/>
						{errors.title && (
							<span className="text-red-500">{errors.title}</span>
						)}
					</div>
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="description">Description</label>
						<textarea
							className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
							type="text"
							name="description"
							id="description"
							value={taskElm.description}
							onChange={handleTaskChange}
							required
						></textarea>
						{errors.description && (
							<span className="text-red-500">
								{errors.description}
							</span>
						)}
					</div>
					<div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
						<div className="space-y-2 lg:space-y-3">
							<label htmlFor="tags">Tags</label>
							<input
								className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
								type="text"
								name="tags"
								id="tags"
								value={taskElm.tags}
								onChange={handleTaskChange}
								required
							/>
							{errors.tags && (
								<span className="text-red-500">
									{errors.tags}
								</span>
							)}
						</div>
						<div className="space-y-2 lg:space-y-3">
							<label htmlFor="priority">Priority</label>
							<select
								className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
								name="priority"
								id="priority"
								value={taskElm.priority}
								onChange={handleTaskChange}
								required
							>
								<option value="">Select Priority</option>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
							{errors.priority && (
								<span className="text-red-500">
									{errors.priority}
								</span>
							)}
						</div>
					</div>
				</div>
				<div className="mt-16 flex justify-between lg:mt-20">
					<button
						type="submit"
						className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
						onClick={onClickModal}
					>
						Cancel
					</button>
					<button
						type="submit"
						className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
						onClick={(e) => onSaveTask(e)}
					>
						Create new Task
					</button>
				</div>
			</form>
		</>
	);
}

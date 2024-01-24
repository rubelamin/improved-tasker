/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { TaskContext } from "../../context/TaskContext";
import { randomColors } from "../../data/data";

export default function TableRow({ task }) {
	const { setDeleteModal, setTaskToModify, setShowModal, dispatch } =
		useContext(TaskContext);
	function handleFavorite(taskId, ttl) {
		dispatch({
			type: "FAVORITE_TASK",
			payload: { taskId },
		});
		if (!task.isFavorite) {
			toast.success(`Wow! ${ttl} has been added to favorite.`, {
				position: "bottom-right",
			});
		} else {
			toast.warning(`Ohho! ${ttl} removed from favorite list!`, {
				position: "bottom-right",
			});
		}
	}

	function handleDelete() {
		setTaskToModify(task);
		setDeleteModal(true);
	}
	function handleEdit() {
		setTaskToModify(task);
		setShowModal(true);
	}

	return (
		<>
			<tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
				<td>
					<button onClick={() => handleFavorite(task.id, task.title)}>
						{task.isFavorite ? (
							<FaStar color="yellow" size={24} />
						) : (
							<FaRegStar size={24} />
						)}
					</button>
				</td>
				<td>{task.title}</td>
				<td>
					<div>{task.description}</div>
				</td>
				<td>
					<ul className="flex justify-center gap-1.5 flex-wrap ">
						{task.tags.map((tag, i) => {
							const randBg = Math.floor(
								Math.random() * randomColors.length
							);
							return (
								<li key={i}>
									<span
										style={{
											backgroundColor: `${randomColors[randBg]}`,
										}}
										className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
									>
										{tag}
									</span>
								</li>
							);
						})}
					</ul>
				</td>
				<td className="text-center">{task.priority}</td>
				<td>
					<div className="flex items-center justify-center space-x-3">
						<button className="text-red-500" onClick={handleDelete}>
							Delete
						</button>
						<button className="text-blue-500" onClick={handleEdit}>
							Edit
						</button>
					</div>
				</td>
			</tr>
		</>
	);
}

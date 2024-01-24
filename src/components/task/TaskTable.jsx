import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import NotFound from "./NotFound";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function TaskTable() {
	const { state } = useContext(TaskContext);
	const { tasks } = state;
	console.log(state);

	return (
		<>
			{tasks.length > 0 ? (
				<table className="table-fixed overflow-auto xl:w-full">
					<TableHead />
					<tbody>
						{tasks.map((task) => (
							<TableRow key={task.id} task={task} />
						))}
					</tbody>
				</table>
			) : (
				<NotFound />
			)}
		</>
	);
}

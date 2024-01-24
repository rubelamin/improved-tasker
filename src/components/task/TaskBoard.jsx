import TaskActions from "./TaskActions";
import TaskTable from "./TaskTable";

import { useReducer, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../../context/TaskContext";
import { initialState, taskReducer } from "../../reducers/TaskReducer";
import ConfirmModal from "../modal/ConfirmModal";
import DeleteAllModal from "../modal/DeleteAllModal";
import TaskModal from "../modal/TaskModal";

export default function TaskBoard() {
	const [state, dispatch] = useReducer(taskReducer, initialState);
	const [showModal, setShowModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [allDeleteModal, setAllDeleteModal] = useState(false);
	const [taskToModify, setTaskToModify] = useState(null);

	function handleModal() {
		setTaskToModify(null);
		setShowModal(!showModal);
	}

	function handleTaskForm(taskItem, isTaskAdd) {
		dispatch({
			type: "ADD_EDIT_TASK",
			payload: { ...taskItem },
			isTaskAdd,
		});

		setShowModal(!showModal);
		if (isTaskAdd) {
			toast.success(`Task added succesfully!`, {
				position: "bottom-right",
			});
		} else {
			toast.success(`${taskItem.title} has been updated`, {
				position: "bottom-right",
			});
		}
	}

	function handleDeleteTask(taskItem) {
		dispatch({
			type: "REMOVE_TASK",
			payload: { ...taskItem },
		});
		setDeleteModal(!deleteModal);
		toast.success(`${taskItem.title} has been deleted!`, {
			position: "bottom-right",
		});
	}

	function handleDeleteAll() {
		const newTasks = [];
		dispatch({
			type: "DELETE_ALL",
			payload: { newTasks },
		});
		setAllDeleteModal(false);
		toast.success("All Tasks has been deleted!", {
			position: "bottom-right",
		});
	}

	return (
		<TaskContext.Provider
			value={{
				state,
				dispatch,
				handleTaskForm,
				deleteModal,
				setDeleteModal,
				taskToModify,
				setTaskToModify,
				handleDeleteTask,
				handleDeleteAll,
				setShowModal,
			}}
		>
			{showModal && <TaskModal onClickModal={handleModal} />}
			{deleteModal && <ConfirmModal />}
			{allDeleteModal && (
				<DeleteAllModal setAllDeleteModal={setAllDeleteModal} />
			)}
			<section className="mb-20" id="tasks">
				<div className="container">
					<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
						<div className="mb-14 items-center justify-between sm:flex">
							<h2 className="text-2xl font-semibold max-sm:mb-4">
								Your Tasks
							</h2>
							<TaskActions
								onClickModal={handleModal}
								setAllDeleteModal={setAllDeleteModal}
							/>
						</div>
						<div className="overflow-auto">
							<TaskTable />
						</div>
					</div>
				</div>
			</section>
		</TaskContext.Provider>
	);
}

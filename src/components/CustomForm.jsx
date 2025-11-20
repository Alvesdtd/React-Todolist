import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask, tasks }) => {
	const [task, setTask] = useState("");
	const [hasError, setHasError] = useState(false)

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!task) {
			setHasError(true)
			return
		}

		const duplicatedTask = tasks.find(item => item.name === task)
		if (duplicatedTask) return alert("You can't create duplicates.")

		addTask({
			name: task,
			checked: false,
			id: Date.now()
		})
		setTask("")
		setHasError(false)
	}

	const handleInputChange = (value) => {
		setTask(value)
		setHasError(false)
	}

	return (
		<div>
			<form
				className="todo"
				onSubmit={handleFormSubmit}
			>
				<div className="wrapper">
					<input
						type="text"
						id="task"
						className={`input ${hasError ? "error" : ""}`}
						value={task}
						onInput={(e) => handleInputChange(e.target.value)}
						autoFocus
						maxLength={60}
						placeholder="Enter Task"
					/>
					<label
						htmlFor="task"
						className="label"
					>
						Enter Task
					</label>
				</div>
				<button
					className="btn"
					aria-label="Add Task"
					type="submit"
				>
					<PlusIcon />
				</button>
			</form>
			<div>
				{hasError && <p>You need to set a name to the item.</p>}
			</div>
		</div>
	)
}

export default CustomForm
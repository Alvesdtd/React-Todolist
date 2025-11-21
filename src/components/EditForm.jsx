import { useState, useEffect } from 'react';

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
	const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		const closeModalIfEscaped = (e) => {
			e.key === "Escape" && closeEditMode()
		}
		
		window.addEventListener('keydown', closeModalIfEscaped)

		return () => {
			window.removeEventListener('keydown', closeModalIfEscaped)
		}
	}, [closeEditMode])

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!task) {
			setHasError(true)
			return
		}
		updateTask({... editedTask, name: updatedTaskName})
	}

	const handleInputChange = (value) => {
		setUpdatedTaskName(value)
		setHasError(false)
	}

	return (
		<div
			role="dialog"
			aria-labelledby='editTask'
			onClick={(e) => {
				e.target === e.currentTarget && closeEditMode()
			}}
			>
			<form
				className="todo"
				onSubmit={handleFormSubmit}
			>
				<div className="wrapper">
					<input
						type="text"
						id="editTask"
						className={`input ${hasError ? "error" : ""}`}
						value={updatedTaskName}
						onInput={(e) => handleInputChange(e.target.value)}
						autoFocus
						maxLength={60}
						placeholder="Update Task"
					/>
					<label
						htmlFor="editTask"
						className="label"
					>
						Update Task
					</label>
				</div>
				<button
					className="btn"
					aria-label={`Confirm edited task to now read ${updatedTaskName}`}
					type="submit"
				>
					<CheckIcon
						strokeWidth={2}
						width={24}
						height={24}
					/>
				</button>
			</form>
			<div>
				{hasError && <p>You need to set a name to the item.</p>}
			</div>
		</div>
	)
}

export default EditForm
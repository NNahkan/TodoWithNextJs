type TodoItemProps = {
	id: string;
	title: string;
	complete: boolean;
}

const TodosItem = ({ id, title, complete }: TodoItemProps) => {
	return (
		<li className="text-2xl flex gap-1 items-center ">
			<input id={id} type="checkbox" className="cursor-pointer peer" />
			<label htmlFor={id} className="cursor-pointer 
			peer-checked:line-through peer-checked:text-slate-500">{title}</label>
		</li>
	)
}

export default TodosItem
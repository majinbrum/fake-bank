import { IType } from "@/app/(models)/typeInterface";

interface IButtonProps {
	type: IType;
	filterType: string;
	setFilterType: (filterType: string) => void;
}

const Button = (props: IButtonProps) => {
	const { type, filterType, setFilterType } = props;

	const classes = [
		"flex items-center gap-x-2 px-4 py-2 rounded-2xl bg-gray-100 font-bold  transition-opacity duration-300 transform",
		filterType === type.type || filterType === "All" ? "hover:opacity-50" : "opacity-50 hover:opacity-100",
	].join(" ");

	const incomeIcon = (
		<svg className='h-6 w-6 text-emerald-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z' />
		</svg>
	);

	const expensesIcon = (
		<svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z' />
		</svg>
	);

	return (
		<button onClick={() => setFilterType(type.type)} className={classes} aria-current='page'>
			{type.type === "" && "All"}
			{type.type === "income" && incomeIcon}
			{(type.type === "debit" || type.type === "credit") && expensesIcon}
			{type.type.charAt(0).toUpperCase() + type.type.slice(1)}
		</button>
	);
};

export default Button;

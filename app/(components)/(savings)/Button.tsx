interface IButtonProps {
	onClick: () => void;
	disabled?: boolean;
}

function Button(props: IButtonProps) {
	const { onClick, disabled } = props;

	return (
		<button
			onClick={onClick}
			type='button'
			disabled={disabled}
			className='px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50'>
			Confirm
		</button>
	);
}

export default Button;

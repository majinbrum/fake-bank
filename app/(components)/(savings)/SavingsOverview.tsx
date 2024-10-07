import SavingsAmount from "./SavingsAmount";

const SavingsOverview = () => {
	return (
		<div className='h-auto col-span-2 bg-white p-6 rounded-xl shadow-sm'>
			<h2 className='font-bold text-lg mb-3'>Savings</h2>
			<SavingsAmount />
		</div>
	);
};

export default SavingsOverview;

import SavingsList from "./SavingsList";

const SavingsTransactions = () => {
	return (
		<div className='h-auto col-span-2 overflow-y-scroll bg-white rounded-xl shadow-sm p-6'>
			<h2 className='font-bold text-lg mb-3'>Your savings transactions</h2>
			<SavingsList />
		</div>
	);
};

export default SavingsTransactions;

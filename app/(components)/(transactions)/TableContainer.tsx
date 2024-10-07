import { getTypes } from "@/action/get-types";
import { ReactNode } from "react";
import Button from "./Button";

interface TableContainerProps {
	children: ReactNode;
	filterType: string;
	setFilterType: (filterType: string) => void;
}

const TableContainer = async (props: TableContainerProps) => {
	const { children, filterType, setFilterType } = props;

	const types = await getTypes();
	const allTypes = {
		_id: "",
		type: "All",
	};

	return (
		<div className='p-6 w-3/4 min-w-fit lg:w-full overflow-y-auto bg-white px-6 rounded-xl shadow-sm'>
			<div className='overflow-x-auto'>
				<ul className='flex justify-center gap-x-4 flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
					<Button type={allTypes} filterType={filterType} setFilterType={setFilterType} />
					{types.map((type) => {
						return <Button key={type._id} type={type} filterType={filterType} setFilterType={setFilterType} />;
					})}
				</ul>
				{children}
			</div>
		</div>
	);
};

export default TableContainer;

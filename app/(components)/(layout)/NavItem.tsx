import { usePathname } from "next/navigation";
import Link from "next/link";

interface INavItem {
	item: {
		id: number;
		label: string;
		href: string;
		icon: JSX.Element;
	};
}

function NavItem({ item }: INavItem) {
	const pathname = usePathname();

	const classes = [
		"flex items-center px-4 py-2 mt-5 rounded-lg transition-colors duration-300 transform",
		pathname.includes(item.label.toLowerCase()) || (pathname.endsWith("/") && item.label === "Dashboard")
			? "bg-gray-100 hover:bg-transparent hover:text-gray-500"
			: "bg-transparent hover:bg-gray-100 hover:text-gray-700",
	].join(" ");

	return (
		<Link key={item.id} className={classes} href={item.href}>
			{item.icon}
			<span className='mx-4 font-medium'>{item.label}</span>
		</Link>
	);
}

export default NavItem;

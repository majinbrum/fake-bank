"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import Image from "next/image";

const navItems = [
	{
		id: 1,
		label: "Dashboard",
		href: "/dashboard",
		icon: (
			<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	},
	{
		id: 2,
		label: "Transactions",
		href: "/transactions",
		icon: (
			<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	},
	{
		id: 3,
		label: "Savings",
		href: "/savings",
		icon: (
			<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		),
	},
	{
		id: 4,
		label: "Analytics",
		href: "/analytics",
		icon: (
			<svg className='h-5 w-5' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
				<path stroke='none' d='M0 0h24v24H0z' /> <line x1='4' y1='19' x2='20' y2='19' /> <polyline points='4 15 8 9 12 11 16 6 20 10' />
			</svg>
		),
	},
	{
		id: 0,
		label: "Logout",
		href: "/",
		icon: (
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
				/>
			</svg>
		),
	},
];

function Aside() {
	const pathname = usePathname();

	if (pathname === "/") return null;
	return (
		<aside className='flex flex-col justify-between  px-4 py-8  w-1/4 min-w-64 max-w-80 overflow-y-auto bg-white shadow-sm rounded-xl  dark:bg-gray-900'>
			<div className='flex flex-col items-center '>
				<Image className='mb-4 ring ring-offset-8 ring-violet-400 ring-offset-gray-100 bg-emerald-400 object-cover w-24 h-24 mx-2 rounded-full' src='/images/Fry.png' alt='avatar' priority />
				<h4 className='font-bold text-gray-800 dark:text-gray-200'>Philip J. Fry</h4>
				<p className='text-sm font-medium text-gray-500 dark:text-gray-400'>Super User</p>
				<Image src='/images/credit-card3.png' className='-rotate-90 max-h-72' alt='credit card' priority />
			</div>

			<div className='flex flex-col'>
				<nav>
					{navItems.map((item) => {
						return <NavItem key={item.id} item={item} />;
					})}
				</nav>
			</div>
		</aside>
	);
}

export default Aside;

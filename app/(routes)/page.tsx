"use client";
import { useTransactionsContext } from "../providers/TransactionsContext";

import Link from "next/link";
import logo from "@/public/images/planet-express.png";
import Image from "next/image";

export default async function Home() {
	const { refetchTransactions } = useTransactionsContext();

	return (
		<>
			<div className='w-full h-full flex justify-center items-center'>
				<div className='w-96 flex flex-col justify-between gap-5 p-8 bg-white shadow-sm rounded-xl dark:bg-gray-900'>
					<Image src={logo} alt='Logo' priority />
					<div className='flex flex-col gap-2'>
						<label className='font-bold text-lg' htmlFor='email'>
							Email
						</label>
						<input className='bg-gray-100 px-4 py-4 rounded-xl focus:outline-[#3DBD99]' type='email' placeholder='Email' value={"jfry20@email.com"} id='email' readOnly />
					</div>
					<div className='flex flex-col gap-2'>
						<label className='font-bold text-lg' htmlFor='password'>
							Password
						</label>
						<input className='bg-gray-100 px-4 py-4 rounded-xl focus:outline-[#3DBD99]' type='password' placeholder='Password' value={"Anchiovy"} id='password' readOnly />
					</div>
					<Link className='py-3  bg-[#3DBD99] font-bold text-center rounded-full' href={"/dashboard"} onClick={refetchTransactions}>
						Login
					</Link>
				</div>
			</div>
		</>
	);
}

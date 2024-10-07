import Image from "next/image";

const Loading = () => {
	return (
		<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-60 z-10'>
			<div className='w-16 h-16'>
				<Image className='w-full h-full object-contain animate-spin' src='/images/planet-express.png' alt='planet express logo' priority />
			</div>
		</div>
	);
};

export default Loading;

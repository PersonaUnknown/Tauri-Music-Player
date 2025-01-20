import { motion } from "motion/react";
const LoadingIndicator = () => {
	return (
		<div className="flex flex-row gap-4 mx-auto p-4">
			<motion.div
				className="bg-[#ffffff] w-12 h-12 rounded-full"
				animate={{ scale: [1, 1.25, 1] }}
				transition={{
					duration: 0.75,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
					repeatDelay: 0.375,
				}}
			/>
			<motion.div
				className="bg-[#ffffff] w-12 h-12 rounded-full"
				animate={{ scale: [1, 1.25, 1] }}
				transition={{
					duration: 0.75,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
					delay: 0.375,
					repeatDelay: 0.375,
				}}
			/>
			<motion.div
				className="bg-[#ffffff] w-12 h-12 rounded-full"
				animate={{ scale: [1, 1.25, 1] }}
				transition={{
					duration: 0.75,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
					delay: 0.75,
					repeatDelay: 0.375,
				}}
			/>
		</div>
	);
};
export default LoadingIndicator;

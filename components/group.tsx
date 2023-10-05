import Image from "next/image";
export default function Group({
	image,
	title,
	desc,
}: {
	image: any;
	title: string;
	desc: string;
}) {
	return (
		<div className=" h-fit col-span-1">
			<div className="p-2">
				<Image
					src={image}
					alt="iPhone"
					height={300}
					width={300}
					className="object-fill"
				/>
				<div className=" w-full">
					<h1 className="text-heading md:text-sm lg:text-medium ">
						{title}
					</h1>
					<p className="text-desc font-light md:text-xs lg:text-sm">
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
}

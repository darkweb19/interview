import Image from "next/image";
import mac from "../public/assets/mac15.png";
import iphone from "../public/assets/iphone.png";
import laptop1 from "../public/assets/laptop1.png";
import laptop2 from "../public/assets/laptop2.png";

import Group from "@/components/group";

export default function Home() {
	const groupData = [
		{
			image: iphone,
			title: "Pulsave Mobile  Ui Design",
			desc: "Web Design Visual Identity",
		},
		{
			image: laptop1,
			title: "Bonewa Mobile App Development",
			desc: "Development , Deployement",
		},
		{
			image: laptop2,
			title: "Pulsave Mobile  Ui Design",
			desc: "Web Design Visual Identity",
		},
		{
			image: laptop1,
			title: "Bonewa Mobile App Development",
			desc: "Development , Deployement",
		},
	];
	return (
		<div className=" h-fit w-screen flex flex-col gap-1 items-center justify-start mt-6 p-3 border-black">
			<div className=" flex-col items-center justify-center">
				{/* heading section */}
				<div className="text-center text-mobile md:text-base lg:text-3xl  ">
					<h1>INNOVESION : WHERE DESIGN</h1>
					<h1 className="">MEETS CODE</h1>
				</div>
				<div className=" flex justify-center">
					<div className=" w-3/5 text-xs p-2">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptas eet quod sint! Enim. Lorem ipsum
						</p>
					</div>
				</div>
				<div className=" flex items-center justify-center mt-3">
					<Image src={mac} alt="mac15" height={400} width={400} />
				</div>
				{/* our works section */}
				<div className="border-b border-slate-600 w-full p-3 flex items-center justify-start">
					<h1 className="text-mobile md:text-base lg:text-2xl">
						(OUR WORKS)
					</h1>
				</div>
				{/* for items  */}
				<div className="grid mt-1 grid-cols-2">
					{groupData.map((data, i) => (
						<Group
							key={i}
							image={data.image}
							title={data.title}
							desc={data.desc}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
	return (
		<>
			<Layout title="Coucou">
				<div className="">
					<p>
						Get started by editing&nbsp;
						<code className="font-mono">pages/index.tsx</code>
					</p>
					<div>
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{" "}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className=""
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className="text-center">
					<Image
						className=""
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
					<div className="">
						<Image
							src="/thirteen.svg"
							alt="13"
							width={40}
							height={31}
							priority
						/>
					</div>
				</div>
			</Layout>
		</>
	);
}

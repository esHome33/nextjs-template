import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Container, Paper } from "@mui/material";

type Props = {
	children?: ReactNode;
	title?: string;
	about_invisible?: boolean;
	home_invisible?: boolean;
};

const Layout = ({
	children,
	title = "Titre par défaut",
	about_invisible = false,
	home_invisible = false,
}: Props) => (
	<div className="container">
		<Head>
			<title>{title}</title>
			<meta
				name="title"
				content={title}
			></meta>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<meta
				name="robots"
				content="all"
			/>
			<meta
				name="description"
				content=""
			></meta>
			<link
				rel="icon"
				type="image/x-icon"
				href="favicon.ico"
			></link>
		</Head>
		<Container maxWidth="md">
			<header className="mt-2 p-2 rounded fixed top-0 left-4 right-4 bg-emerald-50">
				<nav className="flex flex-row items-center space-x-4 ">
					{!home_invisible && (
						<div className="hover:bg-green-200 px-2 py-1 rounded-lg border-2">
							<Link href="/">Home</Link>
						</div>
					)}

					{!about_invisible && (
						<div className="hover:bg-green-200 px-2 py-1 rounded-lg border-2">
							<Link href="/about">A propos</Link>
						</div>
					)}
				</nav>
			</header>
			<Paper
				elevation={1}
				className="p-2 mt-20"
			>
				{children}
			</Paper>
		</Container>
		<div className="mb-10"></div>
		<footer className="text-center mt-2 bg-slate-200 p-2 rounded text-sm fixed bottom-0 right-0 left-0">
			<span>&copy; ESHome33 - 01 avril 2023</span>
		</footer>
	</div>
);

export default Layout;

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { LinkItem } from './LinkItem';

export function Navbar() {
	const sideBar = useRef();
	const navRef = useRef();

	const [backgroundNav, setBackgroundNav] = useState(() =>
		window.scrollY >= 10 ? 'bg-[rgba(0_0_0_/_0.2)]' : 'transparent',
	);

	const [theme, setTheme, handlerClickModalTheme, changeTheme, btnThemeRef] = useTheme("dark");

	const changeThemeToSystem = () => {
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? setTheme((theme) => (theme = 'dark'))
			: setTheme((theme) => (theme = 'light'));
		handlerClickModalTheme();
	};

	const handlerClickSidebar = () => {
		sideBar.current.classNameList.toggle('-translate-x-[100%]')
		setBackgroundNav((backgroundNav) => (backgroundNav = 'bg-blue-950'));
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY;
			if (scrollY >= 10) {
				setBackgroundNav(
					(backgroundNav) => (backgroundNav = 'bg-[rgba(0_0_0_/_.3)]'),
				);
			} else {
				setBackgroundNav((backgroundNav) => (backgroundNav = 'bg-transparent'));
			}
		});
	}, []);

	return (
		<>
			<nav
				ref={navRef}
				className={`${backgroundNav} flex justify-between md:justify-center z-50 items-center fixed top-0 p-4 w-full h-20 backdrop-blur-sm`}
			>
				{/* nav desktop */}
				<ul className="flex justify-center items-center gap-1">
					<div className="hidden md:flex justify-center items-center">
						<LinkItem hrefId="#home" infoLink="Inicio"></LinkItem>
						<LinkItem hrefId="#projects" infoLink="Proyectos"></LinkItem>
						<LinkItem hrefId="#skills" infoLink="Habilidades"></LinkItem>
						<LinkItem hrefId="#contactme" infoLink="Contactame"></LinkItem>
					</div>
					<button
						className="outline-none border-none md:hidden"
						onClick={handlerClickSidebar}
					>
						<i className="fa-solid fa-bars text-3xl text-black dark:text-white"></i>
					</button>

					<li className="md:relative absolute right-0">
						<button
							onClick={() => handlerClickModalTheme()}
							className="px-5 py-2 hover:bg-[rgba(0_0_0_/_.1)] dark:hover:bg-[rgba(255_255_255_/_.1)] rounded-full"
						>
							{theme == 'dark' ? (
								<i className="fa-solid fa-moon md:text-md text-3xl"></i>
							) : theme == 'light' ? (
								<i className="fa-solid fa-sun text-black md:text-md text-3xl"></i>
							) : (
								<i className="fa-solid fa-desktop md:text-md text-3xl"></i>
							)}
						</button>
						<div
							ref={btnThemeRef}
							className="hidden absolute flex-col gap-2 mt-2 right-0 z-20 p-3 bg-gray-700 rounded-lg"
						>
							<button
								onClick={() => changeTheme('dark')}
								className="flex gap-4 items-center hover:bg-[rgba(255_255_255_/_.1)] outline-none border-none p-2 rounded-lg"
							>
								<i className="fa-solid fa-moon"></i> Dark
							</button>
							<button
								onClick={() => changeTheme('light')}
								className="flex gap-4 items-center hover:bg-[rgba(255_255_255_/_.1)] p-2 rounded-lg outline-none border-none"
							>
								<i className="fa-solid fa-sun"></i> Light
							</button>
							<button
								onClick={changeThemeToSystem}
								className="flex gap-4 items-center hover:bg-[rgba(255_255_255_/_.1)] p-2 outline-none border-none rounded-lg"
							>
								<i className="fa-solid fa-desktop"></i> System
							</button>
						</div>
					</li>
				</ul>
			</nav>
			{/* Nav responsive */}
			<nav
				ref={sideBar}
				className="w-1/2 transition-all md:hidden duration-200 -translate-x-[100%] ease-in left-0 top-20 h-[calc(100vh_-_80px)] bg-blue-950 fixed z-20"
			>
				<ul className="flex flex-col justify-start h-full w-full gap-5 pt-10">
					<button onClick={handlerClickSidebar}>
						<LinkItem hrefId="#home" infoLink="Inicio"></LinkItem>
					</button>
					<button onClick={handlerClickSidebar}>
						<LinkItem hrefId="#projects" infoLink="Proyectos"></LinkItem>
					</button>
					<button onClick={handlerClickSidebar}>
						<LinkItem hrefId="#skills" infoLink="Skills"></LinkItem>
					</button>
					<button onClick={handlerClickSidebar}>
						<LinkItem hrefId="#contactme" infoLink="Contactame"></LinkItem>
					</button>
				</ul>
			</nav>
		</>
	);
}

import { faMoon } from "@fortawesome/pro-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/pro-solid-svg-icons/faSun";
import * as React from "react";
import { useMatchMedia } from "../_hooks/use-media-query";
import { Button, ButtonProps } from "../button";
import { Icon } from "../icon";
import { MQ_DARK_MODE } from "../index.css";

/** -----------------------------------------------------------------------------
 * UTILS FOR GETTING / SETTING COOKIES
 * ------------------------------------------------------------------------------- */

function setCookie(cookieName: string, cookieValue: string, expDays = 30) {
	const date = new Date();
	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

	const expires = `expires=${date.toUTCString()}`;

	document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
}

function getCookie(cookieName: string) {
	const name = `${cookieName}=`;
	const cookiesDecoded = decodeURIComponent(document.cookie);
	const cookieArray = cookiesDecoded.split("; ");
	let res;
	for (const cookie of cookieArray) {
		if (cookie.indexOf(name) === 0) res = cookie.substring(name.length);
	}
	return res;
}

/** -----------------------------------------------------------------------------
 * CONTEXT FOR DARK MODE
 * ------------------------------------------------------------------------------- */

export const DarkModeContext = React.createContext<
	| [boolean, React.Dispatch<React.SetStateAction<boolean>> | undefined]
	| undefined
>([false, undefined]);

export const useToggleDarkMode = () => {
	const context = React.useContext(DarkModeContext);

	if (context == null) {
		throw new Error(
			"DarkModeContext must be used within a DarkModeProvider",
		);
	}

	return context;
};

export const DarkModeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [prefersDarkMode] = useMatchMedia([MQ_DARK_MODE], [false]);

	const cookieDarkMode = getCookie("prefersDarkMode");

	const [darkMode, setDarkMode] = React.useState<boolean>(
		cookieDarkMode === "true" || prefersDarkMode,
	);

	React.useEffect(() => {
		setCookie("prefersDarkMode", darkMode ? "true" : "false");
	}, [darkMode]);

	return (
		<DarkModeContext.Provider value={[darkMode, setDarkMode]}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const ButtonDarkMode = ({
	appearance = "ghost",
	size = "square_sm",
	name = "dark_mode_toggle",
	...rest
}: Omit<ButtonProps, "onClick">) => {
	const darkModeState = useToggleDarkMode();

	if (!darkModeState) {
		throw new Error(
			"DarkModeContext must be used within a DarkModeProvider",
		);
	}

	const [darkMode, setDarkMode] = darkModeState;

	return (
		<Button
			size={size}
			appearance={appearance}
			name={name}
			slotLeft={
				<Icon
					color="text_low_contrast"
					icon={darkMode ? faSun : faMoon}
					size="lg"
				/>
			}
			onClick={() => {
				console.debug("darkModeToggle");
				setDarkMode?.((c) => !c);
			}}
			{...rest}
		/>
	);
};

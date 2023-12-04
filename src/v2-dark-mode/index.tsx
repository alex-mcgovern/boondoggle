import * as React from "react";
import { useMatchMedia } from "../_hooks/use-media-query";
import { MQ_DARK_MODE } from "../index.css";
import { Button, ButtonProps } from "../button";
import { Icon } from "../icon";
import { faSun } from "@fortawesome/pro-solid-svg-icons/faSun";
import { faMoon } from "@fortawesome/pro-solid-svg-icons/faMoon";

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

	const [darkMode, setDarkMode] = React.useState<boolean>(prefersDarkMode);

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
	const [darkMode, setDarkMode] = useToggleDarkMode();

	return (
		<Button
			size={size}
			appearance={appearance}
			name={name}
			slotLeft={
				<Icon
					color="text_low_contrast"
					icon={darkMode ? faSun : faMoon}
				/>
			}
			onClick={() => setDarkMode?.((c) => !c)}
			{...rest}
		/>
	);
};

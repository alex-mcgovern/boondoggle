export const remToPx = (rem: `${number}rem`) => {
	return `${Number(rem.split("rem")[0]) * 16}px`;
};

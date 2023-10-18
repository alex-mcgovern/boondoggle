export type NativeEventInputType =
	| "input"
	| "insertText"
	| "deleteContentBackward"
	| "deleteContentForward"
	| "historyUndo"
	| "historyRedo"
	| "deleteSoftLineBackward";

type GetCursorPositionArgs = {
	formattedValue: string | undefined;
	incomingValue: string | undefined;
	inputType: NativeEventInputType;
	selectionEnd: number | null;
	selectionStart: number | null;
};

export const getCursorPosition = ({
	formattedValue,
	incomingValue,
	inputType,
	selectionEnd,
	selectionStart,
}: GetCursorPositionArgs): { end: number | null; start: number | null } => {
	const nonDigitsBefore: number = incomingValue?.match(/\D/g)?.length || 0;
	const nonDigitsAfter: number = formattedValue?.match(/\D/g)?.length || 0;
	const delta = nonDigitsAfter - nonDigitsBefore;

	const firstDigitIndex: number = formattedValue?.search(/\d/) || 0;
	const minIndex =
		typeof formattedValue === "string" && formattedValue.length > 0
			? Math.min(firstDigitIndex, formattedValue.length) + 1
			: 0;

	const selectionStartOffsetNonDigits = selectionStart
		? selectionStart + delta
		: null;
	const selectionEndOffsetNonDigits = selectionEnd
		? selectionEnd + delta
		: null;

	const minSelectionStart = Math.max(
		selectionStartOffsetNonDigits || 0,
		minIndex,
	);
	const minSelectionEnd = Math.max(
		selectionEndOffsetNonDigits || 0,
		minIndex,
	);

	switch (inputType) {
		case "insertText": {
			/** If the user has just added a character at the end
			 * of the string move the cursor to the end of the string. */
			if (selectionStart === incomingValue?.length) {
				return {
					end: formattedValue?.length || selectionStart + 1,
					start: formattedValue?.length || selectionStart + 1,
				};
			}

			return {
				end: minSelectionEnd,
				start: minSelectionStart,
			};
		}
		case "deleteContentBackward": {
			return {
				end: minSelectionEnd,
				start: minSelectionStart,
			};
		}
		case "deleteSoftLineBackward": {
			return {
				end: 0,
				start: 0,
			};
		}
		default: {
			return {
				end: selectionEnd,
				start: selectionEnd,
			};
		}
	}
};

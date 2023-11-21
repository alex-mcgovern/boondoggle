import { z } from "zod";

export const getZodFilterNumberRange = ({
	strNotANumber,
}: {
	strNotANumber: string;
}) => {
	const errorMap = () => {
		return { message: strNotANumber };
	};

	return z.discriminatedUnion("filter_mode", [
		z.object({
			filter_mode: z.literal("is_between"),
			min: z.coerce.number({
				errorMap,
			}),
			max: z.coerce.number({
				errorMap,
			}),
		}),
		z.object({
			filter_mode: z.literal("is_equal_to"),
			is_equal_to: z.coerce.number({ errorMap }),
		}),
		z.object({
			filter_mode: z.literal("is_greater_than"),
			is_greater_than: z.coerce.number({ errorMap }),
		}),
		z.object({
			filter_mode: z.literal("is_less_than"),
			is_less_than: z.coerce.number({ errorMap }),
		}),
	]);
};

export type FieldValuesFilterNumberRange = z.infer<
	ReturnType<typeof getZodFilterNumberRange>
>;

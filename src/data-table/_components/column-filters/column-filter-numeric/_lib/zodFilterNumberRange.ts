import { z } from "zod";

export const getZodFilterNumberRange = ({
	smallestValue,
	largestValue,
	strErrorTooSmall,
	strErrorTooLarge,
}: {
	smallestValue: number;
	largestValue: number;
	strErrorTooSmall: string;
	strErrorTooLarge: string;
}) => {
	return z.discriminatedUnion("filter_mode", [
		z.object({
			filter_mode: z.literal("is_between"),
			min: z.coerce.number(),
			max: z.coerce.number(),
		}),
		z.object({
			filter_mode: z.literal("is_equal_to"),
			is_equal_to: z.coerce.number(),
		}),
		z.object({
			filter_mode: z.literal("is_greater_than"),
			is_greater_than: z.coerce.number(),
		}),
		z.object({
			filter_mode: z.literal("is_less_than"),
			is_less_than: z.coerce.number(),
		}),
	]);
};

export type FieldValuesFilterNumberRange = z.infer<
	ReturnType<typeof getZodFilterNumberRange>
>;

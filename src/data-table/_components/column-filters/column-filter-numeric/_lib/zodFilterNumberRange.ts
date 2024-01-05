import { z } from "zod";
import { i18n } from "../../../../../_i18n";

export const getZodFilterNumberRange = () => {
	const errorMap = () => {
		return { message: i18n.not_a_number };
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

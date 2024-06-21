import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import {
	fromDate,
	getLocalTimeZone,
	parseAbsoluteToLocal,
} from "@internationalized/date";

import { DatePicker, DatePickerButton, DatePickerPreset } from "..";
import { DateInput } from "../../date-input";
import { Grid } from "../../grid";
import { Group } from "../../group";
import { Label } from "../../label";

const meta = {
	component: DatePicker,
	title: "Components/DatePicker",
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Label>Date/time</Label>
				<Group>
					<DateInput unstyled />
					<DatePickerButton />
				</Group>
			</>
		),
	},
};

export const WithTime: Story = {
	args: {
		children: (
			<>
				<Label>Date/time</Label>
				<Group>
					<DateInput unstyled />
					<DatePickerButton />
				</Group>
			</>
		),
		defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
	},
};

function WithPresetsComponent(props: ComponentProps<typeof DatePicker>) {
	return (
		<DatePicker {...props}>
			<Label>Date/time</Label>
			<Group>
				<DateInput unstyled />
				<DatePickerButton />
			</Group>
			<Grid
				className="mt-2"
				columns={3}
			>
				<DatePickerPreset
					date={fromDate(new Date(), getLocalTimeZone()).set({
						hour: 18,
						millisecond: 0,
						minute: 0,
						second: 0,
					})}
				>
					Today
				</DatePickerPreset>
				<DatePickerPreset
					date={fromDate(new Date(), getLocalTimeZone())
						.add({ weeks: 1 })
						.set({
							hour: 18,
							millisecond: 0,
							minute: 0,
							second: 0,
						})}
				>
					1 week
				</DatePickerPreset>
				<DatePickerPreset
					date={fromDate(new Date(), getLocalTimeZone())
						.add({ weeks: 2 })
						.set({
							hour: 18,
							millisecond: 0,
							minute: 0,
							second: 0,
						})}
				>
					2 weeks
				</DatePickerPreset>
			</Grid>
		</DatePicker>
	);
}

export const WithPresets: Story = {
	args: {
		defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
	},
	render: WithPresetsComponent,
};

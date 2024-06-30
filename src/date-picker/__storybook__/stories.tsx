import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import {
    fromDate,
    getLocalTimeZone,
    parseAbsoluteToLocal,
} from "@internationalized/date";

import { DatePicker } from "..";
import { DateInput } from "../../date-input";
import { Grid } from "../../grid";
import { Group } from "../../group";
import { Label } from "../../label";

const meta = {
    component: DatePicker.Root,
    title: "DatePicker",
} satisfies Meta<typeof DatePicker.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Date/time</Label>
                <Group>
                    <DateInput unstyled />
                    <DatePicker.Button />
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
                    <DatePicker.Button />
                </Group>
            </>
        ),
        defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
    },
};

function WithPresetsComponent(props: ComponentProps<typeof DatePicker.Root>) {
    return (
        <DatePicker.Root {...props}>
            <Label>Date/time</Label>
            <Group>
                <DateInput unstyled />
                <DatePicker.Button />
            </Group>
            <Grid
                className="mt-2"
                columns={3}
            >
                <DatePicker.Preset
                    date={fromDate(new Date(), getLocalTimeZone()).set({
                        hour: 18,
                        millisecond: 0,
                        minute: 0,
                        second: 0,
                    })}
                >
                    Today
                </DatePicker.Preset>
                <DatePicker.Preset
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
                </DatePicker.Preset>
                <DatePicker.Preset
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
                </DatePicker.Preset>
            </Grid>
        </DatePicker.Root>
    );
}

export const WithPresets: Story = {
    args: {
        defaultValue: parseAbsoluteToLocal(new Date().toISOString()),
    },
    render: WithPresetsComponent,
};

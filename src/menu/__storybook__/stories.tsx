import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faFilterList } from "@fortawesome/pro-solid-svg-icons/faFilterList";
import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { Menu } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { Popover } from "../../popover";
import { Tooltip, TooltipTrigger } from "../../tooltip";

const meta = {
	args: {
		children: (
			<>
				<Button>Trigger</Button>
				<Popover>
					<Menu.DropdownMenu>
						<Menu.Section>
							<Menu.Item>Item 1</Menu.Item>
							<Menu.Item>Item 2</Menu.Item>
							<Menu.Item>Item 3</Menu.Item>
						</Menu.Section>
					</Menu.DropdownMenu>
				</Popover>
			</>
		),
	},
	component: Menu.Trigger,
	title: "Components/Menu",
} satisfies Meta<ComponentProps<typeof Menu.Trigger>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PlacementRightTop: Story = {
	args: {
		children: (
			<>
				<Button>Trigger</Button>
				<Popover placement="right top">
					<Menu.DropdownMenu>
						<Menu.Section>
							<Menu.Item>Bananas</Menu.Item>
							<Menu.Item>Strawberries</Menu.Item>
							<Menu.Item>Passion fruit</Menu.Item>
						</Menu.Section>
						<Menu.Section>
							<Menu.SectionHeader>Premium</Menu.SectionHeader>
							<Menu.Item>Sour cherry</Menu.Item>
						</Menu.Section>
					</Menu.DropdownMenu>
				</Popover>
			</>
		),
	},
};

export const SubmenusWithMixedModes: Story = {
	args: {
		children: (
			<>
				<TooltipTrigger delay={1000}>
					<Button
						appearance="ghost"
						square
					>
						<Icon
							color="grey"
							icon={faFilterList}
						/>
					</Button>
					<Tooltip placement="bottom">Filter tasks</Tooltip>
				</TooltipTrigger>
				<Popover placement="right top">
					<Menu.DropdownMenu>
						<Menu.Section>
							<Menu.SubMenuTrigger>
								<Menu.Item>Status</Menu.Item>
								<Popover placement="right top">
									<Menu.DropdownMenu
										aria-label="Filter by status"
										selectionMode="multiple"
									>
										<Menu.Item
											icon={<Icon icon={faShapes} />}
											id="to_do"
										>
											To do
										</Menu.Item>
										<Menu.Item id="in_progress">
											In progress
										</Menu.Item>
										<Menu.Item id="completed">
											Completed
										</Menu.Item>
									</Menu.DropdownMenu>
								</Popover>
							</Menu.SubMenuTrigger>

							<Menu.SubMenuTrigger>
								<Menu.Item>Due date</Menu.Item>
								<Popover placement="right top">
									<Menu.DropdownMenu
										aria-label="Filter by due date"
										selectionMode="single"
									>
										<Menu.Item id="last_hour">
											Last hour
										</Menu.Item>
										<Menu.Item id="last_day">
											Last day
										</Menu.Item>
										<Menu.Item id="last_7_days">
											Last 7 days
										</Menu.Item>
										<Menu.Item id="last_90_days">
											Last 90 days
										</Menu.Item>
										<Menu.Item id="custom">
											Custom date range
										</Menu.Item>
									</Menu.DropdownMenu>
								</Popover>
							</Menu.SubMenuTrigger>
						</Menu.Section>
					</Menu.DropdownMenu>
				</Popover>
			</>
		),
	},
};

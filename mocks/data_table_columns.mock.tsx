// eslint-disable-next-line import/no-extraneous-dependencies
import { Faker, en } from "@faker-js/faker";
import { faArrowUpRight } from "@fortawesome/pro-solid-svg-icons/faArrowUpRight";
import { createColumnHelper } from "@tanstack/react-table";
import { Avatar } from "../src/avatar";
import { Box } from "../src/box";
import { Button } from "../src/button";
import { Icon } from "../src/icon";
import { Pill } from "../src/pill";
const faker = new Faker({ locale: [en] });

faker.seed(42);

export type MockAccountColumnData = {
	/**
	 * User's email address
	 */
	email_address: string;

	/**
	 * User's first name
	 */
	first_name: string;

	/**
	 * User ID
	 */
	id: string;

	/**
	 * User's last name
	 */
	last_name: string;

	/**
	 * User's phone number
	 */
	phone_number: string;

	/**
	 * User's balance
	 */
	balance: number;

	/**
	 * Status of a user's account
	 */
	status: "active" | "inactive" | "invited";
};

/**
 * Generate a mock account column.
 */
export const generateMockAccountColumn = (): MockAccountColumnData => {
	return {
		email_address: faker.internet.email(),
		first_name: faker.person.firstName(),
		id: faker.string.uuid(),
		last_name: faker.person.lastName(),
		status: faker.helpers.arrayElement(["active", "inactive", "invited"]),
		phone_number: faker.phone.number(),
		balance: faker.number.int(1000),
	};
};

const columnHelper = createColumnHelper<MockAccountColumnData>();

export const DATA_TABLE_COLUMNS_MOCK = [
	columnHelper.accessor("first_name", {
		cell: (info) => {
			return (
				<Button
					name="button"
					appearance="link"
					slotRight={<Icon icon={faArrowUpRight} />}
				>
					{info.getValue()}
				</Button>
			);
		},
		enableHiding: false,
		enableColumnFilter: false,
		header: () => {
			return "First name";
		},
	}),
	columnHelper.accessor("last_name", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: false,
		header: () => {
			return "Last name";
		},
	}),
	columnHelper.accessor("email_address", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: false,
		header: () => {
			return "Email address";
		},
	}),
	columnHelper.accessor("phone_number", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: false,
		header: () => {
			return "Phone number";
		},
	}),
	columnHelper.accessor("status", {
		cell: (info) => {
			return <Pill>{info.getValue()}</Pill>;
		},
		enableColumnFilter: true,
		filterFn: "multiSelect",
		header: () => {
			return "Status";
		},
	}),
	columnHelper.accessor("balance", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: true,
		header: () => {
			return "Balance";
		},
	}),
	columnHelper.accessor("id", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: false,
		header: () => {
			return "User ID";
		},
	}),
];

export const DATA_TABLE_COLUMNS_REDUCED_MOCK = [
	columnHelper.accessor("first_name", {
		cell: (info) => {
			return (
				<Button
					name="button"
					appearance="link"
					slotRight={<Icon icon={faArrowUpRight} />}
				>
					{info.getValue()}
				</Button>
			);
		},
		enableHiding: false,
		header: () => {
			return "First name";
		},
	}),
	columnHelper.accessor("last_name", {
		cell: (info) => {
			return info.getValue();
		},
		header: () => {
			return "Last name";
		},
	}),
	columnHelper.accessor("email_address", {
		cell: (info) => {
			return info.getValue();
		},
		header: () => {
			return "Email address";
		},
	}),
];

export const DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK = [
	columnHelper.accessor(
		(row) => {
			return `${row.first_name} ${row.last_name} ${row.email_address}`;
		},
		{
			cell: ({ row }) => {
				return (
					<Box alignItems="center" display="flex" gap="space_4">
						<Avatar
							firstName={row.original.first_name}
							lastName={row.original.last_name}
							size={40}
						/>
						<Box>
							<Box fontWeight="medium">
								{row.original.first_name}{" "}
								{row.original.last_name}
							</Box>
							<Box color="text_low_contrast" fontStyle="bodySm">
								{row.original.email_address}
							</Box>
						</Box>
					</Box>
				);
			},
			header: () => {
				return "Team member";
			},
			id: "member",
		},
	),
	columnHelper.accessor("phone_number", {
		cell: (info) => {
			return info.getValue();
		},
		header: () => {
			return "Phone number";
		},
	}),
	columnHelper.accessor("status", {
		cell: (info) => {
			return <Pill>{info.getValue()}</Pill>;
		},
		enableColumnFilter: true,
		filterFn: "multiSelect",
		header: () => {
			return "Status";
		},
	}),
	columnHelper.accessor("id", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: true,
		filterFn: "multiSelect",
		header: () => {
			return "User ID";
		},
	}),
];

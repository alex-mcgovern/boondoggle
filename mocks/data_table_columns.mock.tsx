/** ----------------------------------------------------------------------------- */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Faker, en } from "@faker-js/faker";
import { faArrowUpRight } from "@fortawesome/pro-light-svg-icons";
import { createColumnHelper } from "@tanstack/react-table";

import { Icon } from "../src";
import { DataTableCellButton } from "../src/components/DataTableCellButton";

const faker = new Faker({ locale: [en] });
faker.seed(42);

/** ----------------------------------------------------------------------------- */

export type MockAccountColumnData = {
  /** User's email address */
  email_address: string;
  /** User's first name */
  first_name: string;
  /** User ID */
  id: string;
  /** User's last name */
  last_name: string;
  /** User's phone number */
  phone_number: string;
};

/** ----------------------------------------------------------------------------- */

/**
 * Generate a mock account column.
 */
export const generateMockAccountColumn = (): MockAccountColumnData => {
  return {
    email_address: faker.internet.email(),
    first_name: faker.person.firstName(),
    id: faker.string.uuid(),
    last_name: faker.person.lastName(),
    phone_number: faker.phone.number(),
  };
};

/** ----------------------------------------------------------------------------- */

const columnHelper = createColumnHelper<MockAccountColumnData>();

export const DATA_TABLE_COLUMNS_MOCK = [
  columnHelper.accessor("first_name", {
    cell: (info) => {
      return (
        <DataTableCellButton
          slotRight={<Icon icon={faArrowUpRight} />}
          value={info.getValue()}
        />
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
  columnHelper.accessor("phone_number", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "Phone number";
    },
  }),
  columnHelper.accessor("id", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "User ID";
    },
  }),
];

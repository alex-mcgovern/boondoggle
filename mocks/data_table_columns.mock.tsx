/** ----------------------------------------------------------------------------- */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Faker, en } from "@faker-js/faker";
import { faArrowUpRight } from "@fortawesome/pro-light-svg-icons";
import { createColumnHelper } from "@tanstack/react-table";

import { Icon } from "../src";
import { DataTableCellButton } from "../src/components/DataTableCellButton";
import { filterDataTableMultiSelect } from "../src/components/core.ui.data_table/lib/data_table_filter_fn_multi_select";

const faker = new Faker({ locale: [en] });
faker.seed(42);

/** ----------------------------------------------------------------------------- */

export type MockAccountColumnData = {
  /** Mocked account name */
  account_name: string;
  /** Mocked balance */
  balance: number;
  /** Mocked currency */
  currency: string;
  /** Mocked account ID */
  id: string;
};

/** ----------------------------------------------------------------------------- */

/**
 * Generate a mock account column.
 */
export const generateMockAccountColumn = (): MockAccountColumnData => {
  return {
    account_name: faker.company.name(),
    balance: faker.number.int({ max: 1000000, min: 1000 }),
    currency: faker.finance.currencyCode(),
    id: faker.string.uuid(),
  };
};

/** ----------------------------------------------------------------------------- */

const columnHelper = createColumnHelper<MockAccountColumnData>();

export const DATA_TABLE_COLUMNS_MOCK = [
  columnHelper.accessor("account_name", {
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
      return "Account name";
    },
  }),
  columnHelper.accessor("id", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "Account ID";
    },
  }),
  columnHelper.accessor("balance", {
    cell: (info) => {
      return info.getValue();
    },
    header: () => {
      return "Balance";
    },
  }),
  columnHelper.accessor("currency", {
    cell: (info) => {
      return info.getValue();
    },
    filterFn: filterDataTableMultiSelect<MockAccountColumnData>,
    header: () => {
      return "Currency";
    },
  }),
];

import { faArrowUpRight } from "@fortawesome/pro-light-svg-icons";
import Link from "next/link";

import {
  data_table_header_column_link_inner_style,
  data_table_header_column_link_style,
} from "./styles.css";

import type { Url } from "next/dist/shared/lib/router/router";

type DataTableHeaderColumnLinkProps = {
  href: Url;
  value: string | number;
};

export function DataTableHeaderColumnLink({
  href,
  value,
}: DataTableHeaderColumnLinkProps) {
  return (
    <Button
      appearance="link"
      as={Link}
      className={data_table_header_column_link_style}
      color="text_high_contrast"
      data-testid="customer_account"
      href={href}
      name={`link_${value}`}
      slotRight={<Icon icon={faArrowUpRight} />}
      withLoadingState
    >
      <Box className={data_table_header_column_link_inner_style}>{value}</Box>
    </Button>
  );
}

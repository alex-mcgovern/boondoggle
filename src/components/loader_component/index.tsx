import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import type { IconProps } from "../Icon";
import { Icon } from "../Icon";

export interface LoaderProps extends Omit<IconProps, "icon"> {
  icon?: IconProps["icon"];
}

export function Loader({ icon = faSpinner, ...rest }: LoaderProps) {
  return (
    <Icon
      alignItems="center"
      display="flex"
      icon={icon}
      justifyContent="center"
      spin
      width="100%"
      {...rest}
    />
  );
}

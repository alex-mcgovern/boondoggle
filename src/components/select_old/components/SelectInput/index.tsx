import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { forwardRef, useContext, useEffect, useState } from "react";

import { Input } from "../../../input";
import { DownshiftContext } from "../../context/DownshiftContext";

import type { InputProps } from "../../../input";
import type { LegacyRef } from "react";

export type SelectInputProps = Omit<InputProps, "slotRight">;

export const SelectInput = forwardRef(
  (
    { placeholder = "All", ...rest }: SelectInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

    const {
      getInputProps,
      getDropdownProps,
      isOpen,
      selectedItems,
      toggleMenu,
    } = useContext(DownshiftContext);

    /**
     * When has selected items (child of MultiSelect), reflect that in the placeholder text
     */
    useEffect(() => {
      if (Array.isArray(selectedItems) && selectedItems.length > 0) {
        setInputPlaceholder(`${selectedItems.length} selected`);
      } else {
        setInputPlaceholder(placeholder);
      }
    }, [placeholder, selectedItems]);

    return (
      <Input
        {...getInputProps({
          ...getDropdownProps({ preventKeyAction: isOpen, ref }),
          slotRight: faAngleDown,
          // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
          iconRightProps: {
            rotation: isOpen ? 180 : undefined,
          },
          onClick: toggleMenu,
          placeholder: inputPlaceholder || placeholder,
          ...rest,
        })}
      />
    );
  }
);

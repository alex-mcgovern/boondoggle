import type { WithSlots } from "../../common-types";
import type { ReactNode } from "react";

type InputSlotWrapperProps = WithSlots & {
    children: ReactNode;
};

export function InputSlotWrapper({
    children,
    slotLeft,
    slotRight,
}: InputSlotWrapperProps) {
    return (
        <span>
            {slotLeft}
            {children}
            {slotRight}
        </span>
    );
}

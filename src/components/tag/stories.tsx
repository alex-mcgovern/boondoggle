import { faTriangleCircleSquare } from "@fortawesome/sharp-regular-svg-icons";

import { Tag as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";

import type { TagProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
    component: StoryComp,
    title: "Components/Tag",
};

const TemplateSizes: StoryFn<StoryCompProps> = () => {return (
    <Box
        alignItems="center"
        display="flex"
        gap="space_6"
    >
        <StoryComp
            size="lg"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
        <StoryComp
            size="md"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
        <StoryComp
            size="sm"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
    </Box>
)};

export const Sizes: StoryObj<StoryCompProps> = {
    render: TemplateSizes,
};

const TemplateColors: StoryFn<StoryCompProps> = () => {return (
    <Box
        alignItems="center"
        display="flex"
        gap="space_6"
    >
        <StoryComp
            colorOverlay="blue"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
        <StoryComp
            colorOverlay="red"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
        <StoryComp
            colorOverlay="green"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
        <StoryComp
            colorOverlay="amber"
            slotLeft={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
        <StoryComp
            colorOverlay="grey"
            slotRight={[<Icon icon={faTriangleCircleSquare} />]}
        >
            {LOREM.text_xxs}
        </StoryComp>
    </Box>
)};

export const Colors: StoryObj<StoryCompProps> = {
    render: TemplateColors,
};

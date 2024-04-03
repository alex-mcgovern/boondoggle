export const snakeToSpace = (v: string) => {
    return v.replace(/_/g, " ");
};

export const capitalize = (v: string) => {
    return v ? v.charAt(0).toUpperCase() + v.slice(1) : v;
};

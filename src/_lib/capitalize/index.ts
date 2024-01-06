export const capitalize = (to_capitalize: string) => {
    return to_capitalize
        ? to_capitalize.charAt(0).toUpperCase() + to_capitalize.slice(1)
        : to_capitalize;
};

/**
 * Convert snake_case to camelCase
 * @example
 * snakeToCamel("hello_world") // "helloWorld"
 */
export const snakeToSpace = (v: string) => {
    return v.replace(/_/g, " ");
};

/**
 * Capitalize the first letter of a string
 * @example
 * capitalize("hello world") // "Hello world"
 */
export const capitalize = (v: string) => {
    return v ? v.charAt(0).toUpperCase() + v.slice(1) : v;
};

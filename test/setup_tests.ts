const originalError = console.error.bind(console.error);

console.error = (...args) => {
    return (
        !args.toString().includes("Error: Could not parse CSS stylesheet") && originalError(...args)
    );
};

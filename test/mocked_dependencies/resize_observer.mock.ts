global.ResizeObserver = jest.fn().mockImplementation(() => {
	return {
		disconnect: jest.fn(),
		observe: jest.fn(),
		unobserve: jest.fn(),
	};
});

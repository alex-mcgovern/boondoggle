import {
	ITEM_TO_FIND_MOCK,
	SELECTED_ITEMS_MOCK,
} from "../__mocks__/downshift_items.mock";
import { getIsSelected } from "../getIsSelected";

describe("Get is dropdown item selected", () => {
	test.skip("Downshift items mock none refined", () => {
		expect(
			getIsSelected({
				isMulti: true,
				item: ITEM_TO_FIND_MOCK,
				selectedItem: null,
				selectedItems: [],
			}),
		).toBe(false);
	});

	test.skip("Downshift items mock 1 refined", () => {
		expect(
			getIsSelected({
				isMulti: true,
				item: ITEM_TO_FIND_MOCK,
				selectedItem: null,
				selectedItems: SELECTED_ITEMS_MOCK,
			}),
		).toBe(true);
	});
});

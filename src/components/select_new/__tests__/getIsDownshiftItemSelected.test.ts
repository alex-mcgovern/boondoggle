import {
  ITEM_TO_FIND_MOCK,
  SELECTED_ITEMS_MOCK,
} from "../__mocks__/downshift_items.mock";
import { getIsSelected } from "../common/get_is_selected";

describe("Get is dropdown item selected", () => {
  test.skip("Downshift items mock none refined", () => {
    expect(
      getIsSelected({
        isMulti: true,
        selectedItem: null,
        selectedItems: [],
        item: ITEM_TO_FIND_MOCK,
      })
    ).toBe(false);
  });
  test.skip("Downshift items mock 1 refined", () => {
    expect(
      getIsSelected({
        isMulti: true,
        selectedItem: null,
        selectedItems: SELECTED_ITEMS_MOCK,
        item: ITEM_TO_FIND_MOCK,
      })
    ).toBe(true);
  });
});

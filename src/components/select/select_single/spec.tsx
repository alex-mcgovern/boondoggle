import { SelectSingle } from ".";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../__mocks__/select.mock";

describe("<SelectSingle />", () => {
    it("mounts", () => {
        cy.mount(
            <SelectSingle
                {...{
                    id: LOREM.id(),
                    items: mockSelectItems({}),
                    label: LOREM.label(),
                    name: LOREM.name(),
                    onChange: (selection) => {
                        alert(`onChange\n\n${JSON.stringify(selection, null, 2)}`);
                    },
                    placeholder: LOREM.placeholder(),
                }}
            />
        );

        cy.get(`input[name='${LOREM.name()}']`).click();
        cy.get(`li[value=${mockSelectItems({})[0].value}]`).click();
    });
});

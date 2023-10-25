import { SelectButton } from "."; import { LOREM } from "../../../../mocks/LOREM.mock"; import { mockSelectItems } from "../__mocks__/select.mock";
describe("<SelectButton />", () => {
	it("mounts", () => {
		cy.mount(
			<SelectButton
				{...{
					buttonText: LOREM.name(),
					id: LOREM.id(),
					items: mockSelectItems({}),
					label: LOREM.label(),
					name: LOREM.name(),
					onChange: (selection) => {
						alert(
							`onChange\n\n${JSON.stringify(selection, null, 2)}`,
						);
					},
					placeholder: LOREM.placeholder(),
				}}
			/>,
		);

		cy.get("button").contains(LOREM.name()).click();
		cy.get(`li[value=${mockSelectItems({})[0].value}]`).click();
	});
});

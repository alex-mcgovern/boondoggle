import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "../button";
import { ComboBoxInput, FormComboBox } from "../combo-box";
import { Form } from "../form";
import { Label } from "../label";

describe("FormComboBox", async () => {
	it("Filters with typeahead when filtering", async () => {
		const user = userEvent.setup();
		const onSubmit = vi.fn().mockImplementation(() => null);

		const { getAllByRole, getByLabelText, getByRole, getByText } = render(
			<Form.Root onSubmit={onSubmit}>
				<FormComboBox
					defaultItems={[
						{ id: "p0", name: "Urgent" },
						{ id: "p1", name: "High" },
						{ id: "p2", name: "Medium" },
						{ id: "p3", name: "Low" },
					]}
					name="combobox"
				>
					<Label>ComboBox</Label>
					<ComboBoxInput />
				</FormComboBox>
				<Button type="submit">Submit</Button>
			</Form.Root>,
		);

		const field = getByLabelText("ComboBox");
		await user.click(field);
		await user.type(field, "Urgent");

		expect(getByRole("listbox")).toBeInTheDocument();

		const options = getAllByRole("option");
		expect(options.length).toBe(1);
		await user.click(options[0]);

		const button = getByText("Submit");
		await user.click(button);

		expect(onSubmit).toHaveBeenCalledWith(
			{ combobox: "p0" },
			expect.anything(),
		);
	});

	it("Clearing combobox doesn't throw", async () => {
		const user = userEvent.setup();
		const onSubmit = vi.fn().mockImplementation(() => null);

		const { getAllByRole, getByLabelText, getByRole, getByText } = render(
			<Form.Root onSubmit={onSubmit}>
				<FormComboBox
					defaultItems={[
						{ id: "p0", name: "Urgent" },
						{ id: "p1", name: "High" },
						{ id: "p2", name: "Medium" },
						{ id: "p3", name: "Low" },
					]}
					defaultSelectedKey={"p0"}
					name="combobox"
				>
					<Label>ComboBox</Label>
					<ComboBoxInput />
				</FormComboBox>
				<Button type="submit">Submit</Button>
			</Form.Root>,
		);

		const field = getByLabelText("ComboBox");
		await user.click(field);
		await user.clear(field);
		await user.type(field, "Urgent");

		expect(getByRole("listbox")).toBeInTheDocument();

		const options = getAllByRole("option");
		expect(options.length).toBe(1);
		await user.click(options[0]);

		const button = getByText("Submit");
		await user.click(button);

		expect(onSubmit).toHaveBeenCalledWith(
			{ combobox: "p0" },
			expect.anything(),
		);
	});
});

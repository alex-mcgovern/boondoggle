import { faker } from "@faker-js/faker";
import { Meta, StoryObj } from "@storybook/react";
import {
	V2MobileMenu as StoryComp,
	V2MobileMenuFooter,
	V2MobileMenuHeader,
	V2ScrollableMobileMenuContent,
} from ".";
import { Button } from "../button";
import { sprinkles } from "../sprinkles/index.css";

const meta = {
	title: "MobileMenu",
	component: StoryComp,
	args: {
		modalOverlayProps: {
			isDismissable: true,
		},
		children: ({ close }) => (
			<>
				<V2MobileMenuHeader close={close} title="MobileMenu Title" />
				<V2ScrollableMobileMenuContent>
					<>
						<p>
							A modal MobileMenu component powered by{" "}
							<a href="https://react-spectrum.adobe.com/react-aria/MobileMenu.html">
								React Aria Components
							</a>
						</p>
						{Array.from({ length: 10 }, () => {
							return <p>{faker.lorem.paragraphs(1)}</p>;
						})}
					</>
				</V2ScrollableMobileMenuContent>
				<V2MobileMenuFooter>
					<Button
						className={sprinkles({ width: "100%" })}
						onPress={() => {
							alert("Confirmed");
							close();
						}}
					>
						Confirm
					</Button>
				</V2MobileMenuFooter>
			</>
		),
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import { Box } from "../box";
import { cardCSS, headerCSS } from "./styles.css";

function CardActionsWrapper({
	actions,
}: {
	actions?: React.ReactNode | [React.ReactNode?, React.ReactNode?];
}) {
	if (!actions) {
		return null;
	}

	return (
		<Box alignItems="center" display="flex" gap="space_2" marginLeft="auto">
			{actions}
		</Box>
	);
}

export type CardProps = {
	/**
	 * Action shown on the right-hand side of a card.
	 */
	actions?: React.ReactNode | [React.ReactNode?, React.ReactNode?];

	/**
	 * The components to render in the card
	 */
	children: React.ReactNode;

	/**
	 * The description of the card
	 */
	description?: string;

	/**
	 * The header of the card
	 */
	header?: React.ReactNode;

	/**
	 * Whether the card has padding or not
	 */
	hasPadding?: boolean;

	/**
	 * The title of the card
	 */
	title?: React.ReactNode;
};

/**
 * The card component is used to group related content together.
 */
export function Card({
	actions,
	children,
	description,
	hasPadding = true,
	header,
	title,
}: CardProps) {
	return (
		<>
			{header && <header className={headerCSS}>{header}</header>}
			<section className={cardCSS({ hasPadding, hasHeader: !!header })}>
				{(title || actions) && (
					<Box
						alignItems="start"
						as="header"
						display="flex"
						flexWrap="wrap"
						gap="space_6"
						marginBottom="space_6"
					>
						{(title || description) && (
							<Box>
								{title && (
									<Box as="h3" fontStyle="h5">
										{title}
									</Box>
								)}
								{description && (
									<Box as="p" color="text_low_contrast">
										{description}
									</Box>
								)}
							</Box>
						)}

						{actions && <CardActionsWrapper actions={actions} />}
					</Box>
				)}

				{children}
			</section>
		</>
	);
}

import type { ReactNode } from "react";

import clsx from "clsx";

import "./styles.css";

function CardActionsWrapper({
    actions,
}: {
    actions?: [ReactNode?, ReactNode?] | ReactNode;
}) {
    if (!actions) {
        return null;
    }

    return <div className="card-actions">{actions}</div>;
}

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
}: {
    /**
     * Action shown on the right-hand side of a card.
     */
    actions?: [ReactNode?, ReactNode?] | ReactNode;

    /**
     * The components to render in the card
     */
    children: ReactNode;

    /**
     * The description of the card
     */
    description?: string;

    /**
     * Whether the card has padding or not
     */
    hasPadding?: boolean;

    /**
     * The header of the card
     */
    header?: ReactNode;

    /**
     * The title of the card
     */
    title?: ReactNode;
}) {
    return (
        <>
            {header && <header className="card-header">{header}</header>}
            <section
                className={clsx("card", {
                    ["has-header"]: !!header,
                    ["has-padding"]: hasPadding,
                })}
            >
                {(title || actions) && (
                    <div className="card-title-section">
                        {(title || description) && (
                            <div>
                                {title && (
                                    <h3 className="card-title">{title}</h3>
                                )}
                                {description && (
                                    <p className="card-description">
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}

                        {actions && <CardActionsWrapper actions={actions} />}
                    </div>
                )}

                {children}
            </section>
        </>
    );
}

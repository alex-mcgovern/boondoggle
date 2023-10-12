/* eslint-disable @typescript-eslint/no-namespace */
import { mount } from "cypress/react18";

import "../../src/styles/stylesheet.css";
import "./commands";

declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount;
		}
	}
}

Cypress.Commands.add("mount", mount);

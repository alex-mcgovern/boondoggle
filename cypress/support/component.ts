import { mount } from "cypress/react18";

import "../../src/index.css";
import "./commands";

declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount;
		}
	}
}

Cypress.Commands.add("mount", mount);

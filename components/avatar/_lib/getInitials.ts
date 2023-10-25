type GetInitialsArgs = {
	/**
	 * First name of the user.
	 */
	firstName?: string;

	/**
	 * Full name of the user
	 */
	fullName?: string;

	/**
	 * Last name of the user.
	 */
	lastName?: string;
};

/**
 * Get's a user's initials for their avatar
 */

export function getInitials({
	firstName,
	fullName,
	lastName,
}: GetInitialsArgs) {
	if (fullName && !firstName && !lastName) {
		const [first, last] = fullName.split(" ");

		if (!last) {
			return `${first[0]}`;
		}
		return `${first[0]}${last[0]}`;
	}

	if (firstName && lastName) {
		return `${firstName[0]}${lastName[0]}`;
	}

	if (firstName) {
		return firstName[0];
	}

	if (lastName) {
		return lastName[0];
	}

	return "";
}

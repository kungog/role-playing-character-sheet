import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

//FIXME
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const passcode = formData.get('passcode');
		const oldUserPasscode = formData.get('oldUserPasscode');

		if (oldUserPasscode && oldUserPasscode.length > 0) {
			cookies.set('passcode', oldUserPasscode, {
				path: '/'
			});

			console.log('success!');
		}

		if (passcode && passcode.length > 0) {
			cookies.set('passcode', passcode, {
				path: '/'
			});
		}

		throw redirect(302, '/characters');
	}
};

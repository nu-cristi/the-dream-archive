import { type Actions, redirect, fail } from '@sveltejs/kit';
import { PUBLIC_LOGIN_USERNAME, PUBLIC_LOGIN_PASSWORD } from '$env/static/public';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
      return fail(400, { message: 'You must specify a username and password' });
    }

    if (username !== PUBLIC_LOGIN_USERNAME || password !== PUBLIC_LOGIN_PASSWORD) {
      return fail(400, {
        message: 'Username or password is incorrect, try pressing the HINT button'
      });
    }
    cookies.set('session', 'true', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return redirect(308, '/');
  }
} satisfies Actions;

import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  const session = event.cookies.get('session');

  if (!session && event.url.pathname !== '/login') {
    throw redirect(303, '/login');
  }

  return resolve(event);
}

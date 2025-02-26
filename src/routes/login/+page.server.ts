// +page.server.ts (not +page.svelte.ts)
import type { Actions } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    console.log({ username, password });
  }
} satisfies Actions;

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfigExport } from 'vitest/config';

export const defaultConfig: UserConfigExport = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};
export default defineConfig(defaultConfig);

import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	safelist: [
		{
			pattern: /bg-(primary|tertiary|red)-500/,
		},
		{
			pattern: /bg-(primary|tertiary|red)-500\/30/,
		},
		{
			pattern: /text-(primary|tertiary|red)-(200|500)/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					{
						name: 'wintry',
						enhancements: true,
					},
					{
						name: 'rocket',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;

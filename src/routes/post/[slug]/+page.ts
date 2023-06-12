import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import type { ComponentType } from 'svelte';

export async function load({ params: { slug } }) {
	try {
		const post = await import(`../../../posts/${slug}/post.svx`);
		const data: { metadata: Omit<Post, 'slug'>; component: ComponentType } = {
			metadata: post.metadata,
			component: post.default
		};
		return data;
	} catch (e) {
		throw error(404, `Could not find post, ${slug}`);
	}
}

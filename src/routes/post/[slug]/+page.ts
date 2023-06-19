import { error } from '@sveltejs/kit';
import type { PostFile } from '$lib/types';

export async function load({ params: { slug } }) {
	try {
		const post: PostFile = await import(`../../../posts/${slug}/post.svx`);
		const data = {
			metadata: post.metadata,
			component: post.default
		};
		return data;
	} catch (e) {
		throw error(404, `Could not find post, ${slug}`);
	}
}

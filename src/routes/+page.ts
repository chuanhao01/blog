import type { Post } from '$lib/types';

export async function load() {
	const res = await fetch('/api/posts');
	const data: { posts: Post[] } = await res.json();

	return data;
}

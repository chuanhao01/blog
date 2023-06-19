import { json } from '@sveltejs/kit';
import type { PostFile } from '$lib/types';
import { statSync } from 'fs';
import { slugify } from '$lib/utils';

async function getPosts() {
	let posts = [];

	const paths = import.meta.glob('/src/posts/**/post.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path] as PostFile;
		// TODO: Simplify stats down to the ones I want
		const stats = statSync(`./${path}`);
		const postFolder = path.split('/').at(-2);
		if (!postFolder) {
			throw Error(`PostFolder is not a string, path:${path}`);
		}

		const slug = slugify(postFolder);
		const metadata = file.metadata;
		const post = { ...metadata, slug, stats };
		if (post.state === 'published') {
			posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json({ posts });
}

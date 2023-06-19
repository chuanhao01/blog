import type { ComponentType } from 'svelte';

export interface PostMetadata {
	title: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
}

export type SVXFile = {
	metadata: object;
	default: ComponentType;
};

export type PostFile = SVXFile & { metadata: PostMetadata };

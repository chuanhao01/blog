export function slugify(name: string) {
	let slug = name.toLowerCase();
	slug = slug.replaceAll(' ', '_');
	return slug;
}

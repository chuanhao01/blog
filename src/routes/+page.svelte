<script lang="ts">
	export let data;
</script>

<h1>Welcome to the home page of the blog</h1>
<ul>
	{#each data.posts as post}
		<li>
			<a href="/post/{post.slug}">
				<p>Title:{post.title}, Descriptions:{post.description}</p>
			</a>
		</li>
	{/each}
</ul>

<script lang="ts">
	export let data;
</script>

<h1>{data.metadata.title}</h1>
{#each data.metadata.categories as category, i}
	{#if i < data.metadata.categories.length - 1}
		<span>{category}</span>,
	{:else}
		<span>{category}</span>
	{/if}
{/each}

<svelte:component this={data.component} />

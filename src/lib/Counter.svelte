<script lang="ts">
	let count = 0;
</script>

<button
	on:click={() => {
		count++;
	}}
>
	Clicked {count} time{count > 1 ? 's' : ''}
</button>

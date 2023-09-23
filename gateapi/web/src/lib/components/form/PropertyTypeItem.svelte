<script>
	export let type, icon, label, selected, setSelectedItem
	const isSelected = selected === type ? 'property-icon-selected' : ''
</script>

<button
	class="basis-1/4 flex justify-center items-center space-x-3 property-icon {isSelected}"
	id={type}
	on:click={setSelectedItem(type)}
>
	<svelte:component this={icon} />
	<p class="label">{label}</p>
</button>

<style>
	.property-icon {
		padding-top: 20px;
		padding-bottom: 20px;
		border: 1px solid #c3c1d7;
		border-radius: 4px;
	}

	.property-icon-selected {
		border: 1px solid #3f25c8;
	}
</style>

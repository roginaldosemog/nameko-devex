<script>
	import House from '../icons/House.svelte'
	import Building from '../icons/Building.svelte'
	import PropertyTypeItem from '$lib/components/form/PropertyTypeItem.svelte'

	let selected

	const setSelectedItem = (type) => {
		selected = type
	}
</script>

<div>
	<p class="label text-shadow pb-4">Property Type</p>
	<div class="flex gap-x-5">
		<PropertyTypeItem
			type="single-family"
			label="Single-Family"
			icon={House}
			{selected}
			{setSelectedItem}
		/>
		<PropertyTypeItem
			type="multi-family"
			label="Multi-Family"
			icon={Building}
			{selected}
			{setSelectedItem}
		/>
		<PropertyTypeItem
			type="townhome"
			label="Townhome"
			icon={House}
			{selected}
			{setSelectedItem}
		/>
		<PropertyTypeItem
			type="condo"
			label="Condo"
			icon={Building}
			{selected}
			{setSelectedItem}
		/>
	</div>
</div>

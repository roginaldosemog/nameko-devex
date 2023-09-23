<script>
	import PropertyImage from '$lib/components/PropertyImage.svelte'
	import TextInput from '$lib/components/form/TextInput.svelte'
</script>

<svelte:head>
	<title>Property details</title>
</svelte:head>

<div class="container min-h-screen">
	<section class="pt-11">
		<div class="flex gap-x-5">
			<div class="basis-full sm:basis-1/2">
				<h1 class="text-3xl md:text-4xl pb-2">Property details</h1>
				<p class="text-lg pb-11">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
				<div class="w-full pb-4">
					<TextInput label="Property Name" name="property-name" type="text" />
				</div>
				<div class="w-full">
					<TextInput label="Address" name="address" type="text" />
				</div>
			</div>
			<div class="hidden sm:flex basis-1/2 justify-end items-center">
				<PropertyImage />
			</div>
		</div>
	</section>
</div>

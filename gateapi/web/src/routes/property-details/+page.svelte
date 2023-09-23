<script>
	import PropertyImage from '$lib/components/PropertyImage.svelte'
</script>

<svelte:head>
	<title>Property details</title>
</svelte:head>

<div class="container min-h-screen">
	<section class="pt-4">
		<div class="flex gap-x-5">
			<div class="basis-full sm:basis-1/2">
				<h1 class="text-3xl md:text-4xl pb-2">Property details</h1>
				<p class="text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
			</div>
			<div class="hidden sm:flex basis-1/2 justify-end items-start">
				<PropertyImage />
			</div>
		</div>
	</section>
</div>

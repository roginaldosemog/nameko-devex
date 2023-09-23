<script>
	const getOrder = async () => {
		var response = await fetch('http://localhost:8000/orders/1')
		var result = await response.json()
		return result
	}

	let orderPromise = getOrder()
</script>

<svelte:head>
	<title>Order details</title>
</svelte:head>

<div class="container min-h-screen">
	<section class="pt-10">
		<div class="flex gap-x-5">
			<div class="basis-full">
				<h1 class="text-3xl md:text-4xl pb-2">Order details</h1>
				{#await orderPromise}
					<p>Loading....</p>
				{:then order}
					<p>{order}</p>
				{:catch err}
					<p>Error while loading the data</p>
				{/await}
			</div>
		</div>
	</section>
</div>

<script context="module" lang="ts">
	import logo from '$lib/assets/airship.png'
	import { ROUTES } from '$routes/routes'
</script>

<header class="bg-white shadow-md">
	<nav class="container mx-auto flex p-2">
		<div class="flex">
			<a href="/" class="mr-6">
				<img class="h-12 w-auto" src={logo} alt="Airship logo" />
			</a>
		</div>
		<div class="flex items-center space-x-4">
			{#each Object.entries(ROUTES) as [name, route]}
				<a class="text-sm font-semibold text-gray-900" href={route}>{name}</a>
			{/each}
		</div>
	</nav>
</header>

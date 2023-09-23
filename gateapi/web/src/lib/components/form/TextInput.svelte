<script>
	export let label,
		name,
		type,
		placeholder = ''
</script>

<label class="flex flex-col">
	{label}
	<input {name} {type} {placeholder} />
</label>

<style lang="scss">
	label {
		font-size: 16px;
		font-family: amplitude-wide;
		font-weight: 500;
	}

	input {
		border-radius: 4px;
		height: 48px;
		border: 1px solid #c3c1d7;

		font-size: 16px;
		font-weight: 300;
		font-family: amplitude-wide;

		transition: box-shadow 200ms;

		&:focus {
			border: 1px solid #c3c1d7;
			box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
		}
	}
</style>

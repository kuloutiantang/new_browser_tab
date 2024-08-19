<!-- @format -->

<script setup>
const props = defineProps({
	to: {
		type: String,
	},
});
const onClick = () => {
	console.log(props.to);
};
</script>
<template>
	<div
		@click="onClick"
		class="select-none flex-(~ row items-center gap-1) rounded-full cursor-pointer px-2 hover:(bg-#E6E4E2) dark:hover:(bg-#33322F)"
	>
		<slot></slot>
		<div>/</div>
	</div>
</template>

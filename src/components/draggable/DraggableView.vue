<!-- @format -->

<script setup>
// 获取数据
const props = defineProps({
	initialX: {
		type: Number,
		default: 100,
	},
	initialY: {
		type: Number,
		default: 100,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});
// Vue
import { ref } from "vue";
import { useElementBounding } from "@vueuse/core";
import { UseDraggable } from "@vueuse/components";
const draggable = ref(null);
const { x, y } = useElementBounding(draggable);
const realTimeX = defineModel("x");
const realTimeY = defineModel("y");
realTimeX.value = x;
realTimeY.value = y;
</script>
<template>
	<UseDraggable
		ref="draggable"
		:initial-value="{ x: initialX, y: initialY }"
		class="fixed"
		:disabled="disabled"
	>
		<slot></slot>
	</UseDraggable>
</template>

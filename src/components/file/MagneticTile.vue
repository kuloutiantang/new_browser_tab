<!-- @format -->

<script setup>
const props = defineProps({
	data: {
		type: Object,
		default: () => {
			return {
				keyword: "关键词",
				url: "链接",
				style: {
					width: "140px",
					height: "140px",
					background: "rgba(0, 0, 0, 0.5)",
					backgroundImage: "url()",
					borderRadius: "0px",
					color: "rgba(255, 255, 255, 0.5)",
				},
				title: {
					text: "标题",
					style: {
						bottom: "10px",
						left: "10px",
					},
				},
			};
		},
	},
});
// Vue
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";
// 鼠标
const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 旋转
const rotate = ref(0);
// 点击
const onClick = () => {
	console.log(props.data.url);
	rotate.value += 90;
};
</script>
<template>
	<div
		ref="target"
		@click="onClick"
		class="relative box-border cursor-pointer overflow-hidden hover:ring-(2px inset #00000035) dark:(hover:ring-#ffffff70) active:(ring-none)"
		:style="data.style"
	>
		<!-- 背景 -->
		<div class="w-full h-full flex-(~ row) justify-center items-center">
			<div class="box-border select-none p-7px keep-all overflow-hidden text-ellipsis text-40px">{{ data.title }}</div>
		</div>
		<!-- 标题 -->
		<div class="absolute select-none overflow-hidden text-ellipsis left-10px right-10px bottom-10px">{{ data.title }}</div>
		<!-- 蒙版 -->
		<div
			v-if="!isOutside"
			class="absolute op-40 w-400px h-400px mongolianVersion"
			:style="{
				transform: 'translate(-200px, -200px)',
				top: elementY + 'px',
				left: elementX + 'px',
			}"
		></div>
	</div>
</template>
<style scoped lang="scss">
.mongolianVersion {
	background-image: radial-gradient(circle at center, #00000035 0%, #00000000 70%);
}
.dark .mongolianVersion {
	background-image: radial-gradient(circle at center, #ffffff70 0%, #ffffff00 70%);
}
</style>

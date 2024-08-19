<!-- @format -->

<script setup>
// Vue
import { ref } from "vue";
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 组件
import FileBoxTag from "@/components/file/FileBoxTag.vue";
import MagneticTile from "@/components/file/MagneticTile.vue";
</script>
<template>
	<div class="z-0 relative box-border w-100vw h-100vh">
		<div
			class="relative box-border w-full h-full flex-(~ col gap-4 nowrap)"
			:style="config.style.filebox"
		>
			<!-- 路径 -->
			<div
				class="flex-(~ row gap-1 nowrap)"
				style="font-size: 14px; line-height: 2"
			>
				<FileBoxTag to="/"></FileBoxTag>
				<FileBoxTag to="/bg">办公</FileBoxTag>
				<FileBoxTag to="/dm">代码</FileBoxTag>
			</div>
			<!-- 面板 -->
			<div
				class="flex-(~ row wrap auto) justify-start align-start items-start"
				style="gap: 10px"
			>
				<MagneticTile
					v-for="(itemd, indexd) in config.data"
					:key="indexd"
					:data="itemd"
				></MagneticTile>
			</div>
		</div>
	</div>
</template>

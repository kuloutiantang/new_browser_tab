<!-- @format -->

<script setup>
// Vue
import { ref } from "vue";
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 输入框
const input = ref("");
// 切换搜索引擎
const engineUse = (key) => {
	config.set({
		search: {
			engine: {
				use: JSON.parse(JSON.stringify(config.config.search.engine.list[key])),
			},
		},
	});
};
// 即时搜索
const onInput = () => {
	if (input.value) {
		console.log(input.value);
	}
};
// 搜索
const search = () => {
	if (input.value) {
		let url = config.config.search.engine.use.url.replace("{keyword}", input.value);
		if (config.config.search.openingMethod === "newTab") {
			window.open(url);
		} else if (config.config.search.openingMethod === "currentTab") {
			window.location.href = url;
		}
	}
	input.value = "";
};
</script>
<template>
	<div
		class="z-2 absolute box-border flex flex-row justify-center items-center duration-700 bg-(stone-200 op-21) dark:(bg-(stone-700 op-21))"
		:style="config.style.searchbox"
	>
		<div :style="{ width: config.config.search.spacing.left }"></div>
		<div class="op-0 w-0 h-0 overflow-hidden">
			<div class="i-bx-bxl-google"></div>
			<div class="i-bx-bxl-baidu"></div>
			<div class="i-bx-bxl-bing"></div>
		</div>
		<el-popover
			placement="bottom-start"
			width="auto"
		>
			<template #reference>
				<div
					class="cursor-pointer box-border p-5px rounded-50% duration-350 bg-(stone-300 op-21) dark:(bg-(stone-600 op-21)) hover:(bg-op-62) active:(bg-op-7)"
					:style="{
						width: config.config.search.input.style.height,
						height: config.config.search.input.style.height,
					}"
				>
					<div
						:class="config.config.search.engine.use.icon"
						class="w-full h-full"
					></div>
				</div>
			</template>
			<template #default>
				<div class="flex flex-row flex-warp justify-start items-center gap-2.1">
					<div
						v-for="(item, index) in config.config.search.engine.list"
						:key="index"
						@click="engineUse(index)"
						class="cursor-pointer box-border p-5px rounded-50% duration-350 bg-(stone-300 op-21) dark:(bg-(stone-600 op-21)) hover:(bg-op-62) active:(bg-op-7)"
						:style="{
							width: config.config.search.input.style.height,
							height: config.config.search.input.style.height,
						}"
					>
						<div
							:class="item.icon"
							class="w-full h-full"
						></div>
					</div>
				</div>
			</template>
		</el-popover>
		<div :style="{ width: config.config.search.spacing.left }"></div>
		<div
			class="box-border"
			:style="config.style.search"
		>
			<input
				@input="onInput()"
				v-model="input"
				class="box-border block w-full h-full bg-transparent outline-none border-none active:(bg-transparent outline-none border-none)"
				:placeholder="config.config.search.input.placeholder"
				type="text"
			/>
		</div>
		<div :style="{ width: config.config.search.spacing.right }"></div>
		<div
			@click="search()"
			class="cursor-pointer box-border p-5px rounded-50% duration-350 bg-(stone-300 op-21) dark:(bg-(stone-600 op-21)) hover:(bg-op-62) active:(bg-op-7)"
			:style="{
				width: config.config.search.input.style.height,
				height: config.config.search.input.style.height,
			}"
		>
			<div class="i-bx-search-alt w-full h-full"></div>
		</div>
		<div :style="{ width: config.config.search.spacing.right }"></div>
	</div>
</template>

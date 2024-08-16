<!-- @format -->

<script setup>
import { ref } from "vue";
import { useMouse, useElementSize, onClickOutside, useElementBounding } from "@vueuse/core";
const { x, y } = useMouse();
// 路由
import { useRoute } from "vue-router";
const route = useRoute();
// 组件
import BookmarkList from "@/components/BookmarkList.vue";
const listBox = ref(null);
const { x: listBoxX, y: listBoxY, width: listBoxW, height: listBoxH } = useElementBounding(listBox);
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
// 右键菜单
const el = ref(null);
const { width, height } = useElementSize(el);
const rightMenuRef = ref(null);
const rightMenu = ref(false);
const rightMenuStyle = ref({});
onClickOutside(rightMenuRef, () => {
	rightMenu.value = false;
});
const rightClickTruncation = (e) => {
	e.preventDefault();
	let thisMouse = {
		x: x.value,
		y: y.value,
		sx: width.value / 2 > x.value ? "r" : "l",
		sy: height.value / 2 > y.value ? "b" : "t",
	};
	let top, bottom, left, right;
	if (thisMouse.sx == "r") {
		left = thisMouse.x + "px";
	} else {
		right = width.value - thisMouse.x + "px";
	}
	if (thisMouse.sy == "b") {
		top = thisMouse.y + "px";
	} else {
		bottom = height.value - thisMouse.y + "px";
	}
	rightMenuStyle.value = { left, right, top, bottom };
	rightMenu.value = true;
};

// 其他
const test = () => {
	let save = {
		search: {
			style: {
				top: "100px",
			},
		},
	};
	config.set(save);
};
</script>
<template>
	<div
		ref="el"
		class="template"
		@click.right.native="rightClickTruncation"
	>
		<!-- 右键菜单 -->
		<div
			ref="rightMenuRef"
			v-if="rightMenu"
			class="z-99 absolute bg-stone-500 op-91 rounded-7px box-border p-14px overflow-hidden grid-(~ rows-2 flow-col) gap-14px"
			:style="rightMenuStyle"
		>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
		</div>
		<!-- 背景 -->
		<div class="z--1 absolute w-100vw h-100vh"></div>
		<!-- 搜索框 -->
		<div
			ref="searchBox"
			class="absolute box-border flex flex-row justify-center items-center duration-700 bg-(stone-200 op-21) dark:(bg-(stone-700 op-21))"
			:style="config.config.search.style"
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
				:style="config.config.search.input.style"
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
		<!-- 内容 -->
		<div
			class="box-border w-100vw h-100vh flex-auto flex flex-col select-none"
			:style="{
				paddingTop: config.config.body.top,
				paddingBottom: config.config.body.bottom,
				paddingLeft: config.config.body.left,
				paddingRight: config.config.body.right,
			}"
		>
			<div
				ref="listBox"
				class="w-full h-full"
			>
				<BookmarkList
					:data="config.config.list"
					:starting="{ x: listBoxX, y: listBoxY, w: listBoxW, h: listBoxH }"
					:quadrant="1"
				></BookmarkList>
			</div>
		</div>
	</div>
</template>

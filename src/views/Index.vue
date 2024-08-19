<!-- @format -->

<script setup>
import { ref } from "vue";
import { useMouse, useElementSize, onClickOutside, useElementBounding } from "@vueuse/core";
const { x, y } = useMouse();
// 路由
import { useRoute } from "vue-router";
const route = useRoute();
// 组件
import BookmarkList from "@/components/popup/BookmarkList.vue";
import SearchBox from "@/components/search/SearchBox.vue";
import TimeDate from "@/components/search/TimeDate.vue";
import FileBox from "@/components/file/FileBox.vue";
const listBox = ref(null);
const { x: listBoxX, y: listBoxY, width: listBoxW, height: listBoxH } = useElementBounding(listBox);
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
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
		<SearchBox></SearchBox>
		<!-- 时间日期 -->
		<TimeDate></TimeDate>
		<!-- 内容 -->
		<FileBox></FileBox>
		<!-- <div
			class="z-0 box-border w-100vw h-100vh flex-auto flex flex-col select-none"
			:style="config.config.body.style"
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
		</div> -->
	</div>
</template>

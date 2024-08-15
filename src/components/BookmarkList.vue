<!-- @format -->

<script setup>
// 获取数据
const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
	pos: {
		type: Object,
	},
});
const emit = defineEmits(["onOpenChild", "onCloseChild"]);
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 组件
import BookmarkFolder from "@/components/BookmarkFolder.vue";
import { ref } from "vue";
import { useElementBounding } from "@vueuse/core";
const listBox = ref(null);
const { x, y, width, height } = useElementBounding(listBox);
// 打开书签
const openUrl = (url) => {
	if (url) {
		if (config.config.openingMethod === "newTab") {
			window.open(url);
		} else if (config.config.openingMethod === "currentTab") {
			window.location.href = url;
		}
	}
};
// 打开文件夹
const isOpen = ref(false);
const folderData = ref({});
const openFolder = (data) => {
	emit("onOpenChild");
	folderData.value = JSON.parse(JSON.stringify(data));
	isOpen.value = true;
};
// 关闭文件夹
const closeFolder = () => {
	emit("onCloseChild");
	isOpen.value = false;
};
</script>

<template>
	<div
		ref="listBox"
		class="box-border relative w-full h-full flex-auto flex flex-row flex-wrap justify-start items-start align-start"
		:style="{ gap: config.config.body.list.gap }"
	>
		<div
			v-for="(item, index) in data"
			:key="index"
			class="cursor-pointer flex flex-col justify-center items-center"
		>
			<div
				@click="openUrl(item.url)"
				v-if="item.iconType == 'text'"
				class="box-border flex justify-center items-center base-shadow"
				:style="{
					background: item.iconBackground,
					color: item.iconColor,
					width: config.config.body.list.width,
					height: config.config.body.list.height,
					borderRadius: config.config.body.list.borderRadius,
				}"
				>{{ item.iconText }}</div
			>
			<div
				@click="openFolder(item)"
				v-if="item.iconType == 'view'"
				class="box-border border-(2px stone-500 solid) p-2 bg-stone-500 bg-op-5 grid-(~ cols-3 rows-3) gap-1 base-shadow"
				:style="{
					width: config.config.body.list.width,
					height: config.config.body.list.height,
					borderRadius: config.config.body.list.borderRadius,
				}"
			>
				<div
					v-for="(itemc, indexc) in item.children"
					:key="indexc"
					class="w-full h-full"
				>
					<div
						v-if="itemc.iconType == 'text'"
						class="w-full h-full text-12px flex justify-center items-center"
						:style="{
							background: itemc.iconBackground,
							color: itemc.iconColor,
							borderRadius: config.config.body.list.childBorderRadius,
						}"
					>
						<div>{{ itemc.iconText[0] }}</div>
					</div>
					<div
						v-if="itemc.iconType == 'view'"
						class="box-border border-(1px stone-500 solid) w-full h-full text-12px flex justify-center items-center"
						:style="{
							borderRadius: config.config.body.list.childBorderRadius,
						}"
						>{{ itemc.title[0] }}</div
					>
				</div>
			</div>
			<div
				:style="{
					fontSize: config.config.body.list.fontSize,
					lineHeight: config.config.body.list.lineHeight,
				}"
				>{{ item.title }}</div
			>
		</div>
		<BookmarkFolder
			v-if="isOpen"
			:data="folderData"
			:pos="{ x, y, width, height }"
			@on-close="closeFolder"
		></BookmarkFolder>
	</div>
</template>

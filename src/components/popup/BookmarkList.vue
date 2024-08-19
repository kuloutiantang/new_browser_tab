<!-- @format -->

<script setup>
// 获取数据
const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
	starting: {
		type: Object,
	},
	quadrant: {
		type: Number,
	},
});
const emit = defineEmits(["onOpenChild", "onCloseChild"]);
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 组件
import BookmarkFolder from "@/components/popup/BookmarkFolder.vue";
import DraggableView from "@/components/popup/DraggableView.vue";
import { ref } from "vue";
import { useElementBounding, useKeyModifier } from "@vueuse/core";
const isControl = useKeyModifier("Control");
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
		class="box-border relative w-full h-full flex-auto"
		:style="{ gap: config.config.body.list.gap }"
	>
		<div
			v-if="x > 0"
			class="box-border relative w-full h-full flex flex-row flex-wrap justify-start items-start align-start"
		>
			<DraggableView
				v-for="(item, index) in data"
				:key="index"
				:initial-x="x + index * 120"
				:initial-y="y"
				:disabled="!isControl"
				:style="{ cursor: !isControl ? 'pointer' : 'move' }"
			>
				<!-- 文本图标 -->
				<div
					@click.exact="openUrl(item.url)"
					v-if="item.iconType == 'text'"
					class="box-border flex justify-center items-center base-shadow"
					:style="item.styleText"
					>{{ item.iconText }}</div
				>
				<!-- 文件夹图标 -->
				<div
					@click.exact="openFolder(item)"
					v-if="item.iconType == 'view'"
					class="box-border p-2 bg-(stone-300 op-14) border-(2px stone-600 solid) dark:(bg-(#000 op-14) border-(2px stone-400 solid)) grid-(~ cols-3 rows-3) gap-1 base-shadow"
					:style="item.styleFolder"
				>
					<!-- 子文件夹 -->
					<div
						v-for="(itemc, indexc) in item.children"
						:key="indexc"
						class="w-full h-full"
					>
						<!-- 文本子图标 -->
						<div
							v-if="itemc.iconType == 'text'"
							class="w-full h-full text-12px flex justify-center items-center"
							:style="itemc.innerStyleText"
						>
							<div>{{ itemc.iconText[0] }}</div>
						</div>
						<!-- 图片子图标 -->
						<div
							v-if="itemc.iconType == 'view'"
							class="box-border border-(1px stone-500 solid) w-full h-full text-12px flex justify-center items-center"
							:style="itemc.innerStyleFolder"
							>{{ itemc.title[0] }}</div
						>
					</div>
				</div>
				<!-- 文本 -->
				<div
					class="text-center"
					:style="{
						fontSize: config.config.body.list.fontSize,
						lineHeight: config.config.body.list.lineHeight,
					}"
					>{{ item.title }}</div
				>
			</DraggableView>
		</div>
		<BookmarkFolder
			v-if="isOpen"
			@on-close="closeFolder"
			:data="folderData"
			:starting="starting"
			:quadrant="quadrant"
		></BookmarkFolder>
	</div>
</template>

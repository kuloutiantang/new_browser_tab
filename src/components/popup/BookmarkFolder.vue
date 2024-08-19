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
const emit = defineEmits(["onClose"]);
// Vue
import { ref } from "vue";
import { onClickOutside, useKeyModifier } from "@vueuse/core";
// 组件
import BookmarkList from "@/components/popup/BookmarkList.vue";
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 节点
const target = ref(null);
// 拖拽
const disabled = ref(false);
const isControl = useKeyModifier("Control");
// 监听
// 点击外部
onClickOutside(target, () => {
	emit("onClose");
});
// 子文件夹打开
const onOpenChild = () => {
	disabled.value = true;
};
// 子文件夹关闭
const onCloseChild = () => {
	disabled.value = false;
};
</script>
<template>
	<div
		:style="{
			top: starting.y + 50 + (quadrant == 1 || quadrant == 4 ? 45 : -45) + 'px',
			left: starting.x + 50 + (quadrant == 1 || quadrant == 2 ? 45 : -45) + 'px',
			width: starting.w - 100 + 'px',
			height: starting.h - 100 + 'px',
			borderRadius: config.config.body.folder.borderRadius,
			padding: config.config.body.folder.padding,
		}"
		ref="target"
		class="fixed base-shadow box-border bg-(stone-300 op-62) dark:(bg-(#000 op-62))"
	>
		<BookmarkList
			:data="data.children"
			@on-open-child="onOpenChild"
			@on-close-child="onCloseChild"
			:candrag="!(disabled || isControl)"
			:starting="starting"
			:quadrant="quadrant == 4 ? 1 : quadrant + 1"
		></BookmarkList>
	</div>
</template>

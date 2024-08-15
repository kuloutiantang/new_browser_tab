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
const emit = defineEmits(["onClose"]);
// Vue
import { ref } from "vue";
import { onClickOutside, useDraggable, useElementSize } from "@vueuse/core";
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// 节点
const target = ref(null);
// 拖拽
const disabled = ref(false);
const { x, y, style } = useDraggable(target, {
	initialValue: { x: props.pos.x + props.pos.width * 0.05, y: props.pos.y + props.pos.height * 0.05 },
	disabled,
});
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
// 组件
import BookmarkList from "@/components/BookmarkList.vue";
</script>
<template>
	<div
		:style="
			style +
			'width: ' +
			pos.width * 0.9 +
			'px; height: ' +
			pos.height * 0.9 +
			'px; border-radius: ' +
			config.config.body.list.borderRadius +
			'; padding: ' +
			config.config.body.list.gap +
			';'
		"
		style="position: fixed"
		ref="target"
		class="base-shadow box-border bg-(stone-300 op-70) dark:(bg-(stone-700 op-70))"
	>
		<BookmarkList
			:data="data.children"
			@on-open-child="onOpenChild"
			@on-close-child="onCloseChild"
		></BookmarkList>
	</div>
</template>

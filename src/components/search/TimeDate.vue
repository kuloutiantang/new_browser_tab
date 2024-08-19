<!-- @format -->

<script setup>
// Vue
import { ref, onMounted, onUnmounted } from "vue";
// 配置
import { useConfigStore } from "@/stores/config";
const config = useConfigStore();
// dayjs
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
// 当前时间
const timer = ref(null);
const time = ref({});
onMounted(() => {
	timer.value = setInterval(() => {
		time.value = {
			Y: dayjs().format("YYYY"),
			M: dayjs().format("MM"),
			m: dayjs().format("MMMM"),
			D: dayjs().format("DD"),
			d: dayjs().format("D"),
			H: dayjs().format("HH"),
			h: dayjs().format("hh"),
			i: dayjs().format("mm"),
			s: dayjs().format("ss"),
			S: dayjs().format("SSS"),
			w: dayjs().format("dddd"),
		};
	}, 1);
});
onUnmounted(() => {
	clearInterval(timer.value);
	timer.value = null;
});
</script>
<template>
	<div
		class="z-1 absolute box-border"
		:style="config.style.timedate"
	>
		<div
			v-if="timer"
			class="flex-(~ col nowrap) justify-center items-center"
		>
			<div>{{ time.Y }}-{{ time.M }}-{{ time.D }}</div>
			<div>{{ time.H }}:{{ time.i }}:{{ time.s }}</div>
		</div>
	</div>
</template>

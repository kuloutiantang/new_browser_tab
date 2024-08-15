/** @format */

import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	rules: [
		// 自定义规则
		["base-shadow-light", { "box-shadow": "0 0 7px 0 rgba(255, 255, 255, 0.07)" }],
		["base-shadow-light-hover", { "box-shadow": "0 0 14px 0 rgba(255, 255, 255, 0.49)" }],
		["base-shadow-dark", { "box-shadow": "0 0 7px 0 rgba(0, 0, 0, 0.07)" }],
		["base-shadow-dark-hover", { "box-shadow": "0 0 14px 0 rgba(0, 0, 0, 0.49)" }],
	],
	shortcuts: {
		// 快捷方式
		template: "w-100vw min-h-100vh flex flex-col flex-nowrap justify-center items-center overflow-hidden overflow-y-auto relative m-0 p-0",
		"base-shadow": "base-shadow-light hover:(base-shadow-light-hover) dark:(base-shadow-dark hover:(base-shadow-dark-hover))",
	},
	theme: {
		colors: {
			// 颜色
		},
		breakpoints: {
			// 断点
		},
	},
	presets: [
		// 预设
		/* UnoCSS 的默认预设 */
		presetUno(),
		/* class 内容变属性 */
		presetAttributify(),
		/* 图标 */
		presetIcons(),
		/* 版式预设	*/
		presetTypography(),
	],
	transformers: [
		// 转换器
		/* 指令转换器 */
		transformerDirectives(),
		/* 变体组转换器 */
		transformerVariantGroup(),
	],
});

/** @format */

import { ref } from "vue";
import { defineStore } from "pinia";
import crumbs from "crumbsjs";

export const useConfigStore = defineStore("config", () => {
	// 存储键名
	const THE_KEY = "eden_config_storage_key_name";
	// 配置信息
	const config = ref({
		search: {
			style: {
				top: "",
				bottom: "70%",
				left: "",
				right: "",
				borderRadius: "35px",
				padding: "10px",
			},
			input: {
				style: {
					width: "50vw",
					height: "35px",
					lineHeight: "35px",
					fontSize: "20px",
				},
				placeholder: "请输入搜索内容",
			},
			spacing: {
				left: "14px",
				right: "14px",
			},
			engine: {
				use: {
					name: "谷歌",
					url: "https://www.google.com/search?q={keyword}",
					iconUrl: "https://www.google.com/favicon.ico",
					icon: "i-bx-bxl-google",
				},
				list: [
					{
						name: "谷歌",
						url: "https://www.google.com/search?q={keyword}",
						iconUrl: "https://www.google.com/favicon.ico",
						icon: "i-bx-bxl-google",
					},
					{
						name: "百度",
						url: "https://www.baidu.com/s?wd={keyword}",
						iconUrl: "https://www.baidu.com/favicon.ico",
						icon: "i-bx-bxl-baidu",
					},
					{
						name: "必应",
						url: "https://cn.bing.com/search?q={keyword}",
						iconUrl: "https://cn.bing.com/favicon.ico",
						icon: "i-bx-bxl-bing",
					},
				],
			},
			openingMethod: "newTab", // 搜索打开方式: newTab:新标签页, currentTab:当前标签页
		},
		body: {
			top: "38vh",
			bottom: "10vh",
			left: "10vw",
			right: "10vw",
			list: {
				width: "100px",
				height: "100px",
				borderRadius: "10px",
				childBorderRadius: "3px",
				fontSize: "14px",
				lineHeight: "2",
				gap: "28px",
			},
		},
		list: [
			{
				title: "Excalidraw",
				keyword: "excalidraw,画板",
				url: "https://excalidraw.com/",
				iconType: "text",
				iconUrl: "",
				iconText: "画板",
				iconBackground: "#ffffff",
				iconColor: "#000000",
			},
			{
				title: "Flow Us",
				keyword: "flowus,息流",
				url: "https://flowus.cn/",
				iconType: "text",
				iconUrl: "",
				iconText: "息流",
				iconBackground: "#ffffff",
				iconColor: "#000000",
			},
			{
				title: "办公",
				keyword: "办公",
				url: "",
				iconType: "view",
				iconUrl: "",
				iconText: "",
				iconBackground: "",
				iconColor: "",
				children: [
					{
						title: "腾讯会议",
						keyword: "腾讯会议,tencent meeting",
						url: "https://meeting.tencent.com/",
						iconType: "text",
						iconUrl: "",
						iconText: "会议",
						iconBackground: "#ffffff",
						iconColor: "#000000",
					},
					{
						title: "代码",
						keyword: "代码",
						url: "",
						iconType: "view",
						iconUrl: "",
						iconText: "",
						iconBackground: "",
						iconColor: "",
						children: [
							{
								title: "GitHub",
								keyword: "GitHub",
								url: "https://github.com/",
								iconType: "text",
								iconUrl: "",
								iconText: "GitHub",
								iconBackground: "#ffffff",
								iconColor: "#000000",
							},
						],
					},
				],
			},
		],
		openingMethod: "newTab", // 书签打开方式: newTab:新标签页, currentTab:当前标签页
	});

	/**
	 * 替换配置信息
	 * @param {Object} data 配置信息
	 */
	function setAll(data) {
		config.value = data;
	}
	/**
	 * 修改配置信息
	 * @param {Object} data 配置信息
	 */
	function set(data) {
		let allData = mergeObjects(config.value, data);
		setAll(allData);
	}
	/**
	 * 合并
	 * @param {*} objA 原始对象
	 * @param {*} objB 附加对象
	 * @returns 结果对象
	 */
	function mergeObjects(objA, objB) {
		Object.keys(objB).forEach((key) => {
			if (objB[key] && typeof objB[key] === "object" && !Array.isArray(objB[key])) {
				// 如果 objB[key] 是对象，则递归调用 mergeObjects
				if (!objA[key]) {
					objA[key] = {};
				}
				mergeObjects(objA[key], objB[key]);
			} else {
				// 如果不是对象，则直接替换或添加值
				objA[key] = objB[key];
			}
		});
		return objA;
	}
	/**
	 * 获取本地配置信息
	 * @returns boolean 是否存在
	 */
	function localConfig() {
		let cookieConfig = crumbs.ls.get(THE_KEY);
		if (cookieConfig) {
			setAll(cookieConfig);
		}
	}
	/**
	 * 本地备份
	 */
	function backups() {
		crumbs.ls.set(THE_KEY, config.value);
	}
	/**
	 * 重置
	 */
	function reset() {
		crumbs.ls.delete(THE_KEY);
	}

	return { config, setAll, set, localConfig, backups, reset };
});
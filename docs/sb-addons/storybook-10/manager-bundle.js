try {
	var u = __STORYBOOKAPI__,
		{
			ActiveTabs: h,
			Consumer: c,
			ManagerContext: S,
			Provider: m,
			addons: s,
			combineParameters: b,
			controlOrMetaKey: p,
			controlOrMetaSymbol: f,
			eventMatchesShortcut: y,
			eventToShortcut: T,
			isMacLike: A,
			isShortcutTaken: O,
			keyToSymbol: P,
			merge: _,
			mockChannel: g,
			optionOrAltSymbol: k,
			shortcutMatchesShortcut: v,
			shortcutToHumanString: M,
			types: C,
			useAddonState: w,
			useArgTypes: R,
			useArgs: x,
			useChannel: K,
			useGlobalTypes: B,
			useGlobals: G,
			useParameter: I,
			useSharedState: Y,
			useStoryPrepared: j,
			useStorybookApi: z,
			useStorybookState: H,
		} = __STORYBOOKAPI__;
	s.setConfig({
		showNav: !0,
		showPanel: !0,
		panelPosition: "bottom",
		enableShortcuts: !0,
		showToolbar: !0,
		theme: void 0,
		selectedPanel: void 0,
		initialActive: "sidebar",
		sidebar: { showRoots: !1, collapsedRoots: ["other"] },
		toolbar: {
			title: { hidden: !1 },
			zoom: { hidden: !1 },
			eject: { hidden: !1 },
			copy: { hidden: !1 },
			fullscreen: { hidden: !1 },
		},
	});
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}
//# sourceMappingURL=manager-bundle.js.map

"use strict";
(self.webpackChunk_alex_mcgovern_boondoggle_design =
	self.webpackChunk_alex_mcgovern_boondoggle_design || []).push([
	[7642],
	{
		"./src/components/tab/index.tsx": (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { O: () => Tab });
			var dessert_box_core_esm = __webpack_require__(
					"./node_modules/@dessert-box/core/dist/dessert-box-core.esm.js",
				),
				clsx_m = __webpack_require__(
					"./node_modules/clsx/dist/clsx.m.js",
				),
				react = __webpack_require__("./node_modules/react/index.js"),
				a11y_css = __webpack_require__(
					"./src/styles/common/a11y.css.ts",
				),
				get_sprinkles_css = __webpack_require__(
					"./src/styles/utils/get_sprinkles.css.ts",
				),
				slot_wrapper = __webpack_require__(
					"./src/components/slot_wrapper/index.tsx",
				),
				injectStylesIntoStyleTag =
					(__webpack_require__(
						'src/styles/layers.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/layers.css.ts.vanilla.css","source":"QGxheWVyIHJlc2V0OwpAbGF5ZXIgYmFzZTsKQGxheWVyIHRoZW1lOwpAbGF5ZXIgc3ByaW5rbGVzOw=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/color_palette.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/color_palette.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA+1Y226jMBB971fwUmlXShHGNob0pdJ+wH4CIgkJaSlUhPSiVf99xyY2hmCHoKXah74QtfJhxuM5Zw5+yJOPtHLqLH1O72+WVVnWC2e5XCXrp01Vvjh/bhzn7k7+GccIV/Sdbb2lkx3y5IfvBQsnYq53u3CIG8LTc2mEf94r2K4qj8VGAZEANjjsCVwUAlAicoCoxb622CfNYnjKtWW1Sas4Wdf711RhsIYJBIQGLuphNuk2Oea1AhEJYgsHIVi+cELqRj1UVr7CU2KoxFDAeC4DDAu17I51XRb97IITCCEOElXDrt/D9LNj2pYaEPXOAnWTCyUkVHGYi3uQel+0QSKJiKDItKm11xZuW66Ph7jaFzuFSLS0QgTVgoLTNsghSzblm1q9kh2DeMc0NYayRaJlvCg6oer0vY6z/S6L12VRV8mhzXBt7QYBzCHgGW5z1hFQc6pwvAi9U0r16iFxtCJjHdI/pK1WP4ShDKKMuIPpntFOR/jQBYDQmuEt29dtSpmZN583DxqJBWPddZmXVfyS5GkNL3lNqn1S1L/4P39DCrA8Tp5XWi57AZtMdTvZMWyQnXJWJ3Yd2y/yncc4cYMNgAyEx7x1A9GLAZMHfInxmAp14OdFaQdkozz2ZIKYdBK0ct64LQvpMVUYKvv8AuuJLyFA5LCFmFlvLMIU2o8lPoRs2gh1inGR+qbaW7hvqoiN+4RITMRFo4sZ5D7BKkqgRxnNfcf5HEf3VX5sX/g4J9u1MQVs92dh++AoHDPfQdAZA1LATyDn++UJPzTgps34iVN+0pyfNOmnzPqZad/WEdGraG88AevMN1Xl8tRvej7QNdcy9pF3ojH8dFTp35O/n/XT7Pw/y3QOAejb+6kGf5rF/xaArxIAU4dMs/yTTP802z/F+M+jALsqTQv1xnxO/iNuqqnKM5qF/4giYTxFeqjjcq0CgAgvYigcQDAUblAARDTiNW6XjLb8iGLxXcGT9MMBK25QAMvmLBKAqC++EvjWMHODURqACBLcYI0F9cZogLka82kAolTEFC6AXCUC5lOwqIC5LjYVQPxzjTZfRTDTR/kARMAHkFDqzaw+AFTgQ73w+dsEfIUJMI2gESZgcGtWE8CVV5wT9UebANO4s5kAUym+TcD/bAKqtOVpMeuFH420KwAyz4Uf5d/yzZCkQzDTlR/PjRFR8LBzTWO/84uEYRA3B2T0HYBIMjhN8rATzH7tZ96c9eIvFEmS29MUGiMAOPCE/febVo/GCIC5GvMJAKZE2UpwAMEVCmA+BYsEmOtikwCBUhcB/XvDQQVoAjFRlIhMvgX8/AtAYwM2yhsAAA=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/vars.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/vars.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA4WY34/iNhDH3/tXWCuttCcFGtv5QdKnu7anq9R7uW11LychAwaym1+bBJbdU//3jgnY48QAD6A4n/FMPOPvOKRNVXXk5y+ETCaireWy+ya6rJrIQ9eI79lKzuf0OclfkshPCfXJr4T/NoLbl51oDEmBBJCOwU7kucZYShKFRWPuFTvmMF0EYNJzi6pZyeb0M1/JtdjlnYYDgOsDaas8W5G9aB4mY5I34SFeBx9c822rPXyfZwsvznbm+rlCa65vYpXt2kno/7jXM0UpCf17B5VvNBODN1YfHFCx0tAsJTMnU2dobRNYW/Vxkm2hOZGSwDCHx61YVa84pkVKfOWQMOBIs1mIBxr4Hg0Sj4aJ50/Zh6E1CnaprDkYRm5jGo6sUXArZa3W3+9tOfV46MEE/tQ/Z2+VtXUu3iaLvFo+a0uZkuOAzaxzedDIOiXq2iY2TWaC36REXdtEVuZZaWpzm5J+xEUNgsrO7MQR2+mOFeKTNhhHWlYoiueUqGub6MQiN0iekuOAg5ksJaqc4gQeR3t6XZXdZ1FkOSxztXrTaJmSiahrYNu3tpOF9wmCff4qlo/Hy89g5t09yk0lyb9/3XlfZL6XXbYU3scmE7nXihJqUTbZ2rv7qKYhv1d51ZA/i+opuzOWpwETy2P2Lo+R/G3qtIK908jCAX01Ga2hoKazOHSDj6byXhTo4rZUM01K2NSFMI20gDgAroEOonb7CTSzU4wLCTWyVwhzMZFmXp0LpNRfIwcltGc1UMh3mW22HSxObtbwLSWx74+YY7+wwHcQKgeYq2/TKqCrcAdVSFAqkw9KlXyOsbJqCmFql0JLCRxYK4vMio1CT4nOoNrk/8gCNkQnoQJ3BZQlnZssUtVT1g1h6+aagckqDXsDftXA7HMaHfnLLJubsqPQJSCSGwZocmgYjayl6B6Yp6w+XDbj2A+0EH7LD0d+hPbDb/kJkNlCmwW3zMJ5bOygtYQQXnwtvBD5WWk/4S0/ETKT2iy6ZRbPzY6k0F4gNBXiFQPkZ6P9xNjPti9gw0HD8a1bLESnDAo9hoX3A2C/NcCTAvZbi7AOKvQZnVQ0gKfIFTCYIraigB4SD6KIrShKBQymSCwnoOfJ0An1rUBrdSAdRAoDeJaXIzKYRuy6yiAg42rAIoqsnCxBPmSJlArEHI1bfFfVn4Q5NVKQ9UBrrWrgX85CavUsOpD2AYkaF91fJVHnopbOIw51LgpCz50MEr03u71hCindO+5wmDH9i/mDJocxs2MYvfiIqIsxdpGyWhnjNtfWYpmVGzv3LMC5PyPWyYqFer+d76tfOfcNEl1CfkBPNliszhR+xMZBaRzRM0XTi7BJJksUeRE0GWVCgZc4k1O2GBx+bBAldolLzabQk6wGhxMbRKmV7pT13Mxwa1xzg2VBadnYBTwA0bps8W6AU0zZZvAOWv6xa9S7aDnJq9LsWZYdTw5FexEfHF3Y0/FMcsWg3VYNqlzQX2Z4eBPutkb/Wa6Lrb9jyT8rkPz39y1tZyXS9v6+ramswpqqif2rIXrV3b9ixN5VL3hX9cCyynHJgubOpvz0uR+CKDWtOpFOo9NnRKKiBcllwTQ5fUYkqloQXc7P3tmIRJULohvQs/dwRKLSBdENkrP32Yg0xxYG0hvqZ6cjEpU5CHCknz0YkYkhQYRj/ezxiESbgoMWz/TDj0mTIw5ynOiHd6AmS5yNi6YQWTlHfyNw0OM40rsMQejfAg56HMxcEPpTgIfqjWEEHUYNm4Muo3ELd/R3Hg/6+3//AxlkAbAbEwAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/common/a11y.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/common/a11y.css.ts.vanilla.css","source":"QGxheWVyIHRoZW1lOwpAbGF5ZXIgdGhlbWUgewogIC5hMTF5X2ExMXlFcnJvcl9fcjhoZTV0MCB7CiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbl9kZWZhdWx0X18xM3I1eDdmNyk7CiAgfQogIC5hMTF5X2ExMXlFcnJvcl9fcjhoZTV0MDppcyguYTExeV9hMTF5RXJyb3JfX3I4aGU1dDA6Zm9jdXMsIC5hMTF5X2ExMXlFcnJvcl9fcjhoZTV0MDpmb2N1cy12aXNpYmxlKSwgLmExMXlfYTExeUVycm9yX19yOGhlNXQwOmZvY3VzLXdpdGhpbiB7CiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbl9kZWZhdWx0X18xM3I1eDdmNyk7CiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZm9jdXNfcmluZ19fMTNyNXg3ZmEpIDsKICB9CiAgLmExMXlfYTExeURpc2FibGVkX19yOGhlNXQxW2Rpc2FibGVkXSwgLmExMXlfYTExeURpc2FibGVkX19yOGhlNXQxW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7CiAgICBvcGFjaXR5OiAwLjU7CiAgfQogIC5hMTF5X2ExMXlEaXNhYmxlZF9fcjhoZTV0MVtkaXNhYmxlZF06aG92ZXIsIC5hMTF5X2ExMXlEaXNhYmxlZF9fcjhoZTV0MVthcmlhLWRpc2FibGVkPSd0cnVlJ106aG92ZXIgewogICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50OwogIH0KICAuYTExeV9hMTF5Rm9jdXNfX3I4aGU1dDI6Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKSB7CiAgICBvdXRsaW5lOiBub25lOwogIH0KICAuYTExeV9hMTF5Rm9jdXNfX3I4aGU1dDI6bm90KDppcyhbZGlzYWJsZWRdLCBbcmVhZG9ubHldKSk6Zm9jdXMtdmlzaWJsZSB7CiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbl9kZWZhdWx0X18xM3I1eDdmNyk7CiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZm9jdXNfcmluZ19fMTNyNXg3ZmEpIDsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/utils/get_sprinkles.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/utils/get_sprinkles.css.ts.vanilla.css","source":"#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"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						'src/styles/common/element_size.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles/common/element_size.css.ts.vanilla.css","source":"LmVsZW1lbnRfc2l6ZV9lbGVtZW50UGFkZGluZ19sZ19fMWY2enJ2NiB7CiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zcGFjZV8zX18xazlscTk2MmIpIHZhcigtLXNwYWNpbmctc3BhY2VfNl9fMWs5bHE5NjJlKTsKfQouZWxlbWVudF9zaXplX2VsZW1lbnRQYWRkaW5nX21kX18xZjZ6cnY3IHsKICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNwYWNlXzJfXzFrOWxxOTYyYSkgdmFyKC0tc3BhY2luZy1zcGFjZV80X18xazlscTk2MmMpOwp9Ci5lbGVtZW50X3NpemVfZWxlbWVudFBhZGRpbmdfc21fXzFmNnpydjggewogIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc3BhY2VfMV9fMWs5bHE5NjI5KSB2YXIoLS1zcGFjaW5nLXNwYWNlXzJfXzFrOWxxOTYyYSk7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
					__webpack_require__(
						"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
					)),
				injectStylesIntoStyleTag_default = __webpack_require__.n(
					injectStylesIntoStyleTag,
				),
				styleDomAPI = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/styleDomAPI.js",
				),
				styleDomAPI_default = __webpack_require__.n(styleDomAPI),
				insertBySelector = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/insertBySelector.js",
				),
				insertBySelector_default =
					__webpack_require__.n(insertBySelector),
				setAttributesWithoutAttributes = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
				),
				setAttributesWithoutAttributes_default = __webpack_require__.n(
					setAttributesWithoutAttributes,
				),
				insertStyleElement = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/insertStyleElement.js",
				),
				insertStyleElement_default =
					__webpack_require__.n(insertStyleElement),
				styleTagTransform = __webpack_require__(
					"./node_modules/style-loader/dist/runtime/styleTagTransform.js",
				),
				styleTagTransform_default =
					__webpack_require__.n(styleTagTransform),
				styles_css_ts_vanilla_css_source_LnN0eWxlc19zaXplX2xnX19yOG5ieTMwIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTJfXzFrOWxxOTYyaCk7Cn0KLnN0eWxlc19zaXplX21kX19yOG5ieTMxIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTBfXzFrOWxxOTYyZyk7Cn0KLnN0eWxlc19zaXplX3NtX19yOG5ieTMyIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfOF9fMWs5bHE5NjJmKTsKfQouc3R5bGVzX2dldFRhYlN0eWxlX19yOG5ieTM0OmlzKGEsYnV0dG9uLGlucHV0KTpub3QoOmlzKFtkaXNhYmxlZF0sIFthcmlhLWRpc2FibGVkPSd0cnVlJ10pKTppcyg6aG92ZXIsIDpmb2N1cy12aXNpYmxlKSB7CiAgYmFja2dyb3VuZDogdmFyKC0tdGludF9hY3RpdmVfXzEzcjV4N2ZlKTsKICBjb2xvcjogdmFyKC0tdGV4dF9oaWdoX2NvbnRyYXN0X18xM3I1eDdmYyk7Cn0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7CiAgLnN0eWxlc19nZXRUYWJTdHlsZV9fcjhuYnkzNCB7CiAgICB0cmFuc2l0aW9uOiBlYXNlIHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydF9fMWs5bHE5NjJrKSBlYXNlOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjsKICB9Cn0_node_modules_vanilla_extract_webpack_plugin_extracted =
					__webpack_require__(
						'./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/tab/styles.css.ts.vanilla.css","source":"LnN0eWxlc19zaXplX2xnX19yOG5ieTMwIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTJfXzFrOWxxOTYyaCk7Cn0KLnN0eWxlc19zaXplX21kX19yOG5ieTMxIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTBfXzFrOWxxOTYyZyk7Cn0KLnN0eWxlc19zaXplX3NtX19yOG5ieTMyIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfOF9fMWs5bHE5NjJmKTsKfQouc3R5bGVzX2dldFRhYlN0eWxlX19yOG5ieTM0OmlzKGEsYnV0dG9uLGlucHV0KTpub3QoOmlzKFtkaXNhYmxlZF0sIFthcmlhLWRpc2FibGVkPSd0cnVlJ10pKTppcyg6aG92ZXIsIDpmb2N1cy12aXNpYmxlKSB7CiAgYmFja2dyb3VuZDogdmFyKC0tdGludF9hY3RpdmVfXzEzcjV4N2ZlKTsKICBjb2xvcjogdmFyKC0tdGV4dF9oaWdoX2NvbnRyYXN0X18xM3I1eDdmYyk7Cn0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7CiAgLnN0eWxlc19nZXRUYWJTdHlsZV9fcjhuYnkzNCB7CiAgICB0cmFuc2l0aW9uOiBlYXNlIHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydF9fMWs5bHE5NjJrKSBlYXNlOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js',
					),
				options = {};
			(options.styleTagTransform = styleTagTransform_default()),
				(options.setAttributes =
					setAttributesWithoutAttributes_default()),
				(options.insert = insertBySelector_default().bind(
					null,
					"head",
				)),
				(options.domAPI = styleDomAPI_default()),
				(options.insertStyleElement = insertStyleElement_default());
			injectStylesIntoStyleTag_default()(
				styles_css_ts_vanilla_css_source_LnN0eWxlc19zaXplX2xnX19yOG5ieTMwIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTJfXzFrOWxxOTYyaCk7Cn0KLnN0eWxlc19zaXplX21kX19yOG5ieTMxIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTBfXzFrOWxxOTYyZyk7Cn0KLnN0eWxlc19zaXplX3NtX19yOG5ieTMyIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfOF9fMWs5bHE5NjJmKTsKfQouc3R5bGVzX2dldFRhYlN0eWxlX19yOG5ieTM0OmlzKGEsYnV0dG9uLGlucHV0KTpub3QoOmlzKFtkaXNhYmxlZF0sIFthcmlhLWRpc2FibGVkPSd0cnVlJ10pKTppcyg6aG92ZXIsIDpmb2N1cy12aXNpYmxlKSB7CiAgYmFja2dyb3VuZDogdmFyKC0tdGludF9hY3RpdmVfXzEzcjV4N2ZlKTsKICBjb2xvcjogdmFyKC0tdGV4dF9oaWdoX2NvbnRyYXN0X18xM3I1eDdmYyk7Cn0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7CiAgLnN0eWxlc19nZXRUYWJTdHlsZV9fcjhuYnkzNCB7CiAgICB0cmFuc2l0aW9uOiBlYXNlIHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydF9fMWs5bHE5NjJrKSBlYXNlOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjsKICB9Cn0_node_modules_vanilla_extract_webpack_plugin_extracted.Z,
				options,
			);
			styles_css_ts_vanilla_css_source_LnN0eWxlc19zaXplX2xnX19yOG5ieTMwIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTJfXzFrOWxxOTYyaCk7Cn0KLnN0eWxlc19zaXplX21kX19yOG5ieTMxIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTBfXzFrOWxxOTYyZyk7Cn0KLnN0eWxlc19zaXplX3NtX19yOG5ieTMyIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfOF9fMWs5bHE5NjJmKTsKfQouc3R5bGVzX2dldFRhYlN0eWxlX19yOG5ieTM0OmlzKGEsYnV0dG9uLGlucHV0KTpub3QoOmlzKFtkaXNhYmxlZF0sIFthcmlhLWRpc2FibGVkPSd0cnVlJ10pKTppcyg6aG92ZXIsIDpmb2N1cy12aXNpYmxlKSB7CiAgYmFja2dyb3VuZDogdmFyKC0tdGludF9hY3RpdmVfXzEzcjV4N2ZlKTsKICBjb2xvcjogdmFyKC0tdGV4dF9oaWdoX2NvbnRyYXN0X18xM3I1eDdmYyk7Cn0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7CiAgLnN0eWxlc19nZXRUYWJTdHlsZV9fcjhuYnkzNCB7CiAgICB0cmFuc2l0aW9uOiBlYXNlIHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydF9fMWs5bHE5NjJrKSBlYXNlOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjsKICB9Cn0_node_modules_vanilla_extract_webpack_plugin_extracted.Z &&
				styles_css_ts_vanilla_css_source_LnN0eWxlc19zaXplX2xnX19yOG5ieTMwIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTJfXzFrOWxxOTYyaCk7Cn0KLnN0eWxlc19zaXplX21kX19yOG5ieTMxIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTBfXzFrOWxxOTYyZyk7Cn0KLnN0eWxlc19zaXplX3NtX19yOG5ieTMyIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfOF9fMWs5bHE5NjJmKTsKfQouc3R5bGVzX2dldFRhYlN0eWxlX19yOG5ieTM0OmlzKGEsYnV0dG9uLGlucHV0KTpub3QoOmlzKFtkaXNhYmxlZF0sIFthcmlhLWRpc2FibGVkPSd0cnVlJ10pKTppcyg6aG92ZXIsIDpmb2N1cy12aXNpYmxlKSB7CiAgYmFja2dyb3VuZDogdmFyKC0tdGludF9hY3RpdmVfXzEzcjV4N2ZlKTsKICBjb2xvcjogdmFyKC0tdGV4dF9oaWdoX2NvbnRyYXN0X18xM3I1eDdmYyk7Cn0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7CiAgLnN0eWxlc19nZXRUYWJTdHlsZV9fcjhuYnkzNCB7CiAgICB0cmFuc2l0aW9uOiBlYXNlIHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydF9fMWs5bHE5NjJrKSBlYXNlOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjsKICB9Cn0_node_modules_vanilla_extract_webpack_plugin_extracted
					.Z.locals &&
				styles_css_ts_vanilla_css_source_LnN0eWxlc19zaXplX2xnX19yOG5ieTMwIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTJfXzFrOWxxOTYyaCk7Cn0KLnN0eWxlc19zaXplX21kX19yOG5ieTMxIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfMTBfXzFrOWxxOTYyZyk7Cn0KLnN0eWxlc19zaXplX3NtX19yOG5ieTMyIHsKICBoZWlnaHQ6IHZhcigtLXNwYWNpbmctc3BhY2VfOF9fMWs5bHE5NjJmKTsKfQouc3R5bGVzX2dldFRhYlN0eWxlX19yOG5ieTM0OmlzKGEsYnV0dG9uLGlucHV0KTpub3QoOmlzKFtkaXNhYmxlZF0sIFthcmlhLWRpc2FibGVkPSd0cnVlJ10pKTppcyg6aG92ZXIsIDpmb2N1cy12aXNpYmxlKSB7CiAgYmFja2dyb3VuZDogdmFyKC0tdGludF9hY3RpdmVfXzEzcjV4N2ZlKTsKICBjb2xvcjogdmFyKC0tdGV4dF9oaWdoX2NvbnRyYXN0X18xM3I1eDdmYyk7Cn0KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7CiAgLnN0eWxlc19nZXRUYWJTdHlsZV9fcjhuYnkzNCB7CiAgICB0cmFuc2l0aW9uOiBlYXNlIHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydF9fMWs5bHE5NjJrKSBlYXNlOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcjsKICB9Cn0_node_modules_vanilla_extract_webpack_plugin_extracted
					.Z.locals;
			var getTabStyle = (0,
				__webpack_require__(
					"./node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.esm.js",
				).u)({
					defaultClassName:
						"styles_getTabStyle__r8nby34 get_sprinkles_alignItems_center__eiij7b2 get_sprinkles_background_tint_active__eiij7bn get_sprinkles_borderRadius_sm__eiij7b13 get_sprinkles_color_text_low_contrast__eiij7b1p get_sprinkles_display_inline-flex_mobile__eiij7bab get_sprinkles_flexShrink_0__eiij7b22 get_sprinkles_gap_space_1_mobile__eiij7bbe get_sprinkles_textDecoration_none__eiij7b9m get_sprinkles_whiteSpace_nowrap__eiij7b9s get_sprinkles_width_max-content_mobile__eiij7bl5 a11y_a11yFocus__r8he5t2",
					variantClassNames: {
						colorOverlay: {
							amber: "color_palette_variantColorOverlay_amber__13r5x7fi",
							blue: "color_palette_variantColorOverlay_blue__13r5x7fj",
							default:
								"color_palette_variantColorOverlay_default__13r5x7fk",
							green: "color_palette_variantColorOverlay_green__13r5x7fl",
							grey: "color_palette_variantColorOverlay_grey__13r5x7fm",
							red: "color_palette_variantColorOverlay_red__13r5x7fn",
						},
						size: {
							lg: "styles_size_lg__r8nby30 get_sprinkles_fontSize_bodyLg__eiij7b26 get_sprinkles_lineHeight_bodyLg__eiij7b3l element_size_elementPadding_lg__1f6zrv6",
							md: "styles_size_md__r8nby31 get_sprinkles_fontSize_bodyMd__eiij7b27 get_sprinkles_lineHeight_bodyMd__eiij7b3m element_size_elementPadding_md__1f6zrv7",
							sm: "styles_size_sm__r8nby32 get_sprinkles_fontSize_bodySm__eiij7b28 get_sprinkles_lineHeight_bodySm__eiij7b3n element_size_elementPadding_sm__1f6zrv8",
						},
					},
					defaultVariants: { size: "md" },
					compoundVariants: [],
				}),
				jsx_runtime = __webpack_require__(
					"./node_modules/react/jsx-runtime.js",
				);
			const Tab = (0, react.forwardRef)(
				(
					{
						as,
						children,
						className: userClassName,
						colorOverlay,
						id,
						size,
						slotLeft,
						slotRight,
						...rest
					},
					ref,
				) => {
					const { atomProps, otherProps } = (0,
						dessert_box_core_esm.q)(rest, get_sprinkles_css.eD),
						Component = as || "div";
					return (0, jsx_runtime.jsx)(Component, {
						className: (0, clsx_m.Z)(
							userClassName,
							getTabStyle({ colorOverlay, size }),
							(0, get_sprinkles_css.eD)(atomProps),
							a11y_css.Y_,
						),
						id,
						ref,
						...otherProps,
						children: (0, jsx_runtime.jsx)(slot_wrapper.L, {
							color: "inherit",
							gap: "space_1",
							size,
							slotLeft,
							slotRight,
							children,
						}),
					});
				},
			);
			try {
				(Tab.displayName = "Tab"),
					(Tab.__docgenInfo = {
						description: "",
						displayName: "Tab",
						props: {
							alignItems: {
								defaultValue: null,
								description: "",
								name: "alignItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch" | "baseline"',
								},
							},
							aspectRatio: {
								defaultValue: null,
								description: "",
								name: "aspectRatio",
								required: !1,
								type: {
									name: '"square" | "extraWide" | "tall" | "wide"',
								},
							},
							background: {
								defaultValue: null,
								description: "",
								name: "background",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "transparent" | "white" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							border: {
								defaultValue: null,
								description: "",
								name: "border",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderBottom: {
								defaultValue: null,
								description: "",
								name: "borderBottom",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderLeft: {
								defaultValue: null,
								description: "",
								name: "borderLeft",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderRadius: {
								defaultValue: null,
								description: "",
								name: "borderRadius",
								required: !1,
								type: {
									name: '"50%" | "lg" | "md" | "pill" | "sm"',
								},
							},
							borderRight: {
								defaultValue: null,
								description: "",
								name: "borderRight",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							borderTop: {
								defaultValue: null,
								description: "",
								name: "borderTop",
								required: !1,
								type: {
									name: '"border_default" | "border_hover"',
								},
							},
							bottom: {
								defaultValue: null,
								description: "",
								name: "bottom",
								required: !1,
								type: { name: '"0"' },
							},
							boxShadow: {
								defaultValue: null,
								description: "",
								name: "boxShadow",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							color: {
								defaultValue: null,
								description: "",
								name: "color",
								required: !1,
								type: {
									name: '"inherit" | "background" | "black" | "white" | "currentColor" | "backdrop" | "border_active" | "border_default" | "border_hover" | "button_active" | "button_default" | "button_hover" | ... 7 more ... | "tint_hover"',
								},
							},
							flex: {
								defaultValue: null,
								description: "",
								name: "flex",
								required: !1,
								type: {
									name: '"0 1 auto" | "1 1 auto" | "1 1 0%" | "1 1 100%"',
								},
							},
							flexGrow: {
								defaultValue: null,
								description: "",
								name: "flexGrow",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexShrink: {
								defaultValue: null,
								description: "",
								name: "flexShrink",
								required: !1,
								type: { name: '"0" | "1"' },
							},
							flexWrap: {
								defaultValue: null,
								description: "",
								name: "flexWrap",
								required: !1,
								type: { name: '"wrap" | "nowrap"' },
							},
							fontSize: {
								defaultValue: null,
								description: "",
								name: "fontSize",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							fontWeight: {
								defaultValue: null,
								description: "",
								name: "fontWeight",
								required: !1,
								type: {
									name: '"bold" | "normal" | "medium" | "light" | "extrabold" | "semibold"',
								},
							},
							height: {
								defaultValue: null,
								description: "",
								name: "height",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							inset: {
								defaultValue: null,
								description: "",
								name: "inset",
								required: !1,
								type: { name: '"0"' },
							},
							isolation: {
								defaultValue: null,
								description: "",
								name: "isolation",
								required: !1,
								type: { name: '"isolate"' },
							},
							justifyContent: {
								defaultValue: null,
								description: "",
								name: "justifyContent",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "space-around" | "space-between" | "stretch"',
								},
							},
							left: {
								defaultValue: null,
								description: "",
								name: "left",
								required: !1,
								type: { name: '"0"' },
							},
							lineHeight: {
								defaultValue: null,
								description: "",
								name: "lineHeight",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							margin: {
								defaultValue: null,
								description: "",
								name: "margin",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginBottom: {
								defaultValue: null,
								description: "",
								name: "marginBottom",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginLeft: {
								defaultValue: null,
								description: "",
								name: "marginLeft",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginRight: {
								defaultValue: null,
								description: "",
								name: "marginRight",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginTop: {
								defaultValue: null,
								description: "",
								name: "marginTop",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							maxHeight: {
								defaultValue: null,
								description: "",
								name: "maxHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							maxWidth: {
								defaultValue: null,
								description: "",
								name: "maxWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							minHeight: {
								defaultValue: null,
								description: "",
								name: "minHeight",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "min-content" | "50%" | "25%" | "25vh" | "50vh" | "75%" | "75vh" | "90vh" | "100%" | "100vh" | "topBar" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | ... 7 more ... | "space_12"',
								},
							},
							minWidth: {
								defaultValue: null,
								description: "",
								name: "minWidth",
								required: !1,
								type: {
									name: '"" | "none" | "auto" | "max-content" | "min-content" | "50%" | "25%" | "100%" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | ... 19 more ... | "main_sm"',
								},
							},
							overflowX: {
								defaultValue: null,
								description: "",
								name: "overflowX",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							overflowY: {
								defaultValue: null,
								description: "",
								name: "overflowY",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							right: {
								defaultValue: null,
								description: "",
								name: "right",
								required: !1,
								type: { name: '"0"' },
							},
							textAlign: {
								defaultValue: null,
								description: "",
								name: "textAlign",
								required: !1,
								type: { name: '"right" | "left" | "center"' },
							},
							textDecoration: {
								defaultValue: null,
								description: "",
								name: "textDecoration",
								required: !1,
								type: {
									name: '"none" | "line-through" | "underline"',
								},
							},
							textTransform: {
								defaultValue: null,
								description: "",
								name: "textTransform",
								required: !1,
								type: {
									name: '"capitalize" | "lowercase" | "uppercase"',
								},
							},
							top: {
								defaultValue: null,
								description: "",
								name: "top",
								required: !1,
								type: { name: '"0"' },
							},
							whiteSpace: {
								defaultValue: null,
								description: "",
								name: "whiteSpace",
								required: !1,
								type: { name: '"normal" | "nowrap"' },
							},
							zIndex: {
								defaultValue: null,
								description: "",
								name: "zIndex",
								required: !1,
								type: { name: '"1" | "-1"' },
							},
							fontStyle: {
								defaultValue: null,
								description: "",
								name: "fontStyle",
								required: !1,
								type: {
									name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bodyLg" | "bodyMd" | "bodySm" | "root"',
								},
							},
							marginX: {
								defaultValue: null,
								description: "",
								name: "marginX",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							marginY: {
								defaultValue: null,
								description: "",
								name: "marginY",
								required: !1,
								type: {
									name: '"none" | "auto" | "space_0" | "space_0.25" | "space_0.5" | "space_1" | "space_2" | "space_3" | "space_4" | "space_5" | "space_6" | "space_8" | "space_10" | "space_12"',
								},
							},
							overflow: {
								defaultValue: null,
								description: "",
								name: "overflow",
								required: !1,
								type: {
									name: '"hidden" | "auto" | "visible" | "scroll"',
								},
							},
							placeItems: {
								defaultValue: null,
								description: "",
								name: "placeItems",
								required: !1,
								type: {
									name: '"start" | "end" | "center" | "stretch"',
								},
							},
							display: {
								defaultValue: null,
								description: "",
								name: "display",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ block: string; flex: string; grid: string; inline: string; "inline-block": string; "inline-flex": string; none: string; table: string; "table-cell": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							flexDirection: {
								defaultValue: null,
								description: "",
								name: "flexDirection",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							gap: {
								defaultValue: null,
								description: "",
								name: "gap",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							gridTemplateColumns: {
								defaultValue: null,
								description: "",
								name: "gridTemplateColumns",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ "1_2": string; "1_3": string; "1x": string; "2_1": string; "2x": string; "3_1": string; "3x": string; "4x": string; "5_7": string; "5x": string; "6x": string; "7_5": string; "7x": string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							padding: {
								defaultValue: null,
								description: "",
								name: "padding",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingBottom: {
								defaultValue: null,
								description: "",
								name: "paddingBottom",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingLeft: {
								defaultValue: null,
								description: "",
								name: "paddingLeft",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingRight: {
								defaultValue: null,
								description: "",
								name: "paddingRight",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingTop: {
								defaultValue: null,
								description: "",
								name: "paddingTop",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							position: {
								defaultValue: null,
								description: "",
								name: "position",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<("absolute" | "relative" | "static" | "sticky")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; }; }>>',
								},
							},
							width: {
								defaultValue: null,
								description: "",
								name: "width",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<{ auto: CSSVarFunction; none: CSSVarFunction; space_0: CSSVarFunction; "space_0.25": CSSVarFunction; "space_0.5": CSSVarFunction; ... 30 more ...; "min-content": CSSVarFunction; }, { ...; }>>',
								},
							},
							paddingX: {
								defaultValue: null,
								description: "",
								name: "paddingX",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							paddingY: {
								defaultValue: null,
								description: "",
								name: "paddingY",
								required: !1,
								type: {
									name: 'ConditionalStyle<Values<MapLeafNodes<{ auto: string; none: string; space_0: string; "space_0.25": string; "space_0.5": string; space_1: string; space_2: string; space_3: string; space_4: string; space_5: string; space_6: string; space_8: string; space_10: string; space_12: string; }, CSSVarFunction>, { ...; }>>',
								},
							},
							colorOverlay: {
								defaultValue: null,
								description:
									"Allows setting a color to indicate semantic meaning associated with an action. Redefines color variables via CSS custom properties.",
								name: "colorOverlay",
								required: !1,
								type: {
									name: '"blue" | "green" | "grey" | "red" | "default" | "amber"',
								},
							},
							slotLeft: {
								defaultValue: null,
								description:
									"React node(s) rendered on the left-hand side.",
								name: "slotLeft",
								required: !1,
								type: { name: "ReactNode" },
							},
							slotRight: {
								defaultValue: null,
								description:
									"React node(s) rendered on the right-hand side.",
								name: "slotRight",
								required: !1,
								type: { name: "ReactNode" },
							},
							size: {
								defaultValue: null,
								description:
									"Consistent size option shared across multiple components.",
								name: "size",
								required: !1,
								type: { name: '"lg" | "md" | "sm"' },
							},
							disabled: {
								defaultValue: null,
								description:
									"Whether the component is disabled.",
								name: "disabled",
								required: !1,
								type: { name: "boolean" },
							},
							children: {
								defaultValue: null,
								description:
									"The react node rendered in the tab.",
								name: "children",
								required: !1,
								type: { name: "ReactNode" },
							},
							id: {
								defaultValue: null,
								description: "Used as the html ID.",
								name: "id",
								required: !1,
								type: { name: "string" },
							},
							onClick: {
								defaultValue: null,
								description: "Callback on click.",
								name: "onClick",
								required: !1,
								type: {
									name: "(...args: unknown[]) => unknown",
								},
							},
							as: {
								defaultValue: null,
								description:
									"Pass an HTML tag or custom component to this prop to merge the original component props with the supplied element/component props and change the DOM node.",
								name: "as",
								required: !1,
								type: { name: "ElementType" },
							},
							ref: {
								defaultValue: null,
								description:
									"The React ref for the polymorphic component.",
								name: "ref",
								required: !1,
								type: { name: "any" },
							},
						},
					}),
					"undefined" != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							"src/components/tab/index.tsx#Tab"
						] = {
							docgenInfo: Tab.__docgenInfo,
							name: "Tab",
							path: "src/components/tab/index.tsx#Tab",
						});
			} catch (__react_docgen_typescript_loader_error) {}
		},
	},
]);

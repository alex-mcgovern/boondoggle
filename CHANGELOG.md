# Changelog

## [4.2.5](https://github.com/alex-mcgovern/boondoggle/compare/v4.2.4...v4.2.5) (2024-07-05)


### Bug Fixes

* **`Card`:** add `flex` & `align-center` to `Card.Footer` and `Card.Header` ([#138](https://github.com/alex-mcgovern/boondoggle/issues/138)) ([e557c48](https://github.com/alex-mcgovern/boondoggle/commit/e557c482c6dadea23c45f78337e6fd5f0da02259))

## [4.2.4](https://github.com/alex-mcgovern/boondoggle/compare/v4.2.3...v4.2.4) (2024-07-04)


### Bug Fixes

* **styles:** empty layers breaking nanocss ([#135](https://github.com/alex-mcgovern/boondoggle/issues/135)) ([e8d1f68](https://github.com/alex-mcgovern/boondoggle/commit/e8d1f6844433a475e165db482fb4b0b1fccd62c3))

## [4.2.3](https://github.com/alex-mcgovern/boondoggle/compare/v4.2.2...v4.2.3) (2024-07-04)


### Bug Fixes

* **`Card`:** remove junk padding-y in footer & header ([45eab38](https://github.com/alex-mcgovern/boondoggle/commit/45eab386bd5cd9603c89f77b067168c5bc0e2c84))
* **`Select`:** bug where width was constrained to width of `Select` trigger element ([0cc6709](https://github.com/alex-mcgovern/boondoggle/commit/0cc67097415b20b403580a7e95b6020b4aa92c9c))
* **styles:** fix circular `[@import](https://github.com/import)` statements ([#134](https://github.com/alex-mcgovern/boondoggle/issues/134)) ([c0830e9](https://github.com/alex-mcgovern/boondoggle/commit/c0830e98f6f10bc623728a8009d67e00251c735b))

## [4.2.2](https://github.com/alex-mcgovern/boondoggle/compare/v4.2.1...v4.2.2) (2024-07-04)


### Bug Fixes

* **`Alert`:** fix color & icon props ([6c7636b](https://github.com/alex-mcgovern/boondoggle/commit/6c7636be699c32b081a770742ea96bce02dc9162))
* **`Card`:** fix border color ([982d278](https://github.com/alex-mcgovern/boondoggle/commit/982d278ac1189672f03764b18507fb02b270a6f6))
* **`Card`:** fix height bug ([8d07249](https://github.com/alex-mcgovern/boondoggle/commit/8d07249e22827978d940155a5c90e84d8c6f6b65))
* **`Skeleton`:** make styles less opinionated ([9b0a38e](https://github.com/alex-mcgovern/boondoggle/commit/9b0a38e8307a8a4356238c91afef3a4ded913a86))

## [4.2.1](https://github.com/alex-mcgovern/boondoggle/compare/v4.2.0...v4.2.1) (2024-07-04)


### Bug Fixes

* **`Card`:** missing styles ([#127](https://github.com/alex-mcgovern/boondoggle/issues/127)) ([cf9c9bf](https://github.com/alex-mcgovern/boondoggle/commit/cf9c9bf27f16af7783fd502f2859c54424e2b143))

## [4.2.0](https://github.com/alex-mcgovern/boondoggle/compare/v4.1.0...v4.2.0) (2024-07-04)


### Features

* add `Card` component ([#125](https://github.com/alex-mcgovern/boondoggle/issues/125)) ([9db1efb](https://github.com/alex-mcgovern/boondoggle/commit/9db1efb40334823b453498a9c52a3190fad04fb9))

## [4.1.0](https://github.com/alex-mcgovern/boondoggle/compare/v4.0.3...v4.1.0) (2024-07-03)


### Features

* add `GridList` component ([#120](https://github.com/alex-mcgovern/boondoggle/issues/120)) ([08e9ecc](https://github.com/alex-mcgovern/boondoggle/commit/08e9eccad0abbb62099b8677d6d27db4f75c1b7e))
* **Button:** add `slotLeft` / `slotRight` props for icons ([#114](https://github.com/alex-mcgovern/boondoggle/issues/114)) ([fc8092f](https://github.com/alex-mcgovern/boondoggle/commit/fc8092f66b2920febb10086c3a31a12615be2f5e))
* Next.js App Router compatibility ([#118](https://github.com/alex-mcgovern/boondoggle/issues/118)) ([ccbec47](https://github.com/alex-mcgovern/boondoggle/commit/ccbec471969a8ecb8336bb2bd2dc6221cf0580f8))


### Bug Fixes

* **button:** styles ([#107](https://github.com/alex-mcgovern/boondoggle/issues/107)) ([f122a68](https://github.com/alex-mcgovern/boondoggle/commit/f122a680166a5ce60d5171d90c558ae1e8f50e5b))
* **Select:** `Checkbox` shouldn't be shown in `Select.Button` ([#119](https://github.com/alex-mcgovern/boondoggle/issues/119)) ([a3df3ce](https://github.com/alex-mcgovern/boondoggle/commit/a3df3ce0dc9541e45b1b15dca51630447239ff96))

## [4.0.3](https://github.com/alex-mcgovern/boondoggle/compare/v4.0.2...v4.0.3) (2024-07-01)


### Bug Fixes

* docs builds failing ([#104](https://github.com/alex-mcgovern/boondoggle/issues/104)) ([3c1f94d](https://github.com/alex-mcgovern/boondoggle/commit/3c1f94d24dd99008a6f8baa71133120f5e65ab90))

## [4.0.2](https://github.com/alex-mcgovern/boondoggle/compare/v4.0.1...v4.0.2) (2024-07-01)


### Bug Fixes

* `react` being bundled as peerDeps not marked as external in vite config ([#101](https://github.com/alex-mcgovern/boondoggle/issues/101)) ([abc8da3](https://github.com/alex-mcgovern/boondoggle/commit/abc8da33cff1731bd0117d68642f2ef6352e80df))

## [4.0.1](https://github.com/alex-mcgovern/boondoggle/compare/v4.0.0...v4.0.1) (2024-07-01)


### Bug Fixes

* relax version constraint on react dependency ([#99](https://github.com/alex-mcgovern/boondoggle/issues/99)) ([aaa1340](https://github.com/alex-mcgovern/boondoggle/commit/aaa1340df48ccdcafbe372359db172d5036f14e8))

## [4.0.0](https://github.com/alex-mcgovern/boondoggle/compare/v3.0.3...v4.0.0) (2024-07-01)


### ⚠ BREAKING CHANGES

* move `Popover` components into namespace ([#98](https://github.com/alex-mcgovern/boondoggle/issues/98))
* move `DropZone` components into namespace, and `FormDropZone` into `Form` namespace ([#97](https://github.com/alex-mcgovern/boondoggle/issues/97))
* move `Select` components into namespace, and `FormSelect` into `Form` namespace ([#96](https://github.com/alex-mcgovern/boondoggle/issues/96))
* move `MobileMenu` components into namespace ([#95](https://github.com/alex-mcgovern/boondoggle/issues/95))
* move SearchField components into namespace ([#94](https://github.com/alex-mcgovern/boondoggle/issues/94))
* move ComboBox components into namespace, add more tests ([#93](https://github.com/alex-mcgovern/boondoggle/issues/93))
* move `DatePicker` and components into namespace ([#87](https://github.com/alex-mcgovern/boondoggle/issues/87))
* move FormCombobox into Form namespace ([#81](https://github.com/alex-mcgovern/boondoggle/issues/81))
* rename & move `FilterMenu` sub-components into namespaces ([#78](https://github.com/alex-mcgovern/boondoggle/issues/78))

### Bug Fixes

* **FileTrigger:** move `FormFileTrigger`  into `Form` namespace ([#80](https://github.com/alex-mcgovern/boondoggle/issues/80)) ([881acc5](https://github.com/alex-mcgovern/boondoggle/commit/881acc5e7502ca9febfe5340c31641444f626a21))
* rename & move `FilterMenu` sub-components into namespaces ([#78](https://github.com/alex-mcgovern/boondoggle/issues/78)) ([376262b](https://github.com/alex-mcgovern/boondoggle/commit/376262bb4847c95b5f6e75016112f26b35a2a078))


### Code Refactoring

* move `DatePicker` and components into namespace ([#87](https://github.com/alex-mcgovern/boondoggle/issues/87)) ([14a6525](https://github.com/alex-mcgovern/boondoggle/commit/14a65255f8cfa6f9148581b24ee64e016be8bfca))
* move `DropZone` components into namespace, and `FormDropZone` into `Form` namespace ([#97](https://github.com/alex-mcgovern/boondoggle/issues/97)) ([00f4d40](https://github.com/alex-mcgovern/boondoggle/commit/00f4d404ea012ddb8b3ef54244a87a36e4d4da71))
* move `MobileMenu` components into namespace ([#95](https://github.com/alex-mcgovern/boondoggle/issues/95)) ([601de8e](https://github.com/alex-mcgovern/boondoggle/commit/601de8ecdbe92d605bf4705105ad48256cbb9f90))
* move `Popover` components into namespace ([#98](https://github.com/alex-mcgovern/boondoggle/issues/98)) ([b0cafbf](https://github.com/alex-mcgovern/boondoggle/commit/b0cafbfc58a443d96bc5821ad787f7dfa305833e))
* move `Select` components into namespace, and `FormSelect` into `Form` namespace ([#96](https://github.com/alex-mcgovern/boondoggle/issues/96)) ([a8b8514](https://github.com/alex-mcgovern/boondoggle/commit/a8b851406d4e7f855d36d3702bb413fe52334623))
* move ComboBox components into namespace, add more tests ([#93](https://github.com/alex-mcgovern/boondoggle/issues/93)) ([fd96d62](https://github.com/alex-mcgovern/boondoggle/commit/fd96d628406a86e5e038b68651d5bac04d72d8cb))
* move FormCombobox into Form namespace ([#81](https://github.com/alex-mcgovern/boondoggle/issues/81)) ([df89dff](https://github.com/alex-mcgovern/boondoggle/commit/df89dffc4c560340dd37785477292a14dffd76e9))
* move SearchField components into namespace ([#94](https://github.com/alex-mcgovern/boondoggle/issues/94)) ([a09877d](https://github.com/alex-mcgovern/boondoggle/commit/a09877d52f748b9eaedcb7570cdab8a6f1c95248))

## [3.0.3](https://github.com/alex-mcgovern/boondoggle/compare/v3.0.2...v3.0.3) (2024-06-30)


### Bug Fixes

* **form:** move `FormTextField` into form namespace ([#72](https://github.com/alex-mcgovern/boondoggle/issues/72)) ([9bdabbc](https://github.com/alex-mcgovern/boondoggle/commit/9bdabbc1ae4670d557e28e9024cfddd17a415c5f))
* **TextField:** move `TextField` sub-components into namespace ([#75](https://github.com/alex-mcgovern/boondoggle/issues/75)) ([8376333](https://github.com/alex-mcgovern/boondoggle/commit/8376333823900e8346a62b41203a90f6290e4432))

## [3.0.2](https://github.com/alex-mcgovern/boondoggle/compare/v3.0.1...v3.0.2) (2024-06-30)


### Bug Fixes

* **TextField:** move `TextField` sub-components into namespace ([#75](https://github.com/alex-mcgovern/boondoggle/issues/75)) ([8376333](https://github.com/alex-mcgovern/boondoggle/commit/8376333823900e8346a62b41203a90f6290e4432))

## [3.0.1](https://github.com/alex-mcgovern/boondoggle/compare/v3.0.0...v3.0.1) (2024-06-30)


### Bug Fixes

* **form:** move `FormTextField` into form namespace ([#72](https://github.com/alex-mcgovern/boondoggle/issues/72)) ([9bdabbc](https://github.com/alex-mcgovern/boondoggle/commit/9bdabbc1ae4670d557e28e9024cfddd17a415c5f))

## [3.0.0](https://github.com/alex-mcgovern/boondoggle/compare/v2.2.6...v3.0.0) (2024-06-29)


### ⚠ BREAKING CHANGES

* update component api (pt. 1) ([#68](https://github.com/alex-mcgovern/boondoggle/issues/68))

### Bug Fixes

* update component api (pt. 1) ([#68](https://github.com/alex-mcgovern/boondoggle/issues/68)) ([10efcc5](https://github.com/alex-mcgovern/boondoggle/commit/10efcc58350b862540badfeec64f8f3619e3ce15))

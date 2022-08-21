# Change Log

This repository adheres to semantic versioning and follows the conventions of [keepachangelog.com](http://keepachangelog.com)

## [6.1.0](https://github.com/spark-64/eslint-config/compare/v6.0.1...v6.1.0) (2022-08-21)


### Features

* Relax naming and complexity rules ([#5](https://github.com/spark-64/eslint-config/issues/5)) ([8404a51](https://github.com/spark-64/eslint-config/commit/8404a510e728b8b8983396136ceb6cfd54851422))

## [6.0.1](https://github.com/spark-64/eslint-config/compare/v6.0.0...v6.0.1) (2022-08-06)


### Bug Fixes

* Remove publishing to ghcr ([#3](https://github.com/spark-64/eslint-config/issues/3)) ([031a80b](https://github.com/spark-64/eslint-config/commit/031a80baf4b4de9513958afebaff5b9397512b0f))

## [6.0.0](https://github.com/spark-64/eslint-config/compare/v5.0.7...v6.0.0) (2022-08-02)


### ⚠ BREAKING CHANGES

* Enforce strong typescript naming conventions, move presets to configs dir (#13)
* Rename eslint-config repo, typescriptService as typescript (#11)
* Change config name from eslint-config-spoke to eslint-config-danieljimeneznz (#7)

### Features

* Change config name from eslint-config-spoke to eslint-config-danieljimeneznz ([#7](https://github.com/spark-64/eslint-config/issues/7)) ([06b3675](https://github.com/spark-64/eslint-config/commit/06b3675b8f609cc159966ec6e8035568168d4c7b))
* Enforce strong typescript naming conventions, move presets to configs dir ([#13](https://github.com/spark-64/eslint-config/issues/13)) ([078af5f](https://github.com/spark-64/eslint-config/commit/078af5faaa6e6659040547c73292041c59baad35))
* Rename eslint-config repo, typescriptService as typescript ([#11](https://github.com/spark-64/eslint-config/issues/11)) ([944edb6](https://github.com/spark-64/eslint-config/commit/944edb61acd3a04c4433596df7477331d57138c2))


### Bug Fixes

* Add missing `format` from [@typescript-eslint](https://github.com/typescript-eslint) rules ([#21](https://github.com/spark-64/eslint-config/issues/21)) ([780be0f](https://github.com/spark-64/eslint-config/commit/780be0f2876cd8350b25cf4a08504fdceb104dec))
* Add release-please for version management, publish to npmjs ([#3](https://github.com/spark-64/eslint-config/issues/3)) ([40fec4e](https://github.com/spark-64/eslint-config/commit/40fec4ef78ef74281f764223de959454f990a5b7))
* Allow destructured variables to be snake case, closes [#28](https://github.com/spark-64/eslint-config/issues/28) ([#29](https://github.com/spark-64/eslint-config/issues/29)) ([f748b96](https://github.com/spark-64/eslint-config/commit/f748b96dc17d6e17109cee8963ce57c2bba36920))
* Allow leadingUnderscore for const variable names ([#23](https://github.com/spark-64/eslint-config/issues/23)) ([62bc3be](https://github.com/spark-64/eslint-config/commit/62bc3be5e344a3dcae2ca1e275a2248bffaa6ceb))
* Incorrect typescript rules, add curly eslint rule ([#15](https://github.com/spark-64/eslint-config/issues/15)) ([7cc8c9f](https://github.com/spark-64/eslint-config/commit/7cc8c9f69286557ce98eb5b7fe81104b805734e0))
* Move most peerDeps into deps as these are required ([#26](https://github.com/spark-64/eslint-config/issues/26)) ([4da1cca](https://github.com/spark-64/eslint-config/commit/4da1cca46b80453ecd62c71ecd177ccf9731127b))
* Move prefer-arrow/import plugins from extends to plugin ([#9](https://github.com/spark-64/eslint-config/issues/9)) ([812687d](https://github.com/spark-64/eslint-config/commit/812687db7e4b166c3d466bd8df066f1802b14ece))
* Removed extreneous max-len `ignorePattern` ([#17](https://github.com/spark-64/eslint-config/issues/17)) ([11d56fc](https://github.com/spark-64/eslint-config/commit/11d56fc02f86b0ead3e6d89fb178cf1290c6bfb6))
* Space after `strictCamelCase` ([#19](https://github.com/spark-64/eslint-config/issues/19)) ([64d995a](https://github.com/spark-64/eslint-config/commit/64d995a8b793805a65212e81103a36f8f167d991))

## [5.0.7](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.6...v5.0.7) (2022-07-02)


### Bug Fixes

* Allow destructured variables to be snake case, closes [#28](https://github.com/danieljimeneznz/eslint-config/issues/28) ([#29](https://github.com/danieljimeneznz/eslint-config/issues/29)) ([f748b96](https://github.com/danieljimeneznz/eslint-config/commit/f748b96dc17d6e17109cee8963ce57c2bba36920))

## [5.0.6](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.5...v5.0.6) (2022-06-21)


### Bug Fixes

* Move most peerDeps into deps as these are required ([#26](https://github.com/danieljimeneznz/eslint-config/issues/26)) ([4da1cca](https://github.com/danieljimeneznz/eslint-config/commit/4da1cca46b80453ecd62c71ecd177ccf9731127b))

## [5.0.5](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.4...v5.0.5) (2022-06-18)


### Bug Fixes

* Allow leadingUnderscore for const variable names ([#23](https://github.com/danieljimeneznz/eslint-config/issues/23)) ([62bc3be](https://github.com/danieljimeneznz/eslint-config/commit/62bc3be5e344a3dcae2ca1e275a2248bffaa6ceb))

## [5.0.4](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.3...v5.0.4) (2022-06-18)


### Bug Fixes

* Add missing `format` from [@typescript-eslint](https://github.com/typescript-eslint) rules ([#21](https://github.com/danieljimeneznz/eslint-config/issues/21)) ([780be0f](https://github.com/danieljimeneznz/eslint-config/commit/780be0f2876cd8350b25cf4a08504fdceb104dec))

## [5.0.3](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.2...v5.0.3) (2022-06-18)


### Bug Fixes

* Space after `strictCamelCase` ([#19](https://github.com/danieljimeneznz/eslint-config/issues/19)) ([64d995a](https://github.com/danieljimeneznz/eslint-config/commit/64d995a8b793805a65212e81103a36f8f167d991))

## [5.0.2](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.1...v5.0.2) (2022-06-18)


### Bug Fixes

* Removed extreneous max-len `ignorePattern` ([#17](https://github.com/danieljimeneznz/eslint-config/issues/17)) ([11d56fc](https://github.com/danieljimeneznz/eslint-config/commit/11d56fc02f86b0ead3e6d89fb178cf1290c6bfb6))

## [5.0.1](https://github.com/danieljimeneznz/eslint-config/compare/v5.0.0...v5.0.1) (2022-06-18)


### Bug Fixes

* Incorrect typescript rules, add curly eslint rule ([#15](https://github.com/danieljimeneznz/eslint-config/issues/15)) ([7cc8c9f](https://github.com/danieljimeneznz/eslint-config/commit/7cc8c9f69286557ce98eb5b7fe81104b805734e0))

## [5.0.0](https://github.com/danieljimeneznz/eslint-config/compare/v4.0.0...v5.0.0) (2022-06-18)


### ⚠ BREAKING CHANGES

* Enforce strong typescript naming conventions, move presets to configs dir (#13)

### Features

* Enforce strong typescript naming conventions, move presets to configs dir ([#13](https://github.com/danieljimeneznz/eslint-config/issues/13)) ([078af5f](https://github.com/danieljimeneznz/eslint-config/commit/078af5faaa6e6659040547c73292041c59baad35))

## [4.0.0](https://github.com/danieljimeneznz/eslint-config/compare/v3.0.1...v4.0.0) (2022-06-16)


### ⚠ BREAKING CHANGES

* Rename eslint-config repo, typescriptService as typescript (#11)

### Features

* Rename eslint-config repo, typescriptService as typescript ([#11](https://github.com/danieljimeneznz/eslint-config/issues/11)) ([944edb6](https://github.com/danieljimeneznz/eslint-config/commit/944edb61acd3a04c4433596df7477331d57138c2))

### [3.0.1](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v3.0.0...v3.0.1) (2022-05-22)


### Bug Fixes

* Move prefer-arrow/import plugins from extends to plugin ([#9](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/issues/9)) ([812687d](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/commit/812687db7e4b166c3d466bd8df066f1802b14ece))

## [3.0.0](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v2.0.1...v3.0.0) (2022-05-22)


### ⚠ BREAKING CHANGES

* Change config name from eslint-config-spoke to eslint-config-danieljimeneznz (#7)

### Features

* Change config name from eslint-config-spoke to eslint-config-danieljimeneznz ([#7](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/issues/7)) ([06b3675](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/commit/06b3675b8f609cc159966ec6e8035568168d4c7b))

### [2.0.1](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v2.0.0...v2.0.1) (2022-05-22)

### Bug Fixes

- Add release-please for version management, publish to npmjs ([#3](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/issues/3)) ([40fec4e](https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/commit/40fec4ef78ef74281f764223de959454f990a5b7))

## [2.0.0] - 2021-10-16

### Changed

- Upgrade deps
  - eslint ^7.32.0 → ^8.0.1
  - @typescript-eslint/parser ^4.31.1 → ^5.0.0
  - @typescript-eslint/eslint-plugin ^4.31.1 → ^5.0.0

## [1.0.1] - 2021-09-18

### Changed

- Move to `main` branch naming
- Upgrade deps
  - eslint ^7.29.0 → ^7.32.0
  - @typescript-eslint/parser ^4.28.1 → ^4.31.1
  - @typescript-eslint/eslint-plugin ^4.28.1 → ^4.31.1

## [1.0.0] - 2021-06-28

### Changed

- Allow "compatible with version" peer dependencies
- Upgrade deps
  - @typescript-eslint/parser 4.27.0 → 4.28.1
  - @typescript-eslint/eslint-plugin 4.27.0 → 4.28.1

### Removed

- `babel` & `flow` configs as these are unused

## [0.5.0] - 2021-06-18

### Changed

- Upgrade deps
  - eslint 6.8.0 → 7.29.0
  - eslint-plugin-flowtype 4.5.3 → 5.7.2
  - @typescript-eslint/parser 2.14.0 → 4.27.0
  - @typescript-eslint/eslint-plugin 2.14.0 → 4.27.0
- Moved package from building using circleci/npmjs to github packages

### Removed

- `@typescript-eslint/class-name-casing` eslint rule

## [0.4.0] - 2020-10-03

### Added

- ESLint rules. These can be automatically fixed.
  - `brace-style` for if-else try-catch etc
  - `array-bracket-spacing`
  - `space-before-blocks`
  - `space-before-function-paren`
  - `comma-dangle` to enforce dangling commas or multi-line items in objects

## [0.3.0] - 2020-07-24

### Removed

- Dependency on tslint
  - Only the tslint `one-line` rule is not covered by configured eslint defaults.

## [0.2.0] - 2020-07-16

### Added

- `node` Preset

## 0.1.0 - 2020-01-06

### Added

- `babel`, `common`, `flow`, `mocha`, `node` and `typecript` Configs
- `common`, `flowService` and `typescriptService` Presets

[unreleased]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.5.0...v1.0.0
[0.5.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/danieljimeneznz/eslint-config-danieljimeneznz/compare/v0.1.0...v0.2.0

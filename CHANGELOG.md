# Change Log

This repository adheres to semantic versioning and follows the conventions of [keepachangelog.com](http://keepachangelog.com)

## [Unreleased]

## [0.5.0] - 2021-06-18
### Changed
- Upgrade deps
  - eslint                             6.8.0  →  7.29.0
  - eslint-plugin-flowtype             4.5.3  →   5.7.2
  - @typescript-eslint/parser         2.14.0  →  4.27.0
  - @typescript-eslint/eslint-plugin  2.14.0  →  4.27.0
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

[Unreleased]: https://github.com/danieljimeneznz/eslint-config-spoke/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/danieljimeneznz/eslint-config-spoke/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/danieljimeneznz/eslint-config-spoke/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/danieljimeneznz/eslint-config-spoke/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/danieljimeneznz/eslint-config-spoke/compare/v0.1.0...v0.2.0

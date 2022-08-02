# Spark 64's Eslint Config

This package provides Spark 64's .eslintrc.yaml as an extensible [shared config](https://eslint.org/docs/developer-guide/shareable-configs) :sparkles:

## Install and Setup

Install the library using:

```sh
npm i -D eslint @elementx-ai/eslint-config
```

## Usage

Create a `.eslintrc.yaml` file in the root of the repo you are working on and extend the preset/config you wish to use

e.g. using the `typescript` linting rules (additional rules can be added to this `extends` list)

```yaml
extends:
  - "@elementx-ai/eslint-config/configs/typescript"
```

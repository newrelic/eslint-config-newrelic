### v0.8.0 (2026-06-08)

#### Miscellaneous chores

* Removed `repolinter` as it is no longer necessary, assigned necessary permissions to remaining workflows ([#47](https://github.com/newrelic/eslint-config-newrelic/pull/47)) ([9cc8c80](https://github.com/newrelic/eslint-config-newrelic/commit/9cc8c80ffd225faf1facd76d186706f97fdca4d0))
* Updated dependencies to latest allowable versions ([#49](https://github.com/newrelic/eslint-config-newrelic/pull/49)) ([7757587](https://github.com/newrelic/eslint-config-newrelic/commit/7757587ffe9e0f72504f17ef931479f93730ddc0))

#### Continuous integration

* Added appropriate permissions to `prepare-release.yml` ([#48](https://github.com/newrelic/eslint-config-newrelic/pull/48)) ([d3ca1e8](https://github.com/newrelic/eslint-config-newrelic/commit/d3ca1e8ac8661418b6d8b9b984269d1bc8d0fca8))

### v0.7.0 (2026-02-11)

#### Miscellaneous chores

* Added accessor-pairs rule ([#43](https://github.com/newrelic/eslint-config-newrelic/pull/43)) ([50de65a](https://github.com/newrelic/eslint-config-newrelic/commit/50de65a4c5f48855268db54c939ff53b97b0fb30))
* Update release workflow ([#42](https://github.com/newrelic/eslint-config-newrelic/pull/42)) ([2d867ff](https://github.com/newrelic/eslint-config-newrelic/commit/2d867ff58f4fc5dbe5033da0b7cdedcec40bb0c4))

### v0.6.0 (2025-08-12)

#### Miscellaneous chores

* Updated config ([#40](https://github.com/newrelic/eslint-config-newrelic/pull/40)) ([6e31965](https://github.com/newrelic/eslint-config-newrelic/commit/6e319656c6818461ca24ad57a3b564fcdbb1e28f))

### v0.5.0 (2025-01-08)

#### Features

* Migrated to eslint@9 ([#37](https://github.com/newrelic/eslint-config-newrelic/pull/37)) ([f40248f](https://github.com/newrelic/eslint-config-newrelic/commit/f40248f8101db759449c1f137b56a02870f30012))

#### Miscellaneous chores

* Removed lockfile and added .npmrc ([#34](https://github.com/newrelic/eslint-config-newrelic/pull/34)) ([c578002](https://github.com/newrelic/eslint-config-newrelic/commit/c5780025fff0c92d6d9012e6132e84fb42ad2459))

#### Continuous integration

* Removed `use_new_release` input from prepare release workflow ([#27](https://github.com/newrelic/eslint-config-newrelic/pull/27)) ([115ac47](https://github.com/newrelic/eslint-config-newrelic/commit/115ac47ec5cd69655c9a7b3dcf63f91f79952ba4))
* Updated CI process for releases ([#26](https://github.com/newrelic/eslint-config-newrelic/pull/26)) ([861d983](https://github.com/newrelic/eslint-config-newrelic/commit/861d983c74639af88a4f738abe24d73d959f1ca8))

### v0.4.0 (2024-01-02)

* Set new baseline ECMAScript version
* Update dependencies
* Bumps [semver](https://github.com/npm/node-semver) from 6.3.0 to 6.3.1.
* Bumps [word-wrap](https://github.com/jonschlinkert/word-wrap) from 1.2.3 to 1.2.5.
* Updated README links to point to new forum link due to repolinter ruleset change
* Update README header image to latest OSS office required images

### v0.3.0 (2023-02-07)

* Added [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) recommended ruleset.

### v0.2.0 (2022-10-04)

* Updated eslint to 8.x.

### v0.1.0 (2022-09-19)

* Added overrides to disable the ESM rules of no unpublished or extraneous import.

### v0.0.4 (2022-01-05)

* Added workflow to automatically add issues/Prs to Node.js Engineering Board

* Added CHANGELOG.md to track this file, so meta.

* Added workflow to automatically prepare releases.

### v0.0.3 (2021-09-09):

 * Added prefer-const and no-var rules

### v0.0.2 (2021-08-17):

 * Initial release of shared eslint rules for the Node.js Agent Team

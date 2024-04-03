# Contributing

Contributions are always welcome. Before contributing please read the
[code of conduct](https://github.com/newrelic/.github/blob/main/CODE_OF_CONDUCT.md) and [search the issue tracker](issues); your issue may have already been discussed or fixed in `main`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) this repository, commit your changes, and [send a Pull Request](https://help.github.com/articles/using-pull-requests/).

Note that our [code of conduct](https://github.com/newrelic/.github/blob/main/CODE_OF_CONDUCT.md) applies to all platforms and venues related to this project; please follow it in all your interactions with the project and its participants.

## Feature Requests

Feature requests should be submitted in the [Issue tracker](../../issues), with a description of the expected behavior & use case, where they’ll remain closed until sufficient interest, [e.g. :+1: reactions](https://help.github.com/articles/about-discussions-in-issues-and-pull-requests/), has been [shown by the community](../../issues?q=label%3A%22votes+needed%22+sort%3Areactions-%2B1-desc).
Before submitting an Issue, please search for similar ones in the
[closed issues](../../issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Pull Requests

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
3. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to format commit messages for this repository. Conventional Commits provide a standardized format for commit messages that allows for automatic generation of changelogs and easy tracking of changes.

When contributing to this repository, please ensure that your commit messages adhere to the Conventional Commit guidelines. Specifically, your commit messages should:

* Start with a type, indicating the kind of change being made (e.g. `feat` for a new feature, `fix` for a bugfix, etc.). The types we support are:
  * `build`: changes that affect the build system or external dependencies
  * `chore`: changes that do not modify source or test files
  * `ci`: changes to our CI configuration files and scripts
  * `docs`: documentation additions or updates
  * `feat`: new features or capabilities added to the agent
  * `fix`: bugfixes or corrections to existing functionality
  * `perf`: performance improvements
  * `refactor`: changes that do not add new feature or fix bugs, but improve code structure or readability
  * `revert`: revert a previous commit
  * `security`: changes related to the security of the agent, including the updating of dependencies due to CVE
  * `style` - changes that do not affect the meaning of the code (e.g. formatting, white-space, etc.)
  * `test` - adding new tests or modifying existing tests
* Use the imperative, present tense (e.g. "add feature" instead of "added feature")
* Optionally, include a scope in parantheses after the type to indicate which part of the repository is affected (e.g. `feat(instrumentation): add support for Prisma Client`)

Please note that we use the [Squash and Merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-commits) method when merging Pull Requests into the main branch. We do not use the original commit messages from each individual commit. Instead, we use the Pull Request title as the commit message for the squashed commit, and as such, require that the Pull Request title adheres to our Conventional Commit standards. Any additional documentation or information relevant to the release notes should be added to the "optional extended description" section of the squash commit on merge.

## Contributor License Agreement

Keep in mind that when you submit your Pull Request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource@newrelic.com.

For more information about CLAs, please check out Alex Russell’s excellent post,
[“Why Do I Need to Sign This?”](https://infrequently.org/2008/06/why-do-i-need-to-sign-this/).

## Slack

We host a public Slack with a dedicated channel for contributors and maintainers of open source projects hosted by New Relic.  If you are contributing to this project, you're welcome to request access to the #oss-contributors channel in the newrelicusers.slack.com workspace.  To request access, see https://newrelicusers-signup.herokuapp.com/.

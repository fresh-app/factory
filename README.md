# Fresh App Factory

**[Fresh App Factory](https://fresh-app.github.io/)** automatically generates template repositories from popular open-source app frameworks.

[![](https://github.com/dtinth/timelapse/raw/master/projects/fresh-app-factory_home.png)](https://fresh-app.github.io)

## Why?

This project aims to make it easier for developers to get started with new app frameworks. To understand how, let’s compare the different approaches:

<!-- prettier-ignore-start -->

| Approach | Pros and cons |
| ----- | ----- |
| **Manually-maintained repos** | <ul><li>➕ Can easily create a new repo by clicking on “Use this template” button.<li>➕ Can easily be used with tools like [Codesandbox][], [Gitpod][], or [Stackblitz][].<li>➖ Can easily become out-of-date<li>➖ Maintainers may forgot to mark repository as a template repository.</ul> |
| **Folder in monorepo** | <ul><li>➕ Easier for maintainers to keep up-to-date.<li>➕ Can easily be used with tools like [Codesandbox][], [Gitpod][], or [Stackblitz][].<li>➖ Cannot use the “Use this template” button.<li>➖ Requires an extra step to copy a subdirectory into a new repo.</ul> |
| **Generator CLIs** | <ul><li>➕ Can support a lot of combinations.<li>➕ Gives you an up-to-date app.<li>➖ Requires installing an extra CLI tool, whose installation process may be slow.<li>➖ Cannot easily use with [Codesandbox][], [Gitpod][], or [Stackblitz][].<li>➖ Cannot use the “Use this template” button.</ul> |
| **Fresh App Factory** | <ul><li>➕ Up-to-date as the templates are generated from generator CLIs daily.<li>➕ Can easily create a new repo by clicking on “Use this template” button.<li>➕ Can easily be used with tools like [Codesandbox][], [Gitpod][], or [Stackblitz][].<li>➖ Supports only a few configurations.</ul> |

<!-- prettier-ignore-end -->

[codesandbox]: https://codesandbox.io/
[gitpod]: https://www.gitpod.io/
[stackblitz]: https://stackblitz.com/

For more information, check out the [project documention page](https://docs.dt.in.th/fresh-app-factory/index.html).

[![Project documention page](https://ss.dt.in.th/api/screenshots/docs-fresh-app-factory__index.png)](https://docs.dt.in.th/fresh-app-factory/index.html)

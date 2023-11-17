# Uniplore Doc Website

[中文文档](README-zh_cn.md)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Run Locale Mode

```
$ yarn start -- --locale zh-cn 
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

**Using SSH:**
* Linux Or MacOS Bash:
```bash
$ USE_SSH=true yarn deploy
```

* Windows:
```bash
cmd /C "set "USE_SSH=true" && yarn deploy"
```

* PowerShell:
```bash
cmd /C 'set "USE_SSH=true" && yarn deploy'
```

**Using Username:**
* Linux Or MacOS Bash:
```bash
$ GIT_USER=<GITHUB_USERNAME> yarn deploy
```

* Windows:
```bash
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

* PowerShell:
```bash
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```



If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Initialize the i18n folder

[i18n folder doc](https://docusaurus.io/docs/i18n/git)

For example:
```bash
 $ yarn write-translations -- --locale zh-cn
 ```
 or
 ```bash
 yarn write-translations -- --locale en
 ```

 ### i18n for react code

Simple use

Before
```react
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to my website</h1>
      <main>
        You can also visit my
        <Link to="https://docusaurus.io/blog">blog</Link>
        <img
          src="/img/home.png"
          >
      </main>
    </Layout>
  );
}
```

After
```react
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout>
      <h1>
        <Translate>Welcome to my website</Translate>
      </h1>
      <main>
        <Translate
          id="homepage.visitMyBlog"
          description="The homepage message to ask the user to visit my blog"
          values={{
            blogLink: (
 <Link to="https://docusaurus.io/blog">
                <Translate
                  id="homepage.visitMyBlog.linkLabel"
                  description="The label for the link to my blog">
                  blog
                </Translate>
              </Link>
            ),
          }}>
          {'You can also visit my {blogLink}'}
        </Translate>

        <img
          src="/img/home.png"
          alt={
            >
      </main>
    </Layout>
  );
}
```

More complex use [React-intl](https://www.jianshu.com/p/3b404d131634) for more advanced use-cases.

### mutiple version docs

> create version 1.1.0 with this command line

```bash
$ yarn docusaurus docs:version 1.1.0
```

### build error
If page url(route) is not exists, build error.

### More Docs

更多关于docusaurus的文档，[点击](https://docusaurus.io/docs)


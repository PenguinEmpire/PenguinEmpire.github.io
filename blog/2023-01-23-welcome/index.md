---
slug: welcome
title: Welcome
authors: [slorber, yangshun, hirechrisf]
tags: [facebook, hello, docusaurus]
---

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

<!--truncate-->

Simply add Markdown files (or folders) to the `blog` directory.

:::tip
Regular blog authors can be added to `authors.yml`.
:::

:::tip
The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`
:::

:::tip
A blog post folder can be convenient to co-locate blog post images:

![Penguin Coding](./penguin_admin.jpg)
:::

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.

<button onClick={() => alert('button clicked!')}>Click me!</button>
---
sidebar_position: 5
---

# Deploy your site

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

## Build and deploy your site locally

### Build your site locally

```bash
npm run build
```

The static files are generated in the `build` folder.

### Deploy your site locally

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).

## Build and deploy your site to Github Pages
We use [Github Actions](https://github.com/PenguinEmpire/PenguinEmpire.github.io/actions) to build and deploy the production version of our site to: [https://github.com/PenguinEmpire/PenguinEmpire.github.io/](https://github.com/PenguinEmpire/PenguinEmpire.github.io/)
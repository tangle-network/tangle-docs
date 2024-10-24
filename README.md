<div align="center">
  <a href="https://www.tangle.tools/">
    <img src="https://github.com/tangle-network/tangle-docs/assets/38070512/12b7b949-89be-4c9d-9be1-2115d2ea15a2" alt="image" />
  </a>
</div>

<p align="left">
    <strong>🚀 Official Documentation of the Tangle Network 🚀 </strong>
</p>

<!-- Badges -->

<!-- Description -->

❗ **Note:** This is a fork of [Vercel Docs](https://github.com/vercel/turbo/tree/main/docs).

This repository serves as the **documentation** for the **[Tangle Network](https://www.tangle.tools/)** . The docs are written in [MDX](https://mdxjs.com/) format an extension of [markdown](https://www.markdownguide.org/), processed by [Nextra](https://github.com/shuding/nextra/tree/main), and published to Webb Docs. For support on using Nextra see [https://nextra.site/docs].(https://nextra.site/docs)

### Directory structure

| Folder     | Description                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| components | Dedicated directory for documentation related ui-components to be imported into mdx pages. |
| images     | Dedicated directory for documentation related assets.                                      |
| pages      | Dedicated directory for documentation content.                                             |

### Updating or Adding Content

For updating or adding content to the docs site, builders simply need to follow the below instructions. Please note,
if image assets are added to a given section you must provide both a dark and light version of the image.

**Updating existing content**

1. Navigate to the desired page to update (e.g. `/pages/overview.mdx`)
2. Make applicable changes
3. Test those changes locally `yarn install && yarn dev`

**Adding content for existing section**

1. Navigate to the desired documentation section (e.g. `/pages/overview.mdx/`)
2. Create a new mdx file that represents new page for desired section (e.g. `advanced.mdx`)
3. Write desired content for the new mdx file
4. Update the `_meta.json` file within the section directory to include your new page into the navigation
5. Test those changes locally `yarn install && yarn dev`. We request that you also run Prettier.

**Note:** To create a section with dropdown navigation, simply create a folder and specify the new navigation in `_meta.json`, create new your new files in the new directory along with its own `_meta.json` to outline the desired
navigation.

## 🚀 Quick start

1.  **Clone the repo**

    ```bash
    # create a new folder to get going
    git clone https://github.com/tangle-network/tangle-docs.git
    ```

2.  **Install dependencies**

    Navigate into your new site's directory and install all dependencies.

    ```bash
    cd tangle-docs/
    yarn install
    ```

3.  **Fire the engine**

    Navigate into your new site's directory and use the following command to start the development server locally.

    ```bash
    yarn dev # alias for `yarn start` and `yarn develop`
    ```

4.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:3000/`.

    Edit to see your site update in real-time on save.

5.  **Learn more about Nextra, Next, and nextra-theme-docs**

    - [Documentation](https://nextra.site/docs)
    - [Themes](https://nextra.site/docs/docs-theme)
    - [Guides](https://nextra.site/docs/guide)

<h2 id="contribute"> Contributing </h2>

Interested in contributing to the Webb Documentation? Thank you so much for your interest! We are always appreciative for contributions from the open-source community!

If you have a contribution in mind, please check out our [Contribution Guide](./.github/CONTRIBUTING.md) for information on how to do so. We are excited for your first contribution! If you have any further questions, please do not hesitate to reach out on our [Webb Discord channel](https://discord.com/invite/cv8EfJu3Tn)! We would love to get to know you and your work!

<h2 id="license"> License </h2>

Licensed under <a href="LICENSE">MPL-2.0</a>.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this crate by you, as defined in the MPL-2.0 license, shall be licensed as above, without any additional terms or conditions.

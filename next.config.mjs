const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-gfm")],
    rehypePlugins: [require("rehype-autolink-headings"), require("rehype-slug")],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
        },
      ],
    });

    return config;
  },
});

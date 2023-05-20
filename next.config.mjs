const remarkGfm = require('remark-gfm');
const withPlugins = require('next-compose-plugins');
const withMdx = require('next-mdx-enhanced');

module.exports = withPlugins([
  withMdx({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
    },
  }),
], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
});

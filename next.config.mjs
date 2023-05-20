import remarkGfm from 'remark-gfm';
import { withPlugins } from 'next-compose-plugins';
import withMdx from 'next-mdx-enhanced';

export default withPlugins(
  [
    withMdx({
      extension: /\.mdx?$/,
      options: {
        remarkPlugins: [remarkGfm],
      },
    }),
  ],
  {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
  }
);

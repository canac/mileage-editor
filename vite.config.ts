/* eslint-disable import/no-extraneous-dependencies */

import vue from '@vitejs/plugin-vue';
import { ConfigEnv, UserConfigExport, defineConfig, loadEnv } from 'vite';
import { injectHtml } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  // Load the environment variables manually because Vite doesn't load them automatically
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      injectHtml({
        injectData: {
          graphqlApiOrigin: new URL(env.VITE_GRAPHQL_ENDPOINT).origin,
        },
      }),
    ],
  });
};

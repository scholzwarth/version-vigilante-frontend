import { defineConfig , loadEnv } from 'vite'
import plugin from '@vitejs/plugin-react';
import * as process from 'process';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const target = env.VITE_TARGET;


  return defineConfig({
    plugins: [plugin()],
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        map: '/src/features/map',
        hooks: '/src/lib/hooks',
      },
    },
    server: {
      port: env.VITE_PORT || 3000,
      // host: 'localhost',
      proxy: {
        '/api': {
          target: target,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
  })
}
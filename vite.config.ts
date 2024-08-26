import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true }, include: '**/*.svg' }), tsconfigPaths()],
  server: {
    proxy: {
      '/users': {
        target: 'http://springboot-developer-env.eba-tb7bgpjh.ap-northeast-2.elasticbeanstalk.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, ''),
        secure: false,
      },
    },
  },
});

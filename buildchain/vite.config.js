import ViteRestart from 'vite-plugin-restart';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        app: '/src/js/app.ts',
        CampaignEdit: '/src/js/CampaignEdit.js',
        reports: '/src/js/reports.ts',
        SegmentEdit: '/src/js/SegmentEdit.js',
        SegmentIndex: '/src/js/SegmentIndex.js',
        SendOutIndex: '/src/js/SendOutIndex.js',
        universal: '/src/js/universal.ts',
      },
      output: {
        sourcemap: true
      },
    }
  },
  plugins: [
    ViteRestart({
      reload: [
          '../src/templates/**/*',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('/src/'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: true,
  }
});

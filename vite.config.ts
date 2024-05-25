import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// import viteCompression from 'vite-plugin-compression'
import htmlMinimize from '@sergeymakinen/vite-plugin-html-minimize'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 监听所有地址（包括局域网与公网），方便内网调试
    host: '0.0.0.0',
  },
  base: './',
  plugins: [
    htmlMinimize({
      minifierOptions: {
        collapseWhitespace: true,
        html5: true,
        keepClosingSlash: false,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'es2022',
    reportCompressedSize: true, // 是否使用vite自带的方式打印压缩后的大小
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash:22].js`,
        chunkFileNames: `assets/[name].[hash:22].js`,
        assetFileNames: `assets/[name].[hash:22].[ext]`,
      }
    },
    modulePreload: {
      polyfill: false,
    },
    chunkSizeWarningLimit: Infinity,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  }
})

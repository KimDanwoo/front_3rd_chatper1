import { defineConfig as defineTestConfig, mergeConfig } from 'vitest/config'
import { defineConfig } from 'vite'
import path from 'path'

export default mergeConfig(
  defineConfig({
    esbuild: {
      jsxFactory: 'createVNode',
    },
    optimizeDeps: {
      esbuildOptions: {
        jsx: 'transform',
        jsxFactory: 'createVNode',
      },
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@storages': path.resolve(__dirname, './src/storages'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@errors': path.resolve(__dirname, './src/errors'),
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
    },
  })
)

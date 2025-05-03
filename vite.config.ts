/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,    // 允许使用 describe / it / expect 等全局函数
    environment: 'node'
  }
})

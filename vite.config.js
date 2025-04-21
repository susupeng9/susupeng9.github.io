import { defineConfig } from 'vite';  
import vue from '@vitejs/plugin-vue';  
import path from 'path';  

export default defineConfig({  
  plugins: [vue()],  
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, './src') // 补充 __dirname 参数  
    }  
  },
  base: '/' // 添加或确认此配置  
});  
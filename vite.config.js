import { defineConfig } from 'vite';  
import vue from '@vitejs/plugin-vue';  
import path from 'path';  

export default defineConfig({  
  plugins: [vue()],  
  base: '/', // 修改为根路径
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, './src') // 补充 __dirname 参数  
    }  
  } , 
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
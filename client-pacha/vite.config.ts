import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import chalk from 'chalk';
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'simplify-hmr-logs',
    configureServer(server) {
      const originalLog = server.config.logger.info;
      server.config.logger.info = (msg) => {
        if (msg.includes('hmr update')) {
          originalLog.call(server.config.logger, `${new Date().toLocaleTimeString()} ${chalk.cyan("[vite]")} ${chalk.green("hmr update")} All Files & Folders.`);
        } else {
          originalLog.call(server.config.logger, msg);
        }
      };
    },
  },],
  resolve: {
    alias: {
      //* scss config:
      '@index': path.resolve(__dirname, 'src/_configs/styles/sass/index.scss'),
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/application"),
      "@configs": path.resolve(__dirname, "./src/_configs"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@index" as index;`,
        api: 'modern-compiler' // or "modern"
      }
    }
  }
});
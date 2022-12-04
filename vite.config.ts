import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@com": resolve(__dirname, "./src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        autoprefixer,
        postcssPxtorem({
          rootValue({ file }) {
            return 37.5
            // return file.indexOf("vant/lib") !== -1 ? 37.5 : 75;
          },
          propList: ["*"],
        }),
      ],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    // Components({
    //   resolvers: [VantResolver()],
    // }),
  ],
});

import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { babel } from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      // "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
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
            return 37.5;
            // return file.indexOf("vant/lib") !== -1 ? 37.5 : 75;
          },
          propList: ["*"],
        }),
      ],
    },
  },
  plugins: [
    babel({
      plugins: [
        [
          "@babel/plugin-transform-react-jsx",
          {
            runtime: "automatic",
            importSource: "@antv/f2",
          },
        ],
      ],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    vue(),
    vueJsx(),
    vueI18n({
      runtimeOnly: false,
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://10.8.0.2:8202/",
        changeOrigin: true,
      },
    },
  },
});

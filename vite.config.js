import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "/",
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "/index.html"),
        about: resolve(__dirname, "/pages/about/index.html"),
        contact: resolve(__dirname, "/pages/contact/index.html"),
        subscription: resolve(__dirname, "/pages/subscription/index.html"),
        carbonNeutral: resolve(__dirname, "/pages/carbon-neutral/index.html"),
      },
    },
  },
  server: {
    port: 8080,
    open: false,
    strictPort: true,
    // proxy: {
    //   "/carbon-neutral": {
    //     target: "http://localhost:8080",
    //     rewrite: (path) =>
    //       path.replace(
    //         /^\/carbon-neutral$/,
    //         "/pages/carbon-neutral/index.html"
    //       ),
    //   },
    //   "/subscription": {
    //     target: "http://localhost:8080",
    //     rewrite: (path) =>
    //       path.replace(/^\/subscription$/, "/pages/subscription/index.html"),
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});

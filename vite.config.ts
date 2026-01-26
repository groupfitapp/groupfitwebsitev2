import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Apply WebP conversion and resizing for activity/city images
        if (url.pathname.includes("/assets/activities/") || url.pathname.includes("/assets/cities/")) {
          return new URLSearchParams({
            format: "webp",
            quality: "80",
            w: "800"
          });
        }
        // Apply WebP and optimization for banner images
        if (url.pathname.includes("banner") || url.pathname.includes("hero")) {
          return new URLSearchParams({
            format: "webp",
            quality: "85",
            w: "1920"
          });
        }
        return new URLSearchParams();
      }
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify CSS
    cssMinify: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',

    rollupOptions: {
      output: {
        /**
         * ✅ Optimized chunking for PageSpeed:
         * - Splits framer-motion into separate chunk (lazy-loaded)
         * - Keeps React ecosystem together for better caching
         * - Heavy dependencies get their own chunks
         */
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Framer motion in its own chunk (lazy-loaded)
            if (id.includes("framer-motion")) {
              return "vendor-framer-motion";
            }
            // React ecosystem together
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "vendor-react";
            }
            // Radix UI components
            if (id.includes("@radix-ui")) {
              return "vendor-radix";
            }
            // Other dependencies
            const parts = id.split("node_modules/")[1].split("/");
            const pkg = parts[0].startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
            return `vendor-${pkg.replace("@", "").replace("/", "-")}`;
          }
        }
      }
    }
  }
}));

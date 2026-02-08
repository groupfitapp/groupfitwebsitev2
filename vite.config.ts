import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

/**
 * Vite plugin that injects a <link rel="preload"> for the hero-banner image
 * into index.html at build time, making the LCP image discoverable
 * from the initial HTML without waiting for React to render.
 */
function heroImagePreload(): Plugin {
  return {
    name: "hero-image-preload",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        for (const fileName of Object.keys(ctx.bundle)) {
          if (fileName.includes("hero-banner") && fileName.endsWith(".webp")) {
            const tag = `<link rel="preload" as="image" type="image/webp" href="/${fileName}" fetchpriority="high" />`;
            return html.replace("</head>", `${tag}\n  </head>`);
          }
        }
        return html;
      },
    },
  };
}

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
    heroImagePreload(),
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

    rollupOptions: {
      output: {
        /**
         * ✅ Better chunking for performance:
         * - Splits dependencies by package instead of forcing large "vendor/ui" bundles.
         * - Works very well with route-based code splitting you added in App.tsx.
         */
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Put each dependency in its own chunk (stable + cacheable)
            const parts = id.split("node_modules/")[1].split("/");
            const pkg = parts[0].startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
            return `vendor-${pkg.replace("@", "").replace("/", "-")}`;
          }
        }
      }
    }
  }
}));

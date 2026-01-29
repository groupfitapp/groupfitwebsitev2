/// <reference types="vite/client" />

// vite-imagetools query string imports
declare module '*.jpg?w=400&format=webp' {
  const src: string;
  export default src;
}

declare module '*.jpg?w=200&format=webp' {
  const src: string;
  export default src;
}

// vite-imagetools type declarations for query params
declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.jpeg?*' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}

declare module '*.webp?*' {
  const src: string;
  export default src;
}

declare module '*.avif?*' {
  const src: string;
  export default src;
}

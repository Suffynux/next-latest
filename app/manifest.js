export default function manifest() {
  return {
    name: "NextGrid IT",
    short_name: "NextGrid",
    description:
      "One team that plans, builds and grows your digital business.",
    start_url: "/",
    display: "browser",
    background_color: "#F3F3F1",
    theme_color: "#070B18",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

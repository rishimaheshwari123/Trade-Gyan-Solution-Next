
  export default function robots() {
    const baseURL = "https://www.tradegyan.co";
    return {
      rules: {
        userAgent: "*",
        allow: ["/", "/*"],
        disallow: ["/admin/*"],
      },
      sitemap: `${baseURL}/sitemap.xml`,
    };
  }
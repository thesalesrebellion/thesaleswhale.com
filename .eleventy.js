export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
    'css': 'css',
    'favicon': 'favicon',
    'js': 'js',
    'android-chrome-192x192.png': 'android-chrome-192x192.png',
    'android-chrome-256x256.png': 'android-chrome-256x256.png',
    'apple-touch-icon.png': 'apple-touch-icon.png',
    'browserconfig.xml': 'browserconfig.xml',
    'favicon-16x16.png': 'favicon-16x16.png',
    'favicon-32x32.png': 'favicon-32x32.png',
    'favicon.ico': 'favicon.ico',
    'mstile-150x150.png': 'mstile-150x150.png',
    'site.webmanifest': 'site.webmanifest',
  });
  eleventyConfig.addGlobalData('site_title', 'The Sales Whale');
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');
};

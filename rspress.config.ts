import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
import sitemap from "rspress-plugin-sitemap";
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { defineConfig } from 'rspress/config';

const siteUrl = 'https://saijs.github.io';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/',
  title: 'JavaScript 异常档案',
  description: 'JavaScript 异常档案',
  head: [
    [ 'meta', { name: 'keyword', content: 'JavaScript, 异常, 错误, 处理, 代码, 开发' } ],
  ],
  icon: '/images/exception.jpg',
  logoText: 'JavaScript 异常档案',
  logo: {
    light: '/images/exception.jpg',
    dark: '/images/exception.jpg',
  },
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  lang: 'en-US',
  themeConfig: {
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    nav: [
      { text: '首页', link: '/', activeMatch: '^(/|/index.html)$', position: 'left' },
      { text: '异常档案', link: '/wiki/index.html', activeMatch: '^/wiki/', position: 'left' },
      { text: '关于', link: '/about.html', activeMatch: '^/about.html$', position: 'left' },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/saijs/saijs.github.io',
      },
    ],
    footer: {
      message: `© 2013 - ${new Date().getFullYear()} JavaScript 异常档案`,
    },
  },
  plugins: [
    sitemap({ 
      domain: siteUrl,
      defaultChangeFreq: "weekly",
      defaultPriority: "0.5",
     }),
  ],
  builderConfig: {
    plugins: [
      pluginSass(),
      pluginGoogleAnalytics({ id: 'G-7DVVQN2WB7' }),
    ],
  },
});

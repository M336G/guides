// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://guides.m336.dev',
	trailingSlash: 'always',

    integrations: [starlight({
		logo: {
			src: './public/favicon.svg',
			replacesTitle: false
		},
        head: [
            { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
            { tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' } },
            { tag: 'link', attrs: { rel: 'shortcut icon', href: '/favicon.ico' } },
            { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
            { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
            { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'Guides' } },

			{ tag: 'link', attrs: { rel: 'sitemap', href: '/sitemap-index.xml' } },
        ],

        title: "M336's Guides",
        social: [
            { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@M336' },
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/adbqkyvbZa' },
            { icon: 'telegram', label: 'Telegram', href: 'https://t.me/M336G' },
            { icon: 'seti:github', label: 'GitHub', href: 'https://github.com/M336G' },
            { icon: 'seti:info', label: 'Website', href: 'https://m336.dev/' },
            { icon: 'email', label: 'Email', href: 'mailto:m336@m336.dev' }
        ],

        sidebar: [
            {
                label: 'GDPS Guides',
                items: [
                    { label: 'Custom RobTop-Like Rate Button', slug: 'gdps/custom-rate-button' },
                ],
            }
        ],
		}), sitemap()],
});
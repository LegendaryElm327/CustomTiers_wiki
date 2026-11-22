(() => {
    "use strict";
    const LANG = (document.documentElement.lang || "es").toLowerCase().startsWith("en") ? "en" : "es";
    const IS_EN = LANG === "en";
    const SITE = {
        name: "CustomTiers",
        version: "1.1.0",
        craftengine: "26.11",
        minecraft: "26.2",
        github: "",
        license: IS_EN ? "../LICENSE.txt" : "LICENSE.txt"
    };
    const T = IS_EN ? {
        nav: "Navigation",
        closeMenu: "Close menu",
        openMenu: "Open navigation menu",
        mainSections: "Main sections",
        themeDark: "Switch to dark theme",
        themeLight: "Switch to light theme",
        brandHome: "CustomTiers Wiki, home",
        wiki: "Wiki",
        home: "Home",
        previous: "Previous page",
        next: "Next page",
        toc: "On this page",
        linkTo: "Link to",
        copy: "Copy",
        copied: "Copied",
        copiedToast: "Code copied to clipboard",
        sidebarText: "Basic installation guide, arguments and examples.",
        footerText: "A basic guide to install CustomTiers and create your first items with a tier background.",
        guide: "Guide",
        items: "Items",
        license: "License",
        repository: "Repository",
        footerLegal: "Not affiliated with Mojang, Microsoft or CraftEngine.",
        switchLang: "ES",
        switchLangTitle: "Leer en español",
        switchLangAria: "Cambiar a español"
    } : {
        nav: "Navegación",
        closeMenu: "Cerrar menú",
        openMenu: "Abrir menú de navegación",
        mainSections: "Secciones principales",
        themeDark: "Cambiar a tema oscuro",
        themeLight: "Cambiar a tema claro",
        brandHome: "CustomTiers Wiki, inicio",
        wiki: "Wiki",
        home: "Inicio",
        previous: "Página anterior",
        next: "Página siguiente",
        toc: "En esta página",
        linkTo: "Enlace a",
        copy: "Copiar",
        copied: "Copiado",
        copiedToast: "Código copiado al portapapeles",
        sidebarText: "Guía básica de instalación, argumentos y ejemplos.",
        footerText: "Guía básica para instalar CustomTiers y crear tus primeros items con fondo de tier.",
        guide: "Guía",
        items: "Items",
        license: "Licencia",
        repository: "Repositorio",
        footerLegal: "No afiliado a Mojang, Microsoft ni CraftEngine.",
        switchLang: "EN",
        switchLangTitle: "Read in English",
        switchLangAria: "Switch to English"
    };
    const NAV_ES = [ {
        label: "Empezar",
        items: [ {
            slug: "index",
            href: "index.html",
            label: "Inicio",
            icon: "home"
        }, {
            slug: "instalacion",
            href: "instalacion.html",
            label: "Instalación",
            icon: "download"
        }, {
            slug: "primer-item",
            href: "primer-item.html",
            label: "Tu primer item",
            icon: "sword"
        } ]
    }, {
        label: "Guía",
        items: [ {
            slug: "argumentos",
            href: "argumentos.html",
            label: "Argumentos básicos",
            icon: "book"
        }, {
            slug: "mmoitems",
            href: "mmoitems.html",
            label: "MMOItems",
            icon: "link"
        } ]
    }, {
        label: "Items",
        items: [ {
            slug: "armas",
            href: "armas.html",
            label: "Creación de armas",
            icon: "zap"
        }, {
            slug: "armadura",
            href: "armadura.html",
            label: "Creación de armadura",
            icon: "shield"
        } ]
    } ];
    const NAV_EN = [ {
        label: "Get started",
        items: [ {
            slug: "index",
            href: "index.html",
            label: "Home",
            icon: "home"
        }, {
            slug: "instalacion",
            href: "installation.html",
            label: "Installation",
            icon: "download"
        }, {
            slug: "primer-item",
            href: "first-item.html",
            label: "Your first item",
            icon: "sword"
        } ]
    }, {
        label: "Guide",
        items: [ {
            slug: "argumentos",
            href: "arguments.html",
            label: "Basic arguments",
            icon: "book"
        }, {
            slug: "mmoitems",
            href: "mmoitems.html",
            label: "MMOItems",
            icon: "link"
        } ]
    }, {
        label: "Items",
        items: [ {
            slug: "armas",
            href: "weapons.html",
            label: "Creating weapons",
            icon: "zap"
        }, {
            slug: "armadura",
            href: "armor.html",
            label: "Creating armor",
            icon: "shield"
        } ]
    } ];
    const NAV = IS_EN ? NAV_EN : NAV_ES;
    const HEADER_LINKS = IS_EN ? [ {
        slug: "instalacion",
        href: "installation.html",
        label: "Installation"
    }, {
        slug: "armas",
        href: "weapons.html",
        label: "Weapons"
    }, {
        slug: "armadura",
        href: "armor.html",
        label: "Armor"
    } ] : [ {
        slug: "instalacion",
        href: "instalacion.html",
        label: "Instalación"
    }, {
        slug: "armas",
        href: "armas.html",
        label: "Armas"
    }, {
        slug: "armadura",
        href: "armadura.html",
        label: "Armadura"
    } ];
    const FILES = {
        es: {
            index: "index.html",
            instalacion: "instalacion.html",
            "primer-item": "primer-item.html",
            argumentos: "argumentos.html",
            mmoitems: "mmoitems.html",
            armas: "armas.html",
            armadura: "armadura.html",
            404: "404.html"
        },
        en: {
            index: "index.html",
            instalacion: "installation.html",
            "primer-item": "first-item.html",
            argumentos: "arguments.html",
            mmoitems: "mmoitems.html",
            armas: "weapons.html",
            armadura: "armor.html",
            404: "404.html"
        }
    };
    const FOOTER_GUIDE = IS_EN ? [ [ "Installation", "installation.html" ], [ "Your first item", "first-item.html" ], [ "Arguments", "arguments.html" ], [ "MMOItems", "mmoitems.html" ] ] : [ [ "Instalación", "instalacion.html" ], [ "Tu primer item", "primer-item.html" ], [ "Argumentos", "argumentos.html" ], [ "MMOItems", "mmoitems.html" ] ];
    const FOOTER_ITEMS = IS_EN ? [ [ "Creating weapons", "weapons.html" ], [ "Creating armor", "armor.html" ] ] : [ [ "Creación de armas", "armas.html" ], [ "Creación de armadura", "armadura.html" ] ];
    function langHref() {
        const slug = page();
        const target = (IS_EN ? FILES.es : FILES.en)[slug] || "index.html";
        return IS_EN ? `../${target}` : `en/${target}`;
    }
    const ICONS = {
        home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/>',
        download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 21h16"/>',
        sword: '<path d="m14.5 3.5 6 6-9.5 9.5H5v-6z"/><path d="m5 19 4-4"/><path d="M15 4l5 5"/>',
        layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
        shield: '<path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/>',
        grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
        alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
        history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>',
        scale: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="m5 7-3 6h6L5 7Z"/><path d="m19 7-3 6h6l-3-6Z"/><path d="M8 21h8"/>',
        search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
        moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
        menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
        x: '<path d="m6 6 12 12M18 6 6 18"/>',
        "chevron-right": '<path d="m9 18 6-6-6-6"/>',
        "arrow-left": '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
        "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
        copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
        check: '<path d="m5 12 5 5L20 7"/>',
        external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
        github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.5 0-3.7 0 0-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.5 2.3 5.4 2.6 5.4 2.6c-.3 1.2-.3 2.5 0 3.7a5.5 5.5 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.4.4-.7 1-.9 1.6-.2.6-.2 1.2-.1 1.9v4"/><path d="M9 18c-4.5 1.5-5-2-7-2"/>',
        discord: '<path d="M8 12h.01M16 12h.01"/><path d="M7.5 7.5A17 17 0 0 1 12 6a17 17 0 0 1 4.5 1.5c1.7 2.6 2.5 5.6 2.2 8.8A15 15 0 0 1 12 19a15 15 0 0 1-6.7-2.7c-.3-3.2.5-6.2 2.2-8.8Z"/><path d="M8.5 17c-1.3-.6-2.4-1.5-3.2-2.7"/><path d="M15.5 17c1.3-.6 2.4-1.5 3.2-2.7"/>',
        sparkles: '<path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/><path d="M5 15l.6 1.4L7 17l-1.4.6L5 19l-.6-1.4L3 17l1.4-.6L5 15Z"/>',
        terminal: '<path d="m4 17 6-5-6-5"/><path d="M12 19h8"/>',
        file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/>',
        package: '<path d="m7.5 4.3 9 5.2"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
        wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.1-2.1 2.9-2.7Z"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
        zap: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',
        box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
        tag: '<path d="M20 12 12 20l-9-9V3h8l9 9Z"/><circle cx="7.5" cy="7.5" r="1"/>',
        list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
        play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/>',
        settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
        link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/>'
    };
    function icon(name, cls = "") {
        const path = ICONS[name];
        if (!path) return "";
        return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
    }
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const esc = (value = "") => String(value).replace(/[&<>"']/g, ch => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[ch]));
    const escText = (value = "") => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const normalize = (value = "") => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    const slugify = (value = "") => normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 72) || "seccion";
    const debounce = (fn, ms = 120) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), ms);
        };
    };
    const isTyping = () => {
        const el = document.activeElement;
        return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
    };
    const page = () => document.body.dataset.page || "index";
    function toast(message) {
        let node = $(".toast");
        if (!node) {
            node = document.createElement("div");
            node.className = "toast";
            node.setAttribute("role", "status");
            node.setAttribute("aria-live", "polite");
            document.body.appendChild(node);
        }
        node.innerHTML = `${icon("check")}<span>${esc(message)}</span>`;
        node.classList.add("is-visible");
        clearTimeout(node._timer);
        node._timer = setTimeout(() => node.classList.remove("is-visible"), 1900);
    }
    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            const area = document.createElement("textarea");
            area.value = text;
            area.setAttribute("readonly", "");
            area.style.position = "fixed";
            area.style.opacity = "0";
            document.body.appendChild(area);
            area.select();
            let ok = false;
            try {
                ok = document.execCommand("copy");
            } catch (e) {
                ok = false;
            }
            area.remove();
            return ok;
        }
    }
    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("ct-theme", theme);
        } catch (error) {}
        updateThemeButtons(theme);
        const meta = $('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "light" ? "#f6f8fb" : "#090c11");
    }
    function currentTheme() {
        return document.documentElement.dataset.theme === "light" ? "light" : "dark";
    }
    function updateThemeButtons(theme = currentTheme()) {
        $$("[data-theme-toggle]").forEach(button => {
            const next = theme === "dark" ? "light" : "dark";
            button.innerHTML = icon(theme === "dark" ? "sun" : "moon");
            const label = next === "dark" ? T.themeDark : T.themeLight;
            button.setAttribute("aria-label", label);
            button.setAttribute("title", label);
        });
    }
    function initTheme() {
        $$("[data-theme-toggle]").forEach(button => {
            button.addEventListener("click", () => {
                applyTheme(currentTheme() === "dark" ? "light" : "dark");
            });
        });
        updateThemeButtons();
    }
    function renderHeader() {
        const host = $("#site-header");
        if (!host) return;
        const links = HEADER_LINKS.map(link => `<a class="header-link${page() === link.slug ? " is-active" : ""}" href="${link.href}"${page() === link.slug ? ' aria-current="page"' : ""}>${esc(link.label)}</a>`).join("");
        const github = SITE.github ? `<a class="icon-button" href="${esc(SITE.github)}" target="_blank" rel="noopener noreferrer" aria-label="${T.repository}" title="${T.repository}">${icon("github")}</a>` : "";
        const langSwitch = `<a class="lang-switch" href="${langHref()}" hreflang="${IS_EN ? "es" : "en"}" aria-label="${T.switchLangAria}" title="${T.switchLangTitle}">${T.switchLang}</a>`;
        host.className = "site-header";
        host.innerHTML = `\n      <div class="header-inner">\n        <a class="brand" href="index.html" aria-label="${T.brandHome}">\n          <span class="brand-mark">${icon("shield")}</span>\n          <span class="brand-text">\n            <span class="brand-title">CustomTiers</span>\n            <span class="brand-sub">Wiki · CraftEngine</span>\n          </span>\n        </a>\n        <nav class="header-links" aria-label="${T.mainSections}">${links}</nav>\n        <div class="header-actions">\n          <button class="icon-button" type="button" data-theme-toggle aria-label="${T.themeDark}"></button>\n          ${langSwitch}\n          ${github}\n          <button class="icon-button menu-button" type="button" data-menu-open aria-label="${T.openMenu}">${icon("menu")}</button>\n        </div>\n      </div>`;
    }
    function renderSidebar() {
        const host = $("#site-sidebar");
        if (!host) return;
        const sections = NAV.map(section => {
            const items = section.items.map(item => {
                const active = page() === item.slug;
                return `<a class="nav-link${active ? " is-active" : ""}" href="${item.href}"${active ? ' aria-current="page"' : ""}>\n            ${icon(item.icon)}\n            <span>${esc(item.label)}</span>\n            ${item.tag ? `<span class="badge badge-new" style="margin-left:auto">${esc(item.tag)}</span>` : ""}\n          </a>`;
            }).join("");
            return `<div class="nav-section"><p class="nav-label">${esc(section.label)}</p>${items}</div>`;
        }).join("");
        host.className = "site-sidebar";
        host.id = "site-sidebar";
        host.innerHTML = `\n      <div class="sidebar-inner">\n        <div class="sidebar-head">\n          <span class="nav-label" style="margin:0">${T.nav}</span>\n          <button class="icon-button sidebar-close" type="button" data-menu-close aria-label="${T.closeMenu}">${icon("x")}</button>\n        </div>\n        ${sections}\n        <div class="sidebar-spacer"></div>\n        <div class="sidebar-card">\n          <h3>CustomTiers</h3>\n          <p class="hint" style="margin:0 0 8px">${T.sidebarText}</p>\n          <div class="sidebar-meta">\n            <span class="badge badge-version">v${esc(SITE.version)}</span>\n            <span>CE ${esc(SITE.craftengine)}</span>\n            <span>MC ${esc(SITE.minecraft)}</span>\n          </div>\n        </div>\n      </div>`;
    }
    function renderFooter() {
        const host = $("#site-footer");
        if (!host) return;
        const repo = SITE.github ? `<a href="${esc(SITE.github)}" target="_blank" rel="noopener noreferrer">${T.repository} ${icon("external")}</a>` : "";
        const guideLinks = FOOTER_GUIDE.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("");
        const itemLinks = FOOTER_ITEMS.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("");
        host.className = "site-footer";
        host.innerHTML = `\n      <div class="footer-inner">\n        <div class="footer-brand">\n          <a class="brand" href="index.html">\n            <span class="brand-mark">${icon("shield")}</span>\n            <span class="brand-text"><span class="brand-title">CustomTiers</span><span class="brand-sub">Wiki</span></span>\n          </a>\n          <p>${T.footerText}</p>\n        </div>\n        <div class="footer-col">\n          <h3>${T.guide}</h3>\n          ${guideLinks}\n        </div>\n        <div class="footer-col">\n          <h3>${T.items}</h3>\n          ${itemLinks}\n          <a href="${esc(SITE.license)}">${T.license}</a>\n        </div>\n      </div>\n      <div class="footer-bottom">\n        <p>© ${(new Date).getFullYear()} CustomTiers Wiki <span class="dot">·</span> v${esc(SITE.version)}</p>\n        <p>${T.footerLegal} <a href="${esc(SITE.license)}">${T.license}</a>${repo}</p>\n      </div>`;
    }
    function initMobileMenu() {
        const sidebar = $("#site-sidebar");
        const overlay = $("#sidebar-overlay");
        if (!sidebar || !overlay) return;
        const open = () => {
            sidebar.classList.add("is-open");
            overlay.classList.add("is-open");
            document.body.classList.add("menu-open");
            const first = $("[data-menu-close]", sidebar);
            if (first) first.focus();
        };
        const close = () => {
            sidebar.classList.remove("is-open");
            overlay.classList.remove("is-open");
            document.body.classList.remove("menu-open");
        };
        $$("[data-menu-open]").forEach(button => button.addEventListener("click", open));
        $$("[data-menu-close]").forEach(button => button.addEventListener("click", close));
        overlay.addEventListener("click", close);
        $$(".nav-link", sidebar).forEach(link => link.addEventListener("click", close));
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && sidebar.classList.contains("is-open")) close();
        });
        window.addEventListener("resize", () => {
            if (window.innerWidth > 880) close();
        });
    }
    function pageTitle() {
        const h1 = $("main h1");
        return h1 ? h1.textContent.trim() : document.title.replace(/\s*·.*$/, "");
    }
    function renderBreadcrumb() {
        const host = $("#breadcrumb");
        if (!host) return;
        const h1 = pageTitle();
        if (page() === "index") {
            host.innerHTML = `<span>${T.wiki}</span><span class="breadcrumb-sep">/</span><span>${T.home}</span>`;
            return;
        }
        host.innerHTML = `<a href="index.html">${T.wiki}</a><span class="breadcrumb-sep">/</span><span>${esc(h1)}</span>`;
    }
    function ensureHeadingIds() {
        const used = new Set;
        $$("main h2, main h3").forEach(heading => {
            if (heading.dataset.toc === "false") return;
            let id = heading.id || slugify(heading.textContent);
            let candidate = id;
            let i = 2;
            while (used.has(candidate)) {
                candidate = `${id}-${i++}`;
            }
            heading.id = candidate;
            used.add(candidate);
        });
    }
    function initTOC() {
        const rail = $("#toc-rail");
        if (!rail) return;
        ensureHeadingIds();
        const headings = $$("main h2, main h3").filter(h => h.dataset.toc !== "false" && h.id);
        if (headings.length < 2) {
            rail.hidden = true;
            return;
        }
        const links = headings.map(heading => `<li><a class="toc-link${heading.tagName === "H3" ? " is-sub" : ""}" href="#${esc(heading.id)}">${esc(heading.textContent.replace("#", "").trim())}</a></li>`).join("");
        rail.innerHTML = `<p class="toc-title">${T.toc}</p><ul class="toc-list">${links}</ul>`;
        headings.forEach(heading => {
            if ($(".anchor-link", heading)) return;
            const anchor = document.createElement("a");
            anchor.className = "anchor-link";
            anchor.href = `#${heading.id}`;
            anchor.setAttribute("aria-label", `${T.linkTo} ${heading.textContent.trim()}`);
            anchor.textContent = "#";
            heading.appendChild(anchor);
        });
        const tocLinks = $$(".toc-link", rail);
        const byId = new Map(tocLinks.map(link => [ link.getAttribute("href").slice(1), link ]));
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(entries => {
                const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (!visible.length) return;
                const id = visible[0].target.id;
                tocLinks.forEach(link => {
                    const active = link === byId.get(id);
                    link.classList.toggle("is-active", active);
                    if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
                });
            }, {
                rootMargin: "-18% 0px -68% 0px",
                threshold: [ 0, 1 ]
            });
            headings.forEach(heading => observer.observe(heading));
        }
    }
    function initPageNav() {
        const host = $("#page-nav");
        if (!host) return;
        const flat = NAV.flatMap(section => section.items);
        const index = flat.findIndex(item => item.slug === page());
        if (index === -1) {
            host.hidden = true;
            return;
        }
        const prev = flat[index - 1];
        const next = flat[index + 1];
        const parts = [];
        if (prev) {
            parts.push(`<a class="page-nav-link prev" href="${prev.href}"><span class="page-nav-label">${icon("arrow-left")} ${T.previous}</span><span class="page-nav-title">${esc(prev.label)}</span></a>`);
        } else {
            parts.push("<span></span>");
        }
        if (next) {
            parts.push(`<a class="page-nav-link next" href="${next.href}"><span class="page-nav-label">${T.next} ${icon("arrow-right")}</span><span class="page-nav-title">${esc(next.label)}</span></a>`);
        }
        host.innerHTML = parts.join("");
    }
    function splitComment(line) {
        let quote = null;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (quote) {
                if (ch === quote && line[i - 1] !== "\\") quote = null;
            } else if (ch === '"' || ch === "'") {
                quote = ch;
            } else if (ch === "#" && (i === 0 || /\s/.test(line[i - 1]))) {
                return [ line.slice(0, i), line.slice(i) ];
            }
        }
        return [ line, "" ];
    }
    function highlightValue(value) {
        if (!value) return "";
        const text = escText(value);
        return text.replace(/(\$\{[^}]+\})|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(true|false|null|yes|no|on|off)\b|\b(-?\d+(?:\.\d+)?)\b/g, (match, placeholder, string, bool, number) => {
            if (placeholder) return `<span class="tok-placeholder">${placeholder}</span>`;
            if (string) return `<span class="tok-string">${string}</span>`;
            if (bool) return `<span class="tok-bool">${bool}</span>`;
            if (number) return `<span class="tok-number">${number}</span>`;
            return match;
        });
    }
    function highlightYaml(code) {
        return String(code).split("\n").map(line => {
            const [body, comment] = splitComment(line);
            let out = "";
            let rest = body;
            const dash = rest.match(/^(\s*)(-\s+)/);
            if (dash) {
                out += `${dash[1]}<span class="tok-dash">${dash[2]}</span>`;
                rest = rest.slice(dash[0].length);
            }
            const key = rest.match(/^(\s*)([^:\n]+?):(?=\s|$)/);
            if (key) {
                out += `${key[1]}<span class="tok-key">${escText(key[2])}</span>:`;
                rest = rest.slice(key[0].length);
            }
            out += highlightValue(rest);
            if (comment) out += `<span class="tok-comment">${escText(comment)}</span>`;
            return out;
        }).join("\n");
    }
    function highlightBash(code) {
        return String(code).split("\n").map(line => {
            if (/^\s*#/.test(line)) return `<span class="tok-comment">${escText(line)}</span>`;
            return escText(line).replace(/^(\s*)(\$)(\s+)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, (match, ws, dollar, space, string) => {
                if (dollar) return `${ws}<span class="tok-command">${dollar}</span>${space}`;
                return `<span class="tok-string">${string}</span>`;
            });
        }).join("\n");
    }
    function highlightCode(code, lang = "yaml") {
        const language = String(lang).toLowerCase();
        if (language === "yaml" || language === "yml") return highlightYaml(code);
        if (language === "bash" || language === "shell" || language === "sh") return highlightBash(code);
        if (language === "json") {
            return escText(code).replace(/("(?:[^"\\]|\\.)*")(\s*:)?/g, (match, string, colon) => colon ? `<span class="tok-key">${string}</span>${colon}` : `<span class="tok-string">${string}</span>`);
        }
        return escText(code);
    }
    function initCodeBlocks() {
        $$("main pre").forEach(pre => {
            if (pre.closest(".builder-output") || pre.dataset.noCopy !== undefined) return;
            if (pre.closest(".code-block")) return;
            const lang = pre.dataset.lang || "yaml";
            const wrapper = document.createElement("div");
            wrapper.className = "code-block";
            pre.parentNode.insertBefore(wrapper, pre);
            const head = document.createElement("div");
            head.className = "code-head";
            head.innerHTML = `<span>${esc(lang === "bash" ? "terminal" : lang)}</span><span class="code-lang">${esc(lang)}</span>`;
            const button = document.createElement("button");
            button.type = "button";
            button.className = "copy-button";
            button.innerHTML = `${icon("copy")}<span>${T.copy}</span>`;
            button.addEventListener("click", async () => {
                const ok = await copyText(pre.textContent);
                if (!ok) return;
                button.classList.add("is-copied");
                button.innerHTML = `${icon("check")}<span>${T.copied}</span>`;
                toast(T.copiedToast);
                setTimeout(() => {
                    button.classList.remove("is-copied");
                    button.innerHTML = `${icon("copy")}<span>${T.copy}</span>`;
                }, 1600);
            });
            head.appendChild(button);
            wrapper.appendChild(head);
            wrapper.appendChild(pre);
            const code = pre.textContent;
            pre.innerHTML = `<code>${highlightCode(code, lang)}</code>`;
        });
    }
    function initTabs() {
        $$("[data-tabs]").forEach(tabs => {
            const buttons = $$(".tab-button", tabs);
            const panels = $$(".tab-panel", tabs);
            if (!buttons.length || !panels.length) return;
            buttons.forEach((button, index) => {
                button.setAttribute("role", "tab");
                button.setAttribute("aria-selected", button.getAttribute("aria-selected") === "true" || index === 0 ? "true" : "false");
                button.tabIndex = button.getAttribute("aria-selected") === "true" ? 0 : -1;
                const panel = panels[index];
                if (panel) {
                    if (!panel.id) panel.id = `tab-panel-${index}-${Math.random().toString(36).slice(2, 7)}`;
                    button.setAttribute("aria-controls", panel.id);
                    panel.setAttribute("role", "tabpanel");
                    panel.hidden = button.getAttribute("aria-selected") !== "true";
                }
                button.addEventListener("click", () => selectTab(buttons, panels, index));
                button.addEventListener("keydown", event => {
                    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                    event.preventDefault();
                    const dir = event.key === "ArrowRight" ? 1 : -1;
                    const next = (index + dir + buttons.length) % buttons.length;
                    buttons[next].focus();
                    selectTab(buttons, panels, next);
                });
            });
        });
    }
    function selectTab(buttons, panels, index) {
        buttons.forEach((button, i) => {
            const selected = i === index;
            button.setAttribute("aria-selected", selected ? "true" : "false");
            button.tabIndex = selected ? 0 : -1;
            if (panels[i]) panels[i].hidden = !selected;
        });
    }
    function initChecklists() {
        $$("input[data-check]").forEach(input => {
            const key = `ct-check:${input.dataset.check}`;
            try {
                input.checked = localStorage.getItem(key) === "1";
            } catch (error) {}
            input.addEventListener("change", () => {
                try {
                    localStorage.setItem(key, input.checked ? "1" : "0");
                } catch (error) {}
            });
        });
        $$("[data-check-reset]").forEach(button => {
            button.addEventListener("click", () => {
                $$("input[data-check]").forEach(input => {
                    input.checked = false;
                    try {
                        localStorage.removeItem(`ct-check:${input.dataset.check}`);
                    } catch (error) {}
                });
                toast("Checklist reiniciada");
            });
        });
    }
    function searchIndex() {
        return Array.isArray(window.SEARCH_INDEX) ? window.SEARCH_INDEX : [];
    }
    function searchScore(entry, query) {
        const q = normalize(query);
        if (!q) return 0;
        const title = normalize(entry.title || "");
        const section = normalize(entry.section || "");
        const desc = normalize(entry.description || "");
        const keys = normalize(entry.keywords || "");
        const pageName = normalize(entry.pageTitle || "");
        const hay = `${title} ${section} ${desc} ${keys} ${pageName}`;
        let score = 0;
        if (title === q) score += 120; else if (title.startsWith(q)) score += 70; else if (title.includes(q)) score += 40;
        if (section.includes(q)) score += 20;
        if (keys.includes(q)) score += 16;
        if (desc.includes(q)) score += 10;
        if (pageName.includes(q)) score += 6;
        const tokens = q.split(/\s+/).filter(Boolean);
        if (tokens.length > 1) {
            tokens.forEach(token => {
                if (hay.includes(token)) score += 4;
            });
        }
        return score;
    }
    function markMatch(text, query) {
        const safe = esc(text);
        const q = normalize(query);
        if (!q) return safe;
        const tokens = q.split(/\s+/).filter(token => token.length > 1);
        if (!tokens.length) return safe;
        const pattern = new RegExp(`(${tokens.map(token => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
        return safe.replace(pattern, "<mark>$1</mark>");
    }
    function initSearch() {
        const root = $("#search-root");
        if (!root) return;
        root.innerHTML = `\n      <div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Buscar en la wiki">\n        <div class="search-dialog">\n          <div class="search-input-wrap">\n            ${icon("search")}\n            <input class="search-input" id="search-input" type="search" placeholder="Busca plantillas, tiers, errores…" autocomplete="off" spellcheck="false" aria-label="Buscar">\n            <button class="icon-button search-close" type="button" data-search-close aria-label="Cerrar buscador">${icon("x")}</button>\n          </div>\n          <div class="search-results" id="search-results" role="listbox" aria-label="Resultados"></div>\n          <div class="search-footer">\n            <span><kbd>↑</kbd><kbd>↓</kbd> navegar</span>\n            <span><kbd>Enter</kbd> abrir</span>\n            <span><kbd>Esc</kbd> cerrar</span>\n            <span style="margin-left:auto">${esc(searchIndex().length)} entradas</span>\n          </div>\n        </div>\n      </div>`;
        const modal = $("#search-modal");
        const input = $("#search-input");
        const results = $("#search-results");
        let active = 0;
        let lastFocus = null;
        let current = [];
        const open = () => {
            lastFocus = document.activeElement;
            modal.classList.add("is-open");
            document.body.classList.add("search-open");
            document.body.style.overflow = "hidden";
            input.value = "";
            render("");
            setTimeout(() => input.focus(), 20);
        };
        const close = () => {
            modal.classList.remove("is-open");
            document.body.classList.remove("search-open");
            document.body.style.overflow = "";
            if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
        };
        const iconForPage = slug => {
            const item = NAV.flatMap(section => section.items).find(entry => entry.slug === slug);
            return item ? item.icon : "file";
        };
        const render = query => {
            const q = query.trim();
            if (!q) {
                current = searchIndex().filter(entry => entry.featured).slice(0, 8);
                if (!current.length) current = searchIndex().slice(0, 8);
            } else {
                current = searchIndex().map(entry => ({
                    entry: entry,
                    score: searchScore(entry, q)
                })).filter(item => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 12).map(item => item.entry);
            }
            if (!current.length) {
                results.innerHTML = `<div class="search-empty">No hay resultados para <strong>${esc(q)}</strong>.<br>Prueba con “escudo”, “tiers”, “manifest” o “textura”.</div>`;
                active = -1;
                return;
            }
            results.innerHTML = `<div class="search-hint">${q ? "Resultados" : "Sugerencias"}</div>` + current.map((entry, index) => `\n          <a class="search-result${index === 0 ? " is-active" : ""}" href="${esc(entry.href)}" data-result-index="${index}" role="option" aria-selected="${index === 0}">\n            <span class="search-result-icon">${icon(iconForPage(entry.page))}</span>\n            <span class="search-result-body">\n              <span class="search-result-title">${markMatch(entry.title, q)}</span>\n              <span class="search-result-meta">${esc(entry.pageTitle || "")}${entry.section ? ` · ${markMatch(entry.section, q)}` : ""}</span>\n              ${entry.description ? `<span class="search-result-desc">${markMatch(entry.description, q)}</span>` : ""}\n            </span>\n          </a>`).join("");
            active = 0;
            results.querySelectorAll(".search-result").forEach((link, index) => {
                link.addEventListener("mouseenter", () => setActive(index));
                link.addEventListener("click", close);
            });
        };
        const setActive = index => {
            const links = $$(".search-result", results);
            if (!links.length) return;
            active = (index + links.length) % links.length;
            links.forEach((link, i) => {
                link.classList.toggle("is-active", i === active);
                link.setAttribute("aria-selected", i === active ? "true" : "false");
            });
            links[active].scrollIntoView({
                block: "nearest"
            });
        };
        input.addEventListener("input", debounce(() => render(input.value), 80));
        input.addEventListener("keydown", event => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                setActive(active + 1);
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setActive(active - 1);
            } else if (event.key === "Enter") {
                event.preventDefault();
                const link = $$(".search-result", results)[active];
                if (link) link.click();
            } else if (event.key === "Escape") {
                close();
            }
        });
        $$("[data-search-open]").forEach(button => button.addEventListener("click", open));
        $$("[data-search-close]").forEach(button => button.addEventListener("click", close));
        modal.addEventListener("click", event => {
            if (event.target === modal) close();
        });
        document.addEventListener("keydown", event => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                modal.classList.contains("is-open") ? close() : open();
                return;
            }
            if (event.key === "/" && !isTyping() && !event.ctrlKey && !event.metaKey && !event.altKey) {
                event.preventDefault();
                open();
            }
            if (event.key === "Escape" && modal.classList.contains("is-open")) close();
        });
    }
    function init() {
        renderHeader();
        renderSidebar();
        renderFooter();
        initTheme();
        initMobileMenu();
        renderBreadcrumb();
        initTOC();
        initPageNav();
        initCodeBlocks();
        initTabs();
        initChecklists();
        initSearch();
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
    window.CT = {
        SITE: SITE,
        LANG: LANG,
        T: T,
        NAV: NAV,
        icon: icon,
        esc: esc,
        escText: escText,
        normalize: normalize,
        slugify: slugify,
        toast: toast,
        copyText: copyText,
        highlightCode: highlightCode,
        highlightYaml: highlightYaml,
        debounce: debounce
    };
})();
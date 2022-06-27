import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index-5d6c164c.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/immutable/assets/svelte-logo-87df40b8.svg";
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'header.svelte-16gzt7q.svelte-16gzt7q{display:flex;justify-content:space-between}.corner.svelte-16gzt7q.svelte-16gzt7q{height:3em;width:3em}.corner.svelte-16gzt7q a.svelte-16gzt7q{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.corner.svelte-16gzt7q img.svelte-16gzt7q{height:2em;-o-object-fit:contain;object-fit:contain;width:2em}nav.svelte-16gzt7q.svelte-16gzt7q{--background:hsla(0,0%,100%,.7);display:flex;justify-content:center}svg.svelte-16gzt7q.svelte-16gzt7q{display:block;height:3em;width:2em}path.svelte-16gzt7q.svelte-16gzt7q{fill:var(--background)}ul.svelte-16gzt7q.svelte-16gzt7q{align-items:center;background:var(--background);background-size:contain;display:flex;height:3em;justify-content:center;list-style:none;margin:0;padding:0}li.svelte-16gzt7q.svelte-16gzt7q,ul.svelte-16gzt7q.svelte-16gzt7q{position:relative}li.svelte-16gzt7q.svelte-16gzt7q{height:100%}li.active.svelte-16gzt7q.svelte-16gzt7q:before{--size:6px;border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color);content:"";height:0;left:calc(50% - var(--size));position:absolute;top:0;width:0}nav.svelte-16gzt7q a.svelte-16gzt7q{align-items:center;color:var(--heading-color);display:flex;font-size:.8rem;font-weight:700;height:100%;letter-spacing:.1em;padding:0 1em;text-decoration:none;text-transform:uppercase;transition:color .2s linear}a.svelte-16gzt7q.svelte-16gzt7q:hover{color:var(--accent-color)}')();
const css$1 = {
  code: 'header.svelte-16gzt7q.svelte-16gzt7q{display:flex;justify-content:space-between}.corner.svelte-16gzt7q.svelte-16gzt7q{height:3em;width:3em}.corner.svelte-16gzt7q a.svelte-16gzt7q{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.corner.svelte-16gzt7q img.svelte-16gzt7q{height:2em;-o-object-fit:contain;object-fit:contain;width:2em}nav.svelte-16gzt7q.svelte-16gzt7q{--background:hsla(0,0%,100%,.7);display:flex;justify-content:center}svg.svelte-16gzt7q.svelte-16gzt7q{display:block;height:3em;width:2em}path.svelte-16gzt7q.svelte-16gzt7q{fill:var(--background)}ul.svelte-16gzt7q.svelte-16gzt7q{align-items:center;background:var(--background);background-size:contain;display:flex;height:3em;justify-content:center;list-style:none;margin:0;padding:0}li.svelte-16gzt7q.svelte-16gzt7q,ul.svelte-16gzt7q.svelte-16gzt7q{position:relative}li.svelte-16gzt7q.svelte-16gzt7q{height:100%}li.active.svelte-16gzt7q.svelte-16gzt7q:before{--size:6px;border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color);content:"";height:0;left:calc(50% - var(--size));position:absolute;top:0;width:0}nav.svelte-16gzt7q a.svelte-16gzt7q{align-items:center;color:var(--heading-color);display:flex;font-size:.8rem;font-weight:700;height:100%;letter-spacing:.1em;padding:0 1em;text-decoration:none;text-transform:uppercase;transition:color .2s linear}a.svelte-16gzt7q.svelte-16gzt7q:hover{color:var(--accent-color)}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-16gzt7q"}"><div class="${"corner svelte-16gzt7q"}"><a href="${"https://kit.svelte.dev"}" class="${"svelte-16gzt7q"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-16gzt7q"}"></a></div>

	<nav class="${"svelte-16gzt7q"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-16gzt7q"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-16gzt7q"}"></path></svg>
		<ul class="${"svelte-16gzt7q"}"><li class="${["svelte-16gzt7q", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-16gzt7q"}">Home</a></li>
			<li class="${["svelte-16gzt7q", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-16gzt7q"}">About</a></li>
			<li class="${["svelte-16gzt7q", $page.url.pathname === "/todos" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/todos"}" class="${"svelte-16gzt7q"}">Todos</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-16gzt7q"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-16gzt7q"}"></path></svg></nav>

	<div class="${"corner svelte-16gzt7q"}"></div>
</header>`;
});
var app = /* @__PURE__ */ (() => '@font-face{font-display:swap;font-family:Fira Mono;font-style:normal;font-weight:400;src:url(/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2) format("woff2"),url(/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff) format("woff");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:Fira Mono;font-style:normal;font-weight:400;src:url(/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2) format("woff2"),url(/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff) format("woff");unicode-range:u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:Fira Mono;font-style:normal;font-weight:400;src:url(/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2) format("woff2"),url(/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff) format("woff");unicode-range:u+1f??}@font-face{font-display:swap;font-family:Fira Mono;font-style:normal;font-weight:400;src:url(/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2) format("woff2"),url(/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff) format("woff");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:Fira Mono;font-style:normal;font-weight:400;src:url(/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2) format("woff2"),url(/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff) format("woff");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Fira Mono;font-style:normal;font-weight:400;src:url(/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2) format("woff2"),url(/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff) format("woff");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}:root{--font-mono:"Fira Mono",monospace;--pure-white:#fff;--primary-color:#b9c6d2;--secondary-color:#d0dde9;--tertiary-color:#edf0f8;--accent-color:#ff3e00;--heading-color:rgba(0,0,0,.7);--text-color:#444;--background-without-opacity:hsla(0,0%,100%,.7);--column-width:42rem;--column-margin-top:4rem;font-family:Arial,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}body{background-color:var(--primary-color);background:linear-gradient(180deg,var(--primary-color) 0,var(--secondary-color) 10.45%,var(--tertiary-color) 41.35%);margin:0;min-height:100vh}body:before{background:radial-gradient(50% 50% at 50% 50%,var(--pure-white) 0,hsla(0,0%,100%,0) 100%);content:"";height:100vh;left:10vw;opacity:.05;position:absolute;top:0;width:80vw;z-index:-1}#svelte{display:flex;flex-direction:column;min-height:100vh}h1,h2,p{color:var(--heading-color);font-weight:400}p{line-height:1.5}a{color:var(--accent-color);text-decoration:none}a:hover{text-decoration:underline}h1{font-size:2rem;text-align:center}h2{font-size:1rem}pre{background-color:hsla(0,0%,100%,.45);border-radius:3px;box-shadow:2px 2px 6px hsla(0,0%,100%,.25);color:var(--text-color);font-family:var(--font-mono);font-size:16px;overflow-x:auto;padding:.5em}button,input{font-family:inherit;font-size:inherit}button:focus:not(:focus-visible){outline:none}@media (min-width:720px){h1{font-size:2.4rem}}')();
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-1wxnjqg.svelte-1wxnjqg{box-sizing:border-box;flex:1;margin:0 auto;max-width:1024px;padding:1rem;width:100%}footer.svelte-1wxnjqg.svelte-1wxnjqg,main.svelte-1wxnjqg.svelte-1wxnjqg{display:flex;flex-direction:column}footer.svelte-1wxnjqg.svelte-1wxnjqg{align-items:center;justify-content:center;padding:40px}footer.svelte-1wxnjqg a.svelte-1wxnjqg{font-weight:700}@media(min-width:480px){footer.svelte-1wxnjqg.svelte-1wxnjqg{padding:40px 0}}")();
const css = {
  code: "main.svelte-1wxnjqg.svelte-1wxnjqg{box-sizing:border-box;flex:1;margin:0 auto;max-width:1024px;padding:1rem;width:100%}footer.svelte-1wxnjqg.svelte-1wxnjqg,main.svelte-1wxnjqg.svelte-1wxnjqg{display:flex;flex-direction:column}footer.svelte-1wxnjqg.svelte-1wxnjqg{align-items:center;justify-content:center;padding:40px}footer.svelte-1wxnjqg a.svelte-1wxnjqg{font-weight:700}@media(min-width:480px){footer.svelte-1wxnjqg.svelte-1wxnjqg{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1wxnjqg"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1wxnjqg"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1wxnjqg"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
export { _layout as default };

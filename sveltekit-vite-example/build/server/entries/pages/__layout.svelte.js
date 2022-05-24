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
var logo = "/_app/assets/svelte-logo-87df40b8.svg";
var Header_svelte_svelte_type_style_lang = "";
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
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
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

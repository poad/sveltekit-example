import { n as noop, d as safe_not_equal, f as now, l as loop, c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/index-5d6c164c.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var Counter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".counter.svelte-c2py50.svelte-c2py50{border-bottom:1px solid rgba(0,0,0,.1);border-top:1px solid rgba(0,0,0,.1);display:flex;margin:1rem 0}.counter.svelte-c2py50 button.svelte-c2py50{align-items:center;background-color:transparent;border:0;color:var(--text-color);display:flex;font-size:2rem;justify-content:center;padding:0;width:2em}.counter.svelte-c2py50 button.svelte-c2py50:hover{background-color:var(--secondary-color)}svg.svelte-c2py50.svelte-c2py50{height:25%;width:25%}path.svelte-c2py50.svelte-c2py50{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-c2py50.svelte-c2py50{height:4em;overflow:hidden;position:relative;text-align:center;width:8em}.counter-viewport.svelte-c2py50 strong.svelte-c2py50{align-items:center;color:var(--accent-color);display:flex;font-size:4rem;font-weight:400;justify-content:center}.counter-digits.svelte-c2py50.svelte-c2py50,.counter-viewport.svelte-c2py50 strong.svelte-c2py50{height:100%;position:absolute;width:100%}.hidden.svelte-c2py50.svelte-c2py50{top:-100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css$1);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-c2py50"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-c2py50"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-c2py50"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-c2py50"}"></path></svg></button>

	<div class="${"counter-viewport svelte-c2py50"}"><div class="${"counter-digits svelte-c2py50"}" style="${"transform: translate(0, " + escape(100 * offset) + "%)"}"><strong class="${"hidden svelte-c2py50"}" aria-hidden="${"true"}">${escape(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-c2py50"}">${escape(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-c2py50"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-c2py50"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-c2py50"}"></path></svg></button>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-pmk38k.svelte-pmk38k{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center}.welcome.svelte-pmk38k.svelte-pmk38k,h1.svelte-pmk38k.svelte-pmk38k{width:100%}.welcome.svelte-pmk38k.svelte-pmk38k{height:0;padding:0 0 24.16992%;position:relative}.welcome.svelte-pmk38k img.svelte-pmk38k{display:block;height:100%;position:absolute;top:0;width:100%}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-pmk38k"}"><h1 class="${"svelte-pmk38k"}"><div class="${"welcome svelte-pmk38k"}"><picture><source srcset="${"svelte-welcome.webp"}" type="${"image/webp"}">
				<img src="${"svelte-welcome.png"}" alt="${"Welcome"}" class="${"svelte-pmk38k"}"></picture></div>

		to your new<br>SvelteKit app
	</h1>

	<h2>try editing <strong>src/routes/index.svelte</strong></h2>

	${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
</section>`;
});
export { Routes as default, prerender };

globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/corpse-arena-app-1--rTF_IWO.webp": {
		"type": "image/webp",
		"etag": "\"3d16-rUW0geFggXuuppt4uNOM/OzRIkk\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 15638,
		"path": "../public/assets/corpse-arena-app-1--rTF_IWO.webp"
	},
	"/assets/corpse-arena-app-2-B0X4M2Ol.webp": {
		"type": "image/webp",
		"etag": "\"5e4c-HQ0geck4aAXUfWL4spgMoxMSgdM\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 24140,
		"path": "../public/assets/corpse-arena-app-2-B0X4M2Ol.webp"
	},
	"/assets/corpse-arena-app-4-X8v3daX-.webp": {
		"type": "image/webp",
		"etag": "\"6b32-ru4qfR1LC04oFao2Q1Q1fbND9Qc\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 27442,
		"path": "../public/assets/corpse-arena-app-4-X8v3daX-.webp"
	},
	"/assets/nearhive-1-CnhUQ4k3.webp": {
		"type": "image/webp",
		"etag": "\"63cc-BQx/siu826J8mHAPDnjpywIToZM\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 25548,
		"path": "../public/assets/nearhive-1-CnhUQ4k3.webp"
	},
	"/assets/nearhive-2-CMcx75j4.webp": {
		"type": "image/webp",
		"etag": "\"6eee-6qf6saXU5xj3UqClk1tNH5j3RJU\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 28398,
		"path": "../public/assets/nearhive-2-CMcx75j4.webp"
	},
	"/assets/corpse-arena-app-3-Br5Tnok3.webp": {
		"type": "image/webp",
		"etag": "\"4958-oh7twjSryP/CGcNzKiAqMkq2r0s\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 18776,
		"path": "../public/assets/corpse-arena-app-3-Br5Tnok3.webp"
	},
	"/assets/models-realm-4lymVKgs.webp": {
		"type": "image/webp",
		"etag": "\"c62a-mMEvO5VMT3H34U1REtaSsGRGWlA\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 50730,
		"path": "../public/assets/models-realm-4lymVKgs.webp"
	},
	"/assets/routes-CD4XK5Yf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11c9e-ZupUnmxJJoSsfOIongUTx/nIvHE\"",
		"mtime": "2026-11-16T04:16:40.613Z",
		"size": 72862,
		"path": "../public/assets/routes-CD4XK5Yf.js"
	},
	"/assets/bola-3-BNb1-Mf8.webp": {
		"type": "image/webp",
		"etag": "\"54b4-c1Jfgda/2eEHBNupR+cBPJxhKqw\"",
		"mtime": "2026-11-16T04:16:40.613Z",
		"size": 21684,
		"path": "../public/assets/bola-3-BNb1-Mf8.webp"
	},
	"/assets/poolmate-icon-Bmxl6PzB.webp": {
		"type": "image/webp",
		"etag": "\"1a26-Bm1gkkTOrorzdiJsjTw+77gY6y0\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 6694,
		"path": "../public/assets/poolmate-icon-Bmxl6PzB.webp"
	},
	"/assets/nearhive-3-DW50yF4C.webp": {
		"type": "image/webp",
		"etag": "\"5250-up2nCGtLpBYho0T12nJTqdk/8bo\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 21072,
		"path": "../public/assets/nearhive-3-DW50yF4C.webp"
	},
	"/assets/grazia-jp-C_4bfO4Z.webp": {
		"type": "image/webp",
		"etag": "\"18348-CVoS9KaFar6zZmn+bVrMJ4rDMus\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 99144,
		"path": "../public/assets/grazia-jp-C_4bfO4Z.webp"
	},
	"/assets/bola-2-DErJ7UDb.webp": {
		"type": "image/webp",
		"etag": "\"513c-cedJK8sme88dr3Qg5XjTWZ3Qdgc\"",
		"mtime": "2026-11-16T04:16:40.613Z",
		"size": 20796,
		"path": "../public/assets/bola-2-DErJ7UDb.webp"
	},
	"/assets/corpse-arena-B4llA4ck.webp": {
		"type": "image/webp",
		"etag": "\"5156-tH7nf4GjPR8LSmKpjbWU08lFHo4\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 20822,
		"path": "../public/assets/corpse-arena-B4llA4ck.webp"
	},
	"/assets/corpse-arena-icon-eVdxF6hs.webp": {
		"type": "image/webp",
		"etag": "\"16a0-qOC0doPsmmS8dj/6zU9nCCzaBig\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 5792,
		"path": "../public/assets/corpse-arena-icon-eVdxF6hs.webp"
	},
	"/assets/bola-1-D_IFSUX0.webp": {
		"type": "image/webp",
		"etag": "\"c4a8-cPHH1d2480vlKbG5riGKXGcwTDw\"",
		"mtime": "2026-11-16T04:16:40.613Z",
		"size": 50344,
		"path": "../public/assets/bola-1-D_IFSUX0.webp"
	},
	"/assets/cosmopolitan-D1hvjKw-.webp": {
		"type": "image/webp",
		"etag": "\"10604-fuxKE/eJagwNIkqgEHH+dKKg5xI\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 67076,
		"path": "../public/assets/cosmopolitan-D1hvjKw-.webp"
	},
	"/assets/corpse-club-BkniT1Wy.webp": {
		"type": "image/webp",
		"etag": "\"6fce-KAGVrFTBjDP6GxzfPum8sFEKvwA\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 28622,
		"path": "../public/assets/corpse-club-BkniT1Wy.webp"
	},
	"/assets/index-Bd7liP-i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f0a6-G09qu9c72ykoHDtai+WqP2YEcLU\"",
		"mtime": "2026-11-16T04:16:40.613Z",
		"size": 454822,
		"path": "../public/assets/index-Bd7liP-i.js"
	},
	"/assets/encoders-pro-DlCzeKoM.webp": {
		"type": "image/webp",
		"etag": "\"a474-4nG48WRMANbgaecYOLGACD9vznQ\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 42100,
		"path": "../public/assets/encoders-pro-DlCzeKoM.webp"
	},
	"/assets/elle-BHbrsQof.webp": {
		"type": "image/webp",
		"etag": "\"90b2-+BUHQ4GNotIm06lNwFOSQMaQeqg\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 37042,
		"path": "../public/assets/elle-BHbrsQof.webp"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"10be-yna60ti0eWmEd/2jeJpjvtqQxBg\"",
		"mtime": "2026-11-16T04:09:29.998Z",
		"size": 4286,
		"path": "../public/favicon.ico"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"36e-fKHyAkJTCGVXY0HqytqzEbQZdy8\"",
		"mtime": "2026-11-16T04:02:11.491Z",
		"size": 878,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-16T02:49:04.684Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/uae-ceo-D9d-wsjA.webp": {
		"type": "image/webp",
		"etag": "\"19816-d4SRfW8wRbpaCmK3Afb1ARr6EdY\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 104470,
		"path": "../public/assets/uae-ceo-D9d-wsjA.webp"
	},
	"/assets/styles-fDBw_o8K.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"166f4-hwrIPI8H4W25YAGohaFI0FNYtAQ\"",
		"mtime": "2026-11-16T04:16:40.626Z",
		"size": 91892,
		"path": "../public/assets/styles-fDBw_o8K.css"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"e45f0-X5TX6Ih2snRt7YoFNZx0nF3wVjI\"",
		"mtime": "2026-11-16T04:06:46.227Z",
		"size": 935408,
		"path": "../public/logo.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_qYWEo6 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_qYWEo6
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

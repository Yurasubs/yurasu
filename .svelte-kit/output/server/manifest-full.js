export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.968d7fa6.js","app":"_app/immutable/entry/app.50b4fad0.js","imports":["_app/immutable/entry/start.968d7fa6.js","_app/immutable/chunks/index.7d24636c.js","_app/immutable/chunks/singletons.2141da68.js","_app/immutable/entry/app.50b4fad0.js","_app/immutable/chunks/index.7d24636c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: () => import('./entries/endpoints/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

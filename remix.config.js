/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	// ignoredRouteFiles: ["**/.*"],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "build/index.js",
	// publicPath: "/build/",
	serverModuleFormat: "cjs",
	future: {
		v2_routeConvention: true,
		v2_errorBoundary: true,
		v2_headers: true,
		v2_meta: true,
		v2_normalizeFormMethod: true
	},
};


exports.routes = async (defineRoutes) => {
	return defineRoutes((route) => {
		// A common use for this is catchall routes.
		// - The first argument is the React Router path to match against
		// - The second is the relative filename of the route handler
		route('/fAkePI/$action', 'api.$action.tsx');
	})
};

// EOF!

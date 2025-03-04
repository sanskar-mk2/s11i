const Ziggy = {
    url: "http://l12-explore.test",
    port: null,
    defaults: {},
    routes: {
        "auth.show": { uri: "login", methods: ["GET", "HEAD"] },
        login: { uri: "login", methods: ["POST"] },
        "storage.local": {
            uri: "storage/{path}",
            methods: ["GET", "HEAD"],
            wheres: { path: ".*" },
            parameters: ["path"],
        },
    },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };

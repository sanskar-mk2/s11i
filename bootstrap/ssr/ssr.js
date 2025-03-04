import { inject, unref, useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, onMounted, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { useForm, Head, Link, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$5 = {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    inject("route");
    const form = useForm({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<div class="flex items-center justify-center h-screen"><div class="w-full max-w-md"><form class="flex flex-col gap-4"><fieldset class="fieldset bg-base-200 border border-base-300 p-4"><legend class="fieldset-legend">Login</legend><div class="space-y-4"><div><input${ssrRenderAttr("value", unref(form).email)} type="email" class="input w-full" placeholder="Email" required>`);
      if (unref(form).errors.email) {
        _push(`<p class="text-error">${ssrInterpolate(unref(form).errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><input${ssrRenderAttr("value", unref(form).password)} type="password" class="input w-full" placeholder="Password" required>`);
      if (unref(form).errors.password) {
        _push(`<p class="text-error">${ssrInterpolate(unref(form).errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><p class="fieldset-label"> Please enter your credentials to access your account </p><div class="flex justify-end mt-4"><button class="btn btn-primary" type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>${ssrInterpolate(unref(form).processing ? "Logging in..." : "Login")}</button></div></fieldset></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Show.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const route = inject("route");
    const form = useForm({
      title: "",
      content: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Note" }, null, _parent));
      _push(`<div class="container mx-auto p-4"><div class="max-w-2xl mx-auto"><form class="space-y-6"><fieldset class="fieldset bg-base-200 border border-base-300 p-4"><legend class="fieldset-legend">Create Note</legend><div class="space-y-4"><div><label class="label">Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="input w-full" required>`);
      if (unref(form).errors.title) {
        _push(`<p class="text-error mt-1">${ssrInterpolate(unref(form).errors.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label">Content</label><textarea class="textarea w-full h-32" required>${ssrInterpolate(unref(form).content)}</textarea>`);
      if (unref(form).errors.content) {
        _push(`<p class="text-error mt-1">${ssrInterpolate(unref(form).errors.content)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex justify-end gap-2 mt-6">`);
      _push(ssrRenderComponent(_component_Link, {
        href: unref(route)("notes.index"),
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel `);
          } else {
            return [
              createTextVNode(" Cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>${ssrInterpolate(unref(form).processing ? "Creating..." : "Create Note")}</button></div></fieldset></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Create.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const route = inject("route");
    const props = __props;
    const form = useForm({
      title: props.note.title,
      content: props.note.content
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Note" }, null, _parent));
      _push(`<div class="container mx-auto p-4"><div class="max-w-2xl mx-auto"><form class="space-y-6"><fieldset class="fieldset bg-base-200 border border-base-300 p-4"><legend class="fieldset-legend">Edit Note</legend><div class="space-y-4"><div><label class="label">Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="input w-full" required>`);
      if (unref(form).errors.title) {
        _push(`<p class="text-error mt-1">${ssrInterpolate(unref(form).errors.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label">Content</label><textarea class="textarea w-full h-32" required>${ssrInterpolate(unref(form).content)}</textarea>`);
      if (unref(form).errors.content) {
        _push(`<p class="text-error mt-1">${ssrInterpolate(unref(form).errors.content)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex justify-end gap-2 mt-6">`);
      _push(ssrRenderComponent(_component_Link, {
        href: unref(route)("notes.show", props.note.id),
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel `);
          } else {
            return [
              createTextVNode(" Cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>${ssrInterpolate(unref(form).processing ? "Saving..." : "Save Changes")}</button></div></fieldset></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Edit.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const route = inject("route");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Notes" }, null, _parent));
      _push(`<div class="container mx-auto p-4"><div class="flex justify-between items-center mb-6"><h1 class="text-2xl font-bold">Notes</h1>`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("notes.create"),
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create Note `);
          } else {
            return [
              createTextVNode(" Create Note ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="overflow-x-auto"><table class="table w-full"><thead><tr><th>Title</th><th>Created</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.notes, (note) => {
        _push(`<tr><td>`);
        _push(ssrRenderComponent(unref(Link), {
          href: unref(route)("notes.show", note.id),
          class: "hover:text-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(note.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(note.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td>${ssrInterpolate(note.created_at)}</td><td class="space-x-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: unref(route)("notes.edit", note.id),
          class: "btn btn-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit `);
            } else {
              return [
                createTextVNode(" Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: unref(route)("notes.destroy", note.id),
          method: "delete",
          as: "button",
          class: "btn btn-sm btn-error"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Delete `);
            } else {
              return [
                createTextVNode(" Delete ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const route = inject("route");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.note.title
      }, null, _parent));
      _push(`<div class="container mx-auto p-4"><div class="max-w-2xl mx-auto"><div class="mb-6 flex justify-between items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("notes.index"),
        class: "btn btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-2"${_scopeId}>←</span> Back to Notes `);
          } else {
            return [
              createVNode("span", { class: "mr-2" }, "←"),
              createTextVNode(" Back to Notes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("notes.edit", __props.note.id),
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Edit Note `);
          } else {
            return [
              createTextVNode(" Edit Note ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("notes.destroy", __props.note.id),
        method: "delete",
        as: "button",
        class: "btn btn-error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete `);
          } else {
            return [
              createTextVNode(" Delete ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="prose max-w-none"><h1>${ssrInterpolate(__props.note.title)}</h1><div class="text-sm text-base-content/70"> Created: ${ssrInterpolate(__props.note.created_at)} `);
      if (__props.note.updated_at !== __props.note.created_at) {
        _push(`<span> | Updated: ${ssrInterpolate(__props.note.updated_at)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 whitespace-pre-wrap">${ssrInterpolate(__props.note.content)}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      console.log(props.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0"><main class="prose flex max-w-[335px] w-full flex-col-reverse lg:max-w-4xl lg:flex-row"><div>${__props.value ?? ""}</div></main></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Show.vue": __vite_glob_0_0, "./Pages/Notes/Create.vue": __vite_glob_0_1, "./Pages/Notes/Edit.vue": __vite_glob_0_2, "./Pages/Notes/Index.vue": __vite_glob_0_3, "./Pages/Notes/Show.vue": __vite_glob_0_4, "./Pages/Welcome.vue": __vite_glob_0_5 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);

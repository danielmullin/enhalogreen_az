var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/danielmullin/inShore/I024/I024-enhalo-green-mvp/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/danielmullin/inShore/I024/I024-enhalo-green-mvp/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/content/account-transactions.json
var require_account_transactions = __commonJS({
  "app/content/account-transactions.json"(exports, module2) {
    module2.exports = {
      h1: "Transactions",
      p: [
        "EnhaloGreen develops and shares digital tools that deliver agility and credibility to carbon initiatives, and build confidence in the carbon ecosystem.",
        "Our complete carbon solution gives users anywhere in the world \u2013 from governments and corporates to landowners, charities and individuals \u2013 transparency, accountability and compliance."
      ]
    };
  }
});

// app/routes/qrcodes.transactions.$uuid.tsx
var require_qrcodes_transactions_uuid = __commonJS({
  "app/routes/qrcodes.transactions.$uuid.tsx"() {
    "use strict";
  }
});

// app/content/cart.json
var require_cart = __commonJS({
  "app/content/cart.json"(exports, module2) {
    module2.exports = {
      h1: "Order details",
      p: [
        ""
      ]
    };
  }
});

// app/content/offset-products.json
var require_offset_products = __commonJS({
  "app/content/offset-products.json"(exports, module2) {
    module2.exports = {
      cta: {
        next: "Next"
      },
      h1: "Offset Your Products",
      p: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      ]
    };
  }
});

// app/routes/cart.success.tsx
var require_cart_success = __commonJS({
  "app/routes/cart.success.tsx"() {
    "use strict";
  }
});

// app/routes/cart.error.tsx
var require_cart_error = __commonJS({
  "app/routes/cart.error.tsx"() {
    "use strict";
  }
});

// app/content/projects.json
var require_projects = __commonJS({
  "app/content/projects.json"(exports, module2) {
    module2.exports = {
      cta: {
        offsetYourProducts: "Offset Your Products",
        offsetYourCarbon: "Offset Your Carbon"
      },
      h1: "Offset Project",
      p: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit vel libero et mollis. Sed sit amet neque dignissim, viverra magna non, blandit ipsum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit vel libero et mollis. Sed sit amet neque dignissim, viverra magna non, blandit ipsum."
      ]
    };
  }
});

// app/content/account.json
var require_account = __commonJS({
  "app/content/account.json"(exports, module2) {
    module2.exports = {
      h1: "Account"
    };
  }
});

// app/routes/login.tsx
var require_login = __commonJS({
  "app/routes/login.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_react4 = require("@remix-run/react");

// app/components/Footer.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("footer", { className: "bg-black text-base text-white fixed bottom-0 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-960 m-auto flex-wrap justify-between sm:flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { id: "id", className: "flex px-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { id: "id", className: "mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "https://twitter.com/", className: "nav-link", children: "Twitter" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { id: "menu-item-91", className: "", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "https://www.linkedin.com/", className: "nav-link", children: "Linkedin" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "pb-8 sm:py-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { id: "menu-terms-links", className: "px-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { id: "menu-item-179", className: "class", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "https://enhalogreen.com/privacy-policy/", "aria-current": "page", children: "Privacy Policy & Terms of Use" }) }) }) })
  ] }) });
}

// app/components/Header.tsx
var import_react3 = require("@remix-run/react");

// app/images/enhalo_green_logo.png
var enhalo_green_logo_default = "/build/_assets/enhalo_green_logo-7QPTPIF4.png";

// app/components/Header.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Header(props) {
  let { routeId } = props, headerClass = "opacity-80 w-full text-white sm:bg-transparent", headerNav = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sm:hidden", children: "HMBGR" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "hidden text-2.5xl sm:flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/#about", className: "mr-8", children: "About" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/contact-us", children: "Contact Us" })
    ] })
  ] });
  return ["routes/projects", "routes/account", "routes/cart", "routes/contact-us", "routes/offset-products", "routes/accounts.$contactId", "routes/accounts_.$contactId.transactions", "routes/accounts_.$contactId.transactions_.$transactionId"].includes(routeId) && (headerClass = "bg-image"), ["routes/qrcodes/products"].includes(routeId) && (headerNav = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {})), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: `mb-8 ${headerClass}`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-h-[10vh] px-8 flex items-center justify-between sm:justify-between sm:max-w-screen-lg sm:m-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-44", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: enhalo_green_logo_default, alt: "" }) }) }),
    headerNav
  ] }) });
}

// app/images/infinity_green.png
var infinity_green_default = "/build/_assets/infinity_green-ZMFQTTRC.png";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EVLLT2LN.css";

// app/styles/styles.css
var styles_default = "/build/_assets/styles-G542KLJ7.css";

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), links = () => [
  { rel: "icon", href: "/_static/favicon.ico" },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: styles_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => [];
function App() {
  let matches = (0, import_react4.useMatches)(), { id } = matches[matches.length - 1], isIndex = ["routes/_index"].includes(id);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", className: "relative overflow-x-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "msapplication-TileColor", content: "#ffffff" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { className: isIndex ? "text-light-black font-Noto Sans overflow-x-hidden relative min-h-screen w-full bg-background-white" : "text-light-black font-Noto Sans overflow-x-hidden relative min-h-screen w-full bg-background-teal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: infinity_green_default, alt: "", className: "absolute  opacity-50 max-w-[700%] top-[-60px] left-[-275px] overflow-x-hidden -z-10 sm:max-w-[2000px] sm:top-0 sm:left-[100px] max-h-[130vh] sm:max-h-full" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Header, { routeId: id }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}

// app/routes/accounts_.$contactUuid.transactions_.$transactionUuid.tsx
var accounts_contactUuid_transactions_transactionUuid_exports = {};
__export(accounts_contactUuid_transactions_transactionUuid_exports, {
  default: () => AccountTransaction,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");

// app/helpers/api.ts
var api = {
  base: process.env.API_BASE,
  key: process.env.API_KEY,
  path: process.env.API_PATH,
  port: process.env.API_PORT === "80" ? "" : `:${process.env.API_PORT}`,
  protocol: process.env.API_PROTOCOL
};

// app/models/offsetProduct.ts
async function list() {
  return console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`), (await (await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json()).map((item) => ({
    uuid: String(item.productid),
    name: String(item.name),
    units: Number(item.offsetunits)
  }));
}

// app/models/transaction.ts
async function create(contact, products, productUuid) {
  let transaction2 = {
    contact,
    products,
    productUuid
  };
  return {
    contact: {
      emailAddress: "email@danielmullin.com",
      contactId: "82f853b8-69d6-402f-98d4-e5219e75fd0a"
    },
    // amount: 1000, // new_amount this was costß
    // hard codedcurrency: 'GBP',
    // projectId: '82f853b8-69d6-402f-98d4-e5219e75fd0a' // tbc
    products: 100,
    productId: "82f853b8-69d6-402f-98d4-e5219e75fd0a",
    secret: "1234567890987654321",
    transactionId: "82f853b8-69d6-402f-98d4-e5219e75fd0a"
  };
}
async function list2(accountUuid) {
  return console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=qkdb8rPAQglW6bOt56DJ1sDs0Q-zWfbeN-bvK4Py0Ia1AzFucAaJIw==`), (await (await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=qkdb8rPAQglW6bOt56DJ1sDs0Q-zWfbeN-bvK4Py0Ia1AzFucAaJIw==`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json()).map((item) => ({
    name: `${item.quantity} x ${item.productId.name}`,
    product: {
      name: item.productId.name
    },
    quantity: item.quantity,
    uuid: String(item.transactionId)
  }));
}
async function retrieve(uuid2) {
  let data = await (await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Transaction?code=${api.key}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json();
  console.log(data);
  let transaction2 = data.find((transaction3) => transaction3.transactionId == uuid2), offsetProducts = await list();
  return transaction2.product = offsetProducts.find((product) => product.uuid === transaction2.productId.id), transaction2;
}

// app/images/qrcode.svg
var qrcode_default = "/build/_assets/qrcode-2AYDRDBO.svg";

// app/images/qrcodes.svg
var qrcodes_default = "/build/_assets/qrcodes-6OC7ZRE7.svg";

// app/routes/accounts_.$contactUuid.transactions_.$transactionUuid.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), loader2 = async ({ params }) => {
  let transaction2 = await retrieve(params.transactionUuid);
  console.log(transaction2);
  let transactionProducts = [];
  for (let i = 1; i < transaction2.quantity + 1; i++)
    transactionProducts.push({
      name: transaction2.product.name,
      productUuid: transaction2.productId.id,
      sequence: i,
      transactionUuid: transaction2.transactionId,
      units: transaction2.productId.units
    });
  return {
    transaction: transaction2,
    transactionProducts
  };
};
function AccountTransaction() {
  let { transaction: transaction2, transactionProducts } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "px-8 sm:max-w-screen-lg sm:mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h1", { className: "text-3xl leading-none", children: [
      transaction2.project.name,
      " ",
      transaction2.quantity,
      " ",
      transaction2.product.name
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pt-2 flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: transaction2.project.name }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
          transaction2.product.name,
          " ",
          transaction2.quantity
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: `/qrcodes?productName=${transaction2.productId.name}&productUuid=${transaction2.productId.id}&quantity=${transaction2.quantity}&transactionUuid=${transaction2.transactionId}&units=${transaction2.product.units}`, download: `/qrcodes?productName=${transaction2.productId.name}&productUuid=${transaction2.productId.productUuid}&quantity=${transaction2.quantity}&transactionUuid=${transaction2.uuid}&units=${transaction2.product.units}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: qrcodes_default, className: "mb-2" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { children: transactionProducts.map((transactionProduct) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex justify-between items-center sm:text-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: transactionProduct.name }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        transactionProduct.sequence,
        " of ",
        transaction2.quantity
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: `/qrcode?sequence=${transactionProduct.sequence}&transactionUuid=${transactionProduct.transactionUuid}&units=${transactionProduct.units}&productUuid=${transactionProduct.productUuid}`, download: `/qrcode?sequence=${transactionProduct.sequence}&transactionUuid=${transactionProduct.transactionUuid}&units=${transactionProduct.units}&uuid=${transactionProduct.productUuid}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: qrcode_default, className: "mb-2" }) }) })
    ] })) })
  ] });
}

// app/routes/accounts_.$contactUuid.transactions.tsx
var accounts_contactUuid_transactions_exports = {};
__export(accounts_contactUuid_transactions_exports, {
  default: () => AccountTransactions,
  loader: () => loader3
});
var import_react7 = require("@remix-run/react");

// app/components/AccountTransaction.tsx
var import_react6 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), AccountTransaction2 = (props) => {
  let { contactUuid, name, uuid: uuid2 } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Link, { to: `/accounts/${contactUuid}/transactions/${uuid2}`, children: name }) });
}, AccountTransaction_default = AccountTransaction2;

// app/routes/accounts_.$contactUuid.transactions.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), loader3 = async ({ params }) => {
  let contactUuid = params.contactUuid, transactions = await list2(contactUuid);
  return {
    contactUuid,
    transactions
  };
};
function AccountTransactions() {
  let { contactUuid, transactions } = (0, import_react7.useLoaderData)(), content = require_account_transactions();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "px-8 sm:max-w-screen-lg sm:mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "mb-8 text-3xl leading-none", children: content.h1 }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { children: transactions.map((transaction2) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AccountTransaction_default, { contactUuid, name: transaction2.name, uuid: transaction2.uuid }, transaction2.uuid)) })
  ] });
}

// app/routes/offset-products-transaction.tsx
var offset_products_transaction_exports = {};
__export(offset_products_transaction_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node"), import_node3 = require("@remix-run/node");

// app/helpers/validateEmailAddress.ts
function validateEmailAddress(emailAddress) {
  return !!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailAddress);
}

// app/routes/offset-products-transaction.tsx
async function action({ params, request }) {
  let data = await request.formData(), contactUuid = String(data.get("contactUuid")), emailAddress = String(data.get("emailAddress")), numberOfProducts = Number(data.get("numberOfProducts")), productUuid = String(data.get("productUuid")), contact = {
    emailAddress,
    uuid: contactUuid
  };
  switch (request.method) {
    case "POST":
      try {
        if (!validateEmailAddress(emailAddress))
          return (0, import_node3.json)({ error: "Invalid Email Address", errorInput: "", status: 422 }, 422);
        if (numberOfProducts < 1)
          return (0, import_node3.json)({ error: "Number of products must be greater than 0", errorInput: "", status: 422 }, 422);
        if (!productUuid)
          return (0, import_node3.json)({ error: "Please select a product", errorInput: "", status: 422 }, 422);
        let transaction2 = await create(contact, numberOfProducts, productUuid);
        return (0, import_node2.redirect)(`/cart/${transaction2.uuid}`);
      } catch (error) {
        return (0, import_node3.json)({ error: error.message, ok: !1 }, 500);
      }
  }
  return (0, import_node3.json)({ message: "Method not allowed", ok: !0 }, 405);
}

// server-entry-module:@remix-run/dev/server-build
var route4 = __toESM(require_qrcodes_transactions_uuid());

// app/routes/qrcodes.products.$data.tsx
var qrcodes_products_data_exports = {};
__export(qrcodes_products_data_exports, {
  action: () => action2,
  default: () => Product,
  loader: () => loader4
});
var import_react10 = require("@remix-run/react"), import_react11 = require("@remix-run/react");

// app/models/transactionProduct.ts
async function retrieve2(uuid2) {
  return (await (await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/OffsetProduct?code=${api.key}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json()).find((product2) => product2.productid == uuid2);
}

// app/components/Block.tsx
var import_react8 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime"), Block = (props) => {
  let { allocation, opacity, units } = props, opacityClass = opacity;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: allocation == "green" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `bg-block-green w-3u h-3u m-2 opacity-${opacityClass}` }) : allocation == "gold" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react8.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { type: "submit", className: `bg-block-gold w-${units}u h-${units}u m-2 opacity-${opacityClass} flex` }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { id: "blockDetailShow", name: "blockDetailShow", type: "hidden", value: "true" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `bg-block-grey w-${units}u h-${units}u m-2 opacity-${opacityClass}` }) });
}, Block_default = Block;

// app/components/BlockDetail.tsx
var import_react9 = require("@remix-run/react");

// app/components/Button.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), Button = (props) => {
  let { text, type } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type, className: "bg-white text-button-green text-xl px-3 py-2 rounded-half w-full", children: text });
}, Button_default = Button;

// app/components/BlockDetail.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), BlockDetail = (props) => {
  let { name, quantity, sequence, units } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react9.Form, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "w-40 h-40 bg-white bg-opacity-70 absolute top-[calc(10vh+2.5rem)] left-[calc(50vw-5rem)] text-center p-4 flex justify-between flex-col sm:w-80", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: name }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
        sequence,
        "/",
        quantity
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "Units" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: units })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button_default, { type: "submit", text: "Close" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { id: "blockDetailShow", name: "blockDetailShow", type: "hidden", value: "false" })
    ] })
  ] }) });
}, BlockDetail_default = BlockDetail;

// app/components/ProductVisualisation.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), ProductVisualisation = (props) => {
  let { blockShow, error, name, quantity, sequence, units } = props, opacity = 100;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-wrap px-8", children: [
    Array.from(
      { length: 1e3 / units },
      (_, index) => (
        // index + 1 < sequence && index < 5 ? (
        //   //less than begin, green
        //   <>
        //     <Block allocation={"green"} opacity={30} units={units}></Block>
        //   </>
        // ) :
        index + 1 < sequence ? (
          //less than begin, green
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Block_default, { allocation: "green", opacity, units }) })
        ) : (
          //in between begin + units, gold
          index + 1 == sequence ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Block_default, { allocation: "gold", opacity, units }) }) : (
            //above begin+units
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Block_default, { allocation: "grey", opacity, units }) })
          )
        )
      )
    ),
    blockShow ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlockDetail_default, { name, quantity, sequence, units }) : null
  ] }) });
}, ProductVisualisation_default = ProductVisualisation;

// app/images/enhalo_forest.jpg
var enhalo_forest_default = "/build/_assets/enhalo_forest-RA5WC6SF.jpg";

// app/routes/qrcodes.products.$data.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), loader4 = async ({ params }) => {
  let data = await JSON.parse(atob(params.data)), product = await retrieve2(data.productUuid), transaction2 = await retrieve(data.transactionUuid);
  console.log(transaction2), console.log(product), console.log(data);
  let name = product.name, quantity = transaction2.quantity, sequence = data.sequence, units = data.units;
  return {
    error: transaction2.product.units != product.offsetunits,
    name,
    quantity,
    sequence,
    units
  };
};
async function action2({ params, request }) {
  return { blockDetail: (await request.formData()).get("blockDetailShow") };
}
function Product() {
  let actionData = (0, import_react10.useActionData)(), { error, name, quantity, sequence, units } = (0, import_react11.useLoaderData)(), blockShow = !1;
  return actionData !== void 0 && (blockShow = actionData.blockDetail), /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    error ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "absolute top-[calc(50vh-5rem)] z-30 flex justify-center items-center bg-error-red h-40 w-full text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "w-10 h-10 bg-red-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-white font-bold text-lg", children: "X" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "Something went wrong" })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: enhalo_forest_default, className: (error ? "grayscale" : null) + " absolute h-[100vh] -z-20 top-0 object-cover sm:w-full" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: (error ? "grayscale" : null) + " sm:max-w-screen-lg sm:mx-auto sm:h-full", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProductVisualisation_default, { blockShow, error, name, quantity, sequence, total: 1e3, units }) })
  ] });
}

// app/routes/cart.$transactionUuid.tsx
var cart_transactionUuid_exports = {};
__export(cart_transactionUuid_exports, {
  default: () => Cart,
  loader: () => loader5
});

// app/components/Cta.tsx
var import_react12 = require("@remix-run/react"), import_jsx_runtime13 = require("react/jsx-runtime"), Cta = (props) => {
  let { linkTo, text } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react12.Link, { to: linkTo, className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { className: "bg-white text-button-green z-10 relative text-xl px-3 py-2 max-w-430 rounded-half w-full sm:py-4", children: text }) });
}, Cta_default = Cta;

// app/routes/cart.$transactionUuid.tsx
var import_react13 = require("@remix-run/react"), import_react_paypal_js = require("@paypal/react-paypal-js");
var import_jsx_runtime14 = require("react/jsx-runtime"), ButtonWrapper = ({ showSpinner }) => {
  let [{ isPending }] = (0, import_react_paypal_js.usePayPalScriptReducer)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    showSpinner && isPending && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "spinner" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_react_paypal_js.PayPalButtons,
      {
        style,
        disabled: !1,
        forceReRender: [style],
        fundingSource: void 0,
        createOrder,
        onApprove
      }
    )
  ] });
}, style = { layout: "vertical" };
function createOrder() {
  return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // use the "body" param to optionally pass additional order information
    // like product ids and quantities
    body: JSON.stringify({
      cart: [
        {
          sku: "1blwyeo8",
          quantity: 2
        }
      ]
    })
  }).then((response) => response.json()).then((order) => order.id);
}
function onApprove(data) {
  return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      orderID: data.orderID
    })
  }).then((response) => response.json()).then((orderData) => {
  });
}
var loader5 = async ({ params, request }) => ({
  transaction: await retrieve(params.transactionUuid)
});
function Cart() {
  let content = require_cart(), { transaction: transaction2 } = (0, import_react13.useLoaderData)();
  return console.log(transaction2), /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-background-teal text-light-black min-h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "px-8 sm:max-w-screen-lg sm:mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "mb-4 sm:max-w-screen-lg sm:mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "pt-20", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "text-3xl leading-none mb-6 sm:mb-8", children: content.h1 }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "bg-white bg-opacity-20 rounded-xl px-8 py-8 mb-8 sm:max-w-screen-lg sm:mx-auto text-xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: " w-1/3", children: transaction2.product.name }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: " w-1/3 text-center", children: "x" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: " w-1/3 text-right", children: transaction2.products })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex bg-white bg-opacity-50 py-4 mb-24 rounded-md", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: " w-full text-center", children: [
        transaction2.tonnes,
        " tonnes of carbon"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "my-8 border-b-2 border-green-underline" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: "Total cost" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { children: [
          "\xA3",
          transaction2.cost
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "w-3/5 mx-auto mb-8 flex justify-center sm:max-w-screen-lg sm:mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Cta_default, { linkTo: "/success", text: "Pay now" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "sm:max-w-screen-md sm:mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_paypal_js.PayPalScriptProvider, { options: { clientId: "test", components: "buttons", currency: "USD" }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ButtonWrapper, { showSpinner: !1 }) }) })
  ] }) });
}

// app/routes/offset-products.tsx
var offset_products_exports = {};
__export(offset_products_exports, {
  default: () => OffsetProducts2,
  loader: () => loader6
});
var import_react15 = require("@remix-run/react");

// app/models/subProject.ts
async function list3() {
  return console.log(`${api.protocol}://${api.base}${api.port}/${api.path}/Project?code=${api.key}`), (await (await fetch(`${api.protocol}://${api.base}${api.port}/${api.path}/Project?code=$https://carbonregistrytransaction.azurewebsites.net/api/Project?code=nnEJyQ7YYeS6Bo--53PhK1T5KJW3gOL-wHGKxfL3gmcvAzFuPAEKBQ==`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json()).map((item) => ({
    name: String(item.name),
    tonCost: {
      value: Number(item.toncost.value)
    },
    uuid: String(item.subprojectid)
  }));
}
async function retrieve3(subProjectId) {
  return {
    tonCost: {
      value: 50
    },
    name: "MVP Project",
    subProjectId: "68d9e429-3cae-4e09-ab90-cc40cc54142c"
  };
}

// app/components/OffsetProductsForm.tsx
var import_react14 = require("@remix-run/react");

// app/helpers/validateNumberOfProducts.ts
function validateNumberOfProducts(numberOfProducts) {
  return !!(Number.isInteger(numberOfProducts) && numberOfProducts > 0);
}

// app/components/OffsetProductsForm.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function OffsetProducts(props) {
  let fetcher = (0, import_react14.useFetcher)(), { contact, content, offsetProducts, subProject } = props, errors = {
    emailAddress: !1,
    numberOfProucts: !1,
    productUuid: !1
  }, optimisticEmailAddress = "", optimisticNumberOfProducts = 0, optimisticOffsetProductUuid = "";
  return fetcher.formData && (optimisticEmailAddress = String(fetcher.formData.get("emailAddress")), optimisticNumberOfProducts = Number(fetcher.formData.get("numberOfProducts")), optimisticOffsetProductUuid = String(fetcher.formData.get("offSetProductUuid")), errors.emailAddress = validateEmailAddress(optimisticEmailAddress), errors.numberOfProucts = validateNumberOfProducts(optimisticNumberOfProducts)), console.log(subProject), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    fetcher.Form,
    {
      action: "/offset-products-transaction",
      className: "w-full flex flex-wrap sm:max-w-screen-lg sm:mx-auto sm:items-end",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { name: "accountUuid", type: "hidden", defaultValue: contact.uuid }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { name: "accountUuid", type: "hidden", defaultValue: contact.emailAddress }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex sm:w-5/12", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "mb-8 pl-1 sm:mb-0 sm:mr-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "{ errors.emailAddress ? 'text-red' }", children: "Email Address" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "input",
            {
              className: "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none",
              defaultValue: optimisticEmailAddress,
              id: "labelValue",
              name: "emailAddress",
              type: "text"
            }
          )
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-2xl leading-tight font-light mb-4 sm:w-1/2 sm:mr-2", children: content.p[1] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex mb-8 sm:w-5/12 sm:mb-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8/12 mr-2 sm:mr-0", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "pl-1 sm:mr-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { children: "Offset Product" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "select",
              {
                className: "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none",
                defaultValue: optimisticOffsetProductUuid,
                id: "productUuid",
                name: "productUuid",
                placeholder: "Product",
                children: offsetProducts.map((product) => {
                  let productCost = subProject.tonCost.value / 1e3 * product.units;
                  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: product.uuid, children: `${product.name} (GBP ${productCost.toFixed(2)})` }, product.uuid);
                })
              }
            )
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-4/12 ml-2 sm:ml-0", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "pl-1 sm:mr-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { children: "Quantity" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "input",
              {
                className: (fetcher.state === "submitting", "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none"),
                defaultValue: optimisticNumberOfProducts,
                id: "labelValue",
                name: "numberOfProducts",
                type: "text"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-full text-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button_default, { text: content.cta.next, type: "submit" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "hidden sm:flex sm:w-2/12 sm:h-14", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button_default, { text: content.cta.next, type: "submit" }) })
      ]
    }
  ) });
}

// app/routes/offset-products.tsx
var import_jsx_runtime16 = require("react/jsx-runtime"), loader6 = async ({ params, request }) => {
  let offsetProducts = await list(), subProject = await retrieve3(params.subProjectId);
  return {
    contact: {
      emailAddress: "email@danielmullin.com",
      uuid: "0ba59923-0efb-4ea2-a3f5-cccb551bfc6b"
    },
    offsetProducts,
    subProject
  };
};
function OffsetProducts2() {
  let { contact, offsetProducts, subProject } = (0, import_react15.useLoaderData)(), content = require_offset_products();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "px-8 sm:max-w-screen-lg sm:mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "mb-8 text-3xl leading-none ", children: content.h1 }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-2xl leading-tight font-light mb-4 sm:w-1/2 sm:mr-2", children: content.p[0] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(OffsetProducts, { contact, content, subProject, offsetProducts })
  ] });
}

// app/routes/account-update.tsx
var account_update_exports = {};
__export(account_update_exports, {
  action: () => action3
});
var import_node4 = require("@remix-run/node");

// app/models/account.model.ts
async function retrieve4(uuid2, username, password) {
  if (uuid2 !== null)
    return {
      accountid: 1,
      contact: {
        emailAddress: "email@danielmullin.com",
        firstName: "Daniel",
        lastName: "Mullin",
        phoneNumber: "447789747079"
      },
      username: "enhalogreen",
      uuid: "9f7bde77-4bce-4694-960c-60aed6b33000"
    };
  let json5 = await (await fetch(`${api.protocol}://${api.base}${api.port}/accounts/?username=${username}&password=${password}`, {
    method: "GET",
    body: JSON.stringify(account),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })).json();
}
async function update(emailAddress, uuid2) {
  return {
    accountid: 1,
    contact: {
      emailAddress: "email@danielmullins.com",
      firstName: "Daniels",
      lastName: "Mullins",
      phoneNumber: "447789747079"
    },
    username: "enhalogreen",
    uuid: "9f7bde77-4bce-4694-960c-60aed6b33000"
  };
}

// app/routes/account-update.tsx
async function action3({ params, request }) {
  let data = await request.formData(), emailAddress = data.get("emailAddress"), edit = data.get("edit"), firstName = data.get("firstName"), lastName = data.get("lastName"), uuid2 = data.get("uuid");
  switch (request.method) {
    case "POST":
      try {
        let patch = await update(emailAddress, uuid2);
        return 200;
      } catch (error) {
        return console.log("error"), (0, import_node4.json)({ message: error.message, ok: !1 }, 500);
      }
  }
  return (0, import_node4.json)({ message: "Method not allowed", ok: !0 }, 405);
}

// app/routes/fAkePI.$action.tsx
var fAkePI_action_exports = {};
__export(fAkePI_action_exports, {
  loader: () => loader7
});
var import_node5 = require("@remix-run/node");
async function loader7({ params, request }) {
  let transactionUuid = new URL(request.url).searchParams.get("transactionUuid") ?? null, response = {
    OffsetProduct: [
      {
        productid: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
        name: "Coffee",
        offsetunits: 3
      },
      {
        productid: "8ef575a9-fe3f-ee11-bdf3-000d3ad4d529",
        name: "Jsy-London flight",
        offsetunits: 500
      },
      {
        productid: "aaa8ddbb-fe3f-ee11-bdf3-000d3ad4d529",
        name: "Washing Maching",
        offsetunits: 350
      }
    ],
    Project: [
      {
        subprojectid: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
        name: "MVP Project",
        carbonavailable: 100,
        toncost: {
          value: 50
        }
      },
      {
        subprojectid: "0878da95-dfb6-ed11-b596-00224801935c",
        name: "BioChar Machine Test",
        carbonavailable: 10,
        toncost: {
          value: 10
        }
      },
      {
        subprojectid: "e6f67f63-3ba3-ed11-aad0-6045bdf1d6af",
        name: "Jersey Test Subproject 1",
        carbonavailable: 20,
        toncost: {
          value: 10
        }
      }
    ],
    Transaction: [
      {
        transactionId: "a9ace233-0149-ee11-be6f-000d3ad4d529",
        productId: {
          id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
          logicalName: "new_offsetproducts",
          name: "Coffee",
          keyAttributes: [],
          rowVersion: null
        },
        quantity: 100,
        totalCarbon: 1,
        contact: {
          id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529",
          logicalName: "contact",
          name: "Christos Valerkou",
          keyAttributes: [],
          rowVersion: null
        },
        project: {
          id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
          logicalName: "cr93c_subproject",
          name: "MVP Project",
          keyAttributes: [],
          rowVersion: null
        },
        transactionDate: null
      },
      {
        transactionId: "c8225370-b749-ee11-be6f-000d3ad4d529",
        productId: {
          id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
          logicalName: "new_offsetproducts",
          name: "Coffee",
          keyAttributes: [],
          rowVersion: null
        },
        quantity: 300,
        totalCarbon: 1,
        contact: {
          id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529",
          logicalName: "contact",
          name: "Christos Valerkou",
          keyAttributes: [],
          rowVersion: null
        },
        project: {
          id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
          logicalName: "cr93c_subproject",
          name: "MVP Project",
          keyAttributes: [],
          rowVersion: null
        },
        transactionDate: null
      },
      {
        transactionId: "6071d4c2-b749-ee11-be6f-000d3ad4d529",
        productId: {
          id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
          logicalName: "new_offsetproducts",
          name: "Coffee",
          keyAttributes: [],
          rowVersion: null
        },
        quantity: 400,
        totalCarbon: 1,
        contact: {
          id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529",
          logicalName: "contact",
          name: "Christos Valerkou",
          keyAttributes: [],
          rowVersion: null
        },
        project: {
          id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
          logicalName: "cr93c_subproject",
          name: "MVP Project",
          keyAttributes: [],
          rowVersion: null
        },
        transactionDate: null
      }
    ],
    "Transactiona9ace233-0149-ee11-be6f-000d3ad4d529": {
      transactionId: "a9ace233-0149-ee11-be6f-000d3ad4d529",
      productId: {
        id: "7b434493-fe3f-ee11-bdf3-000d3ad4d529",
        logicalName: "new_offsetproducts",
        name: "Coffee",
        keyAttributes: [],
        rowVersion: null
      },
      quantity: 100,
      totalCarbon: 1,
      contact: {
        id: "8f25fdff-6705-ee11-8f6d-000d3ad4d529",
        logicalName: "contact",
        name: "Christos Valerkou",
        keyAttributes: [],
        rowVersion: null
      },
      project: {
        id: "e02ddf8e-b640-ee11-be6d-000d3ad4d529",
        logicalName: "cr93c_subproject",
        name: "MVP Project",
        keyAttributes: [],
        rowVersion: null
      },
      transactionDate: null
    }
  };
  switch (request.method) {
    case "GET":
      let responseKey = String(params.action);
      return params.action === "Transaction" && transactionUuid !== null && (responseKey = `Transaction${transactionUuid}`), (0, import_node5.json)(response[responseKey]);
    case "PATCH":
      console.log("post");
      break;
    case "POST":
      console.log("post");
      break;
  }
  return (0, import_node5.json)({ message: "Method not allowed", ok: !0 }, 405);
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => PrivacyPolicy
});
var import_jsx_runtime17 = require("react/jsx-runtime");
function PrivacyPolicy() {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { className: "text-white" });
}

// server-entry-module:@remix-run/dev/server-build
var route11 = __toESM(require_cart_success()), route12 = __toESM(require_cart_error());

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  action: () => action4,
  default: () => Contact,
  loader: () => loader8
});
var import_react17 = require("@remix-run/react");

// app/components/ContactForm.tsx
var import_react16 = require("@remix-run/react"), import_jsx_runtime18 = require("react/jsx-runtime");
function ContactForm(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react16.Form, { action: "", method: "post", className: "w-full rounded bg-transparent flex flex-wrap px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-47.5 mr-[5%]", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "firstName", placeholder: "First name", type: "text", className: `
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    placeholder
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none` }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-47.5", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "lastName", placeholder: "Last name", type: "text", className: `
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none` }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "organisation", placeholder: "Organisation", type: "text", className: `
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none` }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "position", placeholder: "Position", type: "text", className: `
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none` }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { name: "emailAddress", placeholder: "Email address", type: "opportunityType", className: `
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-10
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none` }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("textarea", { name: "message", placeholder: "How can we help you?", className: `
                    inline-flex
                    items-center
                    justify-center
                    text-md
                    h-20
                    mb-4
                    xl:h-10
                    pl-2
                    box-border
                    rounded-xl
                    border-brand-dark-blue
                    border-1
                    text-zinc-600
                    w-full
                    xl:order-1
                    focus:outline-none` }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "checkbox", className: "mr-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-[14px]", children: "Keep me up to date with developments at" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-[14px] mb-2", children: "EnhaloGreen" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "bg-blue-500", children: "SUBMIT" }) })
  ] });
}

// app/images/contact_bg.jpg
var contact_bg_default = "/build/_assets/contact_bg-NWPK7OSP.jpg";

// app/routes/contact-us.tsx
var import_jsx_runtime19 = require("react/jsx-runtime"), action4 = async ({ params, request }) => ({}), loader8 = async ({ params, request }) => ({});
function Contact() {
  let actionData = (0, import_react17.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "text-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: contact_bg_default, className: "absolute z-[-1] h-full" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "pt-20 px-8 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "text-3xl mb-6", children: "Let\u2019s build a carbon ecosystem" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-xl leading-tight", children: "Join us to build a credible, secure and transparent carbon ecosystem. Whether you are planning a project, seeking to verify carbon capture or looking for certified carbon credits, we can help \u2013 and together we can bring trust to carbon markets and help them fulfil their world-saving potential." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ContactForm, {}) })
  ] });
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader9
});
var import_react18 = require("@remix-run/react");
var import_jsx_runtime20 = require("react/jsx-runtime"), loader9 = async ({ request }) => ({
  subProjects: await list3()
});
function Projects() {
  let { subProjects } = (0, import_react18.useLoaderData)(), content = require_projects(), optimisticProjectId = subProjects[0].uuid;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "px-8 sm:max-w-screen-lg sm:mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { className: "mb-8 text-3xl leading-none ", children: content.h1 }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "mb-4 sm:mb-20", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "pb-4 border-b-2 border-black sm:pb-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-2xl leading-tight font-light mb-4 sm:w-3/5", children: content.p[0] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("select", { className: "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 sm:h-14 box-border rounded-xl w-full focus:outline-none", defaultValue: optimisticProjectId, id: "uuid", name: "uuid", children: subProjects.map((subProject) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: subProject.uuid, children: subProject.name })) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "mb-4 sm:mb-20", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "pb-6 border-b-2 border-black sm:pb-16", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-2xl leading-tight font-light mb-4 sm:w-3/5", children: content.p[1] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "sm:w-2/5 sm:text-right", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Cta_default, { linkTo: `/offset-products?subProjectId=${optimisticProjectId}`, text: content.cta.offsetYourProducts }) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "sm:max-w-screen-lg sm:mx-auto ", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "pb-6 sm:pb-16", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-2xl leading-tight font-light mb-4 sm:w-3/5", children: content.p[2] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "sm:w-2/5 sm:text-right", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Cta_default, { linkTo: `/offset-products?subProjectId=${optimisticProjectId}`, text: content.cta.offsetYourCarbon }) })
    ] }) }) })
  ] });
}

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => Account,
  loader: () => loader10
});
var import_react20 = require("@remix-run/react");

// app/components/AccountForm.tsx
var import_react19 = require("@remix-run/react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function AccountForm(props) {
  let { account: account2 } = props, fetcher = (0, import_react19.useFetcher)(), optimisticEmailAddress = account2.contact.emailAddress, optimisticFirstName = account2.contact.firstName, optimisticLastName = account2.contact.lastName, optimisticPhoneNumber = account2.contact.phoneNumber, optimisticEdit = !1;
  return fetcher.formData && (optimisticEmailAddress = String(fetcher.formData.get("emailAddress")), optimisticFirstName = String(fetcher.formData.get("firstName")), optimisticLastName = String(fetcher.formData.get("lastName")), optimisticPhoneNumber = String(fetcher.formData.get("phoneNumber")), optimisticEdit = Boolean(fetcher.formData.get("edit") == "true" ? "false" : "true")), /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    fetcher.Form,
    {
      action: "/account-update",
      className: "w-full flex flex-wrap px-8 sm:max-w-screen-lg sm:mx-auto text-light-black ",
      method: "post",
      onSubmit: (e) => {
        optimisticEdit == !0 && fetcher.submit(e.currentTarget, { replace: !0 });
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { name: "accountUuid", type: "hidden", defaultValue: account2.uuid }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { children: "Email Address" }),
          optimisticEdit ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "input",
            {
              className: (fetcher.state === "submitting", "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),
              name: "emailAddress",
              type: "text",
              defaultValue: optimisticEmailAddress
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: optimisticEmailAddress })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "w-47.5 mr-[5%] mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { children: "First name" }),
          optimisticEdit ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "input",
            {
              className: (fetcher.state === "submitting", "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),
              name: "firstName",
              type: "text",
              defaultValue: optimisticFirstName
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: optimisticFirstName })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "w-47.5 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { children: "Last name" }),
          optimisticEdit ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "input",
            {
              className: (fetcher.state === "submitting", "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),
              name: "lastName",
              type: "text",
              defaultValue: optimisticLastName
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: optimisticLastName })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { children: "Phone number" }),
          optimisticEdit ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "input",
            {
              className: (fetcher.state === "submitting", "inline-flex items-center justify-center text-md h-10 pl-2 mt-2 box-border rounded-xl w-full focus:outline-none"),
              name: "phoneNumber",
              type: "text",
              defaultValue: optimisticPhoneNumber
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: optimisticPhoneNumber })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "w-full" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "w-full flex justify-center sm:h-14", children: optimisticEdit ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button_default, { text: "Submit", type: "submit" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { name: "edit", title: "edit", type: "hidden", value: "false" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button_default, { text: "Edit", type: "submit" }) }) })
      ]
    }
  ) });
}

// app/routes/account.tsx
var import_jsx_runtime22 = require("react/jsx-runtime"), loader10 = async ({ params, request }) => ({
  account: await retrieve4("b005e055-5343-ee11-be6d-000d3ad4d529", null, null)
});
function Account() {
  let { account: account2 } = (0, import_react20.useLoaderData)(), content = require_account();
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("section", { className: "text-white bg-background-teal min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "pt-20 px-8 mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "text-3xl mb-6", children: content.h1 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AccountForm, { account: account2 }) })
  ] });
}

// app/routes/qrcodes.tsx
var qrcodes_exports = {};
__export(qrcodes_exports, {
  loader: () => loader11
});

// app/helpers/qrcode.ts
var import_qrcode2 = __toESM(require("qrcode"));
function qrcode(url) {
  return import_qrcode2.default.toBuffer(url);
}

// app/routes/qrcodes.tsx
var import_jszip = __toESM(require("jszip")), loader11 = async ({ request }) => {
  let baseUrl = String(process.env.BASE_URL), urlParams = new URL(request.url), zip = new import_jszip.default(), quantity = Number(urlParams.searchParams.get("quantity")), productUuid = String(urlParams.searchParams.get("productUuid")), transactionUuid = String(urlParams.searchParams.get("transactionUuid")), units = String(urlParams.searchParams.get("units"));
  zip.file("", transactionUuid);
  for (let i = 1; i < quantity + 1; i++) {
    let data = btoa(JSON.stringify({
      sequence: i,
      transactionUuid,
      units,
      productUuid
    })), url = `${baseUrl}qrcodes/products/${data}`, image = await qrcode(url);
    zip.file(`${transactionUuid}_${i}_${quantity}.png`, image);
  }
  return new Response(await zip.generateAsync({ type: "uint8array" }), {
    status: 200,
    headers: {
      "Content-Type": "application/zip"
    }
  });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader12
});

// app/images/intro_accelerating.jpg
var intro_accelerating_default = "/build/_assets/intro_accelerating-RHX35RDK.jpg";

// app/images/intro_attributing.jpg
var intro_attributing_default = "/build/_assets/intro_attributing-RFJ2GD4T.jpg";

// app/images/intro_modelling.jpg
var intro_modelling_default = "/build/_assets/intro_modelling-AXPJDUQS.jpg";

// app/images/intro_providing.jpg
var intro_providing_default = "/build/_assets/intro_providing-PGRA76TS.jpg";

// app/images/intro_tracking.jpg
var intro_tracking_default = "/build/_assets/intro_tracking-EAMSZC4W.jpg";

// app/images/intro_trading.jpg
var intro_trading_default = "/build/_assets/intro_trading-UDNAMZS6.jpg";

// app/images/ricky_magalhaes.png
var ricky_magalhaes_default = "/build/_assets/ricky_magalhaes-HT6M7DGM.png";

// app/images/manuel_saenz.png
var manuel_saenz_default = "/build/_assets/manuel_saenz-EGDCVN5C.png";

// app/images/paul_atherton.png
var paul_atherton_default = "/build/_assets/paul_atherton-T5XBU6Z7.png";

// app/images/carl_corbel.png
var carl_corbel_default = "/build/_assets/carl_corbel-6NYMROGZ.png";

// app/images/cristos_valerkou.png
var cristos_valerkou_default = "/build/_assets/cristos_valerkou-V4YK7YRW.png";

// app/images/dark_black_carbon.gif
var dark_black_carbon_default = "/build/_assets/dark_black_carbon-MSUIFPX6.gif";

// app/images/dark_green_carbon.gif
var dark_green_carbon_default = "/build/_assets/dark_green_carbon-JAYCMZOE.gif";

// app/images/stabiliti.gif
var stabiliti_default = "/build/_assets/stabiliti-ONIBOMMK.gif";

// app/images/regeneration_earth.gif
var regeneration_earth_default = "/build/_assets/regeneration_earth-HPNTHLFI.gif";

// app/routes/_index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime"), loader12 = async ({ params, request }) => [];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: enhalo_forest_default, className: "absolute h-[100vh] -z-20 top-0 object-cover sm:w-full " }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: "text-white px-8 pb-4 h-[90vh] flex flex-wrap sm:max-w-screen-lg sm:mx-auto sm:pr-36", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "pt-20 mb-40 sm:pt-32 sm:mb-28", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h1", { className: "text-3xl mb-6 sm:text-6xl sm:mb-24", children: "Building trust in the carbon ecosystem" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-xl leading-tight mb-4", children: "EnhaloGreen develops and shares digital tools that deliver agility and credibility to carbon initiatives, and build confidence in the carbon ecosystem." }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-xl leading-tight mb-4 sm:mb-16", children: "Our complete carbon solution gives users anywhere in the world \u2013 from governments and corporates to landowners, charities and individuals \u2013 transparency, accountability and compliance." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-4 sm:mb-20", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Cta_default, { linkTo: "/projects", text: "Reduce your footprint now" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "relative z-[-30] bg-white text-intro flex flex-wrap  pt-8 px-8 font-light text-xl leading-tight sm:max-w-screen-lg sm:mx-auto sm:pt-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { className: "mb-8 text-2.5xl leading-7 font-medium", children: "EnhaloGreen empowers organisations to commit to carbon offsetting and play their part in addressing climate change." }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4", children: "For carbon offsetting to be an effective tool in decarbonisation, carbon markets need infrastructure that is secure, transparent and trusted. And they need it now. Our digital platform enables organisations to robustly measure, verify and track carbon sequestration, and to extract additional value through the commercialisation of carbon credits." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "relative z-[-30] bg-white text-intro flex flex-wrap pt-8 px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl", children: "Accelerating verification and certification" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:border-b sm:border-grey sm:pb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-3/5 pr-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-xl leading-tight", children: "Friction and red tape are among the greatest obstacles to the adoption and mainstreaming of climate-positive initiatives." }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s digital platform automates and dramatically accelerates key steps in the carbon verification and certification process, giving near real-time analysis to capture and certify carbon for the voluntary market. This reduces the cost of entry for landowners, farmers and project developers, democratising the market and opening the door to smaller projects. We partner with licensed independents to rigorously validate and verify that producers are adhering to the relevant codes, including the UK Carbon Code in the UK." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "sm:w-2/5", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: intro_accelerating_default }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "text-intro flex flex-wrap px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl", children: "Providing a reliable, secure carbon registry" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:border-b sm:border-grey sm:pb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-3/5 pr-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-6 text-xl leading-tight", children: "What is it, where is it and who owns it? Carbon credits can only succeed when the answers to these questions are definitively captured, stored and made accessible." }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s Carbon registry delivers transparency and security, giving stakeholders certainty of the fidelity and provenance of captured carbon." }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "Certified and registered carbon is visible and traceable, providing the assurance that corporates require before purchasing carbon credits or engaging with offsetting programmes and putting their money and their reputations on the line. Our platform supports carbon credit transactions of all sizes, as well as long-term subscriptions, giving users complete control over their offsetting strategies." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "sm:w-2/5", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: intro_providing_default }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:max-w-screen-lg sm:mx-auto sm:mb-12 sm:border-b sm:border-grey sm:pb sm:pb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: "text-intro px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto sm:w-1/2 sm:mb-0", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex flex flex-wrap sm:pb-4 sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline whitespace-pre-wrap text-2xl mb-6 font-medium sm:text-2xl", children: "Trading carbon credits in a secure, accessible marketplace" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "pr-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s online carbon marketplace enables users to see, purchase and retire verified carbon credits with full transparency and traceability." }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "We create project-specific marketplaces for individual carbon sequestration projects, countries and regions as required. Users can offset their carbon footprint against carbon credits in our registry with functionality allowing them to select and review project details, locations and the relevant certification process. Our marketplaces also feature full settlement functionality, ensuring that project developers and landowners receive revenues they have earned through climate-positive activities." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: intro_trading_default }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: "text-intro px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto sm:w-1/2 sm:mb-0", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex flex flex-wrap sm:pb-4 sm:justify-between sm:h-full ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl sm:mb-0", children: "Tracking carbon on the blockchain" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "pr-2", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen uses CarbonTracker \u2013 software developed with Stabiliti, a sister company and blockchain provider \u2013 to accurately capture carbon origin and location, asset value, and ownership and transfer across complex carbon ecosystems at scale. CarbonTracker guarantees the integrity of the carbon capture process, providing immutability and transparency to market participants." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: " self-end", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: intro_tracking_default }) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "text-intro flex flex-wrap px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl", children: "Carbon code compliance" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:max-w-screen-lg sm:mx-auto sm:mb-12 sm:border-b sm:border-grey sm:pb sm:pb-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s digital platform delivers rapid and robust certification in line with all reputable carbon codes, including:" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("ul", { className: "list-disc pl-8 mb-8 text-1 sm:mb-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { children: "UK Carbon Code" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { children: "UK Woodland Carbon Code" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { children: "UK Peatland Code" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { children: "Soil Carbon Code" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { children: "Congo Brazzaville Carbon Code" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:border-l sm:border-grey pl-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-9xl mb-4 text-center", children: "75%" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "of SMEs agreed employees care that the business behaves sustainably and reduces its impact on the climate" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:max-w-screen-lg sm:mx-auto sm:mb-12 sm:pb sm:pb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "text-intro flex flex-wrap px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto sm:w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl", children: "Attributing carbon per product" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:flex-col sm:pb-4 sm:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "pr-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "As emissions reporting requirements become more exacting \u2013 and carbon comes to play a larger role in consumer decision-making \u2013 accounting for carbon at the per-product level will become both more important and more attractive." }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s platform supports carbon fractionalisation \u2013 the accurate attribution of offset carbon to a specific product or unit throughout the entire supply chain. Consumers at both the corporate and retail level can see and reliably report the carbon that was sequestered to offset their purchase \u2013 whether that\u2019s a mile of electric cable for a home builder or a can of beer for a student." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: intro_attributing_default }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "text-intro flex flex-wrap px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto sm:w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl", children: "Modelling carbon capture in real time" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:flex-col sm:pb-4 sm:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "pr-2", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s CarbonTracker software, delivered with Stabiliti, gives users real-time understanding of carbon capture, including the potential for digital-twin desktop views. Combining unique geo-location with complex sampling and forecasting, users can track carbon from end to end \u2013 from traded credits to carbon in the ground, biomass or any other form of sequestration." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: intro_modelling_default })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: " bg-intro-about text-black px-8 font-light text-xl leading-tight mb-8 pb-8 pt-4", id: "about", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:max-w-screen-lg sm:mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro underline-offset-8 decoration-2 mb-6 text-2xl font-medium sm:text-2xl", children: "About EnhaloGreen" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-xl leading-tight", children: "EnhaloGreen was born out of a recognition that technology can play a vital enabling role in accelerating the acceptance and mainstreaming of carbon markets. By eliminating the obstacles and delays that have beset the sector to date, EnhaloGreen to supports new entrants and builds confidence in the fidelity of carbon available for sale to organisations looking to credibly offset their emissions." }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "Organisations, individuals and the media will only truly believe in carbon offsetting as a viable climate-change strategy when the markets can demonstrate their integrity and security. With our origins in cyber-security, supporting banks, financial institutions and others, Enhalo is well-placed to deliver the tools necessary to bring these markets to maturity and to encourage new entrants by providing infrastructure that is easy to access, reliable and trusted. So we established EnhaloGreen and set out to partner with organisations across the carbon ecosystem and around the world \u2013 from soil scientists and laboratories to landowners and innovative corporates \u2013 to help realise the potential of carbon offsetting in addressing the urgent issues of climate change and decarbonisation." }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "mb-6 text-2xl leading-tight", children: "Our mission" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-8 text-1", children: "To develop and share digital tools that support an agile, credible and secure carbon ecosystem, accelerating the normalisation of carbon offsetting and encouraging more participants to enter the carbon markets." }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "mb-6 text-2xl leading-tight", children: "The EnhaloGreen team" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "text-center mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex justify-between flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-5/12 sm:w-1/6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("a", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: ricky_magalhaes_default, className: "mb-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-1 text-1", children: "Ricky Magalhaes" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-12 text-1", children: "Founder and CEO" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-5/12 sm:w-1/6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("a", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: manuel_saenz_default, className: "mb-2 w-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-1 text-1", children: "Manuel Saenz" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-12 text-1", children: "Founder and Director" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-5/12 sm:w-1/6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("a", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: paul_atherton_default, className: "mb-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-1 text-1", children: "Paul Atherton" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-12 text-1", children: "Founder and Director" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-5/12 sm:w-1/6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("a", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: carl_corbel_default, className: "mb-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-1 text-1", children: "Carl Corbel" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-12 text-1", children: "Director" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "w-5/12 sm:w-1/6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("a", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: cristos_valerkou_default, className: "mb-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "underline mb-1 text-1", children: "Cristos Valerkou" })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "text-intro flex flex-wrap px-8 font-light text-xl leading-tight mb-8 sm:max-w-screen-lg sm:mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "underline decoration-intro-underline underline-offset-8 decoration-2 text-intro-underline text-2xl mb-6 font-medium sm:text-2xl", children: "Our Partners" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:flex sm:flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: dark_green_carbon_default, className: "mb-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "DarkGreen Carbon (DGC) is an end-to-end carbon removal solution focusing on soil carbon. It combines consultancy in regenerative land management practices that accelerate and amplify carbon sequestration with robust measurement and verification and an EnhaloGreen carbon registry and marketplace that allows corporate offsetters to purchase certified carbon credits." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: stabiliti_default, className: "mb-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "Stabiliti has created a straightforward and low-friction approach to tokenising carbon, extending reach to new markets and creating new revenue opportunities. Carbon is tracked across the ecosystem from source, through the whole lifecycle, including the downstream supply chain, ensuring confidence, accuracy and integrity. Participants in our ecosystem can realise a new level of assurance and attain unprecedented quality guarantees." }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-2 text-1", children: "\u2022 Stabiliti has developed powerful decentralised tracking and tracing in realtime" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "\u2022 Offset management, insight and reporting for business across your organisation with our decentralised platform" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: dark_black_carbon_default, className: "mb-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "EnhaloGreen\u2019s CarbonTracker software, delivered with Stabiliti, gives users real-time understanding of carbon capture, including the potential for digital-twin desktop views. Combining unique geo-location with complex sampling and forecasting, users can track carbon from end to end \u2013 from traded credits to carbon in the ground, biomass or any other form of sequestration." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sm:w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "sm:h-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: regeneration_earth_default, className: "mb-8" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "mb-4 text-1", children: "Re-generation Earth works with land managers to help them unlock the potential in their land, help them build more financially and environmentally resilient businesses and help them benefit from the new income streams through carbon offset and biodiversity net gain (BNG) sales." })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/qrcode.tsx
var qrcode_exports = {};
__export(qrcode_exports, {
  loader: () => loader13
});
var loader13 = async ({ request }) => {
  let baseUrl = String(process.env.BASE_URL), urlParams = new URL(request.url), transactionProduct = {
    sequence: Number(urlParams.searchParams.get("sequence")),
    transactionUuid: String(urlParams.searchParams.get("transactionUuid")),
    units: Number(urlParams.searchParams.get("units")),
    productUuid: String(urlParams.searchParams.get("productUuid"))
  }, data = btoa(JSON.stringify(transactionProduct)), url = `${baseUrl}qrcodes/products/${data}`;
  console.log(url);
  let image = await qrcode(url);
  return new Response(image, {
    status: 200,
    headers: {
      "Content-Type": "image/png"
    }
  });
};

// server-entry-module:@remix-run/dev/server-build
var route19 = __toESM(require_login());

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DVE3ZZYY.js", imports: ["/build/_shared/chunk-6L2EXQIA.js", "/build/_shared/chunk-GDLBX7ER.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MVSJWLQJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3WYQ6JNI.js", imports: ["/build/_shared/chunk-2ELPQVOV.js", "/build/_shared/chunk-LDPKBUL2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-JX2E57R3.js", imports: ["/build/_shared/chunk-RZUQJXOQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/account-update": { id: "routes/account-update", parentId: "root", path: "account-update", index: void 0, caseSensitive: void 0, module: "/build/routes/account-update-LMFPDNC6.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/accounts_.$contactUuid.transactions": { id: "routes/accounts_.$contactUuid.transactions", parentId: "root", path: "accounts/:contactUuid/transactions", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts_.$contactUuid.transactions-5Y5Q2BNQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/accounts_.$contactUuid.transactions_.$transactionUuid": { id: "routes/accounts_.$contactUuid.transactions_.$transactionUuid", parentId: "root", path: "accounts/:contactUuid/transactions/:transactionUuid", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts_.$contactUuid.transactions_.$transactionUuid-DET2NPYZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.$transactionUuid": { id: "routes/cart.$transactionUuid", parentId: "root", path: "cart/:transactionUuid", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.$transactionUuid-IJJRRDWU.js", imports: ["/build/_shared/chunk-LDPKBUL2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.error": { id: "routes/cart.error", parentId: "root", path: "cart/error", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.error-IWHNPKZ4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart.success": { id: "routes/cart.success", parentId: "root", path: "cart/success", index: void 0, caseSensitive: void 0, module: "/build/routes/cart.success-IWW6AU3O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-7HIA3QL6.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fAkePI.$action": { id: "routes/fAkePI.$action", parentId: "root", path: "fAkePI/:action", index: void 0, caseSensitive: void 0, module: "/build/routes/fAkePI.$action-YN5UYWEV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-VFO7F24P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/offset-products": { id: "routes/offset-products", parentId: "root", path: "offset-products", index: void 0, caseSensitive: void 0, module: "/build/routes/offset-products-AF7GBVXC.js", imports: ["/build/_shared/chunk-RZUQJXOQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/offset-products-transaction": { id: "routes/offset-products-transaction", parentId: "root", path: "offset-products-transaction", index: void 0, caseSensitive: void 0, module: "/build/routes/offset-products-transaction-UVG533GA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-B27733JT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-YOIDAHUQ.js", imports: ["/build/_shared/chunk-LDPKBUL2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/qrcode": { id: "routes/qrcode", parentId: "root", path: "qrcode", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcode-V75SBLLL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/qrcodes": { id: "routes/qrcodes", parentId: "root", path: "qrcodes", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes-E5GQHVW3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/qrcodes.products.$data": { id: "routes/qrcodes.products.$data", parentId: "routes/qrcodes", path: "products/:data", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.products.$data-3D77MIRJ.js", imports: ["/build/_shared/chunk-2ELPQVOV.js", "/build/_shared/chunk-RZUQJXOQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/qrcodes.transactions.$uuid": { id: "routes/qrcodes.transactions.$uuid", parentId: "routes/qrcodes", path: "transactions/:uuid", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.transactions.$uuid-3NORBZFN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "3db2f6d7", hmr: void 0, url: "/build/manifest-3DB2F6D7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/accounts_.$contactUuid.transactions_.$transactionUuid": {
    id: "routes/accounts_.$contactUuid.transactions_.$transactionUuid",
    parentId: "root",
    path: "accounts/:contactUuid/transactions/:transactionUuid",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_contactUuid_transactions_transactionUuid_exports
  },
  "routes/accounts_.$contactUuid.transactions": {
    id: "routes/accounts_.$contactUuid.transactions",
    parentId: "root",
    path: "accounts/:contactUuid/transactions",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_contactUuid_transactions_exports
  },
  "routes/offset-products-transaction": {
    id: "routes/offset-products-transaction",
    parentId: "root",
    path: "offset-products-transaction",
    index: void 0,
    caseSensitive: void 0,
    module: offset_products_transaction_exports
  },
  "routes/qrcodes.transactions.$uuid": {
    id: "routes/qrcodes.transactions.$uuid",
    parentId: "routes/qrcodes",
    path: "transactions/:uuid",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/qrcodes.products.$data": {
    id: "routes/qrcodes.products.$data",
    parentId: "routes/qrcodes",
    path: "products/:data",
    index: void 0,
    caseSensitive: void 0,
    module: qrcodes_products_data_exports
  },
  "routes/cart.$transactionUuid": {
    id: "routes/cart.$transactionUuid",
    parentId: "root",
    path: "cart/:transactionUuid",
    index: void 0,
    caseSensitive: void 0,
    module: cart_transactionUuid_exports
  },
  "routes/offset-products": {
    id: "routes/offset-products",
    parentId: "root",
    path: "offset-products",
    index: void 0,
    caseSensitive: void 0,
    module: offset_products_exports
  },
  "routes/account-update": {
    id: "routes/account-update",
    parentId: "root",
    path: "account-update",
    index: void 0,
    caseSensitive: void 0,
    module: account_update_exports
  },
  "routes/fAkePI.$action": {
    id: "routes/fAkePI.$action",
    parentId: "root",
    path: "fAkePI/:action",
    index: void 0,
    caseSensitive: void 0,
    module: fAkePI_action_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/cart.success": {
    id: "routes/cart.success",
    parentId: "root",
    path: "cart/success",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/cart.error": {
    id: "routes/cart.error",
    parentId: "root",
    path: "cart/error",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/qrcodes": {
    id: "routes/qrcodes",
    parentId: "root",
    path: "qrcodes",
    index: void 0,
    caseSensitive: void 0,
    module: qrcodes_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/qrcode": {
    id: "routes/qrcode",
    parentId: "root",
    path: "qrcode",
    index: void 0,
    caseSensitive: void 0,
    module: qrcode_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

/*! For license information please see main.4c6d34e8.js.LICENSE.txt */
(() => {
	var e = {
			85: (e, t, n) => {
				"use strict";
				var r = n(340),
					a = n(950),
					o = n(119);
				function l(e) {
					var t = "https://react.dev/errors/" + e;
					if (1 < arguments.length) {
						t += "?args[]=" + encodeURIComponent(arguments[1]);
						for (var n = 2; n < arguments.length; n++)
							t += "&args[]=" + encodeURIComponent(arguments[n]);
					}
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				function i(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType)
					);
				}
				function s(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return),
								(e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function u(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function c(e) {
					if (s(e) !== e) throw Error(l(188));
				}
				function f(e) {
					var t = e.tag;
					if (5 === t || 26 === t || 27 === t || 6 === t) return e;
					for (e = e.child; null !== e; ) {
						if (null !== (t = f(e))) return t;
						e = e.sibling;
					}
					return null;
				}
				var d = Object.assign,
					p = Symbol.for("react.element"),
					h = Symbol.for("react.transitional.element"),
					m = Symbol.for("react.portal"),
					g = Symbol.for("react.fragment"),
					y = Symbol.for("react.strict_mode"),
					v = Symbol.for("react.profiler"),
					b = Symbol.for("react.provider"),
					w = Symbol.for("react.consumer"),
					S = Symbol.for("react.context"),
					k = Symbol.for("react.forward_ref"),
					E = Symbol.for("react.suspense"),
					x = Symbol.for("react.suspense_list"),
					C = Symbol.for("react.memo"),
					_ = Symbol.for("react.lazy");
				Symbol.for("react.scope");
				var T = Symbol.for("react.activity");
				Symbol.for("react.legacy_hidden"),
					Symbol.for("react.tracing_marker");
				var P = Symbol.for("react.memo_cache_sentinel");
				Symbol.for("react.view_transition");
				var O = Symbol.iterator;
				function N(e) {
					return null === e || "object" !== typeof e
						? null
						: "function" ===
						  typeof (e = (O && e[O]) || e["@@iterator"])
						? e
						: null;
				}
				var R = Symbol.for("react.client.reference");
				function A(e) {
					if (null == e) return null;
					if ("function" === typeof e)
						return e.$$typeof === R
							? null
							: e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case g:
							return "Fragment";
						case v:
							return "Profiler";
						case y:
							return "StrictMode";
						case E:
							return "Suspense";
						case x:
							return "SuspenseList";
						case T:
							return "Activity";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case m:
								return "Portal";
							case S:
								return (
									(e.displayName || "Context") + ".Provider"
								);
							case w:
								return (
									(e._context.displayName || "Context") +
									".Consumer"
								);
							case k:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !==
											(e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case C:
								return null !== (t = e.displayName || null)
									? t
									: A(e.type) || "Memo";
							case _:
								(t = e._payload), (e = e._init);
								try {
									return A(e(t));
								} catch (n) {}
						}
					return null;
				}
				var L = Array.isArray,
					z =
						a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
					D =
						o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
					F = { pending: !1, data: null, method: null, action: null },
					I = [],
					j = -1;
				function U(e) {
					return { current: e };
				}
				function M(e) {
					0 > j || ((e.current = I[j]), (I[j] = null), j--);
				}
				function B(e, t) {
					j++, (I[j] = e.current), (e.current = t);
				}
				var H = U(null),
					$ = U(null),
					W = U(null),
					V = U(null);
				function q(e, t) {
					switch ((B(W, t), B($, e), B(H, null), t.nodeType)) {
						case 9:
						case 11:
							e =
								(e = t.documentElement) && (e = e.namespaceURI)
									? af(e)
									: 0;
							break;
						default:
							if (((e = t.tagName), (t = t.namespaceURI)))
								e = of((t = af(t)), e);
							else
								switch (e) {
									case "svg":
										e = 1;
										break;
									case "math":
										e = 2;
										break;
									default:
										e = 0;
								}
					}
					M(H), B(H, e);
				}
				function K() {
					M(H), M($), M(W);
				}
				function Q(e) {
					null !== e.memoizedState && B(V, e);
					var t = H.current,
						n = of(t, e.type);
					t !== n && (B($, e), B(H, n));
				}
				function G(e) {
					$.current === e && (M(H), M($)),
						V.current === e && (M(V), (Gf._currentValue = F));
				}
				var Y = Object.prototype.hasOwnProperty,
					X = r.unstable_scheduleCallback,
					J = r.unstable_cancelCallback,
					Z = r.unstable_shouldYield,
					ee = r.unstable_requestPaint,
					te = r.unstable_now,
					ne = r.unstable_getCurrentPriorityLevel,
					re = r.unstable_ImmediatePriority,
					ae = r.unstable_UserBlockingPriority,
					oe = r.unstable_NormalPriority,
					le = r.unstable_LowPriority,
					ie = r.unstable_IdlePriority,
					se = r.log,
					ue = r.unstable_setDisableYieldValue,
					ce = null,
					fe = null;
				function de(e) {
					if (
						("function" === typeof se && ue(e),
						fe && "function" === typeof fe.setStrictMode)
					)
						try {
							fe.setStrictMode(ce, e);
						} catch (t) {}
				}
				var pe = Math.clz32
						? Math.clz32
						: function (e) {
								return 0 === (e >>>= 0)
									? 32
									: (31 - ((he(e) / me) | 0)) | 0;
						  },
					he = Math.log,
					me = Math.LN2;
				var ge = 256,
					ye = 4194304;
				function ve(e) {
					var t = 42 & e;
					if (0 !== t) return t;
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
							return 64;
						case 128:
							return 128;
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194048 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
							return 62914560 & e;
						case 67108864:
							return 67108864;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 0;
						default:
							return e;
					}
				}
				function be(e, t, n) {
					var r = e.pendingLanes;
					if (0 === r) return 0;
					var a = 0,
						o = e.suspendedLanes,
						l = e.pingedLanes;
					e = e.warmLanes;
					var i = 134217727 & r;
					return (
						0 !== i
							? 0 !== (r = i & ~o)
								? (a = ve(r))
								: 0 !== (l &= i)
								? (a = ve(l))
								: n || (0 !== (n = i & ~e) && (a = ve(n)))
							: 0 !== (i = r & ~o)
							? (a = ve(i))
							: 0 !== l
							? (a = ve(l))
							: n || (0 !== (n = r & ~e) && (a = ve(n))),
						0 === a
							? 0
							: 0 !== t &&
							  t !== a &&
							  0 === (t & o) &&
							  ((o = a & -a) >= (n = t & -t) ||
									(32 === o && 0 !== (4194048 & n)))
							? t
							: a
					);
				}
				function we(e, t) {
					return (
						0 ===
						(e.pendingLanes &
							~(e.suspendedLanes & ~e.pingedLanes) &
							t)
					);
				}
				function Se(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
						case 8:
						case 64:
							return t + 250;
						case 16:
						case 32:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function ke() {
					var e = ge;
					return 0 === (4194048 & (ge <<= 1)) && (ge = 256), e;
				}
				function Ee() {
					var e = ye;
					return 0 === (62914560 & (ye <<= 1)) && (ye = 4194304), e;
				}
				function xe(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function Ce(e, t) {
					(e.pendingLanes |= t),
						268435456 !== t &&
							((e.suspendedLanes = 0),
							(e.pingedLanes = 0),
							(e.warmLanes = 0));
				}
				function _e(e, t, n) {
					(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
					var r = 31 - pe(t);
					(e.entangledLanes |= t),
						(e.entanglements[r] =
							1073741824 | e.entanglements[r] | (4194090 & n));
				}
				function Te(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - pe(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				function Pe(e) {
					switch (e) {
						case 2:
							e = 1;
							break;
						case 8:
							e = 4;
							break;
						case 32:
							e = 16;
							break;
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
							e = 128;
							break;
						case 268435456:
							e = 134217728;
							break;
						default:
							e = 0;
					}
					return e;
				}
				function Oe(e) {
					return 2 < (e &= -e)
						? 8 < e
							? 0 !== (134217727 & e)
								? 32
								: 268435456
							: 8
						: 2;
				}
				function Ne() {
					var e = D.p;
					return 0 !== e
						? e
						: void 0 === (e = window.event)
						? 32
						: cd(e.type);
				}
				var Re = Math.random().toString(36).slice(2),
					Ae = "__reactFiber$" + Re,
					Le = "__reactProps$" + Re,
					ze = "__reactContainer$" + Re,
					De = "__reactEvents$" + Re,
					Fe = "__reactListeners$" + Re,
					Ie = "__reactHandles$" + Re,
					je = "__reactResources$" + Re,
					Ue = "__reactMarker$" + Re;
				function Me(e) {
					delete e[Ae],
						delete e[Le],
						delete e[De],
						delete e[Fe],
						delete e[Ie];
				}
				function Be(e) {
					var t = e[Ae];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[ze] || n[Ae])) {
							if (
								((n = t.alternate),
								null !== t.child ||
									(null !== n && null !== n.child))
							)
								for (e = wf(e); null !== e; ) {
									if ((n = e[Ae])) return n;
									e = wf(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function He(e) {
					if ((e = e[Ae] || e[ze])) {
						var t = e.tag;
						if (
							5 === t ||
							6 === t ||
							13 === t ||
							26 === t ||
							27 === t ||
							3 === t
						)
							return e;
					}
					return null;
				}
				function $e(e) {
					var t = e.tag;
					if (5 === t || 26 === t || 27 === t || 6 === t)
						return e.stateNode;
					throw Error(l(33));
				}
				function We(e) {
					var t = e[je];
					return (
						t ||
							(t = e[je] =
								{
									hoistableStyles: new Map(),
									hoistableScripts: new Map(),
								}),
						t
					);
				}
				function Ve(e) {
					e[Ue] = !0;
				}
				var qe = new Set(),
					Ke = {};
				function Qe(e, t) {
					Ge(e, t), Ge(e + "Capture", t);
				}
				function Ge(e, t) {
					for (Ke[e] = t, e = 0; e < t.length; e++) qe.add(t[e]);
				}
				var Ye,
					Xe,
					Je = RegExp(
						"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
					),
					Ze = {},
					et = {};
				function tt(e, t, n) {
					if (
						((a = t),
						Y.call(et, a) ||
							(!Y.call(Ze, a) &&
								(Je.test(a)
									? (et[a] = !0)
									: ((Ze[a] = !0), 0))))
					)
						if (null === n) e.removeAttribute(t);
						else {
							switch (typeof n) {
								case "undefined":
								case "function":
								case "symbol":
									return void e.removeAttribute(t);
								case "boolean":
									var r = t.toLowerCase().slice(0, 5);
									if ("data-" !== r && "aria-" !== r)
										return void e.removeAttribute(t);
							}
							e.setAttribute(t, "" + n);
						}
					var a;
				}
				function nt(e, t, n) {
					if (null === n) e.removeAttribute(t);
					else {
						switch (typeof n) {
							case "undefined":
							case "function":
							case "symbol":
							case "boolean":
								return void e.removeAttribute(t);
						}
						e.setAttribute(t, "" + n);
					}
				}
				function rt(e, t, n, r) {
					if (null === r) e.removeAttribute(n);
					else {
						switch (typeof r) {
							case "undefined":
							case "function":
							case "symbol":
							case "boolean":
								return void e.removeAttribute(n);
						}
						e.setAttributeNS(t, n, "" + r);
					}
				}
				function at(e) {
					if (void 0 === Ye)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							(Ye = (t && t[1]) || ""),
								(Xe =
									-1 < n.stack.indexOf("\n    at")
										? " (<anonymous>)"
										: -1 < n.stack.indexOf("@")
										? "@unknown:0:0"
										: "");
						}
					return "\n" + Ye + e + Xe;
				}
				var ot = !1;
				function lt(e, t) {
					if (!e || ot) return "";
					ot = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						var r = {
							DetermineComponentFrameRoot: function () {
								try {
									if (t) {
										var n = function () {
											throw Error();
										};
										if (
											(Object.defineProperty(
												n.prototype,
												"props",
												{
													set: function () {
														throw Error();
													},
												}
											),
											"object" === typeof Reflect &&
												Reflect.construct)
										) {
											try {
												Reflect.construct(n, []);
											} catch (a) {
												var r = a;
											}
											Reflect.construct(e, [], n);
										} else {
											try {
												n.call();
											} catch (o) {
												r = o;
											}
											e.call(n.prototype);
										}
									} else {
										try {
											throw Error();
										} catch (l) {
											r = l;
										}
										(n = e()) &&
											"function" === typeof n.catch &&
											n.catch(function () {});
									}
								} catch (i) {
									if (i && r && "string" === typeof i.stack)
										return [i.stack, r.stack];
								}
								return [null, null];
							},
						};
						r.DetermineComponentFrameRoot.displayName =
							"DetermineComponentFrameRoot";
						var a = Object.getOwnPropertyDescriptor(
							r.DetermineComponentFrameRoot,
							"name"
						);
						a &&
							a.configurable &&
							Object.defineProperty(
								r.DetermineComponentFrameRoot,
								"name",
								{ value: "DetermineComponentFrameRoot" }
							);
						var o = r.DetermineComponentFrameRoot(),
							l = o[0],
							i = o[1];
						if (l && i) {
							var s = l.split("\n"),
								u = i.split("\n");
							for (
								a = r = 0;
								r < s.length &&
								!s[r].includes("DetermineComponentFrameRoot");

							)
								r++;
							for (
								;
								a < u.length &&
								!u[a].includes("DetermineComponentFrameRoot");

							)
								a++;
							if (r === s.length || a === u.length)
								for (
									r = s.length - 1, a = u.length - 1;
									1 <= r && 0 <= a && s[r] !== u[a];

								)
									a--;
							for (; 1 <= r && 0 <= a; r--, a--)
								if (s[r] !== u[a]) {
									if (1 !== r || 1 !== a)
										do {
											if (
												(r--, 0 > --a || s[r] !== u[a])
											) {
												var c =
													"\n" +
													s[r].replace(
														" at new ",
														" at "
													);
												return (
													e.displayName &&
														c.includes(
															"<anonymous>"
														) &&
														(c = c.replace(
															"<anonymous>",
															e.displayName
														)),
													c
												);
											}
										} while (1 <= r && 0 <= a);
									break;
								}
						}
					} finally {
						(ot = !1), (Error.prepareStackTrace = n);
					}
					return (n = e ? e.displayName || e.name : "") ? at(n) : "";
				}
				function it(e) {
					switch (e.tag) {
						case 26:
						case 27:
						case 5:
							return at(e.type);
						case 16:
							return at("Lazy");
						case 13:
							return at("Suspense");
						case 19:
							return at("SuspenseList");
						case 0:
						case 15:
							return lt(e.type, !1);
						case 11:
							return lt(e.type.render, !1);
						case 1:
							return lt(e.type, !0);
						case 31:
							return at("Activity");
						default:
							return "";
					}
				}
				function st(e) {
					try {
						var t = "";
						do {
							(t += it(e)), (e = e.return);
						} while (e);
						return t;
					} catch (n) {
						return (
							"\nError generating stack: " +
							n.message +
							"\n" +
							n.stack
						);
					}
				}
				function ut(e) {
					switch (typeof e) {
						case "bigint":
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function ct(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function ft(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = ct(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(
									e.constructor.prototype,
									t
								),
								r = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								"undefined" !== typeof n &&
								"function" === typeof n.get &&
								"function" === typeof n.set
							) {
								var a = n.get,
									o = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = "" + e), o.call(this, e);
										},
									}),
									Object.defineProperty(e, t, {
										enumerable: n.enumerable,
									}),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null),
												delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function dt(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return (
						e &&
							(r = ct(e)
								? e.checked
									? "true"
									: "false"
								: e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function pt(e) {
					if (
						"undefined" ===
						typeof (e =
							e ||
							("undefined" !== typeof document
								? document
								: void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				var ht = /[\n"\\]/g;
				function mt(e) {
					return e.replace(ht, function (e) {
						return "\\" + e.charCodeAt(0).toString(16) + " ";
					});
				}
				function gt(e, t, n, r, a, o, l, i) {
					(e.name = ""),
						null != l &&
						"function" !== typeof l &&
						"symbol" !== typeof l &&
						"boolean" !== typeof l
							? (e.type = l)
							: e.removeAttribute("type"),
						null != t
							? "number" === l
								? ((0 === t && "" === e.value) ||
										e.value != t) &&
								  (e.value = "" + ut(t))
								: e.value !== "" + ut(t) &&
								  (e.value = "" + ut(t))
							: ("submit" !== l && "reset" !== l) ||
							  e.removeAttribute("value"),
						null != t
							? vt(e, l, ut(t))
							: null != n
							? vt(e, l, ut(n))
							: null != r && e.removeAttribute("value"),
						null == a && null != o && (e.defaultChecked = !!o),
						null != a &&
							(e.checked =
								a &&
								"function" !== typeof a &&
								"symbol" !== typeof a),
						null != i &&
						"function" !== typeof i &&
						"symbol" !== typeof i &&
						"boolean" !== typeof i
							? (e.name = "" + ut(i))
							: e.removeAttribute("name");
				}
				function yt(e, t, n, r, a, o, l, i) {
					if (
						(null != o &&
							"function" !== typeof o &&
							"symbol" !== typeof o &&
							"boolean" !== typeof o &&
							(e.type = o),
						null != t || null != n)
					) {
						if (
							!(
								("submit" !== o && "reset" !== o) ||
								(void 0 !== t && null !== t)
							)
						)
							return;
						(n = null != n ? "" + ut(n) : ""),
							(t = null != t ? "" + ut(t) : n),
							i || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					(r =
						"function" !== typeof (r = null != r ? r : a) &&
						"symbol" !== typeof r &&
						!!r),
						(e.checked = i ? e.checked : !!r),
						(e.defaultChecked = !!r),
						null != l &&
							"function" !== typeof l &&
							"symbol" !== typeof l &&
							"boolean" !== typeof l &&
							(e.name = l);
				}
				function vt(e, t, n) {
					("number" === t && pt(e.ownerDocument) === e) ||
						e.defaultValue === "" + n ||
						(e.defaultValue = "" + n);
				}
				function bt(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++)
							(a = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== a && (e[n].selected = a),
								a && r && (e[n].defaultSelected = !0);
					} else {
						for (
							n = "" + ut(n), t = null, a = 0;
							a < e.length;
							a++
						) {
							if (e[a].value === n)
								return (
									(e[a].selected = !0),
									void (r && (e[a].defaultSelected = !0))
								);
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function wt(e, t, n) {
					null == t ||
					((t = "" + ut(t)) !== e.value && (e.value = t), null != n)
						? (e.defaultValue = null != n ? "" + ut(n) : "")
						: e.defaultValue !== t && (e.defaultValue = t);
				}
				function St(e, t, n, r) {
					if (null == t) {
						if (null != r) {
							if (null != n) throw Error(l(92));
							if (L(r)) {
								if (1 < r.length) throw Error(l(93));
								r = r[0];
							}
							n = r;
						}
						null == n && (n = ""), (t = n);
					}
					(n = ut(t)),
						(e.defaultValue = n),
						(r = e.textContent) === n &&
							"" !== r &&
							null !== r &&
							(e.value = r);
				}
				function kt(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var Et = new Set(
					"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
						" "
					)
				);
				function xt(e, t, n) {
					var r = 0 === t.indexOf("--");
					null == n || "boolean" === typeof n || "" === n
						? r
							? e.setProperty(t, "")
							: "float" === t
							? (e.cssFloat = "")
							: (e[t] = "")
						: r
						? e.setProperty(t, n)
						: "number" !== typeof n || 0 === n || Et.has(t)
						? "float" === t
							? (e.cssFloat = n)
							: (e[t] = ("" + n).trim())
						: (e[t] = n + "px");
				}
				function Ct(e, t, n) {
					if (null != t && "object" !== typeof t) throw Error(l(62));
					if (((e = e.style), null != n)) {
						for (var r in n)
							!n.hasOwnProperty(r) ||
								(null != t && t.hasOwnProperty(r)) ||
								(0 === r.indexOf("--")
									? e.setProperty(r, "")
									: "float" === r
									? (e.cssFloat = "")
									: (e[r] = ""));
						for (var a in t)
							(r = t[a]),
								t.hasOwnProperty(a) &&
									n[a] !== r &&
									xt(e, a, r);
					} else
						for (var o in t) t.hasOwnProperty(o) && xt(e, o, t[o]);
				}
				function _t(e) {
					if (-1 === e.indexOf("-")) return !1;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var Tt = new Map([
						["acceptCharset", "accept-charset"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
						["crossOrigin", "crossorigin"],
						["accentHeight", "accent-height"],
						["alignmentBaseline", "alignment-baseline"],
						["arabicForm", "arabic-form"],
						["baselineShift", "baseline-shift"],
						["capHeight", "cap-height"],
						["clipPath", "clip-path"],
						["clipRule", "clip-rule"],
						["colorInterpolation", "color-interpolation"],
						[
							"colorInterpolationFilters",
							"color-interpolation-filters",
						],
						["colorProfile", "color-profile"],
						["colorRendering", "color-rendering"],
						["dominantBaseline", "dominant-baseline"],
						["enableBackground", "enable-background"],
						["fillOpacity", "fill-opacity"],
						["fillRule", "fill-rule"],
						["floodColor", "flood-color"],
						["floodOpacity", "flood-opacity"],
						["fontFamily", "font-family"],
						["fontSize", "font-size"],
						["fontSizeAdjust", "font-size-adjust"],
						["fontStretch", "font-stretch"],
						["fontStyle", "font-style"],
						["fontVariant", "font-variant"],
						["fontWeight", "font-weight"],
						["glyphName", "glyph-name"],
						[
							"glyphOrientationHorizontal",
							"glyph-orientation-horizontal",
						],
						[
							"glyphOrientationVertical",
							"glyph-orientation-vertical",
						],
						["horizAdvX", "horiz-adv-x"],
						["horizOriginX", "horiz-origin-x"],
						["imageRendering", "image-rendering"],
						["letterSpacing", "letter-spacing"],
						["lightingColor", "lighting-color"],
						["markerEnd", "marker-end"],
						["markerMid", "marker-mid"],
						["markerStart", "marker-start"],
						["overlinePosition", "overline-position"],
						["overlineThickness", "overline-thickness"],
						["paintOrder", "paint-order"],
						["panose-1", "panose-1"],
						["pointerEvents", "pointer-events"],
						["renderingIntent", "rendering-intent"],
						["shapeRendering", "shape-rendering"],
						["stopColor", "stop-color"],
						["stopOpacity", "stop-opacity"],
						["strikethroughPosition", "strikethrough-position"],
						["strikethroughThickness", "strikethrough-thickness"],
						["strokeDasharray", "stroke-dasharray"],
						["strokeDashoffset", "stroke-dashoffset"],
						["strokeLinecap", "stroke-linecap"],
						["strokeLinejoin", "stroke-linejoin"],
						["strokeMiterlimit", "stroke-miterlimit"],
						["strokeOpacity", "stroke-opacity"],
						["strokeWidth", "stroke-width"],
						["textAnchor", "text-anchor"],
						["textDecoration", "text-decoration"],
						["textRendering", "text-rendering"],
						["transformOrigin", "transform-origin"],
						["underlinePosition", "underline-position"],
						["underlineThickness", "underline-thickness"],
						["unicodeBidi", "unicode-bidi"],
						["unicodeRange", "unicode-range"],
						["unitsPerEm", "units-per-em"],
						["vAlphabetic", "v-alphabetic"],
						["vHanging", "v-hanging"],
						["vIdeographic", "v-ideographic"],
						["vMathematical", "v-mathematical"],
						["vectorEffect", "vector-effect"],
						["vertAdvY", "vert-adv-y"],
						["vertOriginX", "vert-origin-x"],
						["vertOriginY", "vert-origin-y"],
						["wordSpacing", "word-spacing"],
						["writingMode", "writing-mode"],
						["xmlnsXlink", "xmlns:xlink"],
						["xHeight", "x-height"],
					]),
					Pt =
						/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
				function Ot(e) {
					return Pt.test("" + e)
						? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
						: e;
				}
				var Nt = null;
				function Rt(e) {
					return (
						(e = e.target || e.srcElement || window)
							.correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var At = null,
					Lt = null;
				function zt(e) {
					var t = He(e);
					if (t && (e = t.stateNode)) {
						var n = e[Le] || null;
						e: switch (((e = t.stateNode), t.type)) {
							case "input":
								if (
									(gt(
										e,
										n.value,
										n.defaultValue,
										n.defaultValue,
										n.checked,
										n.defaultChecked,
										n.type,
										n.name
									),
									(t = n.name),
									"radio" === n.type && null != t)
								) {
									for (n = e; n.parentNode; )
										n = n.parentNode;
									for (
										n = n.querySelectorAll(
											'input[name="' +
												mt("" + t) +
												'"][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = r[Le] || null;
											if (!a) throw Error(l(90));
											gt(
												r,
												a.value,
												a.defaultValue,
												a.defaultValue,
												a.checked,
												a.defaultChecked,
												a.type,
												a.name
											);
										}
									}
									for (t = 0; t < n.length; t++)
										(r = n[t]).form === e.form && dt(r);
								}
								break e;
							case "textarea":
								wt(e, n.value, n.defaultValue);
								break e;
							case "select":
								null != (t = n.value) &&
									bt(e, !!n.multiple, t, !1);
						}
					}
				}
				var Dt = !1;
				function Ft(e, t, n) {
					if (Dt) return e(t, n);
					Dt = !0;
					try {
						return e(t);
					} finally {
						if (
							((Dt = !1),
							(null !== At || null !== Lt) &&
								(Bu(),
								At &&
									((t = At),
									(e = Lt),
									(Lt = At = null),
									zt(t),
									e)))
						)
							for (t = 0; t < e.length; t++) zt(e[t]);
					}
				}
				function It(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = n[Le] || null;
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) ||
								(r = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n)
						throw Error(l(231, t, typeof n));
					return n;
				}
				var jt = !(
						"undefined" === typeof window ||
						"undefined" === typeof window.document ||
						"undefined" === typeof window.document.createElement
					),
					Ut = !1;
				if (jt)
					try {
						var Mt = {};
						Object.defineProperty(Mt, "passive", {
							get: function () {
								Ut = !0;
							},
						}),
							window.addEventListener("test", Mt, Mt),
							window.removeEventListener("test", Mt, Mt);
					} catch (zd) {
						Ut = !1;
					}
				var Bt = null,
					Ht = null,
					$t = null;
				function Wt() {
					if ($t) return $t;
					var e,
						t,
						n = Ht,
						r = n.length,
						a = "value" in Bt ? Bt.value : Bt.textContent,
						o = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var l = r - e;
					for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
					return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function Vt(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function qt() {
					return !0;
				}
				function Kt() {
					return !1;
				}
				function Qt(e) {
					function t(t, n, r, a, o) {
						for (var l in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = a),
						(this.target = o),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(l) &&
								((t = e[l]), (this[l] = t ? t(a) : a[l]));
						return (
							(this.isDefaultPrevented = (
								null != a.defaultPrevented
									? a.defaultPrevented
									: !1 === a.returnValue
							)
								? qt
								: Kt),
							(this.isPropagationStopped = Kt),
							this
						);
					}
					return (
						d(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" !== typeof e.returnValue &&
										  (e.returnValue = !1),
									(this.isDefaultPrevented = qt));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" !== typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = qt));
							},
							persist: function () {},
							isPersistent: qt,
						}),
						t
					);
				}
				var Gt,
					Yt,
					Xt,
					Jt = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					Zt = Qt(Jt),
					en = d({}, Jt, { view: 0, detail: 0 }),
					tn = Qt(en),
					nn = d({}, en, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: hn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== Xt &&
										(Xt && "mousemove" === e.type
											? ((Gt = e.screenX - Xt.screenX),
											  (Yt = e.screenY - Xt.screenY))
											: (Yt = Gt = 0),
										(Xt = e)),
								  Gt);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : Yt;
						},
					}),
					rn = Qt(nn),
					an = Qt(d({}, nn, { dataTransfer: 0 })),
					on = Qt(d({}, en, { relatedTarget: 0 })),
					ln = Qt(
						d({}, Jt, {
							animationName: 0,
							elapsedTime: 0,
							pseudoElement: 0,
						})
					),
					sn = Qt(
						d({}, Jt, {
							clipboardData: function (e) {
								return "clipboardData" in e
									? e.clipboardData
									: window.clipboardData;
							},
						})
					),
					un = Qt(d({}, Jt, { data: 0 })),
					cn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					fn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					dn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function pn(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = dn[e]) && !!t[e];
				}
				function hn() {
					return pn;
				}
				var mn = Qt(
						d({}, en, {
							key: function (e) {
								if (e.key) {
									var t = cn[e.key] || e.key;
									if ("Unidentified" !== t) return t;
								}
								return "keypress" === e.type
									? 13 === (e = Vt(e))
										? "Enter"
										: String.fromCharCode(e)
									: "keydown" === e.type || "keyup" === e.type
									? fn[e.keyCode] || "Unidentified"
									: "";
							},
							code: 0,
							location: 0,
							ctrlKey: 0,
							shiftKey: 0,
							altKey: 0,
							metaKey: 0,
							repeat: 0,
							locale: 0,
							getModifierState: hn,
							charCode: function (e) {
								return "keypress" === e.type ? Vt(e) : 0;
							},
							keyCode: function (e) {
								return "keydown" === e.type ||
									"keyup" === e.type
									? e.keyCode
									: 0;
							},
							which: function (e) {
								return "keypress" === e.type
									? Vt(e)
									: "keydown" === e.type || "keyup" === e.type
									? e.keyCode
									: 0;
							},
						})
					),
					gn = Qt(
						d({}, nn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					yn = Qt(
						d({}, en, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: hn,
						})
					),
					vn = Qt(
						d({}, Jt, {
							propertyName: 0,
							elapsedTime: 0,
							pseudoElement: 0,
						})
					),
					bn = Qt(
						d({}, nn, {
							deltaX: function (e) {
								return "deltaX" in e
									? e.deltaX
									: "wheelDeltaX" in e
									? -e.wheelDeltaX
									: 0;
							},
							deltaY: function (e) {
								return "deltaY" in e
									? e.deltaY
									: "wheelDeltaY" in e
									? -e.wheelDeltaY
									: "wheelDelta" in e
									? -e.wheelDelta
									: 0;
							},
							deltaZ: 0,
							deltaMode: 0,
						})
					),
					wn = Qt(d({}, Jt, { newState: 0, oldState: 0 })),
					Sn = [9, 13, 27, 32],
					kn = jt && "CompositionEvent" in window,
					En = null;
				jt &&
					"documentMode" in document &&
					(En = document.documentMode);
				var xn = jt && "TextEvent" in window && !En,
					Cn = jt && (!kn || (En && 8 < En && 11 >= En)),
					_n = String.fromCharCode(32),
					Tn = !1;
				function Pn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Sn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function On(e) {
					return "object" === typeof (e = e.detail) && "data" in e
						? e.data
						: null;
				}
				var Nn = !1;
				var Rn = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function An(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Rn[e.type] : "textarea" === t;
				}
				function Ln(e, t, n, r) {
					At ? (Lt ? Lt.push(r) : (Lt = [r])) : (At = r),
						0 < (t = Wc(t, "onChange")).length &&
							((n = new Zt("onChange", "change", null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var zn = null,
					Dn = null;
				function Fn(e) {
					Fc(e, 0);
				}
				function In(e) {
					if (dt($e(e))) return e;
				}
				function jn(e, t) {
					if ("change" === e) return t;
				}
				var Un = !1;
				if (jt) {
					var Mn;
					if (jt) {
						var Bn = "oninput" in document;
						if (!Bn) {
							var Hn = document.createElement("div");
							Hn.setAttribute("oninput", "return;"),
								(Bn = "function" === typeof Hn.oninput);
						}
						Mn = Bn;
					} else Mn = !1;
					Un =
						Mn &&
						(!document.documentMode || 9 < document.documentMode);
				}
				function $n() {
					zn &&
						(zn.detachEvent("onpropertychange", Wn),
						(Dn = zn = null));
				}
				function Wn(e) {
					if ("value" === e.propertyName && In(Dn)) {
						var t = [];
						Ln(t, Dn, e, Rt(e)), Ft(Fn, t);
					}
				}
				function Vn(e, t, n) {
					"focusin" === e
						? ($n(),
						  (Dn = n),
						  (zn = t).attachEvent("onpropertychange", Wn))
						: "focusout" === e && $n();
				}
				function qn(e) {
					if (
						"selectionchange" === e ||
						"keyup" === e ||
						"keydown" === e
					)
						return In(Dn);
				}
				function Kn(e, t) {
					if ("click" === e) return In(t);
				}
				function Qn(e, t) {
					if ("input" === e || "change" === e) return In(t);
				}
				var Gn =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
						  };
				function Yn(e, t) {
					if (Gn(e, t)) return !0;
					if (
						"object" !== typeof e ||
						null === e ||
						"object" !== typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!Y.call(t, a) || !Gn(e[a], t[a])) return !1;
					}
					return !0;
				}
				function Xn(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function Jn(e, t) {
					var n,
						r = Xn(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (
								((n = e + r.textContent.length),
								e <= t && n >= t)
							)
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = Xn(r);
					}
				}
				function Zn(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? Zn(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function er(e) {
					for (
						var t = pt(
							(e =
								null != e &&
								null != e.ownerDocument &&
								null != e.ownerDocument.defaultView
									? e.ownerDocument.defaultView
									: window).document
						);
						t instanceof e.HTMLIFrameElement;

					) {
						try {
							var n =
								"string" ===
								typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = pt((e = t.contentWindow).document);
					}
					return t;
				}
				function tr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				var nr =
						jt &&
						"documentMode" in document &&
						11 >= document.documentMode,
					rr = null,
					ar = null,
					or = null,
					lr = !1;
				function ir(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					lr ||
						null == rr ||
						rr !== pt(r) ||
						("selectionStart" in (r = rr) && tr(r)
							? (r = {
									start: r.selectionStart,
									end: r.selectionEnd,
							  })
							: (r = {
									anchorNode: (r = (
										(r.ownerDocument &&
											r.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
							  }),
						(or && Yn(or, r)) ||
							((or = r),
							0 < (r = Wc(ar, "onSelect")).length &&
								((t = new Zt("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = rr))));
				}
				function sr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var ur = {
						animationend: sr("Animation", "AnimationEnd"),
						animationiteration: sr(
							"Animation",
							"AnimationIteration"
						),
						animationstart: sr("Animation", "AnimationStart"),
						transitionrun: sr("Transition", "TransitionRun"),
						transitionstart: sr("Transition", "TransitionStart"),
						transitioncancel: sr("Transition", "TransitionCancel"),
						transitionend: sr("Transition", "TransitionEnd"),
					},
					cr = {},
					fr = {};
				function dr(e) {
					if (cr[e]) return cr[e];
					if (!ur[e]) return e;
					var t,
						n = ur[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in fr)
							return (cr[e] = n[t]);
					return e;
				}
				jt &&
					((fr = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete ur.animationend.animation,
						delete ur.animationiteration.animation,
						delete ur.animationstart.animation),
					"TransitionEvent" in window ||
						delete ur.transitionend.transition);
				var pr = dr("animationend"),
					hr = dr("animationiteration"),
					mr = dr("animationstart"),
					gr = dr("transitionrun"),
					yr = dr("transitionstart"),
					vr = dr("transitioncancel"),
					br = dr("transitionend"),
					wr = new Map(),
					Sr =
						"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
							" "
						);
				function kr(e, t) {
					wr.set(e, t), Qe(t, [e]);
				}
				Sr.push("scrollEnd");
				var Er = new WeakMap();
				function xr(e, t) {
					if ("object" === typeof e && null !== e) {
						var n = Er.get(e);
						return void 0 !== n
							? n
							: ((t = { value: e, source: t, stack: st(t) }),
							  Er.set(e, t),
							  t);
					}
					return { value: e, source: t, stack: st(t) };
				}
				var Cr = [],
					_r = 0,
					Tr = 0;
				function Pr() {
					for (var e = _r, t = (Tr = _r = 0); t < e; ) {
						var n = Cr[t];
						Cr[t++] = null;
						var r = Cr[t];
						Cr[t++] = null;
						var a = Cr[t];
						Cr[t++] = null;
						var o = Cr[t];
						if (((Cr[t++] = null), null !== r && null !== a)) {
							var l = r.pending;
							null === l
								? (a.next = a)
								: ((a.next = l.next), (l.next = a)),
								(r.pending = a);
						}
						0 !== o && Ar(n, a, o);
					}
				}
				function Or(e, t, n, r) {
					(Cr[_r++] = e),
						(Cr[_r++] = t),
						(Cr[_r++] = n),
						(Cr[_r++] = r),
						(Tr |= r),
						(e.lanes |= r),
						null !== (e = e.alternate) && (e.lanes |= r);
				}
				function Nr(e, t, n, r) {
					return Or(e, t, n, r), Lr(e);
				}
				function Rr(e, t) {
					return Or(e, null, null, t), Lr(e);
				}
				function Ar(e, t, n) {
					e.lanes |= n;
					var r = e.alternate;
					null !== r && (r.lanes |= n);
					for (var a = !1, o = e.return; null !== o; )
						(o.childLanes |= n),
							null !== (r = o.alternate) && (r.childLanes |= n),
							22 === o.tag &&
								(null === (e = o.stateNode) ||
									1 & e._visibility ||
									(a = !0)),
							(e = o),
							(o = o.return);
					return 3 === e.tag
						? ((o = e.stateNode),
						  a &&
								null !== t &&
								((a = 31 - pe(n)),
								null === (r = (e = o.hiddenUpdates)[a])
									? (e[a] = [t])
									: r.push(t),
								(t.lane = 536870912 | n)),
						  o)
						: null;
				}
				function Lr(e) {
					if (50 < Au) throw ((Au = 0), (Lu = null), Error(l(185)));
					for (var t = e.return; null !== t; ) t = (e = t).return;
					return 3 === e.tag ? e.stateNode : null;
				}
				var zr = {};
				function Dr(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.refCleanup = this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Fr(e, t, n, r) {
					return new Dr(e, t, n, r);
				}
				function Ir(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function jr(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Fr(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 65011712 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: {
										lanes: t.lanes,
										firstContext: t.firstContext,
								  }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						(n.refCleanup = e.refCleanup),
						n
					);
				}
				function Ur(e, t) {
					e.flags &= 65011714;
					var n = e.alternate;
					return (
						null === n
							? ((e.childLanes = 0),
							  (e.lanes = t),
							  (e.child = null),
							  (e.subtreeFlags = 0),
							  (e.memoizedProps = null),
							  (e.memoizedState = null),
							  (e.updateQueue = null),
							  (e.dependencies = null),
							  (e.stateNode = null))
							: ((e.childLanes = n.childLanes),
							  (e.lanes = n.lanes),
							  (e.child = n.child),
							  (e.subtreeFlags = 0),
							  (e.deletions = null),
							  (e.memoizedProps = n.memoizedProps),
							  (e.memoizedState = n.memoizedState),
							  (e.updateQueue = n.updateQueue),
							  (e.type = n.type),
							  (t = n.dependencies),
							  (e.dependencies =
									null === t
										? null
										: {
												lanes: t.lanes,
												firstContext: t.firstContext,
										  })),
						e
					);
				}
				function Mr(e, t, n, r, a, o) {
					var i = 0;
					if (((r = e), "function" === typeof e)) Ir(e) && (i = 1);
					else if ("string" === typeof e)
						i = (function (e, t, n) {
							if (1 === n || null != t.itemProp) return !1;
							switch (e) {
								case "meta":
								case "title":
									return !0;
								case "style":
									if (
										"string" !== typeof t.precedence ||
										"string" !== typeof t.href ||
										"" === t.href
									)
										break;
									return !0;
								case "link":
									if (
										"string" !== typeof t.rel ||
										"string" !== typeof t.href ||
										"" === t.href ||
										t.onLoad ||
										t.onError
									)
										break;
									return (
										"stylesheet" !== t.rel ||
										((e = t.disabled),
										"string" === typeof t.precedence &&
											null == e)
									);
								case "script":
									if (
										t.async &&
										"function" !== typeof t.async &&
										"symbol" !== typeof t.async &&
										!t.onLoad &&
										!t.onError &&
										t.src &&
										"string" === typeof t.src
									)
										return !0;
							}
							return !1;
						})(e, n, H.current)
							? 26
							: "html" === e || "head" === e || "body" === e
							? 27
							: 5;
					else
						e: switch (e) {
							case T:
								return (
									((e = Fr(31, n, t, a)).elementType = T),
									(e.lanes = o),
									e
								);
							case g:
								return Br(n.children, a, o, t);
							case y:
								(i = 8), (a |= 24);
								break;
							case v:
								return (
									((e = Fr(12, n, t, 2 | a)).elementType = v),
									(e.lanes = o),
									e
								);
							case E:
								return (
									((e = Fr(13, n, t, a)).elementType = E),
									(e.lanes = o),
									e
								);
							case x:
								return (
									((e = Fr(19, n, t, a)).elementType = x),
									(e.lanes = o),
									e
								);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case b:
										case S:
											i = 10;
											break e;
										case w:
											i = 9;
											break e;
										case k:
											i = 11;
											break e;
										case C:
											i = 14;
											break e;
										case _:
											(i = 16), (r = null);
											break e;
									}
								(i = 29),
									(n = Error(
										l(
											130,
											null === e ? "null" : typeof e,
											""
										)
									)),
									(r = null);
						}
					return (
						((t = Fr(i, n, t, a)).elementType = e),
						(t.type = r),
						(t.lanes = o),
						t
					);
				}
				function Br(e, t, n, r) {
					return ((e = Fr(7, e, r, t)).lanes = n), e;
				}
				function Hr(e, t, n) {
					return ((e = Fr(6, e, null, t)).lanes = n), e;
				}
				function $r(e, t, n) {
					return (
						((t = Fr(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				var Wr = [],
					Vr = 0,
					qr = null,
					Kr = 0,
					Qr = [],
					Gr = 0,
					Yr = null,
					Xr = 1,
					Jr = "";
				function Zr(e, t) {
					(Wr[Vr++] = Kr), (Wr[Vr++] = qr), (qr = e), (Kr = t);
				}
				function ea(e, t, n) {
					(Qr[Gr++] = Xr), (Qr[Gr++] = Jr), (Qr[Gr++] = Yr), (Yr = e);
					var r = Xr;
					e = Jr;
					var a = 32 - pe(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var o = 32 - pe(t) + a;
					if (30 < o) {
						var l = a - (a % 5);
						(o = (r & ((1 << l) - 1)).toString(32)),
							(r >>= l),
							(a -= l),
							(Xr = (1 << (32 - pe(t) + a)) | (n << a) | r),
							(Jr = o + e);
					} else (Xr = (1 << o) | (n << a) | r), (Jr = e);
				}
				function ta(e) {
					null !== e.return && (Zr(e, 1), ea(e, 1, 0));
				}
				function na(e) {
					for (; e === qr; )
						(qr = Wr[--Vr]),
							(Wr[Vr] = null),
							(Kr = Wr[--Vr]),
							(Wr[Vr] = null);
					for (; e === Yr; )
						(Yr = Qr[--Gr]),
							(Qr[Gr] = null),
							(Jr = Qr[--Gr]),
							(Qr[Gr] = null),
							(Xr = Qr[--Gr]),
							(Qr[Gr] = null);
				}
				var ra = null,
					aa = null,
					oa = !1,
					la = null,
					ia = !1,
					sa = Error(l(519));
				function ua(e) {
					throw (ma(xr(Error(l(418, "")), e)), sa);
				}
				function ca(e) {
					var t = e.stateNode,
						n = e.type,
						r = e.memoizedProps;
					switch (((t[Ae] = e), (t[Le] = r), n)) {
						case "dialog":
							Ic("cancel", t), Ic("close", t);
							break;
						case "iframe":
						case "object":
						case "embed":
							Ic("load", t);
							break;
						case "video":
						case "audio":
							for (n = 0; n < zc.length; n++) Ic(zc[n], t);
							break;
						case "source":
							Ic("error", t);
							break;
						case "img":
						case "image":
						case "link":
							Ic("error", t), Ic("load", t);
							break;
						case "details":
							Ic("toggle", t);
							break;
						case "input":
							Ic("invalid", t),
								yt(
									t,
									r.value,
									r.defaultValue,
									r.checked,
									r.defaultChecked,
									r.type,
									r.name,
									!0
								),
								ft(t);
							break;
						case "select":
							Ic("invalid", t);
							break;
						case "textarea":
							Ic("invalid", t),
								St(t, r.value, r.defaultValue, r.children),
								ft(t);
					}
					("string" !== typeof (n = r.children) &&
						"number" !== typeof n &&
						"bigint" !== typeof n) ||
					t.textContent === "" + n ||
					!0 === r.suppressHydrationWarning ||
					Yc(t.textContent, n)
						? (null != r.popover &&
								(Ic("beforetoggle", t), Ic("toggle", t)),
						  null != r.onScroll && Ic("scroll", t),
						  null != r.onScrollEnd && Ic("scrollend", t),
						  null != r.onClick && (t.onclick = Xc),
						  (t = !0))
						: (t = !1),
						t || ua(e);
				}
				function fa(e) {
					for (ra = e.return; ra; )
						switch (ra.tag) {
							case 5:
							case 13:
								return void (ia = !1);
							case 27:
							case 3:
								return void (ia = !0);
							default:
								ra = ra.return;
						}
				}
				function da(e) {
					if (e !== ra) return !1;
					if (!oa) return fa(e), (oa = !0), !1;
					var t,
						n = e.tag;
					if (
						((t = 3 !== n && 27 !== n) &&
							((t = 5 === n) &&
								(t =
									!(
										"form" !== (t = e.type) &&
										"button" !== t
									) || lf(e.type, e.memoizedProps)),
							(t = !t)),
						t && aa && ua(e),
						fa(e),
						13 === n)
					) {
						if (
							!(e =
								null !== (e = e.memoizedState)
									? e.dehydrated
									: null)
						)
							throw Error(l(317));
						e: {
							for (e = e.nextSibling, n = 0; e; ) {
								if (8 === e.nodeType)
									if ("/$" === (t = e.data)) {
										if (0 === n) {
											aa = vf(e.nextSibling);
											break e;
										}
										n--;
									} else
										("$" !== t &&
											"$!" !== t &&
											"$?" !== t) ||
											n++;
								e = e.nextSibling;
							}
							aa = null;
						}
					} else
						27 === n
							? ((n = aa),
							  hf(e.type)
									? ((e = bf), (bf = null), (aa = e))
									: (aa = n))
							: (aa = ra ? vf(e.stateNode.nextSibling) : null);
					return !0;
				}
				function pa() {
					(aa = ra = null), (oa = !1);
				}
				function ha() {
					var e = la;
					return (
						null !== e &&
							(null === bu ? (bu = e) : bu.push.apply(bu, e),
							(la = null)),
						e
					);
				}
				function ma(e) {
					null === la ? (la = [e]) : la.push(e);
				}
				var ga = U(null),
					ya = null,
					va = null;
				function ba(e, t, n) {
					B(ga, t._currentValue), (t._currentValue = n);
				}
				function wa(e) {
					(e._currentValue = ga.current), M(ga);
				}
				function Sa(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t),
								  null !== r && (r.childLanes |= t))
								: null !== r &&
								  (r.childLanes & t) !== t &&
								  (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function ka(e, t, n, r) {
					var a = e.child;
					for (null !== a && (a.return = e); null !== a; ) {
						var o = a.dependencies;
						if (null !== o) {
							var i = a.child;
							o = o.firstContext;
							e: for (; null !== o; ) {
								var s = o;
								o = a;
								for (var u = 0; u < t.length; u++)
									if (s.context === t[u]) {
										(o.lanes |= n),
											null !== (s = o.alternate) &&
												(s.lanes |= n),
											Sa(o.return, n, e),
											r || (i = null);
										break e;
									}
								o = s.next;
							}
						} else if (18 === a.tag) {
							if (null === (i = a.return)) throw Error(l(341));
							(i.lanes |= n),
								null !== (o = i.alternate) && (o.lanes |= n),
								Sa(i, n, e),
								(i = null);
						} else i = a.child;
						if (null !== i) i.return = a;
						else
							for (i = a; null !== i; ) {
								if (i === e) {
									i = null;
									break;
								}
								if (null !== (a = i.sibling)) {
									(a.return = i.return), (i = a);
									break;
								}
								i = i.return;
							}
						a = i;
					}
				}
				function Ea(e, t, n, r) {
					e = null;
					for (var a = t, o = !1; null !== a; ) {
						if (!o)
							if (0 !== (524288 & a.flags)) o = !0;
							else if (0 !== (262144 & a.flags)) break;
						if (10 === a.tag) {
							var i = a.alternate;
							if (null === i) throw Error(l(387));
							if (null !== (i = i.memoizedProps)) {
								var s = a.type;
								Gn(a.pendingProps.value, i.value) ||
									(null !== e ? e.push(s) : (e = [s]));
							}
						} else if (a === V.current) {
							if (null === (i = a.alternate)) throw Error(l(387));
							i.memoizedState.memoizedState !==
								a.memoizedState.memoizedState &&
								(null !== e ? e.push(Gf) : (e = [Gf]));
						}
						a = a.return;
					}
					null !== e && ka(t, e, n, r), (t.flags |= 262144);
				}
				function xa(e) {
					for (e = e.firstContext; null !== e; ) {
						if (!Gn(e.context._currentValue, e.memoizedValue))
							return !0;
						e = e.next;
					}
					return !1;
				}
				function Ca(e) {
					(ya = e),
						(va = null),
						null !== (e = e.dependencies) &&
							(e.firstContext = null);
				}
				function _a(e) {
					return Pa(ya, e);
				}
				function Ta(e, t) {
					return null === ya && Ca(e), Pa(e, t);
				}
				function Pa(e, t) {
					var n = t._currentValue;
					if (
						((t = { context: t, memoizedValue: n, next: null }),
						null === va)
					) {
						if (null === e) throw Error(l(308));
						(va = t),
							(e.dependencies = { lanes: 0, firstContext: t }),
							(e.flags |= 524288);
					} else va = va.next = t;
					return n;
				}
				var Oa =
						"undefined" !== typeof AbortController
							? AbortController
							: function () {
									var e = [],
										t = (this.signal = {
											aborted: !1,
											addEventListener: function (t, n) {
												e.push(n);
											},
										});
									this.abort = function () {
										(t.aborted = !0),
											e.forEach(function (e) {
												return e();
											});
									};
							  },
					Na = r.unstable_scheduleCallback,
					Ra = r.unstable_NormalPriority,
					Aa = {
						$$typeof: S,
						Consumer: null,
						Provider: null,
						_currentValue: null,
						_currentValue2: null,
						_threadCount: 0,
					};
				function La() {
					return {
						controller: new Oa(),
						data: new Map(),
						refCount: 0,
					};
				}
				function za(e) {
					e.refCount--,
						0 === e.refCount &&
							Na(Ra, function () {
								e.controller.abort();
							});
				}
				var Da = null,
					Fa = 0,
					Ia = 0,
					ja = null;
				function Ua() {
					if (0 === --Fa && null !== Da) {
						null !== ja && (ja.status = "fulfilled");
						var e = Da;
						(Da = null), (Ia = 0), (ja = null);
						for (var t = 0; t < e.length; t++) (0, e[t])();
					}
				}
				var Ma = z.S;
				z.S = function (e, t) {
					"object" === typeof t &&
						null !== t &&
						"function" === typeof t.then &&
						(function (e, t) {
							if (null === Da) {
								var n = (Da = []);
								(Fa = 0),
									(Ia = Oc()),
									(ja = {
										status: "pending",
										value: void 0,
										then: function (e) {
											n.push(e);
										},
									});
							}
							Fa++, t.then(Ua, Ua);
						})(0, t),
						null !== Ma && Ma(e, t);
				};
				var Ba = U(null);
				function Ha() {
					var e = Ba.current;
					return null !== e ? e : ru.pooledCache;
				}
				function $a(e, t) {
					B(Ba, null === t ? Ba.current : t.pool);
				}
				function Wa() {
					var e = Ha();
					return null === e
						? null
						: { parent: Aa._currentValue, pool: e };
				}
				var Va = Error(l(460)),
					qa = Error(l(474)),
					Ka = Error(l(542)),
					Qa = { then: function () {} };
				function Ga(e) {
					return "fulfilled" === (e = e.status) || "rejected" === e;
				}
				function Ya() {}
				function Xa(e, t, n) {
					switch (
						(void 0 === (n = e[n])
							? e.push(t)
							: n !== t && (t.then(Ya, Ya), (t = n)),
						t.status)
					) {
						case "fulfilled":
							return t.value;
						case "rejected":
							throw (eo((e = t.reason)), e);
						default:
							if ("string" === typeof t.status) t.then(Ya, Ya);
							else {
								if (
									null !== (e = ru) &&
									100 < e.shellSuspendCounter
								)
									throw Error(l(482));
								((e = t).status = "pending"),
									e.then(
										function (e) {
											if ("pending" === t.status) {
												var n = t;
												(n.status = "fulfilled"),
													(n.value = e);
											}
										},
										function (e) {
											if ("pending" === t.status) {
												var n = t;
												(n.status = "rejected"),
													(n.reason = e);
											}
										}
									);
							}
							switch (t.status) {
								case "fulfilled":
									return t.value;
								case "rejected":
									throw (eo((e = t.reason)), e);
							}
							throw ((Ja = t), Va);
					}
				}
				var Ja = null;
				function Za() {
					if (null === Ja) throw Error(l(459));
					var e = Ja;
					return (Ja = null), e;
				}
				function eo(e) {
					if (e === Va || e === Ka) throw Error(l(483));
				}
				var to = !1;
				function no(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							lanes: 0,
							hiddenCallbacks: null,
						},
						callbacks: null,
					};
				}
				function ro(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								callbacks: null,
							});
				}
				function ao(e) {
					return {
						lane: e,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function oo(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & nu))) {
						var a = r.pending;
						return (
							null === a
								? (t.next = t)
								: ((t.next = a.next), (a.next = t)),
							(r.pending = t),
							(t = Lr(e)),
							Ar(e, null, n),
							t
						);
					}
					return Or(e, r, t, n), Lr(e);
				}
				function lo(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 !== (4194048 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), Te(e, n);
					}
				}
				function io(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var l = {
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: null,
									next: null,
								};
								null === o ? (a = o = l) : (o = o.next = l),
									(n = n.next);
							} while (null !== n);
							null === o ? (a = o = t) : (o = o.next = t);
						} else a = o = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: a,
								lastBaseUpdate: o,
								shared: r.shared,
								callbacks: r.callbacks,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				var so = !1;
				function uo() {
					if (so) {
						if (null !== ja) throw ja;
					}
				}
				function co(e, t, n, r) {
					so = !1;
					var a = e.updateQueue;
					to = !1;
					var o = a.firstBaseUpdate,
						l = a.lastBaseUpdate,
						i = a.shared.pending;
					if (null !== i) {
						a.shared.pending = null;
						var s = i,
							u = s.next;
						(s.next = null),
							null === l ? (o = u) : (l.next = u),
							(l = s);
						var c = e.alternate;
						null !== c &&
							(i = (c = c.updateQueue).lastBaseUpdate) !== l &&
							(null === i
								? (c.firstBaseUpdate = u)
								: (i.next = u),
							(c.lastBaseUpdate = s));
					}
					if (null !== o) {
						var f = a.baseState;
						for (l = 0, c = u = s = null, i = o; ; ) {
							var p = -536870913 & i.lane,
								h = p !== i.lane;
							if (h ? (ou & p) === p : (r & p) === p) {
								0 !== p && p === Ia && (so = !0),
									null !== c &&
										(c = c.next =
											{
												lane: 0,
												tag: i.tag,
												payload: i.payload,
												callback: null,
												next: null,
											});
								e: {
									var m = e,
										g = i;
									p = t;
									var y = n;
									switch (g.tag) {
										case 1:
											if (
												"function" ===
												typeof (m = g.payload)
											) {
												f = m.call(y, f, p);
												break e;
											}
											f = m;
											break e;
										case 3:
											m.flags = (-65537 & m.flags) | 128;
										case 0:
											if (
												null ===
													(p =
														"function" ===
														typeof (m = g.payload)
															? m.call(y, f, p)
															: m) ||
												void 0 === p
											)
												break e;
											f = d({}, f, p);
											break e;
										case 2:
											to = !0;
									}
								}
								null !== (p = i.callback) &&
									((e.flags |= 64),
									h && (e.flags |= 8192),
									null === (h = a.callbacks)
										? (a.callbacks = [p])
										: h.push(p));
							} else
								(h = {
									lane: p,
									tag: i.tag,
									payload: i.payload,
									callback: i.callback,
									next: null,
								}),
									null === c
										? ((u = c = h), (s = f))
										: (c = c.next = h),
									(l |= p);
							if (null === (i = i.next)) {
								if (null === (i = a.shared.pending)) break;
								(i = (h = i).next),
									(h.next = null),
									(a.lastBaseUpdate = h),
									(a.shared.pending = null);
							}
						}
						null === c && (s = f),
							(a.baseState = s),
							(a.firstBaseUpdate = u),
							(a.lastBaseUpdate = c),
							null === o && (a.shared.lanes = 0),
							(pu |= l),
							(e.lanes = l),
							(e.memoizedState = f);
					}
				}
				function fo(e, t) {
					if ("function" !== typeof e) throw Error(l(191, e));
					e.call(t);
				}
				function po(e, t) {
					var n = e.callbacks;
					if (null !== n)
						for (e.callbacks = null, e = 0; e < n.length; e++)
							fo(n[e], t);
				}
				var ho = U(null),
					mo = U(0);
				function go(e, t) {
					B(mo, (e = fu)), B(ho, t), (fu = e | t.baseLanes);
				}
				function yo() {
					B(mo, fu), B(ho, ho.current);
				}
				function vo() {
					(fu = mo.current), M(ho), M(mo);
				}
				var bo = 0,
					wo = null,
					So = null,
					ko = null,
					Eo = !1,
					xo = !1,
					Co = !1,
					_o = 0,
					To = 0,
					Po = null,
					Oo = 0;
				function No() {
					throw Error(l(321));
				}
				function Ro(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!Gn(e[n], t[n])) return !1;
					return !0;
				}
				function Ao(e, t, n, r, a, o) {
					return (
						(bo = o),
						(wo = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(z.H =
							null === e || null === e.memoizedState ? ql : Kl),
						(Co = !1),
						(o = n(r, a)),
						(Co = !1),
						xo && (o = zo(t, n, r, a)),
						Lo(e),
						o
					);
				}
				function Lo(e) {
					z.H = Vl;
					var t = null !== So && null !== So.next;
					if (
						((bo = 0),
						(ko = So = wo = null),
						(Eo = !1),
						(To = 0),
						(Po = null),
						t)
					)
						throw Error(l(300));
					null === e ||
						Ti ||
						(null !== (e = e.dependencies) && xa(e) && (Ti = !0));
				}
				function zo(e, t, n, r) {
					wo = e;
					var a = 0;
					do {
						if ((xo && (Po = null), (To = 0), (xo = !1), 25 <= a))
							throw Error(l(301));
						if (
							((a += 1), (ko = So = null), null != e.updateQueue)
						) {
							var o = e.updateQueue;
							(o.lastEffect = null),
								(o.events = null),
								(o.stores = null),
								null != o.memoCache && (o.memoCache.index = 0);
						}
						(z.H = Ql), (o = t(n, r));
					} while (xo);
					return o;
				}
				function Do() {
					var e = z.H,
						t = e.useState()[0];
					return (
						(t = "function" === typeof t.then ? Bo(t) : t),
						(e = e.useState()[0]),
						(null !== So ? So.memoizedState : null) !== e &&
							(wo.flags |= 1024),
						t
					);
				}
				function Fo() {
					var e = 0 !== _o;
					return (_o = 0), e;
				}
				function Io(e, t, n) {
					(t.updateQueue = e.updateQueue),
						(t.flags &= -2053),
						(e.lanes &= ~n);
				}
				function jo(e) {
					if (Eo) {
						for (e = e.memoizedState; null !== e; ) {
							var t = e.queue;
							null !== t && (t.pending = null), (e = e.next);
						}
						Eo = !1;
					}
					(bo = 0),
						(ko = So = wo = null),
						(xo = !1),
						(To = _o = 0),
						(Po = null);
				}
				function Uo() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === ko
							? (wo.memoizedState = ko = e)
							: (ko = ko.next = e),
						ko
					);
				}
				function Mo() {
					if (null === So) {
						var e = wo.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = So.next;
					var t = null === ko ? wo.memoizedState : ko.next;
					if (null !== t) (ko = t), (So = e);
					else {
						if (null === e) {
							if (null === wo.alternate) throw Error(l(467));
							throw Error(l(310));
						}
						(e = {
							memoizedState: (So = e).memoizedState,
							baseState: So.baseState,
							baseQueue: So.baseQueue,
							queue: So.queue,
							next: null,
						}),
							null === ko
								? (wo.memoizedState = ko = e)
								: (ko = ko.next = e);
					}
					return ko;
				}
				function Bo(e) {
					var t = To;
					return (
						(To += 1),
						null === Po && (Po = []),
						(e = Xa(Po, e, t)),
						(t = wo),
						null === (null === ko ? t.memoizedState : ko.next) &&
							((t = t.alternate),
							(z.H =
								null === t || null === t.memoizedState
									? ql
									: Kl)),
						e
					);
				}
				function Ho(e) {
					if (null !== e && "object" === typeof e) {
						if ("function" === typeof e.then) return Bo(e);
						if (e.$$typeof === S) return _a(e);
					}
					throw Error(l(438, String(e)));
				}
				function $o(e) {
					var t = null,
						n = wo.updateQueue;
					if ((null !== n && (t = n.memoCache), null == t)) {
						var r = wo.alternate;
						null !== r &&
							null !== (r = r.updateQueue) &&
							null != (r = r.memoCache) &&
							(t = {
								data: r.data.map(function (e) {
									return e.slice();
								}),
								index: 0,
							});
					}
					if (
						(null == t && (t = { data: [], index: 0 }),
						null === n &&
							((n = {
								lastEffect: null,
								events: null,
								stores: null,
								memoCache: null,
							}),
							(wo.updateQueue = n)),
						(n.memoCache = t),
						void 0 === (n = t.data[t.index]))
					)
						for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
							n[r] = P;
					return t.index++, n;
				}
				function Wo(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function Vo(e) {
					return qo(Mo(), So, e);
				}
				function qo(e, t, n) {
					var r = e.queue;
					if (null === r) throw Error(l(311));
					r.lastRenderedReducer = n;
					var a = e.baseQueue,
						o = r.pending;
					if (null !== o) {
						if (null !== a) {
							var i = a.next;
							(a.next = o.next), (o.next = i);
						}
						(t.baseQueue = a = o), (r.pending = null);
					}
					if (((o = e.baseState), null === a)) e.memoizedState = o;
					else {
						var s = (i = null),
							u = null,
							c = (t = a.next),
							f = !1;
						do {
							var d = -536870913 & c.lane;
							if (
								d !== c.lane ? (ou & d) === d : (bo & d) === d
							) {
								var p = c.revertLane;
								if (0 === p)
									null !== u &&
										(u = u.next =
											{
												lane: 0,
												revertLane: 0,
												action: c.action,
												hasEagerState: c.hasEagerState,
												eagerState: c.eagerState,
												next: null,
											}),
										d === Ia && (f = !0);
								else {
									if ((bo & p) === p) {
										(c = c.next), p === Ia && (f = !0);
										continue;
									}
									(d = {
										lane: 0,
										revertLane: c.revertLane,
										action: c.action,
										hasEagerState: c.hasEagerState,
										eagerState: c.eagerState,
										next: null,
									}),
										null === u
											? ((s = u = d), (i = o))
											: (u = u.next = d),
										(wo.lanes |= p),
										(pu |= p);
								}
								(d = c.action),
									Co && n(o, d),
									(o = c.hasEagerState
										? c.eagerState
										: n(o, d));
							} else
								(p = {
									lane: d,
									revertLane: c.revertLane,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								}),
									null === u
										? ((s = u = p), (i = o))
										: (u = u.next = p),
									(wo.lanes |= d),
									(pu |= d);
							c = c.next;
						} while (null !== c && c !== t);
						if (
							(null === u ? (i = o) : (u.next = s),
							!Gn(o, e.memoizedState) &&
								((Ti = !0), f && null !== (n = ja)))
						)
							throw n;
						(e.memoizedState = o),
							(e.baseState = i),
							(e.baseQueue = u),
							(r.lastRenderedState = o);
					}
					return (
						null === a && (r.lanes = 0),
						[e.memoizedState, r.dispatch]
					);
				}
				function Ko(e) {
					var t = Mo(),
						n = t.queue;
					if (null === n) throw Error(l(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						o = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var i = (a = a.next);
						do {
							(o = e(o, i.action)), (i = i.next);
						} while (i !== a);
						Gn(o, t.memoizedState) || (Ti = !0),
							(t.memoizedState = o),
							null === t.baseQueue && (t.baseState = o),
							(n.lastRenderedState = o);
					}
					return [o, r];
				}
				function Qo(e, t, n) {
					var r = wo,
						a = Mo(),
						o = oa;
					if (o) {
						if (void 0 === n) throw Error(l(407));
						n = n();
					} else n = t();
					var i = !Gn((So || a).memoizedState, n);
					if (
						(i && ((a.memoizedState = n), (Ti = !0)),
						(a = a.queue),
						yl(2048, 8, Xo.bind(null, r, a, e), [e]),
						a.getSnapshot !== t ||
							i ||
							(null !== ko && 1 & ko.memoizedState.tag))
					) {
						if (
							((r.flags |= 2048),
							hl(
								9,
								{ destroy: void 0, resource: void 0 },
								Yo.bind(null, r, a, n, t),
								null
							),
							null === ru)
						)
							throw Error(l(349));
						o || 0 !== (124 & bo) || Go(r, t, n);
					}
					return n;
				}
				function Go(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = wo.updateQueue)
							? ((t = {
									lastEffect: null,
									events: null,
									stores: null,
									memoCache: null,
							  }),
							  (wo.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function Yo(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Jo(t) && Zo(e);
				}
				function Xo(e, t, n) {
					return n(function () {
						Jo(t) && Zo(e);
					});
				}
				function Jo(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !Gn(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Zo(e) {
					var t = Rr(e, 2);
					null !== t && Fu(t, e, 2);
				}
				function el(e) {
					var t = Uo();
					if ("function" === typeof e) {
						var n = e;
						if (((e = n()), Co)) {
							de(!0);
							try {
								n();
							} finally {
								de(!1);
							}
						}
					}
					return (
						(t.memoizedState = t.baseState = e),
						(t.queue = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Wo,
							lastRenderedState: e,
						}),
						t
					);
				}
				function tl(e, t, n, r) {
					return (
						(e.baseState = n),
						qo(e, So, "function" === typeof r ? r : Wo)
					);
				}
				function nl(e, t, n, r, a) {
					if (Hl(e)) throw Error(l(485));
					if (null !== (e = t.action)) {
						var o = {
							payload: a,
							action: e,
							next: null,
							isTransition: !0,
							status: "pending",
							value: null,
							reason: null,
							listeners: [],
							then: function (e) {
								o.listeners.push(e);
							},
						};
						null !== z.T ? n(!0) : (o.isTransition = !1),
							r(o),
							null === (n = t.pending)
								? ((o.next = t.pending = o), rl(t, o))
								: ((o.next = n.next), (t.pending = n.next = o));
					}
				}
				function rl(e, t) {
					var n = t.action,
						r = t.payload,
						a = e.state;
					if (t.isTransition) {
						var o = z.T,
							l = {};
						z.T = l;
						try {
							var i = n(a, r),
								s = z.S;
							null !== s && s(l, i), al(e, t, i);
						} catch (u) {
							ll(e, t, u);
						} finally {
							z.T = o;
						}
					} else
						try {
							al(e, t, (o = n(a, r)));
						} catch (c) {
							ll(e, t, c);
						}
				}
				function al(e, t, n) {
					null !== n &&
					"object" === typeof n &&
					"function" === typeof n.then
						? n.then(
								function (n) {
									ol(e, t, n);
								},
								function (n) {
									return ll(e, t, n);
								}
						  )
						: ol(e, t, n);
				}
				function ol(e, t, n) {
					(t.status = "fulfilled"),
						(t.value = n),
						il(t),
						(e.state = n),
						null !== (t = e.pending) &&
							((n = t.next) === t
								? (e.pending = null)
								: ((n = n.next), (t.next = n), rl(e, n)));
				}
				function ll(e, t, n) {
					var r = e.pending;
					if (((e.pending = null), null !== r)) {
						r = r.next;
						do {
							(t.status = "rejected"),
								(t.reason = n),
								il(t),
								(t = t.next);
						} while (t !== r);
					}
					e.action = null;
				}
				function il(e) {
					e = e.listeners;
					for (var t = 0; t < e.length; t++) (0, e[t])();
				}
				function sl(e, t) {
					return t;
				}
				function ul(e, t) {
					if (oa) {
						var n = ru.formState;
						if (null !== n) {
							e: {
								var r = wo;
								if (oa) {
									if (aa) {
										t: {
											for (
												var a = aa, o = ia;
												8 !== a.nodeType;

											) {
												if (!o) {
													a = null;
													break t;
												}
												if (
													null ===
													(a = vf(a.nextSibling))
												) {
													a = null;
													break t;
												}
											}
											a =
												"F!" === (o = a.data) ||
												"F" === o
													? a
													: null;
										}
										if (a) {
											(aa = vf(a.nextSibling)),
												(r = "F!" === a.data);
											break e;
										}
									}
									ua(r);
								}
								r = !1;
							}
							r && (t = n[0]);
						}
					}
					return (
						((n = Uo()).memoizedState = n.baseState = t),
						(r = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: sl,
							lastRenderedState: t,
						}),
						(n.queue = r),
						(n = Ul.bind(null, wo, r)),
						(r.dispatch = n),
						(r = el(!1)),
						(o = Bl.bind(null, wo, !1, r.queue)),
						(a = {
							state: t,
							dispatch: null,
							action: e,
							pending: null,
						}),
						((r = Uo()).queue = a),
						(n = nl.bind(null, wo, a, o, n)),
						(a.dispatch = n),
						(r.memoizedState = e),
						[t, n, !1]
					);
				}
				function cl(e) {
					return fl(Mo(), So, e);
				}
				function fl(e, t, n) {
					if (
						((t = qo(e, t, sl)[0]),
						(e = Vo(Wo)[0]),
						"object" === typeof t &&
							null !== t &&
							"function" === typeof t.then)
					)
						try {
							var r = Bo(t);
						} catch (l) {
							if (l === Va) throw Ka;
							throw l;
						}
					else r = t;
					var a = (t = Mo()).queue,
						o = a.dispatch;
					return (
						n !== t.memoizedState &&
							((wo.flags |= 2048),
							hl(
								9,
								{ destroy: void 0, resource: void 0 },
								dl.bind(null, a, n),
								null
							)),
						[r, o, e]
					);
				}
				function dl(e, t) {
					e.action = t;
				}
				function pl(e) {
					var t = Mo(),
						n = So;
					if (null !== n) return fl(t, n, e);
					Mo(), (t = t.memoizedState);
					var r = (n = Mo()).queue.dispatch;
					return (n.memoizedState = e), [t, r, !1];
				}
				function hl(e, t, n, r) {
					return (
						(e = {
							tag: e,
							create: n,
							deps: r,
							inst: t,
							next: null,
						}),
						null === (t = wo.updateQueue) &&
							((t = {
								lastEffect: null,
								events: null,
								stores: null,
								memoCache: null,
							}),
							(wo.updateQueue = t)),
						null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next),
							  (n.next = e),
							  (e.next = r),
							  (t.lastEffect = e)),
						e
					);
				}
				function ml() {
					return Mo().memoizedState;
				}
				function gl(e, t, n, r) {
					var a = Uo();
					(r = void 0 === r ? null : r),
						(wo.flags |= e),
						(a.memoizedState = hl(
							1 | t,
							{ destroy: void 0, resource: void 0 },
							n,
							r
						));
				}
				function yl(e, t, n, r) {
					var a = Mo();
					r = void 0 === r ? null : r;
					var o = a.memoizedState.inst;
					null !== So && null !== r && Ro(r, So.memoizedState.deps)
						? (a.memoizedState = hl(t, o, n, r))
						: ((wo.flags |= e),
						  (a.memoizedState = hl(1 | t, o, n, r)));
				}
				function vl(e, t) {
					gl(8390656, 8, e, t);
				}
				function bl(e, t) {
					yl(2048, 8, e, t);
				}
				function wl(e, t) {
					return yl(4, 2, e, t);
				}
				function Sl(e, t) {
					return yl(4, 4, e, t);
				}
				function kl(e, t) {
					if ("function" === typeof t) {
						e = e();
						var n = t(e);
						return function () {
							"function" === typeof n ? n() : t(null);
						};
					}
					if (null !== t && void 0 !== t)
						return (
							(e = e()),
							(t.current = e),
							function () {
								t.current = null;
							}
						);
				}
				function El(e, t, n) {
					(n = null !== n && void 0 !== n ? n.concat([e]) : null),
						yl(4, 4, kl.bind(null, t, e), n);
				}
				function xl() {}
				function Cl(e, t) {
					var n = Mo();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== t && Ro(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function _l(e, t) {
					var n = Mo();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					if (null !== t && Ro(t, r[1])) return r[0];
					if (((r = e()), Co)) {
						de(!0);
						try {
							e();
						} finally {
							de(!1);
						}
					}
					return (n.memoizedState = [r, t]), r;
				}
				function Tl(e, t, n) {
					return void 0 === n || 0 !== (1073741824 & bo)
						? (e.memoizedState = t)
						: ((e.memoizedState = n),
						  (e = Du()),
						  (wo.lanes |= e),
						  (pu |= e),
						  n);
				}
				function Pl(e, t, n, r) {
					return Gn(n, t)
						? n
						: null !== ho.current
						? ((e = Tl(e, n, r)), Gn(e, t) || (Ti = !0), e)
						: 0 === (42 & bo)
						? ((Ti = !0), (e.memoizedState = n))
						: ((e = Du()), (wo.lanes |= e), (pu |= e), t);
				}
				function Ol(e, t, n, r, a) {
					var o = D.p;
					D.p = 0 !== o && 8 > o ? o : 8;
					var l = z.T,
						i = {};
					(z.T = i), Bl(e, !1, t, n);
					try {
						var s = a(),
							u = z.S;
						if (
							(null !== u && u(i, s),
							null !== s &&
								"object" === typeof s &&
								"function" === typeof s.then)
						)
							Ml(
								e,
								t,
								(function (e, t) {
									var n = [],
										r = {
											status: "pending",
											value: null,
											reason: null,
											then: function (e) {
												n.push(e);
											},
										};
									return (
										e.then(
											function () {
												(r.status = "fulfilled"),
													(r.value = t);
												for (
													var e = 0;
													e < n.length;
													e++
												)
													(0, n[e])(t);
											},
											function (e) {
												for (
													r.status = "rejected",
														r.reason = e,
														e = 0;
													e < n.length;
													e++
												)
													(0, n[e])(void 0);
											}
										),
										r
									);
								})(s, r),
								zu()
							);
						else Ml(e, t, r, zu());
					} catch (c) {
						Ml(
							e,
							t,
							{
								then: function () {},
								status: "rejected",
								reason: c,
							},
							zu()
						);
					} finally {
						(D.p = o), (z.T = l);
					}
				}
				function Nl() {}
				function Rl(e, t, n, r) {
					if (5 !== e.tag) throw Error(l(476));
					var a = Al(e).queue;
					Ol(
						e,
						a,
						t,
						F,
						null === n
							? Nl
							: function () {
									return Ll(e), n(r);
							  }
					);
				}
				function Al(e) {
					var t = e.memoizedState;
					if (null !== t) return t;
					var n = {};
					return (
						((t = {
							memoizedState: F,
							baseState: F,
							baseQueue: null,
							queue: {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: Wo,
								lastRenderedState: F,
							},
							next: null,
						}).next = {
							memoizedState: n,
							baseState: n,
							baseQueue: null,
							queue: {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: Wo,
								lastRenderedState: n,
							},
							next: null,
						}),
						(e.memoizedState = t),
						null !== (e = e.alternate) && (e.memoizedState = t),
						t
					);
				}
				function Ll(e) {
					Ml(e, Al(e).next.queue, {}, zu());
				}
				function zl() {
					return _a(Gf);
				}
				function Dl() {
					return Mo().memoizedState;
				}
				function Fl() {
					return Mo().memoizedState;
				}
				function Il(e) {
					for (var t = e.return; null !== t; ) {
						switch (t.tag) {
							case 24:
							case 3:
								var n = zu(),
									r = oo(t, (e = ao(n)), n);
								return (
									null !== r && (Fu(r, t, n), lo(r, t, n)),
									(t = { cache: La() }),
									void (e.payload = t)
								);
						}
						t = t.return;
					}
				}
				function jl(e, t, n) {
					var r = zu();
					(n = {
						lane: r,
						revertLane: 0,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					}),
						Hl(e)
							? $l(t, n)
							: null !== (n = Nr(e, t, n, r)) &&
							  (Fu(n, e, r), Wl(n, t, r));
				}
				function Ul(e, t, n) {
					Ml(e, t, n, zu());
				}
				function Ml(e, t, n, r) {
					var a = {
						lane: r,
						revertLane: 0,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					};
					if (Hl(e)) $l(t, a);
					else {
						var o = e.alternate;
						if (
							0 === e.lanes &&
							(null === o || 0 === o.lanes) &&
							null !== (o = t.lastRenderedReducer)
						)
							try {
								var l = t.lastRenderedState,
									i = o(l, n);
								if (
									((a.hasEagerState = !0),
									(a.eagerState = i),
									Gn(i, l))
								)
									return (
										Or(e, t, a, 0), null === ru && Pr(), !1
									);
							} catch (s) {}
						if (null !== (n = Nr(e, t, a, r)))
							return Fu(n, e, r), Wl(n, t, r), !0;
					}
					return !1;
				}
				function Bl(e, t, n, r) {
					if (
						((r = {
							lane: 2,
							revertLane: Oc(),
							action: r,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						Hl(e))
					) {
						if (t) throw Error(l(479));
					} else null !== (t = Nr(e, n, r, 2)) && Fu(t, e, 2);
				}
				function Hl(e) {
					var t = e.alternate;
					return e === wo || (null !== t && t === wo);
				}
				function $l(e, t) {
					xo = Eo = !0;
					var n = e.pending;
					null === n
						? (t.next = t)
						: ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function Wl(e, t, n) {
					if (0 !== (4194048 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), Te(e, n);
					}
				}
				var Vl = {
						readContext: _a,
						use: Ho,
						useCallback: No,
						useContext: No,
						useEffect: No,
						useImperativeHandle: No,
						useLayoutEffect: No,
						useInsertionEffect: No,
						useMemo: No,
						useReducer: No,
						useRef: No,
						useState: No,
						useDebugValue: No,
						useDeferredValue: No,
						useTransition: No,
						useSyncExternalStore: No,
						useId: No,
						useHostTransitionStatus: No,
						useFormState: No,
						useActionState: No,
						useOptimistic: No,
						useMemoCache: No,
						useCacheRefresh: No,
					},
					ql = {
						readContext: _a,
						use: Ho,
						useCallback: function (e, t) {
							return (
								(Uo().memoizedState = [
									e,
									void 0 === t ? null : t,
								]),
								e
							);
						},
						useContext: _a,
						useEffect: vl,
						useImperativeHandle: function (e, t, n) {
							(n =
								null !== n && void 0 !== n
									? n.concat([e])
									: null),
								gl(4194308, 4, kl.bind(null, t, e), n);
						},
						useLayoutEffect: function (e, t) {
							return gl(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							gl(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = Uo();
							t = void 0 === t ? null : t;
							var r = e();
							if (Co) {
								de(!0);
								try {
									e();
								} finally {
									de(!1);
								}
							}
							return (n.memoizedState = [r, t]), r;
						},
						useReducer: function (e, t, n) {
							var r = Uo();
							if (void 0 !== n) {
								var a = n(t);
								if (Co) {
									de(!0);
									try {
										n(t);
									} finally {
										de(!1);
									}
								}
							} else a = t;
							return (
								(r.memoizedState = r.baseState = a),
								(e = {
									pending: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: a,
								}),
								(r.queue = e),
								(e = e.dispatch = jl.bind(null, wo, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (
								(e = { current: e }), (Uo().memoizedState = e)
							);
						},
						useState: function (e) {
							var t = (e = el(e)).queue,
								n = Ul.bind(null, wo, t);
							return (t.dispatch = n), [e.memoizedState, n];
						},
						useDebugValue: xl,
						useDeferredValue: function (e, t) {
							return Tl(Uo(), e, t);
						},
						useTransition: function () {
							var e = el(!1);
							return (
								(e = Ol.bind(null, wo, e.queue, !0, !1)),
								(Uo().memoizedState = e),
								[!1, e]
							);
						},
						useSyncExternalStore: function (e, t, n) {
							var r = wo,
								a = Uo();
							if (oa) {
								if (void 0 === n) throw Error(l(407));
								n = n();
							} else {
								if (((n = t()), null === ru))
									throw Error(l(349));
								0 !== (124 & ou) || Go(r, t, n);
							}
							a.memoizedState = n;
							var o = { value: n, getSnapshot: t };
							return (
								(a.queue = o),
								vl(Xo.bind(null, r, o, e), [e]),
								(r.flags |= 2048),
								hl(
									9,
									{ destroy: void 0, resource: void 0 },
									Yo.bind(null, r, o, n, t),
									null
								),
								n
							);
						},
						useId: function () {
							var e = Uo(),
								t = ru.identifierPrefix;
							if (oa) {
								var n = Jr;
								(t =
									"\xab" +
									t +
									"R" +
									(n =
										(
											Xr & ~(1 << (32 - pe(Xr) - 1))
										).toString(32) + n)),
									0 < (n = _o++) &&
										(t += "H" + n.toString(32)),
									(t += "\xbb");
							} else
								t =
									"\xab" +
									t +
									"r" +
									(n = Oo++).toString(32) +
									"\xbb";
							return (e.memoizedState = t);
						},
						useHostTransitionStatus: zl,
						useFormState: ul,
						useActionState: ul,
						useOptimistic: function (e) {
							var t = Uo();
							t.memoizedState = t.baseState = e;
							var n = {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: null,
								lastRenderedState: null,
							};
							return (
								(t.queue = n),
								(t = Bl.bind(null, wo, !0, n)),
								(n.dispatch = t),
								[e, t]
							);
						},
						useMemoCache: $o,
						useCacheRefresh: function () {
							return (Uo().memoizedState = Il.bind(null, wo));
						},
					},
					Kl = {
						readContext: _a,
						use: Ho,
						useCallback: Cl,
						useContext: _a,
						useEffect: bl,
						useImperativeHandle: El,
						useInsertionEffect: wl,
						useLayoutEffect: Sl,
						useMemo: _l,
						useReducer: Vo,
						useRef: ml,
						useState: function () {
							return Vo(Wo);
						},
						useDebugValue: xl,
						useDeferredValue: function (e, t) {
							return Pl(Mo(), So.memoizedState, e, t);
						},
						useTransition: function () {
							var e = Vo(Wo)[0],
								t = Mo().memoizedState;
							return ["boolean" === typeof e ? e : Bo(e), t];
						},
						useSyncExternalStore: Qo,
						useId: Dl,
						useHostTransitionStatus: zl,
						useFormState: cl,
						useActionState: cl,
						useOptimistic: function (e, t) {
							return tl(Mo(), 0, e, t);
						},
						useMemoCache: $o,
						useCacheRefresh: Fl,
					},
					Ql = {
						readContext: _a,
						use: Ho,
						useCallback: Cl,
						useContext: _a,
						useEffect: bl,
						useImperativeHandle: El,
						useInsertionEffect: wl,
						useLayoutEffect: Sl,
						useMemo: _l,
						useReducer: Ko,
						useRef: ml,
						useState: function () {
							return Ko(Wo);
						},
						useDebugValue: xl,
						useDeferredValue: function (e, t) {
							var n = Mo();
							return null === So
								? Tl(n, e, t)
								: Pl(n, So.memoizedState, e, t);
						},
						useTransition: function () {
							var e = Ko(Wo)[0],
								t = Mo().memoizedState;
							return ["boolean" === typeof e ? e : Bo(e), t];
						},
						useSyncExternalStore: Qo,
						useId: Dl,
						useHostTransitionStatus: zl,
						useFormState: pl,
						useActionState: pl,
						useOptimistic: function (e, t) {
							var n = Mo();
							return null !== So
								? tl(n, 0, e, t)
								: ((n.baseState = e), [e, n.queue.dispatch]);
						},
						useMemoCache: $o,
						useCacheRefresh: Fl,
					},
					Gl = null,
					Yl = 0;
				function Xl(e) {
					var t = Yl;
					return (Yl += 1), null === Gl && (Gl = []), Xa(Gl, e, t);
				}
				function Jl(e, t) {
					(t = t.props.ref), (e.ref = void 0 !== t ? t : null);
				}
				function Zl(e, t) {
					if (t.$$typeof === p) throw Error(l(525));
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							l(
								31,
								"[object Object]" === e
									? "object with keys {" +
											Object.keys(t).join(", ") +
											"}"
									: e
							)
						))
					);
				}
				function ei(e) {
					return (0, e._init)(e._payload);
				}
				function ti(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r
								? ((t.deletions = [n]), (t.flags |= 16))
								: r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e) {
						for (var t = new Map(); null !== e; )
							null !== e.key
								? t.set(e.key, e)
								: t.set(e.index, e),
								(e = e.sibling);
						return t;
					}
					function a(e, t) {
						return (
							((e = jr(e, t)).index = 0), (e.sibling = null), e
						);
					}
					function o(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 67108866), n)
										: r
									: ((t.flags |= 67108866), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function i(t) {
						return (
							e && null === t.alternate && (t.flags |= 67108866),
							t
						);
					}
					function s(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Hr(n, e.mode, r)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function u(e, t, n, r) {
						var o = n.type;
						return o === g
							? f(e, t, n.props.children, r, n.key)
							: null !== t &&
							  (t.elementType === o ||
									("object" === typeof o &&
										null !== o &&
										o.$$typeof === _ &&
										ei(o) === t.type))
							? (Jl((t = a(t, n.props)), n), (t.return = e), t)
							: (Jl(
									(t = Mr(
										n.type,
										n.key,
										n.props,
										null,
										e.mode,
										r
									)),
									n
							  ),
							  (t.return = e),
							  t);
					}
					function c(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = $r(n, e.mode, r)).return = e), t)
							: (((t = a(t, n.children || [])).return = e), t);
					}
					function f(e, t, n, r, o) {
						return null === t || 7 !== t.tag
							? (((t = Br(n, e.mode, r, o)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function d(e, t, n) {
						if (
							("string" === typeof t && "" !== t) ||
							"number" === typeof t ||
							"bigint" === typeof t
						)
							return ((t = Hr("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case h:
									return (
										Jl(
											(n = Mr(
												t.type,
												t.key,
												t.props,
												null,
												e.mode,
												n
											)),
											t
										),
										(n.return = e),
										n
									);
								case m:
									return (
										((t = $r(t, e.mode, n)).return = e), t
									);
								case _:
									return d(
										e,
										(t = (0, t._init)(t._payload)),
										n
									);
							}
							if (L(t) || N(t))
								return (
									((t = Br(t, e.mode, n, null)).return = e), t
								);
							if ("function" === typeof t.then)
								return d(e, Xl(t), n);
							if (t.$$typeof === S) return d(e, Ta(e, t), n);
							Zl(e, t);
						}
						return null;
					}
					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if (
							("string" === typeof n && "" !== n) ||
							"number" === typeof n ||
							"bigint" === typeof n
						)
							return null !== a ? null : s(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case h:
									return n.key === a ? u(e, t, n, r) : null;
								case m:
									return n.key === a ? c(e, t, n, r) : null;
								case _:
									return p(
										e,
										t,
										(n = (a = n._init)(n._payload)),
										r
									);
							}
							if (L(n) || N(n))
								return null !== a ? null : f(e, t, n, r, null);
							if ("function" === typeof n.then)
								return p(e, t, Xl(n), r);
							if (n.$$typeof === S) return p(e, t, Ta(e, n), r);
							Zl(e, n);
						}
						return null;
					}
					function y(e, t, n, r, a) {
						if (
							("string" === typeof r && "" !== r) ||
							"number" === typeof r ||
							"bigint" === typeof r
						)
							return s(t, (e = e.get(n) || null), "" + r, a);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case h:
									return u(
										t,
										(e =
											e.get(null === r.key ? n : r.key) ||
											null),
										r,
										a
									);
								case m:
									return c(
										t,
										(e =
											e.get(null === r.key ? n : r.key) ||
											null),
										r,
										a
									);
								case _:
									return y(
										e,
										t,
										n,
										(r = (0, r._init)(r._payload)),
										a
									);
							}
							if (L(r) || N(r))
								return f(t, (e = e.get(n) || null), r, a, null);
							if ("function" === typeof r.then)
								return y(e, t, n, Xl(r), a);
							if (r.$$typeof === S)
								return y(e, t, n, Ta(t, r), a);
							Zl(t, r);
						}
						return null;
					}
					function v(s, u, c, f) {
						if (
							("object" === typeof c &&
								null !== c &&
								c.type === g &&
								null === c.key &&
								(c = c.props.children),
							"object" === typeof c && null !== c)
						) {
							switch (c.$$typeof) {
								case h:
									e: {
										for (var b = c.key; null !== u; ) {
											if (u.key === b) {
												if ((b = c.type) === g) {
													if (7 === u.tag) {
														n(s, u.sibling),
															((f = a(
																u,
																c.props.children
															)).return = s),
															(s = f);
														break e;
													}
												} else if (
													u.elementType === b ||
													("object" === typeof b &&
														null !== b &&
														b.$$typeof === _ &&
														ei(b) === u.type)
												) {
													n(s, u.sibling),
														Jl(
															(f = a(u, c.props)),
															c
														),
														(f.return = s),
														(s = f);
													break e;
												}
												n(s, u);
												break;
											}
											t(s, u), (u = u.sibling);
										}
										c.type === g
											? (((f = Br(
													c.props.children,
													s.mode,
													f,
													c.key
											  )).return = s),
											  (s = f))
											: (Jl(
													(f = Mr(
														c.type,
														c.key,
														c.props,
														null,
														s.mode,
														f
													)),
													c
											  ),
											  (f.return = s),
											  (s = f));
									}
									return i(s);
								case m:
									e: {
										for (b = c.key; null !== u; ) {
											if (u.key === b) {
												if (
													4 === u.tag &&
													u.stateNode
														.containerInfo ===
														c.containerInfo &&
													u.stateNode
														.implementation ===
														c.implementation
												) {
													n(s, u.sibling),
														((f = a(
															u,
															c.children || []
														)).return = s),
														(s = f);
													break e;
												}
												n(s, u);
												break;
											}
											t(s, u), (u = u.sibling);
										}
										((f = $r(c, s.mode, f)).return = s),
											(s = f);
									}
									return i(s);
								case _:
									return v(
										s,
										u,
										(c = (b = c._init)(c._payload)),
										f
									);
							}
							if (L(c))
								return (function (a, l, i, s) {
									for (
										var u = null,
											c = null,
											f = l,
											h = (l = 0),
											m = null;
										null !== f && h < i.length;
										h++
									) {
										f.index > h
											? ((m = f), (f = null))
											: (m = f.sibling);
										var g = p(a, f, i[h], s);
										if (null === g) {
											null === f && (f = m);
											break;
										}
										e &&
											f &&
											null === g.alternate &&
											t(a, f),
											(l = o(g, l, h)),
											null === c
												? (u = g)
												: (c.sibling = g),
											(c = g),
											(f = m);
									}
									if (h === i.length)
										return n(a, f), oa && Zr(a, h), u;
									if (null === f) {
										for (; h < i.length; h++)
											null !== (f = d(a, i[h], s)) &&
												((l = o(f, l, h)),
												null === c
													? (u = f)
													: (c.sibling = f),
												(c = f));
										return oa && Zr(a, h), u;
									}
									for (f = r(f); h < i.length; h++)
										null !== (m = y(f, a, h, i[h], s)) &&
											(e &&
												null !== m.alternate &&
												f.delete(
													null === m.key ? h : m.key
												),
											(l = o(m, l, h)),
											null === c
												? (u = m)
												: (c.sibling = m),
											(c = m));
									return (
										e &&
											f.forEach(function (e) {
												return t(a, e);
											}),
										oa && Zr(a, h),
										u
									);
								})(s, u, c, f);
							if (N(c)) {
								if ("function" !== typeof (b = N(c)))
									throw Error(l(150));
								return (function (a, i, s, u) {
									if (null == s) throw Error(l(151));
									for (
										var c = null,
											f = null,
											h = i,
											m = (i = 0),
											g = null,
											v = s.next();
										null !== h && !v.done;
										m++, v = s.next()
									) {
										h.index > m
											? ((g = h), (h = null))
											: (g = h.sibling);
										var b = p(a, h, v.value, u);
										if (null === b) {
											null === h && (h = g);
											break;
										}
										e &&
											h &&
											null === b.alternate &&
											t(a, h),
											(i = o(b, i, m)),
											null === f
												? (c = b)
												: (f.sibling = b),
											(f = b),
											(h = g);
									}
									if (v.done)
										return n(a, h), oa && Zr(a, m), c;
									if (null === h) {
										for (; !v.done; m++, v = s.next())
											null !== (v = d(a, v.value, u)) &&
												((i = o(v, i, m)),
												null === f
													? (c = v)
													: (f.sibling = v),
												(f = v));
										return oa && Zr(a, m), c;
									}
									for (h = r(h); !v.done; m++, v = s.next())
										null !== (v = y(h, a, m, v.value, u)) &&
											(e &&
												null !== v.alternate &&
												h.delete(
													null === v.key ? m : v.key
												),
											(i = o(v, i, m)),
											null === f
												? (c = v)
												: (f.sibling = v),
											(f = v));
									return (
										e &&
											h.forEach(function (e) {
												return t(a, e);
											}),
										oa && Zr(a, m),
										c
									);
								})(s, u, (c = b.call(c)), f);
							}
							if ("function" === typeof c.then)
								return v(s, u, Xl(c), f);
							if (c.$$typeof === S) return v(s, u, Ta(s, c), f);
							Zl(s, c);
						}
						return ("string" === typeof c && "" !== c) ||
							"number" === typeof c ||
							"bigint" === typeof c
							? ((c = "" + c),
							  null !== u && 6 === u.tag
									? (n(s, u.sibling),
									  ((f = a(u, c)).return = s),
									  (s = f))
									: (n(s, u),
									  ((f = Hr(c, s.mode, f)).return = s),
									  (s = f)),
							  i(s))
							: n(s, u);
					}
					return function (e, t, n, r) {
						try {
							Yl = 0;
							var a = v(e, t, n, r);
							return (Gl = null), a;
						} catch (l) {
							if (l === Va || l === Ka) throw l;
							var o = Fr(29, l, null, e.mode);
							return (o.lanes = r), (o.return = e), o;
						}
					};
				}
				var ni = ti(!0),
					ri = ti(!1),
					ai = U(null),
					oi = null;
				function li(e) {
					var t = e.alternate;
					B(ci, 1 & ci.current),
						B(ai, e),
						null === oi &&
							(null === t ||
								null !== ho.current ||
								null !== t.memoizedState) &&
							(oi = e);
				}
				function ii(e) {
					if (22 === e.tag) {
						if ((B(ci, ci.current), B(ai, e), null === oi)) {
							var t = e.alternate;
							null !== t && null !== t.memoizedState && (oi = e);
						}
					} else si();
				}
				function si() {
					B(ci, ci.current), B(ai, ai.current);
				}
				function ui(e) {
					M(ai), oi === e && (oi = null), M(ci);
				}
				var ci = U(0);
				function fi(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									yf(n))
							)
								return t;
						} else if (
							19 === t.tag &&
							void 0 !== t.memoizedProps.revealOrder
						) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e)
								return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				function di(e, t, n, r) {
					(n =
						null === (n = n(r, (t = e.memoizedState))) ||
						void 0 === n
							? t
							: d({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var pi = {
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = zu(),
							a = ao(r);
						(a.payload = t),
							void 0 !== n && null !== n && (a.callback = n),
							null !== (t = oo(e, a, r)) &&
								(Fu(t, e, r), lo(t, e, r));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = zu(),
							a = ao(r);
						(a.tag = 1),
							(a.payload = t),
							void 0 !== n && null !== n && (a.callback = n),
							null !== (t = oo(e, a, r)) &&
								(Fu(t, e, r), lo(t, e, r));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = zu(),
							r = ao(n);
						(r.tag = 2),
							void 0 !== t && null !== t && (r.callback = t),
							null !== (t = oo(e, r, n)) &&
								(Fu(t, e, n), lo(t, e, n));
					},
				};
				function hi(e, t, n, r, a, o, l) {
					return "function" ===
						typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, o, l)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!Yn(n, r) ||
								!Yn(a, o);
				}
				function mi(e, t, n, r) {
					(e = t.state),
						"function" === typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						"function" ===
							typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e &&
							pi.enqueueReplaceState(t, t.state, null);
				}
				function gi(e, t) {
					var n = t;
					if ("ref" in t)
						for (var r in ((n = {}), t))
							"ref" !== r && (n[r] = t[r]);
					if ((e = e.defaultProps))
						for (var a in (n === t && (n = d({}, n)), e))
							void 0 === n[a] && (n[a] = e[a]);
					return n;
				}
				var yi =
					"function" === typeof reportError
						? reportError
						: function (e) {
								if (
									"object" === typeof window &&
									"function" === typeof window.ErrorEvent
								) {
									var t = new window.ErrorEvent("error", {
										bubbles: !0,
										cancelable: !0,
										message:
											"object" === typeof e &&
											null !== e &&
											"string" === typeof e.message
												? String(e.message)
												: String(e),
										error: e,
									});
									if (!window.dispatchEvent(t)) return;
								} else if (
									"object" === typeof process &&
									"function" === typeof process.emit
								)
									return void process.emit(
										"uncaughtException",
										e
									);
								console.error(e);
						  };
				function vi(e) {
					yi(e);
				}
				function bi(e) {
					console.error(e);
				}
				function wi(e) {
					yi(e);
				}
				function Si(e, t) {
					try {
						(0, e.onUncaughtError)(t.value, {
							componentStack: t.stack,
						});
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				function ki(e, t, n) {
					try {
						(0, e.onCaughtError)(n.value, {
							componentStack: n.stack,
							errorBoundary: 1 === t.tag ? t.stateNode : null,
						});
					} catch (r) {
						setTimeout(function () {
							throw r;
						});
					}
				}
				function Ei(e, t, n) {
					return (
						((n = ao(n)).tag = 3),
						(n.payload = { element: null }),
						(n.callback = function () {
							Si(e, t);
						}),
						n
					);
				}
				function xi(e) {
					return ((e = ao(e)).tag = 3), e;
				}
				function Ci(e, t, n, r) {
					var a = n.type.getDerivedStateFromError;
					if ("function" === typeof a) {
						var o = r.value;
						(e.payload = function () {
							return a(o);
						}),
							(e.callback = function () {
								ki(t, n, r);
							});
					}
					var l = n.stateNode;
					null !== l &&
						"function" === typeof l.componentDidCatch &&
						(e.callback = function () {
							ki(t, n, r),
								"function" !== typeof a &&
									(null === xu
										? (xu = new Set([this]))
										: xu.add(this));
							var e = r.stack;
							this.componentDidCatch(r.value, {
								componentStack: null !== e ? e : "",
							});
						});
				}
				var _i = Error(l(461)),
					Ti = !1;
				function Pi(e, t, n, r) {
					t.child =
						null === e ? ri(t, null, n, r) : ni(t, e.child, n, r);
				}
				function Oi(e, t, n, r, a) {
					n = n.render;
					var o = t.ref;
					if ("ref" in r) {
						var l = {};
						for (var i in r) "ref" !== i && (l[i] = r[i]);
					} else l = r;
					return (
						Ca(t),
						(r = Ao(e, t, n, l, o, a)),
						(i = Fo()),
						null === e || Ti
							? (oa && i && ta(t),
							  (t.flags |= 1),
							  Pi(e, t, r, a),
							  t.child)
							: (Io(e, t, a), Gi(e, t, a))
					);
				}
				function Ni(e, t, n, r, a) {
					if (null === e) {
						var o = n.type;
						return "function" !== typeof o ||
							Ir(o) ||
							void 0 !== o.defaultProps ||
							null !== n.compare
							? (((e = Mr(n.type, null, r, t, t.mode, a)).ref =
									t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = o), Ri(e, t, o, r, a));
					}
					if (((o = e.child), !Yi(e, a))) {
						var l = o.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : Yn)(l, r) &&
							e.ref === t.ref
						)
							return Gi(e, t, a);
					}
					return (
						(t.flags |= 1),
						((e = jr(o, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function Ri(e, t, n, r, a) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (Yn(o, r) && e.ref === t.ref) {
							if (
								((Ti = !1), (t.pendingProps = r = o), !Yi(e, a))
							)
								return (t.lanes = e.lanes), Gi(e, t, a);
							0 !== (131072 & e.flags) && (Ti = !0);
						}
					}
					return Di(e, t, n, r, a);
				}
				function Ai(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode) {
						if (0 !== (128 & t.flags)) {
							if (
								((r = null !== o ? o.baseLanes | n : n),
								null !== e)
							) {
								for (a = t.child = e.child, o = 0; null !== a; )
									(o = o | a.lanes | a.childLanes),
										(a = a.sibling);
								t.childLanes = o & ~r;
							} else (t.childLanes = 0), (t.child = null);
							return Li(e, t, r, n);
						}
						if (0 === (536870912 & n))
							return (
								(t.lanes = t.childLanes = 536870912),
								Li(e, t, null !== o ? o.baseLanes | n : n, n)
							);
						(t.memoizedState = { baseLanes: 0, cachePool: null }),
							null !== e &&
								$a(0, null !== o ? o.cachePool : null),
							null !== o ? go(t, o) : yo(),
							ii(t);
					} else
						null !== o
							? ($a(0, o.cachePool),
							  go(t, o),
							  si(),
							  (t.memoizedState = null))
							: (null !== e && $a(0, null), yo(), si());
					return Pi(e, t, a, n), t.child;
				}
				function Li(e, t, n, r) {
					var a = Ha();
					return (
						(a =
							null === a
								? null
								: { parent: Aa._currentValue, pool: a }),
						(t.memoizedState = { baseLanes: n, cachePool: a }),
						null !== e && $a(0, null),
						yo(),
						ii(t),
						null !== e && Ea(e, t, r, !0),
						null
					);
				}
				function zi(e, t) {
					var n = t.ref;
					if (null === n)
						null !== e && null !== e.ref && (t.flags |= 4194816);
					else {
						if ("function" !== typeof n && "object" !== typeof n)
							throw Error(l(284));
						(null !== e && e.ref === n) || (t.flags |= 4194816);
					}
				}
				function Di(e, t, n, r, a) {
					return (
						Ca(t),
						(n = Ao(e, t, n, r, void 0, a)),
						(r = Fo()),
						null === e || Ti
							? (oa && r && ta(t),
							  (t.flags |= 1),
							  Pi(e, t, n, a),
							  t.child)
							: (Io(e, t, a), Gi(e, t, a))
					);
				}
				function Fi(e, t, n, r, a, o) {
					return (
						Ca(t),
						(t.updateQueue = null),
						(n = zo(t, r, n, a)),
						Lo(e),
						(r = Fo()),
						null === e || Ti
							? (oa && r && ta(t),
							  (t.flags |= 1),
							  Pi(e, t, n, o),
							  t.child)
							: (Io(e, t, o), Gi(e, t, o))
					);
				}
				function Ii(e, t, n, r, a) {
					if ((Ca(t), null === t.stateNode)) {
						var o = zr,
							l = n.contextType;
						"object" === typeof l && null !== l && (o = _a(l)),
							(o = new n(r, o)),
							(t.memoizedState =
								null !== o.state && void 0 !== o.state
									? o.state
									: null),
							(o.updater = pi),
							(t.stateNode = o),
							(o._reactInternals = t),
							((o = t.stateNode).props = r),
							(o.state = t.memoizedState),
							(o.refs = {}),
							no(t),
							(l = n.contextType),
							(o.context =
								"object" === typeof l && null !== l
									? _a(l)
									: zr),
							(o.state = t.memoizedState),
							"function" ===
								typeof (l = n.getDerivedStateFromProps) &&
								(di(t, n, l, r), (o.state = t.memoizedState)),
							"function" === typeof n.getDerivedStateFromProps ||
								"function" ===
									typeof o.getSnapshotBeforeUpdate ||
								("function" !==
									typeof o.UNSAFE_componentWillMount &&
									"function" !==
										typeof o.componentWillMount) ||
								((l = o.state),
								"function" === typeof o.componentWillMount &&
									o.componentWillMount(),
								"function" ===
									typeof o.UNSAFE_componentWillMount &&
									o.UNSAFE_componentWillMount(),
								l !== o.state &&
									pi.enqueueReplaceState(o, o.state, null),
								co(t, r, o, a),
								uo(),
								(o.state = t.memoizedState)),
							"function" === typeof o.componentDidMount &&
								(t.flags |= 4194308),
							(r = !0);
					} else if (null === e) {
						o = t.stateNode;
						var i = t.memoizedProps,
							s = gi(n, i);
						o.props = s;
						var u = o.context,
							c = n.contextType;
						(l = zr),
							"object" === typeof c && null !== c && (l = _a(c));
						var f = n.getDerivedStateFromProps;
						(c =
							"function" === typeof f ||
							"function" === typeof o.getSnapshotBeforeUpdate),
							(i = t.pendingProps !== i),
							c ||
								("function" !==
									typeof o.UNSAFE_componentWillReceiveProps &&
									"function" !==
										typeof o.componentWillReceiveProps) ||
								((i || u !== l) && mi(t, o, r, l)),
							(to = !1);
						var d = t.memoizedState;
						(o.state = d),
							co(t, r, o, a),
							uo(),
							(u = t.memoizedState),
							i || d !== u || to
								? ("function" === typeof f &&
										(di(t, n, f, r), (u = t.memoizedState)),
								  (s = to || hi(t, n, s, r, d, u, l))
										? (c ||
												("function" !==
													typeof o.UNSAFE_componentWillMount &&
													"function" !==
														typeof o.componentWillMount) ||
												("function" ===
													typeof o.componentWillMount &&
													o.componentWillMount(),
												"function" ===
													typeof o.UNSAFE_componentWillMount &&
													o.UNSAFE_componentWillMount()),
										  "function" ===
												typeof o.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" ===
												typeof o.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = r),
										  (t.memoizedState = u)),
								  (o.props = r),
								  (o.state = u),
								  (o.context = l),
								  (r = s))
								: ("function" === typeof o.componentDidMount &&
										(t.flags |= 4194308),
								  (r = !1));
					} else {
						(o = t.stateNode),
							ro(e, t),
							(c = gi(n, (l = t.memoizedProps))),
							(o.props = c),
							(f = t.pendingProps),
							(d = o.context),
							(u = n.contextType),
							(s = zr),
							"object" === typeof u && null !== u && (s = _a(u)),
							(u =
								"function" ===
									typeof (i = n.getDerivedStateFromProps) ||
								"function" ===
									typeof o.getSnapshotBeforeUpdate) ||
								("function" !==
									typeof o.UNSAFE_componentWillReceiveProps &&
									"function" !==
										typeof o.componentWillReceiveProps) ||
								((l !== f || d !== s) && mi(t, o, r, s)),
							(to = !1),
							(d = t.memoizedState),
							(o.state = d),
							co(t, r, o, a),
							uo();
						var p = t.memoizedState;
						l !== f ||
						d !== p ||
						to ||
						(null !== e &&
							null !== e.dependencies &&
							xa(e.dependencies))
							? ("function" === typeof i &&
									(di(t, n, i, r), (p = t.memoizedState)),
							  (c =
									to ||
									hi(t, n, c, r, d, p, s) ||
									(null !== e &&
										null !== e.dependencies &&
										xa(e.dependencies)))
									? (u ||
											("function" !==
												typeof o.UNSAFE_componentWillUpdate &&
												"function" !==
													typeof o.componentWillUpdate) ||
											("function" ===
												typeof o.componentWillUpdate &&
												o.componentWillUpdate(r, p, s),
											"function" ===
												typeof o.UNSAFE_componentWillUpdate &&
												o.UNSAFE_componentWillUpdate(
													r,
													p,
													s
												)),
									  "function" ===
											typeof o.componentDidUpdate &&
											(t.flags |= 4),
									  "function" ===
											typeof o.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" !==
											typeof o.componentDidUpdate ||
											(l === e.memoizedProps &&
												d === e.memoizedState) ||
											(t.flags |= 4),
									  "function" !==
											typeof o.getSnapshotBeforeUpdate ||
											(l === e.memoizedProps &&
												d === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = r),
									  (t.memoizedState = p)),
							  (o.props = r),
							  (o.state = p),
							  (o.context = s),
							  (r = c))
							: ("function" !== typeof o.componentDidUpdate ||
									(l === e.memoizedProps &&
										d === e.memoizedState) ||
									(t.flags |= 4),
							  "function" !== typeof o.getSnapshotBeforeUpdate ||
									(l === e.memoizedProps &&
										d === e.memoizedState) ||
									(t.flags |= 1024),
							  (r = !1));
					}
					return (
						(o = r),
						zi(e, t),
						(r = 0 !== (128 & t.flags)),
						o || r
							? ((o = t.stateNode),
							  (n =
									r &&
									"function" !==
										typeof n.getDerivedStateFromError
										? null
										: o.render()),
							  (t.flags |= 1),
							  null !== e && r
									? ((t.child = ni(t, e.child, null, a)),
									  (t.child = ni(t, null, n, a)))
									: Pi(e, t, n, a),
							  (t.memoizedState = o.state),
							  (e = t.child))
							: (e = Gi(e, t, a)),
						e
					);
				}
				function ji(e, t, n, r) {
					return pa(), (t.flags |= 256), Pi(e, t, n, r), t.child;
				}
				var Ui = {
					dehydrated: null,
					treeContext: null,
					retryLane: 0,
					hydrationErrors: null,
				};
				function Mi(e) {
					return { baseLanes: e, cachePool: Wa() };
				}
				function Bi(e, t, n) {
					return (
						(e = null !== e ? e.childLanes & ~n : 0),
						t && (e |= gu),
						e
					);
				}
				function Hi(e, t, n) {
					var r,
						a = t.pendingProps,
						o = !1,
						i = 0 !== (128 & t.flags);
					if (
						((r = i) ||
							(r =
								(null === e || null !== e.memoizedState) &&
								0 !== (2 & ci.current)),
						r && ((o = !0), (t.flags &= -129)),
						(r = 0 !== (32 & t.flags)),
						(t.flags &= -33),
						null === e)
					) {
						if (oa) {
							if ((o ? li(t) : si(), oa)) {
								var s,
									u = aa;
								if ((s = u)) {
									e: {
										for (
											s = u, u = ia;
											8 !== s.nodeType;

										) {
											if (!u) {
												u = null;
												break e;
											}
											if (
												null === (s = vf(s.nextSibling))
											) {
												u = null;
												break e;
											}
										}
										u = s;
									}
									null !== u
										? ((t.memoizedState = {
												dehydrated: u,
												treeContext:
													null !== Yr
														? {
																id: Xr,
																overflow: Jr,
														  }
														: null,
												retryLane: 536870912,
												hydrationErrors: null,
										  }),
										  ((s = Fr(
												18,
												null,
												null,
												0
										  )).stateNode = u),
										  (s.return = t),
										  (t.child = s),
										  (ra = t),
										  (aa = null),
										  (s = !0))
										: (s = !1);
								}
								s || ua(t);
							}
							if (
								null !== (u = t.memoizedState) &&
								null !== (u = u.dehydrated)
							)
								return (
									yf(u)
										? (t.lanes = 32)
										: (t.lanes = 536870912),
									null
								);
							ui(t);
						}
						return (
							(u = a.children),
							(a = a.fallback),
							o
								? (si(),
								  (u = Wi(
										{ mode: "hidden", children: u },
										(o = t.mode)
								  )),
								  (a = Br(a, o, n, null)),
								  (u.return = t),
								  (a.return = t),
								  (u.sibling = a),
								  (t.child = u),
								  ((o = t.child).memoizedState = Mi(n)),
								  (o.childLanes = Bi(e, r, n)),
								  (t.memoizedState = Ui),
								  a)
								: (li(t), $i(t, u))
						);
					}
					if (
						null !== (s = e.memoizedState) &&
						null !== (u = s.dehydrated)
					) {
						if (i)
							256 & t.flags
								? (li(t), (t.flags &= -257), (t = Vi(e, t, n)))
								: null !== t.memoizedState
								? (si(),
								  (t.child = e.child),
								  (t.flags |= 128),
								  (t = null))
								: (si(),
								  (o = a.fallback),
								  (u = t.mode),
								  (a = Wi(
										{
											mode: "visible",
											children: a.children,
										},
										u
								  )),
								  ((o = Br(o, u, n, null)).flags |= 2),
								  (a.return = t),
								  (o.return = t),
								  (a.sibling = o),
								  (t.child = a),
								  ni(t, e.child, null, n),
								  ((a = t.child).memoizedState = Mi(n)),
								  (a.childLanes = Bi(e, r, n)),
								  (t.memoizedState = Ui),
								  (t = o));
						else if ((li(t), yf(u))) {
							if ((r = u.nextSibling && u.nextSibling.dataset))
								var c = r.dgst;
							(r = c),
								((a = Error(l(419))).stack = ""),
								(a.digest = r),
								ma({ value: a, source: null, stack: null }),
								(t = Vi(e, t, n));
						} else if (
							(Ti || Ea(e, t, n, !1),
							(r = 0 !== (n & e.childLanes)),
							Ti || r)
						) {
							if (
								null !== (r = ru) &&
								0 !==
									(a =
										0 !==
										((a =
											0 !== (42 & (a = n & -n))
												? 1
												: Pe(a)) &
											(r.suspendedLanes | n))
											? 0
											: a) &&
								a !== s.retryLane
							)
								throw (
									((s.retryLane = a),
									Rr(e, a),
									Fu(r, e, a),
									_i)
								);
							"$?" === u.data || Ku(), (t = Vi(e, t, n));
						} else
							"$?" === u.data
								? ((t.flags |= 192),
								  (t.child = e.child),
								  (t = null))
								: ((e = s.treeContext),
								  (aa = vf(u.nextSibling)),
								  (ra = t),
								  (oa = !0),
								  (la = null),
								  (ia = !1),
								  null !== e &&
										((Qr[Gr++] = Xr),
										(Qr[Gr++] = Jr),
										(Qr[Gr++] = Yr),
										(Xr = e.id),
										(Jr = e.overflow),
										(Yr = t)),
								  ((t = $i(t, a.children)).flags |= 4096));
						return t;
					}
					return o
						? (si(),
						  (o = a.fallback),
						  (u = t.mode),
						  (c = (s = e.child).sibling),
						  ((a = jr(s, {
								mode: "hidden",
								children: a.children,
						  })).subtreeFlags = 65011712 & s.subtreeFlags),
						  null !== c
								? (o = jr(c, o))
								: ((o = Br(o, u, n, null)).flags |= 2),
						  (o.return = t),
						  (a.return = t),
						  (a.sibling = o),
						  (t.child = a),
						  (a = o),
						  (o = t.child),
						  null === (u = e.child.memoizedState)
								? (u = Mi(n))
								: (null !== (s = u.cachePool)
										? ((c = Aa._currentValue),
										  (s =
												s.parent !== c
													? { parent: c, pool: c }
													: s))
										: (s = Wa()),
								  (u = {
										baseLanes: u.baseLanes | n,
										cachePool: s,
								  })),
						  (o.memoizedState = u),
						  (o.childLanes = Bi(e, r, n)),
						  (t.memoizedState = Ui),
						  a)
						: (li(t),
						  (e = (n = e.child).sibling),
						  ((n = jr(n, {
								mode: "visible",
								children: a.children,
						  })).return = t),
						  (n.sibling = null),
						  null !== e &&
								(null === (r = t.deletions)
									? ((t.deletions = [e]), (t.flags |= 16))
									: r.push(e)),
						  (t.child = n),
						  (t.memoizedState = null),
						  n);
				}
				function $i(e, t) {
					return (
						((t = Wi(
							{ mode: "visible", children: t },
							e.mode
						)).return = e),
						(e.child = t)
					);
				}
				function Wi(e, t) {
					return (
						((e = Fr(22, e, null, t)).lanes = 0),
						(e.stateNode = {
							_visibility: 1,
							_pendingMarkers: null,
							_retryCache: null,
							_transitions: null,
						}),
						e
					);
				}
				function Vi(e, t, n) {
					return (
						ni(t, e.child, null, n),
						((e = $i(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function qi(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Sa(e.return, t, n);
				}
				function Ki(e, t, n, r, a) {
					var o = e.memoizedState;
					null === o
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: a,
						  })
						: ((o.isBackwards = t),
						  (o.rendering = null),
						  (o.renderingStartTime = 0),
						  (o.last = r),
						  (o.tail = n),
						  (o.tailMode = a));
				}
				function Qi(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						o = r.tail;
					if ((Pi(e, t, r.children, n), 0 !== (2 & (r = ci.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag)
									null !== e.memoizedState && qi(e, n, t);
								else if (19 === e.tag) qi(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t)
										break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					switch ((B(ci, r), a)) {
						case "forwards":
							for (n = t.child, a = null; null !== n; )
								null !== (e = n.alternate) &&
									null === fi(e) &&
									(a = n),
									(n = n.sibling);
							null === (n = a)
								? ((a = t.child), (t.child = null))
								: ((a = n.sibling), (n.sibling = null)),
								Ki(t, !1, a, n, o);
							break;
						case "backwards":
							for (
								n = null, a = t.child, t.child = null;
								null !== a;

							) {
								if (
									null !== (e = a.alternate) &&
									null === fi(e)
								) {
									t.child = a;
									break;
								}
								(e = a.sibling),
									(a.sibling = n),
									(n = a),
									(a = e);
							}
							Ki(t, !0, n, null, o);
							break;
						case "together":
							Ki(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null;
					}
					return t.child;
				}
				function Gi(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(pu |= t.lanes),
						0 === (n & t.childLanes))
					) {
						if (null === e) return null;
						if ((Ea(e, t, n, !1), 0 === (n & t.childLanes)))
							return null;
					}
					if (null !== e && t.child !== e.child) throw Error(l(153));
					if (null !== t.child) {
						for (
							n = jr((e = t.child), e.pendingProps),
								t.child = n,
								n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling =
									jr(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function Yi(e, t) {
					return (
						0 !== (e.lanes & t) ||
						!(null === (e = e.dependencies) || !xa(e))
					);
				}
				function Xi(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps) Ti = !0;
						else {
							if (!Yi(e, n) && 0 === (128 & t.flags))
								return (
									(Ti = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												q(t, t.stateNode.containerInfo),
													ba(
														0,
														Aa,
														e.memoizedState.cache
													),
													pa();
												break;
											case 27:
											case 5:
												Q(t);
												break;
											case 4:
												q(t, t.stateNode.containerInfo);
												break;
											case 10:
												ba(
													0,
													t.type,
													t.memoizedProps.value
												);
												break;
											case 13:
												var r = t.memoizedState;
												if (null !== r)
													return null !== r.dehydrated
														? (li(t),
														  (t.flags |= 128),
														  null)
														: 0 !==
														  (n &
																t.child
																	.childLanes)
														? Hi(e, t, n)
														: (li(t),
														  null !==
														  (e = Gi(e, t, n))
																? e.sibling
																: null);
												li(t);
												break;
											case 19:
												var a = 0 !== (128 & e.flags);
												if (
													((r =
														0 !==
														(n & t.childLanes)) ||
														(Ea(e, t, n, !1),
														(r =
															0 !==
															(n &
																t.childLanes))),
													a)
												) {
													if (r) return Qi(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !==
														(a = t.memoizedState) &&
														((a.rendering = null),
														(a.tail = null),
														(a.lastEffect = null)),
													B(ci, ci.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (
													(t.lanes = 0), Ai(e, t, n)
												);
											case 24:
												ba(
													0,
													Aa,
													e.memoizedState.cache
												);
										}
										return Gi(e, t, n);
									})(e, t, n)
								);
							Ti = 0 !== (131072 & e.flags);
						}
					else
						(Ti = !1),
							oa &&
								0 !== (1048576 & t.flags) &&
								ea(t, Kr, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 16:
							e: {
								e = t.pendingProps;
								var r = t.elementType,
									a = r._init;
								if (
									((r = a(r._payload)),
									(t.type = r),
									"function" !== typeof r)
								) {
									if (void 0 !== r && null !== r) {
										if ((a = r.$$typeof) === k) {
											(t.tag = 11),
												(t = Oi(null, t, r, e, n));
											break e;
										}
										if (a === C) {
											(t.tag = 14),
												(t = Ni(null, t, r, e, n));
											break e;
										}
									}
									throw (
										((t = A(r) || r), Error(l(306, t, "")))
									);
								}
								Ir(r)
									? ((e = gi(r, e)),
									  (t.tag = 1),
									  (t = Ii(null, t, r, e, n)))
									: ((t.tag = 0), (t = Di(null, t, r, e, n)));
							}
							return t;
						case 0:
							return Di(e, t, t.type, t.pendingProps, n);
						case 1:
							return Ii(
								e,
								t,
								(r = t.type),
								(a = gi(r, t.pendingProps)),
								n
							);
						case 3:
							e: {
								if (
									(q(t, t.stateNode.containerInfo),
									null === e)
								)
									throw Error(l(387));
								r = t.pendingProps;
								var o = t.memoizedState;
								(a = o.element), ro(e, t), co(t, r, null, n);
								var i = t.memoizedState;
								if (
									((r = i.cache),
									ba(0, Aa, r),
									r !== o.cache && ka(t, [Aa], n, !0),
									uo(),
									(r = i.element),
									o.isDehydrated)
								) {
									if (
										((o = {
											element: r,
											isDehydrated: !1,
											cache: i.cache,
										}),
										(t.updateQueue.baseState = o),
										(t.memoizedState = o),
										256 & t.flags)
									) {
										t = ji(e, t, r, n);
										break e;
									}
									if (r !== a) {
										ma((a = xr(Error(l(424)), t))),
											(t = ji(e, t, r, n));
										break e;
									}
									if (
										9 ===
										(e = t.stateNode.containerInfo).nodeType
									)
										e = e.body;
									else
										e =
											"HTML" === e.nodeName
												? e.ownerDocument.body
												: e;
									for (
										aa = vf(e.firstChild),
											ra = t,
											oa = !0,
											la = null,
											ia = !0,
											n = ri(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096),
											(n = n.sibling);
								} else {
									if ((pa(), r === a)) {
										t = Gi(e, t, n);
										break e;
									}
									Pi(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 26:
							return (
								zi(e, t),
								null === e
									? (n = Of(
											t.type,
											null,
											t.pendingProps,
											null
									  ))
										? (t.memoizedState = n)
										: oa ||
										  ((n = t.type),
										  (e = t.pendingProps),
										  ((r = rf(W.current).createElement(n))[
												Ae
										  ] = t),
										  (r[Le] = e),
										  ef(r, n, e),
										  Ve(r),
										  (t.stateNode = r))
									: (t.memoizedState = Of(
											t.type,
											e.memoizedProps,
											t.pendingProps,
											e.memoizedState
									  )),
								null
							);
						case 27:
							return (
								Q(t),
								null === e &&
									oa &&
									((r = t.stateNode =
										Sf(t.type, t.pendingProps, W.current)),
									(ra = t),
									(ia = !0),
									(a = aa),
									hf(t.type)
										? ((bf = a), (aa = vf(r.firstChild)))
										: (aa = a)),
								Pi(e, t, t.pendingProps.children, n),
								zi(e, t),
								null === e && (t.flags |= 4194304),
								t.child
							);
						case 5:
							return (
								null === e &&
									oa &&
									((a = r = aa) &&
										(null !==
										(r = (function (e, t, n, r) {
											for (; 1 === e.nodeType; ) {
												var a = n;
												if (
													e.nodeName.toLowerCase() !==
													t.toLowerCase()
												) {
													if (
														!r &&
														("INPUT" !==
															e.nodeName ||
															"hidden" !== e.type)
													)
														break;
												} else if (r) {
													if (!e[Ue])
														switch (t) {
															case "meta":
																if (
																	!e.hasAttribute(
																		"itemprop"
																	)
																)
																	break;
																return e;
															case "link":
																if (
																	"stylesheet" ===
																		(o =
																			e.getAttribute(
																				"rel"
																			)) &&
																	e.hasAttribute(
																		"data-precedence"
																	)
																)
																	break;
																if (
																	o !==
																		a.rel ||
																	e.getAttribute(
																		"href"
																	) !==
																		(null ==
																			a.href ||
																		"" ===
																			a.href
																			? null
																			: a.href) ||
																	e.getAttribute(
																		"crossorigin"
																	) !==
																		(null ==
																		a.crossOrigin
																			? null
																			: a.crossOrigin) ||
																	e.getAttribute(
																		"title"
																	) !==
																		(null ==
																		a.title
																			? null
																			: a.title)
																)
																	break;
																return e;
															case "style":
																if (
																	e.hasAttribute(
																		"data-precedence"
																	)
																)
																	break;
																return e;
															case "script":
																if (
																	((o =
																		e.getAttribute(
																			"src"
																		)) !==
																		(null ==
																		a.src
																			? null
																			: a.src) ||
																		e.getAttribute(
																			"type"
																		) !==
																			(null ==
																			a.type
																				? null
																				: a.type) ||
																		e.getAttribute(
																			"crossorigin"
																		) !==
																			(null ==
																			a.crossOrigin
																				? null
																				: a.crossOrigin)) &&
																	o &&
																	e.hasAttribute(
																		"async"
																	) &&
																	!e.hasAttribute(
																		"itemprop"
																	)
																)
																	break;
																return e;
															default:
																return e;
														}
												} else {
													if (
														"input" !== t ||
														"hidden" !== e.type
													)
														return e;
													var o =
														null == a.name
															? null
															: "" + a.name;
													if (
														"hidden" === a.type &&
														e.getAttribute(
															"name"
														) === o
													)
														return e;
												}
												if (
													null ===
													(e = vf(e.nextSibling))
												)
													break;
											}
											return null;
										})(r, t.type, t.pendingProps, ia))
											? ((t.stateNode = r),
											  (ra = t),
											  (aa = vf(r.firstChild)),
											  (ia = !1),
											  (a = !0))
											: (a = !1)),
									a || ua(t)),
								Q(t),
								(a = t.type),
								(o = t.pendingProps),
								(i = null !== e ? e.memoizedProps : null),
								(r = o.children),
								lf(a, o)
									? (r = null)
									: null !== i && lf(a, i) && (t.flags |= 32),
								null !== t.memoizedState &&
									((a = Ao(e, t, Do, null, null, n)),
									(Gf._currentValue = a)),
								zi(e, t),
								Pi(e, t, r, n),
								t.child
							);
						case 6:
							return (
								null === e &&
									oa &&
									((e = n = aa) &&
										(null !==
										(n = (function (e, t, n) {
											if ("" === t) return null;
											for (; 3 !== e.nodeType; ) {
												if (
													(1 !== e.nodeType ||
														"INPUT" !==
															e.nodeName ||
														"hidden" !== e.type) &&
													!n
												)
													return null;
												if (
													null ===
													(e = vf(e.nextSibling))
												)
													return null;
											}
											return e;
										})(n, t.pendingProps, ia))
											? ((t.stateNode = n),
											  (ra = t),
											  (aa = null),
											  (e = !0))
											: (e = !1)),
									e || ua(t)),
								null
							);
						case 13:
							return Hi(e, t, n);
						case 4:
							return (
								q(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e
									? (t.child = ni(t, null, r, n))
									: Pi(e, t, r, n),
								t.child
							);
						case 11:
							return Oi(e, t, t.type, t.pendingProps, n);
						case 7:
							return Pi(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return (
								Pi(e, t, t.pendingProps.children, n), t.child
							);
						case 10:
							return (
								(r = t.pendingProps),
								ba(0, t.type, r.value),
								Pi(e, t, r.children, n),
								t.child
							);
						case 9:
							return (
								(a = t.type._context),
								(r = t.pendingProps.children),
								Ca(t),
								(r = r((a = _a(a)))),
								(t.flags |= 1),
								Pi(e, t, r, n),
								t.child
							);
						case 14:
							return Ni(e, t, t.type, t.pendingProps, n);
						case 15:
							return Ri(e, t, t.type, t.pendingProps, n);
						case 19:
							return Qi(e, t, n);
						case 31:
							return (
								(r = t.pendingProps),
								(n = t.mode),
								(r = { mode: r.mode, children: r.children }),
								null === e
									? (((n = Wi(r, n)).ref = t.ref),
									  (t.child = n),
									  (n.return = t),
									  (t = n))
									: (((n = jr(e.child, r)).ref = t.ref),
									  (t.child = n),
									  (n.return = t),
									  (t = n)),
								t
							);
						case 22:
							return Ai(e, t, n);
						case 24:
							return (
								Ca(t),
								(r = _a(Aa)),
								null === e
									? (null === (a = Ha()) &&
											((a = ru),
											(o = La()),
											(a.pooledCache = o),
											o.refCount++,
											null !== o &&
												(a.pooledCacheLanes |= n),
											(a = o)),
									  (t.memoizedState = {
											parent: r,
											cache: a,
									  }),
									  no(t),
									  ba(0, Aa, a))
									: (0 !== (e.lanes & n) &&
											(ro(e, t),
											co(t, null, null, n),
											uo()),
									  (a = e.memoizedState),
									  (o = t.memoizedState),
									  a.parent !== r
											? ((a = { parent: r, cache: r }),
											  (t.memoizedState = a),
											  0 === t.lanes &&
													(t.memoizedState =
														t.updateQueue.baseState =
															a),
											  ba(0, Aa, r))
											: ((r = o.cache),
											  ba(0, Aa, r),
											  r !== a.cache &&
													ka(t, [Aa], n, !0))),
								Pi(e, t, t.pendingProps.children, n),
								t.child
							);
						case 29:
							throw t.pendingProps;
					}
					throw Error(l(156, t.tag));
				}
				function Ji(e) {
					e.flags |= 4;
				}
				function Zi(e, t) {
					if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
						e.flags &= -16777217;
					else if (((e.flags |= 16777216), !Hf(t))) {
						if (
							null !== (t = ai.current) &&
							((4194048 & ou) === ou
								? null !== oi
								: ((62914560 & ou) !== ou &&
										0 === (536870912 & ou)) ||
								  t !== oi)
						)
							throw ((Ja = Qa), qa);
						e.flags |= 8192;
					}
				}
				function es(e, t) {
					null !== t && (e.flags |= 4),
						16384 & e.flags &&
							((t = 22 !== e.tag ? Ee() : 536870912),
							(e.lanes |= t),
							(yu |= t));
				}
				function ts(e, t) {
					if (!oa)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t),
										(t = t.sibling);
								null === n
									? (e.tail = null)
									: (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n),
										(n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function ns(e) {
					var t =
							null !== e.alternate &&
							e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= 65011712 & a.subtreeFlags),
								(r |= 65011712 & a.flags),
								(a.return = e),
								(a = a.sibling);
					else
						for (a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= a.subtreeFlags),
								(r |= a.flags),
								(a.return = e),
								(a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function rs(e, t, n) {
					var r = t.pendingProps;
					switch ((na(t), t.tag)) {
						case 31:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
						case 1:
							return ns(t), null;
						case 3:
							return (
								(n = t.stateNode),
								(r = null),
								null !== e && (r = e.memoizedState.cache),
								t.memoizedState.cache !== r &&
									(t.flags |= 2048),
								wa(Aa),
								K(),
								n.pendingContext &&
									((n.context = n.pendingContext),
									(n.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(da(t)
										? Ji(t)
										: null === e ||
										  (e.memoizedState.isDehydrated &&
												0 === (256 & t.flags)) ||
										  ((t.flags |= 1024), ha())),
								ns(t),
								null
							);
						case 26:
							return (
								(n = t.memoizedState),
								null === e
									? (Ji(t),
									  null !== n
											? (ns(t), Zi(t, n))
											: (ns(t), (t.flags &= -16777217)))
									: n
									? n !== e.memoizedState
										? (Ji(t), ns(t), Zi(t, n))
										: (ns(t), (t.flags &= -16777217))
									: (e.memoizedProps !== r && Ji(t),
									  ns(t),
									  (t.flags &= -16777217)),
								null
							);
						case 27:
							G(t), (n = W.current);
							var a = t.type;
							if (null !== e && null != t.stateNode)
								e.memoizedProps !== r && Ji(t);
							else {
								if (!r) {
									if (null === t.stateNode)
										throw Error(l(166));
									return ns(t), null;
								}
								(e = H.current),
									da(t)
										? ca(t)
										: ((e = Sf(a, r, n)),
										  (t.stateNode = e),
										  Ji(t));
							}
							return ns(t), null;
						case 5:
							if (
								(G(t),
								(n = t.type),
								null !== e && null != t.stateNode)
							)
								e.memoizedProps !== r && Ji(t);
							else {
								if (!r) {
									if (null === t.stateNode)
										throw Error(l(166));
									return ns(t), null;
								}
								if (((e = H.current), da(t))) ca(t);
								else {
									switch (((a = rf(W.current)), e)) {
										case 1:
											e = a.createElementNS(
												"http://www.w3.org/2000/svg",
												n
											);
											break;
										case 2:
											e = a.createElementNS(
												"http://www.w3.org/1998/Math/MathML",
												n
											);
											break;
										default:
											switch (n) {
												case "svg":
													e = a.createElementNS(
														"http://www.w3.org/2000/svg",
														n
													);
													break;
												case "math":
													e = a.createElementNS(
														"http://www.w3.org/1998/Math/MathML",
														n
													);
													break;
												case "script":
													((e =
														a.createElement(
															"div"
														)).innerHTML =
														"<script></script>"),
														(e = e.removeChild(
															e.firstChild
														));
													break;
												case "select":
													(e =
														"string" === typeof r.is
															? a.createElement(
																	"select",
																	{ is: r.is }
															  )
															: a.createElement(
																	"select"
															  )),
														r.multiple
															? (e.multiple = !0)
															: r.size &&
															  (e.size = r.size);
													break;
												default:
													e =
														"string" === typeof r.is
															? a.createElement(
																	n,
																	{ is: r.is }
															  )
															: a.createElement(
																	n
															  );
											}
									}
									(e[Ae] = t), (e[Le] = r);
									e: for (a = t.child; null !== a; ) {
										if (5 === a.tag || 6 === a.tag)
											e.appendChild(a.stateNode);
										else if (
											4 !== a.tag &&
											27 !== a.tag &&
											null !== a.child
										) {
											(a.child.return = a), (a = a.child);
											continue;
										}
										if (a === t) break e;
										for (; null === a.sibling; ) {
											if (
												null === a.return ||
												a.return === t
											)
												break e;
											a = a.return;
										}
										(a.sibling.return = a.return),
											(a = a.sibling);
									}
									t.stateNode = e;
									e: switch ((ef(e, n, r), n)) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											e = !!r.autoFocus;
											break e;
										case "img":
											e = !0;
											break e;
										default:
											e = !1;
									}
									e && Ji(t);
								}
							}
							return ns(t), (t.flags &= -16777217), null;
						case 6:
							if (e && null != t.stateNode)
								e.memoizedProps !== r && Ji(t);
							else {
								if (
									"string" !== typeof r &&
									null === t.stateNode
								)
									throw Error(l(166));
								if (((e = W.current), da(t))) {
									if (
										((e = t.stateNode),
										(n = t.memoizedProps),
										(r = null),
										null !== (a = ra))
									)
										switch (a.tag) {
											case 27:
											case 5:
												r = a.memoizedProps;
										}
									(e[Ae] = t),
										(e = !!(
											e.nodeValue === n ||
											(null !== r &&
												!0 ===
													r.suppressHydrationWarning) ||
											Yc(e.nodeValue, n)
										)) || ua(t);
								} else
									((e = rf(e).createTextNode(r))[Ae] = t),
										(t.stateNode = e);
							}
							return ns(t), null;
						case 13:
							if (
								((r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									((a = da(t)),
									null !== r && null !== r.dehydrated)
								) {
									if (null === e) {
										if (!a) throw Error(l(318));
										if (
											!(a =
												null !== (a = t.memoizedState)
													? a.dehydrated
													: null)
										)
											throw Error(l(317));
										a[Ae] = t;
									} else
										pa(),
											0 === (128 & t.flags) &&
												(t.memoizedState = null),
											(t.flags |= 4);
									ns(t), (a = !1);
								} else
									(a = ha()),
										null !== e &&
											null !== e.memoizedState &&
											(e.memoizedState.hydrationErrors =
												a),
										(a = !0);
								if (!a)
									return 256 & t.flags
										? (ui(t), t)
										: (ui(t), null);
							}
							if ((ui(t), 0 !== (128 & t.flags)))
								return (t.lanes = n), t;
							if (
								((n = null !== r),
								(e = null !== e && null !== e.memoizedState),
								n)
							) {
								(a = null),
									null !== (r = t.child).alternate &&
										null !== r.alternate.memoizedState &&
										null !==
											r.alternate.memoizedState
												.cachePool &&
										(a =
											r.alternate.memoizedState.cachePool
												.pool);
								var o = null;
								null !== r.memoizedState &&
									null !== r.memoizedState.cachePool &&
									(o = r.memoizedState.cachePool.pool),
									o !== a && (r.flags |= 2048);
							}
							return (
								n !== e && n && (t.child.flags |= 8192),
								es(t, t.updateQueue),
								ns(t),
								null
							);
						case 4:
							return (
								K(),
								null === e && Mc(t.stateNode.containerInfo),
								ns(t),
								null
							);
						case 10:
							return wa(t.type), ns(t), null;
						case 19:
							if ((M(ci), null === (a = t.memoizedState)))
								return ns(t), null;
							if (
								((r = 0 !== (128 & t.flags)),
								null === (o = a.rendering))
							)
								if (r) ts(a, !1);
								else {
									if (
										0 !== du ||
										(null !== e && 0 !== (128 & e.flags))
									)
										for (e = t.child; null !== e; ) {
											if (null !== (o = fi(e))) {
												for (
													t.flags |= 128,
														ts(a, !1),
														e = o.updateQueue,
														t.updateQueue = e,
														es(t, e),
														t.subtreeFlags = 0,
														e = n,
														n = t.child;
													null !== n;

												)
													Ur(n, e), (n = n.sibling);
												return (
													B(ci, (1 & ci.current) | 2),
													t.child
												);
											}
											e = e.sibling;
										}
									null !== a.tail &&
										te() > ku &&
										((t.flags |= 128),
										(r = !0),
										ts(a, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = fi(o))) {
										if (
											((t.flags |= 128),
											(r = !0),
											(e = e.updateQueue),
											(t.updateQueue = e),
											es(t, e),
											ts(a, !0),
											null === a.tail &&
												"hidden" === a.tailMode &&
												!o.alternate &&
												!oa)
										)
											return ns(t), null;
									} else
										2 * te() - a.renderingStartTime > ku &&
											536870912 !== n &&
											((t.flags |= 128),
											(r = !0),
											ts(a, !1),
											(t.lanes = 4194304));
								a.isBackwards
									? ((o.sibling = t.child), (t.child = o))
									: (null !== (e = a.last)
											? (e.sibling = o)
											: (t.child = o),
									  (a.last = o));
							}
							return null !== a.tail
								? ((t = a.tail),
								  (a.rendering = t),
								  (a.tail = t.sibling),
								  (a.renderingStartTime = te()),
								  (t.sibling = null),
								  (e = ci.current),
								  B(ci, r ? (1 & e) | 2 : 1 & e),
								  t)
								: (ns(t), null);
						case 22:
						case 23:
							return (
								ui(t),
								vo(),
								(r = null !== t.memoizedState),
								null !== e
									? (null !== e.memoizedState) !== r &&
									  (t.flags |= 8192)
									: r && (t.flags |= 8192),
								r
									? 0 !== (536870912 & n) &&
									  0 === (128 & t.flags) &&
									  (ns(t),
									  6 & t.subtreeFlags && (t.flags |= 8192))
									: ns(t),
								null !== (n = t.updateQueue) &&
									es(t, n.retryQueue),
								(n = null),
								null !== e &&
									null !== e.memoizedState &&
									null !== e.memoizedState.cachePool &&
									(n = e.memoizedState.cachePool.pool),
								(r = null),
								null !== t.memoizedState &&
									null !== t.memoizedState.cachePool &&
									(r = t.memoizedState.cachePool.pool),
								r !== n && (t.flags |= 2048),
								null !== e && M(Ba),
								null
							);
						case 24:
							return (
								(n = null),
								null !== e && (n = e.memoizedState.cache),
								t.memoizedState.cache !== n &&
									(t.flags |= 2048),
								wa(Aa),
								ns(t),
								null
							);
						case 25:
						case 30:
							return null;
					}
					throw Error(l(156, t.tag));
				}
				function as(e, t) {
					switch ((na(t), t.tag)) {
						case 1:
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 3:
							return (
								wa(Aa),
								K(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 26:
						case 27:
						case 5:
							return G(t), null;
						case 13:
							if (
								(ui(t),
								null !== (e = t.memoizedState) &&
									null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(l(340));
								pa();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return M(ci), null;
						case 4:
							return K(), null;
						case 10:
							return wa(t.type), null;
						case 22:
						case 23:
							return (
								ui(t),
								vo(),
								null !== e && M(Ba),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 24:
							return wa(Aa), null;
						default:
							return null;
					}
				}
				function os(e, t) {
					switch ((na(t), t.tag)) {
						case 3:
							wa(Aa), K();
							break;
						case 26:
						case 27:
						case 5:
							G(t);
							break;
						case 4:
							K();
							break;
						case 13:
							ui(t);
							break;
						case 19:
							M(ci);
							break;
						case 10:
							wa(t.type);
							break;
						case 22:
						case 23:
							ui(t), vo(), null !== e && M(Ba);
							break;
						case 24:
							wa(Aa);
					}
				}
				function ls(e, t) {
					try {
						var n = t.updateQueue,
							r = null !== n ? n.lastEffect : null;
						if (null !== r) {
							var a = r.next;
							n = a;
							do {
								if ((n.tag & e) === e) {
									r = void 0;
									var o = n.create,
										l = n.inst;
									(r = o()), (l.destroy = r);
								}
								n = n.next;
							} while (n !== a);
						}
					} catch (i) {
						cc(t, t.return, i);
					}
				}
				function is(e, t, n) {
					try {
						var r = t.updateQueue,
							a = null !== r ? r.lastEffect : null;
						if (null !== a) {
							var o = a.next;
							r = o;
							do {
								if ((r.tag & e) === e) {
									var l = r.inst,
										i = l.destroy;
									if (void 0 !== i) {
										(l.destroy = void 0), (a = t);
										var s = n,
											u = i;
										try {
											u();
										} catch (c) {
											cc(a, s, c);
										}
									}
								}
								r = r.next;
							} while (r !== o);
						}
					} catch (c) {
						cc(t, t.return, c);
					}
				}
				function ss(e) {
					var t = e.updateQueue;
					if (null !== t) {
						var n = e.stateNode;
						try {
							po(t, n);
						} catch (r) {
							cc(e, e.return, r);
						}
					}
				}
				function us(e, t, n) {
					(n.props = gi(e.type, e.memoizedProps)),
						(n.state = e.memoizedState);
					try {
						n.componentWillUnmount();
					} catch (r) {
						cc(e, t, r);
					}
				}
				function cs(e, t) {
					try {
						var n = e.ref;
						if (null !== n) {
							switch (e.tag) {
								case 26:
								case 27:
								case 5:
									var r = e.stateNode;
									break;
								default:
									r = e.stateNode;
							}
							"function" === typeof n
								? (e.refCleanup = n(r))
								: (n.current = r);
						}
					} catch (a) {
						cc(e, t, a);
					}
				}
				function fs(e, t) {
					var n = e.ref,
						r = e.refCleanup;
					if (null !== n)
						if ("function" === typeof r)
							try {
								r();
							} catch (a) {
								cc(e, t, a);
							} finally {
								(e.refCleanup = null),
									null != (e = e.alternate) &&
										(e.refCleanup = null);
							}
						else if ("function" === typeof n)
							try {
								n(null);
							} catch (o) {
								cc(e, t, o);
							}
						else n.current = null;
				}
				function ds(e) {
					var t = e.type,
						n = e.memoizedProps,
						r = e.stateNode;
					try {
						e: switch (t) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								n.autoFocus && r.focus();
								break e;
							case "img":
								n.src
									? (r.src = n.src)
									: n.srcSet && (r.srcset = n.srcSet);
						}
					} catch (a) {
						cc(e, e.return, a);
					}
				}
				function ps(e, t, n) {
					try {
						var r = e.stateNode;
						!(function (e, t, n, r) {
							switch (t) {
								case "div":
								case "span":
								case "svg":
								case "path":
								case "a":
								case "g":
								case "p":
								case "li":
									break;
								case "input":
									var a = null,
										o = null,
										i = null,
										s = null,
										u = null,
										c = null,
										f = null;
									for (h in n) {
										var d = n[h];
										if (n.hasOwnProperty(h) && null != d)
											switch (h) {
												case "checked":
												case "value":
													break;
												case "defaultValue":
													u = d;
												default:
													r.hasOwnProperty(h) ||
														Jc(e, t, h, null, r, d);
											}
									}
									for (var p in r) {
										var h = r[p];
										if (
											((d = n[p]),
											r.hasOwnProperty(p) &&
												(null != h || null != d))
										)
											switch (p) {
												case "type":
													o = h;
													break;
												case "name":
													a = h;
													break;
												case "checked":
													c = h;
													break;
												case "defaultChecked":
													f = h;
													break;
												case "value":
													i = h;
													break;
												case "defaultValue":
													s = h;
													break;
												case "children":
												case "dangerouslySetInnerHTML":
													if (null != h)
														throw Error(l(137, t));
													break;
												default:
													h !== d &&
														Jc(e, t, p, h, r, d);
											}
									}
									return void gt(e, i, s, u, c, f, o, a);
								case "select":
									for (o in ((h = i = s = p = null), n))
										if (
											((u = n[o]),
											n.hasOwnProperty(o) && null != u)
										)
											switch (o) {
												case "value":
													break;
												case "multiple":
													h = u;
												default:
													r.hasOwnProperty(o) ||
														Jc(e, t, o, null, r, u);
											}
									for (a in r)
										if (
											((o = r[a]),
											(u = n[a]),
											r.hasOwnProperty(a) &&
												(null != o || null != u))
										)
											switch (a) {
												case "value":
													p = o;
													break;
												case "defaultValue":
													s = o;
													break;
												case "multiple":
													i = o;
												default:
													o !== u &&
														Jc(e, t, a, o, r, u);
											}
									return (
										(t = s),
										(n = i),
										(r = h),
										void (null != p
											? bt(e, !!n, p, !1)
											: !!r !== !!n &&
											  (null != t
													? bt(e, !!n, t, !0)
													: bt(
															e,
															!!n,
															n ? [] : "",
															!1
													  )))
									);
								case "textarea":
									for (s in ((h = p = null), n))
										if (
											((a = n[s]),
											n.hasOwnProperty(s) &&
												null != a &&
												!r.hasOwnProperty(s))
										)
											switch (s) {
												case "value":
												case "children":
													break;
												default:
													Jc(e, t, s, null, r, a);
											}
									for (i in r)
										if (
											((a = r[i]),
											(o = n[i]),
											r.hasOwnProperty(i) &&
												(null != a || null != o))
										)
											switch (i) {
												case "value":
													p = a;
													break;
												case "defaultValue":
													h = a;
													break;
												case "children":
													break;
												case "dangerouslySetInnerHTML":
													if (null != a)
														throw Error(l(91));
													break;
												default:
													a !== o &&
														Jc(e, t, i, a, r, o);
											}
									return void wt(e, p, h);
								case "option":
									for (var m in n)
										if (
											((p = n[m]),
											n.hasOwnProperty(m) &&
												null != p &&
												!r.hasOwnProperty(m))
										)
											if ("selected" === m)
												e.selected = !1;
											else Jc(e, t, m, null, r, p);
									for (u in r)
										if (
											((p = r[u]),
											(h = n[u]),
											r.hasOwnProperty(u) &&
												p !== h &&
												(null != p || null != h))
										)
											if ("selected" === u)
												e.selected =
													p &&
													"function" !== typeof p &&
													"symbol" !== typeof p;
											else Jc(e, t, u, p, r, h);
									return;
								case "img":
								case "link":
								case "area":
								case "base":
								case "br":
								case "col":
								case "embed":
								case "hr":
								case "keygen":
								case "meta":
								case "param":
								case "source":
								case "track":
								case "wbr":
								case "menuitem":
									for (var g in n)
										(p = n[g]),
											n.hasOwnProperty(g) &&
												null != p &&
												!r.hasOwnProperty(g) &&
												Jc(e, t, g, null, r, p);
									for (c in r)
										if (
											((p = r[c]),
											(h = n[c]),
											r.hasOwnProperty(c) &&
												p !== h &&
												(null != p || null != h))
										)
											switch (c) {
												case "children":
												case "dangerouslySetInnerHTML":
													if (null != p)
														throw Error(l(137, t));
													break;
												default:
													Jc(e, t, c, p, r, h);
											}
									return;
								default:
									if (_t(t)) {
										for (var y in n)
											(p = n[y]),
												n.hasOwnProperty(y) &&
													void 0 !== p &&
													!r.hasOwnProperty(y) &&
													Zc(e, t, y, void 0, r, p);
										for (f in r)
											(p = r[f]),
												(h = n[f]),
												!r.hasOwnProperty(f) ||
													p === h ||
													(void 0 === p &&
														void 0 === h) ||
													Zc(e, t, f, p, r, h);
										return;
									}
							}
							for (var v in n)
								(p = n[v]),
									n.hasOwnProperty(v) &&
										null != p &&
										!r.hasOwnProperty(v) &&
										Jc(e, t, v, null, r, p);
							for (d in r)
								(p = r[d]),
									(h = n[d]),
									!r.hasOwnProperty(d) ||
										p === h ||
										(null == p && null == h) ||
										Jc(e, t, d, p, r, h);
						})(r, e.type, n, t),
							(r[Le] = t);
					} catch (a) {
						cc(e, e.return, a);
					}
				}
				function hs(e) {
					return (
						5 === e.tag ||
						3 === e.tag ||
						26 === e.tag ||
						(27 === e.tag && hf(e.type)) ||
						4 === e.tag
					);
				}
				function ms(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || hs(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (27 === e.tag && hf(e.type)) continue e;
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function gs(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? (9 === n.nodeType
										? n.body
										: "HTML" === n.nodeName
										? n.ownerDocument.body
										: n
								  ).insertBefore(e, t)
								: ((t =
										9 === n.nodeType
											? n.body
											: "HTML" === n.nodeName
											? n.ownerDocument.body
											: n).appendChild(e),
								  (null !== (n = n._reactRootContainer) &&
										void 0 !== n) ||
										null !== t.onclick ||
										(t.onclick = Xc));
					else if (
						4 !== r &&
						(27 === r &&
							hf(e.type) &&
							((n = e.stateNode), (t = null)),
						null !== (e = e.child))
					)
						for (gs(e, t, n), e = e.sibling; null !== e; )
							gs(e, t, n), (e = e.sibling);
				}
				function ys(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (
						4 !== r &&
						(27 === r && hf(e.type) && (n = e.stateNode),
						null !== (e = e.child))
					)
						for (ys(e, t, n), e = e.sibling; null !== e; )
							ys(e, t, n), (e = e.sibling);
				}
				function vs(e) {
					var t = e.stateNode,
						n = e.memoizedProps;
					try {
						for (var r = e.type, a = t.attributes; a.length; )
							t.removeAttributeNode(a[0]);
						ef(t, r, n), (t[Ae] = e), (t[Le] = n);
					} catch (o) {
						cc(e, e.return, o);
					}
				}
				var bs = !1,
					ws = !1,
					Ss = !1,
					ks = "function" === typeof WeakSet ? WeakSet : Set,
					Es = null;
				function xs(e, t, n) {
					var r = n.flags;
					switch (n.tag) {
						case 0:
						case 11:
						case 15:
							Is(e, n), 4 & r && ls(5, n);
							break;
						case 1:
							if ((Is(e, n), 4 & r))
								if (((e = n.stateNode), null === t))
									try {
										e.componentDidMount();
									} catch (l) {
										cc(n, n.return, l);
									}
								else {
									var a = gi(n.type, t.memoizedProps);
									t = t.memoizedState;
									try {
										e.componentDidUpdate(
											a,
											t,
											e.__reactInternalSnapshotBeforeUpdate
										);
									} catch (i) {
										cc(n, n.return, i);
									}
								}
							64 & r && ss(n), 512 & r && cs(n, n.return);
							break;
						case 3:
							if (
								(Is(e, n),
								64 & r && null !== (e = n.updateQueue))
							) {
								if (((t = null), null !== n.child))
									switch (n.child.tag) {
										case 27:
										case 5:
										case 1:
											t = n.child.stateNode;
									}
								try {
									po(e, t);
								} catch (l) {
									cc(n, n.return, l);
								}
							}
							break;
						case 27:
							null === t && 4 & r && vs(n);
						case 26:
						case 5:
							Is(e, n),
								null === t && 4 & r && ds(n),
								512 & r && cs(n, n.return);
							break;
						case 12:
							Is(e, n);
							break;
						case 13:
							Is(e, n),
								4 & r && Ns(e, n),
								64 & r &&
									null !== (e = n.memoizedState) &&
									null !== (e = e.dehydrated) &&
									(function (e, t) {
										var n = e.ownerDocument;
										if (
											"$?" !== e.data ||
											"complete" === n.readyState
										)
											t();
										else {
											var r = function () {
												t(),
													n.removeEventListener(
														"DOMContentLoaded",
														r
													);
											};
											n.addEventListener(
												"DOMContentLoaded",
												r
											),
												(e._reactRetry = r);
										}
									})(e, (n = hc.bind(null, n)));
							break;
						case 22:
							if (!(r = null !== n.memoizedState || bs)) {
								(t =
									(null !== t && null !== t.memoizedState) ||
									ws),
									(a = bs);
								var o = ws;
								(bs = r),
									(ws = t) && !o
										? Us(
												e,
												n,
												0 !== (8772 & n.subtreeFlags)
										  )
										: Is(e, n),
									(bs = a),
									(ws = o);
							}
							break;
						case 30:
							break;
						default:
							Is(e, n);
					}
				}
				function Cs(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), Cs(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag && null !== (t = e.stateNode) && Me(t),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				var _s = null,
					Ts = !1;
				function Ps(e, t, n) {
					for (n = n.child; null !== n; )
						Os(e, t, n), (n = n.sibling);
				}
				function Os(e, t, n) {
					if (fe && "function" === typeof fe.onCommitFiberUnmount)
						try {
							fe.onCommitFiberUnmount(ce, n);
						} catch (o) {}
					switch (n.tag) {
						case 26:
							ws || fs(n, t),
								Ps(e, t, n),
								n.memoizedState
									? n.memoizedState.count--
									: n.stateNode &&
									  (n = n.stateNode).parentNode.removeChild(
											n
									  );
							break;
						case 27:
							ws || fs(n, t);
							var r = _s,
								a = Ts;
							hf(n.type) && ((_s = n.stateNode), (Ts = !1)),
								Ps(e, t, n),
								kf(n.stateNode),
								(_s = r),
								(Ts = a);
							break;
						case 5:
							ws || fs(n, t);
						case 6:
							if (
								((r = _s),
								(a = Ts),
								(_s = null),
								Ps(e, t, n),
								(Ts = a),
								null !== (_s = r))
							)
								if (Ts)
									try {
										(9 === _s.nodeType
											? _s.body
											: "HTML" === _s.nodeName
											? _s.ownerDocument.body
											: _s
										).removeChild(n.stateNode);
									} catch (l) {
										cc(n, t, l);
									}
								else
									try {
										_s.removeChild(n.stateNode);
									} catch (l) {
										cc(n, t, l);
									}
							break;
						case 18:
							null !== _s &&
								(Ts
									? (mf(
											9 === (e = _s).nodeType
												? e.body
												: "HTML" === e.nodeName
												? e.ownerDocument.body
												: e,
											n.stateNode
									  ),
									  Pd(e))
									: mf(_s, n.stateNode));
							break;
						case 4:
							(r = _s),
								(a = Ts),
								(_s = n.stateNode.containerInfo),
								(Ts = !0),
								Ps(e, t, n),
								(_s = r),
								(Ts = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							ws || is(2, n, t), ws || is(4, n, t), Ps(e, t, n);
							break;
						case 1:
							ws ||
								(fs(n, t),
								"function" ===
									typeof (r = n.stateNode)
										.componentWillUnmount && us(n, t, r)),
								Ps(e, t, n);
							break;
						case 21:
							Ps(e, t, n);
							break;
						case 22:
							(ws = (r = ws) || null !== n.memoizedState),
								Ps(e, t, n),
								(ws = r);
							break;
						default:
							Ps(e, t, n);
					}
				}
				function Ns(e, t) {
					if (
						null === t.memoizedState &&
						null !== (e = t.alternate) &&
						null !== (e = e.memoizedState) &&
						null !== (e = e.dehydrated)
					)
						try {
							Pd(e);
						} catch (n) {
							cc(t, t.return, n);
						}
				}
				function Rs(e, t) {
					var n = (function (e) {
						switch (e.tag) {
							case 13:
							case 19:
								var t = e.stateNode;
								return (
									null === t && (t = e.stateNode = new ks()),
									t
								);
							case 22:
								return (
									null ===
										(t = (e = e.stateNode)._retryCache) &&
										(t = e._retryCache = new ks()),
									t
								);
							default:
								throw Error(l(435, e.tag));
						}
					})(e);
					t.forEach(function (t) {
						var r = mc.bind(null, e, t);
						n.has(t) || (n.add(t), t.then(r, r));
					});
				}
				function As(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r],
								o = e,
								i = t,
								s = i;
							e: for (; null !== s; ) {
								switch (s.tag) {
									case 27:
										if (hf(s.type)) {
											(_s = s.stateNode), (Ts = !1);
											break e;
										}
										break;
									case 5:
										(_s = s.stateNode), (Ts = !1);
										break e;
									case 3:
									case 4:
										(_s = s.stateNode.containerInfo),
											(Ts = !0);
										break e;
								}
								s = s.return;
							}
							if (null === _s) throw Error(l(160));
							Os(o, i, a),
								(_s = null),
								(Ts = !1),
								null !== (o = a.alternate) && (o.return = null),
								(a.return = null);
						}
					if (13878 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							zs(t, e), (t = t.sibling);
				}
				var Ls = null;
				function zs(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							As(t, e),
								Ds(e),
								4 & r &&
									(is(3, e, e.return),
									ls(3, e),
									is(5, e, e.return));
							break;
						case 1:
							As(t, e),
								Ds(e),
								512 & r &&
									(ws || null === n || fs(n, n.return)),
								64 & r &&
									bs &&
									null !== (e = e.updateQueue) &&
									null !== (r = e.callbacks) &&
									((n = e.shared.hiddenCallbacks),
									(e.shared.hiddenCallbacks =
										null === n ? r : n.concat(r)));
							break;
						case 26:
							var a = Ls;
							if (
								(As(t, e),
								Ds(e),
								512 & r &&
									(ws || null === n || fs(n, n.return)),
								4 & r)
							) {
								var o = null !== n ? n.memoizedState : null;
								if (((r = e.memoizedState), null === n))
									if (null === r)
										if (null === e.stateNode) {
											e: {
												(r = e.type),
													(n = e.memoizedProps),
													(a = a.ownerDocument || a);
												t: switch (r) {
													case "title":
														(!(o =
															a.getElementsByTagName(
																"title"
															)[0]) ||
															o[Ue] ||
															o[Ae] ||
															"http://www.w3.org/2000/svg" ===
																o.namespaceURI ||
															o.hasAttribute(
																"itemprop"
															)) &&
															((o =
																a.createElement(
																	r
																)),
															a.head.insertBefore(
																o,
																a.querySelector(
																	"head > title"
																)
															)),
															ef(o, r, n),
															(o[Ae] = e),
															Ve(o),
															(r = o);
														break e;
													case "link":
														var i = Mf(
															"link",
															"href",
															a
														).get(
															r + (n.href || "")
														);
														if (i)
															for (
																var s = 0;
																s < i.length;
																s++
															)
																if (
																	(o =
																		i[
																			s
																		]).getAttribute(
																		"href"
																	) ===
																		(null ==
																			n.href ||
																		"" ===
																			n.href
																			? null
																			: n.href) &&
																	o.getAttribute(
																		"rel"
																	) ===
																		(null ==
																		n.rel
																			? null
																			: n.rel) &&
																	o.getAttribute(
																		"title"
																	) ===
																		(null ==
																		n.title
																			? null
																			: n.title) &&
																	o.getAttribute(
																		"crossorigin"
																	) ===
																		(null ==
																		n.crossOrigin
																			? null
																			: n.crossOrigin)
																) {
																	i.splice(
																		s,
																		1
																	);
																	break t;
																}
														ef(
															(o =
																a.createElement(
																	r
																)),
															r,
															n
														),
															a.head.appendChild(
																o
															);
														break;
													case "meta":
														if (
															(i = Mf(
																"meta",
																"content",
																a
															).get(
																r +
																	(n.content ||
																		"")
															))
														)
															for (
																s = 0;
																s < i.length;
																s++
															)
																if (
																	(o =
																		i[
																			s
																		]).getAttribute(
																		"content"
																	) ===
																		(null ==
																		n.content
																			? null
																			: "" +
																			  n.content) &&
																	o.getAttribute(
																		"name"
																	) ===
																		(null ==
																		n.name
																			? null
																			: n.name) &&
																	o.getAttribute(
																		"property"
																	) ===
																		(null ==
																		n.property
																			? null
																			: n.property) &&
																	o.getAttribute(
																		"http-equiv"
																	) ===
																		(null ==
																		n.httpEquiv
																			? null
																			: n.httpEquiv) &&
																	o.getAttribute(
																		"charset"
																	) ===
																		(null ==
																		n.charSet
																			? null
																			: n.charSet)
																) {
																	i.splice(
																		s,
																		1
																	);
																	break t;
																}
														ef(
															(o =
																a.createElement(
																	r
																)),
															r,
															n
														),
															a.head.appendChild(
																o
															);
														break;
													default:
														throw Error(l(468, r));
												}
												(o[Ae] = e), Ve(o), (r = o);
											}
											e.stateNode = r;
										} else Bf(a, e.type, e.stateNode);
									else
										e.stateNode = Df(a, r, e.memoizedProps);
								else
									o !== r
										? (null === o
												? null !== n.stateNode &&
												  (n =
														n.stateNode).parentNode.removeChild(
														n
												  )
												: o.count--,
										  null === r
												? Bf(a, e.type, e.stateNode)
												: Df(a, r, e.memoizedProps))
										: null === r &&
										  null !== e.stateNode &&
										  ps(
												e,
												e.memoizedProps,
												n.memoizedProps
										  );
							}
							break;
						case 27:
							As(t, e),
								Ds(e),
								512 & r &&
									(ws || null === n || fs(n, n.return)),
								null !== n &&
									4 & r &&
									ps(e, e.memoizedProps, n.memoizedProps);
							break;
						case 5:
							if (
								(As(t, e),
								Ds(e),
								512 & r &&
									(ws || null === n || fs(n, n.return)),
								32 & e.flags)
							) {
								a = e.stateNode;
								try {
									kt(a, "");
								} catch (h) {
									cc(e, e.return, h);
								}
							}
							4 & r &&
								null != e.stateNode &&
								ps(
									e,
									(a = e.memoizedProps),
									null !== n ? n.memoizedProps : a
								),
								1024 & r && (Ss = !0);
							break;
						case 6:
							if ((As(t, e), Ds(e), 4 & r)) {
								if (null === e.stateNode) throw Error(l(162));
								(r = e.memoizedProps), (n = e.stateNode);
								try {
									n.nodeValue = r;
								} catch (h) {
									cc(e, e.return, h);
								}
							}
							break;
						case 3:
							if (
								((Uf = null),
								(a = Ls),
								(Ls = Cf(t.containerInfo)),
								As(t, e),
								(Ls = a),
								Ds(e),
								4 & r &&
									null !== n &&
									n.memoizedState.isDehydrated)
							)
								try {
									Pd(t.containerInfo);
								} catch (h) {
									cc(e, e.return, h);
								}
							Ss && ((Ss = !1), Fs(e));
							break;
						case 4:
							(r = Ls),
								(Ls = Cf(e.stateNode.containerInfo)),
								As(t, e),
								Ds(e),
								(Ls = r);
							break;
						case 12:
						default:
							As(t, e), Ds(e);
							break;
						case 13:
							As(t, e),
								Ds(e),
								8192 & e.child.flags &&
									(null !== e.memoizedState) !==
										(null !== n &&
											null !== n.memoizedState) &&
									(Su = te()),
								4 & r &&
									null !== (r = e.updateQueue) &&
									((e.updateQueue = null), Rs(e, r));
							break;
						case 22:
							a = null !== e.memoizedState;
							var u = null !== n && null !== n.memoizedState,
								c = bs,
								f = ws;
							if (
								((bs = c || a),
								(ws = f || u),
								As(t, e),
								(ws = f),
								(bs = c),
								Ds(e),
								8192 & r)
							)
								e: for (
									t = e.stateNode,
										t._visibility = a
											? -2 & t._visibility
											: 1 | t._visibility,
										a &&
											(null === n ||
												u ||
												bs ||
												ws ||
												js(e)),
										n = null,
										t = e;
									;

								) {
									if (5 === t.tag || 26 === t.tag) {
										if (null === n) {
											u = n = t;
											try {
												if (((o = u.stateNode), a))
													"function" ===
													typeof (i = o.style)
														.setProperty
														? i.setProperty(
																"display",
																"none",
																"important"
														  )
														: (i.display = "none");
												else {
													s = u.stateNode;
													var d =
															u.memoizedProps
																.style,
														p =
															void 0 !== d &&
															null !== d &&
															d.hasOwnProperty(
																"display"
															)
																? d.display
																: null;
													s.style.display =
														null == p ||
														"boolean" === typeof p
															? ""
															: ("" + p).trim();
												}
											} catch (h) {
												cc(u, u.return, h);
											}
										}
									} else if (6 === t.tag) {
										if (null === n) {
											u = t;
											try {
												u.stateNode.nodeValue = a
													? ""
													: u.memoizedProps;
											} catch (h) {
												cc(u, u.return, h);
											}
										}
									} else if (
										((22 !== t.tag && 23 !== t.tag) ||
											null === t.memoizedState ||
											t === e) &&
										null !== t.child
									) {
										(t.child.return = t), (t = t.child);
										continue;
									}
									if (t === e) break e;
									for (; null === t.sibling; ) {
										if (null === t.return || t.return === e)
											break e;
										n === t && (n = null), (t = t.return);
									}
									n === t && (n = null),
										(t.sibling.return = t.return),
										(t = t.sibling);
								}
							4 & r &&
								null !== (r = e.updateQueue) &&
								null !== (n = r.retryQueue) &&
								((r.retryQueue = null), Rs(e, n));
							break;
						case 19:
							As(t, e),
								Ds(e),
								4 & r &&
									null !== (r = e.updateQueue) &&
									((e.updateQueue = null), Rs(e, r));
						case 30:
						case 21:
					}
				}
				function Ds(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							for (var n, r = e.return; null !== r; ) {
								if (hs(r)) {
									n = r;
									break;
								}
								r = r.return;
							}
							if (null == n) throw Error(l(160));
							switch (n.tag) {
								case 27:
									var a = n.stateNode;
									ys(e, ms(e), a);
									break;
								case 5:
									var o = n.stateNode;
									32 & n.flags &&
										(kt(o, ""), (n.flags &= -33)),
										ys(e, ms(e), o);
									break;
								case 3:
								case 4:
									var i = n.stateNode.containerInfo;
									gs(e, ms(e), i);
									break;
								default:
									throw Error(l(161));
							}
						} catch (s) {
							cc(e, e.return, s);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function Fs(e) {
					if (1024 & e.subtreeFlags)
						for (e = e.child; null !== e; ) {
							var t = e;
							Fs(t),
								5 === t.tag &&
									1024 & t.flags &&
									t.stateNode.reset(),
								(e = e.sibling);
						}
				}
				function Is(e, t) {
					if (8772 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							xs(e, t.alternate, t), (t = t.sibling);
				}
				function js(e) {
					for (e = e.child; null !== e; ) {
						var t = e;
						switch (t.tag) {
							case 0:
							case 11:
							case 14:
							case 15:
								is(4, t, t.return), js(t);
								break;
							case 1:
								fs(t, t.return);
								var n = t.stateNode;
								"function" === typeof n.componentWillUnmount &&
									us(t, t.return, n),
									js(t);
								break;
							case 27:
								kf(t.stateNode);
							case 26:
							case 5:
								fs(t, t.return), js(t);
								break;
							case 22:
								null === t.memoizedState && js(t);
								break;
							default:
								js(t);
						}
						e = e.sibling;
					}
				}
				function Us(e, t, n) {
					for (
						n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
						null !== t;

					) {
						var r = t.alternate,
							a = e,
							o = t,
							l = o.flags;
						switch (o.tag) {
							case 0:
							case 11:
							case 15:
								Us(a, o, n), ls(4, o);
								break;
							case 1:
								if (
									(Us(a, o, n),
									"function" ===
										typeof (a = (r = o).stateNode)
											.componentDidMount)
								)
									try {
										a.componentDidMount();
									} catch (u) {
										cc(r, r.return, u);
									}
								if (null !== (a = (r = o).updateQueue)) {
									var i = r.stateNode;
									try {
										var s = a.shared.hiddenCallbacks;
										if (null !== s)
											for (
												a.shared.hiddenCallbacks = null,
													a = 0;
												a < s.length;
												a++
											)
												fo(s[a], i);
									} catch (u) {
										cc(r, r.return, u);
									}
								}
								n && 64 & l && ss(o), cs(o, o.return);
								break;
							case 27:
								vs(o);
							case 26:
							case 5:
								Us(a, o, n),
									n && null === r && 4 & l && ds(o),
									cs(o, o.return);
								break;
							case 12:
								Us(a, o, n);
								break;
							case 13:
								Us(a, o, n), n && 4 & l && Ns(a, o);
								break;
							case 22:
								null === o.memoizedState && Us(a, o, n),
									cs(o, o.return);
								break;
							case 30:
								break;
							default:
								Us(a, o, n);
						}
						t = t.sibling;
					}
				}
				function Ms(e, t) {
					var n = null;
					null !== e &&
						null !== e.memoizedState &&
						null !== e.memoizedState.cachePool &&
						(n = e.memoizedState.cachePool.pool),
						(e = null),
						null !== t.memoizedState &&
							null !== t.memoizedState.cachePool &&
							(e = t.memoizedState.cachePool.pool),
						e !== n &&
							(null != e && e.refCount++, null != n && za(n));
				}
				function Bs(e, t) {
					(e = null),
						null !== t.alternate &&
							(e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache) !== e &&
							(t.refCount++, null != e && za(e));
				}
				function Hs(e, t, n, r) {
					if (10256 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							$s(e, t, n, r), (t = t.sibling);
				}
				function $s(e, t, n, r) {
					var a = t.flags;
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Hs(e, t, n, r), 2048 & a && ls(9, t);
							break;
						case 1:
						case 13:
						default:
							Hs(e, t, n, r);
							break;
						case 3:
							Hs(e, t, n, r),
								2048 & a &&
									((e = null),
									null !== t.alternate &&
										(e = t.alternate.memoizedState.cache),
									(t = t.memoizedState.cache) !== e &&
										(t.refCount++, null != e && za(e)));
							break;
						case 12:
							if (2048 & a) {
								Hs(e, t, n, r), (e = t.stateNode);
								try {
									var o = t.memoizedProps,
										l = o.id,
										i = o.onPostCommit;
									"function" === typeof i &&
										i(
											l,
											null === t.alternate
												? "mount"
												: "update",
											e.passiveEffectDuration,
											-0
										);
								} catch (s) {
									cc(t, t.return, s);
								}
							} else Hs(e, t, n, r);
							break;
						case 23:
							break;
						case 22:
							(o = t.stateNode),
								(l = t.alternate),
								null !== t.memoizedState
									? 2 & o._visibility
										? Hs(e, t, n, r)
										: Vs(e, t)
									: 2 & o._visibility
									? Hs(e, t, n, r)
									: ((o._visibility |= 2),
									  Ws(
											e,
											t,
											n,
											r,
											0 !== (10256 & t.subtreeFlags)
									  )),
								2048 & a && Ms(l, t);
							break;
						case 24:
							Hs(e, t, n, r), 2048 & a && Bs(t.alternate, t);
					}
				}
				function Ws(e, t, n, r, a) {
					for (
						a = a && 0 !== (10256 & t.subtreeFlags), t = t.child;
						null !== t;

					) {
						var o = e,
							l = t,
							i = n,
							s = r,
							u = l.flags;
						switch (l.tag) {
							case 0:
							case 11:
							case 15:
								Ws(o, l, i, s, a), ls(8, l);
								break;
							case 23:
								break;
							case 22:
								var c = l.stateNode;
								null !== l.memoizedState
									? 2 & c._visibility
										? Ws(o, l, i, s, a)
										: Vs(o, l)
									: ((c._visibility |= 2), Ws(o, l, i, s, a)),
									a && 2048 & u && Ms(l.alternate, l);
								break;
							case 24:
								Ws(o, l, i, s, a),
									a && 2048 & u && Bs(l.alternate, l);
								break;
							default:
								Ws(o, l, i, s, a);
						}
						t = t.sibling;
					}
				}
				function Vs(e, t) {
					if (10256 & t.subtreeFlags)
						for (t = t.child; null !== t; ) {
							var n = e,
								r = t,
								a = r.flags;
							switch (r.tag) {
								case 22:
									Vs(n, r), 2048 & a && Ms(r.alternate, r);
									break;
								case 24:
									Vs(n, r), 2048 & a && Bs(r.alternate, r);
									break;
								default:
									Vs(n, r);
							}
							t = t.sibling;
						}
				}
				var qs = 8192;
				function Ks(e) {
					if (e.subtreeFlags & qs)
						for (e = e.child; null !== e; ) Qs(e), (e = e.sibling);
				}
				function Qs(e) {
					switch (e.tag) {
						case 26:
							Ks(e),
								e.flags & qs &&
									null !== e.memoizedState &&
									(function (e, t, n) {
										if (null === $f) throw Error(l(475));
										var r = $f;
										if (
											"stylesheet" === t.type &&
											("string" !== typeof n.media ||
												!1 !==
													matchMedia(n.media)
														.matches) &&
											0 === (4 & t.state.loading)
										) {
											if (null === t.instance) {
												var a = Nf(n.href),
													o = e.querySelector(Rf(a));
												if (o)
													return (
														null !== (e = o._p) &&
															"object" ===
																typeof e &&
															"function" ===
																typeof e.then &&
															(r.count++,
															(r = Vf.bind(r)),
															e.then(r, r)),
														(t.state.loading |= 4),
														(t.instance = o),
														void Ve(o)
													);
												(o = e.ownerDocument || e),
													(n = Af(n)),
													(a = Ef.get(a)) && If(n, a),
													Ve(
														(o =
															o.createElement(
																"link"
															))
													);
												var i = o;
												(i._p = new Promise(function (
													e,
													t
												) {
													(i.onload = e),
														(i.onerror = t);
												})),
													ef(o, "link", n),
													(t.instance = o);
											}
											null === r.stylesheets &&
												(r.stylesheets = new Map()),
												r.stylesheets.set(t, e),
												(e = t.state.preload) &&
													0 ===
														(3 & t.state.loading) &&
													(r.count++,
													(t = Vf.bind(r)),
													e.addEventListener(
														"load",
														t
													),
													e.addEventListener(
														"error",
														t
													));
										}
									})(Ls, e.memoizedState, e.memoizedProps);
							break;
						case 5:
						default:
							Ks(e);
							break;
						case 3:
						case 4:
							var t = Ls;
							(Ls = Cf(e.stateNode.containerInfo)),
								Ks(e),
								(Ls = t);
							break;
						case 22:
							null === e.memoizedState &&
								(null !== (t = e.alternate) &&
								null !== t.memoizedState
									? ((t = qs),
									  (qs = 16777216),
									  Ks(e),
									  (qs = t))
									: Ks(e));
					}
				}
				function Gs(e) {
					var t = e.alternate;
					if (null !== t && null !== (e = t.child)) {
						t.child = null;
						do {
							(t = e.sibling), (e.sibling = null), (e = t);
						} while (null !== e);
					}
				}
				function Ys(e) {
					var t = e.deletions;
					if (0 !== (16 & e.flags)) {
						if (null !== t)
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(Es = r), Zs(r, e);
							}
						Gs(e);
					}
					if (10256 & e.subtreeFlags)
						for (e = e.child; null !== e; ) Xs(e), (e = e.sibling);
				}
				function Xs(e) {
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							Ys(e), 2048 & e.flags && is(9, e, e.return);
							break;
						case 3:
						case 12:
						default:
							Ys(e);
							break;
						case 22:
							var t = e.stateNode;
							null !== e.memoizedState &&
							2 & t._visibility &&
							(null === e.return || 13 !== e.return.tag)
								? ((t._visibility &= -3), Js(e))
								: Ys(e);
					}
				}
				function Js(e) {
					var t = e.deletions;
					if (0 !== (16 & e.flags)) {
						if (null !== t)
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(Es = r), Zs(r, e);
							}
						Gs(e);
					}
					for (e = e.child; null !== e; ) {
						switch ((t = e).tag) {
							case 0:
							case 11:
							case 15:
								is(8, t, t.return), Js(t);
								break;
							case 22:
								2 & (n = t.stateNode)._visibility &&
									((n._visibility &= -3), Js(t));
								break;
							default:
								Js(t);
						}
						e = e.sibling;
					}
				}
				function Zs(e, t) {
					for (; null !== Es; ) {
						var n = Es;
						switch (n.tag) {
							case 0:
							case 11:
							case 15:
								is(8, n, t);
								break;
							case 23:
							case 22:
								if (
									null !== n.memoizedState &&
									null !== n.memoizedState.cachePool
								) {
									var r = n.memoizedState.cachePool.pool;
									null != r && r.refCount++;
								}
								break;
							case 24:
								za(n.memoizedState.cache);
						}
						if (null !== (r = n.child)) (r.return = n), (Es = r);
						else
							e: for (n = e; null !== Es; ) {
								var a = (r = Es).sibling,
									o = r.return;
								if ((Cs(r), r === n)) {
									Es = null;
									break e;
								}
								if (null !== a) {
									(a.return = o), (Es = a);
									break e;
								}
								Es = o;
							}
					}
				}
				var eu = {
						getCacheForType: function (e) {
							var t = _a(Aa),
								n = t.data.get(e);
							return (
								void 0 === n && ((n = e()), t.data.set(e, n)), n
							);
						},
					},
					tu = "function" === typeof WeakMap ? WeakMap : Map,
					nu = 0,
					ru = null,
					au = null,
					ou = 0,
					lu = 0,
					iu = null,
					su = !1,
					uu = !1,
					cu = !1,
					fu = 0,
					du = 0,
					pu = 0,
					hu = 0,
					mu = 0,
					gu = 0,
					yu = 0,
					vu = null,
					bu = null,
					wu = !1,
					Su = 0,
					ku = 1 / 0,
					Eu = null,
					xu = null,
					Cu = 0,
					_u = null,
					Tu = null,
					Pu = 0,
					Ou = 0,
					Nu = null,
					Ru = null,
					Au = 0,
					Lu = null;
				function zu() {
					if (0 !== (2 & nu) && 0 !== ou) return ou & -ou;
					if (null !== z.T) {
						return 0 !== Ia ? Ia : Oc();
					}
					return Ne();
				}
				function Du() {
					0 === gu &&
						(gu = 0 === (536870912 & ou) || oa ? ke() : 536870912);
					var e = ai.current;
					return null !== e && (e.flags |= 32), gu;
				}
				function Fu(e, t, n) {
					((e !== ru || (2 !== lu && 9 !== lu)) &&
						null === e.cancelPendingCommit) ||
						($u(e, 0), Mu(e, ou, gu, !1)),
						Ce(e, n),
						(0 !== (2 & nu) && e === ru) ||
							(e === ru &&
								(0 === (2 & nu) && (hu |= n),
								4 === du && Mu(e, ou, gu, !1)),
							kc(e));
				}
				function Iu(e, t, n) {
					if (0 !== (6 & nu)) throw Error(l(327));
					for (
						var r =
								(!n &&
									0 === (124 & t) &&
									0 === (t & e.expiredLanes)) ||
								we(e, t),
							a = r
								? (function (e, t) {
										var n = nu;
										nu |= 2;
										var r = Vu(),
											a = qu();
										ru !== e || ou !== t
											? ((Eu = null),
											  (ku = te() + 500),
											  $u(e, t))
											: (uu = we(e, t));
										e: for (;;)
											try {
												if (0 !== lu && null !== au) {
													t = au;
													var o = iu;
													t: switch (lu) {
														case 1:
															(lu = 0),
																(iu = null),
																Zu(e, t, o, 1);
															break;
														case 2:
														case 9:
															if (Ga(o)) {
																(lu = 0),
																	(iu = null),
																	Ju(t);
																break;
															}
															(t = function () {
																(2 !== lu &&
																	9 !== lu) ||
																	ru !== e ||
																	(lu = 7),
																	kc(e);
															}),
																o.then(t, t);
															break e;
														case 3:
															lu = 7;
															break e;
														case 4:
															lu = 5;
															break e;
														case 7:
															Ga(o)
																? ((lu = 0),
																  (iu = null),
																  Ju(t))
																: ((lu = 0),
																  (iu = null),
																  Zu(
																		e,
																		t,
																		o,
																		7
																  ));
															break;
														case 5:
															var i = null;
															switch (au.tag) {
																case 26:
																	i =
																		au.memoizedState;
																case 5:
																case 27:
																	var s = au;
																	if (
																		!i ||
																		Hf(i)
																	) {
																		(lu = 0),
																			(iu =
																				null);
																		var u =
																			s.sibling;
																		if (
																			null !==
																			u
																		)
																			au =
																				u;
																		else {
																			var c =
																				s.return;
																			null !==
																			c
																				? ((au =
																						c),
																				  ec(
																						c
																				  ))
																				: (au =
																						null);
																		}
																		break t;
																	}
															}
															(lu = 0),
																(iu = null),
																Zu(e, t, o, 5);
															break;
														case 6:
															(lu = 0),
																(iu = null),
																Zu(e, t, o, 6);
															break;
														case 8:
															Hu(), (du = 6);
															break e;
														default:
															throw Error(l(462));
													}
												}
												Yu();
												break;
											} catch (f) {
												Wu(e, f);
											}
										return (
											(va = ya = null),
											(z.H = r),
											(z.A = a),
											(nu = n),
											null !== au
												? 0
												: ((ru = null),
												  (ou = 0),
												  Pr(),
												  du)
										);
								  })(e, t)
								: Qu(e, t, !0),
							o = r;
						;

					) {
						if (0 === a) {
							uu && !r && Mu(e, t, 0, !1);
							break;
						}
						if (((n = e.current.alternate), !o || Uu(n))) {
							if (2 === a) {
								if (((o = t), e.errorRecoveryDisabledLanes & o))
									var i = 0;
								else
									i =
										0 !== (i = -536870913 & e.pendingLanes)
											? i
											: 536870912 & i
											? 536870912
											: 0;
								if (0 !== i) {
									t = i;
									e: {
										var s = e;
										a = vu;
										var u =
											s.current.memoizedState
												.isDehydrated;
										if (
											(u && ($u(s, i).flags |= 256),
											2 !== (i = Qu(s, i, !1)))
										) {
											if (cu && !u) {
												(s.errorRecoveryDisabledLanes |=
													o),
													(hu |= o),
													(a = 4);
												break e;
											}
											(o = bu),
												(bu = a),
												null !== o &&
													(null === bu
														? (bu = o)
														: bu.push.apply(bu, o));
										}
										a = i;
									}
									if (((o = !1), 2 !== a)) continue;
								}
							}
							if (1 === a) {
								$u(e, 0), Mu(e, t, 0, !0);
								break;
							}
							e: {
								switch (((r = e), (o = a))) {
									case 0:
									case 1:
										throw Error(l(345));
									case 4:
										if ((4194048 & t) !== t) break;
									case 6:
										Mu(r, t, gu, !su);
										break e;
									case 2:
										bu = null;
										break;
									case 3:
									case 5:
										break;
									default:
										throw Error(l(329));
								}
								if (
									(62914560 & t) === t &&
									10 < (a = Su + 300 - te())
								) {
									if ((Mu(r, t, gu, !su), 0 !== be(r, 0, !0)))
										break e;
									r.timeoutHandle = uf(
										ju.bind(
											null,
											r,
											n,
											bu,
											Eu,
											wu,
											t,
											gu,
											hu,
											yu,
											su,
											o,
											2,
											-0,
											0
										),
										a
									);
								} else
									ju(
										r,
										n,
										bu,
										Eu,
										wu,
										t,
										gu,
										hu,
										yu,
										su,
										o,
										0,
										-0,
										0
									);
							}
							break;
						}
						(a = Qu(e, t, !1)), (o = !1);
					}
					kc(e);
				}
				function ju(e, t, n, r, a, o, i, s, u, c, f, d, p, h) {
					if (
						((e.timeoutHandle = -1),
						(8192 & (d = t.subtreeFlags) ||
							16785408 === (16785408 & d)) &&
							(($f = {
								stylesheets: null,
								count: 0,
								unsuspend: Wf,
							}),
							Qs(t),
							null !==
								(d = (function () {
									if (null === $f) throw Error(l(475));
									var e = $f;
									return (
										e.stylesheets &&
											0 === e.count &&
											Kf(e, e.stylesheets),
										0 < e.count
											? function (t) {
													var n = setTimeout(
														function () {
															if (
																(e.stylesheets &&
																	Kf(
																		e,
																		e.stylesheets
																	),
																e.unsuspend)
															) {
																var t =
																	e.unsuspend;
																(e.unsuspend =
																	null),
																	t();
															}
														},
														6e4
													);
													return (
														(e.unsuspend = t),
														function () {
															(e.unsuspend =
																null),
																clearTimeout(n);
														}
													);
											  }
											: null
									);
								})())))
					)
						return (
							(e.cancelPendingCommit = d(
								nc.bind(
									null,
									e,
									t,
									o,
									n,
									r,
									a,
									i,
									s,
									u,
									f,
									1,
									p,
									h
								)
							)),
							void Mu(e, o, i, !c)
						);
					nc(e, t, o, n, r, a, i, s, u);
				}
				function Uu(e) {
					for (var t = e; ; ) {
						var n = t.tag;
						if (
							(0 === n || 11 === n || 15 === n) &&
							16384 & t.flags &&
							null !== (n = t.updateQueue) &&
							null !== (n = n.stores)
						)
							for (var r = 0; r < n.length; r++) {
								var a = n[r],
									o = a.getSnapshot;
								a = a.value;
								try {
									if (!Gn(o(), a)) return !1;
								} catch (l) {
									return !1;
								}
							}
						if (
							((n = t.child),
							16384 & t.subtreeFlags && null !== n)
						)
							(n.return = t), (t = n);
						else {
							if (t === e) break;
							for (; null === t.sibling; ) {
								if (null === t.return || t.return === e)
									return !0;
								t = t.return;
							}
							(t.sibling.return = t.return), (t = t.sibling);
						}
					}
					return !0;
				}
				function Mu(e, t, n, r) {
					(t &= ~mu),
						(t &= ~hu),
						(e.suspendedLanes |= t),
						(e.pingedLanes &= ~t),
						r && (e.warmLanes |= t),
						(r = e.expirationTimes);
					for (var a = t; 0 < a; ) {
						var o = 31 - pe(a),
							l = 1 << o;
						(r[o] = -1), (a &= ~l);
					}
					0 !== n && _e(e, n, t);
				}
				function Bu() {
					return 0 !== (6 & nu) || (Ec(0, !1), !1);
				}
				function Hu() {
					if (null !== au) {
						if (0 === lu) var e = au.return;
						else
							(va = ya = null),
								jo((e = au)),
								(Gl = null),
								(Yl = 0),
								(e = au);
						for (; null !== e; ) os(e.alternate, e), (e = e.return);
						au = null;
					}
				}
				function $u(e, t) {
					var n = e.timeoutHandle;
					-1 !== n && ((e.timeoutHandle = -1), cf(n)),
						null !== (n = e.cancelPendingCommit) &&
							((e.cancelPendingCommit = null), n()),
						Hu(),
						(ru = e),
						(au = n = jr(e.current, null)),
						(ou = t),
						(lu = 0),
						(iu = null),
						(su = !1),
						(uu = we(e, t)),
						(cu = !1),
						(yu = gu = mu = hu = pu = du = 0),
						(bu = vu = null),
						(wu = !1),
						0 !== (8 & t) && (t |= 32 & t);
					var r = e.entangledLanes;
					if (0 !== r)
						for (e = e.entanglements, r &= t; 0 < r; ) {
							var a = 31 - pe(r),
								o = 1 << a;
							(t |= e[a]), (r &= ~o);
						}
					return (fu = t), Pr(), n;
				}
				function Wu(e, t) {
					(wo = null),
						(z.H = Vl),
						t === Va || t === Ka
							? ((t = Za()), (lu = 3))
							: t === qa
							? ((t = Za()), (lu = 4))
							: (lu =
									t === _i
										? 8
										: null !== t &&
										  "object" === typeof t &&
										  "function" === typeof t.then
										? 6
										: 1),
						(iu = t),
						null === au && ((du = 1), Si(e, xr(t, e.current)));
				}
				function Vu() {
					var e = z.H;
					return (z.H = Vl), null === e ? Vl : e;
				}
				function qu() {
					var e = z.A;
					return (z.A = eu), e;
				}
				function Ku() {
					(du = 4),
						su ||
							((4194048 & ou) !== ou && null !== ai.current) ||
							(uu = !0),
						(0 === (134217727 & pu) && 0 === (134217727 & hu)) ||
							null === ru ||
							Mu(ru, ou, gu, !1);
				}
				function Qu(e, t, n) {
					var r = nu;
					nu |= 2;
					var a = Vu(),
						o = qu();
					(ru === e && ou === t) || ((Eu = null), $u(e, t)), (t = !1);
					var l = du;
					e: for (;;)
						try {
							if (0 !== lu && null !== au) {
								var i = au,
									s = iu;
								switch (lu) {
									case 8:
										Hu(), (l = 6);
										break e;
									case 3:
									case 2:
									case 9:
									case 6:
										null === ai.current && (t = !0);
										var u = lu;
										if (
											((lu = 0),
											(iu = null),
											Zu(e, i, s, u),
											n && uu)
										) {
											l = 0;
											break e;
										}
										break;
									default:
										(u = lu),
											(lu = 0),
											(iu = null),
											Zu(e, i, s, u);
								}
							}
							Gu(), (l = du);
							break;
						} catch (c) {
							Wu(e, c);
						}
					return (
						t && e.shellSuspendCounter++,
						(va = ya = null),
						(nu = r),
						(z.H = a),
						(z.A = o),
						null === au && ((ru = null), (ou = 0), Pr()),
						l
					);
				}
				function Gu() {
					for (; null !== au; ) Xu(au);
				}
				function Yu() {
					for (; null !== au && !Z(); ) Xu(au);
				}
				function Xu(e) {
					var t = Xi(e.alternate, e, fu);
					(e.memoizedProps = e.pendingProps),
						null === t ? ec(e) : (au = t);
				}
				function Ju(e) {
					var t = e,
						n = t.alternate;
					switch (t.tag) {
						case 15:
						case 0:
							t = Fi(n, t, t.pendingProps, t.type, void 0, ou);
							break;
						case 11:
							t = Fi(
								n,
								t,
								t.pendingProps,
								t.type.render,
								t.ref,
								ou
							);
							break;
						case 5:
							jo(t);
						default:
							os(n, t), (t = Xi(n, (t = au = Ur(t, fu)), fu));
					}
					(e.memoizedProps = e.pendingProps),
						null === t ? ec(e) : (au = t);
				}
				function Zu(e, t, n, r) {
					(va = ya = null), jo(t), (Gl = null), (Yl = 0);
					var a = t.return;
					try {
						if (
							(function (e, t, n, r, a) {
								if (
									((n.flags |= 32768),
									null !== r &&
										"object" === typeof r &&
										"function" === typeof r.then)
								) {
									if (
										(null !== (t = n.alternate) &&
											Ea(t, n, a, !0),
										null !== (n = ai.current))
									) {
										switch (n.tag) {
											case 13:
												return (
													null === oi
														? Ku()
														: null ===
																n.alternate &&
														  0 === du &&
														  (du = 3),
													(n.flags &= -257),
													(n.flags |= 65536),
													(n.lanes = a),
													r === Qa
														? (n.flags |= 16384)
														: (null ===
														  (t = n.updateQueue)
																? (n.updateQueue =
																		new Set(
																			[r]
																		))
																: t.add(r),
														  fc(e, r, a)),
													!1
												);
											case 22:
												return (
													(n.flags |= 65536),
													r === Qa
														? (n.flags |= 16384)
														: (null ===
														  (t = n.updateQueue)
																? ((t = {
																		transitions:
																			null,
																		markerInstances:
																			null,
																		retryQueue:
																			new Set(
																				[
																					r,
																				]
																			),
																  }),
																  (n.updateQueue =
																		t))
																: null ===
																  (n =
																		t.retryQueue)
																? (t.retryQueue =
																		new Set(
																			[r]
																		))
																: n.add(r),
														  fc(e, r, a)),
													!1
												);
										}
										throw Error(l(435, n.tag));
									}
									return fc(e, r, a), Ku(), !1;
								}
								if (oa)
									return (
										null !== (t = ai.current)
											? (0 === (65536 & t.flags) &&
													(t.flags |= 256),
											  (t.flags |= 65536),
											  (t.lanes = a),
											  r !== sa &&
													ma(
														xr(
															(e = Error(l(422), {
																cause: r,
															})),
															n
														)
													))
											: (r !== sa &&
													ma(
														xr(
															(t = Error(l(423), {
																cause: r,
															})),
															n
														)
													),
											  ((e =
													e.current
														.alternate).flags |= 65536),
											  (a &= -a),
											  (e.lanes |= a),
											  (r = xr(r, n)),
											  io(
													e,
													(a = Ei(e.stateNode, r, a))
											  ),
											  4 !== du && (du = 2)),
										!1
									);
								var o = Error(l(520), { cause: r });
								if (
									((o = xr(o, n)),
									null === vu ? (vu = [o]) : vu.push(o),
									4 !== du && (du = 2),
									null === t)
								)
									return !0;
								(r = xr(r, n)), (n = t);
								do {
									switch (n.tag) {
										case 3:
											return (
												(n.flags |= 65536),
												(e = a & -a),
												(n.lanes |= e),
												io(
													n,
													(e = Ei(n.stateNode, r, e))
												),
												!1
											);
										case 1:
											if (
												((t = n.type),
												(o = n.stateNode),
												0 === (128 & n.flags) &&
													("function" ===
														typeof t.getDerivedStateFromError ||
														(null !== o &&
															"function" ===
																typeof o.componentDidCatch &&
															(null === xu ||
																!xu.has(o)))))
											)
												return (
													(n.flags |= 65536),
													(a &= -a),
													(n.lanes |= a),
													Ci((a = xi(a)), e, n, r),
													io(n, a),
													!1
												);
									}
									n = n.return;
								} while (null !== n);
								return !1;
							})(e, a, t, n, ou)
						)
							return (
								(du = 1),
								Si(e, xr(n, e.current)),
								void (au = null)
							);
					} catch (o) {
						if (null !== a) throw ((au = a), o);
						return (
							(du = 1), Si(e, xr(n, e.current)), void (au = null)
						);
					}
					32768 & t.flags
						? (oa || 1 === r
								? (e = !0)
								: uu || 0 !== (536870912 & ou)
								? (e = !1)
								: ((su = e = !0),
								  (2 === r || 9 === r || 3 === r || 6 === r) &&
										null !== (r = ai.current) &&
										13 === r.tag &&
										(r.flags |= 16384)),
						  tc(t, e))
						: ec(t);
				}
				function ec(e) {
					var t = e;
					do {
						if (0 !== (32768 & t.flags)) return void tc(t, su);
						e = t.return;
						var n = rs(t.alternate, t, fu);
						if (null !== n) return void (au = n);
						if (null !== (t = t.sibling)) return void (au = t);
						au = t = e;
					} while (null !== t);
					0 === du && (du = 5);
				}
				function tc(e, t) {
					do {
						var n = as(e.alternate, e);
						if (null !== n)
							return (n.flags &= 32767), void (au = n);
						if (
							(null !== (n = e.return) &&
								((n.flags |= 32768),
								(n.subtreeFlags = 0),
								(n.deletions = null)),
							!t && null !== (e = e.sibling))
						)
							return void (au = e);
						au = e = n;
					} while (null !== e);
					(du = 6), (au = null);
				}
				function nc(e, t, n, r, a, o, i, s, u) {
					e.cancelPendingCommit = null;
					do {
						ic();
					} while (0 !== Cu);
					if (0 !== (6 & nu)) throw Error(l(327));
					if (null !== t) {
						if (t === e.current) throw Error(l(177));
						if (
							((o = t.lanes | t.childLanes),
							(function (e, t, n, r, a, o) {
								var l = e.pendingLanes;
								(e.pendingLanes = n),
									(e.suspendedLanes = 0),
									(e.pingedLanes = 0),
									(e.warmLanes = 0),
									(e.expiredLanes &= n),
									(e.entangledLanes &= n),
									(e.errorRecoveryDisabledLanes &= n),
									(e.shellSuspendCounter = 0);
								var i = e.entanglements,
									s = e.expirationTimes,
									u = e.hiddenUpdates;
								for (n = l & ~n; 0 < n; ) {
									var c = 31 - pe(n),
										f = 1 << c;
									(i[c] = 0), (s[c] = -1);
									var d = u[c];
									if (null !== d)
										for (
											u[c] = null, c = 0;
											c < d.length;
											c++
										) {
											var p = d[c];
											null !== p &&
												(p.lane &= -536870913);
										}
									n &= ~f;
								}
								0 !== r && _e(e, r, 0),
									0 !== o &&
										0 === a &&
										0 !== e.tag &&
										(e.suspendedLanes |= o & ~(l & ~t));
							})(e, n, (o |= Tr), i, s, u),
							e === ru && ((au = ru = null), (ou = 0)),
							(Tu = t),
							(_u = e),
							(Pu = n),
							(Ou = o),
							(Nu = a),
							(Ru = r),
							0 !== (10256 & t.subtreeFlags) ||
							0 !== (10256 & t.flags)
								? ((e.callbackNode = null),
								  (e.callbackPriority = 0),
								  X(oe, function () {
										return sc(), null;
								  }))
								: ((e.callbackNode = null),
								  (e.callbackPriority = 0)),
							(r = 0 !== (13878 & t.flags)),
							0 !== (13878 & t.subtreeFlags) || r)
						) {
							(r = z.T),
								(z.T = null),
								(a = D.p),
								(D.p = 2),
								(i = nu),
								(nu |= 4);
							try {
								!(function (e, t) {
									if (
										((e = e.containerInfo),
										(tf = rd),
										tr((e = er(e))))
									) {
										if ("selectionStart" in e)
											var n = {
												start: e.selectionStart,
												end: e.selectionEnd,
											};
										else
											e: {
												var r =
													(n =
														((n =
															e.ownerDocument) &&
															n.defaultView) ||
														window).getSelection &&
													n.getSelection();
												if (r && 0 !== r.rangeCount) {
													n = r.anchorNode;
													var a = r.anchorOffset,
														o = r.focusNode;
													r = r.focusOffset;
													try {
														n.nodeType, o.nodeType;
													} catch (g) {
														n = null;
														break e;
													}
													var i = 0,
														s = -1,
														u = -1,
														c = 0,
														f = 0,
														d = e,
														p = null;
													t: for (;;) {
														for (
															var h;
															d !== n ||
																(0 !== a &&
																	3 !==
																		d.nodeType) ||
																(s = i + a),
																d !== o ||
																	(0 !== r &&
																		3 !==
																			d.nodeType) ||
																	(u = i + r),
																3 ===
																	d.nodeType &&
																	(i +=
																		d
																			.nodeValue
																			.length),
																null !==
																	(h =
																		d.firstChild);

														)
															(p = d), (d = h);
														for (;;) {
															if (d === e)
																break t;
															if (
																(p === n &&
																	++c === a &&
																	(s = i),
																p === o &&
																	++f === r &&
																	(u = i),
																null !==
																	(h =
																		d.nextSibling))
															)
																break;
															p = (d = p)
																.parentNode;
														}
														d = h;
													}
													n =
														-1 === s || -1 === u
															? null
															: {
																	start: s,
																	end: u,
															  };
												} else n = null;
											}
										n = n || { start: 0, end: 0 };
									} else n = null;
									for (
										nf = {
											focusedElem: e,
											selectionRange: n,
										},
											rd = !1,
											Es = t;
										null !== Es;

									)
										if (
											((e = (t = Es).child),
											0 !== (1024 & t.subtreeFlags) &&
												null !== e)
										)
											(e.return = t), (Es = e);
										else
											for (; null !== Es; ) {
												switch (
													((o = (t = Es).alternate),
													(e = t.flags),
													t.tag)
												) {
													case 0:
													case 11:
													case 15:
													case 5:
													case 26:
													case 27:
													case 6:
													case 4:
													case 17:
														break;
													case 1:
														if (
															0 !== (1024 & e) &&
															null !== o
														) {
															(e = void 0),
																(n = t),
																(a =
																	o.memoizedProps),
																(o =
																	o.memoizedState),
																(r =
																	n.stateNode);
															try {
																var m = gi(
																	n.type,
																	a,
																	(n.elementType,
																	n.type)
																);
																(e =
																	r.getSnapshotBeforeUpdate(
																		m,
																		o
																	)),
																	(r.__reactInternalSnapshotBeforeUpdate =
																		e);
															} catch (y) {
																cc(
																	n,
																	n.return,
																	y
																);
															}
														}
														break;
													case 3:
														if (0 !== (1024 & e))
															if (
																9 ===
																(n = (e =
																	t.stateNode
																		.containerInfo)
																	.nodeType)
															)
																gf(e);
															else if (1 === n)
																switch (
																	e.nodeName
																) {
																	case "HEAD":
																	case "HTML":
																	case "BODY":
																		gf(e);
																		break;
																	default:
																		e.textContent =
																			"";
																}
														break;
													default:
														if (0 !== (1024 & e))
															throw Error(l(163));
												}
												if (null !== (e = t.sibling)) {
													(e.return = t.return),
														(Es = e);
													break;
												}
												Es = t.return;
											}
								})(e, t);
							} finally {
								(nu = i), (D.p = a), (z.T = r);
							}
						}
						(Cu = 1), rc(), ac(), oc();
					}
				}
				function rc() {
					if (1 === Cu) {
						Cu = 0;
						var e = _u,
							t = Tu,
							n = 0 !== (13878 & t.flags);
						if (0 !== (13878 & t.subtreeFlags) || n) {
							(n = z.T), (z.T = null);
							var r = D.p;
							D.p = 2;
							var a = nu;
							nu |= 4;
							try {
								zs(t, e);
								var o = nf,
									l = er(e.containerInfo),
									i = o.focusedElem,
									s = o.selectionRange;
								if (
									l !== i &&
									i &&
									i.ownerDocument &&
									Zn(i.ownerDocument.documentElement, i)
								) {
									if (null !== s && tr(i)) {
										var u = s.start,
											c = s.end;
										if (
											(void 0 === c && (c = u),
											"selectionStart" in i)
										)
											(i.selectionStart = u),
												(i.selectionEnd = Math.min(
													c,
													i.value.length
												));
										else {
											var f = i.ownerDocument || document,
												d =
													(f && f.defaultView) ||
													window;
											if (d.getSelection) {
												var p = d.getSelection(),
													h = i.textContent.length,
													m = Math.min(s.start, h),
													g =
														void 0 === s.end
															? m
															: Math.min(
																	s.end,
																	h
															  );
												!p.extend &&
													m > g &&
													((l = g), (g = m), (m = l));
												var y = Jn(i, m),
													v = Jn(i, g);
												if (
													y &&
													v &&
													(1 !== p.rangeCount ||
														p.anchorNode !==
															y.node ||
														p.anchorOffset !==
															y.offset ||
														p.focusNode !==
															v.node ||
														p.focusOffset !==
															v.offset)
												) {
													var b = f.createRange();
													b.setStart(
														y.node,
														y.offset
													),
														p.removeAllRanges(),
														m > g
															? (p.addRange(b),
															  p.extend(
																	v.node,
																	v.offset
															  ))
															: (b.setEnd(
																	v.node,
																	v.offset
															  ),
															  p.addRange(b));
												}
											}
										}
									}
									for (f = [], p = i; (p = p.parentNode); )
										1 === p.nodeType &&
											f.push({
												element: p,
												left: p.scrollLeft,
												top: p.scrollTop,
											});
									for (
										"function" === typeof i.focus &&
											i.focus(),
											i = 0;
										i < f.length;
										i++
									) {
										var w = f[i];
										(w.element.scrollLeft = w.left),
											(w.element.scrollTop = w.top);
									}
								}
								(rd = !!tf), (nf = tf = null);
							} finally {
								(nu = a), (D.p = r), (z.T = n);
							}
						}
						(e.current = t), (Cu = 2);
					}
				}
				function ac() {
					if (2 === Cu) {
						Cu = 0;
						var e = _u,
							t = Tu,
							n = 0 !== (8772 & t.flags);
						if (0 !== (8772 & t.subtreeFlags) || n) {
							(n = z.T), (z.T = null);
							var r = D.p;
							D.p = 2;
							var a = nu;
							nu |= 4;
							try {
								xs(e, t.alternate, t);
							} finally {
								(nu = a), (D.p = r), (z.T = n);
							}
						}
						Cu = 3;
					}
				}
				function oc() {
					if (4 === Cu || 3 === Cu) {
						(Cu = 0), ee();
						var e = _u,
							t = Tu,
							n = Pu,
							r = Ru;
						0 !== (10256 & t.subtreeFlags) ||
						0 !== (10256 & t.flags)
							? (Cu = 5)
							: ((Cu = 0),
							  (Tu = _u = null),
							  lc(e, e.pendingLanes));
						var a = e.pendingLanes;
						if (
							(0 === a && (xu = null),
							Oe(n),
							(t = t.stateNode),
							fe && "function" === typeof fe.onCommitFiberRoot)
						)
							try {
								fe.onCommitFiberRoot(
									ce,
									t,
									void 0,
									128 === (128 & t.current.flags)
								);
							} catch (s) {}
						if (null !== r) {
							(t = z.T), (a = D.p), (D.p = 2), (z.T = null);
							try {
								for (
									var o = e.onRecoverableError, l = 0;
									l < r.length;
									l++
								) {
									var i = r[l];
									o(i.value, { componentStack: i.stack });
								}
							} finally {
								(z.T = t), (D.p = a);
							}
						}
						0 !== (3 & Pu) && ic(),
							kc(e),
							(a = e.pendingLanes),
							0 !== (4194090 & n) && 0 !== (42 & a)
								? e === Lu
									? Au++
									: ((Au = 0), (Lu = e))
								: (Au = 0),
							Ec(0, !1);
					}
				}
				function lc(e, t) {
					0 === (e.pooledCacheLanes &= t) &&
						null != (t = e.pooledCache) &&
						((e.pooledCache = null), za(t));
				}
				function ic(e) {
					return rc(), ac(), oc(), sc();
				}
				function sc() {
					if (5 !== Cu) return !1;
					var e = _u,
						t = Ou;
					Ou = 0;
					var n = Oe(Pu),
						r = z.T,
						a = D.p;
					try {
						(D.p = 32 > n ? 32 : n),
							(z.T = null),
							(n = Nu),
							(Nu = null);
						var o = _u,
							i = Pu;
						if (
							((Cu = 0),
							(Tu = _u = null),
							(Pu = 0),
							0 !== (6 & nu))
						)
							throw Error(l(331));
						var s = nu;
						if (
							((nu |= 4),
							Xs(o.current),
							$s(o, o.current, i, n),
							(nu = s),
							Ec(0, !1),
							fe &&
								"function" === typeof fe.onPostCommitFiberRoot)
						)
							try {
								fe.onPostCommitFiberRoot(ce, o);
							} catch (u) {}
						return !0;
					} finally {
						(D.p = a), (z.T = r), lc(e, t);
					}
				}
				function uc(e, t, n) {
					(t = xr(n, t)),
						null !== (e = oo(e, (t = Ei(e.stateNode, t, 2)), 2)) &&
							(Ce(e, 2), kc(e));
				}
				function cc(e, t, n) {
					if (3 === e.tag) uc(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								uc(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									"function" ===
										typeof t.type
											.getDerivedStateFromError ||
									("function" ===
										typeof r.componentDidCatch &&
										(null === xu || !xu.has(r)))
								) {
									(e = xr(n, e)),
										null !== (r = oo(t, (n = xi(2)), 2)) &&
											(Ci(n, r, t, e), Ce(r, 2), kc(r));
									break;
								}
							}
							t = t.return;
						}
				}
				function fc(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new tu();
						var a = new Set();
						r.set(t, a);
					} else
						void 0 === (a = r.get(t)) &&
							((a = new Set()), r.set(t, a));
					a.has(n) ||
						((cu = !0),
						a.add(n),
						(e = dc.bind(null, e, t, n)),
						t.then(e, e));
				}
				function dc(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(e.pingedLanes |= e.suspendedLanes & n),
						(e.warmLanes &= ~n),
						ru === e &&
							(ou & n) === n &&
							(4 === du ||
							(3 === du &&
								(62914560 & ou) === ou &&
								300 > te() - Su)
								? 0 === (2 & nu) && $u(e, 0)
								: (mu |= n),
							yu === ou && (yu = 0)),
						kc(e);
				}
				function pc(e, t) {
					0 === t && (t = Ee()),
						null !== (e = Rr(e, t)) && (Ce(e, t), kc(e));
				}
				function hc(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), pc(e, n);
				}
				function mc(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						case 22:
							r = e.stateNode._retryCache;
							break;
						default:
							throw Error(l(314));
					}
					null !== r && r.delete(t), pc(e, n);
				}
				var gc = null,
					yc = null,
					vc = !1,
					bc = !1,
					wc = !1,
					Sc = 0;
				function kc(e) {
					e !== yc &&
						null === e.next &&
						(null === yc ? (gc = yc = e) : (yc = yc.next = e)),
						(bc = !0),
						vc ||
							((vc = !0),
							df(function () {
								0 !== (6 & nu) ? X(re, xc) : Cc();
							}));
				}
				function Ec(e, t) {
					if (!wc && bc) {
						wc = !0;
						do {
							for (var n = !1, r = gc; null !== r; ) {
								if (!t)
									if (0 !== e) {
										var a = r.pendingLanes;
										if (0 === a) var o = 0;
										else {
											var l = r.suspendedLanes,
												i = r.pingedLanes;
											(o =
												(1 << (31 - pe(42 | e) + 1)) -
												1),
												(o =
													201326741 &
													(o &= a & ~(l & ~i))
														? (201326741 & o) | 1
														: o
														? 2 | o
														: 0);
										}
										0 !== o && ((n = !0), Pc(r, o));
									} else
										(o = ou),
											0 ===
												(3 &
													(o = be(
														r,
														r === ru ? o : 0,
														null !==
															r.cancelPendingCommit ||
															-1 !==
																r.timeoutHandle
													))) ||
												we(r, o) ||
												((n = !0), Pc(r, o));
								r = r.next;
							}
						} while (n);
						wc = !1;
					}
				}
				function xc() {
					Cc();
				}
				function Cc() {
					bc = vc = !1;
					var e = 0;
					0 !== Sc &&
						((function () {
							var e = window.event;
							if (e && "popstate" === e.type)
								return e !== sf && ((sf = e), !0);
							return (sf = null), !1;
						})() && (e = Sc),
						(Sc = 0));
					for (var t = te(), n = null, r = gc; null !== r; ) {
						var a = r.next,
							o = _c(r, t);
						0 === o
							? ((r.next = null),
							  null === n ? (gc = a) : (n.next = a),
							  null === a && (yc = n))
							: ((n = r),
							  (0 !== e || 0 !== (3 & o)) && (bc = !0)),
							(r = a);
					}
					Ec(e, !1);
				}
				function _c(e, t) {
					for (
						var n = e.suspendedLanes,
							r = e.pingedLanes,
							a = e.expirationTimes,
							o = -62914561 & e.pendingLanes;
						0 < o;

					) {
						var l = 31 - pe(o),
							i = 1 << l,
							s = a[l];
						-1 === s
							? (0 !== (i & n) && 0 === (i & r)) ||
							  (a[l] = Se(i, t))
							: s <= t && (e.expiredLanes |= i),
							(o &= ~i);
					}
					if (
						((n = ou),
						(n = be(
							e,
							e === (t = ru) ? n : 0,
							null !== e.cancelPendingCommit ||
								-1 !== e.timeoutHandle
						)),
						(r = e.callbackNode),
						0 === n ||
							(e === t && (2 === lu || 9 === lu)) ||
							null !== e.cancelPendingCommit)
					)
						return (
							null !== r && null !== r && J(r),
							(e.callbackNode = null),
							(e.callbackPriority = 0)
						);
					if (0 === (3 & n) || we(e, n)) {
						if ((t = n & -n) === e.callbackPriority) return t;
						switch ((null !== r && J(r), Oe(n))) {
							case 2:
							case 8:
								n = ae;
								break;
							case 32:
							default:
								n = oe;
								break;
							case 268435456:
								n = ie;
						}
						return (
							(r = Tc.bind(null, e)),
							(n = X(n, r)),
							(e.callbackPriority = t),
							(e.callbackNode = n),
							t
						);
					}
					return (
						null !== r && null !== r && J(r),
						(e.callbackPriority = 2),
						(e.callbackNode = null),
						2
					);
				}
				function Tc(e, t) {
					if (0 !== Cu && 5 !== Cu)
						return (
							(e.callbackNode = null),
							(e.callbackPriority = 0),
							null
						);
					var n = e.callbackNode;
					if (ic() && e.callbackNode !== n) return null;
					var r = ou;
					return 0 ===
						(r = be(
							e,
							e === ru ? r : 0,
							null !== e.cancelPendingCommit ||
								-1 !== e.timeoutHandle
						))
						? null
						: (Iu(e, r, t),
						  _c(e, te()),
						  null != e.callbackNode && e.callbackNode === n
								? Tc.bind(null, e)
								: null);
				}
				function Pc(e, t) {
					if (ic()) return null;
					Iu(e, t, !0);
				}
				function Oc() {
					return 0 === Sc && (Sc = ke()), Sc;
				}
				function Nc(e) {
					return null == e ||
						"symbol" === typeof e ||
						"boolean" === typeof e
						? null
						: "function" === typeof e
						? e
						: Ot("" + e);
				}
				function Rc(e, t) {
					var n = t.ownerDocument.createElement("input");
					return (
						(n.name = t.name),
						(n.value = t.value),
						e.id && n.setAttribute("form", e.id),
						t.parentNode.insertBefore(n, t),
						(e = new FormData(e)),
						n.parentNode.removeChild(n),
						e
					);
				}
				for (var Ac = 0; Ac < Sr.length; Ac++) {
					var Lc = Sr[Ac];
					kr(
						Lc.toLowerCase(),
						"on" + (Lc[0].toUpperCase() + Lc.slice(1))
					);
				}
				kr(pr, "onAnimationEnd"),
					kr(hr, "onAnimationIteration"),
					kr(mr, "onAnimationStart"),
					kr("dblclick", "onDoubleClick"),
					kr("focusin", "onFocus"),
					kr("focusout", "onBlur"),
					kr(gr, "onTransitionRun"),
					kr(yr, "onTransitionStart"),
					kr(vr, "onTransitionCancel"),
					kr(br, "onTransitionEnd"),
					Ge("onMouseEnter", ["mouseout", "mouseover"]),
					Ge("onMouseLeave", ["mouseout", "mouseover"]),
					Ge("onPointerEnter", ["pointerout", "pointerover"]),
					Ge("onPointerLeave", ["pointerout", "pointerover"]),
					Qe(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					Qe(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					Qe("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					Qe(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					Qe(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					Qe(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var zc =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					Dc = new Set(
						"beforetoggle cancel close invalid load scroll scrollend toggle"
							.split(" ")
							.concat(zc)
					);
				function Fc(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var l = r.length - 1; 0 <= l; l--) {
									var i = r[l],
										s = i.instance,
										u = i.currentTarget;
									if (
										((i = i.listener),
										s !== o && a.isPropagationStopped())
									)
										break e;
									(o = i), (a.currentTarget = u);
									try {
										o(a);
									} catch (c) {
										yi(c);
									}
									(a.currentTarget = null), (o = s);
								}
							else
								for (l = 0; l < r.length; l++) {
									if (
										((s = (i = r[l]).instance),
										(u = i.currentTarget),
										(i = i.listener),
										s !== o && a.isPropagationStopped())
									)
										break e;
									(o = i), (a.currentTarget = u);
									try {
										o(a);
									} catch (c) {
										yi(c);
									}
									(a.currentTarget = null), (o = s);
								}
						}
					}
				}
				function Ic(e, t) {
					var n = t[De];
					void 0 === n && (n = t[De] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Bc(t, e, 2, !1), n.add(r));
				}
				function jc(e, t, n) {
					var r = 0;
					t && (r |= 4), Bc(n, e, r, t);
				}
				var Uc =
					"_reactListening" + Math.random().toString(36).slice(2);
				function Mc(e) {
					if (!e[Uc]) {
						(e[Uc] = !0),
							qe.forEach(function (t) {
								"selectionchange" !== t &&
									(Dc.has(t) || jc(t, !1, e), jc(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t ||
							t[Uc] ||
							((t[Uc] = !0), jc("selectionchange", !1, t));
					}
				}
				function Bc(e, t, n, r) {
					switch (cd(t)) {
						case 2:
							var a = ad;
							break;
						case 8:
							a = od;
							break;
						default:
							a = ld;
					}
					(n = a.bind(null, t, n, e)),
						(a = void 0),
						!Ut ||
							("touchstart" !== t &&
								"touchmove" !== t &&
								"wheel" !== t) ||
							(a = !0),
						r
							? void 0 !== a
								? e.addEventListener(t, n, {
										capture: !0,
										passive: a,
								  })
								: e.addEventListener(t, n, !0)
							: void 0 !== a
							? e.addEventListener(t, n, { passive: a })
							: e.addEventListener(t, n, !1);
				}
				function Hc(e, t, n, r, a) {
					var o = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var l = r.tag;
							if (3 === l || 4 === l) {
								var i = r.stateNode.containerInfo;
								if (i === a) break;
								if (4 === l)
									for (l = r.return; null !== l; ) {
										var u = l.tag;
										if (
											(3 === u || 4 === u) &&
											l.stateNode.containerInfo === a
										)
											return;
										l = l.return;
									}
								for (; null !== i; ) {
									if (null === (l = Be(i))) return;
									if (
										5 === (u = l.tag) ||
										6 === u ||
										26 === u ||
										27 === u
									) {
										r = o = l;
										continue e;
									}
									i = i.parentNode;
								}
							}
							r = r.return;
						}
					Ft(function () {
						var r = o,
							a = Rt(n),
							l = [];
						e: {
							var i = wr.get(e);
							if (void 0 !== i) {
								var u = Zt,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === Vt(n)) break e;
									case "keydown":
									case "keyup":
										u = mn;
										break;
									case "focusin":
										(c = "focus"), (u = on);
										break;
									case "focusout":
										(c = "blur"), (u = on);
										break;
									case "beforeblur":
									case "afterblur":
										u = on;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										u = rn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										u = an;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										u = yn;
										break;
									case pr:
									case hr:
									case mr:
										u = ln;
										break;
									case br:
										u = vn;
										break;
									case "scroll":
									case "scrollend":
										u = tn;
										break;
									case "wheel":
										u = bn;
										break;
									case "copy":
									case "cut":
									case "paste":
										u = sn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										u = gn;
										break;
									case "toggle":
									case "beforetoggle":
										u = wn;
								}
								var f = 0 !== (4 & t),
									d =
										!f &&
										("scroll" === e || "scrollend" === e),
									p = f
										? null !== i
											? i + "Capture"
											: null
										: i;
								f = [];
								for (var h, m = r; null !== m; ) {
									var g = m;
									if (
										((h = g.stateNode),
										(5 !== (g = g.tag) &&
											26 !== g &&
											27 !== g) ||
											null === h ||
											null === p ||
											(null != (g = It(m, p)) &&
												f.push($c(m, g, h))),
										d)
									)
										break;
									m = m.return;
								}
								0 < f.length &&
									((i = new u(i, c, null, n, a)),
									l.push({ event: i, listeners: f }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((u = "mouseout" === e || "pointerout" === e),
								(!(i =
									"mouseover" === e || "pointerover" === e) ||
									n === Nt ||
									!(c = n.relatedTarget || n.fromElement) ||
									(!Be(c) && !c[ze])) &&
									(u || i) &&
									((i =
										a.window === a
											? a
											: (i = a.ownerDocument)
											? i.defaultView || i.parentWindow
											: window),
									u
										? ((u = r),
										  null !==
												(c = (c =
													n.relatedTarget ||
													n.toElement)
													? Be(c)
													: null) &&
												((d = s(c)),
												(f = c.tag),
												c !== d ||
													(5 !== f &&
														27 !== f &&
														6 !== f)) &&
												(c = null))
										: ((u = null), (c = r)),
									u !== c))
							) {
								if (
									((f = rn),
									(g = "onMouseLeave"),
									(p = "onMouseEnter"),
									(m = "mouse"),
									("pointerout" !== e &&
										"pointerover" !== e) ||
										((f = gn),
										(g = "onPointerLeave"),
										(p = "onPointerEnter"),
										(m = "pointer")),
									(d = null == u ? i : $e(u)),
									(h = null == c ? i : $e(c)),
									((i = new f(
										g,
										m + "leave",
										u,
										n,
										a
									)).target = d),
									(i.relatedTarget = h),
									(g = null),
									Be(a) === r &&
										(((f = new f(
											p,
											m + "enter",
											c,
											n,
											a
										)).target = h),
										(f.relatedTarget = d),
										(g = f)),
									(d = g),
									u && c)
								)
									e: {
										for (
											p = c, m = 0, h = f = u;
											h;
											h = Vc(h)
										)
											m++;
										for (h = 0, g = p; g; g = Vc(g)) h++;
										for (; 0 < m - h; ) (f = Vc(f)), m--;
										for (; 0 < h - m; ) (p = Vc(p)), h--;
										for (; m--; ) {
											if (
												f === p ||
												(null !== p &&
													f === p.alternate)
											)
												break e;
											(f = Vc(f)), (p = Vc(p));
										}
										f = null;
									}
								else f = null;
								null !== u && qc(l, i, u, f, !1),
									null !== c &&
										null !== d &&
										qc(l, d, c, f, !0);
							}
							if (
								"select" ===
									(u =
										(i = r ? $e(r) : window).nodeName &&
										i.nodeName.toLowerCase()) ||
								("input" === u && "file" === i.type)
							)
								var y = jn;
							else if (An(i))
								if (Un) y = Qn;
								else {
									y = qn;
									var v = Vn;
								}
							else
								!(u = i.nodeName) ||
								"input" !== u.toLowerCase() ||
								("checkbox" !== i.type && "radio" !== i.type)
									? r && _t(r.elementType) && (y = jn)
									: (y = Kn);
							switch (
								(y && (y = y(e, r))
									? Ln(l, y, n, a)
									: (v && v(e, i, r),
									  "focusout" === e &&
											r &&
											"number" === i.type &&
											null != r.memoizedProps.value &&
											vt(i, "number", i.value)),
								(v = r ? $e(r) : window),
								e)
							) {
								case "focusin":
									(An(v) || "true" === v.contentEditable) &&
										((rr = v), (ar = r), (or = null));
									break;
								case "focusout":
									or = ar = rr = null;
									break;
								case "mousedown":
									lr = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(lr = !1), ir(l, n, a);
									break;
								case "selectionchange":
									if (nr) break;
								case "keydown":
								case "keyup":
									ir(l, n, a);
							}
							var b;
							if (kn)
								e: {
									switch (e) {
										case "compositionstart":
											var w = "onCompositionStart";
											break e;
										case "compositionend":
											w = "onCompositionEnd";
											break e;
										case "compositionupdate":
											w = "onCompositionUpdate";
											break e;
									}
									w = void 0;
								}
							else
								Nn
									? Pn(e, n) && (w = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (w = "onCompositionStart");
							w &&
								(Cn &&
									"ko" !== n.locale &&
									(Nn || "onCompositionStart" !== w
										? "onCompositionEnd" === w &&
										  Nn &&
										  (b = Wt())
										: ((Ht =
												"value" in (Bt = a)
													? Bt.value
													: Bt.textContent),
										  (Nn = !0))),
								0 < (v = Wc(r, w)).length &&
									((w = new un(w, e, null, n, a)),
									l.push({ event: w, listeners: v }),
									b
										? (w.data = b)
										: null !== (b = On(n)) &&
										  (w.data = b))),
								(b = xn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return On(t);
												case "keypress":
													return 32 !== t.which
														? null
														: ((Tn = !0), _n);
												case "textInput":
													return (e = t.data) ===
														_n && Tn
														? null
														: e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Nn)
												return "compositionend" === e ||
													(!kn && Pn(e, t))
													? ((e = Wt()),
													  ($t = Ht = Bt = null),
													  (Nn = !1),
													  e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(
															t.ctrlKey ||
															t.altKey ||
															t.metaKey
														) ||
														(t.ctrlKey && t.altKey)
													) {
														if (
															t.char &&
															1 < t.char.length
														)
															return t.char;
														if (t.which)
															return String.fromCharCode(
																t.which
															);
													}
													return null;
												case "compositionend":
													return Cn &&
														"ko" !== t.locale
														? null
														: t.data;
											}
									  })(e, n)) &&
									0 < (w = Wc(r, "onBeforeInput")).length &&
									((v = new un(
										"onBeforeInput",
										"beforeinput",
										null,
										n,
										a
									)),
									l.push({ event: v, listeners: w }),
									(v.data = b)),
								(function (e, t, n, r, a) {
									if (
										"submit" === t &&
										n &&
										n.stateNode === a
									) {
										var o = Nc((a[Le] || null).action),
											l = r.submitter;
										l &&
											null !==
												(t = (t = l[Le] || null)
													? Nc(t.formAction)
													: l.getAttribute(
															"formAction"
													  )) &&
											((o = t), (l = null));
										var i = new Zt(
											"action",
											"action",
											null,
											r,
											a
										);
										e.push({
											event: i,
											listeners: [
												{
													instance: null,
													listener: function () {
														if (
															r.defaultPrevented
														) {
															if (0 !== Sc) {
																var e = l
																	? Rc(a, l)
																	: new FormData(
																			a
																	  );
																Rl(
																	n,
																	{
																		pending:
																			!0,
																		data: e,
																		method: a.method,
																		action: o,
																	},
																	null,
																	e
																);
															}
														} else
															"function" ===
																typeof o &&
																(i.preventDefault(),
																(e = l
																	? Rc(a, l)
																	: new FormData(
																			a
																	  )),
																Rl(
																	n,
																	{
																		pending:
																			!0,
																		data: e,
																		method: a.method,
																		action: o,
																	},
																	o,
																	e
																));
													},
													currentTarget: a,
												},
											],
										});
									}
								})(l, e, r, n, a);
						}
						Fc(l, t);
					});
				}
				function $c(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Wc(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var a = e,
							o = a.stateNode;
						if (
							((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
								null === o ||
								(null != (a = It(e, n)) &&
									r.unshift($c(e, a, o)),
								null != (a = It(e, t)) && r.push($c(e, a, o))),
							3 === e.tag)
						)
							return r;
						e = e.return;
					}
					return [];
				}
				function Vc(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag && 27 !== e.tag);
					return e || null;
				}
				function qc(e, t, n, r, a) {
					for (
						var o = t._reactName, l = [];
						null !== n && n !== r;

					) {
						var i = n,
							s = i.alternate,
							u = i.stateNode;
						if (((i = i.tag), null !== s && s === r)) break;
						(5 !== i && 26 !== i && 27 !== i) ||
							null === u ||
							((s = u),
							a
								? null != (u = It(n, o)) &&
								  l.unshift($c(n, u, s))
								: a ||
								  (null != (u = It(n, o)) &&
										l.push($c(n, u, s)))),
							(n = n.return);
					}
					0 !== l.length && e.push({ event: t, listeners: l });
				}
				var Kc = /\r\n?/g,
					Qc = /\u0000|\uFFFD/g;
				function Gc(e) {
					return ("string" === typeof e ? e : "" + e)
						.replace(Kc, "\n")
						.replace(Qc, "");
				}
				function Yc(e, t) {
					return (t = Gc(t)), Gc(e) === t;
				}
				function Xc() {}
				function Jc(e, t, n, r, a, o) {
					switch (n) {
						case "children":
							"string" === typeof r
								? "body" === t ||
								  ("textarea" === t && "" === r) ||
								  kt(e, r)
								: ("number" === typeof r ||
										"bigint" === typeof r) &&
								  "body" !== t &&
								  kt(e, "" + r);
							break;
						case "className":
							nt(e, "class", r);
							break;
						case "tabIndex":
							nt(e, "tabindex", r);
							break;
						case "dir":
						case "role":
						case "viewBox":
						case "width":
						case "height":
							nt(e, n, r);
							break;
						case "style":
							Ct(e, r, o);
							break;
						case "data":
							if ("object" !== t) {
								nt(e, "data", r);
								break;
							}
						case "src":
						case "href":
							if ("" === r && ("a" !== t || "href" !== n)) {
								e.removeAttribute(n);
								break;
							}
							if (
								null == r ||
								"function" === typeof r ||
								"symbol" === typeof r ||
								"boolean" === typeof r
							) {
								e.removeAttribute(n);
								break;
							}
							(r = Ot("" + r)), e.setAttribute(n, r);
							break;
						case "action":
						case "formAction":
							if ("function" === typeof r) {
								e.setAttribute(
									n,
									"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
								);
								break;
							}
							if (
								("function" === typeof o &&
									("formAction" === n
										? ("input" !== t &&
												Jc(
													e,
													t,
													"name",
													a.name,
													a,
													null
												),
										  Jc(
												e,
												t,
												"formEncType",
												a.formEncType,
												a,
												null
										  ),
										  Jc(
												e,
												t,
												"formMethod",
												a.formMethod,
												a,
												null
										  ),
										  Jc(
												e,
												t,
												"formTarget",
												a.formTarget,
												a,
												null
										  ))
										: (Jc(
												e,
												t,
												"encType",
												a.encType,
												a,
												null
										  ),
										  Jc(e, t, "method", a.method, a, null),
										  Jc(
												e,
												t,
												"target",
												a.target,
												a,
												null
										  ))),
								null == r ||
									"symbol" === typeof r ||
									"boolean" === typeof r)
							) {
								e.removeAttribute(n);
								break;
							}
							(r = Ot("" + r)), e.setAttribute(n, r);
							break;
						case "onClick":
							null != r && (e.onclick = Xc);
							break;
						case "onScroll":
							null != r && Ic("scroll", e);
							break;
						case "onScrollEnd":
							null != r && Ic("scrollend", e);
							break;
						case "dangerouslySetInnerHTML":
							if (null != r) {
								if ("object" !== typeof r || !("__html" in r))
									throw Error(l(61));
								if (null != (n = r.__html)) {
									if (null != a.children) throw Error(l(60));
									e.innerHTML = n;
								}
							}
							break;
						case "multiple":
							e.multiple =
								r &&
								"function" !== typeof r &&
								"symbol" !== typeof r;
							break;
						case "muted":
							e.muted =
								r &&
								"function" !== typeof r &&
								"symbol" !== typeof r;
							break;
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
						case "defaultValue":
						case "defaultChecked":
						case "innerHTML":
						case "ref":
						case "autoFocus":
							break;
						case "xlinkHref":
							if (
								null == r ||
								"function" === typeof r ||
								"boolean" === typeof r ||
								"symbol" === typeof r
							) {
								e.removeAttribute("xlink:href");
								break;
							}
							(n = Ot("" + r)),
								e.setAttributeNS(
									"http://www.w3.org/1999/xlink",
									"xlink:href",
									n
								);
							break;
						case "contentEditable":
						case "spellCheck":
						case "draggable":
						case "value":
						case "autoReverse":
						case "externalResourcesRequired":
						case "focusable":
						case "preserveAlpha":
							null != r &&
							"function" !== typeof r &&
							"symbol" !== typeof r
								? e.setAttribute(n, "" + r)
								: e.removeAttribute(n);
							break;
						case "inert":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
							r &&
							"function" !== typeof r &&
							"symbol" !== typeof r
								? e.setAttribute(n, "")
								: e.removeAttribute(n);
							break;
						case "capture":
						case "download":
							!0 === r
								? e.setAttribute(n, "")
								: !1 !== r &&
								  null != r &&
								  "function" !== typeof r &&
								  "symbol" !== typeof r
								? e.setAttribute(n, r)
								: e.removeAttribute(n);
							break;
						case "cols":
						case "rows":
						case "size":
						case "span":
							null != r &&
							"function" !== typeof r &&
							"symbol" !== typeof r &&
							!isNaN(r) &&
							1 <= r
								? e.setAttribute(n, r)
								: e.removeAttribute(n);
							break;
						case "rowSpan":
						case "start":
							null == r ||
							"function" === typeof r ||
							"symbol" === typeof r ||
							isNaN(r)
								? e.removeAttribute(n)
								: e.setAttribute(n, r);
							break;
						case "popover":
							Ic("beforetoggle", e),
								Ic("toggle", e),
								tt(e, "popover", r);
							break;
						case "xlinkActuate":
							rt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:actuate",
								r
							);
							break;
						case "xlinkArcrole":
							rt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:arcrole",
								r
							);
							break;
						case "xlinkRole":
							rt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:role",
								r
							);
							break;
						case "xlinkShow":
							rt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:show",
								r
							);
							break;
						case "xlinkTitle":
							rt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:title",
								r
							);
							break;
						case "xlinkType":
							rt(
								e,
								"http://www.w3.org/1999/xlink",
								"xlink:type",
								r
							);
							break;
						case "xmlBase":
							rt(
								e,
								"http://www.w3.org/XML/1998/namespace",
								"xml:base",
								r
							);
							break;
						case "xmlLang":
							rt(
								e,
								"http://www.w3.org/XML/1998/namespace",
								"xml:lang",
								r
							);
							break;
						case "xmlSpace":
							rt(
								e,
								"http://www.w3.org/XML/1998/namespace",
								"xml:space",
								r
							);
							break;
						case "is":
							tt(e, "is", r);
							break;
						case "innerText":
						case "textContent":
							break;
						default:
							(!(2 < n.length) ||
								("o" !== n[0] && "O" !== n[0]) ||
								("n" !== n[1] && "N" !== n[1])) &&
								tt(e, (n = Tt.get(n) || n), r);
					}
				}
				function Zc(e, t, n, r, a, o) {
					switch (n) {
						case "style":
							Ct(e, r, o);
							break;
						case "dangerouslySetInnerHTML":
							if (null != r) {
								if ("object" !== typeof r || !("__html" in r))
									throw Error(l(61));
								if (null != (n = r.__html)) {
									if (null != a.children) throw Error(l(60));
									e.innerHTML = n;
								}
							}
							break;
						case "children":
							"string" === typeof r
								? kt(e, r)
								: ("number" === typeof r ||
										"bigint" === typeof r) &&
								  kt(e, "" + r);
							break;
						case "onScroll":
							null != r && Ic("scroll", e);
							break;
						case "onScrollEnd":
							null != r && Ic("scrollend", e);
							break;
						case "onClick":
							null != r && (e.onclick = Xc);
							break;
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
						case "innerHTML":
						case "ref":
						case "innerText":
						case "textContent":
							break;
						default:
							Ke.hasOwnProperty(n) ||
								("o" !== n[0] ||
								"n" !== n[1] ||
								((a = n.endsWith("Capture")),
								(t = n.slice(2, a ? n.length - 7 : void 0)),
								"function" ===
									typeof (o =
										null != (o = e[Le] || null)
											? o[n]
											: null) &&
									e.removeEventListener(t, o, a),
								"function" !== typeof r)
									? n in e
										? (e[n] = r)
										: !0 === r
										? e.setAttribute(n, "")
										: tt(e, n, r)
									: ("function" !== typeof o &&
											null !== o &&
											(n in e
												? (e[n] = null)
												: e.hasAttribute(n) &&
												  e.removeAttribute(n)),
									  e.addEventListener(t, r, a)));
					}
				}
				function ef(e, t, n) {
					switch (t) {
						case "div":
						case "span":
						case "svg":
						case "path":
						case "a":
						case "g":
						case "p":
						case "li":
							break;
						case "img":
							Ic("error", e), Ic("load", e);
							var r,
								a = !1,
								o = !1;
							for (r in n)
								if (n.hasOwnProperty(r)) {
									var i = n[r];
									if (null != i)
										switch (r) {
											case "src":
												a = !0;
												break;
											case "srcSet":
												o = !0;
												break;
											case "children":
											case "dangerouslySetInnerHTML":
												throw Error(l(137, t));
											default:
												Jc(e, t, r, i, n, null);
										}
								}
							return (
								o && Jc(e, t, "srcSet", n.srcSet, n, null),
								void (a && Jc(e, t, "src", n.src, n, null))
							);
						case "input":
							Ic("invalid", e);
							var s = (r = i = o = null),
								u = null,
								c = null;
							for (a in n)
								if (n.hasOwnProperty(a)) {
									var f = n[a];
									if (null != f)
										switch (a) {
											case "name":
												o = f;
												break;
											case "type":
												i = f;
												break;
											case "checked":
												u = f;
												break;
											case "defaultChecked":
												c = f;
												break;
											case "value":
												r = f;
												break;
											case "defaultValue":
												s = f;
												break;
											case "children":
											case "dangerouslySetInnerHTML":
												if (null != f)
													throw Error(l(137, t));
												break;
											default:
												Jc(e, t, a, f, n, null);
										}
								}
							return yt(e, r, s, u, c, i, o, !1), void ft(e);
						case "select":
							for (o in (Ic("invalid", e), (a = i = r = null), n))
								if (n.hasOwnProperty(o) && null != (s = n[o]))
									switch (o) {
										case "value":
											r = s;
											break;
										case "defaultValue":
											i = s;
											break;
										case "multiple":
											a = s;
										default:
											Jc(e, t, o, s, n, null);
									}
							return (
								(t = r),
								(n = i),
								(e.multiple = !!a),
								void (null != t
									? bt(e, !!a, t, !1)
									: null != n && bt(e, !!a, n, !0))
							);
						case "textarea":
							for (i in (Ic("invalid", e), (r = o = a = null), n))
								if (n.hasOwnProperty(i) && null != (s = n[i]))
									switch (i) {
										case "value":
											a = s;
											break;
										case "defaultValue":
											o = s;
											break;
										case "children":
											r = s;
											break;
										case "dangerouslySetInnerHTML":
											if (null != s) throw Error(l(91));
											break;
										default:
											Jc(e, t, i, s, n, null);
									}
							return St(e, a, o, r), void ft(e);
						case "option":
							for (u in n)
								if (n.hasOwnProperty(u) && null != (a = n[u]))
									if ("selected" === u)
										e.selected =
											a &&
											"function" !== typeof a &&
											"symbol" !== typeof a;
									else Jc(e, t, u, a, n, null);
							return;
						case "dialog":
							Ic("beforetoggle", e),
								Ic("toggle", e),
								Ic("cancel", e),
								Ic("close", e);
							break;
						case "iframe":
						case "object":
							Ic("load", e);
							break;
						case "video":
						case "audio":
							for (a = 0; a < zc.length; a++) Ic(zc[a], e);
							break;
						case "image":
							Ic("error", e), Ic("load", e);
							break;
						case "details":
							Ic("toggle", e);
							break;
						case "embed":
						case "source":
						case "link":
							Ic("error", e), Ic("load", e);
						case "area":
						case "base":
						case "br":
						case "col":
						case "hr":
						case "keygen":
						case "meta":
						case "param":
						case "track":
						case "wbr":
						case "menuitem":
							for (c in n)
								if (n.hasOwnProperty(c) && null != (a = n[c]))
									switch (c) {
										case "children":
										case "dangerouslySetInnerHTML":
											throw Error(l(137, t));
										default:
											Jc(e, t, c, a, n, null);
									}
							return;
						default:
							if (_t(t)) {
								for (f in n)
									n.hasOwnProperty(f) &&
										void 0 !== (a = n[f]) &&
										Zc(e, t, f, a, n, void 0);
								return;
							}
					}
					for (s in n)
						n.hasOwnProperty(s) &&
							null != (a = n[s]) &&
							Jc(e, t, s, a, n, null);
				}
				var tf = null,
					nf = null;
				function rf(e) {
					return 9 === e.nodeType ? e : e.ownerDocument;
				}
				function af(e) {
					switch (e) {
						case "http://www.w3.org/2000/svg":
							return 1;
						case "http://www.w3.org/1998/Math/MathML":
							return 2;
						default:
							return 0;
					}
				}
				function of(e, t) {
					if (0 === e)
						switch (t) {
							case "svg":
								return 1;
							case "math":
								return 2;
							default:
								return 0;
						}
					return 1 === e && "foreignObject" === t ? 0 : e;
				}
				function lf(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" === typeof t.children ||
						"number" === typeof t.children ||
						"bigint" === typeof t.children ||
						("object" === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var sf = null;
				var uf = "function" === typeof setTimeout ? setTimeout : void 0,
					cf =
						"function" === typeof clearTimeout
							? clearTimeout
							: void 0,
					ff = "function" === typeof Promise ? Promise : void 0,
					df =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof ff
							? function (e) {
									return ff.resolve(null).then(e).catch(pf);
							  }
							: uf;
				function pf(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function hf(e) {
					return "head" === e;
				}
				function mf(e, t) {
					var n = t,
						r = 0,
						a = 0;
					do {
						var o = n.nextSibling;
						if ((e.removeChild(n), o && 8 === o.nodeType))
							if ("/$" === (n = o.data)) {
								if (0 < r && 8 > r) {
									n = r;
									var l = e.ownerDocument;
									if (
										(1 & n && kf(l.documentElement),
										2 & n && kf(l.body),
										4 & n)
									)
										for (
											kf((n = l.head)), l = n.firstChild;
											l;

										) {
											var i = l.nextSibling,
												s = l.nodeName;
											l[Ue] ||
												"SCRIPT" === s ||
												"STYLE" === s ||
												("LINK" === s &&
													"stylesheet" ===
														l.rel.toLowerCase()) ||
												n.removeChild(l),
												(l = i);
										}
								}
								if (0 === a)
									return e.removeChild(o), void Pd(t);
								a--;
							} else
								"$" === n || "$?" === n || "$!" === n
									? a++
									: (r = n.charCodeAt(0) - 48);
						else r = 0;
						n = o;
					} while (n);
					Pd(t);
				}
				function gf(e) {
					var t = e.firstChild;
					for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
						var n = t;
						switch (((t = t.nextSibling), n.nodeName)) {
							case "HTML":
							case "HEAD":
							case "BODY":
								gf(n), Me(n);
								continue;
							case "SCRIPT":
							case "STYLE":
								continue;
							case "LINK":
								if ("stylesheet" === n.rel.toLowerCase())
									continue;
						}
						e.removeChild(n);
					}
				}
				function yf(e) {
					return (
						"$!" === e.data ||
						("$?" === e.data &&
							"complete" === e.ownerDocument.readyState)
					);
				}
				function vf(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if (
								"$" === (t = e.data) ||
								"$!" === t ||
								"$?" === t ||
								"F!" === t ||
								"F" === t
							)
								break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				var bf = null;
				function wf(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				function Sf(e, t, n) {
					switch (((t = rf(n)), e)) {
						case "html":
							if (!(e = t.documentElement)) throw Error(l(452));
							return e;
						case "head":
							if (!(e = t.head)) throw Error(l(453));
							return e;
						case "body":
							if (!(e = t.body)) throw Error(l(454));
							return e;
						default:
							throw Error(l(451));
					}
				}
				function kf(e) {
					for (var t = e.attributes; t.length; )
						e.removeAttributeNode(t[0]);
					Me(e);
				}
				var Ef = new Map(),
					xf = new Set();
				function Cf(e) {
					return "function" === typeof e.getRootNode
						? e.getRootNode()
						: 9 === e.nodeType
						? e
						: e.ownerDocument;
				}
				var _f = D.d;
				D.d = {
					f: function () {
						var e = _f.f(),
							t = Bu();
						return e || t;
					},
					r: function (e) {
						var t = He(e);
						null !== t && 5 === t.tag && "form" === t.type
							? Ll(t)
							: _f.r(e);
					},
					D: function (e) {
						_f.D(e), Pf("dns-prefetch", e, null);
					},
					C: function (e, t) {
						_f.C(e, t), Pf("preconnect", e, t);
					},
					L: function (e, t, n) {
						_f.L(e, t, n);
						var r = Tf;
						if (r && e && t) {
							var a = 'link[rel="preload"][as="' + mt(t) + '"]';
							"image" === t && n && n.imageSrcSet
								? ((a +=
										'[imagesrcset="' +
										mt(n.imageSrcSet) +
										'"]'),
								  "string" === typeof n.imageSizes &&
										(a +=
											'[imagesizes="' +
											mt(n.imageSizes) +
											'"]'))
								: (a += '[href="' + mt(e) + '"]');
							var o = a;
							switch (t) {
								case "style":
									o = Nf(e);
									break;
								case "script":
									o = Lf(e);
							}
							Ef.has(o) ||
								((e = d(
									{
										rel: "preload",
										href:
											"image" === t && n && n.imageSrcSet
												? void 0
												: e,
										as: t,
									},
									n
								)),
								Ef.set(o, e),
								null !== r.querySelector(a) ||
									("style" === t && r.querySelector(Rf(o))) ||
									("script" === t &&
										r.querySelector(zf(o))) ||
									(ef(
										(t = r.createElement("link")),
										"link",
										e
									),
									Ve(t),
									r.head.appendChild(t)));
						}
					},
					m: function (e, t) {
						_f.m(e, t);
						var n = Tf;
						if (n && e) {
							var r =
									t && "string" === typeof t.as
										? t.as
										: "script",
								a =
									'link[rel="modulepreload"][as="' +
									mt(r) +
									'"][href="' +
									mt(e) +
									'"]',
								o = a;
							switch (r) {
								case "audioworklet":
								case "paintworklet":
								case "serviceworker":
								case "sharedworker":
								case "worker":
								case "script":
									o = Lf(e);
							}
							if (
								!Ef.has(o) &&
								((e = d({ rel: "modulepreload", href: e }, t)),
								Ef.set(o, e),
								null === n.querySelector(a))
							) {
								switch (r) {
									case "audioworklet":
									case "paintworklet":
									case "serviceworker":
									case "sharedworker":
									case "worker":
									case "script":
										if (n.querySelector(zf(o))) return;
								}
								ef((r = n.createElement("link")), "link", e),
									Ve(r),
									n.head.appendChild(r);
							}
						}
					},
					X: function (e, t) {
						_f.X(e, t);
						var n = Tf;
						if (n && e) {
							var r = We(n).hoistableScripts,
								a = Lf(e),
								o = r.get(a);
							o ||
								((o = n.querySelector(zf(a))) ||
									((e = d({ src: e, async: !0 }, t)),
									(t = Ef.get(a)) && jf(e, t),
									Ve((o = n.createElement("script"))),
									ef(o, "link", e),
									n.head.appendChild(o)),
								(o = {
									type: "script",
									instance: o,
									count: 1,
									state: null,
								}),
								r.set(a, o));
						}
					},
					S: function (e, t, n) {
						_f.S(e, t, n);
						var r = Tf;
						if (r && e) {
							var a = We(r).hoistableStyles,
								o = Nf(e);
							t = t || "default";
							var l = a.get(o);
							if (!l) {
								var i = { loading: 0, preload: null };
								if ((l = r.querySelector(Rf(o)))) i.loading = 5;
								else {
									(e = d(
										{
											rel: "stylesheet",
											href: e,
											"data-precedence": t,
										},
										n
									)),
										(n = Ef.get(o)) && If(e, n);
									var s = (l = r.createElement("link"));
									Ve(s),
										ef(s, "link", e),
										(s._p = new Promise(function (e, t) {
											(s.onload = e), (s.onerror = t);
										})),
										s.addEventListener("load", function () {
											i.loading |= 1;
										}),
										s.addEventListener(
											"error",
											function () {
												i.loading |= 2;
											}
										),
										(i.loading |= 4),
										Ff(l, t, r);
								}
								(l = {
									type: "stylesheet",
									instance: l,
									count: 1,
									state: i,
								}),
									a.set(o, l);
							}
						}
					},
					M: function (e, t) {
						_f.M(e, t);
						var n = Tf;
						if (n && e) {
							var r = We(n).hoistableScripts,
								a = Lf(e),
								o = r.get(a);
							o ||
								((o = n.querySelector(zf(a))) ||
									((e = d(
										{ src: e, async: !0, type: "module" },
										t
									)),
									(t = Ef.get(a)) && jf(e, t),
									Ve((o = n.createElement("script"))),
									ef(o, "link", e),
									n.head.appendChild(o)),
								(o = {
									type: "script",
									instance: o,
									count: 1,
									state: null,
								}),
								r.set(a, o));
						}
					},
				};
				var Tf = "undefined" === typeof document ? null : document;
				function Pf(e, t, n) {
					var r = Tf;
					if (r && "string" === typeof t && t) {
						var a = mt(t);
						(a = 'link[rel="' + e + '"][href="' + a + '"]'),
							"string" === typeof n &&
								(a += '[crossorigin="' + n + '"]'),
							xf.has(a) ||
								(xf.add(a),
								(e = { rel: e, crossOrigin: n, href: t }),
								null === r.querySelector(a) &&
									(ef(
										(t = r.createElement("link")),
										"link",
										e
									),
									Ve(t),
									r.head.appendChild(t)));
					}
				}
				function Of(e, t, n, r) {
					var a,
						o,
						i,
						s,
						u = (u = W.current) ? Cf(u) : null;
					if (!u) throw Error(l(446));
					switch (e) {
						case "meta":
						case "title":
							return null;
						case "style":
							return "string" === typeof n.precedence &&
								"string" === typeof n.href
								? ((t = Nf(n.href)),
								  (r = (n = We(u).hoistableStyles).get(t)) ||
										((r = {
											type: "style",
											instance: null,
											count: 0,
											state: null,
										}),
										n.set(t, r)),
								  r)
								: {
										type: "void",
										instance: null,
										count: 0,
										state: null,
								  };
						case "link":
							if (
								"stylesheet" === n.rel &&
								"string" === typeof n.href &&
								"string" === typeof n.precedence
							) {
								e = Nf(n.href);
								var c = We(u).hoistableStyles,
									f = c.get(e);
								if (
									(f ||
										((u = u.ownerDocument || u),
										(f = {
											type: "stylesheet",
											instance: null,
											count: 0,
											state: {
												loading: 0,
												preload: null,
											},
										}),
										c.set(e, f),
										(c = u.querySelector(Rf(e))) &&
											!c._p &&
											((f.instance = c),
											(f.state.loading = 5)),
										Ef.has(e) ||
											((n = {
												rel: "preload",
												as: "style",
												href: n.href,
												crossOrigin: n.crossOrigin,
												integrity: n.integrity,
												media: n.media,
												hrefLang: n.hrefLang,
												referrerPolicy:
													n.referrerPolicy,
											}),
											Ef.set(e, n),
											c ||
												((a = u),
												(o = e),
												(i = n),
												(s = f.state),
												a.querySelector(
													'link[rel="preload"][as="style"][' +
														o +
														"]"
												)
													? (s.loading = 1)
													: ((o =
															a.createElement(
																"link"
															)),
													  (s.preload = o),
													  o.addEventListener(
															"load",
															function () {
																return (s.loading |= 1);
															}
													  ),
													  o.addEventListener(
															"error",
															function () {
																return (s.loading |= 2);
															}
													  ),
													  ef(o, "link", i),
													  Ve(o),
													  a.head.appendChild(o))))),
									t && null === r)
								)
									throw Error(l(528, ""));
								return f;
							}
							if (t && null !== r) throw Error(l(529, ""));
							return null;
						case "script":
							return (
								(t = n.async),
								"string" === typeof (n = n.src) &&
								t &&
								"function" !== typeof t &&
								"symbol" !== typeof t
									? ((t = Lf(n)),
									  (r = (n = We(u).hoistableScripts).get(
											t
									  )) ||
											((r = {
												type: "script",
												instance: null,
												count: 0,
												state: null,
											}),
											n.set(t, r)),
									  r)
									: {
											type: "void",
											instance: null,
											count: 0,
											state: null,
									  }
							);
						default:
							throw Error(l(444, e));
					}
				}
				function Nf(e) {
					return 'href="' + mt(e) + '"';
				}
				function Rf(e) {
					return 'link[rel="stylesheet"][' + e + "]";
				}
				function Af(e) {
					return d({}, e, {
						"data-precedence": e.precedence,
						precedence: null,
					});
				}
				function Lf(e) {
					return '[src="' + mt(e) + '"]';
				}
				function zf(e) {
					return "script[async]" + e;
				}
				function Df(e, t, n) {
					if ((t.count++, null === t.instance))
						switch (t.type) {
							case "style":
								var r = e.querySelector(
									'style[data-href~="' + mt(n.href) + '"]'
								);
								if (r) return (t.instance = r), Ve(r), r;
								var a = d({}, n, {
									"data-href": n.href,
									"data-precedence": n.precedence,
									href: null,
									precedence: null,
								});
								return (
									Ve(
										(r = (
											e.ownerDocument || e
										).createElement("style"))
									),
									ef(r, "style", a),
									Ff(r, n.precedence, e),
									(t.instance = r)
								);
							case "stylesheet":
								a = Nf(n.href);
								var o = e.querySelector(Rf(a));
								if (o)
									return (
										(t.state.loading |= 4),
										(t.instance = o),
										Ve(o),
										o
									);
								(r = Af(n)),
									(a = Ef.get(a)) && If(r, a),
									Ve(
										(o = (
											e.ownerDocument || e
										).createElement("link"))
									);
								var i = o;
								return (
									(i._p = new Promise(function (e, t) {
										(i.onload = e), (i.onerror = t);
									})),
									ef(o, "link", r),
									(t.state.loading |= 4),
									Ff(o, n.precedence, e),
									(t.instance = o)
								);
							case "script":
								return (
									(o = Lf(n.src)),
									(a = e.querySelector(zf(o)))
										? ((t.instance = a), Ve(a), a)
										: ((r = n),
										  (a = Ef.get(o)) &&
												jf((r = d({}, n)), a),
										  Ve(
												(a = (e =
													e.ownerDocument ||
													e).createElement("script"))
										  ),
										  ef(a, "link", r),
										  e.head.appendChild(a),
										  (t.instance = a))
								);
							case "void":
								return null;
							default:
								throw Error(l(443, t.type));
						}
					else
						"stylesheet" === t.type &&
							0 === (4 & t.state.loading) &&
							((r = t.instance),
							(t.state.loading |= 4),
							Ff(r, n.precedence, e));
					return t.instance;
				}
				function Ff(e, t, n) {
					for (
						var r = n.querySelectorAll(
								'link[rel="stylesheet"][data-precedence],style[data-precedence]'
							),
							a = r.length ? r[r.length - 1] : null,
							o = a,
							l = 0;
						l < r.length;
						l++
					) {
						var i = r[l];
						if (i.dataset.precedence === t) o = i;
						else if (o !== a) break;
					}
					o
						? o.parentNode.insertBefore(e, o.nextSibling)
						: (t = 9 === n.nodeType ? n.head : n).insertBefore(
								e,
								t.firstChild
						  );
				}
				function If(e, t) {
					null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
						null == e.referrerPolicy &&
							(e.referrerPolicy = t.referrerPolicy),
						null == e.title && (e.title = t.title);
				}
				function jf(e, t) {
					null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
						null == e.referrerPolicy &&
							(e.referrerPolicy = t.referrerPolicy),
						null == e.integrity && (e.integrity = t.integrity);
				}
				var Uf = null;
				function Mf(e, t, n) {
					if (null === Uf) {
						var r = new Map(),
							a = (Uf = new Map());
						a.set(n, r);
					} else
						(r = (a = Uf).get(n)) || ((r = new Map()), a.set(n, r));
					if (r.has(e)) return r;
					for (
						r.set(e, null), n = n.getElementsByTagName(e), a = 0;
						a < n.length;
						a++
					) {
						var o = n[a];
						if (
							!(
								o[Ue] ||
								o[Ae] ||
								("link" === e &&
									"stylesheet" === o.getAttribute("rel"))
							) &&
							"http://www.w3.org/2000/svg" !== o.namespaceURI
						) {
							var l = o.getAttribute(t) || "";
							l = e + l;
							var i = r.get(l);
							i ? i.push(o) : r.set(l, [o]);
						}
					}
					return r;
				}
				function Bf(e, t, n) {
					(e = e.ownerDocument || e).head.insertBefore(
						n,
						"title" === t ? e.querySelector("head > title") : null
					);
				}
				function Hf(e) {
					return (
						"stylesheet" !== e.type || 0 !== (3 & e.state.loading)
					);
				}
				var $f = null;
				function Wf() {}
				function Vf() {
					if ((this.count--, 0 === this.count))
						if (this.stylesheets) Kf(this, this.stylesheets);
						else if (this.unsuspend) {
							var e = this.unsuspend;
							(this.unsuspend = null), e();
						}
				}
				var qf = null;
				function Kf(e, t) {
					(e.stylesheets = null),
						null !== e.unsuspend &&
							(e.count++,
							(qf = new Map()),
							t.forEach(Qf, e),
							(qf = null),
							Vf.call(e));
				}
				function Qf(e, t) {
					if (!(4 & t.state.loading)) {
						var n = qf.get(e);
						if (n) var r = n.get(null);
						else {
							(n = new Map()), qf.set(e, n);
							for (
								var a = e.querySelectorAll(
										"link[data-precedence],style[data-precedence]"
									),
									o = 0;
								o < a.length;
								o++
							) {
								var l = a[o];
								("LINK" !== l.nodeName &&
									"not all" === l.getAttribute("media")) ||
									(n.set(l.dataset.precedence, l), (r = l));
							}
							r && n.set(null, r);
						}
						(l = (a = t.instance).getAttribute("data-precedence")),
							(o = n.get(l) || r) === r && n.set(null, a),
							n.set(l, a),
							this.count++,
							(r = Vf.bind(this)),
							a.addEventListener("load", r),
							a.addEventListener("error", r),
							o
								? o.parentNode.insertBefore(a, o.nextSibling)
								: (e =
										9 === e.nodeType
											? e.head
											: e).insertBefore(a, e.firstChild),
							(t.state.loading |= 4);
					}
				}
				var Gf = {
					$$typeof: S,
					Provider: null,
					Consumer: null,
					_currentValue: F,
					_currentValue2: F,
					_threadCount: 0,
				};
				function Yf(e, t, n, r, a, o, l, i) {
					(this.tag = 1),
						(this.containerInfo = e),
						(this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode =
							this.next =
							this.pendingContext =
							this.context =
							this.cancelPendingCommit =
								null),
						(this.callbackPriority = 0),
						(this.expirationTimes = xe(-1)),
						(this.entangledLanes =
							this.shellSuspendCounter =
							this.errorRecoveryDisabledLanes =
							this.expiredLanes =
							this.warmLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = xe(0)),
						(this.hiddenUpdates = xe(null)),
						(this.identifierPrefix = r),
						(this.onUncaughtError = a),
						(this.onCaughtError = o),
						(this.onRecoverableError = l),
						(this.pooledCache = null),
						(this.pooledCacheLanes = 0),
						(this.formState = i),
						(this.incompleteTransitions = new Map());
				}
				function Xf(e, t, n, r, a, o, l, i, s, u, c, f) {
					return (
						(e = new Yf(e, t, n, l, i, s, u, f)),
						(t = 1),
						!0 === o && (t |= 24),
						(o = Fr(3, null, null, t)),
						(e.current = o),
						(o.stateNode = e),
						(t = La()).refCount++,
						(e.pooledCache = t),
						t.refCount++,
						(o.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: t,
						}),
						no(o),
						e
					);
				}
				function Jf(e) {
					return e ? (e = zr) : zr;
				}
				function Zf(e, t, n, r, a, o) {
					(a = Jf(a)),
						null === r.context
							? (r.context = a)
							: (r.pendingContext = a),
						((r = ao(t)).payload = { element: n }),
						null !== (o = void 0 === o ? null : o) &&
							(r.callback = o),
						null !== (n = oo(e, r, t)) &&
							(Fu(n, 0, t), lo(n, e, t));
				}
				function ed(e, t) {
					if (
						null !== (e = e.memoizedState) &&
						null !== e.dehydrated
					) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function td(e, t) {
					ed(e, t), (e = e.alternate) && ed(e, t);
				}
				function nd(e) {
					if (13 === e.tag) {
						var t = Rr(e, 67108864);
						null !== t && Fu(t, 0, 67108864), td(e, 67108864);
					}
				}
				var rd = !0;
				function ad(e, t, n, r) {
					var a = z.T;
					z.T = null;
					var o = D.p;
					try {
						(D.p = 2), ld(e, t, n, r);
					} finally {
						(D.p = o), (z.T = a);
					}
				}
				function od(e, t, n, r) {
					var a = z.T;
					z.T = null;
					var o = D.p;
					try {
						(D.p = 8), ld(e, t, n, r);
					} finally {
						(D.p = o), (z.T = a);
					}
				}
				function ld(e, t, n, r) {
					if (rd) {
						var a = id(r);
						if (null === a) Hc(e, t, r, sd, n), bd(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return (dd = wd(dd, e, t, n, r, a)), !0;
									case "dragenter":
										return (pd = wd(pd, e, t, n, r, a)), !0;
									case "mouseover":
										return (hd = wd(hd, e, t, n, r, a)), !0;
									case "pointerover":
										var o = a.pointerId;
										return (
											md.set(
												o,
												wd(
													md.get(o) || null,
													e,
													t,
													n,
													r,
													a
												)
											),
											!0
										);
									case "gotpointercapture":
										return (
											(o = a.pointerId),
											gd.set(
												o,
												wd(
													gd.get(o) || null,
													e,
													t,
													n,
													r,
													a
												)
											),
											!0
										);
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((bd(e, r), 4 & t && -1 < vd.indexOf(e))) {
							for (; null !== a; ) {
								var o = He(a);
								if (null !== o)
									switch (o.tag) {
										case 3:
											if (
												(o = o.stateNode).current
													.memoizedState.isDehydrated
											) {
												var l = ve(o.pendingLanes);
												if (0 !== l) {
													var i = o;
													for (
														i.pendingLanes |= 2,
															i.entangledLanes |= 2;
														l;

													) {
														var s =
															1 << (31 - pe(l));
														(i.entanglements[1] |=
															s),
															(l &= ~s);
													}
													kc(o),
														0 === (6 & nu) &&
															((ku = te() + 500),
															Ec(0, !1));
												}
											}
											break;
										case 13:
											null !== (i = Rr(o, 2)) &&
												Fu(i, 0, 2),
												Bu(),
												td(o, 2);
									}
								if (
									(null === (o = id(r)) && Hc(e, t, r, sd, n),
									o === a)
								)
									break;
								a = o;
							}
							null !== a && r.stopPropagation();
						} else Hc(e, t, r, null, n);
					}
				}
				function id(e) {
					return ud((e = Rt(e)));
				}
				var sd = null;
				function ud(e) {
					if (((sd = null), null !== (e = Be(e)))) {
						var t = s(e);
						if (null === t) e = null;
						else {
							var n = t.tag;
							if (13 === n) {
								if (null !== (e = u(t))) return e;
								e = null;
							} else if (3 === n) {
								if (
									t.stateNode.current.memoizedState
										.isDehydrated
								)
									return 3 === t.tag
										? t.stateNode.containerInfo
										: null;
								e = null;
							} else t !== e && (e = null);
						}
					}
					return (sd = e), null;
				}
				function cd(e) {
					switch (e) {
						case "beforetoggle":
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "toggle":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 2;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 8;
						case "message":
							switch (ne()) {
								case re:
									return 2;
								case ae:
									return 8;
								case oe:
								case le:
									return 32;
								case ie:
									return 268435456;
								default:
									return 32;
							}
						default:
							return 32;
					}
				}
				var fd = !1,
					dd = null,
					pd = null,
					hd = null,
					md = new Map(),
					gd = new Map(),
					yd = [],
					vd =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
							" "
						);
				function bd(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							dd = null;
							break;
						case "dragenter":
						case "dragleave":
							pd = null;
							break;
						case "mouseover":
						case "mouseout":
							hd = null;
							break;
						case "pointerover":
						case "pointerout":
							md.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							gd.delete(t.pointerId);
					}
				}
				function wd(e, t, n, r, a, o) {
					return null === e || e.nativeEvent !== o
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: o,
								targetContainers: [a],
						  }),
						  null !== t && null !== (t = He(t)) && nd(t),
						  e)
						: ((e.eventSystemFlags |= r),
						  (t = e.targetContainers),
						  null !== a && -1 === t.indexOf(a) && t.push(a),
						  e);
				}
				function Sd(e) {
					var t = Be(e.target);
					if (null !== t) {
						var n = s(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = u(n)))
									return (
										(e.blockedOn = t),
										void (function (e, t) {
											var n = D.p;
											try {
												return (D.p = e), t();
											} finally {
												D.p = n;
											}
										})(e.priority, function () {
											if (13 === n.tag) {
												var e = zu();
												e = Pe(e);
												var t = Rr(n, e);
												null !== t && Fu(t, 0, e),
													td(n, e);
											}
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag
										? n.stateNode.containerInfo
										: null);
					}
					e.blockedOn = null;
				}
				function kd(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = id(e.nativeEvent);
						if (null !== n)
							return (
								null !== (t = He(n)) && nd(t),
								(e.blockedOn = n),
								!1
							);
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(Nt = r),
							n.target.dispatchEvent(r),
							(Nt = null),
							t.shift();
					}
					return !0;
				}
				function Ed(e, t, n) {
					kd(e) && n.delete(t);
				}
				function xd() {
					(fd = !1),
						null !== dd && kd(dd) && (dd = null),
						null !== pd && kd(pd) && (pd = null),
						null !== hd && kd(hd) && (hd = null),
						md.forEach(Ed),
						gd.forEach(Ed);
				}
				function Cd(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						fd ||
							((fd = !0),
							r.unstable_scheduleCallback(
								r.unstable_NormalPriority,
								xd
							)));
				}
				var _d = null;
				function Td(e) {
					_d !== e &&
						((_d = e),
						r.unstable_scheduleCallback(
							r.unstable_NormalPriority,
							function () {
								_d === e && (_d = null);
								for (var t = 0; t < e.length; t += 3) {
									var n = e[t],
										r = e[t + 1],
										a = e[t + 2];
									if ("function" !== typeof r) {
										if (null === ud(r || n)) continue;
										break;
									}
									var o = He(n);
									null !== o &&
										(e.splice(t, 3),
										(t -= 3),
										Rl(
											o,
											{
												pending: !0,
												data: a,
												method: n.method,
												action: r,
											},
											r,
											a
										));
								}
							}
						));
				}
				function Pd(e) {
					function t(t) {
						return Cd(t, e);
					}
					null !== dd && Cd(dd, e),
						null !== pd && Cd(pd, e),
						null !== hd && Cd(hd, e),
						md.forEach(t),
						gd.forEach(t);
					for (var n = 0; n < yd.length; n++) {
						var r = yd[n];
						r.blockedOn === e && (r.blockedOn = null);
					}
					for (; 0 < yd.length && null === (n = yd[0]).blockedOn; )
						Sd(n), null === n.blockedOn && yd.shift();
					if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
						for (r = 0; r < n.length; r += 3) {
							var a = n[r],
								o = n[r + 1],
								l = a[Le] || null;
							if ("function" === typeof o) l || Td(n);
							else if (l) {
								var i = null;
								if (o && o.hasAttribute("formAction")) {
									if (((a = o), (l = o[Le] || null)))
										i = l.formAction;
									else if (null !== ud(a)) continue;
								} else i = l.action;
								"function" === typeof i
									? (n[r + 1] = i)
									: (n.splice(r, 3), (r -= 3)),
									Td(n);
							}
						}
				}
				function Od(e) {
					this._internalRoot = e;
				}
				function Nd(e) {
					this._internalRoot = e;
				}
				(Nd.prototype.render = Od.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(l(409));
						Zf(t.current, zu(), e, t, null, null);
					}),
					(Nd.prototype.unmount = Od.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								Zf(e.current, 2, null, e, null, null),
									Bu(),
									(t[ze] = null);
							}
						}),
					(Nd.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Ne();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < yd.length && 0 !== t && t < yd[n].priority;
								n++
							);
							yd.splice(n, 0, e), 0 === n && Sd(e);
						}
					});
				var Rd = a.version;
				if ("19.1.0" !== Rd) throw Error(l(527, Rd, "19.1.0"));
				D.findDOMNode = function (e) {
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" === typeof e.render) throw Error(l(188));
						throw (
							((e = Object.keys(e).join(",")), Error(l(268, e)))
						);
					}
					return (
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = s(e))) throw Error(l(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var o = a.alternate;
								if (null === o) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === o.child) {
									for (o = a.child; o; ) {
										if (o === n) return c(a), e;
										if (o === r) return c(a), t;
										o = o.sibling;
									}
									throw Error(l(188));
								}
								if (n.return !== r.return) (n = a), (r = o);
								else {
									for (var i = !1, u = a.child; u; ) {
										if (u === n) {
											(i = !0), (n = a), (r = o);
											break;
										}
										if (u === r) {
											(i = !0), (r = a), (n = o);
											break;
										}
										u = u.sibling;
									}
									if (!i) {
										for (u = o.child; u; ) {
											if (u === n) {
												(i = !0), (n = o), (r = a);
												break;
											}
											if (u === r) {
												(i = !0), (r = o), (n = a);
												break;
											}
											u = u.sibling;
										}
										if (!i) throw Error(l(189));
									}
								}
								if (n.alternate !== r) throw Error(l(190));
							}
							if (3 !== n.tag) throw Error(l(188));
							return n.stateNode.current === n ? e : t;
						})(t)),
						(e =
							null === (e = null !== e ? f(e) : null)
								? null
								: e.stateNode)
					);
				};
				var Ad = {
					bundleType: 0,
					version: "19.1.0",
					rendererPackageName: "react-dom",
					currentDispatcherRef: z,
					reconcilerVersion: "19.1.0",
				};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var Ld = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!Ld.isDisabled && Ld.supportsFiber)
						try {
							(ce = Ld.inject(Ad)), (fe = Ld);
						} catch (Dd) {}
				}
				(t.createRoot = function (e, t) {
					if (!i(e)) throw Error(l(299));
					var n = !1,
						r = "",
						a = vi,
						o = bi,
						s = wi;
					return (
						null !== t &&
							void 0 !== t &&
							(!0 === t.unstable_strictMode && (n = !0),
							void 0 !== t.identifierPrefix &&
								(r = t.identifierPrefix),
							void 0 !== t.onUncaughtError &&
								(a = t.onUncaughtError),
							void 0 !== t.onCaughtError && (o = t.onCaughtError),
							void 0 !== t.onRecoverableError &&
								(s = t.onRecoverableError),
							void 0 !== t.unstable_transitionCallbacks &&
								t.unstable_transitionCallbacks),
						(t = Xf(e, 1, !1, null, 0, n, r, a, o, s, 0, null)),
						(e[ze] = t.current),
						Mc(e),
						new Od(t)
					);
				}),
					(t.hydrateRoot = function (e, t, n) {
						if (!i(e)) throw Error(l(299));
						var r = !1,
							a = "",
							o = vi,
							s = bi,
							u = wi,
							c = null;
						return (
							null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (r = !0),
								void 0 !== n.identifierPrefix &&
									(a = n.identifierPrefix),
								void 0 !== n.onUncaughtError &&
									(o = n.onUncaughtError),
								void 0 !== n.onCaughtError &&
									(s = n.onCaughtError),
								void 0 !== n.onRecoverableError &&
									(u = n.onRecoverableError),
								void 0 !== n.unstable_transitionCallbacks &&
									n.unstable_transitionCallbacks,
								void 0 !== n.formState && (c = n.formState)),
							((t = Xf(
								e,
								1,
								!0,
								t,
								0,
								r,
								a,
								o,
								s,
								u,
								0,
								c
							)).context = Jf(null)),
							(n = t.current),
							((a = ao((r = Pe((r = zu()))))).callback = null),
							oo(n, a, r),
							(n = r),
							(t.current.lanes = n),
							Ce(t, n),
							kc(t),
							(e[ze] = t.current),
							Mc(e),
							new Nd(t)
						);
					}),
					(t.version = "19.1.0");
			},
			119: (e, t, n) => {
				"use strict";
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" ===
							typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(863));
			},
			340: (e, t, n) => {
				"use strict";
				e.exports = n(487);
			},
			352: (e, t, n) => {
				"use strict";
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" ===
							typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(85));
			},
			403: (e) => {
				e.exports = function (e, t, n, r) {
					var a = n ? n.call(r, e, t) : void 0;
					if (void 0 !== a) return !!a;
					if (e === t) return !0;
					if (
						"object" !== typeof e ||
						!e ||
						"object" !== typeof t ||
						!t
					)
						return !1;
					var o = Object.keys(e),
						l = Object.keys(t);
					if (o.length !== l.length) return !1;
					for (
						var i = Object.prototype.hasOwnProperty.bind(t), s = 0;
						s < o.length;
						s++
					) {
						var u = o[s];
						if (!i(u)) return !1;
						var c = e[u],
							f = t[u];
						if (
							!1 === (a = n ? n.call(r, c, f, u) : void 0) ||
							(void 0 === a && c !== f)
						)
							return !1;
					}
					return !0;
				};
			},
			414: (e, t, n) => {
				"use strict";
				e.exports = n(916);
			},
			487: (e, t) => {
				"use strict";
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break e;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
							var i = 2 * (r + 1) - 1,
								s = e[i],
								u = i + 1,
								c = e[u];
							if (0 > o(s, n))
								u < a && 0 > o(c, s)
									? ((e[r] = c), (e[u] = n), (r = u))
									: ((e[r] = s), (e[i] = n), (r = i));
							else {
								if (!(u < a && 0 > o(c, n))) break e;
								(e[r] = c), (e[u] = n), (r = u);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					((t.unstable_now = void 0),
					"object" === typeof performance &&
						"function" === typeof performance.now)
				) {
					var l = performance;
					t.unstable_now = function () {
						return l.now();
					};
				} else {
					var i = Date,
						s = i.now();
					t.unstable_now = function () {
						return i.now() - s;
					};
				}
				var u = [],
					c = [],
					f = 1,
					d = null,
					p = 3,
					h = !1,
					m = !1,
					g = !1,
					y = !1,
					v = "function" === typeof setTimeout ? setTimeout : null,
					b =
						"function" === typeof clearTimeout
							? clearTimeout
							: null,
					w =
						"undefined" !== typeof setImmediate
							? setImmediate
							: null;
				function S(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), (t.sortIndex = t.expirationTime), n(u, t);
						}
						t = r(c);
					}
				}
				function k(e) {
					if (((g = !1), S(e), !m))
						if (null !== r(u)) (m = !0), x || ((x = !0), E());
						else {
							var t = r(c);
							null !== t && A(k, t.startTime - e);
						}
				}
				var E,
					x = !1,
					C = -1,
					_ = 5,
					T = -1;
				function P() {
					return !!y || !(t.unstable_now() - T < _);
				}
				function O() {
					if (((y = !1), x)) {
						var e = t.unstable_now();
						T = e;
						var n = !0;
						try {
							e: {
								(m = !1),
									g && ((g = !1), b(C), (C = -1)),
									(h = !0);
								var o = p;
								try {
									t: {
										for (
											S(e), d = r(u);
											null !== d &&
											!(d.expirationTime > e && P());

										) {
											var l = d.callback;
											if ("function" === typeof l) {
												(d.callback = null),
													(p = d.priorityLevel);
												var i = l(
													d.expirationTime <= e
												);
												if (
													((e = t.unstable_now()),
													"function" === typeof i)
												) {
													(d.callback = i),
														S(e),
														(n = !0);
													break t;
												}
												d === r(u) && a(u), S(e);
											} else a(u);
											d = r(u);
										}
										if (null !== d) n = !0;
										else {
											var s = r(c);
											null !== s && A(k, s.startTime - e),
												(n = !1);
										}
									}
									break e;
								} finally {
									(d = null), (p = o), (h = !1);
								}
								n = void 0;
							}
						} finally {
							n ? E() : (x = !1);
						}
					}
				}
				if ("function" === typeof w)
					E = function () {
						w(O);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var N = new MessageChannel(),
						R = N.port2;
					(N.port1.onmessage = O),
						(E = function () {
							R.postMessage(null);
						});
				} else
					E = function () {
						v(O, 0);
					};
				function A(e, n) {
					C = v(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (_ = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_requestPaint = function () {
						y = !0;
					}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, a, o) {
						var l = t.unstable_now();
						switch (
							("object" === typeof o && null !== o
								? (o =
										"number" === typeof (o = o.delay) &&
										0 < o
											? l + o
											: l)
								: (o = l),
							e)
						) {
							case 1:
								var i = -1;
								break;
							case 2:
								i = 250;
								break;
							case 5:
								i = 1073741823;
								break;
							case 4:
								i = 1e4;
								break;
							default:
								i = 5e3;
						}
						return (
							(e = {
								id: f++,
								callback: a,
								priorityLevel: e,
								startTime: o,
								expirationTime: (i = o + i),
								sortIndex: -1,
							}),
							o > l
								? ((e.sortIndex = o),
								  n(c, e),
								  null === r(u) &&
										e === r(c) &&
										(g ? (b(C), (C = -1)) : (g = !0),
										A(k, o - l)))
								: ((e.sortIndex = i),
								  n(u, e),
								  m || h || ((m = !0), x || ((x = !0), E()))),
							e
						);
					}),
					(t.unstable_shouldYield = P),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			863: (e, t, n) => {
				"use strict";
				var r = n(950);
				function a(e) {
					var t = "https://react.dev/errors/" + e;
					if (1 < arguments.length) {
						t += "?args[]=" + encodeURIComponent(arguments[1]);
						for (var n = 2; n < arguments.length; n++)
							t += "&args[]=" + encodeURIComponent(arguments[n]);
					}
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				function o() {}
				var l = {
						d: {
							f: o,
							r: function () {
								throw Error(a(522));
							},
							D: o,
							C: o,
							L: o,
							m: o,
							X: o,
							S: o,
							M: o,
						},
						p: 0,
						findDOMNode: null,
					},
					i = Symbol.for("react.portal");
				var s =
					r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
				function u(e, t) {
					return "font" === e
						? ""
						: "string" === typeof t
						? "use-credentials" === t
							? t
							: ""
						: void 0;
				}
				(t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
					l),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (
							!t ||
							(1 !== t.nodeType &&
								9 !== t.nodeType &&
								11 !== t.nodeType)
						)
							throw Error(a(299));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: i,
								key: null == r ? null : "" + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.flushSync = function (e) {
						var t = s.T,
							n = l.p;
						try {
							if (((s.T = null), (l.p = 2), e)) return e();
						} finally {
							(s.T = t), (l.p = n), l.d.f();
						}
					}),
					(t.preconnect = function (e, t) {
						"string" === typeof e &&
							(t
								? (t =
										"string" === typeof (t = t.crossOrigin)
											? "use-credentials" === t
												? t
												: ""
											: void 0)
								: (t = null),
							l.d.C(e, t));
					}),
					(t.prefetchDNS = function (e) {
						"string" === typeof e && l.d.D(e);
					}),
					(t.preinit = function (e, t) {
						if (
							"string" === typeof e &&
							t &&
							"string" === typeof t.as
						) {
							var n = t.as,
								r = u(n, t.crossOrigin),
								a =
									"string" === typeof t.integrity
										? t.integrity
										: void 0,
								o =
									"string" === typeof t.fetchPriority
										? t.fetchPriority
										: void 0;
							"style" === n
								? l.d.S(
										e,
										"string" === typeof t.precedence
											? t.precedence
											: void 0,
										{
											crossOrigin: r,
											integrity: a,
											fetchPriority: o,
										}
								  )
								: "script" === n &&
								  l.d.X(e, {
										crossOrigin: r,
										integrity: a,
										fetchPriority: o,
										nonce:
											"string" === typeof t.nonce
												? t.nonce
												: void 0,
								  });
						}
					}),
					(t.preinitModule = function (e, t) {
						if ("string" === typeof e)
							if ("object" === typeof t && null !== t) {
								if (null == t.as || "script" === t.as) {
									var n = u(t.as, t.crossOrigin);
									l.d.M(e, {
										crossOrigin: n,
										integrity:
											"string" === typeof t.integrity
												? t.integrity
												: void 0,
										nonce:
											"string" === typeof t.nonce
												? t.nonce
												: void 0,
									});
								}
							} else null == t && l.d.M(e);
					}),
					(t.preload = function (e, t) {
						if (
							"string" === typeof e &&
							"object" === typeof t &&
							null !== t &&
							"string" === typeof t.as
						) {
							var n = t.as,
								r = u(n, t.crossOrigin);
							l.d.L(e, n, {
								crossOrigin: r,
								integrity:
									"string" === typeof t.integrity
										? t.integrity
										: void 0,
								nonce:
									"string" === typeof t.nonce
										? t.nonce
										: void 0,
								type:
									"string" === typeof t.type
										? t.type
										: void 0,
								fetchPriority:
									"string" === typeof t.fetchPriority
										? t.fetchPriority
										: void 0,
								referrerPolicy:
									"string" === typeof t.referrerPolicy
										? t.referrerPolicy
										: void 0,
								imageSrcSet:
									"string" === typeof t.imageSrcSet
										? t.imageSrcSet
										: void 0,
								imageSizes:
									"string" === typeof t.imageSizes
										? t.imageSizes
										: void 0,
								media:
									"string" === typeof t.media
										? t.media
										: void 0,
							});
						}
					}),
					(t.preloadModule = function (e, t) {
						if ("string" === typeof e)
							if (t) {
								var n = u(t.as, t.crossOrigin);
								l.d.m(e, {
									as:
										"string" === typeof t.as &&
										"script" !== t.as
											? t.as
											: void 0,
									crossOrigin: n,
									integrity:
										"string" === typeof t.integrity
											? t.integrity
											: void 0,
								});
							} else l.d.m(e);
					}),
					(t.requestFormReset = function (e) {
						l.d.r(e);
					}),
					(t.unstable_batchedUpdates = function (e, t) {
						return e(t);
					}),
					(t.useFormState = function (e, t, n) {
						return s.H.useFormState(e, t, n);
					}),
					(t.useFormStatus = function () {
						return s.H.useHostTransitionStatus();
					}),
					(t.version = "19.1.0");
			},
			916: (e, t) => {
				"use strict";
				var n = Symbol.for("react.transitional.element");
				function r(e, t, r) {
					var a = null;
					if (
						(void 0 !== r && (a = "" + r),
						void 0 !== t.key && (a = "" + t.key),
						"key" in t)
					)
						for (var o in ((r = {}), t))
							"key" !== o && (r[o] = t[o]);
					else r = t;
					return (
						(t = r.ref),
						{
							$$typeof: n,
							type: e,
							key: a,
							ref: void 0 !== t ? t : null,
							props: r,
						}
					);
				}
				Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r);
			},
			950: (e, t, n) => {
				"use strict";
				e.exports = n(983);
			},
			983: (e, t) => {
				"use strict";
				var n = Symbol.for("react.transitional.element"),
					r = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					l = Symbol.for("react.profiler"),
					i = Symbol.for("react.consumer"),
					s = Symbol.for("react.context"),
					u = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					f = Symbol.for("react.memo"),
					d = Symbol.for("react.lazy"),
					p = Symbol.iterator;
				var h = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					g = {};
				function y(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || h);
				}
				function v() {}
				function b(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || h);
				}
				(y.prototype.isReactComponent = {}),
					(y.prototype.setState = function (e, t) {
						if (
							"object" !== typeof e &&
							"function" !== typeof e &&
							null != e
						)
							throw Error(
								"takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(y.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(v.prototype = y.prototype);
				var w = (b.prototype = new v());
				(w.constructor = b),
					m(w, y.prototype),
					(w.isPureReactComponent = !0);
				var S = Array.isArray,
					k = { H: null, A: null, T: null, S: null, V: null },
					E = Object.prototype.hasOwnProperty;
				function x(e, t, r, a, o, l) {
					return (
						(r = l.ref),
						{
							$$typeof: n,
							type: e,
							key: t,
							ref: void 0 !== r ? r : null,
							props: l,
						}
					);
				}
				function C(e) {
					return (
						"object" === typeof e && null !== e && e.$$typeof === n
					);
				}
				var _ = /\/+/g;
				function T(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function P() {}
				function O(e, t, a, o, l) {
					var i = typeof e;
					("undefined" !== i && "boolean" !== i) || (e = null);
					var s,
						u,
						c = !1;
					if (null === e) c = !0;
					else
						switch (i) {
							case "bigint":
							case "string":
							case "number":
								c = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										c = !0;
										break;
									case d:
										return O(
											(c = e._init)(e._payload),
											t,
											a,
											o,
											l
										);
								}
						}
					if (c)
						return (
							(l = l(e)),
							(c = "" === o ? "." + T(e, 0) : o),
							S(l)
								? ((a = ""),
								  null != c && (a = c.replace(_, "$&/") + "/"),
								  O(l, t, a, "", function (e) {
										return e;
								  }))
								: null != l &&
								  (C(l) &&
										((s = l),
										(u =
											a +
											(null == l.key ||
											(e && e.key === l.key)
												? ""
												: ("" + l.key).replace(
														_,
														"$&/"
												  ) + "/") +
											c),
										(l = x(
											s.type,
											u,
											void 0,
											0,
											0,
											s.props
										))),
								  t.push(l)),
							1
						);
					c = 0;
					var f,
						h = "" === o ? "." : o + ":";
					if (S(e))
						for (var m = 0; m < e.length; m++)
							c += O((o = e[m]), t, a, (i = h + T(o, m)), l);
					else if (
						"function" ===
						typeof (m =
							null === (f = e) || "object" !== typeof f
								? null
								: "function" ===
								  typeof (f = (p && f[p]) || f["@@iterator"])
								? f
								: null)
					)
						for (e = m.call(e), m = 0; !(o = e.next()).done; )
							c += O((o = o.value), t, a, (i = h + T(o, m++)), l);
					else if ("object" === i) {
						if ("function" === typeof e.then)
							return O(
								(function (e) {
									switch (e.status) {
										case "fulfilled":
											return e.value;
										case "rejected":
											throw e.reason;
										default:
											switch (
												("string" === typeof e.status
													? e.then(P, P)
													: ((e.status = "pending"),
													  e.then(
															function (t) {
																"pending" ===
																	e.status &&
																	((e.status =
																		"fulfilled"),
																	(e.value =
																		t));
															},
															function (t) {
																"pending" ===
																	e.status &&
																	((e.status =
																		"rejected"),
																	(e.reason =
																		t));
															}
													  )),
												e.status)
											) {
												case "fulfilled":
													return e.value;
												case "rejected":
													throw e.reason;
											}
									}
									throw e;
								})(e),
								t,
								a,
								o,
								l
							);
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" +
										  Object.keys(e).join(", ") +
										  "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					}
					return c;
				}
				function N(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						O(e, r, "", "", function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function R(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status &&
								((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var A =
					"function" === typeof reportError
						? reportError
						: function (e) {
								if (
									"object" === typeof window &&
									"function" === typeof window.ErrorEvent
								) {
									var t = new window.ErrorEvent("error", {
										bubbles: !0,
										cancelable: !0,
										message:
											"object" === typeof e &&
											null !== e &&
											"string" === typeof e.message
												? String(e.message)
												: String(e),
										error: e,
									});
									if (!window.dispatchEvent(t)) return;
								} else if (
									"object" === typeof process &&
									"function" === typeof process.emit
								)
									return void process.emit(
										"uncaughtException",
										e
									);
								console.error(e);
						  };
				function L() {}
				(t.Children = {
					map: N,
					forEach: function (e, t, n) {
						N(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							N(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							N(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!C(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(t.Component = y),
					(t.Fragment = a),
					(t.Profiler = l),
					(t.PureComponent = b),
					(t.StrictMode = o),
					(t.Suspense = c),
					(t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
						k),
					(t.__COMPILER_RUNTIME = {
						__proto__: null,
						c: function (e) {
							return k.H.useMemoCache(e);
						},
					}),
					(t.cache = function (e) {
						return function () {
							return e.apply(null, arguments);
						};
					}),
					(t.cloneElement = function (e, t, n) {
						if (null === e || void 0 === e)
							throw Error(
								"The argument must be a React element, but you passed " +
									e +
									"."
							);
						var r = m({}, e.props),
							a = e.key;
						if (null != t)
							for (o in (void 0 !== t.ref && void 0,
							void 0 !== t.key && (a = "" + t.key),
							t))
								!E.call(t, o) ||
									"key" === o ||
									"__self" === o ||
									"__source" === o ||
									("ref" === o && void 0 === t.ref) ||
									(r[o] = t[o]);
						var o = arguments.length - 2;
						if (1 === o) r.children = n;
						else if (1 < o) {
							for (var l = Array(o), i = 0; i < o; i++)
								l[i] = arguments[i + 2];
							r.children = l;
						}
						return x(e.type, a, void 0, 0, 0, r);
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: s,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
							}).Provider = e),
							(e.Consumer = { $$typeof: i, _context: e }),
							e
						);
					}),
					(t.createElement = function (e, t, n) {
						var r,
							a = {},
							o = null;
						if (null != t)
							for (r in (void 0 !== t.key && (o = "" + t.key), t))
								E.call(t, r) &&
									"key" !== r &&
									"__self" !== r &&
									"__source" !== r &&
									(a[r] = t[r]);
						var l = arguments.length - 2;
						if (1 === l) a.children = n;
						else if (1 < l) {
							for (var i = Array(l), s = 0; s < l; s++)
								i[s] = arguments[s + 2];
							a.children = i;
						}
						if (e && e.defaultProps)
							for (r in (l = e.defaultProps))
								void 0 === a[r] && (a[r] = l[r]);
						return x(e, o, void 0, 0, 0, a);
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: u, render: e };
					}),
					(t.isValidElement = C),
					(t.lazy = function (e) {
						return {
							$$typeof: d,
							_payload: { _status: -1, _result: e },
							_init: R,
						};
					}),
					(t.memo = function (e, t) {
						return {
							$$typeof: f,
							type: e,
							compare: void 0 === t ? null : t,
						};
					}),
					(t.startTransition = function (e) {
						var t = k.T,
							n = {};
						k.T = n;
						try {
							var r = e(),
								a = k.S;
							null !== a && a(n, r),
								"object" === typeof r &&
									null !== r &&
									"function" === typeof r.then &&
									r.then(L, A);
						} catch (o) {
							A(o);
						} finally {
							k.T = t;
						}
					}),
					(t.unstable_useCacheRefresh = function () {
						return k.H.useCacheRefresh();
					}),
					(t.use = function (e) {
						return k.H.use(e);
					}),
					(t.useActionState = function (e, t, n) {
						return k.H.useActionState(e, t, n);
					}),
					(t.useCallback = function (e, t) {
						return k.H.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return k.H.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e, t) {
						return k.H.useDeferredValue(e, t);
					}),
					(t.useEffect = function (e, t, n) {
						var r = k.H;
						if ("function" === typeof n)
							throw Error(
								"useEffect CRUD overload is not enabled in this build of React."
							);
						return r.useEffect(e, t);
					}),
					(t.useId = function () {
						return k.H.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return k.H.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return k.H.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return k.H.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return k.H.useMemo(e, t);
					}),
					(t.useOptimistic = function (e, t) {
						return k.H.useOptimistic(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return k.H.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return k.H.useRef(e);
					}),
					(t.useState = function (e) {
						return k.H.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return k.H.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return k.H.useTransition();
					}),
					(t.version = "19.1.0");
			},
		},
		t = {};
	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var o = (t[r] = { exports: {} });
		return e[r](o, o.exports, n), o.exports;
	}
	(n.m = e),
		(n.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return n.d(t, { a: t }), t;
		}),
		(n.d = (e, t) => {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.f = {}),
		(n.e = (e) =>
			Promise.all(
				Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), [])
			)),
		(n.u = (e) => "static/js/" + e + ".b7e00c89.chunk.js"),
		(n.miniCssF = (e) => {}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			var e = {},
				t = "hyperswap-landing:";
			n.l = (r, a, o, l) => {
				if (e[r]) e[r].push(a);
				else {
					var i, s;
					if (void 0 !== o)
						for (
							var u = document.getElementsByTagName("script"),
								c = 0;
							c < u.length;
							c++
						) {
							var f = u[c];
							if (
								f.getAttribute("src") == r ||
								f.getAttribute("data-webpack") == t + o
							) {
								i = f;
								break;
							}
						}
					i ||
						((s = !0),
						((i = document.createElement("script")).charset =
							"utf-8"),
						(i.timeout = 120),
						n.nc && i.setAttribute("nonce", n.nc),
						i.setAttribute("data-webpack", t + o),
						(i.src = r)),
						(e[r] = [a]);
					var d = (t, n) => {
							(i.onerror = i.onload = null), clearTimeout(p);
							var a = e[r];
							if (
								(delete e[r],
								i.parentNode && i.parentNode.removeChild(i),
								a && a.forEach((e) => e(n)),
								t)
							)
								return t(n);
						},
						p = setTimeout(
							d.bind(null, void 0, {
								type: "timeout",
								target: i,
							}),
							12e4
						);
					(i.onerror = d.bind(null, i.onerror)),
						(i.onload = d.bind(null, i.onload)),
						s && document.head.appendChild(i);
				}
			};
		})(),
		(n.r = (e) => {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.p = "/"),
		(() => {
			var e = { 792: 0 };
			n.f.j = (t, r) => {
				var a = n.o(e, t) ? e[t] : void 0;
				if (0 !== a)
					if (a) r.push(a[2]);
					else {
						var o = new Promise((n, r) => (a = e[t] = [n, r]));
						r.push((a[2] = o));
						var l = n.p + n.u(t),
							i = new Error();
						n.l(
							l,
							(r) => {
								if (
									n.o(e, t) &&
									(0 !== (a = e[t]) && (e[t] = void 0), a)
								) {
									var o =
											r &&
											("load" === r.type
												? "missing"
												: r.type),
										l = r && r.target && r.target.src;
									(i.message =
										"Loading chunk " +
										t +
										" failed.\n(" +
										o +
										": " +
										l +
										")"),
										(i.name = "ChunkLoadError"),
										(i.type = o),
										(i.request = l),
										a[1](i);
								}
							},
							"chunk-" + t,
							t
						);
					}
			};
			var t = (t, r) => {
					var a,
						o,
						l = r[0],
						i = r[1],
						s = r[2],
						u = 0;
					if (l.some((t) => 0 !== e[t])) {
						for (a in i) n.o(i, a) && (n.m[a] = i[a]);
						if (s) s(n);
					}
					for (t && t(r); u < l.length; u++)
						(o = l[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
				},
				r = (self.webpackChunkhyperswap_landing =
					self.webpackChunkhyperswap_landing || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(n.nc = void 0),
		(() => {
			"use strict";
			var e = {};
			n.r(e),
				n.d(e, {
					hasBrowserEnv: () => nr,
					hasStandardBrowserEnv: () => ar,
					hasStandardBrowserWebWorkerEnv: () => or,
					navigator: () => rr,
					origin: () => lr,
				});
			var t = n(950),
				r = n(352);
			var a = function () {
				return (
					(a =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var a in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(
										t,
										a
									) && (e[a] = t[a]);
							return e;
						}),
					a.apply(this, arguments)
				);
			};
			Object.create;
			function o(e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, a = 0, o = t.length; a < o; a++)
						(!r && a in t) ||
							(r || (r = Array.prototype.slice.call(t, 0, a)),
							(r[a] = t[a]));
				return e.concat(r || Array.prototype.slice.call(t));
			}
			Object.create;
			"function" === typeof SuppressedError && SuppressedError;
			var l = n(403),
				i = n.n(l),
				s = "-ms-",
				u = "-moz-",
				c = "-webkit-",
				f = "comm",
				d = "rule",
				p = "decl",
				h = "@keyframes",
				m = Math.abs,
				g = String.fromCharCode,
				y = Object.assign;
			function v(e) {
				return e.trim();
			}
			function b(e, t) {
				return (e = t.exec(e)) ? e[0] : e;
			}
			function w(e, t, n) {
				return e.replace(t, n);
			}
			function S(e, t, n) {
				return e.indexOf(t, n);
			}
			function k(e, t) {
				return 0 | e.charCodeAt(t);
			}
			function E(e, t, n) {
				return e.slice(t, n);
			}
			function x(e) {
				return e.length;
			}
			function C(e) {
				return e.length;
			}
			function _(e, t) {
				return t.push(e), e;
			}
			function T(e, t) {
				return e.filter(function (e) {
					return !b(e, t);
				});
			}
			var P = 1,
				O = 1,
				N = 0,
				R = 0,
				A = 0,
				L = "";
			function z(e, t, n, r, a, o, l, i) {
				return {
					value: e,
					root: t,
					parent: n,
					type: r,
					props: a,
					children: o,
					line: P,
					column: O,
					length: l,
					return: "",
					siblings: i,
				};
			}
			function D(e, t) {
				return y(
					z("", null, null, "", null, null, 0, e.siblings),
					e,
					{ length: -e.length },
					t
				);
			}
			function F(e) {
				for (; e.root; ) e = D(e.root, { children: [e] });
				_(e, e.siblings);
			}
			function I() {
				return (
					(A = R > 0 ? k(L, --R) : 0),
					O--,
					10 === A && ((O = 1), P--),
					A
				);
			}
			function j() {
				return (
					(A = R < N ? k(L, R++) : 0),
					O++,
					10 === A && ((O = 1), P++),
					A
				);
			}
			function U() {
				return k(L, R);
			}
			function M() {
				return R;
			}
			function B(e, t) {
				return E(L, e, t);
			}
			function H(e) {
				switch (e) {
					case 0:
					case 9:
					case 10:
					case 13:
					case 32:
						return 5;
					case 33:
					case 43:
					case 44:
					case 47:
					case 62:
					case 64:
					case 126:
					case 59:
					case 123:
					case 125:
						return 4;
					case 58:
						return 3;
					case 34:
					case 39:
					case 40:
					case 91:
						return 2;
					case 41:
					case 93:
						return 1;
				}
				return 0;
			}
			function $(e) {
				return (P = O = 1), (N = x((L = e))), (R = 0), [];
			}
			function W(e) {
				return (L = ""), e;
			}
			function V(e) {
				return v(B(R - 1, Q(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
			}
			function q(e) {
				for (; (A = U()) && A < 33; ) j();
				return H(e) > 2 || H(A) > 3 ? "" : " ";
			}
			function K(e, t) {
				for (
					;
					--t &&
					j() &&
					!(
						A < 48 ||
						A > 102 ||
						(A > 57 && A < 65) ||
						(A > 70 && A < 97)
					);

				);
				return B(e, M() + (t < 6 && 32 == U() && 32 == j()));
			}
			function Q(e) {
				for (; j(); )
					switch (A) {
						case e:
							return R;
						case 34:
						case 39:
							34 !== e && 39 !== e && Q(A);
							break;
						case 40:
							41 === e && Q(e);
							break;
						case 92:
							j();
					}
				return R;
			}
			function G(e, t) {
				for (; j() && e + A !== 57 && (e + A !== 84 || 47 !== U()); );
				return "/*" + B(t, R - 1) + "*" + g(47 === e ? e : j());
			}
			function Y(e) {
				for (; !H(U()); ) j();
				return B(e, R);
			}
			function X(e, t) {
				for (var n = "", r = 0; r < e.length; r++)
					n += t(e[r], r, e, t) || "";
				return n;
			}
			function J(e, t, n, r) {
				switch (e.type) {
					case "@layer":
						if (e.children.length) break;
					case "@import":
					case p:
						return (e.return = e.return || e.value);
					case f:
						return "";
					case h:
						return (e.return =
							e.value + "{" + X(e.children, r) + "}");
					case d:
						if (!x((e.value = e.props.join(",")))) return "";
				}
				return x((n = X(e.children, r)))
					? (e.return = e.value + "{" + n + "}")
					: "";
			}
			function Z(e, t, n) {
				switch (
					(function (e, t) {
						return 45 ^ k(e, 0)
							? (((((((t << 2) ^ k(e, 0)) << 2) ^ k(e, 1)) << 2) ^
									k(e, 2)) <<
									2) ^
									k(e, 3)
							: 0;
					})(e, t)
				) {
					case 5103:
						return c + "print-" + e + e;
					case 5737:
					case 4201:
					case 3177:
					case 3433:
					case 1641:
					case 4457:
					case 2921:
					case 5572:
					case 6356:
					case 5844:
					case 3191:
					case 6645:
					case 3005:
					case 6391:
					case 5879:
					case 5623:
					case 6135:
					case 4599:
					case 4855:
					case 4215:
					case 6389:
					case 5109:
					case 5365:
					case 5621:
					case 3829:
						return c + e + e;
					case 4789:
						return u + e + e;
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756:
						return c + e + u + e + s + e + e;
					case 5936:
						switch (k(e, t + 11)) {
							case 114:
								return (
									c +
									e +
									s +
									w(e, /[svh]\w+-[tblr]{2}/, "tb") +
									e
								);
							case 108:
								return (
									c +
									e +
									s +
									w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") +
									e
								);
							case 45:
								return (
									c +
									e +
									s +
									w(e, /[svh]\w+-[tblr]{2}/, "lr") +
									e
								);
						}
					case 6828:
					case 4268:
					case 2903:
						return c + e + s + e + e;
					case 6165:
						return c + e + s + "flex-" + e + e;
					case 5187:
						return (
							c +
							e +
							w(
								e,
								/(\w+).+(:[^]+)/,
								c + "box-$1$2" + s + "flex-$1$2"
							) +
							e
						);
					case 5443:
						return (
							c +
							e +
							s +
							"flex-item-" +
							w(e, /flex-|-self/g, "") +
							(b(e, /flex-|baseline/)
								? ""
								: s + "grid-row-" + w(e, /flex-|-self/g, "")) +
							e
						);
					case 4675:
						return (
							c +
							e +
							s +
							"flex-line-pack" +
							w(e, /align-content|flex-|-self/g, "") +
							e
						);
					case 5548:
						return c + e + s + w(e, "shrink", "negative") + e;
					case 5292:
						return c + e + s + w(e, "basis", "preferred-size") + e;
					case 6060:
						return (
							c +
							"box-" +
							w(e, "-grow", "") +
							c +
							e +
							s +
							w(e, "grow", "positive") +
							e
						);
					case 4554:
						return (
							c + w(e, /([^-])(transform)/g, "$1" + c + "$2") + e
						);
					case 6187:
						return (
							w(
								w(
									w(e, /(zoom-|grab)/, c + "$1"),
									/(image-set)/,
									c + "$1"
								),
								e,
								""
							) + e
						);
					case 5495:
					case 3959:
						return w(e, /(image-set\([^]*)/, c + "$1$`$1");
					case 4968:
						return (
							w(
								w(
									e,
									/(.+:)(flex-)?(.*)/,
									c + "box-pack:$3" + s + "flex-pack:$3"
								),
								/s.+-b[^;]+/,
								"justify"
							) +
							c +
							e +
							e
						);
					case 4200:
						if (!b(e, /flex-|baseline/))
							return s + "grid-column-align" + E(e, t) + e;
						break;
					case 2592:
					case 3360:
						return s + w(e, "template-", "") + e;
					case 4384:
					case 3616:
						return n &&
							n.some(function (e, n) {
								return (t = n), b(e.props, /grid-\w+-end/);
							})
							? ~S(e + (n = n[t].value), "span", 0)
								? e
								: s +
								  w(e, "-start", "") +
								  e +
								  s +
								  "grid-row-span:" +
								  (~S(n, "span", 0)
										? b(n, /\d+/)
										: +b(n, /\d+/) - +b(e, /\d+/)) +
								  ";"
							: s + w(e, "-start", "") + e;
					case 4896:
					case 4128:
						return n &&
							n.some(function (e) {
								return b(e.props, /grid-\w+-start/);
							})
							? e
							: s + w(w(e, "-end", "-span"), "span ", "") + e;
					case 4095:
					case 3583:
					case 4068:
					case 2532:
						return w(e, /(.+)-inline(.+)/, c + "$1$2") + e;
					case 8116:
					case 7059:
					case 5753:
					case 5535:
					case 5445:
					case 5701:
					case 4933:
					case 4677:
					case 5533:
					case 5789:
					case 5021:
					case 4765:
						if (x(e) - 1 - t > 6)
							switch (k(e, t + 1)) {
								case 109:
									if (45 !== k(e, t + 4)) break;
								case 102:
									return (
										w(
											e,
											/(.+:)(.+)-([^]+)/,
											"$1" +
												c +
												"$2-$3$1" +
												u +
												(108 == k(e, t + 3)
													? "$3"
													: "$2-$3")
										) + e
									);
								case 115:
									return ~S(e, "stretch", 0)
										? Z(
												w(
													e,
													"stretch",
													"fill-available"
												),
												t,
												n
										  ) + e
										: e;
							}
						break;
					case 5152:
					case 5920:
						return w(
							e,
							/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
							function (t, n, r, a, o, l, i) {
								return (
									s +
									n +
									":" +
									r +
									i +
									(a
										? s +
										  n +
										  "-span:" +
										  (o ? l : +l - +r) +
										  i
										: "") +
									e
								);
							}
						);
					case 4949:
						if (121 === k(e, t + 6)) return w(e, ":", ":" + c) + e;
						break;
					case 6444:
						switch (k(e, 45 === k(e, 14) ? 18 : 11)) {
							case 120:
								return (
									w(
										e,
										/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
										"$1" +
											c +
											(45 === k(e, 14) ? "inline-" : "") +
											"box$3$1" +
											c +
											"$2$3$1" +
											s +
											"$2box$3"
									) + e
								);
							case 100:
								return w(e, ":", ":" + s) + e;
						}
						break;
					case 5719:
					case 2647:
					case 2135:
					case 3927:
					case 2391:
						return w(e, "scroll-", "scroll-snap-") + e;
				}
				return e;
			}
			function ee(e, t, n, r) {
				if (e.length > -1 && !e.return)
					switch (e.type) {
						case p:
							return void (e.return = Z(e.value, e.length, n));
						case h:
							return X(
								[D(e, { value: w(e.value, "@", "@" + c) })],
								r
							);
						case d:
							if (e.length)
								return (function (e, t) {
									return e.map(t).join("");
								})((n = e.props), function (t) {
									switch (
										b(t, (r = /(::plac\w+|:read-\w+)/))
									) {
										case ":read-only":
										case ":read-write":
											F(
												D(e, {
													props: [
														w(
															t,
															/:(read-\w+)/,
															":-moz-$1"
														),
													],
												})
											),
												F(D(e, { props: [t] })),
												y(e, { props: T(n, r) });
											break;
										case "::placeholder":
											F(
												D(e, {
													props: [
														w(
															t,
															/:(plac\w+)/,
															":" + c + "input-$1"
														),
													],
												})
											),
												F(
													D(e, {
														props: [
															w(
																t,
																/:(plac\w+)/,
																":-moz-$1"
															),
														],
													})
												),
												F(
													D(e, {
														props: [
															w(
																t,
																/:(plac\w+)/,
																s + "input-$1"
															),
														],
													})
												),
												F(D(e, { props: [t] })),
												y(e, { props: T(n, r) });
									}
									return "";
								});
					}
			}
			function te(e) {
				return W(ne("", null, null, null, [""], (e = $(e)), 0, [0], e));
			}
			function ne(e, t, n, r, a, o, l, i, s) {
				for (
					var u = 0,
						c = 0,
						f = l,
						d = 0,
						p = 0,
						h = 0,
						y = 1,
						v = 1,
						b = 1,
						E = 0,
						C = "",
						T = a,
						P = o,
						O = r,
						N = C;
					v;

				)
					switch (((h = E), (E = j()))) {
						case 40:
							if (108 != h && 58 == k(N, f - 1)) {
								-1 !=
									S(
										(N += w(V(E), "&", "&\f")),
										"&\f",
										m(u ? i[u - 1] : 0)
									) && (b = -1);
								break;
							}
						case 34:
						case 39:
						case 91:
							N += V(E);
							break;
						case 9:
						case 10:
						case 13:
						case 32:
							N += q(h);
							break;
						case 92:
							N += K(M() - 1, 7);
							continue;
						case 47:
							switch (U()) {
								case 42:
								case 47:
									_(ae(G(j(), M()), t, n, s), s);
									break;
								default:
									N += "/";
							}
							break;
						case 123 * y:
							i[u++] = x(N) * b;
						case 125 * y:
						case 59:
						case 0:
							switch (E) {
								case 0:
								case 125:
									v = 0;
								case 59 + c:
									-1 == b && (N = w(N, /\f/g, "")),
										p > 0 &&
											x(N) - f &&
											_(
												p > 32
													? oe(
															N + ";",
															r,
															n,
															f - 1,
															s
													  )
													: oe(
															w(N, " ", "") + ";",
															r,
															n,
															f - 2,
															s
													  ),
												s
											);
									break;
								case 59:
									N += ";";
								default:
									if (
										(_(
											(O = re(
												N,
												t,
												n,
												u,
												c,
												a,
												i,
												C,
												(T = []),
												(P = []),
												f,
												o
											)),
											o
										),
										123 === E)
									)
										if (0 === c)
											ne(N, t, O, O, T, o, f, i, P);
										else
											switch (
												99 === d && 110 === k(N, 3)
													? 100
													: d
											) {
												case 100:
												case 108:
												case 109:
												case 115:
													ne(
														e,
														O,
														O,
														r &&
															_(
																re(
																	e,
																	O,
																	O,
																	0,
																	0,
																	a,
																	i,
																	C,
																	a,
																	(T = []),
																	f,
																	P
																),
																P
															),
														a,
														P,
														f,
														i,
														r ? T : P
													);
													break;
												default:
													ne(
														N,
														O,
														O,
														O,
														[""],
														P,
														0,
														i,
														P
													);
											}
							}
							(u = c = p = 0), (y = b = 1), (C = N = ""), (f = l);
							break;
						case 58:
							(f = 1 + x(N)), (p = h);
						default:
							if (y < 1)
								if (123 == E) --y;
								else if (125 == E && 0 == y++ && 125 == I())
									continue;
							switch (((N += g(E)), E * y)) {
								case 38:
									b = c > 0 ? 1 : ((N += "\f"), -1);
									break;
								case 44:
									(i[u++] = (x(N) - 1) * b), (b = 1);
									break;
								case 64:
									45 === U() && (N += V(j())),
										(d = U()),
										(c = f = x((C = N += Y(M())))),
										E++;
									break;
								case 45:
									45 === h && 2 == x(N) && (y = 0);
							}
					}
				return o;
			}
			function re(e, t, n, r, a, o, l, i, s, u, c, f) {
				for (
					var p = a - 1,
						h = 0 === a ? o : [""],
						g = C(h),
						y = 0,
						b = 0,
						S = 0;
					y < r;
					++y
				)
					for (
						var k = 0, x = E(e, p + 1, (p = m((b = l[y])))), _ = e;
						k < g;
						++k
					)
						(_ = v(b > 0 ? h[k] + " " + x : w(x, /&\f/g, h[k]))) &&
							(s[S++] = _);
				return z(e, t, n, 0 === a ? d : i, s, u, c, f);
			}
			function ae(e, t, n, r) {
				return z(e, t, n, f, g(A), E(e, 2, -2), 0, r);
			}
			function oe(e, t, n, r, a) {
				return z(e, t, n, p, E(e, 0, r), E(e, r + 1, -1), r, a);
			}
			var le = {
					animationIterationCount: 1,
					aspectRatio: 1,
					borderImageOutset: 1,
					borderImageSlice: 1,
					borderImageWidth: 1,
					boxFlex: 1,
					boxFlexGroup: 1,
					boxOrdinalGroup: 1,
					columnCount: 1,
					columns: 1,
					flex: 1,
					flexGrow: 1,
					flexPositive: 1,
					flexShrink: 1,
					flexNegative: 1,
					flexOrder: 1,
					gridRow: 1,
					gridRowEnd: 1,
					gridRowSpan: 1,
					gridRowStart: 1,
					gridColumn: 1,
					gridColumnEnd: 1,
					gridColumnSpan: 1,
					gridColumnStart: 1,
					msGridRow: 1,
					msGridRowSpan: 1,
					msGridColumn: 1,
					msGridColumnSpan: 1,
					fontWeight: 1,
					lineHeight: 1,
					opacity: 1,
					order: 1,
					orphans: 1,
					tabSize: 1,
					widows: 1,
					zIndex: 1,
					zoom: 1,
					WebkitLineClamp: 1,
					fillOpacity: 1,
					floodOpacity: 1,
					stopOpacity: 1,
					strokeDasharray: 1,
					strokeDashoffset: 1,
					strokeMiterlimit: 1,
					strokeOpacity: 1,
					strokeWidth: 1,
				},
				ie =
					("undefined" != typeof process &&
						void 0 !==
							{
								NODE_ENV: "production",
								PUBLIC_URL: "",
								WDS_SOCKET_HOST: void 0,
								WDS_SOCKET_PATH: void 0,
								WDS_SOCKET_PORT: void 0,
								FAST_REFRESH: !0,
							} &&
						({
							NODE_ENV: "production",
							PUBLIC_URL: "",
							WDS_SOCKET_HOST: void 0,
							WDS_SOCKET_PATH: void 0,
							WDS_SOCKET_PORT: void 0,
							FAST_REFRESH: !0,
						}.REACT_APP_SC_ATTR ||
							{
								NODE_ENV: "production",
								PUBLIC_URL: "",
								WDS_SOCKET_HOST: void 0,
								WDS_SOCKET_PATH: void 0,
								WDS_SOCKET_PORT: void 0,
								FAST_REFRESH: !0,
							}.SC_ATTR)) ||
					"data-styled",
				se = "active",
				ue = "data-styled-version",
				ce = "6.1.17",
				fe = "/*!sc*/\n",
				de = "undefined" != typeof window && "HTMLElement" in window,
				pe = Boolean(
					"boolean" == typeof SC_DISABLE_SPEEDY
						? SC_DISABLE_SPEEDY
						: "undefined" != typeof process &&
						  void 0 !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								} &&
						  void 0 !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.REACT_APP_SC_DISABLE_SPEEDY &&
						  "" !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.REACT_APP_SC_DISABLE_SPEEDY
						? "false" !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.REACT_APP_SC_DISABLE_SPEEDY &&
						  {
								NODE_ENV: "production",
								PUBLIC_URL: "",
								WDS_SOCKET_HOST: void 0,
								WDS_SOCKET_PATH: void 0,
								WDS_SOCKET_PORT: void 0,
								FAST_REFRESH: !0,
						  }.REACT_APP_SC_DISABLE_SPEEDY
						: "undefined" != typeof process &&
						  void 0 !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								} &&
						  void 0 !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.SC_DISABLE_SPEEDY &&
						  "" !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.SC_DISABLE_SPEEDY &&
						  "false" !==
								{
									NODE_ENV: "production",
									PUBLIC_URL: "",
									WDS_SOCKET_HOST: void 0,
									WDS_SOCKET_PATH: void 0,
									WDS_SOCKET_PORT: void 0,
									FAST_REFRESH: !0,
								}.SC_DISABLE_SPEEDY &&
						  {
								NODE_ENV: "production",
								PUBLIC_URL: "",
								WDS_SOCKET_HOST: void 0,
								WDS_SOCKET_PATH: void 0,
								WDS_SOCKET_PORT: void 0,
								FAST_REFRESH: !0,
						  }.SC_DISABLE_SPEEDY
				),
				he = (new Set(), Object.freeze([])),
				me = Object.freeze({});
			function ge(e, t, n) {
				return (
					void 0 === n && (n = me),
					(e.theme !== n.theme && e.theme) || t || n.theme
				);
			}
			var ye = new Set([
					"a",
					"abbr",
					"address",
					"area",
					"article",
					"aside",
					"audio",
					"b",
					"base",
					"bdi",
					"bdo",
					"big",
					"blockquote",
					"body",
					"br",
					"button",
					"canvas",
					"caption",
					"cite",
					"code",
					"col",
					"colgroup",
					"data",
					"datalist",
					"dd",
					"del",
					"details",
					"dfn",
					"dialog",
					"div",
					"dl",
					"dt",
					"em",
					"embed",
					"fieldset",
					"figcaption",
					"figure",
					"footer",
					"form",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"header",
					"hgroup",
					"hr",
					"html",
					"i",
					"iframe",
					"img",
					"input",
					"ins",
					"kbd",
					"keygen",
					"label",
					"legend",
					"li",
					"link",
					"main",
					"map",
					"mark",
					"menu",
					"menuitem",
					"meta",
					"meter",
					"nav",
					"noscript",
					"object",
					"ol",
					"optgroup",
					"option",
					"output",
					"p",
					"param",
					"picture",
					"pre",
					"progress",
					"q",
					"rp",
					"rt",
					"ruby",
					"s",
					"samp",
					"script",
					"section",
					"select",
					"small",
					"source",
					"span",
					"strong",
					"style",
					"sub",
					"summary",
					"sup",
					"table",
					"tbody",
					"td",
					"textarea",
					"tfoot",
					"th",
					"thead",
					"time",
					"tr",
					"track",
					"u",
					"ul",
					"use",
					"var",
					"video",
					"wbr",
					"circle",
					"clipPath",
					"defs",
					"ellipse",
					"foreignObject",
					"g",
					"image",
					"line",
					"linearGradient",
					"marker",
					"mask",
					"path",
					"pattern",
					"polygon",
					"polyline",
					"radialGradient",
					"rect",
					"stop",
					"svg",
					"text",
					"tspan",
				]),
				ve = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
				be = /(^-|-$)/g;
			function we(e) {
				return e.replace(ve, "-").replace(be, "");
			}
			var Se = /(a)(d)/gi,
				ke = function (e) {
					return String.fromCharCode(e + (e > 25 ? 39 : 97));
				};
			function Ee(e) {
				var t,
					n = "";
				for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
					n = ke(t % 52) + n;
				return (ke(t % 52) + n).replace(Se, "$1-$2");
			}
			var xe,
				Ce = function (e, t) {
					for (var n = t.length; n; )
						e = (33 * e) ^ t.charCodeAt(--n);
					return e;
				},
				_e = function (e) {
					return Ce(5381, e);
				};
			function Te(e) {
				return Ee(_e(e) >>> 0);
			}
			function Pe(e) {
				return e.displayName || e.name || "Component";
			}
			function Oe(e) {
				return "string" == typeof e && !0;
			}
			var Ne = "function" == typeof Symbol && Symbol.for,
				Re = Ne ? Symbol.for("react.memo") : 60115,
				Ae = Ne ? Symbol.for("react.forward_ref") : 60112,
				Le = {
					childContextTypes: !0,
					contextType: !0,
					contextTypes: !0,
					defaultProps: !0,
					displayName: !0,
					getDefaultProps: !0,
					getDerivedStateFromError: !0,
					getDerivedStateFromProps: !0,
					mixins: !0,
					propTypes: !0,
					type: !0,
				},
				ze = {
					name: !0,
					length: !0,
					prototype: !0,
					caller: !0,
					callee: !0,
					arguments: !0,
					arity: !0,
				},
				De = {
					$$typeof: !0,
					compare: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0,
					type: !0,
				},
				Fe =
					(((xe = {})[Ae] = {
						$$typeof: !0,
						render: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
					}),
					(xe[Re] = De),
					xe);
			function Ie(e) {
				return ("type" in (t = e) && t.type.$$typeof) === Re
					? De
					: "$$typeof" in e
					? Fe[e.$$typeof]
					: Le;
				var t;
			}
			var je = Object.defineProperty,
				Ue = Object.getOwnPropertyNames,
				Me = Object.getOwnPropertySymbols,
				Be = Object.getOwnPropertyDescriptor,
				He = Object.getPrototypeOf,
				$e = Object.prototype;
			function We(e, t, n) {
				if ("string" != typeof t) {
					if ($e) {
						var r = He(t);
						r && r !== $e && We(e, r, n);
					}
					var a = Ue(t);
					Me && (a = a.concat(Me(t)));
					for (var o = Ie(e), l = Ie(t), i = 0; i < a.length; ++i) {
						var s = a[i];
						if (
							!(
								s in ze ||
								(n && n[s]) ||
								(l && s in l) ||
								(o && s in o)
							)
						) {
							var u = Be(t, s);
							try {
								je(e, s, u);
							} catch (e) {}
						}
					}
				}
				return e;
			}
			function Ve(e) {
				return "function" == typeof e;
			}
			function qe(e) {
				return "object" == typeof e && "styledComponentId" in e;
			}
			function Ke(e, t) {
				return e && t ? "".concat(e, " ").concat(t) : e || t || "";
			}
			function Qe(e, t) {
				if (0 === e.length) return "";
				for (var n = e[0], r = 1; r < e.length; r++)
					n += t ? t + e[r] : e[r];
				return n;
			}
			function Ge(e) {
				return (
					null !== e &&
					"object" == typeof e &&
					e.constructor.name === Object.name &&
					!("props" in e && e.$$typeof)
				);
			}
			function Ye(e, t, n) {
				if (
					(void 0 === n && (n = !1),
					!n && !Ge(e) && !Array.isArray(e))
				)
					return t;
				if (Array.isArray(t))
					for (var r = 0; r < t.length; r++) e[r] = Ye(e[r], t[r]);
				else if (Ge(t)) for (var r in t) e[r] = Ye(e[r], t[r]);
				return e;
			}
			function Xe(e, t) {
				Object.defineProperty(e, "toString", { value: t });
			}
			function Je(e) {
				for (var t = [], n = 1; n < arguments.length; n++)
					t[n - 1] = arguments[n];
				return new Error(
					"An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
						.concat(e, " for more information.")
						.concat(
							t.length > 0 ? " Args: ".concat(t.join(", ")) : ""
						)
				);
			}
			var Ze = (function () {
					function e(e) {
						(this.groupSizes = new Uint32Array(512)),
							(this.length = 512),
							(this.tag = e);
					}
					return (
						(e.prototype.indexOfGroup = function (e) {
							for (var t = 0, n = 0; n < e; n++)
								t += this.groupSizes[n];
							return t;
						}),
						(e.prototype.insertRules = function (e, t) {
							if (e >= this.groupSizes.length) {
								for (
									var n = this.groupSizes,
										r = n.length,
										a = r;
									e >= a;

								)
									if ((a <<= 1) < 0)
										throw Je(16, "".concat(e));
								(this.groupSizes = new Uint32Array(a)),
									this.groupSizes.set(n),
									(this.length = a);
								for (var o = r; o < a; o++)
									this.groupSizes[o] = 0;
							}
							for (
								var l = this.indexOfGroup(e + 1),
									i = ((o = 0), t.length);
								o < i;
								o++
							)
								this.tag.insertRule(l, t[o]) &&
									(this.groupSizes[e]++, l++);
						}),
						(e.prototype.clearGroup = function (e) {
							if (e < this.length) {
								var t = this.groupSizes[e],
									n = this.indexOfGroup(e),
									r = n + t;
								this.groupSizes[e] = 0;
								for (var a = n; a < r; a++)
									this.tag.deleteRule(n);
							}
						}),
						(e.prototype.getGroup = function (e) {
							var t = "";
							if (e >= this.length || 0 === this.groupSizes[e])
								return t;
							for (
								var n = this.groupSizes[e],
									r = this.indexOfGroup(e),
									a = r + n,
									o = r;
								o < a;
								o++
							)
								t += "".concat(this.tag.getRule(o)).concat(fe);
							return t;
						}),
						e
					);
				})(),
				et = new Map(),
				tt = new Map(),
				nt = 1,
				rt = function (e) {
					if (et.has(e)) return et.get(e);
					for (; tt.has(nt); ) nt++;
					var t = nt++;
					return et.set(e, t), tt.set(t, e), t;
				},
				at = function (e, t) {
					(nt = t + 1), et.set(e, t), tt.set(t, e);
				},
				ot = "style["
					.concat(ie, "][")
					.concat(ue, '="')
					.concat(ce, '"]'),
				lt = new RegExp(
					"^".concat(
						ie,
						'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
					)
				),
				it = function (e, t, n) {
					for (
						var r, a = n.split(","), o = 0, l = a.length;
						o < l;
						o++
					)
						(r = a[o]) && e.registerName(t, r);
				},
				st = function (e, t) {
					for (
						var n,
							r = (
								null !== (n = t.textContent) && void 0 !== n
									? n
									: ""
							).split(fe),
							a = [],
							o = 0,
							l = r.length;
						o < l;
						o++
					) {
						var i = r[o].trim();
						if (i) {
							var s = i.match(lt);
							if (s) {
								var u = 0 | parseInt(s[1], 10),
									c = s[2];
								0 !== u &&
									(at(c, u),
									it(e, c, s[3]),
									e.getTag().insertRules(u, a)),
									(a.length = 0);
							} else a.push(i);
						}
					}
				},
				ut = function (e) {
					for (
						var t = document.querySelectorAll(ot),
							n = 0,
							r = t.length;
						n < r;
						n++
					) {
						var a = t[n];
						a &&
							a.getAttribute(ie) !== se &&
							(st(e, a),
							a.parentNode && a.parentNode.removeChild(a));
					}
				};
			function ct() {
				return n.nc;
			}
			var ft = function (e) {
					var t = document.head,
						n = e || t,
						r = document.createElement("style"),
						a = (function (e) {
							var t = Array.from(
								e.querySelectorAll("style[".concat(ie, "]"))
							);
							return t[t.length - 1];
						})(n),
						o = void 0 !== a ? a.nextSibling : null;
					r.setAttribute(ie, se), r.setAttribute(ue, ce);
					var l = ct();
					return (
						l && r.setAttribute("nonce", l), n.insertBefore(r, o), r
					);
				},
				dt = (function () {
					function e(e) {
						(this.element = ft(e)),
							this.element.appendChild(
								document.createTextNode("")
							),
							(this.sheet = (function (e) {
								if (e.sheet) return e.sheet;
								for (
									var t = document.styleSheets,
										n = 0,
										r = t.length;
									n < r;
									n++
								) {
									var a = t[n];
									if (a.ownerNode === e) return a;
								}
								throw Je(17);
							})(this.element)),
							(this.length = 0);
					}
					return (
						(e.prototype.insertRule = function (e, t) {
							try {
								return (
									this.sheet.insertRule(t, e),
									this.length++,
									!0
								);
							} catch (e) {
								return !1;
							}
						}),
						(e.prototype.deleteRule = function (e) {
							this.sheet.deleteRule(e), this.length--;
						}),
						(e.prototype.getRule = function (e) {
							var t = this.sheet.cssRules[e];
							return t && t.cssText ? t.cssText : "";
						}),
						e
					);
				})(),
				pt = (function () {
					function e(e) {
						(this.element = ft(e)),
							(this.nodes = this.element.childNodes),
							(this.length = 0);
					}
					return (
						(e.prototype.insertRule = function (e, t) {
							if (e <= this.length && e >= 0) {
								var n = document.createTextNode(t);
								return (
									this.element.insertBefore(
										n,
										this.nodes[e] || null
									),
									this.length++,
									!0
								);
							}
							return !1;
						}),
						(e.prototype.deleteRule = function (e) {
							this.element.removeChild(this.nodes[e]),
								this.length--;
						}),
						(e.prototype.getRule = function (e) {
							return e < this.length
								? this.nodes[e].textContent
								: "";
						}),
						e
					);
				})(),
				ht = (function () {
					function e(e) {
						(this.rules = []), (this.length = 0);
					}
					return (
						(e.prototype.insertRule = function (e, t) {
							return (
								e <= this.length &&
								(this.rules.splice(e, 0, t), this.length++, !0)
							);
						}),
						(e.prototype.deleteRule = function (e) {
							this.rules.splice(e, 1), this.length--;
						}),
						(e.prototype.getRule = function (e) {
							return e < this.length ? this.rules[e] : "";
						}),
						e
					);
				})(),
				mt = de,
				gt = { isServer: !de, useCSSOMInjection: !pe },
				yt = (function () {
					function e(e, t, n) {
						void 0 === e && (e = me), void 0 === t && (t = {});
						var r = this;
						(this.options = a(a({}, gt), e)),
							(this.gs = t),
							(this.names = new Map(n)),
							(this.server = !!e.isServer),
							!this.server && de && mt && ((mt = !1), ut(this)),
							Xe(this, function () {
								return (function (e) {
									for (
										var t = e.getTag(),
											n = t.length,
											r = "",
											a = function (n) {
												var a = (function (e) {
													return tt.get(e);
												})(n);
												if (void 0 === a)
													return "continue";
												var o = e.names.get(a),
													l = t.getGroup(n);
												if (
													void 0 === o ||
													!o.size ||
													0 === l.length
												)
													return "continue";
												var i = ""
														.concat(ie, ".g")
														.concat(n, '[id="')
														.concat(a, '"]'),
													s = "";
												void 0 !== o &&
													o.forEach(function (e) {
														e.length > 0 &&
															(s += "".concat(
																e,
																","
															));
													}),
													(r += ""
														.concat(l)
														.concat(i, '{content:"')
														.concat(s, '"}')
														.concat(fe));
											},
											o = 0;
										o < n;
										o++
									)
										a(o);
									return r;
								})(r);
							});
					}
					return (
						(e.registerId = function (e) {
							return rt(e);
						}),
						(e.prototype.rehydrate = function () {
							!this.server && de && ut(this);
						}),
						(e.prototype.reconstructWithOptions = function (t, n) {
							return (
								void 0 === n && (n = !0),
								new e(
									a(a({}, this.options), t),
									this.gs,
									(n && this.names) || void 0
								)
							);
						}),
						(e.prototype.allocateGSInstance = function (e) {
							return (this.gs[e] = (this.gs[e] || 0) + 1);
						}),
						(e.prototype.getTag = function () {
							return (
								this.tag ||
								(this.tag =
									((e = (function (e) {
										var t = e.useCSSOMInjection,
											n = e.target;
										return e.isServer
											? new ht(n)
											: t
											? new dt(n)
											: new pt(n);
									})(this.options)),
									new Ze(e)))
							);
							var e;
						}),
						(e.prototype.hasNameForId = function (e, t) {
							return (
								this.names.has(e) && this.names.get(e).has(t)
							);
						}),
						(e.prototype.registerName = function (e, t) {
							if ((rt(e), this.names.has(e)))
								this.names.get(e).add(t);
							else {
								var n = new Set();
								n.add(t), this.names.set(e, n);
							}
						}),
						(e.prototype.insertRules = function (e, t, n) {
							this.registerName(e, t),
								this.getTag().insertRules(rt(e), n);
						}),
						(e.prototype.clearNames = function (e) {
							this.names.has(e) && this.names.get(e).clear();
						}),
						(e.prototype.clearRules = function (e) {
							this.getTag().clearGroup(rt(e)), this.clearNames(e);
						}),
						(e.prototype.clearTag = function () {
							this.tag = void 0;
						}),
						e
					);
				})(),
				vt = /&/g,
				bt = /^\s*\/\/.*$/gm;
			function wt(e, t) {
				return e.map(function (e) {
					return (
						"rule" === e.type &&
							((e.value = "".concat(t, " ").concat(e.value)),
							(e.value = e.value.replaceAll(
								",",
								",".concat(t, " ")
							)),
							(e.props = e.props.map(function (e) {
								return "".concat(t, " ").concat(e);
							}))),
						Array.isArray(e.children) &&
							"@keyframes" !== e.type &&
							(e.children = wt(e.children, t)),
						e
					);
				});
			}
			function St(e) {
				var t,
					n,
					r,
					a = void 0 === e ? me : e,
					o = a.options,
					l = void 0 === o ? me : o,
					i = a.plugins,
					s = void 0 === i ? he : i,
					u = function (e, r, a) {
						return a.startsWith(n) &&
							a.endsWith(n) &&
							a.replaceAll(n, "").length > 0
							? ".".concat(t)
							: e;
					},
					c = s.slice();
				c.push(function (e) {
					e.type === d &&
						e.value.includes("&") &&
						(e.props[0] = e.props[0].replace(vt, n).replace(r, u));
				}),
					l.prefix && c.push(ee),
					c.push(J);
				var f = function (e, a, o, i) {
					void 0 === a && (a = ""),
						void 0 === o && (o = ""),
						void 0 === i && (i = "&"),
						(t = i),
						(n = a),
						(r = new RegExp("\\".concat(n, "\\b"), "g"));
					var s = e.replace(bt, ""),
						u = te(
							o || a
								? ""
										.concat(o, " ")
										.concat(a, " { ")
										.concat(s, " }")
								: s
						);
					l.namespace && (u = wt(u, l.namespace));
					var f,
						d = [];
					return (
						X(
							u,
							(function (e) {
								var t = C(e);
								return function (n, r, a, o) {
									for (var l = "", i = 0; i < t; i++)
										l += e[i](n, r, a, o) || "";
									return l;
								};
							})(
								c.concat(
									((f = function (e) {
										return d.push(e);
									}),
									function (e) {
										e.root || ((e = e.return) && f(e));
									})
								)
							)
						),
						d
					);
				};
				return (
					(f.hash = s.length
						? s
								.reduce(function (e, t) {
									return t.name || Je(15), Ce(e, t.name);
								}, 5381)
								.toString()
						: ""),
					f
				);
			}
			var kt = new yt(),
				Et = St(),
				xt = t.createContext({
					shouldForwardProp: void 0,
					styleSheet: kt,
					stylis: Et,
				}),
				Ct = (xt.Consumer, t.createContext(void 0));
			function _t() {
				return (0, t.useContext)(xt);
			}
			function Tt(e) {
				var n = (0, t.useState)(e.stylisPlugins),
					r = n[0],
					a = n[1],
					o = _t().styleSheet,
					l = (0, t.useMemo)(
						function () {
							var t = o;
							return (
								e.sheet
									? (t = e.sheet)
									: e.target &&
									  (t = t.reconstructWithOptions(
											{ target: e.target },
											!1
									  )),
								e.disableCSSOMInjection &&
									(t = t.reconstructWithOptions({
										useCSSOMInjection: !1,
									})),
								t
							);
						},
						[e.disableCSSOMInjection, e.sheet, e.target, o]
					),
					s = (0, t.useMemo)(
						function () {
							return St({
								options: {
									namespace: e.namespace,
									prefix: e.enableVendorPrefixes,
								},
								plugins: r,
							});
						},
						[e.enableVendorPrefixes, e.namespace, r]
					);
				(0, t.useEffect)(
					function () {
						i()(r, e.stylisPlugins) || a(e.stylisPlugins);
					},
					[e.stylisPlugins]
				);
				var u = (0, t.useMemo)(
					function () {
						return {
							shouldForwardProp: e.shouldForwardProp,
							styleSheet: l,
							stylis: s,
						};
					},
					[e.shouldForwardProp, l, s]
				);
				return t.createElement(
					xt.Provider,
					{ value: u },
					t.createElement(Ct.Provider, { value: s }, e.children)
				);
			}
			var Pt = (function () {
					function e(e, t) {
						var n = this;
						(this.inject = function (e, t) {
							void 0 === t && (t = Et);
							var r = n.name + t.hash;
							e.hasNameForId(n.id, r) ||
								e.insertRules(
									n.id,
									r,
									t(n.rules, r, "@keyframes")
								);
						}),
							(this.name = e),
							(this.id = "sc-keyframes-".concat(e)),
							(this.rules = t),
							Xe(this, function () {
								throw Je(12, String(n.name));
							});
					}
					return (
						(e.prototype.getName = function (e) {
							return void 0 === e && (e = Et), this.name + e.hash;
						}),
						e
					);
				})(),
				Ot = function (e) {
					return e >= "A" && e <= "Z";
				};
			function Nt(e) {
				for (var t = "", n = 0; n < e.length; n++) {
					var r = e[n];
					if (1 === n && "-" === r && "-" === e[0]) return e;
					Ot(r) ? (t += "-" + r.toLowerCase()) : (t += r);
				}
				return t.startsWith("ms-") ? "-" + t : t;
			}
			var Rt = function (e) {
					return null == e || !1 === e || "" === e;
				},
				At = function (e) {
					var t,
						n,
						r = [];
					for (var a in e) {
						var l = e[a];
						e.hasOwnProperty(a) &&
							!Rt(l) &&
							((Array.isArray(l) && l.isCss) || Ve(l)
								? r.push("".concat(Nt(a), ":"), l, ";")
								: Ge(l)
								? r.push.apply(
										r,
										o(
											o(["".concat(a, " {")], At(l), !1),
											["}"],
											!1
										)
								  )
								: r.push(
										""
											.concat(Nt(a), ": ")
											.concat(
												((t = a),
												null == (n = l) ||
												"boolean" == typeof n ||
												"" === n
													? ""
													: "number" != typeof n ||
													  0 === n ||
													  t in le ||
													  t.startsWith("--")
													? String(n).trim()
													: "".concat(n, "px")),
												";"
											)
								  ));
					}
					return r;
				};
			function Lt(e, t, n, r) {
				return Rt(e)
					? []
					: qe(e)
					? [".".concat(e.styledComponentId)]
					: Ve(e)
					? !Ve((a = e)) ||
					  (a.prototype && a.prototype.isReactComponent) ||
					  !t
						? [e]
						: Lt(e(t), t, n, r)
					: e instanceof Pt
					? n
						? (e.inject(n, r), [e.getName(r)])
						: [e]
					: Ge(e)
					? At(e)
					: Array.isArray(e)
					? Array.prototype.concat.apply(
							he,
							e.map(function (e) {
								return Lt(e, t, n, r);
							})
					  )
					: [e.toString()];
				var a;
			}
			function zt(e) {
				for (var t = 0; t < e.length; t += 1) {
					var n = e[t];
					if (Ve(n) && !qe(n)) return !1;
				}
				return !0;
			}
			var Dt = _e(ce),
				Ft = (function () {
					function e(e, t, n) {
						(this.rules = e),
							(this.staticRulesId = ""),
							(this.isStatic =
								(void 0 === n || n.isStatic) && zt(e)),
							(this.componentId = t),
							(this.baseHash = Ce(Dt, t)),
							(this.baseStyle = n),
							yt.registerId(t);
					}
					return (
						(e.prototype.generateAndInjectStyles = function (
							e,
							t,
							n
						) {
							var r = this.baseStyle
								? this.baseStyle.generateAndInjectStyles(
										e,
										t,
										n
								  )
								: "";
							if (this.isStatic && !n.hash)
								if (
									this.staticRulesId &&
									t.hasNameForId(
										this.componentId,
										this.staticRulesId
									)
								)
									r = Ke(r, this.staticRulesId);
								else {
									var a = Qe(Lt(this.rules, e, t, n)),
										o = Ee(Ce(this.baseHash, a) >>> 0);
									if (!t.hasNameForId(this.componentId, o)) {
										var l = n(
											a,
											".".concat(o),
											void 0,
											this.componentId
										);
										t.insertRules(this.componentId, o, l);
									}
									(r = Ke(r, o)), (this.staticRulesId = o);
								}
							else {
								for (
									var i = Ce(this.baseHash, n.hash),
										s = "",
										u = 0;
									u < this.rules.length;
									u++
								) {
									var c = this.rules[u];
									if ("string" == typeof c) s += c;
									else if (c) {
										var f = Qe(Lt(c, e, t, n));
										(i = Ce(i, f + u)), (s += f);
									}
								}
								if (s) {
									var d = Ee(i >>> 0);
									t.hasNameForId(this.componentId, d) ||
										t.insertRules(
											this.componentId,
											d,
											n(
												s,
												".".concat(d),
												void 0,
												this.componentId
											)
										),
										(r = Ke(r, d));
								}
							}
							return r;
						}),
						e
					);
				})(),
				It = t.createContext(void 0);
			It.Consumer;
			var jt = {};
			new Set();
			function Ut(e, n, r) {
				var o = qe(e),
					l = e,
					i = !Oe(e),
					s = n.attrs,
					u = void 0 === s ? he : s,
					c = n.componentId,
					f =
						void 0 === c
							? (function (e, t) {
									var n = "string" != typeof e ? "sc" : we(e);
									jt[n] = (jt[n] || 0) + 1;
									var r = ""
										.concat(n, "-")
										.concat(Te(ce + n + jt[n]));
									return t ? "".concat(t, "-").concat(r) : r;
							  })(n.displayName, n.parentComponentId)
							: c,
					d = n.displayName,
					p =
						void 0 === d
							? (function (e) {
									return Oe(e)
										? "styled.".concat(e)
										: "Styled(".concat(Pe(e), ")");
							  })(e)
							: d,
					h =
						n.displayName && n.componentId
							? ""
									.concat(we(n.displayName), "-")
									.concat(n.componentId)
							: n.componentId || f,
					m = o && l.attrs ? l.attrs.concat(u).filter(Boolean) : u,
					g = n.shouldForwardProp;
				if (o && l.shouldForwardProp) {
					var y = l.shouldForwardProp;
					if (n.shouldForwardProp) {
						var v = n.shouldForwardProp;
						g = function (e, t) {
							return y(e, t) && v(e, t);
						};
					} else g = y;
				}
				var b = new Ft(r, h, o ? l.componentStyle : void 0);
				function w(e, n) {
					return (function (e, n, r) {
						var o = e.attrs,
							l = e.componentStyle,
							i = e.defaultProps,
							s = e.foldedComponentIds,
							u = e.styledComponentId,
							c = e.target,
							f = t.useContext(It),
							d = _t(),
							p = e.shouldForwardProp || d.shouldForwardProp,
							h = ge(n, f, i) || me,
							m = (function (e, t, n) {
								for (
									var r,
										o = a(a({}, t), {
											className: void 0,
											theme: n,
										}),
										l = 0;
									l < e.length;
									l += 1
								) {
									var i = Ve((r = e[l])) ? r(o) : r;
									for (var s in i)
										o[s] =
											"className" === s
												? Ke(o[s], i[s])
												: "style" === s
												? a(a({}, o[s]), i[s])
												: i[s];
								}
								return (
									t.className &&
										(o.className = Ke(
											o.className,
											t.className
										)),
									o
								);
							})(o, n, h),
							g = m.as || c,
							y = {};
						for (var v in m)
							void 0 === m[v] ||
								"$" === v[0] ||
								"as" === v ||
								("theme" === v && m.theme === h) ||
								("forwardedAs" === v
									? (y.as = m.forwardedAs)
									: (p && !p(v, g)) || (y[v] = m[v]));
						var b = (function (e, t) {
								var n = _t();
								return e.generateAndInjectStyles(
									t,
									n.styleSheet,
									n.stylis
								);
							})(l, m),
							w = Ke(s, u);
						return (
							b && (w += " " + b),
							m.className && (w += " " + m.className),
							(y[Oe(g) && !ye.has(g) ? "class" : "className"] =
								w),
							r && (y.ref = r),
							(0, t.createElement)(g, y)
						);
					})(S, e, n);
				}
				w.displayName = p;
				var S = t.forwardRef(w);
				return (
					(S.attrs = m),
					(S.componentStyle = b),
					(S.displayName = p),
					(S.shouldForwardProp = g),
					(S.foldedComponentIds = o
						? Ke(l.foldedComponentIds, l.styledComponentId)
						: ""),
					(S.styledComponentId = h),
					(S.target = o ? l.target : e),
					Object.defineProperty(S, "defaultProps", {
						get: function () {
							return this._foldedDefaultProps;
						},
						set: function (e) {
							this._foldedDefaultProps = o
								? (function (e) {
										for (
											var t = [], n = 1;
											n < arguments.length;
											n++
										)
											t[n - 1] = arguments[n];
										for (
											var r = 0, a = t;
											r < a.length;
											r++
										)
											Ye(e, a[r], !0);
										return e;
								  })({}, l.defaultProps, e)
								: e;
						},
					}),
					Xe(S, function () {
						return ".".concat(S.styledComponentId);
					}),
					i &&
						We(S, e, {
							attrs: !0,
							componentStyle: !0,
							displayName: !0,
							foldedComponentIds: !0,
							shouldForwardProp: !0,
							styledComponentId: !0,
							target: !0,
						}),
					S
				);
			}
			function Mt(e, t) {
				for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
					n.push(t[r], e[r + 1]);
				return n;
			}
			var Bt = function (e) {
				return Object.assign(e, { isCss: !0 });
			};
			function Ht(e) {
				for (var t = [], n = 1; n < arguments.length; n++)
					t[n - 1] = arguments[n];
				if (Ve(e) || Ge(e)) return Bt(Lt(Mt(he, o([e], t, !0))));
				var r = e;
				return 0 === t.length &&
					1 === r.length &&
					"string" == typeof r[0]
					? Lt(r)
					: Bt(Lt(Mt(r, t)));
			}
			function $t(e, t, n) {
				if ((void 0 === n && (n = me), !t)) throw Je(1, t);
				var r = function (r) {
					for (var a = [], l = 1; l < arguments.length; l++)
						a[l - 1] = arguments[l];
					return e(t, n, Ht.apply(void 0, o([r], a, !1)));
				};
				return (
					(r.attrs = function (r) {
						return $t(
							e,
							t,
							a(a({}, n), {
								attrs: Array.prototype
									.concat(n.attrs, r)
									.filter(Boolean),
							})
						);
					}),
					(r.withConfig = function (r) {
						return $t(e, t, a(a({}, n), r));
					}),
					r
				);
			}
			var Wt = function (e) {
					return $t(Ut, e);
				},
				Vt = Wt;
			ye.forEach(function (e) {
				Vt[e] = Wt(e);
			});
			!(function () {
				function e(e, t) {
					(this.rules = e),
						(this.componentId = t),
						(this.isStatic = zt(e)),
						yt.registerId(this.componentId + 1);
				}
				(e.prototype.createStyles = function (e, t, n, r) {
					var a = r(Qe(Lt(this.rules, t, n, r)), ""),
						o = this.componentId + e;
					n.insertRules(o, o, a);
				}),
					(e.prototype.removeStyles = function (e, t) {
						t.clearRules(this.componentId + e);
					}),
					(e.prototype.renderStyles = function (e, t, n, r) {
						e > 2 && yt.registerId(this.componentId + e),
							this.removeStyles(e, n),
							this.createStyles(e, t, n, r);
					});
			})();
			(function () {
				function e() {
					var e = this;
					(this._emitSheetCSS = function () {
						var t = e.instance.toString();
						if (!t) return "";
						var n = ct(),
							r = Qe(
								[
									n && 'nonce="'.concat(n, '"'),
									"".concat(ie, '="true"'),
									"".concat(ue, '="').concat(ce, '"'),
								].filter(Boolean),
								" "
							);
						return "<style ".concat(r, ">").concat(t, "</style>");
					}),
						(this.getStyleTags = function () {
							if (e.sealed) throw Je(2);
							return e._emitSheetCSS();
						}),
						(this.getStyleElement = function () {
							var n;
							if (e.sealed) throw Je(2);
							var r = e.instance.toString();
							if (!r) return [];
							var o =
									(((n = {})[ie] = ""),
									(n[ue] = ce),
									(n.dangerouslySetInnerHTML = { __html: r }),
									n),
								l = ct();
							return (
								l && (o.nonce = l),
								[
									t.createElement(
										"style",
										a({}, o, { key: "sc-0-0" })
									),
								]
							);
						}),
						(this.seal = function () {
							e.sealed = !0;
						}),
						(this.instance = new yt({ isServer: !0 })),
						(this.sealed = !1);
				}
				(e.prototype.collectStyles = function (e) {
					if (this.sealed) throw Je(2);
					return t.createElement(Tt, { sheet: this.instance }, e);
				}),
					(e.prototype.interleaveWithNodeStream = function (e) {
						throw Je(3);
					});
			})(),
				"__sc-".concat(ie, "__");
			const qt = Vt.div`
  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 900; /* Black */
    src: url('/fonts/unbounded/Unbounded-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 700; /* Bold */
    src: url('/fonts/unbounded/Unbounded-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 800; /* ExtraBold */
    src: url('/fonts/unbounded/Unbounded-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 200; /* ExtraLight */
    src: url('/fonts/unbounded/Unbounded-ExtraLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 300; /* Light */
    src: url('/fonts/unbounded/Unbounded-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 500; /* Medium */
    src: url('/fonts/unbounded/Unbounded-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 400; /* Regular */
    src: url('/fonts/unbounded/Unbounded-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900; /* Black */
    src: url('/fonts/inter/Inter_18pt-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900; /* Black Italic */
    src: url('/fonts/inter/Inter_18pt-BlackItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700; /* Bold */
    src: url('/fonts/inter/Inter_18pt-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700; /* Bold Italic */
    src: url('/fonts/inter/Inter_18pt-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800; /* ExtraBold */
    src: url('/fonts/inter/Inter_18pt-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800; /* ExtraBold Italic */
    src: url('/fonts/inter/Inter_18pt-ExtraBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200; /* ExtraLight */
    src: url('/fonts/inter/Inter_18pt-ExtraLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200; /* ExtraLight Italic */
    src: url('/fonts/inter/Inter_18pt-ExtraLightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400; /* Italic */
    src: url('/fonts/inter/Inter_18pt-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300; /* Light */
    src: url('/fonts/inter/Inter_18pt-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300; /* Light Italic */
    src: url('/fonts/inter/Inter_18pt-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500; /* Medium */
    src: url('/fonts/inter/Inter_18pt-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500; /* Medium Italic */
    src: url('/fonts/inter/Inter_18pt-MediumItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400; /* Regular */
    src: url('/fonts/inter/Inter_18pt-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600; /* SemiBold */
    src: url('/fonts/inter/Inter_18pt-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600; /* SemiBold Italic */
    src: url('/fonts/inter/Inter_18pt-SemiBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100; /* Thin */
    src: url('/fonts/inter/Inter_18pt-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100; /* Thin Italic */
    src: url('/fonts/inter/Inter_18pt-ThinItalic.ttf') format('truetype');
  }
`,
				Kt = Vt.div`
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  max-width: 100vw;

  font-feature-settings: 'calt' 0, 'ss01' 0, 'ss02' 0, 'salt' 0;

  transition: all 200ms;

  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(19, 19, 19, 0.3);
  }
  .overlay2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      75% 64% at 50% 50%,
      #13131300 17.56756756756757%,
      #131313
    );
  }

  .content {
    padding: 20px;
    position: relative;
    z-index: 2;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
	margin-bottom: 20px;
    gap: 16px;
    animation: fadeUp 2s ease-out forwards;

    .logo1 {
      width: fit-content;
      background-color: rgb(11, 14, 24);
      border-radius: 16px;
      box-shadow: rgba(74, 251, 57, 0.392) 0px 0.706592px 0.706592px -0.666667px,
        rgba(74, 251, 57, 0.38) 0px 1.80656px 1.80656px -1.33333px,
        rgba(74, 251, 57, 0.365) 0px 3.62176px 3.62176px -2px,
        rgba(74, 251, 57, 0.33) 0px 6.8656px 6.8656px -2.66667px,
        rgba(74, 251, 57, 0.263) 0px 13.6468px 13.6468px -3.33333px,
        rgba(74, 251, 57, 0.1) 0px 30px 30px -4px;
      height: 80px;
      width: 80px;
      opacity: 1;
      padding: 10px;
    }

    .logo2 {
      background-color: rgb(11, 14, 24);
      border-radius: 10px;
      box-shadow: rgba(74, 251, 57, 0.48) 0px 0.796192px 0.796192px -0.875px,
        rgba(74, 251, 57, 0.455) 0px 2.41451px 2.41451px -1.75px,
        rgba(74, 251, 57, 0.4) 0px 6.38265px 6.38265px -2.625px,
        rgba(74, 251, 57, 0.21) 0px 20px 20px -3.5px;
      opacity: 1;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 44px;
      height: 44px;
      object-fit: contain;
    }
  }

  h1 {
    font-size: 72px;
    font-weight: 500;
    margin-top: 20px;
    font-family: 'Unbounded';
    background-image: radial-gradient(
      99% 86% at 50% 50%,
      rgb(74, 251, 57) 28.387387387387385%,
      var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13)) 100%
    );
    display: inline-block;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 38px;
      font-weight: 400;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }

  .launch-app {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    opacity: 1;
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    height: min-content;
    justify-content: center;
    overflow: visible;
    padding: 2px;
    position: relative;
    text-decoration: none;
    width: 144px;
    height: 48px;
    &:hover {
      .launch-app-overlay {
        animation: gradient 3s ease infinite;
      }
    }

    .launch-app-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      opacity: 1;
      transition: transform 0.3s ease;
      background: radial-gradient(
        20.7% 50% at 50% 100%,
        rgb(74, 251, 57) 0%,
        rgba(74, 251, 57, 0) 100%
      );
      background-size: 200% 200%;

      z-index: -1;

      @keyframes gradient {
        0% {
          background-position: 0% 30%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }

    .launch-app-text {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 500;
      background-color: var(
        --token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7,
        rgb(0, 0, 0)
      );
      border-radius: 8px;
    }
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 15px;
      border-radius: 20px;
      background-color: rgba(12, 12, 13, 0.4);
      border-color: 1c1e20;
      border-top: 1px solid #1c1e20;
      gap: 24px;

      .title {
        font-family: 'Inter';
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
      }

      .value {
        opacity: 0.5;
        font-family: 'Inter';
        font-size: 48px;
        font-weight: 500;
        background-image: linear-gradient(
          498deg,
          rgb(255, 255, 255) 0%,
          rgba(255, 255, 255, 0.5) 100%
        );
        display: inline-block;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`,
				Qt = Vt.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 0;
  background: rgb(19, 19, 19);
  max-width: 100vw;

  .content-footer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;

    max-width: 1200px;
    margin: 0 auto;

    .logo1 {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      img {
        width: 32px;
        height: 32px;
      }

      .logo-type {
        font-family: 'Unbounded';
        font-size: 18px;
        font-weight: 500;
        color: rgb(74, 251, 57);
      }
    }

    .links {
      display: flex;
      padding: 0 20px;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 24px;
      gap: 16px;
      border-bottom: 1px solid rgba(216, 231, 242, 0.07);
      width: -webkit-fill-available;
      a {
        text-decoration: none;
        transition: all 200ms;
        color: rgb(213, 219, 230);
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;

        &:hover {
          color: #757575;
          text-decoration: underline;
        }
      }
    }

    .copyright {
      padding: 0 20px;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      color: rgb(213, 219, 230);
    }
  }
`;
			function Gt(e, t) {
				return function () {
					return e.apply(t, arguments);
				};
			}
			const { toString: Yt } = Object.prototype,
				{ getPrototypeOf: Xt } = Object,
				{ iterator: Jt, toStringTag: Zt } = Symbol,
				en =
					((tn = Object.create(null)),
					(e) => {
						const t = Yt.call(e);
						return tn[t] || (tn[t] = t.slice(8, -1).toLowerCase());
					});
			var tn;
			const nn = (e) => ((e = e.toLowerCase()), (t) => en(t) === e),
				rn = (e) => (t) => typeof t === e,
				{ isArray: an } = Array,
				on = rn("undefined");
			const ln = nn("ArrayBuffer");
			const sn = rn("string"),
				un = rn("function"),
				cn = rn("number"),
				fn = (e) => null !== e && "object" === typeof e,
				dn = (e) => {
					if ("object" !== en(e)) return !1;
					const t = Xt(e);
					return (
						(null === t ||
							t === Object.prototype ||
							null === Object.getPrototypeOf(t)) &&
						!(Zt in e) &&
						!(Jt in e)
					);
				},
				pn = nn("Date"),
				hn = nn("File"),
				mn = nn("Blob"),
				gn = nn("FileList"),
				yn = nn("URLSearchParams"),
				[vn, bn, wn, Sn] = [
					"ReadableStream",
					"Request",
					"Response",
					"Headers",
				].map(nn);
			function kn(e, t) {
				let n,
					r,
					{ allOwnKeys: a = !1 } =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {};
				if (null !== e && "undefined" !== typeof e)
					if (("object" !== typeof e && (e = [e]), an(e)))
						for (n = 0, r = e.length; n < r; n++)
							t.call(null, e[n], n, e);
					else {
						const r = a
								? Object.getOwnPropertyNames(e)
								: Object.keys(e),
							o = r.length;
						let l;
						for (n = 0; n < o; n++)
							(l = r[n]), t.call(null, e[l], l, e);
					}
			}
			function En(e, t) {
				t = t.toLowerCase();
				const n = Object.keys(e);
				let r,
					a = n.length;
				for (; a-- > 0; )
					if (((r = n[a]), t === r.toLowerCase())) return r;
				return null;
			}
			const xn =
					"undefined" !== typeof globalThis
						? globalThis
						: "undefined" !== typeof self
						? self
						: "undefined" !== typeof window
						? window
						: global,
				Cn = (e) => !on(e) && e !== xn;
			const _n =
				((Tn = "undefined" !== typeof Uint8Array && Xt(Uint8Array)),
				(e) => Tn && e instanceof Tn);
			var Tn;
			const Pn = nn("HTMLFormElement"),
				On = ((e) => {
					let { hasOwnProperty: t } = e;
					return (e, n) => t.call(e, n);
				})(Object.prototype),
				Nn = nn("RegExp"),
				Rn = (e, t) => {
					const n = Object.getOwnPropertyDescriptors(e),
						r = {};
					kn(n, (n, a) => {
						let o;
						!1 !== (o = t(n, a, e)) && (r[a] = o || n);
					}),
						Object.defineProperties(e, r);
				};
			const An = nn("AsyncFunction"),
				Ln =
					((zn = "function" === typeof setImmediate),
					(Dn = un(xn.postMessage)),
					zn
						? setImmediate
						: Dn
						? ((e, t) => (
								xn.addEventListener(
									"message",
									(n) => {
										let { source: r, data: a } = n;
										r === xn &&
											a === e &&
											t.length &&
											t.shift()();
									},
									!1
								),
								(n) => {
									t.push(n), xn.postMessage(e, "*");
								}
						  ))(`axios@${Math.random()}`, [])
						: (e) => setTimeout(e));
			var zn, Dn;
			const Fn =
					"undefined" !== typeof queueMicrotask
						? queueMicrotask.bind(xn)
						: ("undefined" !== typeof process &&
								process.nextTick) ||
						  Ln,
				In = {
					isArray: an,
					isArrayBuffer: ln,
					isBuffer: function (e) {
						return (
							null !== e &&
							!on(e) &&
							null !== e.constructor &&
							!on(e.constructor) &&
							un(e.constructor.isBuffer) &&
							e.constructor.isBuffer(e)
						);
					},
					isFormData: (e) => {
						let t;
						return (
							e &&
							(("function" === typeof FormData &&
								e instanceof FormData) ||
								(un(e.append) &&
									("formdata" === (t = en(e)) ||
										("object" === t &&
											un(e.toString) &&
											"[object FormData]" ===
												e.toString()))))
						);
					},
					isArrayBufferView: function (e) {
						let t;
						return (
							(t =
								"undefined" !== typeof ArrayBuffer &&
								ArrayBuffer.isView
									? ArrayBuffer.isView(e)
									: e && e.buffer && ln(e.buffer)),
							t
						);
					},
					isString: sn,
					isNumber: cn,
					isBoolean: (e) => !0 === e || !1 === e,
					isObject: fn,
					isPlainObject: dn,
					isReadableStream: vn,
					isRequest: bn,
					isResponse: wn,
					isHeaders: Sn,
					isUndefined: on,
					isDate: pn,
					isFile: hn,
					isBlob: mn,
					isRegExp: Nn,
					isFunction: un,
					isStream: (e) => fn(e) && un(e.pipe),
					isURLSearchParams: yn,
					isTypedArray: _n,
					isFileList: gn,
					forEach: kn,
					merge: function e() {
						const { caseless: t } = (Cn(this) && this) || {},
							n = {},
							r = (r, a) => {
								const o = (t && En(n, a)) || a;
								dn(n[o]) && dn(r)
									? (n[o] = e(n[o], r))
									: dn(r)
									? (n[o] = e({}, r))
									: an(r)
									? (n[o] = r.slice())
									: (n[o] = r);
							};
						for (let a = 0, o = arguments.length; a < o; a++)
							arguments[a] && kn(arguments[a], r);
						return n;
					},
					extend: function (e, t, n) {
						let { allOwnKeys: r } =
							arguments.length > 3 && void 0 !== arguments[3]
								? arguments[3]
								: {};
						return (
							kn(
								t,
								(t, r) => {
									n && un(t) ? (e[r] = Gt(t, n)) : (e[r] = t);
								},
								{ allOwnKeys: r }
							),
							e
						);
					},
					trim: (e) =>
						e.trim
							? e.trim()
							: e.replace(
									/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
									""
							  ),
					stripBOM: (e) => (
						65279 === e.charCodeAt(0) && (e = e.slice(1)), e
					),
					inherits: (e, t, n, r) => {
						(e.prototype = Object.create(t.prototype, r)),
							(e.prototype.constructor = e),
							Object.defineProperty(e, "super", {
								value: t.prototype,
							}),
							n && Object.assign(e.prototype, n);
					},
					toFlatObject: (e, t, n, r) => {
						let a, o, l;
						const i = {};
						if (((t = t || {}), null == e)) return t;
						do {
							for (
								a = Object.getOwnPropertyNames(e), o = a.length;
								o-- > 0;

							)
								(l = a[o]),
									(r && !r(l, e, t)) ||
										i[l] ||
										((t[l] = e[l]), (i[l] = !0));
							e = !1 !== n && Xt(e);
						} while (
							e &&
							(!n || n(e, t)) &&
							e !== Object.prototype
						);
						return t;
					},
					kindOf: en,
					kindOfTest: nn,
					endsWith: (e, t, n) => {
						(e = String(e)),
							(void 0 === n || n > e.length) && (n = e.length),
							(n -= t.length);
						const r = e.indexOf(t, n);
						return -1 !== r && r === n;
					},
					toArray: (e) => {
						if (!e) return null;
						if (an(e)) return e;
						let t = e.length;
						if (!cn(t)) return null;
						const n = new Array(t);
						for (; t-- > 0; ) n[t] = e[t];
						return n;
					},
					forEachEntry: (e, t) => {
						const n = (e && e[Jt]).call(e);
						let r;
						for (; (r = n.next()) && !r.done; ) {
							const n = r.value;
							t.call(e, n[0], n[1]);
						}
					},
					matchAll: (e, t) => {
						let n;
						const r = [];
						for (; null !== (n = e.exec(t)); ) r.push(n);
						return r;
					},
					isHTMLForm: Pn,
					hasOwnProperty: On,
					hasOwnProp: On,
					reduceDescriptors: Rn,
					freezeMethods: (e) => {
						Rn(e, (t, n) => {
							if (
								un(e) &&
								-1 !==
									["arguments", "caller", "callee"].indexOf(n)
							)
								return !1;
							const r = e[n];
							un(r) &&
								((t.enumerable = !1),
								"writable" in t
									? (t.writable = !1)
									: t.set ||
									  (t.set = () => {
											throw Error(
												"Can not rewrite read-only method '" +
													n +
													"'"
											);
									  }));
						});
					},
					toObjectSet: (e, t) => {
						const n = {},
							r = (e) => {
								e.forEach((e) => {
									n[e] = !0;
								});
							};
						return an(e) ? r(e) : r(String(e).split(t)), n;
					},
					toCamelCase: (e) =>
						e
							.toLowerCase()
							.replace(
								/[-_\s]([a-z\d])(\w*)/g,
								function (e, t, n) {
									return t.toUpperCase() + n;
								}
							),
					noop: () => {},
					toFiniteNumber: (e, t) =>
						null != e && Number.isFinite((e = +e)) ? e : t,
					findKey: En,
					global: xn,
					isContextDefined: Cn,
					isSpecCompliantForm: function (e) {
						return !!(
							e &&
							un(e.append) &&
							"FormData" === e[Zt] &&
							e[Jt]
						);
					},
					toJSONObject: (e) => {
						const t = new Array(10),
							n = (e, r) => {
								if (fn(e)) {
									if (t.indexOf(e) >= 0) return;
									if (!("toJSON" in e)) {
										t[r] = e;
										const a = an(e) ? [] : {};
										return (
											kn(e, (e, t) => {
												const o = n(e, r + 1);
												!on(o) && (a[t] = o);
											}),
											(t[r] = void 0),
											a
										);
									}
								}
								return e;
							};
						return n(e, 0);
					},
					isAsyncFn: An,
					isThenable: (e) =>
						e && (fn(e) || un(e)) && un(e.then) && un(e.catch),
					setImmediate: Ln,
					asap: Fn,
					isIterable: (e) => null != e && un(e[Jt]),
				};
			function jn(e, t, n, r, a) {
				Error.call(this),
					Error.captureStackTrace
						? Error.captureStackTrace(this, this.constructor)
						: (this.stack = new Error().stack),
					(this.message = e),
					(this.name = "AxiosError"),
					t && (this.code = t),
					n && (this.config = n),
					r && (this.request = r),
					a &&
						((this.response = a),
						(this.status = a.status ? a.status : null));
			}
			In.inherits(jn, Error, {
				toJSON: function () {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: In.toJSONObject(this.config),
						code: this.code,
						status: this.status,
					};
				},
			});
			const Un = jn.prototype,
				Mn = {};
			[
				"ERR_BAD_OPTION_VALUE",
				"ERR_BAD_OPTION",
				"ECONNABORTED",
				"ETIMEDOUT",
				"ERR_NETWORK",
				"ERR_FR_TOO_MANY_REDIRECTS",
				"ERR_DEPRECATED",
				"ERR_BAD_RESPONSE",
				"ERR_BAD_REQUEST",
				"ERR_CANCELED",
				"ERR_NOT_SUPPORT",
				"ERR_INVALID_URL",
			].forEach((e) => {
				Mn[e] = { value: e };
			}),
				Object.defineProperties(jn, Mn),
				Object.defineProperty(Un, "isAxiosError", { value: !0 }),
				(jn.from = (e, t, n, r, a, o) => {
					const l = Object.create(Un);
					return (
						In.toFlatObject(
							e,
							l,
							function (e) {
								return e !== Error.prototype;
							},
							(e) => "isAxiosError" !== e
						),
						jn.call(l, e.message, t, n, r, a),
						(l.cause = e),
						(l.name = e.name),
						o && Object.assign(l, o),
						l
					);
				});
			const Bn = jn;
			function Hn(e) {
				return In.isPlainObject(e) || In.isArray(e);
			}
			function $n(e) {
				return In.endsWith(e, "[]") ? e.slice(0, -2) : e;
			}
			function Wn(e, t, n) {
				return e
					? e
							.concat(t)
							.map(function (e, t) {
								return (e = $n(e)), !n && t ? "[" + e + "]" : e;
							})
							.join(n ? "." : "")
					: t;
			}
			const Vn = In.toFlatObject(In, {}, null, function (e) {
				return /^is[A-Z]/.test(e);
			});
			const qn = function (e, t, n) {
				if (!In.isObject(e))
					throw new TypeError("target must be an object");
				t = t || new FormData();
				const r = (n = In.toFlatObject(
						n,
						{ metaTokens: !0, dots: !1, indexes: !1 },
						!1,
						function (e, t) {
							return !In.isUndefined(t[e]);
						}
					)).metaTokens,
					a = n.visitor || u,
					o = n.dots,
					l = n.indexes,
					i =
						(n.Blob || ("undefined" !== typeof Blob && Blob)) &&
						In.isSpecCompliantForm(t);
				if (!In.isFunction(a))
					throw new TypeError("visitor must be a function");
				function s(e) {
					if (null === e) return "";
					if (In.isDate(e)) return e.toISOString();
					if (!i && In.isBlob(e))
						throw new Bn(
							"Blob is not supported. Use a Buffer instead."
						);
					return In.isArrayBuffer(e) || In.isTypedArray(e)
						? i && "function" === typeof Blob
							? new Blob([e])
							: Buffer.from(e)
						: e;
				}
				function u(e, n, a) {
					let i = e;
					if (e && !a && "object" === typeof e)
						if (In.endsWith(n, "{}"))
							(n = r ? n : n.slice(0, -2)),
								(e = JSON.stringify(e));
						else if (
							(In.isArray(e) &&
								(function (e) {
									return In.isArray(e) && !e.some(Hn);
								})(e)) ||
							((In.isFileList(e) || In.endsWith(n, "[]")) &&
								(i = In.toArray(e)))
						)
							return (
								(n = $n(n)),
								i.forEach(function (e, r) {
									!In.isUndefined(e) &&
										null !== e &&
										t.append(
											!0 === l
												? Wn([n], r, o)
												: null === l
												? n
												: n + "[]",
											s(e)
										);
								}),
								!1
							);
					return !!Hn(e) || (t.append(Wn(a, n, o), s(e)), !1);
				}
				const c = [],
					f = Object.assign(Vn, {
						defaultVisitor: u,
						convertValue: s,
						isVisitable: Hn,
					});
				if (!In.isObject(e))
					throw new TypeError("data must be an object");
				return (
					(function e(n, r) {
						if (!In.isUndefined(n)) {
							if (-1 !== c.indexOf(n))
								throw Error(
									"Circular reference detected in " +
										r.join(".")
								);
							c.push(n),
								In.forEach(n, function (n, o) {
									!0 ===
										(!(In.isUndefined(n) || null === n) &&
											a.call(
												t,
												n,
												In.isString(o) ? o.trim() : o,
												r,
												f
											)) && e(n, r ? r.concat(o) : [o]);
								}),
								c.pop();
						}
					})(e),
					t
				);
			};
			function Kn(e) {
				const t = {
					"!": "%21",
					"'": "%27",
					"(": "%28",
					")": "%29",
					"~": "%7E",
					"%20": "+",
					"%00": "\0",
				};
				return encodeURIComponent(e).replace(
					/[!'()~]|%20|%00/g,
					function (e) {
						return t[e];
					}
				);
			}
			function Qn(e, t) {
				(this._pairs = []), e && qn(e, this, t);
			}
			const Gn = Qn.prototype;
			(Gn.append = function (e, t) {
				this._pairs.push([e, t]);
			}),
				(Gn.toString = function (e) {
					const t = e
						? function (t) {
								return e.call(this, t, Kn);
						  }
						: Kn;
					return this._pairs
						.map(function (e) {
							return t(e[0]) + "=" + t(e[1]);
						}, "")
						.join("&");
				});
			const Yn = Qn;
			function Xn(e) {
				return encodeURIComponent(e)
					.replace(/%3A/gi, ":")
					.replace(/%24/g, "$")
					.replace(/%2C/gi, ",")
					.replace(/%20/g, "+")
					.replace(/%5B/gi, "[")
					.replace(/%5D/gi, "]");
			}
			function Jn(e, t, n) {
				if (!t) return e;
				const r = (n && n.encode) || Xn;
				In.isFunction(n) && (n = { serialize: n });
				const a = n && n.serialize;
				let o;
				if (
					((o = a
						? a(t, n)
						: In.isURLSearchParams(t)
						? t.toString()
						: new Yn(t, n).toString(r)),
					o)
				) {
					const t = e.indexOf("#");
					-1 !== t && (e = e.slice(0, t)),
						(e += (-1 === e.indexOf("?") ? "?" : "&") + o);
				}
				return e;
			}
			const Zn = class {
					constructor() {
						this.handlers = [];
					}
					use(e, t, n) {
						return (
							this.handlers.push({
								fulfilled: e,
								rejected: t,
								synchronous: !!n && n.synchronous,
								runWhen: n ? n.runWhen : null,
							}),
							this.handlers.length - 1
						);
					}
					eject(e) {
						this.handlers[e] && (this.handlers[e] = null);
					}
					clear() {
						this.handlers && (this.handlers = []);
					}
					forEach(e) {
						In.forEach(this.handlers, function (t) {
							null !== t && e(t);
						});
					}
				},
				er = {
					silentJSONParsing: !0,
					forcedJSONParsing: !0,
					clarifyTimeoutError: !1,
				},
				tr = {
					isBrowser: !0,
					classes: {
						URLSearchParams:
							"undefined" !== typeof URLSearchParams
								? URLSearchParams
								: Yn,
						FormData:
							"undefined" !== typeof FormData ? FormData : null,
						Blob: "undefined" !== typeof Blob ? Blob : null,
					},
					protocols: ["http", "https", "file", "blob", "url", "data"],
				},
				nr =
					"undefined" !== typeof window &&
					"undefined" !== typeof document,
				rr = ("object" === typeof navigator && navigator) || void 0,
				ar =
					nr &&
					(!rr ||
						["ReactNative", "NativeScript", "NS"].indexOf(
							rr.product
						) < 0),
				or =
					"undefined" !== typeof WorkerGlobalScope &&
					self instanceof WorkerGlobalScope &&
					"function" === typeof self.importScripts,
				lr = (nr && window.location.href) || "http://localhost",
				ir = { ...e, ...tr };
			const sr = function (e) {
				function t(e, n, r, a) {
					let o = e[a++];
					if ("__proto__" === o) return !0;
					const l = Number.isFinite(+o),
						i = a >= e.length;
					if (((o = !o && In.isArray(r) ? r.length : o), i))
						return (
							In.hasOwnProp(r, o)
								? (r[o] = [r[o], n])
								: (r[o] = n),
							!l
						);
					(r[o] && In.isObject(r[o])) || (r[o] = []);
					return (
						t(e, n, r[o], a) &&
							In.isArray(r[o]) &&
							(r[o] = (function (e) {
								const t = {},
									n = Object.keys(e);
								let r;
								const a = n.length;
								let o;
								for (r = 0; r < a; r++)
									(o = n[r]), (t[o] = e[o]);
								return t;
							})(r[o])),
						!l
					);
				}
				if (In.isFormData(e) && In.isFunction(e.entries)) {
					const n = {};
					return (
						In.forEachEntry(e, (e, r) => {
							t(
								(function (e) {
									return In.matchAll(/\w+|\[(\w*)]/g, e).map(
										(e) =>
											"[]" === e[0] ? "" : e[1] || e[0]
									);
								})(e),
								r,
								n,
								0
							);
						}),
						n
					);
				}
				return null;
			};
			const ur = {
				transitional: er,
				adapter: ["xhr", "http", "fetch"],
				transformRequest: [
					function (e, t) {
						const n = t.getContentType() || "",
							r = n.indexOf("application/json") > -1,
							a = In.isObject(e);
						a && In.isHTMLForm(e) && (e = new FormData(e));
						if (In.isFormData(e))
							return r ? JSON.stringify(sr(e)) : e;
						if (
							In.isArrayBuffer(e) ||
							In.isBuffer(e) ||
							In.isStream(e) ||
							In.isFile(e) ||
							In.isBlob(e) ||
							In.isReadableStream(e)
						)
							return e;
						if (In.isArrayBufferView(e)) return e.buffer;
						if (In.isURLSearchParams(e))
							return (
								t.setContentType(
									"application/x-www-form-urlencoded;charset=utf-8",
									!1
								),
								e.toString()
							);
						let o;
						if (a) {
							if (
								n.indexOf("application/x-www-form-urlencoded") >
								-1
							)
								return (function (e, t) {
									return qn(
										e,
										new ir.classes.URLSearchParams(),
										Object.assign(
											{
												visitor: function (e, t, n, r) {
													return ir.isNode &&
														In.isBuffer(e)
														? (this.append(
																t,
																e.toString(
																	"base64"
																)
														  ),
														  !1)
														: r.defaultVisitor.apply(
																this,
																arguments
														  );
												},
											},
											t
										)
									);
								})(e, this.formSerializer).toString();
							if (
								(o = In.isFileList(e)) ||
								n.indexOf("multipart/form-data") > -1
							) {
								const t = this.env && this.env.FormData;
								return qn(
									o ? { "files[]": e } : e,
									t && new t(),
									this.formSerializer
								);
							}
						}
						return a || r
							? (t.setContentType("application/json", !1),
							  (function (e, t, n) {
									if (In.isString(e))
										try {
											return (
												(t || JSON.parse)(e), In.trim(e)
											);
										} catch (r) {
											if ("SyntaxError" !== r.name)
												throw r;
										}
									return (n || JSON.stringify)(e);
							  })(e))
							: e;
					},
				],
				transformResponse: [
					function (e) {
						const t = this.transitional || ur.transitional,
							n = t && t.forcedJSONParsing,
							r = "json" === this.responseType;
						if (In.isResponse(e) || In.isReadableStream(e))
							return e;
						if (
							e &&
							In.isString(e) &&
							((n && !this.responseType) || r)
						) {
							const n = !(t && t.silentJSONParsing) && r;
							try {
								return JSON.parse(e);
							} catch (a) {
								if (n) {
									if ("SyntaxError" === a.name)
										throw Bn.from(
											a,
											Bn.ERR_BAD_RESPONSE,
											this,
											null,
											this.response
										);
									throw a;
								}
							}
						}
						return e;
					},
				],
				timeout: 0,
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				maxContentLength: -1,
				maxBodyLength: -1,
				env: { FormData: ir.classes.FormData, Blob: ir.classes.Blob },
				validateStatus: function (e) {
					return e >= 200 && e < 300;
				},
				headers: {
					common: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": void 0,
					},
				},
			};
			In.forEach(
				["delete", "get", "head", "post", "put", "patch"],
				(e) => {
					ur.headers[e] = {};
				}
			);
			const cr = ur,
				fr = In.toObjectSet([
					"age",
					"authorization",
					"content-length",
					"content-type",
					"etag",
					"expires",
					"from",
					"host",
					"if-modified-since",
					"if-unmodified-since",
					"last-modified",
					"location",
					"max-forwards",
					"proxy-authorization",
					"referer",
					"retry-after",
					"user-agent",
				]),
				dr = Symbol("internals");
			function pr(e) {
				return e && String(e).trim().toLowerCase();
			}
			function hr(e) {
				return !1 === e || null == e
					? e
					: In.isArray(e)
					? e.map(hr)
					: String(e);
			}
			function mr(e, t, n, r, a) {
				return In.isFunction(r)
					? r.call(this, t, n)
					: (a && (t = n),
					  In.isString(t)
							? In.isString(r)
								? -1 !== t.indexOf(r)
								: In.isRegExp(r)
								? r.test(t)
								: void 0
							: void 0);
			}
			class gr {
				constructor(e) {
					e && this.set(e);
				}
				set(e, t, n) {
					const r = this;
					function a(e, t, n) {
						const a = pr(t);
						if (!a)
							throw new Error(
								"header name must be a non-empty string"
							);
						const o = In.findKey(r, a);
						(!o ||
							void 0 === r[o] ||
							!0 === n ||
							(void 0 === n && !1 !== r[o])) &&
							(r[o || t] = hr(e));
					}
					const o = (e, t) => In.forEach(e, (e, n) => a(e, n, t));
					if (In.isPlainObject(e) || e instanceof this.constructor)
						o(e, t);
					else if (
						In.isString(e) &&
						(e = e.trim()) &&
						!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
					)
						o(
							((e) => {
								const t = {};
								let n, r, a;
								return (
									e &&
										e.split("\n").forEach(function (e) {
											(a = e.indexOf(":")),
												(n = e
													.substring(0, a)
													.trim()
													.toLowerCase()),
												(r = e.substring(a + 1).trim()),
												!n ||
													(t[n] && fr[n]) ||
													("set-cookie" === n
														? t[n]
															? t[n].push(r)
															: (t[n] = [r])
														: (t[n] = t[n]
																? t[n] +
																  ", " +
																  r
																: r));
										}),
									t
								);
							})(e),
							t
						);
					else if (In.isObject(e) && In.isIterable(e)) {
						let n,
							r,
							a = {};
						for (const t of e) {
							if (!In.isArray(t))
								throw TypeError(
									"Object iterator must return a key-value pair"
								);
							a[(r = t[0])] = (n = a[r])
								? In.isArray(n)
									? [...n, t[1]]
									: [n, t[1]]
								: t[1];
						}
						o(a, t);
					} else null != e && a(t, e, n);
					return this;
				}
				get(e, t) {
					if ((e = pr(e))) {
						const n = In.findKey(this, e);
						if (n) {
							const e = this[n];
							if (!t) return e;
							if (!0 === t)
								return (function (e) {
									const t = Object.create(null),
										n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
									let r;
									for (; (r = n.exec(e)); ) t[r[1]] = r[2];
									return t;
								})(e);
							if (In.isFunction(t)) return t.call(this, e, n);
							if (In.isRegExp(t)) return t.exec(e);
							throw new TypeError(
								"parser must be boolean|regexp|function"
							);
						}
					}
				}
				has(e, t) {
					if ((e = pr(e))) {
						const n = In.findKey(this, e);
						return !(
							!n ||
							void 0 === this[n] ||
							(t && !mr(0, this[n], n, t))
						);
					}
					return !1;
				}
				delete(e, t) {
					const n = this;
					let r = !1;
					function a(e) {
						if ((e = pr(e))) {
							const a = In.findKey(n, e);
							!a ||
								(t && !mr(0, n[a], a, t)) ||
								(delete n[a], (r = !0));
						}
					}
					return In.isArray(e) ? e.forEach(a) : a(e), r;
				}
				clear(e) {
					const t = Object.keys(this);
					let n = t.length,
						r = !1;
					for (; n--; ) {
						const a = t[n];
						(e && !mr(0, this[a], a, e, !0)) ||
							(delete this[a], (r = !0));
					}
					return r;
				}
				normalize(e) {
					const t = this,
						n = {};
					return (
						In.forEach(this, (r, a) => {
							const o = In.findKey(n, a);
							if (o) return (t[o] = hr(r)), void delete t[a];
							const l = e
								? (function (e) {
										return e
											.trim()
											.toLowerCase()
											.replace(
												/([a-z\d])(\w*)/g,
												(e, t, n) => t.toUpperCase() + n
											);
								  })(a)
								: String(a).trim();
							l !== a && delete t[a], (t[l] = hr(r)), (n[l] = !0);
						}),
						this
					);
				}
				concat() {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					return this.constructor.concat(this, ...t);
				}
				toJSON(e) {
					const t = Object.create(null);
					return (
						In.forEach(this, (n, r) => {
							null != n &&
								!1 !== n &&
								(t[r] = e && In.isArray(n) ? n.join(", ") : n);
						}),
						t
					);
				}
				[Symbol.iterator]() {
					return Object.entries(this.toJSON())[Symbol.iterator]();
				}
				toString() {
					return Object.entries(this.toJSON())
						.map((e) => {
							let [t, n] = e;
							return t + ": " + n;
						})
						.join("\n");
				}
				getSetCookie() {
					return this.get("set-cookie") || [];
				}
				get [Symbol.toStringTag]() {
					return "AxiosHeaders";
				}
				static from(e) {
					return e instanceof this ? e : new this(e);
				}
				static concat(e) {
					const t = new this(e);
					for (
						var n = arguments.length,
							r = new Array(n > 1 ? n - 1 : 0),
							a = 1;
						a < n;
						a++
					)
						r[a - 1] = arguments[a];
					return r.forEach((e) => t.set(e)), t;
				}
				static accessor(e) {
					const t = (this[dr] = this[dr] = { accessors: {} })
							.accessors,
						n = this.prototype;
					function r(e) {
						const r = pr(e);
						t[r] ||
							(!(function (e, t) {
								const n = In.toCamelCase(" " + t);
								["get", "set", "has"].forEach((r) => {
									Object.defineProperty(e, r + n, {
										value: function (e, n, a) {
											return this[r].call(
												this,
												t,
												e,
												n,
												a
											);
										},
										configurable: !0,
									});
								});
							})(n, e),
							(t[r] = !0));
					}
					return In.isArray(e) ? e.forEach(r) : r(e), this;
				}
			}
			gr.accessor([
				"Content-Type",
				"Content-Length",
				"Accept",
				"Accept-Encoding",
				"User-Agent",
				"Authorization",
			]),
				In.reduceDescriptors(gr.prototype, (e, t) => {
					let { value: n } = e,
						r = t[0].toUpperCase() + t.slice(1);
					return {
						get: () => n,
						set(e) {
							this[r] = e;
						},
					};
				}),
				In.freezeMethods(gr);
			const yr = gr;
			function vr(e, t) {
				const n = this || cr,
					r = t || n,
					a = yr.from(r.headers);
				let o = r.data;
				return (
					In.forEach(e, function (e) {
						o = e.call(n, o, a.normalize(), t ? t.status : void 0);
					}),
					a.normalize(),
					o
				);
			}
			function br(e) {
				return !(!e || !e.__CANCEL__);
			}
			function wr(e, t, n) {
				Bn.call(
					this,
					null == e ? "canceled" : e,
					Bn.ERR_CANCELED,
					t,
					n
				),
					(this.name = "CanceledError");
			}
			In.inherits(wr, Bn, { __CANCEL__: !0 });
			const Sr = wr;
			function kr(e, t, n) {
				const r = n.config.validateStatus;
				n.status && r && !r(n.status)
					? t(
							new Bn(
								"Request failed with status code " + n.status,
								[Bn.ERR_BAD_REQUEST, Bn.ERR_BAD_RESPONSE][
									Math.floor(n.status / 100) - 4
								],
								n.config,
								n.request,
								n
							)
					  )
					: e(n);
			}
			const Er = function (e, t) {
				e = e || 10;
				const n = new Array(e),
					r = new Array(e);
				let a,
					o = 0,
					l = 0;
				return (
					(t = void 0 !== t ? t : 1e3),
					function (i) {
						const s = Date.now(),
							u = r[l];
						a || (a = s), (n[o] = i), (r[o] = s);
						let c = l,
							f = 0;
						for (; c !== o; ) (f += n[c++]), (c %= e);
						if (
							((o = (o + 1) % e),
							o === l && (l = (l + 1) % e),
							s - a < t)
						)
							return;
						const d = u && s - u;
						return d ? Math.round((1e3 * f) / d) : void 0;
					}
				);
			};
			const xr = function (e, t) {
					let n,
						r,
						a = 0,
						o = 1e3 / t;
					const l = function (t) {
						let o =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: Date.now();
						(a = o),
							(n = null),
							r && (clearTimeout(r), (r = null)),
							e.apply(null, t);
					};
					return [
						function () {
							const e = Date.now(),
								t = e - a;
							for (
								var i = arguments.length,
									s = new Array(i),
									u = 0;
								u < i;
								u++
							)
								s[u] = arguments[u];
							t >= o
								? l(s, e)
								: ((n = s),
								  r ||
										(r = setTimeout(() => {
											(r = null), l(n);
										}, o - t)));
						},
						() => n && l(n),
					];
				},
				Cr = function (e, t) {
					let n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: 3,
						r = 0;
					const a = Er(50, 250);
					return xr((n) => {
						const o = n.loaded,
							l = n.lengthComputable ? n.total : void 0,
							i = o - r,
							s = a(i);
						r = o;
						e({
							loaded: o,
							total: l,
							progress: l ? o / l : void 0,
							bytes: i,
							rate: s || void 0,
							estimated: s && l && o <= l ? (l - o) / s : void 0,
							event: n,
							lengthComputable: null != l,
							[t ? "download" : "upload"]: !0,
						});
					}, n);
				},
				_r = (e, t) => {
					const n = null != e;
					return [
						(r) =>
							t[0]({ lengthComputable: n, total: e, loaded: r }),
						t[1],
					];
				},
				Tr = (e) =>
					function () {
						for (
							var t = arguments.length, n = new Array(t), r = 0;
							r < t;
							r++
						)
							n[r] = arguments[r];
						return In.asap(() => e(...n));
					},
				Pr = ir.hasStandardBrowserEnv
					? ((e, t) => (n) => (
							(n = new URL(n, ir.origin)),
							e.protocol === n.protocol &&
								e.host === n.host &&
								(t || e.port === n.port)
					  ))(
							new URL(ir.origin),
							ir.navigator &&
								/(msie|trident)/i.test(ir.navigator.userAgent)
					  )
					: () => !0,
				Or = ir.hasStandardBrowserEnv
					? {
							write(e, t, n, r, a, o) {
								const l = [e + "=" + encodeURIComponent(t)];
								In.isNumber(n) &&
									l.push(
										"expires=" + new Date(n).toGMTString()
									),
									In.isString(r) && l.push("path=" + r),
									In.isString(a) && l.push("domain=" + a),
									!0 === o && l.push("secure"),
									(document.cookie = l.join("; "));
							},
							read(e) {
								const t = document.cookie.match(
									new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
								);
								return t ? decodeURIComponent(t[3]) : null;
							},
							remove(e) {
								this.write(e, "", Date.now() - 864e5);
							},
					  }
					: { write() {}, read: () => null, remove() {} };
			function Nr(e, t, n) {
				let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
				return e && (r || 0 == n)
					? (function (e, t) {
							return t
								? e.replace(/\/?\/$/, "") +
										"/" +
										t.replace(/^\/+/, "")
								: e;
					  })(e, t)
					: t;
			}
			const Rr = (e) => (e instanceof yr ? { ...e } : e);
			function Ar(e, t) {
				t = t || {};
				const n = {};
				function r(e, t, n, r) {
					return In.isPlainObject(e) && In.isPlainObject(t)
						? In.merge.call({ caseless: r }, e, t)
						: In.isPlainObject(t)
						? In.merge({}, t)
						: In.isArray(t)
						? t.slice()
						: t;
				}
				function a(e, t, n, a) {
					return In.isUndefined(t)
						? In.isUndefined(e)
							? void 0
							: r(void 0, e, 0, a)
						: r(e, t, 0, a);
				}
				function o(e, t) {
					if (!In.isUndefined(t)) return r(void 0, t);
				}
				function l(e, t) {
					return In.isUndefined(t)
						? In.isUndefined(e)
							? void 0
							: r(void 0, e)
						: r(void 0, t);
				}
				function i(n, a, o) {
					return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
				}
				const s = {
					url: o,
					method: o,
					data: o,
					baseURL: l,
					transformRequest: l,
					transformResponse: l,
					paramsSerializer: l,
					timeout: l,
					timeoutMessage: l,
					withCredentials: l,
					withXSRFToken: l,
					adapter: l,
					responseType: l,
					xsrfCookieName: l,
					xsrfHeaderName: l,
					onUploadProgress: l,
					onDownloadProgress: l,
					decompress: l,
					maxContentLength: l,
					maxBodyLength: l,
					beforeRedirect: l,
					transport: l,
					httpAgent: l,
					httpsAgent: l,
					cancelToken: l,
					socketPath: l,
					responseEncoding: l,
					validateStatus: i,
					headers: (e, t, n) => a(Rr(e), Rr(t), 0, !0),
				};
				return (
					In.forEach(
						Object.keys(Object.assign({}, e, t)),
						function (r) {
							const o = s[r] || a,
								l = o(e[r], t[r], r);
							(In.isUndefined(l) && o !== i) || (n[r] = l);
						}
					),
					n
				);
			}
			const Lr = (e) => {
					const t = Ar({}, e);
					let n,
						{
							data: r,
							withXSRFToken: a,
							xsrfHeaderName: o,
							xsrfCookieName: l,
							headers: i,
							auth: s,
						} = t;
					if (
						((t.headers = i = yr.from(i)),
						(t.url = Jn(
							Nr(t.baseURL, t.url, t.allowAbsoluteUrls),
							e.params,
							e.paramsSerializer
						)),
						s &&
							i.set(
								"Authorization",
								"Basic " +
									btoa(
										(s.username || "") +
											":" +
											(s.password
												? unescape(
														encodeURIComponent(
															s.password
														)
												  )
												: "")
									)
							),
						In.isFormData(r))
					)
						if (
							ir.hasStandardBrowserEnv ||
							ir.hasStandardBrowserWebWorkerEnv
						)
							i.setContentType(void 0);
						else if (!1 !== (n = i.getContentType())) {
							const [e, ...t] = n
								? n
										.split(";")
										.map((e) => e.trim())
										.filter(Boolean)
								: [];
							i.setContentType(
								[e || "multipart/form-data", ...t].join("; ")
							);
						}
					if (
						ir.hasStandardBrowserEnv &&
						(a && In.isFunction(a) && (a = a(t)),
						a || (!1 !== a && Pr(t.url)))
					) {
						const e = o && l && Or.read(l);
						e && i.set(o, e);
					}
					return t;
				},
				zr =
					"undefined" !== typeof XMLHttpRequest &&
					function (e) {
						return new Promise(function (t, n) {
							const r = Lr(e);
							let a = r.data;
							const o = yr.from(r.headers).normalize();
							let l,
								i,
								s,
								u,
								c,
								{
									responseType: f,
									onUploadProgress: d,
									onDownloadProgress: p,
								} = r;
							function h() {
								u && u(),
									c && c(),
									r.cancelToken &&
										r.cancelToken.unsubscribe(l),
									r.signal &&
										r.signal.removeEventListener(
											"abort",
											l
										);
							}
							let m = new XMLHttpRequest();
							function g() {
								if (!m) return;
								const r = yr.from(
									"getAllResponseHeaders" in m &&
										m.getAllResponseHeaders()
								);
								kr(
									function (e) {
										t(e), h();
									},
									function (e) {
										n(e), h();
									},
									{
										data:
											f && "text" !== f && "json" !== f
												? m.response
												: m.responseText,
										status: m.status,
										statusText: m.statusText,
										headers: r,
										config: e,
										request: m,
									}
								),
									(m = null);
							}
							m.open(r.method.toUpperCase(), r.url, !0),
								(m.timeout = r.timeout),
								"onloadend" in m
									? (m.onloadend = g)
									: (m.onreadystatechange = function () {
											m &&
												4 === m.readyState &&
												(0 !== m.status ||
													(m.responseURL &&
														0 ===
															m.responseURL.indexOf(
																"file:"
															))) &&
												setTimeout(g);
									  }),
								(m.onabort = function () {
									m &&
										(n(
											new Bn(
												"Request aborted",
												Bn.ECONNABORTED,
												e,
												m
											)
										),
										(m = null));
								}),
								(m.onerror = function () {
									n(
										new Bn(
											"Network Error",
											Bn.ERR_NETWORK,
											e,
											m
										)
									),
										(m = null);
								}),
								(m.ontimeout = function () {
									let t = r.timeout
										? "timeout of " +
										  r.timeout +
										  "ms exceeded"
										: "timeout exceeded";
									const a = r.transitional || er;
									r.timeoutErrorMessage &&
										(t = r.timeoutErrorMessage),
										n(
											new Bn(
												t,
												a.clarifyTimeoutError
													? Bn.ETIMEDOUT
													: Bn.ECONNABORTED,
												e,
												m
											)
										),
										(m = null);
								}),
								void 0 === a && o.setContentType(null),
								"setRequestHeader" in m &&
									In.forEach(o.toJSON(), function (e, t) {
										m.setRequestHeader(t, e);
									}),
								In.isUndefined(r.withCredentials) ||
									(m.withCredentials = !!r.withCredentials),
								f &&
									"json" !== f &&
									(m.responseType = r.responseType),
								p &&
									(([s, c] = Cr(p, !0)),
									m.addEventListener("progress", s)),
								d &&
									m.upload &&
									(([i, u] = Cr(d)),
									m.upload.addEventListener("progress", i),
									m.upload.addEventListener("loadend", u)),
								(r.cancelToken || r.signal) &&
									((l = (t) => {
										m &&
											(n(
												!t || t.type
													? new Sr(null, e, m)
													: t
											),
											m.abort(),
											(m = null));
									}),
									r.cancelToken && r.cancelToken.subscribe(l),
									r.signal &&
										(r.signal.aborted
											? l()
											: r.signal.addEventListener(
													"abort",
													l
											  )));
							const y = (function (e) {
								const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
								return (t && t[1]) || "";
							})(r.url);
							y && -1 === ir.protocols.indexOf(y)
								? n(
										new Bn(
											"Unsupported protocol " + y + ":",
											Bn.ERR_BAD_REQUEST,
											e
										)
								  )
								: m.send(a || null);
						});
					},
				Dr = (e, t) => {
					const { length: n } = (e = e ? e.filter(Boolean) : []);
					if (t || n) {
						let n,
							r = new AbortController();
						const a = function (e) {
							if (!n) {
								(n = !0), l();
								const t = e instanceof Error ? e : this.reason;
								r.abort(
									t instanceof Bn
										? t
										: new Sr(
												t instanceof Error
													? t.message
													: t
										  )
								);
							}
						};
						let o =
							t &&
							setTimeout(() => {
								(o = null),
									a(
										new Bn(
											`timeout ${t} of ms exceeded`,
											Bn.ETIMEDOUT
										)
									);
							}, t);
						const l = () => {
							e &&
								(o && clearTimeout(o),
								(o = null),
								e.forEach((e) => {
									e.unsubscribe
										? e.unsubscribe(a)
										: e.removeEventListener("abort", a);
								}),
								(e = null));
						};
						e.forEach((e) => e.addEventListener("abort", a));
						const { signal: i } = r;
						return (i.unsubscribe = () => In.asap(l)), i;
					}
				},
				Fr = function* (e, t) {
					let n = e.byteLength;
					if (!t || n < t) return void (yield e);
					let r,
						a = 0;
					for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
				},
				Ir = async function* (e) {
					if (e[Symbol.asyncIterator]) return void (yield* e);
					const t = e.getReader();
					try {
						for (;;) {
							const { done: e, value: n } = await t.read();
							if (e) break;
							yield n;
						}
					} finally {
						await t.cancel();
					}
				},
				jr = (e, t, n, r) => {
					const a = (async function* (e, t) {
						for await (const n of Ir(e)) yield* Fr(n, t);
					})(e, t);
					let o,
						l = 0,
						i = (e) => {
							o || ((o = !0), r && r(e));
						};
					return new ReadableStream(
						{
							async pull(e) {
								try {
									const { done: t, value: r } =
										await a.next();
									if (t) return i(), void e.close();
									let o = r.byteLength;
									if (n) {
										let e = (l += o);
										n(e);
									}
									e.enqueue(new Uint8Array(r));
								} catch (t) {
									throw (i(t), t);
								}
							},
							cancel: (e) => (i(e), a.return()),
						},
						{ highWaterMark: 2 }
					);
				},
				Ur =
					"function" === typeof fetch &&
					"function" === typeof Request &&
					"function" === typeof Response,
				Mr = Ur && "function" === typeof ReadableStream,
				Br =
					Ur &&
					("function" === typeof TextEncoder
						? ((Hr = new TextEncoder()), (e) => Hr.encode(e))
						: async (e) =>
								new Uint8Array(
									await new Response(e).arrayBuffer()
								));
			var Hr;
			const $r = function (e) {
					try {
						for (
							var t = arguments.length,
								n = new Array(t > 1 ? t - 1 : 0),
								r = 1;
							r < t;
							r++
						)
							n[r - 1] = arguments[r];
						return !!e(...n);
					} catch (a) {
						return !1;
					}
				},
				Wr =
					Mr &&
					$r(() => {
						let e = !1;
						const t = new Request(ir.origin, {
							body: new ReadableStream(),
							method: "POST",
							get duplex() {
								return (e = !0), "half";
							},
						}).headers.has("Content-Type");
						return e && !t;
					}),
				Vr = Mr && $r(() => In.isReadableStream(new Response("").body)),
				qr = { stream: Vr && ((e) => e.body) };
			var Kr;
			Ur &&
				((Kr = new Response()),
				["text", "arrayBuffer", "blob", "formData", "stream"].forEach(
					(e) => {
						!qr[e] &&
							(qr[e] = In.isFunction(Kr[e])
								? (t) => t[e]()
								: (t, n) => {
										throw new Bn(
											`Response type '${e}' is not supported`,
											Bn.ERR_NOT_SUPPORT,
											n
										);
								  });
					}
				));
			const Qr = async (e, t) => {
					const n = In.toFiniteNumber(e.getContentLength());
					return null == n
						? (async (e) => {
								if (null == e) return 0;
								if (In.isBlob(e)) return e.size;
								if (In.isSpecCompliantForm(e)) {
									const t = new Request(ir.origin, {
										method: "POST",
										body: e,
									});
									return (await t.arrayBuffer()).byteLength;
								}
								return In.isArrayBufferView(e) ||
									In.isArrayBuffer(e)
									? e.byteLength
									: (In.isURLSearchParams(e) && (e += ""),
									  In.isString(e)
											? (await Br(e)).byteLength
											: void 0);
						  })(t)
						: n;
				},
				Gr = {
					http: null,
					xhr: zr,
					fetch:
						Ur &&
						(async (e) => {
							let {
								url: t,
								method: n,
								data: r,
								signal: a,
								cancelToken: o,
								timeout: l,
								onDownloadProgress: i,
								onUploadProgress: s,
								responseType: u,
								headers: c,
								withCredentials: f = "same-origin",
								fetchOptions: d,
							} = Lr(e);
							u = u ? (u + "").toLowerCase() : "text";
							let p,
								h = Dr([a, o && o.toAbortSignal()], l);
							const m =
								h &&
								h.unsubscribe &&
								(() => {
									h.unsubscribe();
								});
							let g;
							try {
								if (
									s &&
									Wr &&
									"get" !== n &&
									"head" !== n &&
									0 !== (g = await Qr(c, r))
								) {
									let e,
										n = new Request(t, {
											method: "POST",
											body: r,
											duplex: "half",
										});
									if (
										(In.isFormData(r) &&
											(e =
												n.headers.get(
													"content-type"
												)) &&
											c.setContentType(e),
										n.body)
									) {
										const [e, t] = _r(g, Cr(Tr(s)));
										r = jr(n.body, 65536, e, t);
									}
								}
								In.isString(f) || (f = f ? "include" : "omit");
								const a = "credentials" in Request.prototype;
								p = new Request(t, {
									...d,
									signal: h,
									method: n.toUpperCase(),
									headers: c.normalize().toJSON(),
									body: r,
									duplex: "half",
									credentials: a ? f : void 0,
								});
								let o = await fetch(p);
								const l =
									Vr && ("stream" === u || "response" === u);
								if (Vr && (i || (l && m))) {
									const e = {};
									["status", "statusText", "headers"].forEach(
										(t) => {
											e[t] = o[t];
										}
									);
									const t = In.toFiniteNumber(
											o.headers.get("content-length")
										),
										[n, r] =
											(i && _r(t, Cr(Tr(i), !0))) || [];
									o = new Response(
										jr(o.body, 65536, n, () => {
											r && r(), m && m();
										}),
										e
									);
								}
								u = u || "text";
								let y = await qr[In.findKey(qr, u) || "text"](
									o,
									e
								);
								return (
									!l && m && m(),
									await new Promise((t, n) => {
										kr(t, n, {
											data: y,
											headers: yr.from(o.headers),
											status: o.status,
											statusText: o.statusText,
											config: e,
											request: p,
										});
									})
								);
							} catch (y) {
								if (
									(m && m(),
									y &&
										"TypeError" === y.name &&
										/Load failed|fetch/i.test(y.message))
								)
									throw Object.assign(
										new Bn(
											"Network Error",
											Bn.ERR_NETWORK,
											e,
											p
										),
										{ cause: y.cause || y }
									);
								throw Bn.from(y, y && y.code, e, p);
							}
						}),
				};
			In.forEach(Gr, (e, t) => {
				if (e) {
					try {
						Object.defineProperty(e, "name", { value: t });
					} catch (n) {}
					Object.defineProperty(e, "adapterName", { value: t });
				}
			});
			const Yr = (e) => `- ${e}`,
				Xr = (e) => In.isFunction(e) || null === e || !1 === e,
				Jr = (e) => {
					e = In.isArray(e) ? e : [e];
					const { length: t } = e;
					let n, r;
					const a = {};
					for (let o = 0; o < t; o++) {
						let t;
						if (
							((n = e[o]),
							(r = n),
							!Xr(n) &&
								((r = Gr[(t = String(n)).toLowerCase()]),
								void 0 === r))
						)
							throw new Bn(`Unknown adapter '${t}'`);
						if (r) break;
						a[t || "#" + o] = r;
					}
					if (!r) {
						const e = Object.entries(a).map((e) => {
							let [t, n] = e;
							return (
								`adapter ${t} ` +
								(!1 === n
									? "is not supported by the environment"
									: "is not available in the build")
							);
						});
						let n = t
							? e.length > 1
								? "since :\n" + e.map(Yr).join("\n")
								: " " + Yr(e[0])
							: "as no adapter specified";
						throw new Bn(
							"There is no suitable adapter to dispatch the request " +
								n,
							"ERR_NOT_SUPPORT"
						);
					}
					return r;
				};
			function Zr(e) {
				if (
					(e.cancelToken && e.cancelToken.throwIfRequested(),
					e.signal && e.signal.aborted)
				)
					throw new Sr(null, e);
			}
			function ea(e) {
				Zr(e),
					(e.headers = yr.from(e.headers)),
					(e.data = vr.call(e, e.transformRequest)),
					-1 !== ["post", "put", "patch"].indexOf(e.method) &&
						e.headers.setContentType(
							"application/x-www-form-urlencoded",
							!1
						);
				return Jr(e.adapter || cr.adapter)(e).then(
					function (t) {
						return (
							Zr(e),
							(t.data = vr.call(e, e.transformResponse, t)),
							(t.headers = yr.from(t.headers)),
							t
						);
					},
					function (t) {
						return (
							br(t) ||
								(Zr(e),
								t &&
									t.response &&
									((t.response.data = vr.call(
										e,
										e.transformResponse,
										t.response
									)),
									(t.response.headers = yr.from(
										t.response.headers
									)))),
							Promise.reject(t)
						);
					}
				);
			}
			const ta = "1.9.0",
				na = {};
			[
				"object",
				"boolean",
				"number",
				"function",
				"string",
				"symbol",
			].forEach((e, t) => {
				na[e] = function (n) {
					return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
				};
			});
			const ra = {};
			(na.transitional = function (e, t, n) {
				function r(e, t) {
					return (
						"[Axios v1.9.0] Transitional option '" +
						e +
						"'" +
						t +
						(n ? ". " + n : "")
					);
				}
				return (n, a, o) => {
					if (!1 === e)
						throw new Bn(
							r(a, " has been removed" + (t ? " in " + t : "")),
							Bn.ERR_DEPRECATED
						);
					return (
						t &&
							!ra[a] &&
							((ra[a] = !0),
							console.warn(
								r(
									a,
									" has been deprecated since v" +
										t +
										" and will be removed in the near future"
								)
							)),
						!e || e(n, a, o)
					);
				};
			}),
				(na.spelling = function (e) {
					return (t, n) => (
						console.warn(`${n} is likely a misspelling of ${e}`), !0
					);
				});
			const aa = {
					assertOptions: function (e, t, n) {
						if ("object" !== typeof e)
							throw new Bn(
								"options must be an object",
								Bn.ERR_BAD_OPTION_VALUE
							);
						const r = Object.keys(e);
						let a = r.length;
						for (; a-- > 0; ) {
							const o = r[a],
								l = t[o];
							if (l) {
								const t = e[o],
									n = void 0 === t || l(t, o, e);
								if (!0 !== n)
									throw new Bn(
										"option " + o + " must be " + n,
										Bn.ERR_BAD_OPTION_VALUE
									);
							} else if (!0 !== n)
								throw new Bn(
									"Unknown option " + o,
									Bn.ERR_BAD_OPTION
								);
						}
					},
					validators: na,
				},
				oa = aa.validators;
			class la {
				constructor(e) {
					(this.defaults = e || {}),
						(this.interceptors = {
							request: new Zn(),
							response: new Zn(),
						});
				}
				async request(e, t) {
					try {
						return await this._request(e, t);
					} catch (n) {
						if (n instanceof Error) {
							let e = {};
							Error.captureStackTrace
								? Error.captureStackTrace(e)
								: (e = new Error());
							const t = e.stack
								? e.stack.replace(/^.+\n/, "")
								: "";
							try {
								n.stack
									? t &&
									  !String(n.stack).endsWith(
											t.replace(/^.+\n.+\n/, "")
									  ) &&
									  (n.stack += "\n" + t)
									: (n.stack = t);
							} catch (r) {}
						}
						throw n;
					}
				}
				_request(e, t) {
					"string" === typeof e
						? ((t = t || {}).url = e)
						: (t = e || {}),
						(t = Ar(this.defaults, t));
					const {
						transitional: n,
						paramsSerializer: r,
						headers: a,
					} = t;
					void 0 !== n &&
						aa.assertOptions(
							n,
							{
								silentJSONParsing: oa.transitional(oa.boolean),
								forcedJSONParsing: oa.transitional(oa.boolean),
								clarifyTimeoutError: oa.transitional(
									oa.boolean
								),
							},
							!1
						),
						null != r &&
							(In.isFunction(r)
								? (t.paramsSerializer = { serialize: r })
								: aa.assertOptions(
										r,
										{
											encode: oa.function,
											serialize: oa.function,
										},
										!0
								  )),
						void 0 !== t.allowAbsoluteUrls ||
							(void 0 !== this.defaults.allowAbsoluteUrls
								? (t.allowAbsoluteUrls =
										this.defaults.allowAbsoluteUrls)
								: (t.allowAbsoluteUrls = !0)),
						aa.assertOptions(
							t,
							{
								baseUrl: oa.spelling("baseURL"),
								withXsrfToken: oa.spelling("withXSRFToken"),
							},
							!0
						),
						(t.method = (
							t.method ||
							this.defaults.method ||
							"get"
						).toLowerCase());
					let o = a && In.merge(a.common, a[t.method]);
					a &&
						In.forEach(
							[
								"delete",
								"get",
								"head",
								"post",
								"put",
								"patch",
								"common",
							],
							(e) => {
								delete a[e];
							}
						),
						(t.headers = yr.concat(o, a));
					const l = [];
					let i = !0;
					this.interceptors.request.forEach(function (e) {
						("function" === typeof e.runWhen &&
							!1 === e.runWhen(t)) ||
							((i = i && e.synchronous),
							l.unshift(e.fulfilled, e.rejected));
					});
					const s = [];
					let u;
					this.interceptors.response.forEach(function (e) {
						s.push(e.fulfilled, e.rejected);
					});
					let c,
						f = 0;
					if (!i) {
						const e = [ea.bind(this), void 0];
						for (
							e.unshift.apply(e, l),
								e.push.apply(e, s),
								c = e.length,
								u = Promise.resolve(t);
							f < c;

						)
							u = u.then(e[f++], e[f++]);
						return u;
					}
					c = l.length;
					let d = t;
					for (f = 0; f < c; ) {
						const e = l[f++],
							t = l[f++];
						try {
							d = e(d);
						} catch (p) {
							t.call(this, p);
							break;
						}
					}
					try {
						u = ea.call(this, d);
					} catch (p) {
						return Promise.reject(p);
					}
					for (f = 0, c = s.length; f < c; )
						u = u.then(s[f++], s[f++]);
					return u;
				}
				getUri(e) {
					return Jn(
						Nr(
							(e = Ar(this.defaults, e)).baseURL,
							e.url,
							e.allowAbsoluteUrls
						),
						e.params,
						e.paramsSerializer
					);
				}
			}
			In.forEach(["delete", "get", "head", "options"], function (e) {
				la.prototype[e] = function (t, n) {
					return this.request(
						Ar(n || {}, { method: e, url: t, data: (n || {}).data })
					);
				};
			}),
				In.forEach(["post", "put", "patch"], function (e) {
					function t(t) {
						return function (n, r, a) {
							return this.request(
								Ar(a || {}, {
									method: e,
									headers: t
										? {
												"Content-Type":
													"multipart/form-data",
										  }
										: {},
									url: n,
									data: r,
								})
							);
						};
					}
					(la.prototype[e] = t()), (la.prototype[e + "Form"] = t(!0));
				});
			const ia = la;
			class sa {
				constructor(e) {
					if ("function" !== typeof e)
						throw new TypeError("executor must be a function.");
					let t;
					this.promise = new Promise(function (e) {
						t = e;
					});
					const n = this;
					this.promise.then((e) => {
						if (!n._listeners) return;
						let t = n._listeners.length;
						for (; t-- > 0; ) n._listeners[t](e);
						n._listeners = null;
					}),
						(this.promise.then = (e) => {
							let t;
							const r = new Promise((e) => {
								n.subscribe(e), (t = e);
							}).then(e);
							return (
								(r.cancel = function () {
									n.unsubscribe(t);
								}),
								r
							);
						}),
						e(function (e, r, a) {
							n.reason ||
								((n.reason = new Sr(e, r, a)), t(n.reason));
						});
				}
				throwIfRequested() {
					if (this.reason) throw this.reason;
				}
				subscribe(e) {
					this.reason
						? e(this.reason)
						: this._listeners
						? this._listeners.push(e)
						: (this._listeners = [e]);
				}
				unsubscribe(e) {
					if (!this._listeners) return;
					const t = this._listeners.indexOf(e);
					-1 !== t && this._listeners.splice(t, 1);
				}
				toAbortSignal() {
					const e = new AbortController(),
						t = (t) => {
							e.abort(t);
						};
					return (
						this.subscribe(t),
						(e.signal.unsubscribe = () => this.unsubscribe(t)),
						e.signal
					);
				}
				static source() {
					let e;
					return {
						token: new sa(function (t) {
							e = t;
						}),
						cancel: e,
					};
				}
			}
			const ua = sa;
			const ca = {
				Continue: 100,
				SwitchingProtocols: 101,
				Processing: 102,
				EarlyHints: 103,
				Ok: 200,
				Created: 201,
				Accepted: 202,
				NonAuthoritativeInformation: 203,
				NoContent: 204,
				ResetContent: 205,
				PartialContent: 206,
				MultiStatus: 207,
				AlreadyReported: 208,
				ImUsed: 226,
				MultipleChoices: 300,
				MovedPermanently: 301,
				Found: 302,
				SeeOther: 303,
				NotModified: 304,
				UseProxy: 305,
				Unused: 306,
				TemporaryRedirect: 307,
				PermanentRedirect: 308,
				BadRequest: 400,
				Unauthorized: 401,
				PaymentRequired: 402,
				Forbidden: 403,
				NotFound: 404,
				MethodNotAllowed: 405,
				NotAcceptable: 406,
				ProxyAuthenticationRequired: 407,
				RequestTimeout: 408,
				Conflict: 409,
				Gone: 410,
				LengthRequired: 411,
				PreconditionFailed: 412,
				PayloadTooLarge: 413,
				UriTooLong: 414,
				UnsupportedMediaType: 415,
				RangeNotSatisfiable: 416,
				ExpectationFailed: 417,
				ImATeapot: 418,
				MisdirectedRequest: 421,
				UnprocessableEntity: 422,
				Locked: 423,
				FailedDependency: 424,
				TooEarly: 425,
				UpgradeRequired: 426,
				PreconditionRequired: 428,
				TooManyRequests: 429,
				RequestHeaderFieldsTooLarge: 431,
				UnavailableForLegalReasons: 451,
				InternalServerError: 500,
				NotImplemented: 501,
				BadGateway: 502,
				ServiceUnavailable: 503,
				GatewayTimeout: 504,
				HttpVersionNotSupported: 505,
				VariantAlsoNegotiates: 506,
				InsufficientStorage: 507,
				LoopDetected: 508,
				NotExtended: 510,
				NetworkAuthenticationRequired: 511,
			};
			Object.entries(ca).forEach((e) => {
				let [t, n] = e;
				ca[n] = t;
			});
			const fa = ca;
			const da = (function e(t) {
				const n = new ia(t),
					r = Gt(ia.prototype.request, n);
				return (
					In.extend(r, ia.prototype, n, { allOwnKeys: !0 }),
					In.extend(r, n, null, { allOwnKeys: !0 }),
					(r.create = function (n) {
						return e(Ar(t, n));
					}),
					r
				);
			})(cr);
			(da.Axios = ia),
				(da.CanceledError = Sr),
				(da.CancelToken = ua),
				(da.isCancel = br),
				(da.VERSION = ta),
				(da.toFormData = qn),
				(da.AxiosError = Bn),
				(da.Cancel = da.CanceledError),
				(da.all = function (e) {
					return Promise.all(e);
				}),
				(da.spread = function (e) {
					return function (t) {
						return e.apply(null, t);
					};
				}),
				(da.isAxiosError = function (e) {
					return In.isObject(e) && !0 === e.isAxiosError;
				}),
				(da.mergeConfig = Ar),
				(da.AxiosHeaders = yr),
				(da.formToJSON = (e) =>
					sr(In.isHTMLForm(e) ? new FormData(e) : e)),
				(da.getAdapter = Jr),
				(da.HttpStatusCode = fa),
				(da.default = da);
			const pa = "https://proxy-backup.hyperswapx.workers.dev";
			let ha = null,
				ma = 0;
			const ga = da.create({ baseURL: `${pa}` });
			ga.interceptors.request.use(async (e) => {
				try {
					const t = await (async function () {
							const e = Date.now();
							if (!ha || e - ma > 6e4) {
								const t = await fetch(`${pa}/get-token`);
								if (!t.ok)
									throw new Error("Unable to fetch token");
								(ha = await t.text()), (ma = e);
							}
							return ha;
						})(),
						n = (function (e, t) {
							const n = t.split("").map((e) => e.charCodeAt(0)),
								r = e
									.split("")
									.map((e, t) => {
										const r = n[t % n.length];
										return String.fromCharCode(
											e.charCodeAt(0) ^ r
										);
									})
									.join("");
							return btoa(r);
						})(
							t,
							"cdc49b16573644bbe4cb47c809a6d387873331e665d622b1337a4e19593c5a18"
						);
					return (
						(e.headers = { ...e.headers, "x-client-token": n }), e
					);
				} catch (t) {
					return (
						console.error("Unable to fetch token", t),
						Promise.reject(t)
					);
				}
			});
			const ya = ga;
			var va = n(414);
			const ba = function () {
					const [e, n] = (0, t.useState)(null),
						[r, a] = (0, t.useState)(null),
						[o, l] = (0, t.useState)(!0);
					return (
						(0, t.useEffect)(() => {
							o &&
								(async () => {
									try {
										var e, t;
										const [r, o] = await Promise.all([
												ya.get("/api/history/volume"),
												ya.get("/api/history/tvl"),
											]),
											i = r.data.data
												? null ===
														(e =
															r.data.data[
																r.data.data
																	.length - 1
															]) || void 0 === e
													? void 0
													: e.totalVolume
												: null,
											s = o.data.data
												? null ===
														(t =
															o.data.data[
																o.data.data
																	.length - 1
															]) || void 0 === t
													? void 0
													: t.tvlUsd
												: null;
										n(
											i
												? Number(i).toLocaleString(
														"en-US",
														{
															maximumFractionDigits: 0,
														}
												  )
												: "0"
										),
											a(
												s
													? Number(s).toLocaleString(
															"en-US",
															{
																maximumFractionDigits: 0,
															}
													  )
													: "0"
											),
											l(!1);
									} catch (r) {
										console.error(
											"Error fetching data:",
											r
										);
									}
								})();
						}, [o]),
						(0, va.jsxs)(qt, {
							children: [
								(0, va.jsxs)(Kt, {
									children: [
										(0, va.jsx)("video", {
											autoPlay: !0,
											muted: !0,
											loop: !0,
											playsInline: !0,
											ref: (e) => {
												e && (e.playbackRate = 0.4);
											},
											children: (0, va.jsx)("source", {
												src: "https://github.com/HyperSwap-Labs/media-kit/raw/refs/heads/main/Mascot/animation.mp4",
												type: "video/mp4",
											}),
										}),
										(0, va.jsx)("div", {
											className: "overlay",
										}),
										(0, va.jsx)("div", {
											className: "overlay2",
										}),
										(0, va.jsx)("div", {
											className: "overlay3",
										}),
										(0, va.jsxs)("div", {
											className: "content",
											children: [
												(0, va.jsx)("div", {
													className: "logo1",
													children: (0, va.jsx)(
														"div",
														{
															className: "logo2",
															children: (0,
															va.jsx)("img", {
																src: "logo.svg",
																alt: "logo",
															}),
														}
													),
												}),
												(0, va.jsxs)("h1", {
													children: [
														"The HyperEVM",
														(0, va.jsx)("br", {}),
														"Native Dex",
													],
												}),
												(0, va.jsx)("p", {
													children:
														"Explore token swaps, liquidity management and easy token launches",
												}),
												(0, va.jsxs)("a", {
													href: "#",
													rel: "noreferrer",
													className: "launch-app",
													children: [
														(0, va.jsx)("div", {
															className:
																"launch-app-overlay",
														}),
														(0, va.jsx)("span", {
															className:
																"launch-app-text",
															children:
																"Launch App",
														}),
													],
												}),
												(0, va.jsxs)("div", {
													className: "stats",
													children: [
														(0, va.jsxs)("div", {
															className: "item",
															children: [
																(0, va.jsx)(
																	"span",
																	{
																		className:
																			"title",
																		children:
																			"Daily Volume",
																	}
																),
																(0, va.jsx)(
																	"span",
																	{
																		className:
																			"value",
																		children:
																			o
																				? "..."
																				: `$${e}`,
																	}
																),
															],
														}),
														(0, va.jsxs)("div", {
															className: "item",
															children: [
																(0, va.jsx)(
																	"span",
																	{
																		className:
																			"title",
																		children:
																			"Total Value Locked",
																	}
																),
																(0, va.jsx)(
																	"span",
																	{
																		className:
																			"value",
																		children:
																			o
																				? "..."
																				: `$${r}`,
																	}
																),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, va.jsx)(Qt, {
									children: (0, va.jsxs)("div", {
										className: "content-footer",
										children: [
											(0, va.jsxs)("div", {
												className: "logo1",
												children: [
													(0, va.jsx)("img", {
														src: "logo.svg",
														alt: "logo",
													}),
													(0, va.jsx)("span", {
														className: "logo-type",
														children: "HyperSwap",
													}),
												],
											}),
											(0, va.jsxs)("div", {
												className: "links",
												children: [
													(0, va.jsx)("a", {
														href: "#",
														target: "_blank",
														rel: "noreferrer",
														children: "Docs",
													}),
													(0, va.jsx)("a", {
														href: "#",
														target: "_blank",
														rel: "noreferrer",
														children: "Twitter",
													}),
													(0, va.jsx)("a", {
														href: "#",
														target: "_blank",
														rel: "noreferrer",
														children: "Discord",
													}),
												],
											}),
											(0, va.jsx)("div", {
												className: "copyright",
												children: (0, va.jsxs)("span", {
													children: [
														"\xa9 ",
														new Date().getFullYear(),
														" HyperSwap",
													],
												}),
											}),
										],
									}),
								}),
							],
						})
					);
				},
				wa = (e) => {
					e &&
						e instanceof Function &&
						n
							.e(206)
							.then(n.bind(n, 206))
							.then((t) => {
								let {
									getCLS: n,
									getFID: r,
									getFCP: a,
									getLCP: o,
									getTTFB: l,
								} = t;
								n(e), r(e), a(e), o(e), l(e);
							});
				};
			r
				.createRoot(document.getElementById("root"))
				.render(
					(0, va.jsx)(t.StrictMode, { children: (0, va.jsx)(ba, {}) })
				),
				wa();
		})();
})();

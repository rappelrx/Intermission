(function (g) {
  var window = this;
  ("use strict");
  var Vgb = function (a) {
      return a;
    },
    Wgb = function (a) {
      return a;
    },
    Xgb = function (a, b, c) {
      g.gg(a);
      var d = g.ng(a, c);
      b = g.Eg(g.cda(d, b, !0));
      d !== b && g.og(a, c, b);
      return b;
    },
    Ygb = function (a, b) {
      this.u = a >>> 0;
      this.j = b >>> 0;
    },
    $gb = function (a) {
      if (!a) return Zgb || (Zgb = new Ygb(0, 0));
      if (!/^\d+$/.test(a)) return null;
      g.Ada(a);
      return new Ygb(g.Vg, g.Wg);
    },
    ahb = function (a, b, c) {
      null != c &&
        ("string" === typeof c && $gb(c),
        g.uh(a, b, 1),
        "number" === typeof c
          ? ((a = a.j),
            (b = c >>> 0),
            (c = Math.floor((c - b) / 4294967296) >>> 0),
            (g.Vg = b),
            (g.Wg = c),
            g.mh(a, g.Vg),
            g.mh(a, g.Wg))
          : ((c = $gb(c)), (a = a.j), (b = c.j), g.mh(a, c.u), g.mh(a, b)));
    },
    bhb = function (a, b, c) {
      b = g.kda(b, c);
      null != b && (g.uh(a, c, 0), a.j.j.push(b ? 1 : 0));
    },
    chb = function (a, b, c, d, e) {
      b = g.Fg(b, d, c);
      null != b && ((c = g.Oda(a, c)), e(b, a), g.Pda(a, c));
    },
    ehb = function (a) {
      g.J.call(this, a, -1, dhb);
    },
    fhb = function (a) {
      g.J.call(this, a);
    },
    ghb = function (a) {
      g.J.call(this, a);
    },
    hhb = function (a) {
      g.J.call(this, a);
    },
    ihb = function (a) {
      g.J.call(this, a);
    },
    Z7 = function (a) {
      g.Hj(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ta()).toString(36)
      );
      return a;
    },
    $7 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.gga(a.u, b, c);
    },
    jhb = function (a) {
      if (a instanceof g.xm) return a;
      if ("function" == typeof a.Aj) return a.Aj(!1);
      if (g.Ka(a)) {
        var b = 0,
          c = new g.xm();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.G2;
            if (b in a) return g.ym(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    khb = function (a, b, c) {
      if (g.Ka(a)) g.Jb(a, b, c);
      else
        for (a = jhb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    lhb = function (a, b) {
      var c = [];
      khb(
        b,
        function (d) {
          try {
            var e = g.Qo.prototype.u.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.Oka(e) && c.push(d);
        },
        a
      );
      return c;
    },
    mhb = function (a, b) {
      lhb(a, b).forEach(function (c) {
        g.Qo.prototype.remove.call(this, c);
      }, a);
    },
    nhb = function (a) {
      if (a.oa) {
        if (a.oa.locationOverrideToken)
          return { locationOverrideToken: a.oa.locationOverrideToken };
        if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7)
          return { latitudeE7: a.oa.latitudeE7, longitudeE7: a.oa.longitudeE7 };
      }
      return null;
    },
    ohb = function (a, b) {
      g.pb(a, b) || a.push(b);
    },
    phb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    qhb = function (a, b) {
      return g.$c(a, b);
    },
    rhb = function (a) {
      try {
        return g.Ca.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    a8 = function (a) {
      if (g.Ca.JSON)
        try {
          return g.Ca.JSON.parse(a);
        } catch (b) {}
      return rhb(a);
    },
    shb = function (a, b, c, d) {
      var e = new g.zj(null);
      a && g.Aj(e, a);
      b && g.Bj(e, b);
      c && g.Cj(e, c);
      d && (e.B = d);
      return e;
    },
    b8 = function (a, b) {
      g.ty[a] = !0;
      var c = g.ry();
      c && c.publish.apply(c, arguments);
      g.ty[a] = !1;
    },
    c8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.zo();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        thb(this, a.capabilities || ""),
        uhb(this, a.compatibleSenderThemes || ""),
        vhb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    thb = function (a, b) {
      a.capabilities.clear();
      g.Cm(b.split(","), g.Sa(qhb, whb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    uhb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.Cm(b.split(","), g.Sa(qhb, xhb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    vhb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    d8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    e8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    yhb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    zhb = function (a) {
      return new d8(a);
    },
    Ahb = function (a) {
      return Array.isArray(a) ? g.Pg(a, zhb) : [];
    },
    f8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    Bhb = function (a) {
      return Array.isArray(a) ? "[" + g.Pg(a, f8).join(",") + "]" : "null";
    },
    Chb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    Dhb = function (a) {
      return g.Pg(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    Ehb = function (a, b) {
      return g.lb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    g8 = function (a, b) {
      return g.lb(a, function (c) {
        return e8(c, b);
      });
    },
    Fhb = function () {
      var a = (0, g.DA)();
      a && mhb(a, a.j.Aj(!0));
    },
    h8 = function () {
      var a = g.GA("yt-remote-connected-devices") || [];
      g.Gb(a);
      return a;
    },
    Ghb = function (a) {
      if (g.qb(a)) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Pg(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    Hhb = function (a) {
      g.FA("yt-remote-connected-devices", a, 86400);
    },
    i8 = function () {
      if (Ihb) return Ihb;
      var a = g.GA("yt-remote-device-id");
      a || ((a = Chb()), g.FA("yt-remote-device-id", a, 31536e3));
      for (var b = h8(), c = 1, d = a; g.pb(b, d); ) c++, (d = a + "#" + c);
      return (Ihb = d);
    },
    Jhb = function () {
      var a = h8(),
        b = i8();
      g.IA() && g.Ib(a, b);
      a = Ghb(a);
      if (g.qb(a))
        try {
          g.mv("remote_sid");
        } catch (c) {}
      else
        try {
          g.kv("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    Khb = function () {
      return g.GA("yt-remote-session-browser-channel");
    },
    Lhb = function () {
      return g.GA("yt-remote-local-screens") || [];
    },
    Mhb = function () {
      g.FA("yt-remote-lounge-token-expiration", !0, 86400);
    },
    Nhb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Pg(Lhb(), function (d) {
          return d.loungeToken;
        }),
        c = g.Pg(a, function (d) {
          return d.loungeToken;
        });
      g.Uk(c, function (d) {
        return !g.pb(b, d);
      }) && Mhb();
      g.FA("yt-remote-local-screens", a, 31536e3);
    },
    j8 = function (a) {
      a ||
        (g.HA("yt-remote-session-screen-id"),
        g.HA("yt-remote-session-video-id"));
      Jhb();
      a = h8();
      g.sb(a, i8());
      Hhb(a);
    },
    Ohb = function () {
      if (!k8) {
        var a = g.Zo();
        a && (k8 = new g.No(a));
      }
    },
    Phb = function () {
      Ohb();
      return k8 ? !!k8.get("yt-remote-use-staging-server") : !1;
    },
    Qhb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    Rhb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    Shb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    l8 = function (a) {
      a.length
        ? Thb(a.shift(), function () {
            l8(a);
          })
        : Uhb();
    },
    Vhb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    Thb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.aj(d, g.Vd(a));
      (document.head || document.documentElement).appendChild(d);
    },
    Whb = function () {
      var a = Qhb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    Uhb = function () {
      var a = Shb();
      a && a(!1, "No cast extension found");
    },
    Yhb = function () {
      if (Xhb) {
        var a = 2,
          b = Shb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        Thb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          Uhb,
          c
        );
      }
    },
    Zhb = function () {
      Yhb();
      var a = Whb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      l8(a);
    },
    aib = function () {
      Yhb();
      var a = Whb();
      a.push.apply(a, g.u($hb.map(Vhb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      l8(a);
    },
    bib = function () {
      this.j = m8();
      this.j.Um("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Dg: 3,
        Cg: "channel_type",
      });
    },
    cib = function (a, b) {
      a.j.zm("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    dib = function () {
      this.j = m8();
      this.j.Um("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Dg: 3,
        Cg: "channel_type",
      });
    },
    eib = function (a, b) {
      a.j.zm("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    fib = function () {
      this.j = m8();
      this.j.Um(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Dg: 3, Cg: "channel_type" }
      );
    },
    gib = function (a, b) {
      a.j.zm(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    hib = function () {
      this.j = m8();
      this.j.Um("/client_streamz/youtube/living_room/mdx/channel/error", {
        Dg: 3,
        Cg: "channel_type",
      });
    },
    iib = function (a, b) {
      a.j.zm("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    jib = function () {
      this.j = m8();
      this.j.Um(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    kib = function () {
      this.j = m8();
      this.j.Um(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    n8 = function (a, b, c) {
      g.C.call(this);
      this.I = null != c ? (0, g.Pa)(a, c) : a;
      this.Nh = b;
      this.D = (0, g.Pa)(this.pW, this);
      this.j = !1;
      this.u = 0;
      this.B = this.zc = null;
      this.C = [];
    },
    o8 = function (a, b, c) {
      g.C.call(this);
      this.C = null != c ? a.bind(c) : a;
      this.Nh = b;
      this.B = null;
      this.j = !1;
      this.u = 0;
      this.zc = null;
    },
    lib = function (a) {
      a.zc = g.Bf(function () {
        a.zc = null;
        a.j && !a.u && ((a.j = !1), lib(a));
      }, a.Nh);
      var b = a.B;
      a.B = null;
      a.C.apply(null, b);
    },
    p8 = function () {},
    mib = function () {
      g.gb.call(this, "p");
    },
    nib = function () {
      g.gb.call(this, "o");
    },
    pib = function () {
      return (oib = oib || new g.Cd());
    },
    qib = function (a) {
      g.gb.call(this, "serverreachability", a);
    },
    q8 = function (a) {
      var b = pib();
      b.dispatchEvent(new qib(b, a));
    },
    rib = function (a) {
      g.gb.call(this, "statevent", a);
    },
    r8 = function (a) {
      var b = pib();
      b.dispatchEvent(new rib(b, a));
    },
    sib = function (a, b, c, d) {
      g.gb.call(this, "timingevent", a);
      this.size = b;
      this.vx = d;
    },
    s8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ca.setTimeout(function () {
        a();
      }, b);
    },
    tib = function () {},
    t8 = function (a, b, c, d) {
      this.D = a;
      this.C = b;
      this.Bc = c;
      this.xc = d || 1;
      this.gb = new g.Mj(this);
      this.zb = 45e3;
      a = g.AH ? 125 : void 0;
      this.kb = new g.Af(a);
      this.Ma = null;
      this.B = !1;
      this.T = this.Xa = this.J = this.Pa = this.ya = this.Nb = this.Z = null;
      this.oa = [];
      this.j = null;
      this.ea = 0;
      this.I = this.Aa = null;
      this.Ub = -1;
      this.Ka = !1;
      this.sb = 0;
      this.Wa = null;
      this.wc = this.Va = this.Xb = this.Ba = !1;
      this.u = new uib();
    },
    uib = function () {
      this.B = null;
      this.j = "";
      this.u = !1;
    },
    wib = function (a, b, c) {
      a.Pa = 1;
      a.J = Z7(b.clone());
      a.T = c;
      a.Ba = !0;
      vib(a, null);
    },
    vib = function (a, b) {
      a.ya = Date.now();
      u8(a);
      a.Xa = a.J.clone();
      $7(a.Xa, "t", a.xc);
      a.ea = 0;
      var c = a.D.Pa;
      a.u = new uib();
      a.j = xib(a.D, c ? b : null, !a.T);
      0 < a.sb && (a.Wa = new o8((0, g.Pa)(a.HN, a, a.j), a.sb));
      a.gb.Qa(a.j, "readystatechange", a.sW);
      b = a.Ma ? g.hd(a.Ma) : {};
      a.T
        ? (a.Aa || (a.Aa = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.Xa, a.Aa, a.T, b))
        : ((a.Aa = "GET"), a.j.send(a.Xa, a.Aa, null, b));
      q8(1);
    },
    yib = function (a) {
      return a.j ? "GET" == a.Aa && 2 != a.Pa && a.D.je : !1;
    },
    Cib = function (a, b, c) {
      for (var d = !0, e; !a.Ka && a.ea < c.length; )
        if (((e = zib(a, c)), e == v8)) {
          4 == b && ((a.I = 4), r8(14), (d = !1));
          break;
        } else if (e == Aib) {
          a.I = 4;
          r8(15);
          d = !1;
          break;
        } else Bib(a, e);
      yib(a) && e != v8 && e != Aib && ((a.u.j = ""), (a.ea = 0));
      4 != b || 0 != c.length || a.u.u || ((a.I = 1), r8(16), (d = !1));
      a.B = a.B && d;
      d ? 0 < c.length && !a.wc && ((a.wc = !0), a.D.GK(a)) : (w8(a), x8(a));
    },
    zib = function (a, b) {
      var c = a.ea,
        d = b.indexOf("\n", c);
      if (-1 == d) return v8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Aib;
      d += 1;
      if (d + c > b.length) return v8;
      b = b.slice(d, d + c);
      a.ea = d + c;
      return b;
    },
    u8 = function (a) {
      a.Nb = Date.now() + a.zb;
      Dib(a, a.zb);
    },
    Dib = function (a, b) {
      if (null != a.Z) throw Error("WatchDog timer not null");
      a.Z = s8((0, g.Pa)(a.qW, a), b);
    },
    y8 = function (a) {
      a.Z && (g.Ca.clearTimeout(a.Z), (a.Z = null));
    },
    x8 = function (a) {
      a.D.pg() || a.Ka || Eib(a.D, a);
    },
    w8 = function (a) {
      y8(a);
      g.ab(a.Wa);
      a.Wa = null;
      a.kb.stop();
      a.gb.gg();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    Bib = function (a, b) {
      try {
        var c = a.D;
        if (0 != c.Pg && (c.j == a || Fib(c.u, a)))
          if (!a.Va && Fib(c.u, a) && 3 == c.Pg) {
            try {
              var d = c.Me.j.parse(b);
            } catch (z) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.T) {
                    if (c.j)
                      if (c.j.ya + 3e3 < a.ya) z8(c), A8(c);
                      else break a;
                    Gib(c);
                    r8(18);
                  }
                }
              else
                (c.Hd = e[1]),
                  0 < c.Hd - c.Va &&
                    37500 > e[2] &&
                    c.kb &&
                    0 == c.oa &&
                    !c.ea &&
                    (c.ea = s8((0, g.Pa)(c.tW, c), 6e3));
              if (1 >= Hib(c.u) && c.bd) {
                try {
                  c.bd();
                } catch (z) {}
                c.bd = void 0;
              }
            } else B8(c, 11);
          } else if (((a.Va || c.j == a) && z8(c), !g.Rb(b)))
            for (e = c.Me.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Va = f[0];
              f = f[1];
              if (2 == c.Pg)
                if ("c" == f[0]) {
                  c.C = f[1];
                  c.wc = f[2];
                  var h = f[3];
                  null != h && (c.IN = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.Xa = 1.5 * l);
                  d = c;
                  var m = a.kJ();
                  if (m) {
                    var n = g.Di(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.u;
                      !p.j &&
                        (g.Tb(n, "spdy") || g.Tb(n, "quic") || g.Tb(n, "h2")) &&
                        ((p.C = p.D),
                        (p.j = new Set()),
                        p.u && (Iib(p, p.u), (p.u = null)));
                    }
                    if (d.Ba) {
                      var q = g.Di(m, "X-HTTP-Session-Id");
                      q && ((d.Vd = q), g.Hj(d.Ma, d.Ba, q));
                    }
                  }
                  c.Pg = 3;
                  c.D && c.D.ON();
                  c.jd && (c.qd = Date.now() - a.ya);
                  d = c;
                  var r = a;
                  d.td = Jib(d, d.Pa ? d.wc : null, d.xc);
                  if (r.Va) {
                    Kib(d.u, r);
                    var w = r,
                      y = d.Xa;
                    y && w.setTimeout(y);
                    w.Z && (y8(w), u8(w));
                    d.j = r;
                  } else Lib(d);
                  0 < c.B.length && C8(c);
                } else ("stop" != f[0] && "close" != f[0]) || B8(c, 7);
              else
                3 == c.Pg &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? B8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.D && c.D.NN(f),
                  (c.oa = 0));
            }
        q8(4);
      } catch (z) {}
    },
    Mib = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Nib = function (a) {
      this.D = a || 10;
      g.Ca.PerformanceNavigationTiming
        ? ((a = g.Ca.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Ca.chrome &&
            g.Ca.chrome.loadTimes &&
            g.Ca.chrome.loadTimes() &&
            g.Ca.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.C = a ? this.D : 1;
      this.j = null;
      1 < this.C && (this.j = new Set());
      this.u = null;
      this.B = [];
    },
    Oib = function (a) {
      return a.u ? !0 : a.j ? a.j.size >= a.C : !1;
    },
    Hib = function (a) {
      return a.u ? 1 : a.j ? a.j.size : 0;
    },
    Fib = function (a, b) {
      return a.u ? a.u == b : a.j ? a.j.has(b) : !1;
    },
    Iib = function (a, b) {
      a.j ? a.j.add(b) : (a.u = b);
    },
    Kib = function (a, b) {
      a.u && a.u == b ? (a.u = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    Pib = function (a) {
      if (null != a.u) return a.B.concat(a.u.oa);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.B;
        a = g.t(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.oa);
        return b;
      }
      return g.xb(a.B);
    },
    Qib = function (a, b) {
      var c = new tib();
      if (g.Ca.Image) {
        var d = new Image();
        d.onload = g.Sa(D8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.Sa(D8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.Sa(D8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.Sa(D8, c, d, "TestLoadImage: timeout", !1, b);
        g.Ca.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    D8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    Rib = function () {
      this.j = new p8();
    },
    Sib = function (a, b, c) {
      var d = c || "";
      try {
        g.yj(a, function (e, f) {
          var h = e;
          g.La(e) && (h = g.$h(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    E8 = function (a, b, c) {
      return c && c.L_ ? c.L_[a] || b : b;
    },
    Tib = function (a) {
      this.B = [];
      this.wc =
        this.td =
        this.Ma =
        this.xc =
        this.j =
        this.Vd =
        this.Ba =
        this.Ka =
        this.J =
        this.Nb =
        this.Z =
          null;
      this.Ze = this.Wa = 0;
      this.Xe = E8("failFast", !1, a);
      this.kb = this.ea = this.T = this.I = this.D = null;
      this.Bc = !0;
      this.Hd = this.Va = -1;
      this.Xb = this.oa = this.ya = 0;
      this.We = E8("baseRetryDelayMs", 5e3, a);
      this.Hf = E8("retryDelaySeedMs", 1e4, a);
      this.Ye = E8("forwardChannelMaxRetries", 2, a);
      this.Gd = E8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.ge = (a && a.y9a) || void 0;
      this.je = (a && a.w9a) || !1;
      this.Xa = void 0;
      this.Pa = (a && a.S4) || !1;
      this.C = "";
      this.u = new Nib(a && a.t7a);
      this.Me = new Rib();
      this.zb = (a && a.H7a) || !1;
      this.sb = (a && a.z7a) || !1;
      this.zb && this.sb && (this.sb = !1);
      this.Xf = (a && a.n7a) || !1;
      a && a.J7a && (this.Bc = !1);
      this.jd = (!this.zb && this.Bc && a && a.x7a) || !1;
      this.bd = void 0;
      this.qd = 0;
      this.gb = !1;
      this.Ub = this.Aa = null;
    },
    A8 = function (a) {
      a.j && (Uib(a), a.j.cancel(), (a.j = null));
    },
    Vib = function (a) {
      A8(a);
      a.T && (g.Ca.clearTimeout(a.T), (a.T = null));
      z8(a);
      a.u.cancel();
      a.I && ("number" === typeof a.I && g.Ca.clearTimeout(a.I), (a.I = null));
    },
    C8 = function (a) {
      Oib(a.u) || a.I || ((a.I = !0), g.rf(a.KN, a), (a.ya = 0));
    },
    Xib = function (a, b) {
      if (Hib(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
      if (a.I) return (a.B = b.oa.concat(a.B)), !0;
      if (1 == a.Pg || 2 == a.Pg || a.ya >= (a.Xe ? 0 : a.Ye)) return !1;
      a.I = s8((0, g.Pa)(a.KN, a, b), Wib(a, a.ya));
      a.ya++;
      return !0;
    },
    Zib = function (a, b) {
      var c;
      b ? (c = b.Bc) : (c = a.Wa++);
      var d = a.Ma.clone();
      g.Hj(d, "SID", a.C);
      g.Hj(d, "RID", c);
      g.Hj(d, "AID", a.Va);
      F8(a, d);
      a.J && a.Z && g.Lj(d, a.J, a.Z);
      c = new t8(a, a.C, c, a.ya + 1);
      null === a.J && (c.Ma = a.Z);
      b && (a.B = b.oa.concat(a.B));
      b = Yib(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Gd) + Math.round(0.5 * a.Gd * Math.random())
      );
      Iib(a.u, c);
      wib(c, d, b);
    },
    F8 = function (a, b) {
      a.Ka &&
        g.Oc(a.Ka, function (c, d) {
          g.Hj(b, d, c);
        });
      a.D &&
        g.yj({}, function (c, d) {
          g.Hj(b, d, c);
        });
    },
    Yib = function (a, b, c) {
      c = Math.min(a.B.length, c);
      var d = a.D ? (0, g.Pa)(a.D.uW, a.D, a) : null;
      a: for (var e = a.B, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              Sib(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.B.splice(0, c);
      b.oa = a;
      return d;
    },
    Lib = function (a) {
      a.j || a.T || ((a.Xb = 1), g.rf(a.JN, a), (a.oa = 0));
    },
    Gib = function (a) {
      if (a.j || a.T || 3 <= a.oa) return !1;
      a.Xb++;
      a.T = s8((0, g.Pa)(a.JN, a), Wib(a, a.oa));
      a.oa++;
      return !0;
    },
    Uib = function (a) {
      null != a.Aa && (g.Ca.clearTimeout(a.Aa), (a.Aa = null));
    },
    $ib = function (a) {
      a.j = new t8(a, a.C, "rpc", a.Xb);
      null === a.J && (a.j.Ma = a.Z);
      a.j.sb = 0;
      var b = a.td.clone();
      g.Hj(b, "RID", "rpc");
      g.Hj(b, "SID", a.C);
      g.Hj(b, "CI", a.kb ? "0" : "1");
      g.Hj(b, "AID", a.Va);
      g.Hj(b, "TYPE", "xmlhttp");
      F8(a, b);
      a.J && a.Z && g.Lj(b, a.J, a.Z);
      a.Xa && a.j.setTimeout(a.Xa);
      var c = a.j;
      a = a.wc;
      c.Pa = 1;
      c.J = Z7(b.clone());
      c.T = null;
      c.Ba = !0;
      vib(c, a);
    },
    z8 = function (a) {
      null != a.ea && (g.Ca.clearTimeout(a.ea), (a.ea = null));
    },
    Eib = function (a, b) {
      var c = null;
      if (a.j == b) {
        z8(a);
        Uib(a);
        a.j = null;
        var d = 2;
      } else if (Fib(a.u, b)) (c = b.oa), Kib(a.u, b), (d = 1);
      else return;
      if (0 != a.Pg)
        if (b.B)
          if (1 == d) {
            c = b.T ? b.T.length : 0;
            b = Date.now() - b.ya;
            var e = a.ya;
            d = pib();
            d.dispatchEvent(new sib(d, c, b, e));
            C8(a);
          } else Lib(a);
        else {
          var f = b.Ub;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && Xib(a, b)) || (2 == d && Gib(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.u), (b.B = b.B.concat(c))), e)
            ) {
              case 1:
                B8(a, 5);
                break;
              case 4:
                B8(a, 10);
                break;
              case 3:
                B8(a, 6);
                break;
              default:
                B8(a, 2);
            }
        }
    },
    Wib = function (a, b) {
      var c = a.We + Math.floor(Math.random() * a.Hf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    B8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.D && (c = null);
        var d = (0, g.Pa)(a.Y4, a);
        c ||
          ((c = new g.zj("//www.google.com/images/cleardot.gif")),
          (g.Ca.location && "http" == g.Ca.location.protocol) ||
            g.Aj(c, "https"),
          Z7(c));
        Qib(c.toString(), d);
      } else r8(2);
      a.Pg = 0;
      a.D && a.D.MN(b);
      ajb(a);
      Vib(a);
    },
    ajb = function (a) {
      a.Pg = 0;
      a.Ub = [];
      if (a.D) {
        var b = Pib(a.u);
        if (0 != b.length || 0 != a.B.length)
          g.zb(a.Ub, b),
            g.zb(a.Ub, a.B),
            (a.u.B.length = 0),
            g.xb(a.B),
            (a.B.length = 0);
        a.D.LN();
      }
    },
    bjb = function (a) {
      if (0 == a.Pg) return a.Ub;
      var b = [];
      g.zb(b, Pib(a.u));
      g.zb(b, a.B);
      return b;
    },
    Jib = function (a, b, c) {
      var d = g.Ij(c);
      "" != d.j
        ? (b && g.Bj(d, b + "." + d.j), g.Cj(d, d.C))
        : ((d = g.Ca.location),
          (d = shb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Ba;
      c = a.Vd;
      b && c && g.Hj(d, b, c);
      g.Hj(d, "VER", a.IN);
      F8(a, d);
      return d;
    },
    xib = function (a, b, c) {
      if (b && !a.Pa)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.je && !a.ge ? new g.vi(new g.uj({ nU: !0 })) : new g.vi(a.ge);
      b.J = a.Pa;
      return b;
    },
    cjb = function () {},
    djb = function () {
      if (g.Se && !g.Jc(10))
        throw Error("Environmental error: no available transport.");
    },
    H8 = function (a, b) {
      g.Cd.call(this);
      this.j = new Tib(b);
      this.I = a;
      this.u = (b && b.r0) || null;
      a = (b && b.q0) || null;
      b &&
        b.s7a &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Z = a;
      a = (b && b.q8a) || null;
      b &&
        b.XR &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.XR)
          : (a = { "X-WebChannel-Content-Type": b.XR }));
      b &&
        b.NP &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.NP)
          : (a = { "X-WebChannel-Client-Profile": b.NP }));
      this.j.Nb = a;
      (a = b && b.o8a) && !g.Rb(a) && (this.j.J = a);
      this.J = (b && b.S4) || !1;
      this.D = (b && b.a9a) || !1;
      (b = b && b.H_) &&
        !g.Rb(b) &&
        ((this.j.Ba = b), g.Zc(this.u, b) && g.ed(this.u, b));
      this.C = new G8(this);
    },
    ejb = function (a) {
      mib.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.metadataKey = g.Vc(b))
            ? g.fd(b, this.metadataKey)
            : b)
        : (this.data = a);
    },
    fjb = function (a) {
      nib.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    G8 = function (a) {
      this.j = a;
    },
    gjb = function (a, b) {
      this.u = a;
      this.j = b;
    },
    hjb = function (a) {
      return bjb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && ((b = b.__data__), (b = a.u.D ? rhb(b) : b));
        return b;
      });
    },
    I8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ca.setTimeout(function () {
        a();
      }, b);
    },
    K8 = function (a) {
      J8.dispatchEvent(new ijb(J8, a));
    },
    ijb = function (a) {
      g.gb.call(this, "statevent", a);
    },
    L8 = function (a, b, c, d) {
      this.j = a;
      this.C = b;
      this.J = c;
      this.I = d || 1;
      this.u = 45e3;
      this.B = new g.Mj(this);
      this.D = new g.Af();
      this.D.setInterval(250);
    },
    kjb = function (a, b, c) {
      a.ev = 1;
      a.Rp = Z7(b.clone());
      a.us = c;
      a.Ba = !0;
      jjb(a, null);
    },
    ljb = function (a, b, c, d, e) {
      a.ev = 1;
      a.Rp = Z7(b.clone());
      a.us = null;
      a.Ba = c;
      e && (a.VT = !1);
      jjb(a, d);
    },
    jjb = function (a, b) {
      a.bv = Date.now();
      M8(a);
      a.Tp = a.Rp.clone();
      $7(a.Tp, "t", a.I);
      a.eC = 0;
      a.Xh = a.j.AG(a.j.yy() ? b : null);
      0 < a.yG && (a.cC = new o8((0, g.Pa)(a.PN, a, a.Xh), a.yG));
      a.B.Qa(a.Xh, "readystatechange", a.wW);
      b = a.rs ? g.hd(a.rs) : {};
      a.us
        ? ((a.dC = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.Xh.send(a.Tp, a.dC, a.us, b))
        : ((a.dC = "GET"),
          a.VT && !g.Kc && (b.Connection = "close"),
          a.Xh.send(a.Tp, a.dC, null, b));
      a.j.Ul(1);
    },
    ojb = function (a, b) {
      var c = a.eC,
        d = b.indexOf("\n", c);
      if (-1 == d) return mjb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return njb;
      d += 1;
      if (d + c > b.length) return mjb;
      b = b.slice(d, d + c);
      a.eC = d + c;
      return b;
    },
    qjb = function (a, b) {
      a.bv = Date.now();
      M8(a);
      var c = b ? window.location.hostname : "";
      a.Tp = a.Rp.clone();
      g.Hj(a.Tp, "DOMAIN", c);
      g.Hj(a.Tp, "t", a.I);
      try {
        a.pm = new ActiveXObject("htmlfile");
      } catch (m) {
        N8(a);
        a.Sp = 7;
        K8(22);
        O8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in P8) f = P8[f];
            else if (f in pjb) f = P8[f] = pjb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = P8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      c = g.ne(g.Pd("b/12014412"), d);
      a.pm.open();
      a.pm.write(g.ke(c));
      a.pm.close();
      a.pm.parentWindow.m = (0, g.Pa)(a.D3, a);
      a.pm.parentWindow.d = (0, g.Pa)(a.aT, a, !0);
      a.pm.parentWindow.rpcClose = (0, g.Pa)(a.aT, a, !1);
      c = a.pm.createElement("DIV");
      a.pm.parentWindow.document.body.appendChild(c);
      d = g.Zd(a.Tp.toString());
      d = g.De(g.Xd(d));
      d = g.ne(g.Pd("b/12014412"), '<iframe src="' + d + '"></iframe>');
      g.Vba(c, d);
      a.j.Ul(1);
    },
    M8 = function (a) {
      a.zG = Date.now() + a.u;
      rjb(a, a.u);
    },
    rjb = function (a, b) {
      if (null != a.fv) throw Error("WatchDog timer not null");
      a.fv = I8((0, g.Pa)(a.vW, a), b);
    },
    sjb = function (a) {
      a.fv && (g.Ca.clearTimeout(a.fv), (a.fv = null));
    },
    O8 = function (a) {
      a.j.pg() || a.qs || a.j.fC(a);
    },
    N8 = function (a) {
      sjb(a);
      g.ab(a.cC);
      a.cC = null;
      a.D.stop();
      a.B.gg();
      if (a.Xh) {
        var b = a.Xh;
        a.Xh = null;
        b.abort();
        b.dispose();
      }
      a.pm && (a.pm = null);
    },
    tjb = function (a, b) {
      try {
        a.j.QN(a, b), a.j.Ul(4);
      } catch (c) {}
    },
    vjb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        ujb(a, b, function (h) {
          h
            ? c(!0)
            : g.Ca.setTimeout(function () {
                vjb(a, b, c, d, f);
              }, f);
        });
      }
    },
    ujb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          Q8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          Q8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          Q8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          Q8(d), c(!1);
        } catch (e) {}
      };
      g.Ca.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    Q8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    wjb = function (a) {
      this.j = a;
      this.u = new p8();
    },
    xjb = function (a) {
      var b = R8(a.j, a.Ty, "/mail/images/cleardot.gif");
      Z7(b);
      vjb(b.toString(), 5e3, (0, g.Pa)(a.bZ, a), 3, 2e3);
      a.Ul(1);
    },
    yjb = function (a) {
      var b = a.j.Z;
      if (null != b)
        K8(5), b ? (K8(11), S8(a.j, a, !1)) : (K8(12), S8(a.j, a, !0));
      else if (
        ((a.Ki = new L8(a)),
        (a.Ki.rs = a.BG),
        (b = a.j),
        (b = R8(b, b.yy() ? a.wy : null, a.CG)),
        K8(5),
        !g.Se || g.Jc(10))
      )
        $7(b, "TYPE", "xmlhttp"), ljb(a.Ki, b, !1, a.wy, !1);
      else {
        $7(b, "TYPE", "html");
        var c = a.Ki;
        a = !!a.wy;
        c.ev = 3;
        c.Rp = Z7(b.clone());
        qjb(c, a);
      }
    },
    zjb = function (a, b, c) {
      this.j = 1;
      this.u = [];
      this.B = [];
      this.D = new p8();
      this.T = a || null;
      this.Z = null != b ? b : null;
      this.J = c || !1;
    },
    Ajb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Bjb = function (a, b, c, d) {
      g.gb.call(this, "timingevent", a);
      this.size = b;
      this.vx = d;
    },
    Cjb = function (a) {
      g.gb.call(this, "serverreachability", a);
    },
    Ejb = function (a) {
      a.xW(1, 0);
      a.gC = R8(a, null, a.DG);
      Djb(a);
    },
    Fjb = function (a) {
      a.iq && (a.iq.abort(), (a.iq = null));
      a.Wf && (a.Wf.cancel(), (a.Wf = null));
      a.Ao && (g.Ca.clearTimeout(a.Ao), (a.Ao = null));
      T8(a);
      a.Ti && (a.Ti.cancel(), (a.Ti = null));
      a.Up && (g.Ca.clearTimeout(a.Up), (a.Up = null));
    },
    Gjb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.u.push(new Ajb(a.yW++, b));
      (2 != a.j && 3 != a.j) || Djb(a);
    },
    Hjb = function (a) {
      var b = 0;
      a.Wf && b++;
      a.Ti && b++;
      return b;
    },
    Djb = function (a) {
      a.Ti || a.Up || ((a.Up = I8((0, g.Pa)(a.UN, a), 0)), (a.ov = 0));
    },
    Kjb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.Ay = Math.floor(1e5 * Math.random());
          b = a.Ay++;
          var c = new L8(a, "", b);
          c.rs = a.xm;
          var d = Ijb(a),
            e = a.gC.clone();
          g.Hj(e, "RID", b);
          g.Hj(e, "CVER", "1");
          U8(a, e);
          kjb(c, e, d);
          a.Ti = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? Jjb(a, b) : 0 == a.u.length || a.Ti || Jjb(a));
    },
    Jjb = function (a, b) {
      if (b)
        if (6 < a.ws) {
          a.u = a.B.concat(a.u);
          a.B.length = 0;
          var c = a.Ay - 1;
          b = Ijb(a);
        } else (c = b.J), (b = b.us);
      else (c = a.Ay++), (b = Ijb(a));
      var d = a.gC.clone();
      g.Hj(d, "SID", a.C);
      g.Hj(d, "RID", c);
      g.Hj(d, "AID", a.qv);
      U8(a, d);
      c = new L8(a, a.C, c, a.ov + 1);
      c.rs = a.xm;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Ti = c;
      kjb(c, d, b);
    },
    U8 = function (a, b) {
      a.Fh &&
        (a = a.Fh.YN()) &&
        g.Oc(a, function (c, d) {
          g.Hj(b, d, c);
        });
    },
    Ijb = function (a) {
      var b = Math.min(a.u.length, 1e3),
        c = ["count=" + b];
      if (6 < a.ws && 0 < b) {
        var d = a.u[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { Mu: e.Mu }, f++) {
        e.Mu = a.u[f].j;
        var h = a.u[f].map;
        e.Mu = 6 >= a.ws ? f : e.Mu - d;
        try {
          g.Oc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.Mu + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.Mu + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.B = a.B.concat(a.u.splice(0, b));
      return c.join("&");
    },
    Ljb = function (a) {
      a.Wf ||
        a.Ao ||
        ((a.I = 1), (a.Ao = I8((0, g.Pa)(a.TN, a), 0)), (a.hv = 0));
    },
    Njb = function (a) {
      if (a.Wf || a.Ao || 3 <= a.hv) return !1;
      a.I++;
      a.Ao = I8((0, g.Pa)(a.TN, a), Mjb(a, a.hv));
      a.hv++;
      return !0;
    },
    S8 = function (a, b, c) {
      a.RF = c;
      a.ym = b.zo;
      a.J || Ejb(a);
    },
    T8 = function (a) {
      null != a.xs && (g.Ca.clearTimeout(a.xs), (a.xs = null));
    },
    Mjb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    V8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Fh && (c = null);
        var d = (0, g.Pa)(a.X4, a);
        c || ((c = new g.zj("//www.google.com/images/cleardot.gif")), Z7(c));
        ujb(c.toString(), 1e4, d);
      } else K8(2);
      Ojb(a, b);
    },
    Ojb = function (a, b) {
      a.j = 0;
      a.Fh && a.Fh.VN(b);
      Pjb(a);
      Fjb(a);
    },
    Pjb = function (a) {
      a.j = 0;
      a.ym = -1;
      if (a.Fh)
        if (0 == a.B.length && 0 == a.u.length) a.Fh.EG();
        else {
          var b = g.xb(a.B),
            c = g.xb(a.u);
          a.B.length = 0;
          a.u.length = 0;
          a.Fh.EG(b, c);
        }
    },
    R8 = function (a, b, c) {
      var d = g.Ij(c);
      if ("" != d.j) b && g.Bj(d, b + "." + d.j), g.Cj(d, d.C);
      else {
        var e = window.location;
        d = shb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.zy &&
        g.Oc(a.zy, function (f, h) {
          g.Hj(d, h, f);
        });
      g.Hj(d, "VER", a.ws);
      U8(a, d);
      return d;
    },
    Qjb = function () {},
    Rjb = function () {
      this.j = [];
      this.u = [];
    },
    Sjb = function (a) {
      g.gb.call(this, "channelMessage");
      this.message = a;
    },
    Tjb = function (a) {
      g.gb.call(this, "channelError");
      this.error = a;
    },
    Ujb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    W8 = function (a, b) {
      g.C.call(this);
      this.j = new g.go(this.v3, 0, this);
      g.E(this, this.j);
      this.Nh = 5e3;
      this.u = 0;
      if ("function" === typeof a) b && (a = (0, g.Pa)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.Pa)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.B = a;
    },
    Vjb = function () {},
    m8 = function () {
      if (!X8) {
        X8 = new g.Gf(new Vjb());
        var a = g.Du("client_streamz_web_flush_count", -1);
        -1 !== a && (X8.C = a);
      }
      return X8;
    },
    Wjb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.ya = a;
      this.J = b;
      this.B = new g.Mo();
      this.u = new W8(this.w4, this);
      this.j = null;
      this.ea = !1;
      this.I = null;
      this.Z = "";
      this.T = this.D = 0;
      this.C = [];
      this.Pa = c;
      this.oa = d;
      this.Va = e;
      this.Ma = new bib();
      this.Aa = new dib();
      this.Ka = new fib();
      this.Ba = new hib();
      this.Wa = new jib();
      this.Xa = new kib();
    },
    Xjb = function (a) {
      if (a.j) {
        var b = a.oa(),
          c = a.j.xm || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.xm = c;
      }
    },
    Y8 = function (a) {
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.u = !0;
      a = a || document.location.href;
      var b = Number(g.gi(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.hi(a) || "";
      a = g.hc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.gc(a, "10.0") && (this.u = !1));
    },
    Z8 = function (a, b) {
      var c = a.j;
      a.u && (c = "https://" + a.domain + a.port + a.j);
      return g.ni(c + b, {});
    },
    Yjb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.Sa(a.C, d, !0),
        onError: g.Sa(a.B, e),
        onTimeout: g.Sa(a.D, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.bv(b, a);
    },
    Zjb = function (a, b) {
      g.Cd.call(this);
      var c = this;
      this.hd = a();
      this.hd.subscribe("handlerOpened", this.EW, this);
      this.hd.subscribe("handlerClosed", this.BW, this);
      this.hd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.hd.subscribe("handlerMessage", this.DW, this);
      this.j = b;
    },
    $jb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new djb() : e;
      var f = void 0 === f ? new g.Mo() : f;
      this.pathPrefix = a;
      this.j = b;
      this.ya = c;
      this.D = f;
      this.T = null;
      this.Z = this.J = 0;
      this.channel = null;
      this.I = 0;
      this.B = new W8(function () {
        d.B.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : Hib(new gjb(h, h.j).j.u)) &&
          d.connect(d.T, d.J);
      });
      this.C = {};
      this.u = {};
      this.ea = !1;
      this.logger = null;
      this.oa = [];
      this.Hg = void 0;
      this.Ma = new bib();
      this.Aa = new dib();
      this.Ka = new fib();
      this.Ba = new hib();
    },
    akb = function (a) {
      g.qd(a.channel, "m", function () {
        a.I = 3;
        a.B.reset();
        a.T = null;
        a.J = 0;
        for (var b = g.t(a.oa), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.oa = [];
        a.ma("webChannelOpened");
        cib(a.Ma, "WEB_CHANNEL");
      });
      g.qd(a.channel, "n", function () {
        a.I = 0;
        a.B.isActive() || a.ma("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : hjb(new gjb(b, b.j));
        c && (a.oa = [].concat(g.u(c)));
        eib(a.Aa, "WEB_CHANNEL");
      });
      g.qd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.B.start(), a.channel && a.channel.close())
          : a.ma("webChannelMessage", new Ujb(c[0], c[1]));
        a.Hg = b.statusCode;
        gib(a.Ka, "WEB_CHANNEL");
      });
      g.qd(a.channel, "o", function () {
        401 === a.Hg || a.B.start();
        a.ma("webChannelError");
        iib(a.Ba, "WEB_CHANNEL");
      });
    },
    bkb = function (a) {
      var b = a.ya();
      b
        ? (a.C["x-youtube-lounge-xsrf-token"] = b)
        : delete a.C["x-youtube-lounge-xsrf-token"];
    },
    ckb = function (a) {
      g.Cd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.HW, this);
      this.j.subscribe("webChannelClosed", this.FW, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.GW, this);
    },
    dkb = function (a, b, c, d, e) {
      function f() {
        return new Wjb(Z8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.Cu("enable_mdx_web_channel_desktop")
        ? new ckb(function () {
            return new $jb(Z8(a, "/wc"), b, c);
          })
        : new Zjb(f, e);
    },
    hkb = function () {
      var a = ekb;
      fkb();
      $8.push(a);
      gkb();
    },
    a9 = function (a, b) {
      fkb();
      var c = ikb(a, String(b));
      g.qb($8)
        ? jkb(c)
        : (gkb(),
          g.Jb($8, function (d) {
            d(c);
          }));
    },
    b9 = function (a) {
      a9("CP", a);
    },
    fkb = function () {
      $8 ||
        (($8 = g.Fa("yt.mdx.remote.debug.handlers_") || []),
        g.Da("yt.mdx.remote.debug.handlers_", $8));
    },
    jkb = function (a) {
      var b = (c9 + 1) % 50;
      c9 = b;
      d9[b] = a;
      e9 || (e9 = 49 == b);
    },
    gkb = function () {
      var a = $8;
      if (d9[0]) {
        var b = e9 ? c9 : -1;
        do {
          b = (b + 1) % 50;
          var c = d9[b];
          g.Jb(a, function (d) {
            d(c);
          });
        } while (b != c9);
        d9 = Array(50);
        c9 = -1;
        e9 = !1;
      }
    },
    ikb = function (a, b) {
      var c = (Date.now() - kkb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    f9 = function (a) {
      g.qB.call(this);
      this.I = a;
      this.screens = [];
    },
    lkb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    mkb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Cm(a.screens, function (f) {
        return !!Ehb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = lkb(a, b[d]) || c;
      return c;
    },
    nkb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Cm(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    okb = function (a, b, c, d, e) {
      g.qB.call(this);
      this.B = a;
      this.J = b;
      this.C = c;
      this.I = d;
      this.D = e;
      this.u = 0;
      this.j = null;
      this.zc = NaN;
    },
    h9 = function (a) {
      f9.call(this, "LocalScreenService");
      this.u = a;
      this.j = NaN;
      g9(this);
      this.info("Initializing with " + Bhb(this.screens));
    },
    pkb = function (a) {
      if (a.screens.length) {
        var b = g.Pg(a.screens, function (d) {
            return d.id;
          }),
          c = Z8(a.u, "/pairing/get_lounge_token_batch");
        Yjb(
          a.u,
          c,
          { screen_ids: b.join(",") },
          (0, g.Pa)(a.j_, a),
          (0, g.Pa)(a.i_, a)
        );
      }
    },
    g9 = function (a) {
      if (g.Cu("deprecate_pair_servlet_enabled")) return mkb(a, []);
      var b = Ahb(Lhb());
      b = g.Cm(b, function (c) {
        return !c.uuid;
      });
      return mkb(a, b);
    },
    i9 = function (a, b) {
      Nhb(g.Pg(a.screens, yhb));
      b && Mhb();
    },
    rkb = function (a, b) {
      g.qB.call(this);
      this.I = b;
      b = (b = g.GA("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.I(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.pb(b, h);
      }
      this.j = c;
      this.D = a;
      this.B = this.C = NaN;
      this.u = null;
      qkb("Initialized with " + g.$h(this.j));
    },
    skb = function (a, b, c) {
      var d = Z8(a.D, "/pairing/get_screen_availability");
      Yjb(
        a.D,
        d,
        { lounge_token: b.token },
        (0, g.Pa)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.Pa)(function () {
          c(!1);
        }, a)
      );
    },
    ukb = function (a, b) {
      a: if (phb(b) != phb(a.j)) var c = !1;
      else {
        c = g.Yc(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (qkb("Updated online screens: " + g.$h(a.j)),
        (a.j = b),
        a.ma("screenChange"));
      tkb(a);
    },
    j9 = function (a) {
      isNaN(a.B) || g.Zu(a.B);
      a.B = g.Xu((0, g.Pa)(a.FL, a), 0 < a.C && a.C < g.Ta() ? 2e4 : 1e4);
    },
    qkb = function (a) {
      a9("OnlineScreenService", a);
    },
    vkb = function (a) {
      var b = {};
      g.Jb(a.I(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.yf("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    tkb = function (a) {
      a = g.Yc(
        g.Pc(a.j, function (b) {
          return b;
        })
      );
      g.Gb(a);
      a.length
        ? g.FA("yt-remote-online-screen-ids", a.join(","), 60)
        : g.HA("yt-remote-online-screen-ids");
    },
    k9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      f9.call(this, "ScreenService");
      this.C = a;
      this.J = b;
      this.j = this.u = null;
      this.B = [];
      this.D = {};
      wkb(this);
    },
    ykb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.D[b]);
      var h = a.Fj(),
        l = c ? g8(h, c) : null;
      (c && (a.J || l)) || (l = g8(h, b));
      if (l) {
        l.uuid = b;
        var m = l9(a, l);
        skb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? xkb(
              a,
              c,
              (0, g.Pa)(function (n) {
                var p = l9(
                  this,
                  new d8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                skb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    zkb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    Akb = function (a, b, c) {
      skb(a.j, b, c);
    },
    xkb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.bv(Z8(a.C, "/pairing/get_lounge_token_batch"), e);
    },
    Bkb = function (a) {
      a.screens = a.u.Fj();
      var b = a.D,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + Bhb(a.screens));
    },
    wkb = function (a) {
      Ckb(a);
      a.u = new h9(a.C);
      a.u.subscribe("screenChange", (0, g.Pa)(a.s_, a));
      Bkb(a);
      a.J || (a.B = Ahb(g.GA("yt-remote-automatic-screen-cache") || []));
      Ckb(a);
      a.info("Initializing automatic screens: " + Bhb(a.B));
      a.j = new rkb(a.C, (0, g.Pa)(a.Fj, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.Pa)(function () {
          this.ma("onlineScreenChange");
        }, a)
      );
    },
    l9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = g8(a.B, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.B.push(b),
          a.J || Dkb(a));
      Ckb(a);
      a.D[b.uuid] = b.id;
      g.FA("yt-remote-device-id-map", a.D, 31536e3);
      return b;
    },
    Dkb = function (a) {
      a = g.Cm(a.B, function (b) {
        return "shortLived" != b.idType;
      });
      g.FA("yt-remote-automatic-screen-cache", g.Pg(a, yhb));
    },
    Ckb = function (a) {
      a.D = g.GA("yt-remote-device-id-map") || {};
    },
    m9 = function (a, b, c) {
      g.qB.call(this);
      this.Ba = c;
      this.B = a;
      this.j = b;
      this.C = null;
    },
    n9 = function (a, b) {
      a.C = b;
      a.ma("sessionScreen", a.C);
    },
    Ekb = function (a, b) {
      a.C && ((a.C.token = b), l9(a.B, a.C));
      a.ma("sessionScreen", a.C);
    },
    o9 = function (a, b) {
      a9(a.Ba, b);
    },
    p9 = function (a, b, c) {
      m9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.u = null;
      this.oa = (0, g.Pa)(this.MW, this);
      this.Aa = (0, g.Pa)(this.N3, this);
      this.ea = g.Xu(function () {
        Fkb(d, null);
      }, 12e4);
      this.J = this.D = this.I = this.T = 0;
      this.ya = !1;
      this.Z = "unknown";
    },
    Hkb = function (a, b) {
      g.Zu(a.J);
      a.J = 0;
      0 == b
        ? Gkb(a)
        : (a.J = g.Xu(function () {
            Gkb(a);
          }, b));
    },
    Gkb = function (a) {
      Ikb(a, "getLoungeToken");
      g.Zu(a.D);
      a.D = g.Xu(function () {
        Jkb(a, null);
      }, 3e4);
    },
    Ikb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.$h());
      var c = {};
      c.type = b;
      a.u
        ? a.u.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.Pa)(function () {
              o9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : o9(a, "Sending yt message without session: " + g.$h(c));
    },
    Kkb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.getScreen() && a.getScreen().id == b) ||
            a.KQ(
              b,
              function (c) {
                n9(a, c);
              },
              function () {
                return a.zi();
              },
              5
            ))
        : a.zi(Error("Waiting for session status timed out."));
    },
    Mkb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new d8(b);
      Lkb(
        a,
        d,
        function (e) {
          e
            ? ((a.ya = !0), l9(a.B, d), n9(a, d), (a.Z = "unknown"), Hkb(a, c))
            : (g.Hu(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.zi());
        },
        5
      );
    },
    Fkb = function (a, b) {
      g.Zu(a.ea);
      a.ea = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.getScreen() && a.getScreen().uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? Mkb(
                    a,
                    {
                      name: a.j.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.Hu(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  Kkb(a, b.screenId)))
            : (g.Hu(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              Kkb(a, b.screenId))
          : Kkb(a, b.screenId)
        : a.zi(Error("Waiting for session status timed out."));
    },
    Jkb = function (a, b) {
      g.Zu(a.D);
      a.D = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Z = c),
          Hkb(a, 3e4))
        : (Ekb(a, b.loungeToken),
          (a.ya = !1),
          (a.Z = "unknown"),
          Hkb(a, b.loungeTokenRefreshIntervalMs));
    },
    Lkb = function (a, b, c, d) {
      g.Zu(a.I);
      a.I = 0;
      Akb(a.B, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.Xu(function () {
              Lkb(a, b, c, d - 1);
            }, 300));
      });
    },
    Nkb = function (a) {
      g.Zu(a.T);
      a.T = 0;
      g.Zu(a.I);
      a.I = 0;
      g.Zu(a.ea);
      a.ea = 0;
      g.Zu(a.D);
      a.D = 0;
      g.Zu(a.J);
      a.J = 0;
    },
    q9 = function (a, b, c, d) {
      m9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.u = this.T = null;
      this.Aa = "";
      this.Pa = c;
      this.Ma = null;
      this.ea = function () {};
      this.Z = NaN;
      this.Ka = (0, g.Pa)(this.NW, this);
      this.D = function () {};
      this.J = this.I = 0;
      this.oa = !1;
      this.ya = "unknown";
    },
    r9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.u) ? 0 : b.getDialAppInfo)
      );
    },
    Okb = function (a) {
      a.D = a.B.aO(
        a.Aa,
        a.j.label,
        a.j.friendlyName,
        r9(a),
        function (b, c) {
          a.D = function () {};
          a.oa = !0;
          n9(a, b);
          "shortLived" == b.idType && 0 < c && s9(a, c);
        },
        function (b) {
          a.D = function () {};
          a.zi(b);
        }
      );
    },
    Pkb = function (a) {
      var b = {};
      b.pairingCode = a.Aa;
      b.theme = a.Pa;
      Phb() && (b.env_useStageMdx = 1);
      return g.li(b);
    },
    Qkb = function (a) {
      return new Promise(function (b) {
        a.Aa = Chb();
        if (a.Ma) {
          var c = new chrome.cast.DialLaunchResponse(!0, Pkb(a));
          b(c);
          Okb(a);
        } else
          (a.ea = function () {
            g.Zu(a.Z);
            a.ea = function () {};
            a.Z = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, Pkb(a));
            b(d);
            Okb(a);
          }),
            (a.Z = g.Xu(function () {
              a.ea();
            }, 100));
      });
    },
    Skb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new d8(b);
      return new Promise(function (e) {
        Rkb(
          a,
          d,
          function (f) {
            f
              ? ((a.oa = !0), l9(a.B, d), n9(a, d), s9(a, c))
              : g.Hu(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : Qkb(a);
      });
    },
    Tkb = function (a, b) {
      var c = a.T.receiver.label,
        d = a.j.friendlyName;
      return new Promise(function (e) {
        ykb(
          a.B,
          c,
          b,
          d,
          function (f) {
            f && f.token && n9(a, f);
            e(f);
          },
          function (f) {
            o9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Qkb(a);
      });
    },
    Rkb = function (a, b, c, d) {
      g.Zu(a.I);
      a.I = 0;
      Akb(a.B, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.Xu(function () {
              Rkb(a, b, c, d - 1);
            }, 300));
      });
    },
    s9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      r9(a) &&
        (g.Zu(a.J),
        (a.J = 0),
        0 == b
          ? Ukb(a)
          : (a.J = g.Xu(function () {
              Ukb(a);
            }, b)));
    },
    Ukb = function (a) {
      r9(a) &&
        a.u.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.getScreen()) ? void 0 : d.token) ==
                b.loungeToken && (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.ya = c), s9(a, 3e4))
              : ((a.oa = !1),
                (a.ya = "unknown"),
                Ekb(a, b.loungeToken),
                s9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.ya = "noLoungeTokenResponse";
            s9(a, 3e4);
          }
        );
    },
    Vkb = function (a) {
      g.Zu(a.I);
      a.I = 0;
      g.Zu(a.J);
      a.J = 0;
      a.D();
      a.D = function () {};
      g.Zu(a.Z);
    },
    t9 = function (a, b) {
      m9.call(this, a, b, "ManualSession");
      this.u = g.Xu((0, g.Pa)(this.Tw, this, null), 150);
    },
    u9 = function (a, b) {
      g.qB.call(this);
      this.config_ = b;
      this.u = a;
      this.T = b.appId || "233637DE";
      this.C = b.theme || "cl";
      this.Z = b.disableCastApi || !1;
      this.I = b.forceMirroring || !1;
      this.j = null;
      this.J = !1;
      this.B = [];
      this.D = (0, g.Pa)(this.E2, this);
    },
    Wkb = function (a, b) {
      return b
        ? g.lb(
            a.B,
            function (c) {
              return e8(b, c.label);
            },
            a
          )
        : null;
    },
    v9 = function (a) {
      a9("Controller", a);
    },
    ekb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    w9 = function (a) {
      return a.J || !!a.B.length || !!a.j;
    },
    x9 = function (a, b, c) {
      b != a.j &&
        (g.ab(a.j),
        (a.j = b)
          ? (c
              ? a.ma("yt-remote-cast2-receiver-resumed", b.j)
              : a.ma("yt-remote-cast2-receiver-selected", b.j),
            b.subscribe("sessionScreen", (0, g.Pa)(a.YS, a, b)),
            b.subscribe("sessionFailed", function () {
              return Xkb(a, b);
            }),
            b.getScreen()
              ? a.ma("yt-remote-cast2-session-change", b.getScreen())
              : c && a.j.Tw(null))
          : a.ma("yt-remote-cast2-session-change", null));
    },
    Xkb = function (a, b) {
      a.j == b && a.ma("yt-remote-cast2-session-failed");
    },
    Ykb = function (a) {
      var b = a.u.ZN(),
        c = a.j && a.j.j;
      a = g.Pg(
        b,
        function (d) {
          c && e8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = Wkb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    elb = function (a, b, c, d) {
      d.disableCastApi
        ? y9("Cannot initialize because disabled by Mdx config.")
        : Zkb()
        ? $kb(b, d) &&
          (alb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? blb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? blb(a, c)
                  : (z9("Failed to load cast API: " + f),
                    clb(!1),
                    alb(!1),
                    g.HA("yt-remote-cast-available"),
                    g.HA("yt-remote-cast-receiver"),
                    dlb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.JA("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js")
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= Qhb() && Zhb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? Uhb()
                : 89 <= Qhb()
                ? aib()
                : (Yhb(), l8($hb.map(Vhb)))))
        : y9("Cannot initialize because not running Chrome");
    },
    dlb = function () {
      y9("dispose");
      var a = A9();
      a && a.dispose();
      g.Da("yt.mdx.remote.cloudview.instance_", null);
      flb(!1);
      g.wy(glb);
      glb.length = 0;
    },
    B9 = function () {
      return !!g.GA("yt-remote-cast-installed");
    },
    hlb = function () {
      var a = g.GA("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    ilb = function () {
      y9("clearCurrentReceiver");
      g.HA("yt-remote-cast-receiver");
    },
    jlb = function () {
      return B9()
        ? A9()
          ? A9().getCastSession()
          : (z9("getCastSelector: Cast is not initialized."), null)
        : (z9("getCastSelector: Cast API is not installed!"), null);
    },
    klb = function () {
      B9()
        ? A9()
          ? C9()
            ? (y9("Requesting cast selector."), A9().requestSession())
            : (y9("Wait for cast API to be ready to request the session."),
              glb.push(g.vy("yt-remote-cast2-api-ready", klb)))
          : z9("requestCastSelector: Cast is not initialized.")
        : z9("requestCastSelector: Cast API is not installed!");
    },
    D9 = function (a, b) {
      C9()
        ? A9().setConnectedScreenStatus(a, b)
        : z9("setConnectedScreenStatus called before ready.");
    },
    Zkb = function () {
      var a = 0 <= g.hc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.fF || a;
    },
    llb = function (a, b) {
      A9().init(a, b);
    },
    $kb = function (a, b) {
      var c = !1;
      A9() ||
        ((a = new u9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.FA("yt-remote-cast-available", d);
          b8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          y9("onReceiverSelected: " + d.friendlyName);
          g.FA("yt-remote-cast-receiver", d);
          b8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          y9("onReceiverResumed: " + d.friendlyName);
          g.FA("yt-remote-cast-receiver", d);
          b8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          y9("onSessionChange: " + f8(d));
          d || g.HA("yt-remote-cast-receiver");
          b8("yt-remote-cast2-session-change", d);
        }),
        g.Da("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      y9("cloudview.createSingleton_: " + c);
      return c;
    },
    A9 = function () {
      return g.Fa("yt.mdx.remote.cloudview.instance_");
    },
    blb = function (a, b) {
      clb(!0);
      alb(!1);
      llb(a, function (c) {
        c
          ? (flb(!0), g.yy("yt-remote-cast2-api-ready"))
          : (z9("Failed to initialize cast API."),
            clb(!1),
            g.HA("yt-remote-cast-available"),
            g.HA("yt-remote-cast-receiver"),
            dlb());
        b(c);
      });
    },
    y9 = function (a) {
      a9("cloudview", a);
    },
    z9 = function (a) {
      a9("cloudview", a);
    },
    clb = function (a) {
      y9("setCastInstalled_ " + a);
      g.FA("yt-remote-cast-installed", a);
    },
    C9 = function () {
      return !!g.Fa("yt.mdx.remote.cloudview.apiReady_");
    },
    flb = function (a) {
      y9("setApiReady_ " + a);
      g.Da("yt.mdx.remote.cloudview.apiReady_", a);
    },
    alb = function (a) {
      g.Da("yt.mdx.remote.cloudview.initializing_", a);
    },
    E9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.I = this.J = 0;
      this.trackData = null;
      this.hasNext = this.Bn = !1;
      this.T = this.D = this.j = this.C = 0;
      this.B = NaN;
      this.u = !1;
      this.reset(a);
    },
    mlb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.Bn = !1;
      a.hasNext = !1;
      a.J = 0;
      a.I = g.Ta();
      a.C = 0;
      a.j = 0;
      a.D = 0;
      a.T = 0;
      a.B = NaN;
      a.u = !1;
    },
    F9 = function (a) {
      return a.Sc() ? (g.Ta() - a.I) / 1e3 : 0;
    },
    G9 = function (a, b) {
      a.J = b;
      a.I = g.Ta();
    },
    H9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.Ta() - a.I) / 1e3 + a.J;
        case -1e3:
          return 0;
      }
      return a.J;
    },
    I9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && mlb(a);
    },
    nlb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.id(a.trackData);
      b.hasPrevious = a.Bn;
      b.hasNext = a.hasNext;
      b.playerTime = a.J;
      b.playerTimeAt = a.I;
      b.seekableStart = a.C;
      b.seekableEnd = a.j;
      b.duration = a.D;
      b.loadedTime = a.T;
      b.liveIngestionTime = a.B;
      return b;
    },
    K9 = function (a, b) {
      g.qB.call(this);
      this.B = 0;
      this.C = a;
      this.I = [];
      this.D = new Rjb();
      this.u = this.j = null;
      this.Z = (0, g.Pa)(this.j1, this);
      this.J = (0, g.Pa)(this.HA, this);
      this.T = (0, g.Pa)(this.h1, this);
      this.ea = (0, g.Pa)(this.l1, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.ZL, this), olb(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.ZL(c)
          : g.Xu(
              (0, g.Pa)(function () {
                this.ZL(c);
              }, this),
              0
            ));
      (a = jlb()) && J9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ea);
    },
    L9 = function (a) {
      return new E9(a.C.getPlayerContextData());
    },
    olb = function (a) {
      g.Jb(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.I.push(this.C.subscribe(b, g.Sa(this.C2, b), this));
        },
        a
      );
    },
    plb = function (a) {
      g.Jb(
        a.I,
        function (b) {
          this.C.unsubscribeByKey(b);
        },
        a
      );
      a.I.length = 0;
    },
    M9 = function (a) {
      return 1 == a.getState();
    },
    N9 = function (a, b) {
      var c = a.D;
      50 > c.j.length + c.u.length && a.D.u.push(b);
    },
    qlb = function (a, b, c) {
      var d = L9(a);
      G9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      O9(a, d);
    },
    P9 = function (a, b, c) {
      a.C.sendMessage(b, c);
    },
    O9 = function (a, b) {
      plb(a);
      a.C.setPlayerContextData(nlb(b));
      olb(a);
    },
    J9 = function (a, b) {
      a.u &&
        (a.u.removeUpdateListener(a.Z),
        a.u.removeMediaListener(a.J),
        a.HA(null));
      a.u = b;
      a.u &&
        (b9("Setting cast session: " + a.u.sessionId),
        a.u.addUpdateListener(a.Z),
        a.u.addMediaListener(a.J),
        a.u.media.length && a.HA(a.u.media[0]));
    },
    rlb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = L9(a);
        b.contentId != d.videoId &&
          b9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        G9(d, a.j.getEstimatedTime());
        O9(a, d);
      } else b9("No cast media video. Ignoring state update.");
    },
    Q9 = function (a, b, c) {
      return (0, g.Pa)(function (d) {
        this.yf(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.yf("Retrying " + b + " using MDx browser channel."),
          P9(this, b, c));
      }, a);
    },
    T9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.qB.call(this);
      var e = this;
      this.I = NaN;
      this.Aa = !1;
      this.Z = this.T = this.oa = this.ya = NaN;
      this.ea = [];
      this.D = this.J = this.C = this.j = this.u = null;
      this.Ma = a;
      this.Ka = d;
      this.ea.push(
        g.by(window, "beforeunload", function () {
          e.nw(2);
        })
      );
      this.B = [];
      this.j = new E9();
      this.Pa = b.id;
      this.Ba = b.idType;
      this.u = dkb(this.Ma, c, this.eO, "shortLived" == this.Ba, this.Pa);
      this.u.Qa("channelOpened", function () {
        slb(e);
      });
      this.u.Qa("channelClosed", function () {
        R9("Channel closed");
        isNaN(e.I) ? j8(!0) : j8();
        e.dispose();
      });
      this.u.Qa("channelError", function (f) {
        j8();
        isNaN(e.Pz())
          ? (1 == f &&
              "shortLived" == e.Ba &&
              e.ma("browserChannelAuthError", f),
            R9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Aa = !0),
            R9(
              "Channel error: " + f + " with reconnection in " + e.Pz() + " ms"
            ),
            S9(e, 2));
      });
      this.u.Qa("channelMessage", function (f) {
        tlb(e, f);
      });
      this.u.Hp(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.IA() && g.FA("yt-remote-session-video-id", f);
      });
    },
    ulb = function (a) {
      return g.lb(a.B, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    R9 = function (a) {
      a9("conn", a);
    },
    S9 = function (a, b) {
      a.ma("proxyStateChange", b);
    },
    vlb = function (a) {
      a.I = g.Xu(function () {
        R9("Connecting timeout");
        a.nw(1);
      }, 2e4);
    },
    wlb = function (a) {
      g.Zu(a.I);
      a.I = NaN;
    },
    xlb = function (a) {
      g.Zu(a.ya);
      a.ya = NaN;
    },
    zlb = function (a) {
      ylb(a);
      a.oa = g.Xu(function () {
        U9(a, "getNowPlaying");
      }, 2e4);
    },
    ylb = function (a) {
      g.Zu(a.oa);
      a.oa = NaN;
    },
    slb = function (a) {
      R9("Channel opened");
      a.Aa &&
        ((a.Aa = !1),
        xlb(a),
        (a.ya = g.Xu(function () {
          R9("Timing out waiting for a screen.");
          a.nw(1);
        }, 15e3)));
    },
    Blb = function (a, b) {
      var c = null;
      if (b) {
        var d = ulb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Da("yt.mdx.remote.remoteClient_", c);
      b && (wlb(a), xlb(a));
      c = a.u.Kw() && isNaN(a.I);
      b == c
        ? b && (S9(a, 1), U9(a, "getSubtitlesTrack"))
        : b
        ? (a.IQ() && a.j.reset(), S9(a, 1), U9(a, "getNowPlaying"), Alb(a))
        : a.nw(1);
    },
    Clb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.dd(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.ma("remotePlayerChange"));
    },
    Dlb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      I9(a.j, d, e);
      a.ma("remoteQueueChange", c);
    },
    Flb = function (a, b) {
      b.params = b.params || {};
      Dlb(a, b, "NOW_PLAYING_MAY_CHANGE");
      Elb(a, b);
      a.ma("autoplayDismissed");
    },
    Elb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      G9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.T = isNaN(c) ? 0 : c;
      a.j.Uj(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.B = d;
      c.u = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.C = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? zlb(a) : ylb(a);
      a.ma("remotePlayerChange");
    },
    Glb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        G9(a.j, isNaN(b) ? 0 : b);
        a.ma("remotePlayerChange");
      }
    },
    Hlb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.ma("remotePlayerChange");
    },
    Ilb = function (a, b) {
      a.J = b.params.videoId;
      a.ma("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    Jlb = function (a, b) {
      a.J = b.params.videoId || null;
      a.ma("autoplayUpNext", a.J);
    },
    Klb = function (a, b) {
      a.D = b.params.autoplayMode;
      a.ma("autoplayModeChange", a.D);
      "DISABLED" == a.D && a.ma("autoplayDismissed");
    },
    Llb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.Bn = "true" == b.params.hasPrevious;
      a.j.hasNext = c;
      a.ma("previousNextChange");
    },
    tlb = function (a, b) {
      b = b.message;
      b.params
        ? R9("Received: action=" + b.action + ", params=" + g.$h(b.params))
        : R9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = a8(b.params.devices);
          a.B = g.Pg(b, function (d) {
            return new c8(d);
          });
          b = !!g.lb(a.B, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Blb(a, b);
          b = a.vR("mlm");
          a.ma("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.vb(a.B, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Blb(a, !1);
          break;
        case "remoteConnected":
          var c = new c8(a8(b.params.device));
          g.lb(a.B, function (d) {
            return d.equals(c);
          }) || ohb(a.B, c);
          break;
        case "remoteDisconnected":
          c = new c8(a8(b.params.device));
          g.vb(a.B, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          Dlb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          Flb(a, b);
          break;
        case "onStateChange":
          Elb(a, b);
          break;
        case "onAdStateChange":
          Glb(a, b);
          break;
        case "onVolumeChanged":
          Hlb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          Clb(a, b);
          break;
        case "nowAutoplaying":
          Ilb(a, b);
          break;
        case "autoplayDismissed":
          a.ma("autoplayDismissed");
          break;
        case "autoplayUpNext":
          Jlb(a, b);
          break;
        case "onAutoplayModeChanged":
          Klb(a, b);
          break;
        case "onHasPreviousNextChanged":
          Llb(a, b);
          break;
        case "requestAssistedSignIn":
          a.ma("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.ma("loopModeChange", b.params.loopMode);
          break;
        default:
          R9("Unrecognized action: " + b.action);
      }
    },
    Alb = function (a) {
      g.Zu(a.Z);
      a.Z = g.Xu(function () {
        a.nw(1);
      }, 864e5);
    },
    U9 = function (a, b, c) {
      c
        ? R9("Sending: action=" + b + ", params=" + g.$h(c))
        : R9("Sending: action=" + b);
      a.u.sendMessage(b, c);
    },
    Mlb = function (a) {
      f9.call(this, "ScreenServiceProxy");
      this.og = a;
      this.j = [];
      this.j.push(this.og.$_s("screenChange", (0, g.Pa)(this.RW, this)));
      this.j.push(this.og.$_s("onlineScreenChange", (0, g.Pa)(this.e2, this)));
    },
    Rlb = function (a, b) {
      Ohb();
      if (!k8 || !k8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.M("MDX_CONFIG") || b;
        Fhb();
        Jhb();
        V9 ||
          ((V9 = new Y8(b ? b.loungeApiHost : void 0)),
          Phb() && (V9.j = "/api/loungedev"));
        W9 ||
          ((W9 = g.Fa("yt.mdx.remote.deferredProxies_") || []),
          g.Da("yt.mdx.remote.deferredProxies_", W9));
        Nlb();
        var c = X9();
        if (!c) {
          var d = new k9(V9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Da("yt.mdx.remote.screenService_", d);
          c = X9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Da(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          elb(
            a,
            d,
            function (f) {
              f
                ? Y9() && D9(Y9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    b8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Fa("yt.mdx.remote.initialized_") &&
          (g.Da("yt.mdx.remote.initialized_", !0),
          Z9("Initializing: " + g.$h(b)),
          $9.push(
            g.vy("yt-remote-cast2-api-ready", function () {
              b8("yt-remote-api-ready");
            })
          ),
          $9.push(
            g.vy("yt-remote-cast2-availability-change", function () {
              b8("yt-remote-receiver-availability-change");
            })
          ),
          $9.push(
            g.vy("yt-remote-cast2-receiver-selected", function () {
              a$(null);
              b8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          $9.push(
            g.vy("yt-remote-cast2-receiver-resumed", function () {
              b8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          $9.push(g.vy("yt-remote-cast2-session-change", Olb)),
          $9.push(
            g.vy("yt-remote-connection-change", function (f) {
              f ? D9(Y9(), "YouTube TV") : b$() || (D9(null, null), ilb());
            })
          ),
          $9.push(
            g.vy("yt-remote-cast2-session-failed", function () {
              b8("yt-remote-connection-failed");
            })
          ),
          (a = Plb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.Cu("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          Z9(" -- with channel params: " + g.$h(a)),
          a
            ? (g.FA("yt-remote-session-app", a.app),
              g.FA("yt-remote-session-name", a.name))
            : (g.HA("yt-remote-session-app"), g.HA("yt-remote-session-name")),
          g.Da("yt.mdx.remote.channelParams_", a),
          c.start(),
          Y9() || Qlb());
      }
    },
    Slb = function () {
      var a = X9().og.$_gos();
      var b = c$();
      b && d$() && (Ehb(a, b) || a.push(b));
      return Dhb(a);
    },
    Ulb = function () {
      var a = Tlb();
      !a &&
        B9() &&
        hlb() &&
        (a = { key: "cast-selector-receiver", name: hlb() });
      return a;
    },
    Tlb = function () {
      var a = Slb(),
        b = c$();
      b || (b = b$());
      return g.lb(a, function (c) {
        return b && e8(b, c.key) ? !0 : !1;
      });
    },
    c$ = function () {
      var a = Y9();
      if (!a) return null;
      var b = X9().Fj();
      return g8(b, a);
    },
    Olb = function (a) {
      Z9("remote.onCastSessionChange_: " + f8(a));
      if (a) {
        var b = c$();
        if (b && b.id == a.id) {
          if (
            (D9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            e$ && (e$.token = a), (b = d$()) && b.Hp(a);
        } else b && f$(), g$(a, 1);
      } else d$() && f$();
    },
    f$ = function () {
      C9() ? A9().stopSession() : z9("stopSession called before API ready.");
      var a = d$();
      a && (a.disconnect(1), Vlb(null));
    },
    Wlb = function () {
      var a = d$();
      return !!a && 3 != a.getProxyState();
    },
    Z9 = function (a) {
      a9("remote", a);
    },
    X9 = function () {
      if (!Xlb) {
        var a = g.Fa("yt.mdx.remote.screenService_");
        Xlb = a ? new Mlb(a) : null;
      }
      return Xlb;
    },
    Y9 = function () {
      return g.Fa("yt.mdx.remote.currentScreenId_");
    },
    Ylb = function (a) {
      g.Da("yt.mdx.remote.currentScreenId_", a);
    },
    Zlb = function () {
      return g.Fa("yt.mdx.remote.connectData_");
    },
    a$ = function (a) {
      g.Da("yt.mdx.remote.connectData_", a);
    },
    d$ = function () {
      return g.Fa("yt.mdx.remote.connection_");
    },
    Vlb = function (a) {
      var b = d$();
      a$(null);
      a || Ylb("");
      g.Da("yt.mdx.remote.connection_", a);
      W9 &&
        (g.Jb(W9, function (c) {
          c(a);
        }),
        (W9.length = 0));
      b && !a
        ? b8("yt-remote-connection-change", !1)
        : !b && a && b8("yt-remote-connection-change", !0);
    },
    b$ = function () {
      var a = g.IA();
      if (!a) return null;
      var b = X9();
      if (!b) return null;
      b = b.Fj();
      return g8(b, a);
    },
    g$ = function (a, b) {
      Y9();
      c$() && c$();
      if (h$) e$ = a;
      else {
        Ylb(a.id);
        var c = g.Fa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new T9(V9, a, Plb(), c);
        a.connect(b, Zlb());
        a.subscribe("beforeDisconnect", function (d) {
          b8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          d$() && (d$(), Vlb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = c$();
          d &&
            "shortLived" == d.idType &&
            (C9()
              ? A9().handleBrowserChannelAuthError()
              : z9("refreshLoungeToken called before API ready."));
        });
        Vlb(a);
      }
    },
    Qlb = function () {
      var a = b$();
      a
        ? (Z9("Resume connection to: " + f8(a)), g$(a, 0))
        : (j8(),
          ilb(),
          Z9("Skipping connecting because no session screen found."));
    },
    Nlb = function () {
      var a = Plb();
      if (g.dd(a)) {
        a = i8();
        var b = g.GA("yt-remote-session-name") || "",
          c = g.GA("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        g.Da("yt.mdx.remote.channelParams_", a);
      }
    },
    Plb = function () {
      return g.Fa("yt.mdx.remote.channelParams_") || {};
    },
    bmb = function (a, b, c) {
      g.C.call(this);
      var d = this;
      this.module = a;
      this.G = b;
      this.uc = c;
      this.events = new g.cF(this);
      this.Z = this.events.N(this.G, "onVolumeChange", function (e) {
        $lb(d, e);
      });
      this.C = !1;
      this.D = new g.mL(64);
      this.j = new g.go(this.kU, 500, this);
      this.u = new g.go(this.lU, 1e3, this);
      this.J = new n8(this.r5, 0, this);
      this.B = {};
      this.T = new g.go(this.XU, 1e3, this);
      this.I = new o8(this.seekTo, 1e3, this);
      g.E(this, this.events);
      this.events.N(b, "onCaptionsTrackListChanged", this.N1);
      this.events.N(b, "captionschanged", this.f1);
      this.events.N(b, "captionssettingschanged", this.tU);
      this.events.N(b, "videoplayerreset", this.KE);
      this.events.N(b, "mdxautoplaycancel", function () {
        d.uc.bQ();
      });
      b.S("enable_mdx_video_play_directly") &&
        this.events.N(b, "videodatachange", function () {
          amb(d.module) || i$(d) || j$(d, 0);
        });
      a = this.uc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.VS, this);
      a.subscribe("remotePlayerChange", this.MA, this);
      a.subscribe("remoteQueueChange", this.KE, this);
      a.subscribe("previousNextChange", this.RS, this);
      a.subscribe("nowAutoplaying", this.LS, this);
      a.subscribe("autoplayDismissed", this.oS, this);
      g.E(this, this.j);
      g.E(this, this.u);
      g.E(this, this.J);
      g.E(this, this.T);
      g.E(this, this.I);
      this.tU();
      this.KE();
      this.MA();
    },
    $lb = function (a, b) {
      if (i$(a)) {
        a.uc.unsubscribe("remotePlayerChange", a.MA, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = L9(a.uc);
        if (c !== d.volume || b !== d.muted) a.uc.setVolume(c, b), a.T.start();
        a.uc.subscribe("remotePlayerChange", a.MA, a);
      }
    },
    cmb = function (a) {
      a.lc(0);
      a.j.stop();
      a.ac(new g.mL(64));
    },
    dmb = function (a, b) {
      if (i$(a) && !a.C) {
        var c = null;
        b && ((c = { style: a.G.getSubtitlesUserSettings() }), g.jd(c, b));
        a.uc.dO(a.G.getVideoData(1).videoId, c);
        a.B = L9(a.uc).trackData;
      }
    },
    j$ = function (a, b) {
      var c = a.G.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.G.getVideoData(1);
      a.uc.playVideo(c.videoId, b, d, e, c.playerParams, c.ya, nhb(c));
      a.ac(new g.mL(1));
    },
    emb = function (a, b) {
      if (b) {
        var c = a.G.getOption("captions", "tracklist", { mR: 1 });
        c && c.length
          ? (a.G.setOption("captions", "track", b), (a.C = !1))
          : (a.G.loadModule("captions"), (a.C = !0));
      } else a.G.setOption("captions", "track", {});
    },
    i$ = function (a) {
      return L9(a.uc).videoId === a.G.getVideoData(1).videoId;
    },
    k$ = function () {
      g.W.call(this, {
        F: "div",
        K: "ytp-mdx-popup-dialog",
        X: { role: "dialog" },
        W: [
          {
            F: "div",
            K: "ytp-mdx-popup-dialog-inner-content",
            W: [
              { F: "div", K: "ytp-mdx-popup-title", qa: "You're signed out" },
              {
                F: "div",
                K: "ytp-mdx-popup-description",
                qa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                F: "div",
                K: "ytp-mdx-privacy-popup-buttons",
                W: [
                  {
                    F: "button",
                    Ga: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    qa: "Cancel",
                  },
                  {
                    F: "button",
                    Ga: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    qa: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.iN(this, 250);
      this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm");
      g.E(this, this.j);
      this.N(this.cancelButton, "click", this.u);
      this.N(this.confirmButton, "click", this.B);
    },
    l$ = function (a) {
      g.W.call(this, {
        F: "div",
        K: "ytp-remote",
        W: [
          {
            F: "div",
            K: "ytp-remote-display-status",
            W: [
              { F: "div", K: "ytp-remote-display-status-icon", W: [g.$Ga()] },
              {
                F: "div",
                K: "ytp-remote-display-status-text",
                qa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.iN(this, 250);
      g.E(this, this.j);
      this.N(a, "presentingplayerstatechange", this.onStateChange);
      this.Cc(a.Fb());
    },
    m$ = function (a, b) {
      g.gT.call(this, "Play on", 1, a, b);
      this.G = a;
      this.Kr = {};
      this.N(a, "onMdxReceiversChange", this.u);
      this.N(a, "presentingplayerstatechange", this.u);
      this.u();
    },
    fmb = function (a) {
      g.QP.call(this, a);
      this.Ln = { key: Chb(), name: "This computer" };
      this.yk = null;
      this.subscriptions = [];
      this.oL = this.uc = null;
      this.Kr = [this.Ln];
      this.mq = this.Ln;
      this.Ld = new g.mL(64);
      this.HR = 0;
      this.Zg = -1;
      this.VA = !1;
      this.TA = this.ox = null;
      if (!g.fH(this.player.V()) && !g.gH(this.player.V())) {
        a = this.player;
        var b = g.BO(a);
        b && (b = b.Jl()) && ((b = new m$(a, b)), g.E(this, b));
        b = new l$(a);
        g.E(this, b);
        g.iP(a, b.element, 4);
        this.ox = new k$();
        g.E(this, this.ox);
        g.iP(a, this.ox.element, 4);
        this.VA = !!b$();
      }
    },
    n$ = function (a) {
      a.TA &&
        (a.player.removeEventListener("presentingplayerstatechange", a.TA),
        (a.TA = null));
    },
    gmb = function (a, b, c) {
      a.Ld = c;
      a.player.ma("presentingplayerstatechange", new g.FK(c, b));
    },
    o$ = function (a, b) {
      if (b.key !== a.mq.key)
        if (b.key === a.Ln.key) f$();
        else if (
          (amb(a) && hmb(a),
          (a.mq = b),
          !a.player
            .V()
            .S("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.gH(a.player.V()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .V()
                .S("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = g.LP(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.ya,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = nhb(d)) && (a.locationInfo = d);
            d = a;
          }
          Z9("Connecting to: " + g.$h(b));
          "cast-selector-receiver" == b.key
            ? (a$(d || null),
              (b = d || null),
              C9()
                ? A9().setLaunchParams(b)
                : z9("setLaunchParams called before ready."))
            : !d && Wlb() && Y9() == b.key
            ? b8("yt-remote-connection-change", !0)
            : (f$(),
              a$(d || null),
              (d = X9().Fj()),
              (b = g8(d, b.key)) && g$(b, 1));
        }
    },
    amb = function (a) {
      var b;
      (b = !a.player.V().S("mdx_enable_privacy_disclosure_ui")) ||
        (b =
          ((b = g.M("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser
            ? !0
            : !(!g.M("SESSION_INDEX") && !g.M("LOGGED_IN"))) ||
          a.VA ||
          !a.ox);
      return b ? !1 : g.wH(a.player.V()) || g.zH(a.player.V());
    },
    hmb = function (a) {
      a.player.Fb().Sc()
        ? a.player.pauseVideo()
        : ((a.TA = function (b) {
            !a.VA && g.HK(b, 8) && (a.player.pauseVideo(), n$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.TA));
      a.ox && a.ox.Lc();
      d$() || (h$ = !0);
    };
  g.sq.prototype.Cq = g.ba(1, function () {
    return g.ng(this, 6);
  });
  g.Xg.prototype.jC = g.ba(0, function () {
    var a = g.ah(this);
    return 4294967296 * g.ah(this) + (a >>> 0);
  });
  var Zgb,
    imb = g.Eh(function (a, b, c) {
      if (1 !== a.u) return !1;
      g.H(b, c, g.bh(a.j));
      return !0;
    }, g.Fh),
    jmb = g.Eh(function (a, b, c, d) {
      if (1 !== a.u) return !1;
      g.Dg(b, c, d, g.bh(a.j));
      return !0;
    }, g.Fh),
    kmb = g.Eh(function (a, b, c) {
      if (0 !== a.u) return !1;
      g.H(b, c, g.Zg(a.j));
      return !0;
    }, g.Gh),
    lmb = g.Eh(function (a, b, c, d) {
      if (0 !== a.u) return !1;
      g.Dg(b, c, d, g.Zg(a.j));
      return !0;
    }, g.Gh),
    mmb = g.Eh(function (a, b, c, d) {
      if (0 !== a.u) return !1;
      g.Dg(b, c, d, g.$g(a.j));
      return !0;
    }, g.Hh),
    nmb = g.Eh(
      function (a, b, c) {
        if (1 !== a.u) return !1;
        g.H(b, c, a.j.jC());
        return !0;
      },
      function (a, b, c) {
        ahb(a, c, g.ng(b, c));
      }
    ),
    omb = g.Eh(
      function (a, b, c) {
        if (1 !== a.u && 2 !== a.u) return !1;
        b = g.rg(b, c, 0, !1, g.$f(b.He));
        if (2 == a.u) {
          c = g.Xg.prototype.jC;
          var d = g.$g(a.j) >>> 0;
          for (d = a.j.j + d; a.j.j < d; ) b.push(c.call(a.j));
        } else b.push(a.j.jC());
        return !0;
      },
      function (a, b, c) {
        b = g.xg(b, c, Vgb);
        if (null != b) for (var d = 0; d < b.length; d++) ahb(a, c, b[d]);
      }
    ),
    pmb = g.Eh(function (a, b, c) {
      if (0 !== a.u) return !1;
      g.H(b, c, g.ch(a.j));
      return !0;
    }, bhb),
    qmb = g.Eh(function (a, b, c, d) {
      if (0 !== a.u) return !1;
      g.Dg(b, c, d, g.ch(a.j));
      return !0;
    }, bhb),
    rmb = g.Eh(
      function (a, b, c) {
        if (2 !== a.u) return !1;
        a = g.jh(a);
        g.Bg(b, c, a);
        return !0;
      },
      function (a, b, c) {
        b = g.xg(b, c, Wgb, !1);
        if (null != b)
          for (var d = 0; d < b.length; d++) {
            var e = b[d];
            null != e && g.vh(a, c, g.Pca(e));
          }
      }
    ),
    smb = g.Eh(function (a, b, c, d) {
      if (2 !== a.u) return !1;
      g.Dg(b, c, d, g.jh(a));
      return !0;
    }, g.jea),
    tmb = g.Eh(function (a, b, c, d, e) {
      if (2 !== a.u) return !1;
      g.gh(a, Xgb(b, d, c), e);
      return !0;
    }, chb),
    umb = g.Eh(function (a, b, c, d, e, f) {
      if (2 !== a.u) return !1;
      (f = g.Cg(b, f)) && f !== c && g.H(b, f, void 0, !1);
      b = Xgb(b, d, c);
      g.gh(a, b, e);
      return !0;
    }, chb),
    dhb = [1];
  g.v(ehb, g.J);
  g.v(fhb, g.J);
  var vmb = [ehb, 1, g.B2, [fhb, 1, imb, 2, kmb]];
  g.v(ghb, g.J);
  g.v(hhb, g.J);
  g.v(ihb, g.J);
  var wmb = [1, 2],
    xmb = [
      g.Ih,
      1,
      g.A2,
      5,
      nmb,
      2,
      tmb,
      [
        ghb,
        1,
        umb,
        [hhb, 1, g.A2, 2, g.A2, 3, pmb],
        wmb,
        2,
        umb,
        [ihb, 1, g.A2, 2, g.A2, 3, g.a3a, 4, pmb],
        wmb,
      ],
      3,
      rmb,
      6,
      omb,
      4,
      g.B2,
      [
        g.Jh,
        1,
        g.B2,
        [g.Kh, 1, smb, g.Nh, 2, mmb, g.Nh, 3, qmb, g.Nh],
        2,
        tmb,
        [g.Lh, 1, lmb, g.Mh, 2, jmb, g.Mh, 3, umb, vmb, g.Mh],
      ],
    ],
    pjb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    P8 = { "'": "\\'" },
    whb = {
      Oda: "atp",
      CUa: "ska",
      PQa: "que",
      bIa: "mus",
      BUa: "sus",
      eva: "dsp",
      nSa: "seq",
      pHa: "mic",
      Tna: "dpa",
      Xea: "cds",
      QHa: "mlm",
      Ona: "dsdtr",
      dJa: "ntb",
    },
    xhb = {
      xY: "u",
      CLASSIC: "cl",
      YX: "k",
      PV: "i",
      AV: "cr",
      gY: "m",
      LV: "g",
      ZO: "up",
    };
  c8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var k8,
    Ihb = "",
    Xhb = Rhb("loadCastFramework") || Rhb("loadCastApplicationFramework"),
    $hb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.Ua(n8, g.C);
  g.k = n8.prototype;
  g.k.oW = function (a) {
    this.C = arguments;
    this.j = !1;
    this.zc ? (this.B = g.Ta() + this.Nh) : (this.zc = g.Bf(this.D, this.Nh));
  };
  g.k.stop = function () {
    this.zc && (g.Ca.clearTimeout(this.zc), (this.zc = null));
    this.B = null;
    this.j = !1;
    this.C = [];
  };
  g.k.pause = function () {
    ++this.u;
  };
  g.k.resume = function () {
    this.u &&
      (--this.u,
      !this.u && this.j && ((this.j = !1), this.I.apply(null, this.C)));
  };
  g.k.ra = function () {
    this.stop();
    n8.jf.ra.call(this);
  };
  g.k.pW = function () {
    this.zc && (g.Ca.clearTimeout(this.zc), (this.zc = null));
    this.B
      ? ((this.zc = g.Bf(this.D, this.B - g.Ta())), (this.B = null))
      : this.u
      ? (this.j = !0)
      : ((this.j = !1), this.I.apply(null, this.C));
  };
  g.v(o8, g.C);
  g.k = o8.prototype;
  g.k.xG = function (a) {
    this.B = arguments;
    this.zc || this.u ? (this.j = !0) : lib(this);
  };
  g.k.stop = function () {
    this.zc &&
      (g.Ca.clearTimeout(this.zc),
      (this.zc = null),
      (this.j = !1),
      (this.B = null));
  };
  g.k.pause = function () {
    this.u++;
  };
  g.k.resume = function () {
    this.u--;
    this.u || !this.j || this.zc || ((this.j = !1), lib(this));
  };
  g.k.ra = function () {
    g.C.prototype.ra.call(this);
    this.stop();
  };
  p8.prototype.stringify = function (a) {
    return g.Ca.JSON.stringify(a, void 0);
  };
  p8.prototype.parse = function (a) {
    return g.Ca.JSON.parse(a, void 0);
  };
  g.Ua(mib, g.gb);
  g.Ua(nib, g.gb);
  var oib = null;
  g.Ua(qib, g.gb);
  g.Ua(rib, g.gb);
  g.Ua(sib, g.gb);
  tib.prototype.info = function () {};
  tib.prototype.warning = function () {};
  var Aib = {},
    v8 = {};
  g.k = t8.prototype;
  g.k.setTimeout = function (a) {
    this.zb = a;
  };
  g.k.sW = function (a) {
    a = a.target;
    var b = this.Wa;
    b && 3 == g.zi(a) ? b.xG() : this.HN(a);
  };
  g.k.HN = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.zi(this.j),
            c = this.j.u,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.AH ||
              (this.j && (this.u.u || g.Bi(this.j) || g.Ci(this.j))))
          ) {
            this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? q8(3) : q8(2));
            y8(this);
            var e = this.j.getStatus();
            this.Ub = e;
            b: if (yib(this)) {
              var f = g.Ci(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.zi(this.j);
              if (!this.u.B) {
                if ("undefined" === typeof TextDecoder) {
                  w8(this);
                  x8(this);
                  var m = "";
                  break b;
                }
                this.u.B = new g.Ca.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.u.u = !0),
                  (a += this.u.B.decode(f[c], { stream: l && c == h - 1 }));
              f.splice(0, h);
              this.u.j += a;
              this.ea = 0;
              m = this.u.j;
            } else m = g.Bi(this.j);
            if ((this.B = 200 == e)) {
              if (this.Xb && !this.Va) {
                b: {
                  if (this.j) {
                    var n = g.Di(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.Rb(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Va = !0), Bib(this, e);
                else {
                  this.B = !1;
                  this.I = 3;
                  r8(12);
                  w8(this);
                  x8(this);
                  break a;
                }
              }
              this.Ba
                ? (Cib(this, b, m),
                  g.AH &&
                    this.B &&
                    3 == b &&
                    (this.gb.Qa(this.kb, "tick", this.rW), this.kb.start()))
                : Bib(this, m);
              4 == b && w8(this);
              this.B &&
                !this.Ka &&
                (4 == b ? Eib(this.D, this) : ((this.B = !1), u8(this)));
            } else
              g.Xea(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.I = 3), r8(12))
                  : ((this.I = 0), r8(13)),
                w8(this),
                x8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.rW = function () {
    if (this.j) {
      var a = g.zi(this.j),
        b = g.Bi(this.j);
      this.ea < b.length &&
        (y8(this), Cib(this, a, b), this.B && 4 != a && u8(this));
    }
  };
  g.k.cancel = function () {
    this.Ka = !0;
    w8(this);
  };
  g.k.qW = function () {
    this.Z = null;
    var a = Date.now();
    0 <= a - this.Nb
      ? (2 != this.Pa && (q8(3), r8(17)), w8(this), (this.I = 2), x8(this))
      : Dib(this, this.Nb - a);
  };
  g.k.getLastError = function () {
    return this.I;
  };
  g.k.kJ = function () {
    return this.j;
  };
  Nib.prototype.cancel = function () {
    this.B = Pib(this);
    if (this.u) this.u.cancel(), (this.u = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.t(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Tib.prototype;
  g.k.IN = 8;
  g.k.Pg = 1;
  g.k.connect = function (a, b, c, d) {
    r8(0);
    this.xc = a;
    this.Ka = b || {};
    c && void 0 !== d && ((this.Ka.OSID = c), (this.Ka.OAID = d));
    this.kb = this.Bc;
    this.Ma = Jib(this, null, this.xc);
    C8(this);
  };
  g.k.disconnect = function () {
    Vib(this);
    if (3 == this.Pg) {
      var a = this.Wa++,
        b = this.Ma.clone();
      g.Hj(b, "SID", this.C);
      g.Hj(b, "RID", a);
      g.Hj(b, "TYPE", "terminate");
      F8(this, b);
      a = new t8(this, this.C, a);
      a.Pa = 2;
      a.J = Z7(b.clone());
      b = !1;
      g.Ca.navigator &&
        g.Ca.navigator.sendBeacon &&
        (b = g.Ca.navigator.sendBeacon(a.J.toString(), ""));
      !b && g.Ca.Image && ((new Image().src = a.J), (b = !0));
      b || ((a.j = xib(a.D, null)), a.j.send(a.J));
      a.ya = Date.now();
      u8(a);
    }
    ajb(this);
  };
  g.k.pg = function () {
    return 0 == this.Pg;
  };
  g.k.getState = function () {
    return this.Pg;
  };
  g.k.KN = function (a) {
    if (this.I)
      if (((this.I = null), 1 == this.Pg)) {
        if (!a) {
          this.Wa = Math.floor(1e5 * Math.random());
          a = this.Wa++;
          var b = new t8(this, "", a),
            c = this.Z;
          this.Nb && (c ? ((c = g.hd(c)), g.jd(c, this.Nb)) : (c = this.Nb));
          null !== this.J || this.sb || ((b.Ma = c), (c = null));
          var d;
          if (this.zb)
            a: {
              for (var e = (d = 0); e < this.B.length; e++) {
                b: {
                  var f = this.B[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.B.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = Yib(this, b, d);
          e = this.Ma.clone();
          g.Hj(e, "RID", a);
          g.Hj(e, "CVER", 22);
          this.Ba && g.Hj(e, "X-HTTP-Session-Id", this.Ba);
          F8(this, e);
          c &&
            (this.sb
              ? (d = "headers=" + g.Be(g.hga(c)) + "&" + d)
              : this.J && g.Lj(e, this.J, c));
          Iib(this.u, b);
          this.Xf && g.Hj(e, "TYPE", "init");
          this.zb
            ? (g.Hj(e, "$req", d),
              g.Hj(e, "SID", "null"),
              (b.Xb = !0),
              wib(b, e, null))
            : wib(b, e, d);
          this.Pg = 2;
        }
      } else
        3 == this.Pg &&
          (a ? Zib(this, a) : 0 == this.B.length || Oib(this.u) || Zib(this));
  };
  g.k.JN = function () {
    this.T = null;
    $ib(this);
    if (this.jd && !(this.gb || null == this.j || 0 >= this.qd)) {
      var a = 2 * this.qd;
      this.Aa = s8((0, g.Pa)(this.e1, this), a);
    }
  };
  g.k.e1 = function () {
    this.Aa &&
      ((this.Aa = null),
      (this.kb = !1),
      (this.gb = !0),
      r8(10),
      A8(this),
      $ib(this));
  };
  g.k.GK = function (a) {
    this.j == a && this.jd && !this.gb && (Uib(this), (this.gb = !0), r8(11));
  };
  g.k.tW = function () {
    null != this.ea && ((this.ea = null), A8(this), Gib(this), r8(19));
  };
  g.k.Y4 = function (a) {
    a ? r8(2) : r8(1);
  };
  g.k.isActive = function () {
    return !!this.D && this.D.isActive(this);
  };
  g.k = cjb.prototype;
  g.k.ON = function () {};
  g.k.NN = function () {};
  g.k.MN = function () {};
  g.k.LN = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.uW = function () {};
  g.Ua(H8, g.Cd);
  H8.prototype.open = function () {
    this.j.D = this.C;
    this.J && (this.j.Pa = !0);
    this.j.connect(this.I, this.u || void 0);
  };
  H8.prototype.close = function () {
    this.j.disconnect();
  };
  H8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.$h(a)), (a = c));
    b.B.push(new Mib(b.Ze++, a));
    3 == b.Pg && C8(b);
  };
  H8.prototype.ra = function () {
    this.j.D = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    H8.jf.ra.call(this);
  };
  g.Ua(ejb, mib);
  g.Ua(fjb, nib);
  g.Ua(G8, cjb);
  G8.prototype.ON = function () {
    this.j.dispatchEvent("m");
  };
  G8.prototype.NN = function (a) {
    this.j.dispatchEvent(new ejb(a));
  };
  G8.prototype.MN = function (a) {
    this.j.dispatchEvent(new fjb(a));
  };
  G8.prototype.LN = function () {
    this.j.dispatchEvent("n");
  };
  var J8 = new g.Cd();
  g.v(ijb, g.gb);
  g.k = L8.prototype;
  g.k.rs = null;
  g.k.xo = !1;
  g.k.fv = null;
  g.k.zG = null;
  g.k.bv = null;
  g.k.ev = null;
  g.k.Rp = null;
  g.k.Tp = null;
  g.k.us = null;
  g.k.Xh = null;
  g.k.eC = 0;
  g.k.pm = null;
  g.k.dC = null;
  g.k.Sp = null;
  g.k.vy = -1;
  g.k.VT = !0;
  g.k.qs = !1;
  g.k.yG = 0;
  g.k.cC = null;
  var njb = {},
    mjb = {};
  g.k = L8.prototype;
  g.k.setTimeout = function (a) {
    this.u = a;
  };
  g.k.wW = function (a) {
    a = a.target;
    var b = this.cC;
    b && 3 == g.zi(a) ? b.xG() : this.PN(a);
  };
  g.k.PN = function (a) {
    try {
      if (a == this.Xh)
        a: {
          var b = g.zi(this.Xh),
            c = this.Xh.u,
            d = this.Xh.getStatus();
          if ((g.Se && !g.Jc(10)) || (g.Kc && !g.Ic("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Bi(this.Xh))) break a;
          this.qs ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Ul(3) : this.j.Ul(2));
          sjb(this);
          var e = this.Xh.getStatus();
          this.vy = e;
          var f = g.Bi(this.Xh);
          if ((this.xo = 200 == e)) {
            4 == b && N8(this);
            if (this.Ba) {
              for (a = !0; !this.qs && this.eC < f.length; ) {
                var h = ojb(this, f);
                if (h == mjb) {
                  4 == b && ((this.Sp = 4), K8(15), (a = !1));
                  break;
                } else if (h == njb) {
                  this.Sp = 4;
                  K8(16);
                  a = !1;
                  break;
                } else tjb(this, h);
              }
              4 == b && 0 == f.length && ((this.Sp = 1), K8(17), (a = !1));
              this.xo = this.xo && a;
              a || (N8(this), O8(this));
            } else tjb(this, f);
            this.xo &&
              !this.qs &&
              (4 == b ? this.j.fC(this) : ((this.xo = !1), M8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Sp = 3), K8(13))
              : ((this.Sp = 0), K8(14)),
              N8(this),
              O8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.D3 = function (a) {
    I8((0, g.Pa)(this.C3, this, a), 0);
  };
  g.k.C3 = function (a) {
    this.qs || (sjb(this), tjb(this, a), M8(this));
  };
  g.k.aT = function (a) {
    I8((0, g.Pa)(this.B3, this, a), 0);
  };
  g.k.B3 = function (a) {
    this.qs || (N8(this), (this.xo = a), this.j.fC(this), this.j.Ul(4));
  };
  g.k.cancel = function () {
    this.qs = !0;
    N8(this);
  };
  g.k.vW = function () {
    this.fv = null;
    var a = Date.now();
    0 <= a - this.zG
      ? (2 != this.ev && this.j.Ul(3),
        N8(this),
        (this.Sp = 2),
        K8(18),
        O8(this))
      : rjb(this, this.zG - a);
  };
  g.k.getLastError = function () {
    return this.Sp;
  };
  g.k = wjb.prototype;
  g.k.BG = null;
  g.k.Ki = null;
  g.k.gF = !1;
  g.k.mU = null;
  g.k.jD = null;
  g.k.aK = null;
  g.k.CG = null;
  g.k.vk = null;
  g.k.zo = -1;
  g.k.wy = null;
  g.k.Ty = null;
  g.k.connect = function (a) {
    this.CG = a;
    a = R8(this.j, null, this.CG);
    K8(3);
    this.mU = Date.now();
    var b = this.j.T;
    null != b
      ? ((this.wy = b[0]),
        (this.Ty = b[1])
          ? ((this.vk = 1), xjb(this))
          : ((this.vk = 2), yjb(this)))
      : ($7(a, "MODE", "init"),
        (this.Ki = new L8(this)),
        (this.Ki.rs = this.BG),
        ljb(this.Ki, a, !1, null, !0),
        (this.vk = 0));
  };
  g.k.bZ = function (a) {
    if (a) (this.vk = 2), yjb(this);
    else {
      K8(4);
      var b = this.j;
      b.ym = b.iq.zo;
      V8(b, 9);
    }
    a && this.Ul(2);
  };
  g.k.AG = function (a) {
    return this.j.AG(a);
  };
  g.k.abort = function () {
    this.Ki && (this.Ki.cancel(), (this.Ki = null));
    this.zo = -1;
  };
  g.k.pg = function () {
    return !1;
  };
  g.k.QN = function (a, b) {
    this.zo = a.vy;
    if (0 == this.vk)
      if (b) {
        try {
          var c = this.u.parse(b);
        } catch (d) {
          a = this.j;
          a.ym = this.zo;
          V8(a, 2);
          return;
        }
        this.wy = c[0];
        this.Ty = c[1];
      } else (a = this.j), (a.ym = this.zo), V8(a, 2);
    else if (2 == this.vk)
      if (this.gF) K8(7), (this.aK = Date.now());
      else if ("11111" == b) {
        if (
          (K8(6),
          (this.gF = !0),
          (this.jD = Date.now()),
          (a = this.jD - this.mU),
          !g.Se || g.Jc(10) || 500 > a)
        )
          (this.zo = 200), this.Ki.cancel(), K8(12), S8(this.j, this, !0);
      } else K8(8), (this.jD = this.aK = Date.now()), (this.gF = !1);
  };
  g.k.fC = function () {
    this.zo = this.Ki.vy;
    if (this.Ki.xo)
      0 == this.vk
        ? this.Ty
          ? ((this.vk = 1), xjb(this))
          : ((this.vk = 2), yjb(this))
        : 2 == this.vk &&
          ((!g.Se || g.Jc(10) ? !this.gF : 200 > this.aK - this.jD)
            ? (K8(11), S8(this.j, this, !1))
            : (K8(12), S8(this.j, this, !0)));
    else {
      0 == this.vk ? K8(9) : 2 == this.vk && K8(10);
      var a = this.j;
      this.Ki.getLastError();
      a.ym = this.zo;
      V8(a, 2);
    }
  };
  g.k.yy = function () {
    return this.j.yy();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Ul = function (a) {
    this.j.Ul(a);
  };
  g.k = zjb.prototype;
  g.k.xm = null;
  g.k.zy = null;
  g.k.Ti = null;
  g.k.Wf = null;
  g.k.DG = null;
  g.k.gC = null;
  g.k.RN = null;
  g.k.hC = null;
  g.k.Ay = 0;
  g.k.yW = 0;
  g.k.Fh = null;
  g.k.Up = null;
  g.k.Ao = null;
  g.k.xs = null;
  g.k.iq = null;
  g.k.RF = null;
  g.k.qv = -1;
  g.k.SN = -1;
  g.k.ym = -1;
  g.k.ov = 0;
  g.k.hv = 0;
  g.k.ws = 8;
  g.Ua(Bjb, g.gb);
  g.Ua(Cjb, g.gb);
  g.k = zjb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    K8(0);
    this.DG = b;
    this.zy = c || {};
    d && void 0 !== e && ((this.zy.OSID = d), (this.zy.OAID = e));
    this.J ? (I8((0, g.Pa)(this.OP, this, a), 100), Ejb(this)) : this.OP(a);
  };
  g.k.disconnect = function () {
    Fjb(this);
    if (3 == this.j) {
      var a = this.Ay++,
        b = this.gC.clone();
      g.Hj(b, "SID", this.C);
      g.Hj(b, "RID", a);
      g.Hj(b, "TYPE", "terminate");
      U8(this, b);
      a = new L8(this, this.C, a);
      a.ev = 2;
      a.Rp = Z7(b.clone());
      new Image().src = a.Rp.toString();
      a.bv = Date.now();
      M8(a);
    }
    Pjb(this);
  };
  g.k.OP = function (a) {
    this.iq = new wjb(this);
    this.iq.BG = this.xm;
    this.iq.u = this.D;
    this.iq.connect(a);
  };
  g.k.pg = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.UN = function (a) {
    this.Up = null;
    Kjb(this, a);
  };
  g.k.TN = function () {
    this.Ao = null;
    this.Wf = new L8(this, this.C, "rpc", this.I);
    this.Wf.rs = this.xm;
    this.Wf.yG = 0;
    var a = this.RN.clone();
    g.Hj(a, "RID", "rpc");
    g.Hj(a, "SID", this.C);
    g.Hj(a, "CI", this.RF ? "0" : "1");
    g.Hj(a, "AID", this.qv);
    U8(this, a);
    if (!g.Se || g.Jc(10))
      g.Hj(a, "TYPE", "xmlhttp"), ljb(this.Wf, a, !0, this.hC, !1);
    else {
      g.Hj(a, "TYPE", "html");
      var b = this.Wf,
        c = !!this.hC;
      b.ev = 3;
      b.Rp = Z7(a.clone());
      qjb(b, c);
    }
  };
  g.k.QN = function (a, b) {
    if (0 != this.j && (this.Wf == a || this.Ti == a))
      if (((this.ym = a.vy), this.Ti == a && 3 == this.j))
        if (7 < this.ws) {
          try {
            var c = this.D.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.Ao) {
                  if (this.Wf)
                    if (this.Wf.bv + 3e3 < this.Ti.bv)
                      T8(this), this.Wf.cancel(), (this.Wf = null);
                    else break a;
                  Njb(this);
                  K8(19);
                }
              }
            else
              (this.SN = a[1]),
                0 < this.SN - this.qv &&
                  37500 > a[2] &&
                  this.RF &&
                  0 == this.hv &&
                  !this.xs &&
                  (this.xs = I8((0, g.Pa)(this.zW, this), 6e3));
          else V8(this, 11);
        } else null != b && V8(this, 11);
      else if ((this.Wf == a && T8(this), !g.Rb(b)))
        for (a = this.D.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.qv = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.C = c[1]),
                  (this.hC = c[2]),
                  (c = c[3]),
                  null != c ? (this.ws = c) : (this.ws = 6),
                  (this.j = 3),
                  this.Fh && this.Fh.XN(),
                  (this.RN = R8(this, this.yy() ? this.hC : null, this.DG)),
                  Ljb(this))
                : "stop" == c[0] && V8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? V8(this, 7)
                  : "noop" != c[0] && this.Fh && this.Fh.WN(c),
                (this.hv = 0));
  };
  g.k.zW = function () {
    null != this.xs &&
      ((this.xs = null), this.Wf.cancel(), (this.Wf = null), Njb(this), K8(20));
  };
  g.k.fC = function (a) {
    if (this.Wf == a) {
      T8(this);
      this.Wf = null;
      var b = 2;
    } else if (this.Ti == a) (this.Ti = null), (b = 1);
    else return;
    this.ym = a.vy;
    if (0 != this.j)
      if (a.xo)
        if (1 == b) {
          b = Date.now() - a.bv;
          var c = J8;
          c.dispatchEvent(new Bjb(c, a.us ? a.us.length : 0, b, this.ov));
          Djb(this);
          this.B.length = 0;
        } else Ljb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.ym))) {
          if ((d = 1 == b))
            this.Ti || this.Up || 1 == this.j || 2 <= this.ov
              ? (d = !1)
              : ((this.Up = I8(
                  (0, g.Pa)(this.UN, this, a),
                  Mjb(this, this.ov)
                )),
                this.ov++,
                (d = !0));
          d = !(d || (2 == b && Njb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              V8(this, 5);
              break;
            case 4:
              V8(this, 10);
              break;
            case 3:
              V8(this, 6);
              break;
            case 7:
              V8(this, 12);
              break;
            default:
              V8(this, 2);
          }
      }
  };
  g.k.xW = function (a) {
    if (!g.pb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.X4 = function (a) {
    a ? K8(2) : (K8(1), Ojb(this, 8));
  };
  g.k.AG = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.vi();
    a.J = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Fh && this.Fh.isActive(this);
  };
  g.k.Ul = function (a) {
    var b = J8;
    b.dispatchEvent(new Cjb(b, a));
  };
  g.k.yy = function () {
    return !(!g.Se || g.Jc(10));
  };
  g.k = Qjb.prototype;
  g.k.XN = function () {};
  g.k.WN = function () {};
  g.k.VN = function () {};
  g.k.EG = function () {};
  g.k.YN = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = Rjb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.u.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.u = [];
  };
  g.k.contains = function (a) {
    return g.pb(this.j, a) || g.pb(this.u, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.G2a)(b, a);
    0 <= c ? (g.rb(b, c), (b = !0)) : (b = !1);
    return b || g.sb(this.u, a);
  };
  g.k.Ik = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.u.length;
    for (b = 0; b < c; ++b) a.push(this.u[b]);
    return a;
  };
  g.v(Sjb, g.gb);
  g.v(Tjb, g.gb);
  g.Ua(W8, g.C);
  g.k = W8.prototype;
  g.k.v3 = function () {
    this.Nh = Math.min(3e5, 2 * this.Nh);
    this.B();
    this.u && this.start();
  };
  g.k.start = function () {
    var a = this.Nh + 15e3 * Math.random();
    g.ho(this.j, a);
    this.u = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.u = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Nh = 5e3;
  };
  Vjb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.Cu("enable_client_streamz_web")) {
      a = g.t(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.rea(c.value)),
          (c = { serializedIncrementBatch: g.Jf(g.Dh(c, xmb)) }),
          g.mw("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var X8;
  g.Ua(Wjb, Qjb);
  g.k = Wjb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.B.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.B.unsubscribe(a, b, c);
  };
  g.k.fh = function (a) {
    return this.B.fh(a);
  };
  g.k.ma = function (a, b) {
    return this.B.ma.apply(this.B, arguments);
  };
  g.k.dispose = function () {
    this.ea ||
      ((this.ea = !0),
      g.ab(this.B),
      this.disconnect(),
      g.ab(this.u),
      (this.u = null),
      (this.oa = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ea;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Z = "";
      this.u.stop();
      this.I = a || null;
      this.D = b || 0;
      a = this.ya + "/test";
      b = this.ya + "/bind";
      var d = new zjb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Pa
        ),
        e = this.j;
      e && (e.Fh = null);
      d.Fh = this;
      this.j = d;
      Xjb(this);
      if (this.j) {
        d = g.M("ID_TOKEN");
        var f = this.j.xm || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.xm = f;
      }
      e
        ? ((3 != e.getState() && 0 == Hjb(e)) || e.getState(),
          this.j.connect(a, b, this.J, e.C, e.qv))
        : c
        ? this.j.connect(a, b, this.J, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.J);
    }
  };
  g.k.disconnect = function (a) {
    this.T = a || 0;
    this.u.stop();
    Xjb(this);
    this.j && (3 == this.j.getState() && Kjb(this.j), this.j.disconnect());
    this.T = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.jd(a, b);
    this.u.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.C.push(a)
      : this.Kw() && (Xjb(this), Gjb(this.j, a));
  };
  g.k.XN = function () {
    this.u.reset();
    this.I = null;
    this.D = 0;
    if (this.C.length) {
      var a = this.C;
      this.C = [];
      for (var b = 0, c = a.length; b < c; ++b) Gjb(this.j, a[b]);
    }
    this.ma("handlerOpened");
    cib(this.Ma, "BROWSER_CHANNEL");
  };
  g.k.VN = function (a) {
    var b = 2 == a && 401 == this.j.ym;
    4 == a || b || this.u.start();
    this.ma("handlerError", a, b);
    iib(this.Ba, "BROWSER_CHANNEL");
  };
  g.k.EG = function (a, b) {
    if (!this.u.isActive()) this.ma("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.C.push(e);
      }
    eib(this.Aa, "BROWSER_CHANNEL");
    a &&
      this.Wa.j.HG(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.Xa.j.HG(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.YN = function () {
    var a = { v: 2 };
    this.Z && (a.gsessionid = this.Z);
    0 != this.D && (a.ui = "" + this.D);
    0 != this.T && (a.ui = "" + this.T);
    this.I && g.jd(a, this.I);
    return a;
  };
  g.k.WN = function (a) {
    "S" == a[0]
      ? (this.Z = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.u.start(), this.j.disconnect())
      : this.ma("handlerMessage", new Ujb(a[0], a[1]));
    gib(this.Ka, "BROWSER_CHANNEL");
  };
  g.k.Kw = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Hp = function (a) {
    (this.J.loungeIdToken = a) || this.u.stop();
    if (this.Va && this.j) {
      var b = this.j.xm || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.xm = b;
    }
  };
  g.k.Cq = function () {
    return this.J.id;
  };
  g.k.Mq = function () {
    return this.u.isActive() ? this.u.u - Date.now() : NaN;
  };
  g.k.mu = function () {
    var a = this.u;
    g.io(a.j);
    a.start();
  };
  g.k.w4 = function () {
    this.u.isActive();
    0 == Hjb(this.j) && this.connect(this.I, this.D);
  };
  Y8.prototype.C = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Y8.prototype.B = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Y8.prototype.D = function (a) {
    a(Error("request timed out"));
  };
  g.v(Zjb, g.Cd);
  g.k = Zjb.prototype;
  g.k.connect = function (a, b, c) {
    this.hd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.hd.disconnect(a);
  };
  g.k.mu = function () {
    this.hd.mu();
  };
  g.k.Cq = function () {
    return this.hd.Cq();
  };
  g.k.Mq = function () {
    return this.hd.Mq();
  };
  g.k.Kw = function () {
    return this.hd.Kw();
  };
  g.k.EW = function () {
    this.dispatchEvent("channelOpened");
    var a = this.hd,
      b = this.j;
    g.FA("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.RF,
      sessionId: a.j.C,
      arrayId: a.j.qv,
    });
    g.FA("yt-remote-session-screen-id", b);
    a = h8();
    b = i8();
    g.pb(a, b) || a.push(b);
    Hhb(a);
    Jhb();
  };
  g.k.BW = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.DW = function (a) {
    this.dispatchEvent(new Sjb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Tjb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.hd.sendMessage(a, b);
  };
  g.k.Hp = function (a) {
    this.hd.Hp(a);
  };
  g.k.dispose = function () {
    this.hd.dispose();
  };
  g.k = $jb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.I &&
      (this.B.stop(),
      (this.T = a),
      (this.J = b),
      bkb(this),
      (a = g.M("ID_TOKEN"))
        ? (this.C["x-youtube-identity-token"] = a)
        : delete this.C["x-youtube-identity-token"],
      this.j &&
        ((this.u.device = this.j.device),
        (this.u.name = this.j.name),
        (this.u.app = this.j.app),
        (this.u.id = this.j.id),
        this.j.m0 && (this.u.mdxVersion = "" + this.j.m0),
        this.j.theme && (this.u.theme = this.j.theme),
        this.j.capabilities && (this.u.capabilities = this.j.capabilities),
        this.j.rZ && (this.u.cst = this.j.rZ)),
      0 !== this.J ? (this.u.ui = "" + this.J) : delete this.u.ui,
      Object.assign(this.u, this.T),
      (this.channel = new H8(this.pathPrefix, {
        H_: "gsessionid",
        q0: this.C,
        r0: this.u,
      })),
      this.channel.open(),
      (this.I = 2),
      akb(this));
  };
  g.k.disconnect = function (a) {
    this.Z = void 0 === a ? 0 : a;
    this.B.stop();
    bkb(this);
    this.channel &&
      (0 !== this.Z ? (this.u.ui = "" + this.Z) : delete this.u.ui,
      this.channel.close());
    this.Z = 0;
  };
  g.k.Mq = function () {
    return this.B.isActive() ? this.B.u - Date.now() : NaN;
  };
  g.k.mu = function () {
    var a = this.B;
    g.io(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (bkb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Hp = function (a) {
    a || this.B.stop();
    a
      ? (this.C["X-YouTube-LoungeId-Token"] = a)
      : delete this.C["X-YouTube-LoungeId-Token"];
  };
  g.k.Cq = function () {
    return this.j ? this.j.id : "";
  };
  g.k.ma = function (a) {
    return this.D.ma.apply(this.D, [a].concat(g.u(g.xa.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.D.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.D.unsubscribe(a, b, c);
  };
  g.k.fh = function (a) {
    return this.D.fh(a);
  };
  g.k.dispose = function () {
    this.ea ||
      ((this.ea = !0),
      g.ab(this.D),
      this.disconnect(),
      g.ab(this.B),
      (this.ya = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ea;
  };
  g.v(ckb, g.Cd);
  g.k = ckb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.mu = function () {
    this.j.mu();
  };
  g.k.Cq = function () {
    return this.j.Cq();
  };
  g.k.Mq = function () {
    return this.j.Mq();
  };
  g.k.Kw = function () {
    return 3 === this.j.I;
  };
  g.k.HW = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.FW = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.GW = function (a) {
    this.dispatchEvent(new Sjb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Tjb(401 === this.j.Hg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Hp = function (a) {
    this.j.Hp(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var kkb = Date.now(),
    $8 = null,
    d9 = Array(50),
    c9 = -1,
    e9 = !1;
  g.Ua(f9, g.qB);
  f9.prototype.Fj = function () {
    return this.screens;
  };
  f9.prototype.contains = function (a) {
    return !!Ehb(this.screens, a);
  };
  f9.prototype.get = function (a) {
    return a ? g8(this.screens, a) : null;
  };
  f9.prototype.info = function (a) {
    a9(this.I, a);
  };
  g.v(okb, g.qB);
  g.k = okb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.zc) && this.nT();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.zc) || (g.Zu(this.zc), (this.zc = NaN));
  };
  g.k.ra = function () {
    this.stop();
    g.qB.prototype.ra.call(this);
  };
  g.k.nT = function () {
    this.zc = NaN;
    this.j = g.bv(Z8(this.B, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.J },
      timeout: 5e3,
      onSuccess: (0, g.Pa)(this.JW, this),
      onError: (0, g.Pa)(this.IW, this),
      onTimeout: (0, g.Pa)(this.KW, this),
    });
  };
  g.k.JW = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.C;
    a.name = this.I;
    b = -1;
    this.D &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.ma("pairingComplete", new d8(a), b);
  };
  g.k.IW = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.u >= ymb.length
        ? this.ma("pairingFailed", Error("DIAL polling timed out"))
        : ((a = ymb[this.u]),
          (this.zc = g.Xu((0, g.Pa)(this.nT, this), a)),
          this.u++)
      : this.ma("pairingFailed", Error("Server error " + a.status));
  };
  g.k.KW = function () {
    this.j = null;
    this.ma("pairingFailed", Error("Server not responding"));
  };
  var ymb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.Ua(h9, f9);
  g.k = h9.prototype;
  g.k.start = function () {
    g9(this) && this.ma("screenChange");
    !g.GA("yt-remote-lounge-token-expiration") && pkb(this);
    g.Zu(this.j);
    this.j = g.Xu((0, g.Pa)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    g9(this);
    lkb(this, a);
    i9(this, !1);
    this.ma("screenChange");
    b(a);
    a.token || pkb(this);
  };
  g.k.remove = function (a, b) {
    var c = g9(this);
    nkb(this, a) && (i9(this, !1), (c = !0));
    b(a);
    c && this.ma("screenChange");
  };
  g.k.QF = function (a, b, c, d) {
    var e = g9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), i9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.ma("screenChange");
  };
  g.k.ra = function () {
    g.Zu(this.j);
    h9.jf.ra.call(this);
  };
  g.k.j_ = function (a) {
    g9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    i9(this, !b);
    b && a9(this.I, "Missed " + b + " lounge tokens.");
  };
  g.k.i_ = function (a) {
    a9(this.I, "Requesting lounge tokens failed: " + a);
  };
  g.v(rkb, g.qB);
  g.k = rkb.prototype;
  g.k.start = function () {
    var a = parseInt(g.GA("yt-remote-fast-check-period") || "0", 10);
    (this.C = g.Ta() - 144e5 < a ? 0 : a)
      ? j9(this)
      : ((this.C = g.Ta() + 3e5),
        g.FA("yt-remote-fast-check-period", this.C),
        this.FL());
  };
  g.k.isEmpty = function () {
    return g.dd(this.j);
  };
  g.k.update = function () {
    qkb("Updating availability on schedule.");
    var a = this.I(),
      b = g.Pc(
        this.j,
        function (c, d) {
          return c && !!g8(a, d);
        },
        this
      );
    ukb(this, b);
  };
  g.k.ra = function () {
    g.Zu(this.B);
    this.B = NaN;
    this.u && (this.u.abort(), (this.u = null));
    g.qB.prototype.ra.call(this);
  };
  g.k.FL = function () {
    g.Zu(this.B);
    this.B = NaN;
    this.u && this.u.abort();
    var a = vkb(this);
    if (phb(a)) {
      var b = Z8(this.D, "/pairing/get_screen_availability");
      this.u = Yjb(
        this.D,
        b,
        { lounge_token: g.Yc(a).join(",") },
        (0, g.Pa)(this.W2, this, a),
        (0, g.Pa)(this.V2, this)
      );
    } else ukb(this, {}), j9(this);
  };
  g.k.W2 = function (a, b) {
    this.u = null;
    var c = g.Yc(vkb(this));
    if (g.Hb(c, g.Yc(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      ukb(this, c);
      j9(this);
    } else this.yf("Changing Screen set during request."), this.FL();
  };
  g.k.V2 = function (a) {
    this.yf("Screen availability failed: " + a);
    this.u = null;
    j9(this);
  };
  g.k.yf = function (a) {
    a9("OnlineScreenService", a);
  };
  g.Ua(k9, f9);
  g.k = k9.prototype;
  g.k.start = function () {
    this.u.start();
    this.j.start();
    this.screens.length &&
      (this.ma("screenChange"),
      this.j.isEmpty() || this.ma("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.u.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.u.remove(a, b, c);
    this.j.update();
  };
  g.k.QF = function (a, b, c, d) {
    this.u.contains(a)
      ? this.u.QF(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        a9(this.I, a),
        d(Error(a)));
  };
  g.k.Fj = function (a) {
    return a
      ? this.screens
      : g.wb(
          this.screens,
          g.Cm(
            this.B,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.ZN = function () {
    return g.Cm(
      this.Fj(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.aO = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new okb(this.C, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.ab(l);
      e(l9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.ab(l);
      f(m);
    });
    l.start();
    return (0, g.Pa)(l.stop, l);
  };
  g.k.LW = function (a, b, c, d) {
    g.bv(Z8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.Pa)(function (e, f) {
        e = new d8(f.screen || {});
        if (!e.name || zkb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); zkb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(l9(this, e));
      }, this),
      onError: (0, g.Pa)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.Pa)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.ra = function () {
    g.ab(this.u);
    g.ab(this.j);
    k9.jf.ra.call(this);
  };
  g.k.s_ = function () {
    Bkb(this);
    this.ma("screenChange");
    this.j.update();
  };
  k9.prototype.dispose = k9.prototype.dispose;
  g.Ua(m9, g.qB);
  g.k = m9.prototype;
  g.k.getScreen = function () {
    return this.C;
  };
  g.k.zi = function (a) {
    this.isDisposed() ||
      (a && (o9(this, "" + a), this.ma("sessionFailed")),
      (this.C = null),
      this.ma("sessionScreen", null));
  };
  g.k.info = function (a) {
    a9(this.Ba, a);
  };
  g.k.bO = function () {
    return null;
  };
  g.k.XL = function (a) {
    var b = this.j;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.Pa)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.Pa)(function () {
        o9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.ra = function () {
    this.XL("");
    m9.jf.ra.call(this);
  };
  g.v(p9, m9);
  g.k = p9.prototype;
  g.k.WL = function (a) {
    if (this.u) {
      if (this.u == a) return;
      o9(this, "Overriding cast session with new session object");
      Nkb(this);
      this.ya = !1;
      this.Z = "unknown";
      this.u.removeUpdateListener(this.oa);
      this.u.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Aa
      );
    }
    this.u = a;
    this.u.addUpdateListener(this.oa);
    this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa);
    Ikb(this, "getMdxSessionStatus");
  };
  g.k.Tw = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.$h(a));
  };
  g.k.stop = function () {
    this.u
      ? this.u.stop(
          (0, g.Pa)(function () {
            this.zi();
          }, this),
          (0, g.Pa)(function () {
            this.zi(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.zi(Error("Stopping cast device without session."));
  };
  g.k.XL = function () {};
  g.k.ra = function () {
    this.info("disposeInternal");
    Nkb(this);
    this.u &&
      (this.u.removeUpdateListener(this.oa),
      this.u.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Aa
      ));
    this.u = null;
    m9.prototype.ra.call(this);
  };
  g.k.N3 = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = a8(b)), g.La(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.$h(b)),
            a)
          ) {
            case "mdxSessionStatus":
              Fkb(this, b);
              break;
            case "loungeToken":
              Jkb(this, b);
              break;
            default:
              o9(this, "Unknown youtube message: " + a);
          }
        else o9(this, "Unable to parse message.");
      else o9(this, "No data in message.");
  };
  g.k.KQ = function (a, b, c, d) {
    g.Zu(this.T);
    this.T = 0;
    ykb(
      this.B,
      this.j.label,
      a,
      this.j.friendlyName,
      (0, g.Pa)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (o9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.T = g.Xu((0, g.Pa)(this.KQ, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.bO = function () {
    return this.u;
  };
  g.k.MW = function (a) {
    this.isDisposed() || a || (o9(this, "Cast session died."), this.zi());
  };
  g.v(q9, m9);
  g.k = q9.prototype;
  g.k.WL = function (a) {
    this.u = a;
    this.u.addUpdateListener(this.Ka);
  };
  g.k.Tw = function (a) {
    this.Ma = a;
    this.ea();
  };
  g.k.stop = function () {
    Vkb(this);
    this.u
      ? this.u.stop(
          (0, g.Pa)(this.zi, this, null),
          (0, g.Pa)(this.zi, this, "Failed to stop DIAL device.")
        )
      : this.zi();
  };
  g.k.ra = function () {
    Vkb(this);
    this.u && this.u.removeUpdateListener(this.Ka);
    this.u = null;
    m9.prototype.ra.call(this);
  };
  g.k.NW = function (a) {
    this.isDisposed() ||
      a ||
      (o9(this, "DIAL session died."),
      this.D(),
      (this.D = function () {}),
      this.zi());
  };
  g.v(t9, m9);
  t9.prototype.stop = function () {
    this.zi();
  };
  t9.prototype.WL = function () {};
  t9.prototype.Tw = function () {
    g.Zu(this.u);
    this.u = NaN;
    var a = g8(this.B.Fj(), this.j.label);
    a ? n9(this, a) : this.zi(Error("No such screen"));
  };
  t9.prototype.ra = function () {
    g.Zu(this.u);
    this.u = NaN;
    m9.prototype.ra.call(this);
  };
  g.v(u9, g.qB);
  g.k = u9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.T, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Z || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.I
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.Pa)(this.H2, this);
    c = new chrome.cast.ApiConfig(c, (0, g.Pa)(this.WS, this), e, d, a);
    c.customDialLaunchCallback = (0, g.Pa)(this.v1, this);
    chrome.cast.initialize(
      c,
      (0, g.Pa)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.D),
          hkb(),
          this.u.subscribe("onlineScreenChange", (0, g.Pa)(this.cO, this)),
          (this.B = Ykb(this)),
          chrome.cast.setCustomReceivers(
            this.B,
            function () {},
            (0, g.Pa)(function (f) {
              this.yf("Failed to set initial custom receivers: " + g.$h(f));
            }, this)
          ),
          this.ma("yt-remote-cast2-availability-change", w9(this)),
          b(!0));
      }, this),
      (0, g.Pa)(function (f) {
        this.yf("Failed to initialize API: " + g.$h(f));
        b(!1);
      }, this)
    );
  };
  g.k.B4 = function (a, b) {
    v9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.getScreen();
      if (!a || (c && c.id != a))
        v9("Unsetting old screen status: " + this.j.j.friendlyName),
          x9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = g8(this.u.Fj(), a);
        if (!c) {
          v9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          v9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = Wkb(this, c);
        a ||
          (v9("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.B.push(a),
          chrome.cast.setCustomReceivers(
            this.B,
            function () {},
            (0, g.Pa)(function (d) {
              this.yf("Failed to set initial custom receivers: " + g.$h(d));
            }, this)
          ));
        v9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        x9(this, new t9(this.u, a), !0);
      }
      this.j.XL(b);
    } else v9("setConnectedScreenStatus: no screen.");
  };
  g.k.C4 = function (a) {
    this.isDisposed()
      ? this.yf("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.Tw(a)
      : this.yf("Setting connection data without a session");
  };
  g.k.PW = function () {
    this.isDisposed()
      ? this.yf("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), x9(this, null))
      : v9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.Pa)(this.WS, this),
      (0, g.Pa)(this.Z2, this)
    );
  };
  g.k.ra = function () {
    this.u.unsubscribe("onlineScreenChange", (0, g.Pa)(this.cO, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.D);
    var a = ekb,
      b = g.Fa("yt.mdx.remote.debug.handlers_");
    g.sb(b || [], a);
    g.ab(this.j);
    g.qB.prototype.ra.call(this);
  };
  g.k.yf = function (a) {
    a9("Controller", a);
  };
  g.k.YS = function (a, b) {
    this.j == a &&
      (b || x9(this, null), this.ma("yt-remote-cast2-session-change", b));
  };
  g.k.E2 = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          v9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.j.label != a.label)
                v9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.j.friendlyName
                ),
                  this.j.stop();
              else {
                v9("onReceiverAction_: Casting to active receiver.");
                this.j.getScreen() &&
                  this.ma("yt-remote-cast2-session-change", this.j.getScreen());
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                x9(this, new t9(this.u, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                x9(this, new q9(this.u, a, this.C, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                x9(this, new p9(this.u, a, this.config_));
                break;
              default:
                this.yf("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.j.label == a.label
              ? this.j.stop()
              : this.yf("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.yf("onReceiverAction_ called without receiver.");
  };
  g.k.v1 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.yf("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.j : null;
    if (!c || c.label != b.label)
      return (
        this.yf(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.getScreen())
        return (
          v9("Reselecting dial screen."),
          this.ma("yt-remote-cast2-session-change", this.j.getScreen()),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.yf(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      x9(this, new q9(this.u, b, this.C, this.config_));
    }
    b = this.j;
    b.T = a;
    b.T.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.T.extraData || {}),
        (c = a.screenId || null),
        r9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = Skb(
                b,
                {
                  name: b.j.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.T.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.Hu(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = Tkb(b, c)))
          : (a = Tkb(b, c)))
      : (a = Qkb(b));
    return a;
  };
  g.k.WS = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.I) {
      v9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            v9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              x9(this, new p9(this.u, c, this.config_), !0);
          else {
            this.yf(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.j,
          e = g8(this.u.Fj(), d.label);
        e &&
          e8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (v9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.ab(this.j),
          (this.j = new p9(this.u, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.Pa)(this.YS, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return Xkb(b, b.j);
          }),
          this.j.Tw(null));
        this.j.WL(a);
      }
    }
  };
  g.k.OW = function () {
    return this.j ? this.j.bO() : null;
  };
  g.k.Z2 = function (a) {
    this.isDisposed() ||
      (this.yf("Failed to estabilish a session: " + g.$h(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && x9(this, null),
      this.ma("yt-remote-cast2-session-failed"));
  };
  g.k.H2 = function (a) {
    v9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = w9(this);
      this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      w9(this) != b && this.ma("yt-remote-cast2-availability-change", w9(this));
    }
  };
  g.k.cO = function () {
    this.isDisposed() ||
      ((this.B = Ykb(this)),
      v9("Updating custom receivers: " + g.$h(this.B)),
      chrome.cast.setCustomReceivers(
        this.B,
        function () {},
        (0, g.Pa)(function () {
          this.yf("Failed to set custom receivers.");
        }, this)
      ),
      this.ma("yt-remote-cast2-availability-change", w9(this)));
  };
  u9.prototype.setLaunchParams = u9.prototype.C4;
  u9.prototype.setConnectedScreenStatus = u9.prototype.B4;
  u9.prototype.stopSession = u9.prototype.PW;
  u9.prototype.getCastSession = u9.prototype.OW;
  u9.prototype.requestSession = u9.prototype.requestSession;
  u9.prototype.init = u9.prototype.init;
  u9.prototype.dispose = u9.prototype.dispose;
  var glb = [];
  g.k = E9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    mlb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.Bn = a.hasPrevious),
      (this.hasNext = a.hasNext),
      (this.J = a.playerTime),
      (this.I = a.playerTimeAt),
      (this.C = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.D = a.duration),
      (this.T = a.loadedTime),
      (this.B = a.liveIngestionTime),
      (this.u = !isNaN(this.B)));
  };
  g.k.Sc = function () {
    return 1 == this.playerState;
  };
  g.k.isAdPlaying = function () {
    return 1081 == this.playerState;
  };
  g.k.Uj = function (a) {
    this.D = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.u ? this.D + F9(this) : this.D;
  };
  g.k.clone = function () {
    return new E9(nlb(this));
  };
  g.v(K9, g.qB);
  g.k = K9.prototype;
  g.k.getState = function () {
    return this.B;
  };
  g.k.Mq = function () {
    return this.C.getReconnectTimeout();
  };
  g.k.mu = function () {
    this.C.reconnect();
  };
  g.k.play = function () {
    M9(this)
      ? (this.j ? this.j.play(null, g.Gd, Q9(this, "play")) : P9(this, "play"),
        qlb(this, 1, H9(L9(this))),
        this.ma("remotePlayerChange"))
      : N9(this, this.play);
  };
  g.k.pause = function () {
    M9(this)
      ? (this.j
          ? this.j.pause(null, g.Gd, Q9(this, "pause"))
          : P9(this, "pause"),
        qlb(this, 2, H9(L9(this))),
        this.ma("remotePlayerChange"))
      : N9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (M9(this)) {
      if (this.j) {
        var b = L9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.Sc() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Gd, Q9(this, "seekTo", { newTime: a }));
      } else P9(this, "seekTo", { newTime: a });
      qlb(this, 3, a);
      this.ma("remotePlayerChange");
    } else N9(this, g.Sa(this.seekTo, a));
  };
  g.k.stop = function () {
    if (M9(this)) {
      this.j
        ? this.j.stop(null, g.Gd, Q9(this, "stopVideo"))
        : P9(this, "stopVideo");
      var a = L9(this);
      a.index = -1;
      a.videoId = "";
      mlb(a);
      O9(this, a);
      this.ma("remotePlayerChange");
    } else N9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (M9(this)) {
      var c = L9(this);
      if (this.u) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.u.setReceiverVolumeLevel(
            d,
            (0, g.Pa)(function () {
              b9("set receiver volume: " + d);
            }, this),
            (0, g.Pa)(function () {
              this.yf("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.u.setReceiverMuted(
            b,
            (0, g.Pa)(function () {
              b9("set receiver muted: " + b);
            }, this),
            (0, g.Pa)(function () {
              this.yf("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        P9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      O9(this, c);
    } else N9(this, g.Sa(this.setVolume, a, b));
  };
  g.k.dO = function (a, b) {
    if (M9(this)) {
      var c = L9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.$h(b.style)),
        g.jd(a, c.trackData));
      P9(this, "setSubtitlesTrack", a);
      O9(this, c);
    } else N9(this, g.Sa(this.dO, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    M9(this)
      ? ((b = b.getLanguageInfo().getId()),
        P9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = L9(this)),
        (a.audioTrackId = b),
        O9(this, a))
      : N9(this, g.Sa(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = L9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    I9(l, a, c || 0);
    void 0 !== b && (G9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.$h(h));
    P9(this, "setPlaylist", m);
    d || O9(this, l);
  };
  g.k.ZE = function (a, b) {
    if (M9(this)) {
      if (a && b) {
        var c = L9(this);
        I9(c, a, b);
        O9(this, c);
      }
      P9(this, "previous");
    } else N9(this, g.Sa(this.ZE, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (M9(this)) {
      if (a && b) {
        var c = L9(this);
        I9(c, a, b);
        O9(this, c);
      }
      P9(this, "next");
    } else N9(this, g.Sa(this.nextVideo, a, b));
  };
  g.k.Uv = function () {
    if (M9(this)) {
      P9(this, "clearPlaylist");
      var a = L9(this);
      a.reset();
      O9(this, a);
      this.ma("remotePlayerChange");
    } else N9(this, this.Uv);
  };
  g.k.bQ = function () {
    M9(this) ? P9(this, "dismissAutoplay") : N9(this, this.bQ);
  };
  g.k.dispose = function () {
    if (3 != this.B) {
      var a = this.B;
      this.B = 3;
      this.ma("proxyStateChange", a, this.B);
    }
    g.qB.prototype.dispose.call(this);
  };
  g.k.ra = function () {
    plb(this);
    this.C = null;
    this.D.clear();
    J9(this, null);
    g.qB.prototype.ra.call(this);
  };
  g.k.ZL = function (a) {
    if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
      var b = this.B;
      this.B = a;
      this.ma("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.D.isEmpty(); )
          (b = a = this.D),
            0 === b.j.length && ((b.j = b.u), b.j.reverse(), (b.u = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.C2 = function (a, b) {
    this.ma(a, b);
  };
  g.k.j1 = function (a) {
    if (!a) this.HA(null), J9(this, null);
    else if (this.u.receiver.volume) {
      a = this.u.receiver.volume;
      var b = L9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        b9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          O9(this, b);
    }
  };
  g.k.HA = function (a) {
    b9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.T);
    if ((this.j = a))
      this.j.addUpdateListener(this.T),
        rlb(this),
        this.ma("remotePlayerChange");
  };
  g.k.h1 = function (a) {
    a ? (rlb(this), this.ma("remotePlayerChange")) : this.HA(null);
  };
  g.k.AM = function () {
    P9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.l1 = function () {
    var a = jlb();
    a && J9(this, a);
  };
  g.k.yf = function (a) {
    a9("CP", a);
  };
  g.v(T9, g.qB);
  g.k = T9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      G9(this.j, n);
      this.D = "UNSUPPORTED";
      c = this.Ka ? "setInitialState" : "setPlaylist";
      R9("Connecting with " + c + " and params: " + g.$h(m));
      this.u.connect({ method: c, params: g.$h(m) }, a, Khb());
    } else R9("Connecting without params"), this.u.connect({}, a, Khb());
    vlb(this);
  };
  g.k.Hp = function (a) {
    this.u.Hp(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Da("yt.mdx.remote.remoteClient_", null),
      this.ma("beforeDispose"),
      S9(this, 3));
    g.qB.prototype.dispose.call(this);
  };
  g.k.ra = function () {
    wlb(this);
    ylb(this);
    xlb(this);
    g.Zu(this.T);
    this.T = NaN;
    g.Zu(this.Z);
    this.Z = NaN;
    this.C = null;
    g.cy(this.ea);
    this.ea.length = 0;
    this.u.dispose();
    g.qB.prototype.ra.call(this);
    this.D = this.J = this.B = this.j = this.u = null;
  };
  g.k.vR = function (a) {
    if (!this.B || 0 === this.B.length) return !1;
    for (var b = g.t(this.B), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.a_ = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.Pz()) ? this.u.Kw() && isNaN(this.I) && (a = 1) : (a = 2));
    return a;
  };
  g.k.nw = function (a) {
    R9("Disconnecting with " + a);
    g.Da("yt.mdx.remote.remoteClient_", null);
    wlb(this);
    this.ma("beforeDisconnect", a);
    1 == a && j8();
    this.u.disconnect(a);
    this.dispose();
  };
  g.k.YZ = function () {
    var a = this.j;
    this.C && ((a = this.j.clone()), I9(a, this.C, a.index));
    return nlb(a);
  };
  g.k.D4 = function (a) {
    var b = this,
      c = new E9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.C = c.videoId),
      g.Zu(this.T),
      (this.T = g.Xu(function () {
        if (b.C) {
          var e = b.C;
          b.C = null;
          b.j.videoId != e && U9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      H9(this.j) == H9(c) &&
      g.$h(this.j.trackData) == g.$h(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.Jb(
      d,
      function (e) {
        this.ma(e);
      },
      this
    );
  };
  g.k.IQ = function () {
    var a = this.u.Cq(),
      b = g.lb(this.B, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.Pz = function () {
    return this.u.Mq();
  };
  g.k.TZ = function () {
    return this.D || "UNSUPPORTED";
  };
  g.k.UZ = function () {
    return this.J || "";
  };
  g.k.QW = function () {
    !isNaN(this.Pz()) && this.u.mu();
  };
  g.k.z4 = function (a, b) {
    U9(this, a, b);
    Alb(this);
  };
  g.k.eO = function () {
    var a = g.lv("SID", "") || "",
      b = g.lv("SAPISID", "") || "",
      c = g.lv("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.Jf(g.If(a), 2);
    b = g.Jf(g.If(b), 2);
    c = g.Jf(g.If(c), 2);
    return g.Jf(g.If(a + "," + b + "," + c), 2);
  };
  T9.prototype.subscribe = T9.prototype.subscribe;
  T9.prototype.unsubscribeByKey = T9.prototype.fh;
  T9.prototype.getProxyState = T9.prototype.a_;
  T9.prototype.disconnect = T9.prototype.nw;
  T9.prototype.getPlayerContextData = T9.prototype.YZ;
  T9.prototype.setPlayerContextData = T9.prototype.D4;
  T9.prototype.getOtherConnectedRemoteId = T9.prototype.IQ;
  T9.prototype.getReconnectTimeout = T9.prototype.Pz;
  T9.prototype.getAutoplayMode = T9.prototype.TZ;
  T9.prototype.getAutoplayVideoId = T9.prototype.UZ;
  T9.prototype.reconnect = T9.prototype.QW;
  T9.prototype.sendMessage = T9.prototype.z4;
  T9.prototype.getXsrfToken = T9.prototype.eO;
  T9.prototype.isCapabilitySupportedOnConnectedDevices = T9.prototype.vR;
  g.v(Mlb, f9);
  g.k = Mlb.prototype;
  g.k.Fj = function (a) {
    return this.og.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.og.$_c(a);
  };
  g.k.get = function (a) {
    return this.og.$_g(a);
  };
  g.k.start = function () {
    this.og.$_st();
  };
  g.k.add = function (a, b, c) {
    this.og.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.og.$_r(a, b, c);
  };
  g.k.QF = function (a, b, c, d) {
    this.og.$_un(a, b, c, d);
  };
  g.k.ra = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.og.$_ubk(this.j[a]);
    this.j.length = 0;
    this.og = null;
    f9.prototype.ra.call(this);
  };
  g.k.RW = function () {
    this.ma("screenChange");
  };
  g.k.e2 = function () {
    this.ma("onlineScreenChange");
  };
  k9.prototype.$_st = k9.prototype.start;
  k9.prototype.$_gspc = k9.prototype.LW;
  k9.prototype.$_gsppc = k9.prototype.aO;
  k9.prototype.$_c = k9.prototype.contains;
  k9.prototype.$_g = k9.prototype.get;
  k9.prototype.$_a = k9.prototype.add;
  k9.prototype.$_un = k9.prototype.QF;
  k9.prototype.$_r = k9.prototype.remove;
  k9.prototype.$_gs = k9.prototype.Fj;
  k9.prototype.$_gos = k9.prototype.ZN;
  k9.prototype.$_s = k9.prototype.subscribe;
  k9.prototype.$_ubk = k9.prototype.fh;
  var e$ = null,
    h$ = !1,
    V9 = null,
    W9 = null,
    Xlb = null,
    $9 = [];
  g.v(bmb, g.C);
  g.k = bmb.prototype;
  g.k.ra = function () {
    g.C.prototype.ra.call(this);
    this.j.stop();
    this.u.stop();
    this.J.stop();
    var a = this.uc;
    a.unsubscribe("proxyStateChange", this.VS, this);
    a.unsubscribe("remotePlayerChange", this.MA, this);
    a.unsubscribe("remoteQueueChange", this.KE, this);
    a.unsubscribe("previousNextChange", this.RS, this);
    a.unsubscribe("nowAutoplaying", this.LS, this);
    a.unsubscribe("autoplayDismissed", this.oS, this);
    this.uc = this.module = null;
  };
  g.k.Hj = function (a) {
    var b = g.xa.apply(1, arguments);
    if (2 != this.uc.B)
      if (i$(this)) {
        if (!L9(this.uc).isAdPlaying() || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              L9(this.uc).Sc() ? this.uc.pause() : this.uc.play();
              break;
            case "control_play":
              this.uc.play();
              break;
            case "control_pause":
              this.uc.pause();
              break;
            case "control_seek":
              this.I.xG(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              dmb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.G.getCurrentTime();
            j$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            j$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            dmb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.f1 = function (a) {
    this.J.oW(a);
  };
  g.k.r5 = function (a) {
    this.Hj("control_subtitles_set_track", g.dd(a) ? null : a);
  };
  g.k.tU = function () {
    var a = this.G.getOption("captions", "track");
    g.dd(a) || dmb(this, a);
  };
  g.k.lc = function (a) {
    this.module.lc(a, this.G.getVideoData().lengthSeconds);
  };
  g.k.N1 = function () {
    g.dd(this.B) || emb(this, this.B);
    this.C = !1;
  };
  g.k.VS = function (a, b) {
    this.u.stop();
    2 === b && this.lU();
  };
  g.k.MA = function () {
    if (i$(this)) {
      this.j.stop();
      var a = L9(this.uc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Zg = 1;
          break;
        case 1082:
        case 1083:
          this.module.Zg = 0;
          break;
        default:
          this.module.Zg = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.ac(new g.mL(8));
          this.kU();
          break;
        case 1085:
        case 3:
          this.ac(new g.mL(9));
          break;
        case 1083:
        case 0:
          this.ac(new g.mL(2));
          this.I.stop();
          this.lc(this.G.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.ac(new g.mL(4));
          break;
        case 2:
          this.ac(new g.mL(4));
          this.lc(H9(a));
          break;
        case -1:
          this.ac(new g.mL(64));
          break;
        case -1e3:
          this.ac(
            new g.mL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              fD: 2,
            })
          );
      }
      a = L9(this.uc).trackData;
      var b = this.B;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.B = a), emb(this, a));
      a = L9(this.uc);
      -1 === a.volume ||
        (Math.round(this.G.getVolume()) === a.volume &&
          this.G.isMuted() === a.muted) ||
        this.T.isActive() ||
        this.XU();
    } else cmb(this);
  };
  g.k.RS = function () {
    this.G.ma("mdxpreviousnextchange");
  };
  g.k.KE = function () {
    i$(this) || cmb(this);
  };
  g.k.LS = function (a) {
    isNaN(a) || this.G.ma("mdxnowautoplaying", a);
  };
  g.k.oS = function () {
    this.G.ma("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    i$(this) && this.uc.setAudioTrack(this.G.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === L9(this.uc).playerState ? j$(this, a) : b && this.uc.seekTo(a);
  };
  g.k.XU = function () {
    var a = this;
    if (i$(this)) {
      var b = L9(this.uc);
      this.events.Ac(this.Z);
      b.muted ? this.G.mute() : this.G.unMute();
      this.G.setVolume(b.volume);
      this.Z = this.events.N(this.G, "onVolumeChange", function (c) {
        $lb(a, c);
      });
    }
  };
  g.k.kU = function () {
    this.j.stop();
    if (!this.uc.isDisposed()) {
      var a = L9(this.uc);
      a.Sc() && this.ac(new g.mL(8));
      this.lc(H9(a));
      this.j.start();
    }
  };
  g.k.lU = function () {
    this.u.stop();
    this.j.stop();
    var a = this.uc.Mq();
    2 == this.uc.B && !isNaN(a) && this.u.start();
  };
  g.k.ac = function (a) {
    this.u.stop();
    var b = this.D;
    if (!g.rL(b, a)) {
      var c = g.T(a, 2);
      c !== g.T(this.D, 2) && this.G.Bx(c);
      this.D = a;
      gmb(this.module, b, a);
    }
  };
  g.v(k$, g.W);
  k$.prototype.Lc = function () {
    this.j.show();
  };
  k$.prototype.wb = function () {
    this.j.hide();
  };
  k$.prototype.u = function () {
    b8("mdx-privacy-popup-cancel");
    this.wb();
  };
  k$.prototype.B = function () {
    b8("mdx-privacy-popup-confirm");
    this.wb();
  };
  g.v(l$, g.W);
  l$.prototype.onStateChange = function (a) {
    this.Cc(a.state);
  };
  l$.prototype.Cc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.T(a, 128)
        ? g.VK("Error on $RECEIVER_NAME", b)
        : a.Sc() || g.sL(a)
        ? g.VK("Playing on $RECEIVER_NAME", b)
        : g.VK("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.v(m$, g.gT);
  m$.prototype.u = function () {
    var a = this.G.getOption("remote", "receivers");
    a && 1 < a.length && !this.G.getOption("remote", "quickCast")
      ? ((this.Kr = g.Kb(a, this.j, this)),
        g.hT(this, g.Pg(a, this.j)),
        (a = this.G.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Li(a),
        this.enable(!0))
      : this.enable(!1);
  };
  m$.prototype.j = function (a) {
    return a.key;
  };
  m$.prototype.xk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.Kr[a].name;
  };
  m$.prototype.yg = function (a) {
    g.gT.prototype.yg.call(this, a);
    this.G.setOption("remote", "currentReceiver", this.Kr[a]);
    this.ob.wb();
  };
  g.v(fmb, g.QP);
  g.k = fmb.prototype;
  g.k.create = function () {
    var a = this.player.V(),
      b = g.dH(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.S("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.S("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.S("enable_cast_short_lived_lounge_token"),
    };
    Rlb(b, a);
    this.subscriptions.push(g.vy("yt-remote-before-disconnect", this.d1, this));
    this.subscriptions.push(g.vy("yt-remote-connection-change", this.I2, this));
    this.subscriptions.push(
      g.vy("yt-remote-receiver-availability-change", this.US, this)
    );
    this.subscriptions.push(g.vy("yt-remote-auto-connect", this.G2, this));
    this.subscriptions.push(g.vy("yt-remote-receiver-resumed", this.F2, this));
    this.subscriptions.push(g.vy("mdx-privacy-popup-confirm", this.b4, this));
    this.subscriptions.push(g.vy("mdx-privacy-popup-cancel", this.a4, this));
    this.US();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.QP.prototype.load.call(this);
    this.yk = new bmb(this, this.player, this.uc);
    var a = (a = Zlb()) ? a.currentTime : 0;
    var b = Wlb() ? new K9(d$(), void 0) : null;
    0 == a && b && (a = H9(L9(b)));
    0 !== a && this.lc(a);
    gmb(this, this.Ld, this.Ld);
    this.player.Tn(6);
  };
  g.k.unload = function () {
    this.player.ma("mdxautoplaycanceled");
    this.mq = this.Ln;
    g.cb(this.yk, this.uc);
    this.uc = this.yk = null;
    g.QP.prototype.unload.call(this);
    this.player.Tn(5);
    n$(this);
  };
  g.k.ra = function () {
    g.wy(this.subscriptions);
    g.QP.prototype.ra.call(this);
  };
  g.k.Nn = function (a) {
    var b = g.xa.apply(1, arguments);
    this.loaded && this.yk.Hj.apply(this.yk, [a].concat(g.u(b)));
  };
  g.k.getAdState = function () {
    return this.Zg;
  };
  g.k.Bn = function () {
    return this.uc ? L9(this.uc).Bn : !1;
  };
  g.k.hasNext = function () {
    return this.uc ? L9(this.uc).hasNext : !1;
  };
  g.k.lc = function (a, b) {
    this.HR = a || 0;
    this.player.ma("progresssync", a, b);
    this.player.Oa("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.HR;
  };
  g.k.getProgressState = function () {
    var a = L9(this.uc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: !a.isAdPlaying() && this.player.Yg(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.u ? a.B + F9(a) : a.B,
      isAtLiveHead: 1 >= (a.u ? a.j + F9(a) : a.j) - this.getCurrentTime(),
      loaded: a.T,
      seekableEnd: a.u ? a.j + F9(a) : a.j,
      seekableStart: 0 < a.C ? a.C + F9(a) : a.C,
      offset: 0,
    };
  };
  g.k.nextVideo = function () {
    this.uc && this.uc.nextVideo();
  };
  g.k.ZE = function () {
    this.uc && this.uc.ZE();
  };
  g.k.d1 = function (a) {
    1 === a && (this.oL = this.uc ? L9(this.uc) : null);
  };
  g.k.I2 = function () {
    var a = Wlb() ? new K9(d$(), void 0) : null;
    if (a) {
      var b = this.mq;
      this.loaded && this.unload();
      this.uc = a;
      this.oL = null;
      b.key !== this.Ln.key && ((this.mq = b), this.load());
    } else
      g.ab(this.uc),
        (this.uc = null),
        this.loaded &&
          (this.unload(),
          (a = this.oL) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, H9(a)));
    this.player.ma("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.US = function () {
    var a = [this.Ln],
      b = a.concat,
      c = Slb();
    B9() &&
      g.GA("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.Kr = b.call(a, c);
    a = Ulb() || this.Ln;
    o$(this, a);
    this.player.Oa("onMdxReceiversChange");
  };
  g.k.G2 = function () {
    var a = Ulb();
    o$(this, a);
  };
  g.k.F2 = function () {
    this.mq = Ulb();
  };
  g.k.b4 = function () {
    this.VA = !0;
    n$(this);
    h$ = !1;
    e$ && g$(e$, 1);
    e$ = null;
  };
  g.k.a4 = function () {
    this.VA = !1;
    n$(this);
    o$(this, this.Ln);
    this.mq = this.Ln;
    h$ = !1;
    e$ = null;
    this.player.playVideo();
  };
  g.k.Vg = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Kr;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? klb() : o$(this, b)),
          this.loaded ? this.mq : this.Ln
        );
      case "quickCast":
        return 2 === this.Kr.length &&
          "cast-selector-receiver" === this.Kr[1].key
          ? (b && klb(), !0)
          : !1;
    }
  };
  g.k.AM = function () {
    this.uc.AM();
  };
  g.k.Vj = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.PP("remote", fmb);
})(_yt_player);
!(function (c, l, a, r, i, t, y) {
  a[c]("metadata", function (e) {
    function n() {
      var n = ga.getAll()
      for (var o in n) {
        var s = n[o]
        if ("UA-55415467-1" === s.get("trackingId")) {
          s.set(
            "dimension4",
            ["https://clarity.microsoft.com/ga", e.projectId, e.userId, e.sessionId].join("/")
          ),
            s.send("event", {
              eventCategory: "Clarity",
              nonInteraction: !0,
              eventAction: e.sessionId
            })
          break
        }
      }
    }
    try {
      ga && ga(n)
    } catch (e) {
      try {
        n()
      } catch (e) {}
    }
  })
  if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId)
  ;(a[c].t = !0),
    ((t = l.createElement(r)).async = !0),
    (t.src = "https://www.clarity.ms/eus-d-sc/s/0.7.2/clarity.js"),
    (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
    a[c]("start", i),
    a[c].q.unshift(a[c].q.pop())
})("clarity", document, window, "script", {
  projectId: "56qaesvrqy",
  upload: "https://u.clarity.ms/collect",
  expire: 365,
  cookies: ["_uetmsclkid", "_uetvid"],
  track: true,
  lean: false,
  content: true,
  extract: [3, 1, ["4f509md79", "zjy56jaz", "4s4zm72hj"]]
})

let e;
var l = n => {
    if (!e) {
        const d = (o, r, t) => t.get(o) ? t.get(o)(r) : null,
            i = new Map;
        i.set("bold", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "40",
            y1: "128",
            x2: "216",
            y2: "128",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }), n.createElement("line", {
            x1: "128",
            y1: "40",
            x2: "128",
            y2: "216",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }))), i.set("duotone", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "40",
            y1: "128",
            x2: "216",
            y2: "128",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("line", {
            x1: "128",
            y1: "40",
            x2: "128",
            y2: "216",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }))), i.set("fill", () => n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"
        }))), i.set("light", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "40",
            y1: "128",
            x2: "216",
            y2: "128",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }), n.createElement("line", {
            x1: "128",
            y1: "40",
            x2: "128",
            y2: "216",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }))), i.set("thin", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "40",
            y1: "128",
            x2: "216",
            y2: "128",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }), n.createElement("line", {
            x1: "128",
            y1: "40",
            x2: "128",
            y2: "216",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }))), i.set("regular", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "40",
            y1: "128",
            x2: "216",
            y2: "128",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("line", {
            x1: "128",
            y1: "40",
            x2: "128",
            y2: "216",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })));
        const k = (o, r) => d(o, r, i),
            s = n.forwardRef((o, r) => n.createElement("g", {
                ref: r,
                ...o
            }, k(o.weight, o.color)));
        s.displayName = "Plus", e = s
    }
    return e
};
export {
    l as
    default
};
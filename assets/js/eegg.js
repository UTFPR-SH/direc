'use strict'

let m = Math
let ty = String

const b = (18.5567245 | 0)

let o = {
	trig : (a) => {alert(a)}
}

let h = {
	de : (n) => {return ty.fromCharCode(n)},
	k  : (n) => {return n.toUpperCase()}
}

let bet = new Map()
const e = 65

for (var j = 0; j < 26; j++) {
	bet["" + h.de(e+j) + ""] = (e+j);
}

let i = document.getElementById("logo")
let c = 0

let ka = () => {return "Ga, wm ew uzseg Jsxswd Usehgk Fmfwk w vwkwfngdna wkkw kalw. Lm hgvwk ew wfugfljsj fg kalw jsxswduf.yalzmt.ag"} 

i.addEventListener('click', function() {
	if (c == 15) {
		o.trig(r(ka()))
		c = -1
	}
	l(console, c)
	c++;

}, true)

let l = (c,m) => {c.log(m)}
let r = (y) => {
	let ru = ""
	var c1 = 0; 

	while (c1 < y.length) {
		let ci = bet[h.k(it(c1, y))]
		let chr = it(c1, y)

		if (chr === " " || chr === "." || chr === ",") {
			c1++
			ru += chr
		} else {
			ci = ci - b

			if (ci < 65) {
				let d = 64 - ci
				ci = 90 - d
			}

			c1++

			ru += h.de(ci)
		}
	}
	return ru
}

let it = (i,s) => {return h.k(s.charAt(i))}
let pi = (n) => {return bet[n]}
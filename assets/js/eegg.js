'use strict'

let m = Math
let ty = String

const b = (18.5567245 | 0)

let o = {
	trig : (a) => {alert(a)}
}

let h = {
	de : (n) => {return ty.fromCharCode(n)},
	k  : (n) => {return n.toUpperCase()},
	d  : ()  => {return document},
	e  : (n, t) => {return n.getElementById(t)},
	t  : (n, t) => {return n.getElementsByClassName(t)}
}

let bet = new Map()
const e = 65

for (var j = 0; j < 26; j++) {
	bet["" + h.de(e+j) + ""] = (e+j);
}

let i = document.getElementById("logo")
let c = 0
let l = (c,m) => {c.log(m)}
let r = (y) => {
	let ru = ""
	var c1 = 0; 

	while (c1 < y.length) {
		let ci = bet[h.k(it(c1, y))]
		let chr = it(c1, y)

		if (chr === " " || chr === "." || chr === "," || chr === "\'" || chr === "\n" || chr === "?" ||
			chr === "<" || chr === ">") {
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

let typeofun = () => {return 'Zwddg. Eq fsew ak Jsxswd Usehgk Fmfwk sfv A\'e lzw esaf vwnwdghwj gx lzak owtkalw. Ax qgm oakz lg ugflsul' +
   ' ew mkw lzw xgddgoafy tmllgfk. Lzwjw ak s jwhgkalgjq gx lzak owtkalw sfv ax qgm\'v dacw lg ugfljatmlw bmkl mkw lzw dafc gf lzw' +
   ' tgllge gx lzak hsyw.<tj><tj>Al oskf\'l lzsl zsjv lg xafv, osk al?'}

let bu = () => {return '<div class="modal" id="mdev"><div class="modal-background"></div><div class="modal-card">' +
					   '<header id="header" class="modal-card-head"><p class="modal-card-title">Developer information</p>' +
					   '<button class="delete has-background-danger"></button></header><section class="modal-card-body">' +
					   r(typeofun()) +
					   '</section><footer class="modal-card-foot is-right">' +
					   '<a href="https://rafaelcn.github.io" class="button"><i class="fas fa-fw fa-link "></i> Blog</button>' +
					   '<a href="mailto:rafaelnunes@engineer.com" class="button"><i class="fa fa-fw fa-envelope"></i> Email</button>' +
					   '<a href="https://github.com/rafaelcn" class="button"><i class="fab fa-fw fa-github-alt"></i> Github</button></footer></div></div>'}

let onload = () => {
	let r = h.d().getElementsByTagName('body')[0]
	let d = h.d().createElement('div')
	let kj = r.appendChild(d)
	kj.innerHTML = bu()
}

onload()

let tr = h.e(h.d(), 'mdev')

h.t(h.d(), 'delete')[0].onclick = event => {
	tr.classList.add('is-inactive')
	tr.classList.remove('is-active')
}


h.e(h.d(), 'de')
tr.onclick = (event) => {
    if (event.target == tr.querySelector('.modal-background')) {
        tr.classList.add('is-inactive')
        tr.classList.remove('is-active')
    }
}

i.addEventListener('click', function() {
	if (c == 8) {
		//o.trig(r(ka()))
		let asdfs = h.d()
		let sd = h.e(asdfs, 'mdev')
		sd.classList.add('is-active')
		c = -1
	}
	l(console, c)
	c++;

}, true)
(function(t){function s(s){for(var n,r,o=s[0],c=s[1],l=s[2],d=0,v=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(s);while(v.length)v.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],n=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(n=!1)}n&&(i.splice(s--,1),t=r(r.s=e[0]))}return t}var n={},a={app:0},i=[];function r(s){if(n[s])return n[s].exports;var e=n[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)r.d(e,n,function(s){return t[s]}.bind(null,n));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0303":function(t,s,e){t.exports=e.p+"img/balconies-small.svg"},"034f":function(t,s,e){"use strict";var n=e("64a9"),a=e.n(n);a.a},"11e5":function(t,s,e){t.exports=e.p+"img/q91_hover.svg"},"22af":function(t,s,e){t.exports=e.p+"img/city.svg"},2638:function(t,s,e){t.exports=e.p+"img/KA_Big_WM3.jpg"},"2b53":function(t,s,e){t.exports=e.p+"img/q51_hover.svg"},"2bb1":function(t,s,e){t.exports=e.p+"img/q62_hover.svg"},"2d53":function(t,s,e){t.exports=e.p+"img/borders.svg"},3077:function(t,s,e){t.exports=e.p+"img/q52_hover.svg"},"33da":function(t,s,e){t.exports=e.p+"img/q22_hover.svg"},"34a9":function(t,s,e){t.exports=e.p+"img/q92_hover.svg"},"3eed":function(t,s,e){t.exports=e.p+"img/KA_WM4.jpg"},"3fe0":function(t,s,e){t.exports=e.p+"img/greens-always.svg"},"46aa":function(t,s,e){t.exports=e.p+"img/balconies-big.svg"},"4ad6":function(t,s,e){t.exports=e.p+"img/KA_Big_WM2.jpg"},"51a5":function(t,s,e){t.exports=e.p+"img/land.svg"},5618:function(t,s,e){t.exports=e.p+"img/public-transport.svg"},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("kvartalalley",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],r=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"entry-content"},[n("div",{staticClass:"kvartalalley"},[n("div",{staticClass:"test-wrapper"},[t._m(0),n("div",{staticClass:"test-bg"}),n("div",{staticClass:"test",class:{finished:10===t.question}},[t.question>0&&t.question<=10?n("div",{staticClass:"step"},[(t.question>=2||1===t.question&&!0===t.render)&&t.question<10?n("div",{staticClass:"step__back",on:{click:function(s){return t.backToPreviousStep()}}},[n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"}})]),n("span",[t._v("Назад")])]):t._e(),10==t.question?n("div",{staticClass:"step__back again",on:{click:function(s){return t.doAgain()}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 486.538 486.538"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 486.538 486.538"}},[n("g",[n("g",[n("path",{attrs:{d:"M365.697,0l-13.923,13.923l67.76,67.76H132.139c-54.452,0-98.75,44.298-98.75,98.745v61.389h19.692v-61.389\n\t\t\tc0-43.591,35.466-79.053,79.058-79.053h287.394l-67.76,67.76l13.923,13.923l91.529-91.529L365.697,0z"}})])]),n("g",[n("g",[n("path",{attrs:{d:"M433.457,244.716v61.389c0,43.591-35.466,79.058-79.058,79.058H67.004l67.76-67.764l-13.923-13.923L29.313,395.01\n\t\t\tl91.529,91.529l13.923-13.923l-67.76-67.76h287.394c54.452,0,98.75-44.298,98.75-98.75v-61.389H433.457z"}})])])]),n("span",[t._v("Спробувати ще раз")])]):t._e(),t.question<10?n("div",{staticClass:"step__number"},[n("span",[t._v(t._s(t.question))]),t._v(" / 9")]):t._e()]):t._e(),0===t.question?n("div",{staticClass:" start"},[t._m(1),t._m(2)]):t._e(),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[1===t.question?n("div",{staticClass:"question",on:{leave:t.leave}},[n("div",{staticClass:"header"},[t._v("\n                                Де має розташовуватися ваше ідеальне житло?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:1===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(1)}}},[n("img",{staticClass:"hover",attrs:{src:e("c3e6")}}),n("span",[t._v("Я хочу жити у центрі міста, на відстані витягнутої руки до магазинів, барів та\n                                ресторанів, і майже усюди пересуватися пішки.\n                                    ")])]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:2===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(2)}}},[n("span",[t._v("Я хочу дихати свіжим повітрям й починати день з пробіжки у сосновому лісі. Оберу\n                                    життя в передмісті, якщо дорога до Києва триватиме не більше 20 хвилин.")]),n("img",{staticClass:"hover",attrs:{src:e("ed5b")}})]):t._e()])],1),!0===t.render?n("div",{staticClass:"render",attrs:{href:"http://bit.ly/2MeWKij"}},[n("img",{staticClass:"render__img",attrs:{src:e("cf5d"),alt:""}}),1===t.answer[t.question-1]?n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v(" знаходиться\n                                    на відстані 5 хвилин від центру міста Бровари. А дорога\n                                    до\n                                    Києва триватиме не більше 15 хвилин!\n                                ")]):t._e(),2===t.answer[t.question-1]?n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v(" розташований\n                                    поряд з головною транспортною артерією міста, що\n                                    дозволяє\n                                    швидко дістатися до столиці. Дорога до Києва триватиме лише 15 хвилин!\n                                ")]):t._e()]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[2===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                Добре, де ви будете жити, визначилися. А якою буде територія вашого помешкання?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                Це буде комплекс з закритою територією – парканом, охороною та камерами відеонагляду.\n                                Так я почуватимусь у безпеці.")]),n("img",{attrs:{src:e("33da"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{on:{click:function(s){return t.selectAnswer(2)}}},[n("span",[t._v("\n                                Мій будинок буде частиною навколишнього ансамблю, він не буде огороджений від інших.\n                                На подвір’ї зможуть зустрічатися й спілкуватися жителі кварталу.")]),n("img",{attrs:{src:e("c17c"),alt:""}})]):t._e()])],1)]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[3===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                А яка архітектура більше до вподоби?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:1===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(1)}}},[n("img",{attrs:{src:e("8c2c"),alt:""}}),n("span",[t._v("Оберу висотний будинок з панорамним видом на місто.")])]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:2===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(2)}}},[n("img",{attrs:{src:e("c5f0"),alt:""}}),n("span",[t._v("\n                                Більше подобається малоповерхова забудова, яка не тисне своїм об’ємом.")])]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("4ad6"),alt:""}}),n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v("\n                                    складатиметься із секцій каскадної поверховості, що надасть\n                                    комплексу\n                                    оригінальності стилю, а жителям – хороший вид та більше простору перед вікнами.\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[4===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                Життя не обмежується простором всередині помешкання. Яке б ви обрали подвір’я\n                                біля свого будинку?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:1===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                У мене є авто, і я не хочу переплачувати за підземний паркінг – парковка під вікнами\n                                будинку чудовий варіант для його зберігання.\n                                    ")]),n("img",{attrs:{src:e("f688"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:2===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(2)}}},[n("img",{attrs:{src:e("831a"),alt:""}}),n("span",[t._v("\n                                Я хочу проводити вільний час на подвір’ї разом зі своєю родиною – це має бути\n                                громадський простір без авто.\n                                ")])]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("3eed"),alt:""}}),n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v(" має\n                                    продуману концепцію громадського простору: подвір’я з окремими\n                                    ігровими і спортивними зонами, місцями для відпочинку, алеями магазинів і кафе.\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[5===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                А балкон має бути?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:1===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                Я люблю балкони – тут можна випити чашку кави з видом на місто, а можна зберігати\n                                велосипед чи банку з солоними помідорами.")]),n("img",{attrs:{src:e("3077"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:2===t.answer[t.question-1]},on:{click:function(s){return t.selectAnswer(2)}}},[n("span",[t._v("\n                                Все ж балкони – це пережиток минулого, особливо, коли їх починають хаотично склити.\n                                Мені вистачить панорамних вікон.")]),n("img",{attrs:{src:e("2b53"),alt:""}})]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("2638"),alt:""}}),n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v(" - це\n                                    квартири з панорамними вікнами та продуманим автономним\n                                    опаленням. Нові технології дозволяють раціонально використовувати ресурси,\n                                    самостійно контролювати витрату і підтримувати комфортну температуру в оселі у\n                                    будь-який час року.\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[6===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                Які сервіси робитимуть ваше життя щасливим – що обов’язково має знаходитися\n                                біля дому?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                Мені подобаються, коли на перших поверхах розташовуються магазинчики, кафе та корисні\n                                сервіси.\n                                ")]),n("img",{attrs:{src:e("79d9"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(2)}}},[n("span",[t._v("\n                                Оберу будинок, де не буде нічого крім квартир, проте до всього необхідного можна буде\n                                дійти пішки.")]),n("img",{attrs:{src:e("2bb1"),alt:""}})]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("cf5d"),alt:""}}),n("div",{staticClass:"desc"},[t._v("\n                                    На території "),n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v("\n                                    передбачені алеї з магазинами і кафе, дитячий садок,\n                                    школа і фітнес-центр. Всі зони комплексу будуть зручно поєднані вуличками для\n                                    більшого комфорту у переміщенні.\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[7===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                А яка ще інфраструктура точно необхідна?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                Мені важливо, щоб було зручне транспортне сполучення, і можна була швидко дістатися\n                                    будь-куди у місті на метро, трамваї чи автобусі.")]),n("img",{attrs:{src:e("8b37"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(2)}}},[n("img",{attrs:{src:e("6c0e"),alt:""}}),n("span",[t._v("\n                                Хочу жити в тихому передмісті, подалік від автобанів, всюди зможу доїхати на авто.")])]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("4ad6"),alt:""}}),n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v(" розташований\n                                    неподалік від центру міста Бровари, а дістатися до\n                                    метро можна буде за 15 хвилин!\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[8===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                Життя складається з дрібниць, тож давайте деталізуємо.\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                Я оберу стандартне планування подвір’я з лавками й дитячими майданчиками.\n                                ")]),n("img",{attrs:{src:e("e4f4"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(2)}}},[n("span",[t._v("\n                                Я хочу, щоб простір був поділений для жителів різного віку. Зони з барбекю й гамаками\n                                – для дорослих, сучасні дитячі майданчики – для дітей, спортивні алеї для підлітікв.\n                                    ")]),n("img",{attrs:{src:e("68b3"),alt:""}})]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("9c2b"),alt:""}}),n("div",{staticClass:"desc"},[t._v("\n                                    Простір біля "),n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v("\n                                    має окремі зони для дозвілля жителів різного віку:\n                                    сучасні\n                                    дитячі майданчики для дітей, спортивні зони для підлітків, місця для відпочинку і\n                                    алеї з\n                                    магазинами і кафе для дорослих.\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[9===t.question?n("div",{staticClass:"question"},[n("div",{staticClass:"header"},[t._v("\n                                Можливо, ще маєте побажання по освітніх закладах для дітей?\n                            ")]),n("ol",{staticClass:"question_ans"},[n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||1===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(1)}}},[n("span",[t._v("\n                                Я хочу, щоб на території комплексу була соціальна інфраструктура – дитячий садок,\n                                школа. А для занять спортом – фітнес-центр.")]),n("img",{attrs:{src:e("11e5"),alt:""}})]):t._e()]),n("transition",{attrs:{name:"question-fade",mode:"in-out"}},[0===t.answer[t.question-1]||2===t.answer[t.question-1]?n("li",{class:{active:t.answer[t.question-1]>0},on:{click:function(s){return t.selectAnswer(2)}}},[n("span",[t._v("\n                                Ми вже обрали школу і дитсадок для дитини, й будемо відвозити ї на авто – тож\n                                    наявність цієї інфраструктури не обов’язкова.")]),n("img",{attrs:{src:e("34a9"),alt:""}})]):t._e()])],1),!0===t.render?n("div",{staticClass:"render"},[n("img",{staticClass:"render__img",attrs:{src:e("2638"),alt:""}}),n("div",{staticClass:"desc"},[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v("\n                                    спроектований за форматом «місто в місті». Школа, дитячий садок,\n                                    паркінг, фітнес-центр, магазини, кафе та місця для відпочинку будуть розташовані у\n                                    подвір'ї мешканців!\n                                ")])]):t._e()]):t._e()]),n("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[10===t.question?n("div",{staticClass:"finish"},[n("span",{staticClass:"header"},[t._v("Це – ваш будинок мрії, створений за допомогою відповідей на питання. Поділіться ним з друзями!")]),n("div",{staticClass:"social-media"},[n("facebook",{attrs:{url:t.path,scale:"3"}}),n("twitter",{attrs:{url:t.path,scale:"3"}}),n("telegram",{attrs:{url:t.path,scale:"3"}}),n("a",{staticClass:"share-btn-fb",attrs:{href:"http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=[TITLE]&p%5Bsummary%5D=[TEXT]&p%5Burl%5D=[LINK]&p%5Bimages%5D%5B0%5D=[IMAGE]",target:"_blank"}},[n("div",{staticClass:"facebook share-block"},[n("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])])],1),n("div",{staticClass:"finish__img"},[n("img",{attrs:{src:e("948d"),alt:""}}),n("img",{attrs:{src:e("51a5"),alt:""}}),1===t.answer[0]?n("img",{attrs:{src:e("22af"),alt:""}}):t._e(),2===t.answer[0]?n("img",{attrs:{src:e("81da"),alt:""}}):t._e(),1===t.answer[2]?n("img",{attrs:{src:e("abe4"),alt:""}}):t._e(),2===t.answer[2]?n("img",{attrs:{src:e("a383"),alt:""}}):t._e(),1===t.answer[4]&&1===t.answer[2]?n("img",{attrs:{src:e("46aa"),alt:""}}):t._e(),1===t.answer[4]&&2===t.answer[2]?n("img",{attrs:{src:e("0303"),alt:""}}):t._e(),1===t.answer[5]?n("img",{attrs:{src:e("5d24"),alt:""}}):t._e(),1===t.answer[3]?n("img",{attrs:{src:e("ad52"),alt:""}}):t._e(),2===t.answer[3]?n("img",{attrs:{src:e("fb6a"),alt:""}}):t._e(),1===t.answer[1]?n("img",{attrs:{src:e("2d53"),alt:""}}):t._e(),1===t.answer[6]?n("img",{attrs:{src:e("5618"),alt:""}}):t._e(),1===t.answer[7]?n("img",{attrs:{src:e("f352"),alt:""}}):t._e(),2===t.answer[7]?n("img",{attrs:{src:e("c2a4"),alt:""}}):t._e(),1===t.answer[8]?n("img",{attrs:{src:e("84e9"),alt:""}}):t._e(),n("img",{attrs:{src:e("3fe0"),alt:""}}),2===t.answer[5]?n("img",{attrs:{src:e("8236"),alt:""}}):t._e()]),n("div",{staticClass:"infozk"},[n("div",{staticClass:"desc"},[n("p",[n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[t._v("ЖК Квартал Алей")]),t._v("\n                                        знаходиться неподалік від центру міста Бровари. 16 житлових\n                                        будинків\n                                        каскадної поверховості розташовані у декількох хвилинах від лісу та головної\n                                        транспортної артерії міста.\n                                    ")]),n("p",[t._v("\n                                        Будинки оточені природою, а на території є вся\n                                        необхідна\n                                        інфраструктура для активного життя.\n                                        Комплекс спроектований за форматом «місто в місті»: на його території\n                                        передбачена\n                                        школа, дитячий садок, паркінг, фітнес-центр, алеї з магазинами і кафе, зони для\n                                        відпочинку з оригінальним ландшафтним дизайном.\n                                    ")]),n("p",[t._v("\n                                        У житловому комплексі\n                                        представлений\n                                        широкий асортимент планувальних рішень, включно з квартирами з власними терасами\n                                        та\n                                        дворівневими плануваннями.\n                                        Кожна квартира має автономне опалення, що дозволить раціонально використовувати\n                                        ресурси, підтримуючи комфортну температуру в приміщеннях у будь-який час року.\n                                    ")])]),n("a",{staticClass:"zhkkvartal",attrs:{href:"http://bit.ly/2MeWKij "}},[n("img",{attrs:{src:e("4ad6"),alt:""}})])])]):t._e()]),t.showButton?n("button",{staticClass:"nextbutton startthegame",class:{green:10===t.question},on:{click:function(s){return t.nextQuestion()}}},[t._v(t._s(t.buttonText)+"\n                        "),n("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[n("path",{attrs:{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"}})])]):t._e()],1)])])])},o=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("a",{staticClass:"partnersky",attrs:{href:"https://bit.ly/2MeWKij"}},[n("img",{staticClass:"partnersky__img",attrs:{src:e("b25a"),alt:""}}),n("div",{staticClass:"partnersky__desc"},[t._v("\n                        Партнерський матеріал\n                    ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"header"},[e("span",[t._v("Інтерактивний конструктор:")]),t._v("\n                            Збери житло своєї мрії!\n                        ")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"start__info"},[n("img",{staticClass:"start__img",attrs:{src:e("7ca5"),alt:"game"}}),n("span",{staticClass:"desc"},[t._v("\n                            Жити у галасливому й динамічному місті чи поряд з живописним лісом? Зустрічати схід сонця з\n                            висоти хмарочоса чи на власній терасі з виходом у сад? Пройди гру «Хмарочоса» та збери своє\n                            ідеальне помешкання.\n                            ")])])}],c=(e("dc44"),e("fa6d"),e("ac8f")),l={components:{Facebook:c["Facebook"],Twitter:c["Twitter"],Telegram:c["Telegram"]},name:"kvartalalley",data:function(){return{question:0,answer:[0,0,0,0,0,0,0,0,0],render:!1,showButton:!0,buttonText:"Почати гру",path:window.location.href}},watch:{question:function(){this.question>0&&(this.buttonText="Далі"),9===this.question&&(this.buttonText="Отримати результат тесту"),10===this.question&&(this.buttonText="Дізнатись більше",this.showButton=!0),this.leave()},render:function(){this.showHideButton()}},methods:{selectAnswer:function(t){1===t&&this.$set(this.answer,this.question-1,1),2===t&&this.$set(this.answer,this.question-1,2),2===this.question?(this.nextQuestion(),this.render=!1):this.render=!0},nextQuestion:function(){this.question<10?(this.question++,this.showButton=!1,this.render=!1):window.location="https://kvartal-aley.com"},showHideButton:function(){!0===this.render||0===this.question||10===this.question?this.showButton=!0:this.showButton=!1},backToPreviousStep:function(){0==this.render?(this.question--,this.render=!1,this.$set(this.answer,this.question-1,0),this.$set(this.answer,this.question,0),console.log(this.answer[this.question-1]+"this.question"+this.question)):(this.render=!1,this.$set(this.answer,this.question-1,0))},leave:function(){window.scroll({top:0,left:0,behavior:"smooth"})},doAgain:function(){this.step=0;for(var t=0;t<this.answer.length;t++)this.$set(this.answer,t,0);console.log(this.answer),this.question=0,this.render=!1,this.showButton=!0}}},u=l,d=e("2877"),v=Object(d["a"])(u,r,o,!1,null,null,null),p=v.exports,_={name:"app",components:{kvartalalley:p}},f=_,h=(e("034f"),Object(d["a"])(f,a,i,!1,null,null,null)),g=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"5d24":function(t,s,e){t.exports=e.p+"img/ground-floor-shops.svg"},"64a9":function(t,s,e){},"68b3":function(t,s,e){t.exports=e.p+"img/q82_hover.svg"},"6c0e":function(t,s,e){t.exports=e.p+"img/q72_hover.svg"},"79d9":function(t,s,e){t.exports=e.p+"img/q61_hover.svg"},"7ca5":function(t,s,e){t.exports=e.p+"img/q12_start.svg"},"81da":function(t,s,e){t.exports=e.p+"img/forest.svg"},8236:function(t,s,e){t.exports=e.p+"img/separate-shops.svg"},"831a":function(t,s,e){t.exports=e.p+"img/q41_hover.svg"},"84e9":function(t,s,e){t.exports=e.p+"img/school.svg"},"8b37":function(t,s,e){t.exports=e.p+"img/q71_hover.svg"},"8c2c":function(t,s,e){t.exports=e.p+"img/q32_hover.svg"},"948d":function(t,s,e){t.exports=e.p+"img/z00.svg"},"9c2b":function(t,s,e){t.exports=e.p+"img/KA_Big_WM5.jpg"},a383:function(t,s,e){t.exports=e.p+"img/building-small.svg"},abe4:function(t,s,e){t.exports=e.p+"img/building-big.svg"},ad52:function(t,s,e){t.exports=e.p+"img/cars.svg"},b25a:function(t,s,e){t.exports=e.p+"img/kvartalalley-logo.png"},c17c:function(t,s,e){t.exports=e.p+"img/q21_hover.svg"},c2a4:function(t,s,e){t.exports=e.p+"img/greens-without-childplace.svg"},c3e6:function(t,s,e){t.exports=e.p+"img/q12_hover.svg"},c5f0:function(t,s,e){t.exports=e.p+"img/q31_hover.svg"},cf5d:function(t,s,e){t.exports=e.p+"img/KA_Big_WM1.jpg"},dc44:function(t,s,e){},e4f4:function(t,s,e){t.exports=e.p+"img/q81_hover.svg"},ed5b:function(t,s,e){t.exports=e.p+"img/q11_hover.svg"},f352:function(t,s,e){t.exports=e.p+"img/childplace.svg"},f688:function(t,s,e){t.exports=e.p+"img/q42_hover.svg"},fb6a:function(t,s,e){t.exports=e.p+"img/green-without-cars.svg"}});
//# sourceMappingURL=app.js.map
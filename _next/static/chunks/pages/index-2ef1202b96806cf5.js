(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4407)}])},451:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var n=a(5893),s=a(1664),r=a.n(s),i=a(9649),c=a.n(i);function l(e){let{setModal:t}=e;return(0,n.jsx)("header",{className:c().header,children:(0,n.jsxs)("div",{className:c().wrap,children:[(0,n.jsx)(r(),{href:"/",children:(0,n.jsx)("p",{className:c().title,children:"Правдивые отзывы.ру"})}),(0,n.jsx)("button",{className:c().button,onClick:()=>t("newReview"),children:"написать новый отзыв"})]})})}var o=a(3998),m=a.n(o);function d(e){let{setModal:t}=e;return(0,n.jsx)("footer",{className:m().footer,children:(0,n.jsxs)("div",{className:m().wrap,children:[(0,n.jsx)("p",{className:m().title,children:"правдивые отзывы.ру \xa9 2023"}),(0,n.jsx)(r(),{href:"/rules",className:m().link,children:"правила"}),(0,n.jsx)(r(),{href:"/",className:m().link,onClick:e=>{e.preventDefault(),t("feedback")},children:"обратная связь"})]})})}function _(e){let{children:t,setModal:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{setModal:a}),t,(0,n.jsx)(d,{setModal:a})]})}},6808:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),s=a(7294),r=a(7536),i=a(9395),c=a.n(i);function l(){let[e,t]=(0,s.useState)(!1),{reset:a,register:i,handleSubmit:l,watch:o,formState:{errors:m}}=(0,r.cI)(),d=e=>{setTimeout(()=>{a(),t(!0)},1e3)};return e?(0,n.jsx)("h2",{className:c().successText,children:"Спасибо! В ближайшее время мы свяжемся с вами!"}):(0,n.jsxs)("form",{className:c().form,onSubmit:l(d),children:[(0,n.jsx)("h2",{className:c().title,children:"Связаться с нами"}),(0,n.jsxs)("div",{className:c().inputBox,children:[(0,n.jsx)("input",{className:"".concat(c().input," ").concat(m.name&&c().errorInput),type:"text",name:"name",id:"name",...i("name",{required:!0})}),(0,n.jsx)("label",{className:"".concat(c().label," ").concat(o("name")&&o("name").length>0&&c().valid," ").concat(m.name&&c().errorLabel),htmlFor:"name",children:"ваше имя"}),m.name&&(0,n.jsx)("span",{className:c().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:c().inputBox,children:[(0,n.jsx)("input",{className:"".concat(c().input," ").concat(m.email&&c().errorInput),type:"text",name:"email",id:"email",...i("email",{required:{value:!0,message:"Это поле необходимо заполнить"},pattern:{value:/\S+@\S+\.\S+/,message:"Некорректный формат E-mail"}})}),(0,n.jsx)("label",{className:"".concat(c().label," ").concat(o("email")&&o("email").length>0&&c().valid," ").concat(m.email&&c().errorLabel),htmlFor:"email",children:"E-mail"}),m.email&&(0,n.jsx)("span",{className:c().error,children:m.email.message})]}),(0,n.jsxs)("div",{className:c().inputBox,children:[(0,n.jsx)("textarea",{className:"".concat(c().textarea," ").concat(m.message&&c().errorInput),type:"text",name:"message",id:"message",...i("message",{required:!0})}),(0,n.jsx)("label",{className:"".concat(c().label," ").concat(o("message")&&o("message").length>0&&c().valid," ").concat(m.message&&c().errorLabel),htmlFor:"message",children:"текст сообщения"}),m.message&&(0,n.jsx)("span",{className:c().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsx)("button",{type:"submit",className:c().button,children:"опубликовать"})]})}},8758:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(5893),s=a(7294),r=a(7536),i=a(3773),c=a(112),l=a.n(c);function o(){let[e,t]=(0,s.useState)(null),[a,c]=(0,s.useState)(!1),[o,m]=(0,s.useState)(!1),{reset:d,register:_,handleSubmit:u,watch:x,formState:{errors:h}}=(0,r.cI)(),p=t=>{if(!e){c(!0);return}setTimeout(()=>{d(),m(!0)},1e3)},N=e=>{c(!1),t(e)};return o?(0,n.jsx)("h2",{className:l().successText,children:"Спасибо за ваш отзыв!"}):(0,n.jsxs)("form",{className:l().form,onSubmit:u(p),children:[(0,n.jsx)("h2",{className:l().title,children:"Новый отзыв"}),a&&(0,n.jsx)("span",{className:l().ratingError,children:"Пожалуйста, поставьте оценку"}),(0,n.jsx)(i.i,{onClick:N}),(0,n.jsxs)("div",{className:l().inputBox,children:[(0,n.jsx)("input",{className:"".concat(l().input," ").concat(h.about&&l().errorInput),type:"text",name:"about",id:"about",..._("about",{required:!0})}),(0,n.jsx)("label",{className:"".concat(l().label," ").concat(x("about")&&x("about").length>0&&l().valid," ").concat(h.about&&l().errorLabel),htmlFor:"about",children:"О чем ваш отзыв?"}),h.about&&(0,n.jsx)("span",{className:l().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:l().inputBox,children:[(0,n.jsx)("input",{className:"".concat(l().input," ").concat(h.title&&l().errorInput),type:"text",name:"title",id:"title",..._("title",{required:!0})}),(0,n.jsx)("label",{className:"".concat(l().label," ").concat(x("title")&&x("title").length>0&&l().valid," ").concat(h.title&&l().errorLabel),htmlFor:"title",children:"Заголовок отзыва"}),h.title&&(0,n.jsx)("span",{className:l().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:l().inputBox,children:[(0,n.jsx)("input",{className:"".concat(l().input," ").concat(h.dignity&&l().errorInput),type:"text",name:"dignity",id:"dignity",..._("dignity",{required:!0})}),(0,n.jsx)("label",{className:"".concat(l().label," ").concat(x("dignity")&&x("dignity").length>0&&l().valid," ").concat(h.dignity&&l().errorLabel),htmlFor:"dignity",children:"Достоинства"}),h.dignity&&(0,n.jsx)("span",{className:l().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:l().inputBox,children:[(0,n.jsx)("input",{className:"".concat(l().input," ").concat(h.flaws&&l().errorInput),type:"text",name:"flaws",id:"flaws",..._("flaws",{required:!0})}),(0,n.jsx)("label",{className:"".concat(l().label," ").concat(x("flaws")&&x("flaws").length>0&&l().valid," ").concat(h.flaws&&l().errorLabel),htmlFor:"flaws",children:"Недостатки"}),h.flaws&&(0,n.jsx)("span",{className:l().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:l().inputBox,children:[(0,n.jsx)("textarea",{className:"".concat(l().textarea," ").concat(h.review&&l().errorInput),type:"text",name:"review",id:"review",..._("review",{required:!0})}),(0,n.jsx)("label",{className:"".concat(l().label," ").concat(x("review")&&x("review").length>0&&l().valid," ").concat(h.review&&l().errorLabel),htmlFor:"review",children:"Ваш отзыв"}),h.review&&(0,n.jsx)("span",{className:l().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:"".concat(l().inputBox," ").concat(l().inputBoxAuthor),children:[(0,n.jsx)("input",{className:"".concat(l().input," ").concat(h.author&&l().errorInput),type:"text",name:"author",id:"author",..._("author",{required:!0})}),(0,n.jsx)("label",{className:"".concat(l().label," ").concat(x("author")&&x("author").length>0&&l().valid," ").concat(h.author&&l().errorLabel),htmlFor:"author",children:"Автор"}),h.author&&(0,n.jsx)("span",{className:l().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsx)("button",{type:"submit",className:l().button,children:"опубликовать"})]})}},7959:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(5893),s=a(9656),r=a.n(s);function i(e){let{children:t,setModal:a}=e;return(0,n.jsx)("div",{className:r().backdrop,onClick:()=>{a(!1)},children:(0,n.jsxs)("div",{className:r().modal,onClick:e=>{e.stopPropagation()},children:[(0,n.jsx)("button",{className:r().button,onClick:()=>{a(!1)},children:(0,n.jsxs)("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M0.897745 1.30426C1.40344 0.798647 2.22342 0.798647 2.72911 1.30426L30.1207 28.69C30.6264 29.1956 30.6264 30.0154 30.1207 30.521C29.615 31.0266 28.795 31.0266 28.2893 30.521L0.897745 3.13526C0.392054 2.62965 0.392054 1.80988 0.897745 1.30426Z",fill:"#7F8A94"}),(0,n.jsx)("path",{d:"M30.1022 1.32906C29.5965 0.823442 28.7766 0.823442 28.2708 1.32906L0.879267 28.7148C0.373575 29.2204 0.373575 30.0402 0.879267 30.5458C1.38496 31.0515 2.20494 31.0515 2.71063 30.5458L30.1022 3.16005C30.608 2.65444 30.608 1.83467 30.1022 1.32906Z",fill:"#7F8A94"})]})}),t]})})}},4407:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var n=a(5893),s=a(9008),r=a.n(s),i=a(451),c=a(7294),l=a(1664),o=a.n(l),m=a(3148),d=a(5430),_=a(3773);let u=[{id:1,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:5,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:2,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:5,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:3,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:5,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:4,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:5,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:5,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:5,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:6,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:4,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:7,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:4,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:8,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:3,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:9,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:3,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "},{id:10,title:"Знаю этот магазин с 2015 года, по качеству никогда не подводили!",nameUser:"UserName",image:"",date:"07.07.2022",ratings:5,dignity:'Качественная одежда для женщин, хороший сервис, можно оформить заказ по телефону, бонусы за "друзей"',flaws:"Бывает задерживают с доставкой, если не в МСК и области - на следующий день заказ вы не получите.",text:"Выбор одежды тут классный, представлены бренды, которые шьют большие размеры, я часто покупаю именно Фриду. Привлекает меня то, что шьют красивые современные модели, а не платья с фасонами как в 80е. Вещи из хорошей ткани, качественные, продуманные в том смысле, что подчеркивают достоинства и скрывают недостатки. Как будто на заказ шьют))\n    Первые заказы я оформляла на сайте, но потом поняла, что по телефону удобнее, можно сразу задать все интересующие вопросы. Недавно я познакомила свою коллегу с магазином и получила за нее 1000 бонусов, приятный момент)\n    Доставка обычно занимает 3-5 дней. живем мы не в Москве, поэтому так. Быают некоторые задержки из-за работы Почты России, но не критично. В общем, магазин хороший и одежда тут очень качественная!\n    "}];var x=a(2858),h=a.n(x);function p(e){let{setRating:t,setModal:a,setId:s}=e;m.kL.register(m.uw,m.f$,m.ZL);let[r,i]=(0,c.useState)(),l=[1,2,3,4,5],x={labels:l,datasets:[{data:l.map(e=>u.reduce((t,a)=>a.ratings===e?t+=1:t,0)),backgroundColor:"#FBD620",borderRadius:6,cursor:"pointer"},{data:l.map(e=>u.length-u.reduce((t,a)=>a.ratings===e?t+=1:t,0)),backgroundColor:"#F3F3F3",borderRadius:6}]};(0,c.useEffect)(()=>{i(u.reduce((e,t)=>e+=t.ratings,0)/u.length)},[]);let p=(0,c.useRef)(),N=e=>{s(null),t((0,d.cX)(p.current,e)[0].index+1),setTimeout(()=>{document.querySelector("#reviews").scrollIntoView({behavior:"smooth"})},200)};return(0,n.jsx)("section",{className:h().main,children:(0,n.jsxs)("div",{className:h().wrap,children:[(0,n.jsx)("h1",{children:"LEOMAX.RU — интернет-магазин \xabТелевизионная Торговая Сеть\xbb — отзывы"}),(0,n.jsx)("div",{className:h().recommendsWrap,children:(0,n.jsxs)("div",{className:h().recommends,children:[(0,n.jsx)("div",{className:h().stars,children:(0,n.jsx)(_.i,{allowFraction:!0,initialValue:r,size:31,readonly:!0})}),(0,n.jsxs)("p",{className:h().text,children:["рекомендуют: ",(0,n.jsx)("span",{children:"80%"})]})]})}),(0,n.jsx)(o(),{className:h().logo,href:"https://www.leomax.ru/",target:"_blank",children:(0,n.jsx)("img",{alt:"Logo",src:"/images/logo.png"})}),(0,n.jsxs)("div",{className:h().reviews,children:[(0,n.jsx)("div",{className:h().chartWrap,children:(0,n.jsx)(d.$Q,{ref:p,options:{maintainAspectRatio:!1,responsive:!0,scales:{x:{stacked:!0,grid:{display:!1},ticks:{font:{size:16,weight:700},color:"#676767"},border:{display:!1}},y:{display:!1,stacked:!0}},layout:{},onHover:(e,t)=>{1==t.length&&(e.native.target.style.cursor="pointer")}},data:x,onClick:N})}),(0,n.jsx)("button",{className:h().button,onClick:()=>a("newReview"),children:"добавить отзыв о компании"}),(0,n.jsxs)("button",{className:h().buttonSort,onClick:()=>{s(null),t(null),setTimeout(()=>{document.querySelector("#reviews").scrollIntoView({behavior:"smooth"})},200)},children:["все отзывы (",u.length,")"]})]})]})})}var N=a(5042),w=a.n(N);function b(e){let{id:t,title:a,nameUser:s,date:r,dignity:i,flaws:c,text:l,single:m,ratings:d,setId:u}=e;return(0,n.jsxs)("article",{className:"".concat(w().card," ").concat(m&&w().cardSingle),children:[(0,n.jsxs)("figure",{className:w().figure,children:[(0,n.jsx)("img",{src:"/images/user_no_photo.png",alt:"Фото пользователя",className:w().photo}),(0,n.jsx)("figcaption",{className:w().caption,children:s})]}),(0,n.jsxs)("div",{className:w().wrap,children:[(0,n.jsx)("h2",{children:a}),(0,n.jsx)("p",{className:w().date,children:r}),(0,n.jsx)("div",{className:w().rating,children:(0,n.jsx)(_.i,{allowFraction:!0,initialValue:d,size:31,readonly:!0})}),(0,n.jsxs)("div",{className:w().inner,children:[(0,n.jsx)("h3",{className:w().dignity,children:"достоинства:"}),(0,n.jsx)("p",{className:w().text,children:i})]}),(0,n.jsxs)("div",{className:w().inner,children:[(0,n.jsx)("h3",{className:w().flaws,children:"недостатки:"}),(0,n.jsx)("p",{className:w().text,children:c})]}),(0,n.jsxs)("div",{className:w().inner,children:[(0,n.jsx)("h3",{children:"отзыв:"}),(0,n.jsx)("p",{className:"".concat(w().text," ").concat(!m&&w().hiddenText),children:l})]}),!m&&(0,n.jsx)(o(),{className:w().button,href:"/",onClick:e=>{e.preventDefault(),u(t)},children:"читать весь отзыв"})]})]})}var j=a(4709),v=a.n(j);function g(e){let{reviews:t,setId:a}=e;return(0,n.jsx)("section",{id:"reviews",className:v().main,children:(0,n.jsxs)("div",{className:v().wrap,children:[(0,n.jsxs)("p",{className:v().summary,children:["Отзывы (",t&&t.length,")"]}),t.length?t.map(e=>(0,n.jsx)(b,{setId:a,...e},e.id)):(0,n.jsx)("p",{className:v().text,children:"Нет отзывов с данной оценкой"})]})})}var f=a(7959),C=a(8758),F=a(6808),y=a(1144),R=a.n(y);function k(){let[e,t]=(0,c.useState)(!1);return(0,n.jsxs)("article",{className:R().comment,children:[(0,n.jsxs)("div",{className:R().wrap,children:[(0,n.jsx)("img",{className:R().img,alt:"Фото",src:"/images/comment_photo.png"}),(0,n.jsxs)("div",{className:R().inner,children:[(0,n.jsx)("h3",{className:R().name,children:"LanaBanana"}),(0,n.jsx)("p",{className:R().date,children:"24.08.2020"}),(0,n.jsx)("p",{className:R().text,children:"Спасибо за информацию, не знала об этом магазине - теперь обязательно попробую что-то заказать там."}),!e&&(0,n.jsx)("button",{className:R().button,onClick:()=>t(!0),children:(0,n.jsx)("span",{children:"ответить"})})]})]}),e&&(0,n.jsxs)("div",{className:R().response,children:[(0,n.jsx)("img",{className:R().photo,alt:"Фото",src:"/images/comment_no_photo.png"}),(0,n.jsxs)("div",{className:R().wrapper,children:[(0,n.jsx)("span",{children:"Вы отвечаете на комментарий:"}),(0,n.jsx)("textarea",{className:R().textarea}),(0,n.jsxs)("div",{className:R().buttons,children:[(0,n.jsx)("button",{className:"".concat(R().button," ").concat(R().buttonCancel),onClick:()=>t(!1),children:"отмена"}),(0,n.jsx)("button",{className:"".concat(R().button," ").concat(R().buttonSend),onClick:()=>t(!1),children:"отправить"})]})]})]})]})}var S=a(9827),L=a.n(S);function I(e){let{review:t,setModal:a}=e,[s,r]=(0,c.useState)(!1);return(0,n.jsx)("section",{className:L().main,id:"singleReview",children:(0,n.jsxs)("div",{className:L().wrap,children:[t&&(0,n.jsx)(b,{single:!0,...t}),(0,n.jsx)("div",{className:L().grade,children:!s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:L().text,children:"Это полезный отзыв?"}),(0,n.jsxs)("div",{className:L().buttons,children:[(0,n.jsx)("button",{className:"".concat(L().button," ").concat(L().buttonYes),onClick:()=>r(!0),children:(0,n.jsx)("span",{children:"да"})}),(0,n.jsx)("button",{className:"".concat(L().button," ").concat(L().buttonNo),onClick:()=>r(!0),children:(0,n.jsx)("span",{children:"нет"})})]})]})}),(0,n.jsxs)("div",{className:L().comments,children:[(0,n.jsx)("h3",{className:L().title,children:"Комментарии к отзыву (2)"}),(0,n.jsx)("button",{className:L().button,onClick:()=>a("NewCommentForm"),children:"Оставить комментарий"})]}),(0,n.jsxs)("div",{className:L().commentsWrap,children:[(0,n.jsx)(k,{}),(0,n.jsx)(k,{})]})]})})}var M=a(7536),B=a(6456),E=a.n(B);function U(e){let{setModal:t}=e,[a,s]=(0,c.useState)(!1),{reset:r,register:i,handleSubmit:l,watch:o,formState:{errors:m}}=(0,M.cI)(),d=e=>{setTimeout(()=>{r(),s(!0)},1e3)};return a?(0,n.jsx)("h2",{className:E().successText,children:"Спасибо за ваш комментарий!"}):(0,n.jsxs)("form",{className:E().form,onSubmit:l(d),children:[(0,n.jsx)("h2",{className:E().title,children:"Оставить комментарий к отзыву"}),(0,n.jsxs)("div",{className:E().inputBox,children:[(0,n.jsx)("textarea",{className:"".concat(E().textarea," ").concat(m.comment&&E().errorInput),type:"text",name:"comment",id:"comment",...i("comment",{required:!0})}),(0,n.jsx)("label",{className:"".concat(E().label," ").concat(o("comment")&&o("comment").length>0&&E().valid," ").concat(m.comment&&E().errorLabel),htmlFor:"comment",children:"ваш комментарий"}),m.comment&&(0,n.jsx)("span",{className:E().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:"".concat(E().inputBox," ").concat(E().inputBoxAuthor),children:[(0,n.jsx)("input",{className:"".concat(E().input," ").concat(m.author&&E().errorInput),type:"text",name:"author",id:"author",...i("author",{required:!0})}),(0,n.jsx)("label",{className:"".concat(E().label," ").concat(o("author")&&o("author").length>0&&E().valid," ").concat(m.author&&E().errorLabel),htmlFor:"author",children:"Автор"}),m.author&&(0,n.jsx)("span",{className:E().error,children:"Это поле необходимо заполнить"})]}),(0,n.jsxs)("div",{className:E().buttons,children:[(0,n.jsx)("button",{className:"".concat(E().button," ").concat(E().buttonCancel),onClick:()=>t(null),children:"отмена"}),(0,n.jsx)("button",{className:"".concat(E().button," ").concat(E().buttonSend),children:"отправить"})]})]})}function q(){let[e,t]=(0,c.useState)(null),[a,s]=(0,c.useState)(null),[l,o]=(0,c.useState)(null),[m,d]=(0,c.useState)(u),[_,x]=(0,c.useState)(null);return(0,c.useEffect)(()=>{null===l?d(u):d(u.filter(e=>e.ratings===l))},[l]),(0,c.useEffect)(()=>{e?s(u.find(t=>t.id==e)):s(null),e&&setTimeout(()=>{document.querySelector("#singleReview").scrollIntoView({behavior:"smooth"})},200)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Правдивые отзывы.ру"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(i.Z,{setModal:x,children:(0,n.jsxs)("main",{children:[(0,n.jsx)(p,{setRating:o,setModal:x,setId:t}),!a&&(0,n.jsx)(g,{reviews:m,setId:t}),a&&(0,n.jsx)(I,{review:a,setModal:x})]})}),_&&(0,n.jsx)(f.Z,{setModal:x,children:"newReview"===_?(0,n.jsx)(C.Z,{}):"feedback"===_?(0,n.jsx)(F.Z,{}):(0,n.jsx)(U,{setModal:x})})]})}},1144:function(e){e.exports={comment:"Comment_comment__VZss2",wrap:"Comment_wrap__cjXMq",img:"Comment_img__Y1kWS",inner:"Comment_inner__QOLcX",name:"Comment_name__A6YbE",date:"Comment_date__QVpd5",text:"Comment_text__yhh3n",button:"Comment_button__YJW5_",response:"Comment_response__2cKKh",photo:"Comment_photo__X4VtH",wrapper:"Comment_wrapper__nAEB_",textarea:"Comment_textarea__pmZq_",buttons:"Comment_buttons__OWAPt",buttonCancel:"Comment_buttonCancel__2wIJY",buttonSend:"Comment_buttonSend__R_SkI"}},3998:function(e){e.exports={footer:"Footer_footer__RBo9k",wrap:"Footer_wrap__XDVm_",title:"Footer_title__c6dvL",link:"Footer_link__kA7D9"}},9649:function(e){e.exports={header:"Header_header__rPrui",wrap:"Header_wrap__YlLIS",title:"Header_title__GiF5P",button:"Header_button__R5uMv"}},9395:function(e){e.exports={form:"Feedback_form__zZ6vI",title:"Feedback_title__LbhPH",ratingError:"Feedback_ratingError__xElij",inputBox:"Feedback_inputBox__unYna",input:"Feedback_input__INgVV",label:"Feedback_label__ZadJM",textarea:"Feedback_textarea__WrNEM",valid:"Feedback_valid__jgrF0",error:"Feedback_error__G5_TI",errorInput:"Feedback_errorInput__FrI0n",errorLabel:"Feedback_errorLabel__5O_BP",inputBoxAuthor:"Feedback_inputBoxAuthor__i1WU9",button:"Feedback_button__JyeLe",successText:"Feedback_successText__3FesM"}},6456:function(e){e.exports={form:"NewCommentForm_form__2b_tV",title:"NewCommentForm_title__a8v_R",ratingError:"NewCommentForm_ratingError__VyLzU",inputBox:"NewCommentForm_inputBox__P_fRv",input:"NewCommentForm_input__6mX1q",label:"NewCommentForm_label__gOmCm",textarea:"NewCommentForm_textarea__ygDXA",valid:"NewCommentForm_valid__Y6UWK",error:"NewCommentForm_error__DjX0q",errorInput:"NewCommentForm_errorInput__n_nnb",errorLabel:"NewCommentForm_errorLabel__1Cigo",inputBoxAuthor:"NewCommentForm_inputBoxAuthor__1ZLn0",successText:"NewCommentForm_successText__GyA2s",buttons:"NewCommentForm_buttons__uLiMr",button:"NewCommentForm_button__KxK_B",buttonCancel:"NewCommentForm_buttonCancel___hlVE",buttonSend:"NewCommentForm_buttonSend__E_cA_"}},112:function(e){e.exports={form:"NewReviewForm_form__sEzxd",title:"NewReviewForm_title__kLKeT",ratingError:"NewReviewForm_ratingError__MXt0g",inputBox:"NewReviewForm_inputBox__KdXqc",input:"NewReviewForm_input__eqlqK",label:"NewReviewForm_label__ySIrG",textarea:"NewReviewForm_textarea__ScJxe",valid:"NewReviewForm_valid__6PUIK",error:"NewReviewForm_error__1beYy",errorInput:"NewReviewForm_errorInput__8wOq4",errorLabel:"NewReviewForm_errorLabel__zJkYz",inputBoxAuthor:"NewReviewForm_inputBoxAuthor__KpI4B",button:"NewReviewForm_button__pGuMn",successText:"NewReviewForm_successText__UfV_P"}},2858:function(e){e.exports={main:"Main_main__1wzwM",wrap:"Main_wrap__YbfOQ",recommendsWrap:"Main_recommendsWrap__OjYLG",recommends:"Main_recommends__OED9G",stars:"Main_stars__htGyR",text:"Main_text__XPM_I",logo:"Main_logo__8Djee",reviews:"Main_reviews__P3TZm",chartWrap:"Main_chartWrap__MA6Jm",button:"Main_button__w6OyK",buttonSort:"Main_buttonSort__i0CMD"}},9656:function(e){e.exports={backdrop:"Modal_backdrop__7jfN5",modal:"Modal_modal__w8Blv",button:"Modal_button__R_gLf"}},5042:function(e){e.exports={card:"ReviewCard_card__NHVtp",figure:"ReviewCard_figure__8q1xe",photo:"ReviewCard_photo__CyLbf",caption:"ReviewCard_caption__oJ81M",wrap:"ReviewCard_wrap__wdqyl",date:"ReviewCard_date__f3mOu",rating:"ReviewCard_rating__T7xwd",inner:"ReviewCard_inner__CFA3a",dignity:"ReviewCard_dignity__Z_QfE",flaws:"ReviewCard_flaws__eXs_F",text:"ReviewCard_text__M4CKz",hiddenText:"ReviewCard_hiddenText__cDZ6v",button:"ReviewCard_button__WXLcF",cardSingle:"ReviewCard_cardSingle__HNg_m"}},4709:function(e){e.exports={main:"Reviews_main__LTRsk",wrap:"Reviews_wrap__Tc9fP",summary:"Reviews_summary__Z0V5O",text:"Reviews_text__Nn_s2"}},9827:function(e){e.exports={main:"SingleReview_main__1zYy_",wrap:"SingleReview_wrap__25YEj",grade:"SingleReview_grade__4Cs46",text:"SingleReview_text__WQq_Z",buttons:"SingleReview_buttons__BNc7t",button:"SingleReview_button__dVUQ5",buttonYes:"SingleReview_buttonYes__59NtF",buttonNo:"SingleReview_buttonNo__UsZwM",commentsWrap:"SingleReview_commentsWrap___pGPE",comments:"SingleReview_comments___w57I",title:"SingleReview_title__xxIqx"}}},function(e){e.O(0,[196,192,853,233,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
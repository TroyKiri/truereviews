(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{7933:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules",function(){return t(6797)}])},451:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var a=t(5893),n=t(1664),s=t.n(n),l=t(9649),c=t.n(l);function i(e){let{setModal:r}=e;return(0,a.jsx)("header",{className:c().header,children:(0,a.jsxs)("div",{className:c().wrap,children:[(0,a.jsx)(s(),{href:"/",children:(0,a.jsx)("p",{className:c().title,children:"Правдивые отзывы.ру"})}),(0,a.jsx)("button",{className:c().button,onClick:()=>r("newReview"),children:"написать новый отзыв"})]})})}var o=t(3998),d=t.n(o);function u(e){let{setModal:r}=e;return(0,a.jsx)("footer",{className:d().footer,children:(0,a.jsxs)("div",{className:d().wrap,children:[(0,a.jsx)("p",{className:d().title,children:"правдивые отзывы.ру \xa9 2023"}),(0,a.jsx)(s(),{href:"/rules",className:d().link,children:"правила"}),(0,a.jsx)(s(),{href:"/",className:d().link,onClick:e=>{e.preventDefault(),r("feedback")},children:"обратная связь"})]})})}function x(e){let{children:r,setModal:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{setModal:t}),r,(0,a.jsx)(u,{setModal:t})]})}},6808:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var a=t(5893),n=t(7294),s=t(7536),l=t(9395),c=t.n(l);function i(){let[e,r]=(0,n.useState)(!1),{reset:t,register:l,handleSubmit:i,watch:o,formState:{errors:d}}=(0,s.cI)(),u=e=>{setTimeout(()=>{t(),r(!0)},1e3)};return e?(0,a.jsx)("h2",{className:c().successText,children:"Спасибо! В ближайшее время мы свяжемся с вами!"}):(0,a.jsxs)("form",{className:c().form,onSubmit:i(u),children:[(0,a.jsx)("h2",{className:c().title,children:"Связаться с нами"}),(0,a.jsxs)("div",{className:c().inputBox,children:[(0,a.jsx)("input",{className:"".concat(c().input," ").concat(d.name&&c().errorInput),type:"text",name:"name",id:"name",...l("name",{required:!0})}),(0,a.jsx)("label",{className:"".concat(c().label," ").concat(o("name")&&o("name").length>0&&c().valid," ").concat(d.name&&c().errorLabel),htmlFor:"name",children:"ваше имя"}),d.name&&(0,a.jsx)("span",{className:c().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsxs)("div",{className:c().inputBox,children:[(0,a.jsx)("input",{className:"".concat(c().input," ").concat(d.email&&c().errorInput),type:"text",name:"email",id:"email",...l("email",{required:{value:!0,message:"Это поле необходимо заполнить"},pattern:{value:/\S+@\S+\.\S+/,message:"Некорректный формат E-mail"}})}),(0,a.jsx)("label",{className:"".concat(c().label," ").concat(o("email")&&o("email").length>0&&c().valid," ").concat(d.email&&c().errorLabel),htmlFor:"email",children:"E-mail"}),d.email&&(0,a.jsx)("span",{className:c().error,children:d.email.message})]}),(0,a.jsxs)("div",{className:c().inputBox,children:[(0,a.jsx)("textarea",{className:"".concat(c().textarea," ").concat(d.message&&c().errorInput),type:"text",name:"message",id:"message",...l("message",{required:!0})}),(0,a.jsx)("label",{className:"".concat(c().label," ").concat(o("message")&&o("message").length>0&&c().valid," ").concat(d.message&&c().errorLabel),htmlFor:"message",children:"текст сообщения"}),d.message&&(0,a.jsx)("span",{className:c().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsx)("button",{type:"submit",className:c().button,children:"опубликовать"})]})}},8758:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var a=t(5893),n=t(7294),s=t(7536),l=t(3773),c=t(112),i=t.n(c);function o(){let[e,r]=(0,n.useState)(null),[t,c]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1),{reset:u,register:x,handleSubmit:h,watch:m,formState:{errors:_}}=(0,s.cI)(),p=r=>{if(!e){c(!0);return}setTimeout(()=>{u(),d(!0)},1e3)},j=e=>{c(!1),r(e)};return o?(0,a.jsx)("h2",{className:i().successText,children:"Спасибо за ваш отзыв!"}):(0,a.jsxs)("form",{className:i().form,onSubmit:h(p),children:[(0,a.jsx)("h2",{className:i().title,children:"Новый отзыв"}),t&&(0,a.jsx)("span",{className:i().ratingError,children:"Пожалуйста, поставьте оценку"}),(0,a.jsx)(l.i,{onClick:j}),(0,a.jsxs)("div",{className:i().inputBox,children:[(0,a.jsx)("input",{className:"".concat(i().input," ").concat(_.about&&i().errorInput),type:"text",name:"about",id:"about",...x("about",{required:!0})}),(0,a.jsx)("label",{className:"".concat(i().label," ").concat(m("about")&&m("about").length>0&&i().valid," ").concat(_.about&&i().errorLabel),htmlFor:"about",children:"О чем ваш отзыв?"}),_.about&&(0,a.jsx)("span",{className:i().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsxs)("div",{className:i().inputBox,children:[(0,a.jsx)("input",{className:"".concat(i().input," ").concat(_.title&&i().errorInput),type:"text",name:"title",id:"title",...x("title",{required:!0})}),(0,a.jsx)("label",{className:"".concat(i().label," ").concat(m("title")&&m("title").length>0&&i().valid," ").concat(_.title&&i().errorLabel),htmlFor:"title",children:"Заголовок отзыва"}),_.title&&(0,a.jsx)("span",{className:i().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsxs)("div",{className:i().inputBox,children:[(0,a.jsx)("input",{className:"".concat(i().input," ").concat(_.dignity&&i().errorInput),type:"text",name:"dignity",id:"dignity",...x("dignity",{required:!0})}),(0,a.jsx)("label",{className:"".concat(i().label," ").concat(m("dignity")&&m("dignity").length>0&&i().valid," ").concat(_.dignity&&i().errorLabel),htmlFor:"dignity",children:"Достоинства"}),_.dignity&&(0,a.jsx)("span",{className:i().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsxs)("div",{className:i().inputBox,children:[(0,a.jsx)("input",{className:"".concat(i().input," ").concat(_.flaws&&i().errorInput),type:"text",name:"flaws",id:"flaws",...x("flaws",{required:!0})}),(0,a.jsx)("label",{className:"".concat(i().label," ").concat(m("flaws")&&m("flaws").length>0&&i().valid," ").concat(_.flaws&&i().errorLabel),htmlFor:"flaws",children:"Недостатки"}),_.flaws&&(0,a.jsx)("span",{className:i().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsxs)("div",{className:i().inputBox,children:[(0,a.jsx)("textarea",{className:"".concat(i().textarea," ").concat(_.review&&i().errorInput),type:"text",name:"review",id:"review",...x("review",{required:!0})}),(0,a.jsx)("label",{className:"".concat(i().label," ").concat(m("review")&&m("review").length>0&&i().valid," ").concat(_.review&&i().errorLabel),htmlFor:"review",children:"Ваш отзыв"}),_.review&&(0,a.jsx)("span",{className:i().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsxs)("div",{className:"".concat(i().inputBox," ").concat(i().inputBoxAuthor),children:[(0,a.jsx)("input",{className:"".concat(i().input," ").concat(_.author&&i().errorInput),type:"text",name:"author",id:"author",...x("author",{required:!0})}),(0,a.jsx)("label",{className:"".concat(i().label," ").concat(m("author")&&m("author").length>0&&i().valid," ").concat(_.author&&i().errorLabel),htmlFor:"author",children:"Автор"}),_.author&&(0,a.jsx)("span",{className:i().error,children:"Это поле необходимо заполнить"})]}),(0,a.jsx)("button",{type:"submit",className:i().button,children:"опубликовать"})]})}},7959:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var a=t(5893),n=t(9656),s=t.n(n);function l(e){let{children:r,setModal:t}=e;return(0,a.jsx)("div",{className:s().backdrop,onClick:()=>{t(!1)},children:(0,a.jsxs)("div",{className:s().modal,onClick:e=>{e.stopPropagation()},children:[(0,a.jsx)("button",{className:s().button,onClick:()=>{t(!1)},children:(0,a.jsxs)("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M0.897745 1.30426C1.40344 0.798647 2.22342 0.798647 2.72911 1.30426L30.1207 28.69C30.6264 29.1956 30.6264 30.0154 30.1207 30.521C29.615 31.0266 28.795 31.0266 28.2893 30.521L0.897745 3.13526C0.392054 2.62965 0.392054 1.80988 0.897745 1.30426Z",fill:"#7F8A94"}),(0,a.jsx)("path",{d:"M30.1022 1.32906C29.5965 0.823442 28.7766 0.823442 28.2708 1.32906L0.879267 28.7148C0.373575 29.2204 0.373575 30.0402 0.879267 30.5458C1.38496 31.0515 2.20494 31.0515 2.71063 30.5458L30.1022 3.16005C30.608 2.65444 30.608 1.83467 30.1022 1.32906Z",fill:"#7F8A94"})]})}),r]})})}},6797:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var a=t(5893),n=t(7294),s=t(9008),l=t.n(s),c=t(451),i=t(3912),o=t.n(i);function d(){return(0,a.jsx)("section",{className:o().rules,children:(0,a.jsx)("section",{className:o().rules,children:(0,a.jsxs)("div",{className:o().wrap,children:[(0,a.jsx)("h1",{children:"Правила сообщества \xabПРАВДИВЫЕ ОТЗЫВЫ.РУ\xbb"}),(0,a.jsx)("p",{children:"Термины, использующиеся в настоящих Правилах, аналогичны терминам, используемым в Пользовательском соглашении."}),(0,a.jsx)("h2",{children:"1. Вознаграждение за Отзывы"}),(0,a.jsx)("p",{children:"1.1. Авторам начисляется вознаграждение за каждый просмотр опубликованного Отзыва при выполнении следующих условий: Отзыв содержит не менее 500 символов (учитываются только русские и латинские буквы и цифры). Отзыв написан на основе личного опыта, а точные фразы и изображения из Отзыва не были опубликованы где-либо ранее. Отзыв просматривался посетителем не менее 15 секунд. Посетитель перешёл на страницу, содержащую Отзыв по общедоступной ссылке при поиске информации по теме Отзыва. При этом учитываются только первые 20 просмотров Отзывов каждым посетителем за сутки. Объектом Отзыва является серийный товар или услуга, пользующиеся спросом (на усмотрение Администратора). Товары/услуги не были предоставлены Автору бесплатно или со скидкой/кешбэком за этот Отзыв. Размер вознаграждения составляет от 0 до 500 р. за 1000 просмотров и может изменяться в зависимости от категории объекта Отзыва, объема личных впечатлений, наличия фото/видео- материалов в Отзыве, а также грамотности и профессионализма Автора. Вознаграждение начисляется Автору на баланс после 00:05 по Московскому времени за прошедшие сутки. Повторные просмотры Отзыва одним посетителем не учитываются."}),(0,a.jsx)("p",{children:"Если автор не публиковал новые Отзывы в течение 30 дней с момента опубликования последнего Отзыва, то начисления приостанавливаются до тех пор, пока Автор не опубликует новый Отзыв."}),(0,a.jsx)("p",{children:"1.2. Авторы получают дополнительный бонус за публикацию нового Отзыва при условии: Отзыв добавлен не ранее 06.06.2013 (дата внесения данных изменений в правила). Просмотры Отзыва оплачиваются согласно пункту 1.1. О данном объекте было опубликовано менее 30 Отзывов на момент модерации. Величина бонуса зависит от категории объекта Отзыва и его востребованности, объема текста и фото в Отзыве. В расчете бонуса учитываются только первые 5000 символов и первые 3 фото в Отзыве, а остальной объем текста и фото на величину бонуса влияния не имеют."}),(0,a.jsx)("p",{children:'Бонус единоразово начисляется на баланс одновременно с публикацией его величины в разделе "Мои отзывы", сразу после завершения первичной обработки Отзыва. Редактирование Отзыва не оказывает никакого влияния на уже начисленный или не начисленный по вышеуказанным причинам бонус. При блокировании Отзыва за нарушение правил бонус может быть списан с баланса Автора в любой момент.'}),(0,a.jsx)("h2",{children:"2. Запрещается:"}),(0,a.jsx)("p",{children:"2.1. Публикация на других сайтах материалов, размещенных на Otzovik.com, без разрешения Администратора Сайта."}),(0,a.jsx)("p",{children:"2.2. Плагиат и использование/копирование/переработка чужого контента, включая любые фото, видео и текстовые материалы."}),(0,a.jsx)("p",{children:"2.3. Пересказ общеизвестной/официальной информации (например: сценарий, сюжет, аннотация, состав продукта, тех. характеристики и т.п.) и спойлеры."}),(0,a.jsx)("p",{children:"2.4. Бесполезные, малоинформативные Отзывы (в том числе ввиду недостаточности личного опыта использования) или Отзывы со множеством орфографических и пунктуационных ошибок, либо Отзывы в стихах."}),(0,a.jsx)("p",{children:"2.5. Отзывы без точного названия объекта (не указана модель товара, производитель, адрес заведения и т.п.), либо о нескольких объектах сразу."}),(0,a.jsx)("p",{children:"2.6. Пропаганда мошенничества, халявы, политических и религиозных взглядов, либо публикация запрещенной в РФ информации (включая контрафакт и нарушения авторских прав), либо Отзывы об оружии (за исключением спортивного и для самообороны), а также брань и оскорбления."}),(0,a.jsx)("p",{children:'2.7. Фото и изображения, не имеющие информационной ценности, либо в неприемлемом виде (размытые, перевернутые, мелкие и т.п.), либо шокирующего характера; а также скриншотов, за исключением разделов: "Интернет и сайты", "Программное обеспечение", "Компьютерные игры", "Игры для телефонов" (но не более 3х скриншотов для игр) и случаев, когда скриншот имеет существенную информационную ценность в Отзыве.'}),(0,a.jsx)("p",{children:"2.8. Оффтоп, дублирование, реклама, промокоды, реферальные ссылки и их распространение (за исключением раздела 3 настоящих Правил), хештеги, а также вводящая в заблуждение информация."}),(0,a.jsx)("p",{children:'2.9. Мусорные Комментарии ("+1", "cпасибо за отзыв", "не видел" и т.п.).'}),(0,a.jsx)("p",{children:"2.10. Порнография и материалы только для взрослых, к которым в том числе относятся изображения почти или полностью обнаженных людей, людей в прозрачной или откровенной одежде, людей в непристойных или вызывающих позах, а также грудь, ягодицы или промежность крупным планом."}),(0,a.jsx)("p",{children:"2.11. Отзывы на блоги, личные интернет-страницы, группы, каналы (включая Youtube) в социальных сетях и мессенджерах, у которых менее 100 000 подписчиков, либо Отзывы на малоизвестные сайты, программы, онлайн-сервисы, а также Отзывы об интернет-заработке на отзывах/комментариях/опросах/веб-серфинге/кликах/накрутке чего-либо."}),(0,a.jsx)("p",{children:"2.12. Отзывы на спортивные команды, музыкальных исполнителей, персонажи, песни, стихи, кулинарные рецепты и полезные советы."}),(0,a.jsx)("p",{children:"2.13. Отзывы на антиквариат, коллекционные, самодельные, несерийные, редкие товары/произведения или услуги."}),(0,a.jsx)("p",{children:"2.14. Отзывы сотрудников о работодателе, кроме случаев сетевого маркетинга, аутсорсинга или когда название объекта Отзыва имеет вид “Работа в/на …”."}),(0,a.jsx)("p",{children:'2.15. Публикация персональных данных физического лица без получения его согласия в порядке, предусмотренном ст. 10.1. ФЗ-152 РФ "О персональных данных", а также Отзывы на физическое лицо.'}),(0,a.jsx)("p",{children:"2.16. Отзывы на товары/услуги предоставленные Автору бесплатно или со скидкой, если Автор не отметил этот факт в опциях Отзыва."}),(0,a.jsx)("h2",{children:"3. Реферальная программа Сайта"}),(0,a.jsx)("p",{children:"3.1. Вознаграждение по реферальной программе составляет 15% от размера вознаграждения, указанного в п. 1.1., каждого Автора (реферала), зарегистрированного по реферальной ссылке."}),(0,a.jsx)("p",{children:"3.2. Запрещается распространение реферальных ссылок с помощью спам, САР, систем обмена трафиком и сайтах, где это не одобряется аудиторией."}),(0,a.jsx)("p",{children:"3.3. Реферальное вознаграждение, указанное в п. 3.1, начисляется на баланс реферера после 00:05 за прошедшие сутки вне зависимости от активности реферера."}),(0,a.jsx)("h2",{children:"4. Администратор Сайта вправе:"}),(0,a.jsx)("p",{children:"4.1. Заблокировать аккаунт за спам, некорректное поведение, накрутку просмотров/рейтингов/репутации любыми способами (в том числе за провокации на взаимное плюсование Отзывов) или за грубые нарушения других пунктов правил."}),(0,a.jsx)("p",{children:"4.2. Заблокировать Аккаунты в случае регистрации дополнительных Аккаунтов одним и тем же лицом без согласования с Администратором."}),(0,a.jsx)("p",{children:"4.3. Повышать личный коэффициент Авторам за интересные и полезные Отзывы, либо понижать репутацию и личный коэффициент Авторам за малограмотные и малосодержательные Отзывы или нарушения правил."}),(0,a.jsx)("p",{children:"4.4. Отказать в размещении, изменении и удалении любых материалов на свое усмотрение."}),(0,a.jsx)("p",{children:"4.5. Требовать необходимые материалы для проверки достоверности информации (включая фото объектов и документов) и блокировать/удалять информацию, если Автор не предоставил объективные доказательства наличия собственного опыта использования."}),(0,a.jsx)("p",{children:"4.6. Не удалять Аккаунты и Отзывы по запросу Авторов. Если Вы согласитесь с правилами и зарегистрируетесь, а в будущем решите покинуть Сайт, то все Ваши публикации будут оставаться частью Сайта."}),(0,a.jsx)("p",{children:"4.7. Изменять настоящие Правила с целью улучшения качества предоставляемого сервиса."})]})})})}var u=t(7959),x=t(8758),h=t(6808);function m(){let[e,r]=(0,n.useState)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:"Правдивые отзывы.ру"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c.Z,{setModal:r,children:(0,a.jsx)("main",{children:(0,a.jsx)(d,{})})}),e&&(0,a.jsx)(u.Z,{setModal:r,children:"newReview"===e?(0,a.jsx)(x.Z,{}):"feedback"===e?(0,a.jsx)(h.Z,{}):(0,a.jsx)("h1",{children:"Комментарий"})})]})}},3998:function(e){e.exports={footer:"Footer_footer__RBo9k",wrap:"Footer_wrap__XDVm_",title:"Footer_title__c6dvL",link:"Footer_link__kA7D9"}},9649:function(e){e.exports={header:"Header_header__rPrui",wrap:"Header_wrap__YlLIS",title:"Header_title__GiF5P",button:"Header_button__R5uMv"}},9395:function(e){e.exports={form:"Feedback_form__zZ6vI",title:"Feedback_title__LbhPH",ratingError:"Feedback_ratingError__xElij",inputBox:"Feedback_inputBox__unYna",input:"Feedback_input__INgVV",label:"Feedback_label__ZadJM",textarea:"Feedback_textarea__WrNEM",valid:"Feedback_valid__jgrF0",error:"Feedback_error__G5_TI",errorInput:"Feedback_errorInput__FrI0n",errorLabel:"Feedback_errorLabel__5O_BP",inputBoxAuthor:"Feedback_inputBoxAuthor__i1WU9",button:"Feedback_button__JyeLe",successText:"Feedback_successText__3FesM"}},112:function(e){e.exports={form:"NewReviewForm_form__sEzxd",title:"NewReviewForm_title__kLKeT",ratingError:"NewReviewForm_ratingError__MXt0g",inputBox:"NewReviewForm_inputBox__KdXqc",input:"NewReviewForm_input__eqlqK",label:"NewReviewForm_label__ySIrG",textarea:"NewReviewForm_textarea__ScJxe",valid:"NewReviewForm_valid__6PUIK",error:"NewReviewForm_error__1beYy",errorInput:"NewReviewForm_errorInput__8wOq4",errorLabel:"NewReviewForm_errorLabel__zJkYz",inputBoxAuthor:"NewReviewForm_inputBoxAuthor__KpI4B",button:"NewReviewForm_button__pGuMn",successText:"NewReviewForm_successText__UfV_P"}},9656:function(e){e.exports={backdrop:"Modal_backdrop__7jfN5",modal:"Modal_modal__w8Blv",button:"Modal_button__R_gLf"}},3912:function(e){e.exports={rules:"Rules_rules__J15rw",wrap:"Rules_wrap__MKA0h"}}},function(e){e.O(0,[192,233,774,888,179],function(){return e(e.s=7933)}),_N_E=e.O()}]);
(window["webpackJsonpimobiliaria-app"]=window["webpackJsonpimobiliaria-app"]||[]).push([[0],{195:function(e,a,t){e.exports=t(413)},200:function(e,a,t){},201:function(e,a,t){},260:function(e){e.exports=JSON.parse('{"imoveis":[{"id":1,"tipoImovel":"Casa","aluguel":1000,"quarto":4,"tamanho":250,"garagem":1,"localizacao":"Cabo Frio","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":2,"tipoImovel":"Casa","aluguel":1000,"quarto":5,"tamanho":250,"garagem":1,"localizacao":"Cabo Frio","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":3,"tipoImovel":"Apartamento","aluguel":1000,"quarto":1,"tamanho":250,"garagem":1,"localizacao":"Vila Isabel","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":4,"tipoImovel":"Apartamento","aluguel":1000,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Flamengo","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":5,"tipoImovel":"Casa","aluguel":1000,"quarto":1,"tamanho":250,"garagem":1,"localizacao":"Petr\xf3polis","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":6,"tipoImovel":"Apartamento","aluguel":1000,"quarto":3,"tamanho":250,"garagem":1,"localizacao":"Ramos","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":7,"tipoImovel":"Casa","aluguel":1000,"quarto":3,"tamanho":250,"garagem":1,"localizacao":"Cabo Frio","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":8,"tipoImovel":"Casa","aluguel":1000,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Ramos","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":9,"tipoImovel":"Apartamento","aluguel":1000,"quarto":1,"tamanho":250,"garagem":1,"localizacao":"Barra da Tijuca","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":10,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":11,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":12,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":13,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":14,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":15,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":16,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":17,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":18,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":19,"tipoImovel":"Apartamento","aluguel":1300,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Per\xf3","descricao":"Casa grande com vista para o mar","disponibilidade":true},{"id":20,"tipoImovel":"Apartamento","aluguel":1200,"quarto":2,"tamanho":250,"garagem":1,"localizacao":"Ramos","descricao":"Casa grande com vista para o mar","disponibilidade":true}]}')},413:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(9),o=t.n(n),i=(t(200),t(201),t(56)),m=t(59),c=(t(50),t(14)),d=(t(62),t(16)),s=(t(91),t(41)),u=s.a.Search,p=function(){return r.a.createElement(u,{size:"large",placeholder:"Procure o im\xf3vel ideal para voc\xea",onSearch:function(e){return console.log(e)},enterButton:!0})},E=(t(416),t(144)),g=E.a.Meta,v=function(e){var a=e.type,t=e.price,l=e.location;return r.a.createElement(E.a,{hoverable:!0,style:{width:300,margin:24},cover:r.a.createElement("img",{alt:"example",src:"https://via.placeholder.com/300x300?text=Imagem+Indispon%C3%ADvel"})},r.a.createElement(g,{title:a}),r.a.createElement(c.a,{style:{padding:12}},r.a.createElement("span",null,"Pre\xe7o: ",t)),r.a.createElement(c.a,null,r.a.createElement("span",null,"Localiza\xe7\xe3o: ",l)))},h=t(78),b=(t(415),t(60)),f=(t(160),t(10)),I=t(192),y=(t(264),t(68)),C=y.a.Footer,x=y.a.Content,A=y.a.Sider,q=y.a.Header,w=function(e){var a=e.children,t=e.showSidebar,n=void 0!==t&&t,o=e.sidebarCurrentKey,m=void 0===o?"home":o,s=Object(l.useState)(!1),u=Object(I.a)(s,2),p=u[0],E=u[1];return r.a.createElement(y.a,{className:"App",style:{minHeight:"100vh"}},n&&r.a.createElement(A,{trigger:null,collapsible:!0,collapsed:p,style:{textAlign:"left"}},r.a.createElement(b.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[m]},r.a.createElement(b.a.Item,{key:"home"},r.a.createElement(i.b,{to:"/dashboard"},r.a.createElement(f.a,{type:"home"}),r.a.createElement("span",null,"Im\xf3veis"))),r.a.createElement(b.a.Item,{key:"create"},r.a.createElement(i.b,{to:"/novo"},r.a.createElement(f.a,{type:"plus-square"}),r.a.createElement("span",null,"Adicionar"))),r.a.createElement(b.a.Item,{key:"logout"},r.a.createElement(i.b,{to:"/login"},r.a.createElement(f.a,{type:"user-delete"}),r.a.createElement("span",null,"Sair"))))),r.a.createElement(y.a,null,r.a.createElement(q,{style:{background:"#fff",padding:0,textAlign:"left"}},r.a.createElement(c.a,null,n&&r.a.createElement(d.a,{span:4},r.a.createElement(f.a,{className:"trigger",type:p?"menu-unfold":"menu-fold",style:{fontSize:24,padding:12},onClick:function(){return E(!p)}})),r.a.createElement(d.a,{span:n?14:24,style:{textAlign:"center"}},r.a.createElement("h1",{className:"title"},"Imobili\xe1ria")))),r.a.createElement(x,{className:"content"},a),r.a.createElement(C,{style:{position:"relative",bottom:0,left:0,width:"100%"}},"Copyright\xa92019 - Aplica\xe7\xf5es na Internet")))},z=function(){var e=Object(h.findProducts)().filter((function(e,a){return a<8}));return r.a.createElement(w,null,r.a.createElement(p,null),r.a.createElement(c.a,null,e.map((function(e,a){return r.a.createElement(d.a,{span:6,key:"product-".concat(a)},r.a.createElement(i.b,{to:"/imovel/".concat(e.id)},r.a.createElement(v,{type:e.tipoImovel,price:e.aluguel,location:e.localizacao})))}))))},P=(t(81),t(33)),k=(t(127),t(25)),S=(t(279),t(49)),j=(t(281),t(184)),O=t(142),T=t.n(O),N=t(183),D=t.n(N),B={labelCol:{span:4},wrapperCol:{span:8}},F={labelCol:{span:4},wrapperCol:{span:8,offset:4}},K=function(e){var a=Object(h.findProduct)(e.match.params.id);return r.a.createElement(w,null,r.a.createElement(c.a,{gutter:16},r.a.createElement(d.a,{span:8},r.a.createElement(j.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("img",{alt:"example",src:"https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"})),r.a.createElement("div",null,r.a.createElement("img",{alt:"example",src:"https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"})),r.a.createElement("div",null,r.a.createElement("img",{alt:"example",src:"https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"})),r.a.createElement("div",null,r.a.createElement("img",{alt:"example",src:"https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"})))),r.a.createElement(d.a,{span:14},r.a.createElement(S.a,{title:"Mais informa\xe7\xf5es do Im\xf3vel",bordered:!0},r.a.createElement(S.a.Item,{label:"Tipo Im\xf3vel"},a.tipoImovel),r.a.createElement(S.a.Item,{label:"Pre\xe7o"},a.aluguel),r.a.createElement(S.a.Item,{label:"Quarto(s)"},a.quarto),r.a.createElement(S.a.Item,{label:"\xc1rea"},a.tamanho),r.a.createElement(S.a.Item,{label:"Garagem"},a.garagem),r.a.createElement(S.a.Item,{label:"Localiza\xe7\xe3o"},a.localizacao),r.a.createElement(S.a.Item,{label:"Descri\xe7\xe3o"},a.descricao)))),r.a.createElement(c.a,{style:{margin:24}},r.a.createElement("h1",null," Gostou do im\xf3vel? Entre em contato conosco!"),r.a.createElement(k.a,null,r.a.createElement(c.a,null,r.a.createElement(d.a,{span:24,offset:5},r.a.createElement(k.a.Item,Object.assign({},B,{label:"Nome"}),r.a.createElement(s.a,{required:!0})))),r.a.createElement(c.a,null,r.a.createElement(d.a,{span:24,offset:5},r.a.createElement(k.a.Item,Object.assign({},B,{label:"Email"}),r.a.createElement(T.a,{mask:D.a,className:"ant-input"})))),r.a.createElement(c.a,null,r.a.createElement(d.a,{span:24,offset:5},r.a.createElement(k.a.Item,Object.assign({},B,{label:"Telefone"}),r.a.createElement(T.a,{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d?/],guide:!1,className:"ant-input",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(d.a,{span:24,offset:5},r.a.createElement(k.a.Item,F,r.a.createElement(P.a,{type:"primary",htmlType:"submit",style:{width:"70%"}},"Enviar")))))))},R=(t(169),t(54)),V=function(){return r.a.createElement(w,null,r.a.createElement(c.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(k.a,null,r.a.createElement(c.a,null,r.a.createElement(k.a.Item,null,r.a.createElement(s.a,{prefix:r.a.createElement(f.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Usu\xe1rio",required:!0}))),r.a.createElement(c.a,null,r.a.createElement(k.a.Item,null,r.a.createElement(s.a,{prefix:r.a.createElement(f.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Senha",required:!0}))),r.a.createElement(c.a,null,r.a.createElement(k.a.Item,null,r.a.createElement(d.a,{span:14},r.a.createElement(R.a,null,"Lembrar-me")),r.a.createElement(d.a,{span:8},r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Entrar")))))))},G=(t(362),t(191)),J=(t(414),t(143)),L=J.a.Column,$=function(){var e=Object(h.findProducts)();return r.a.createElement(w,{showSidebar:!0,sidebarCurrentKey:"home"},r.a.createElement(c.a,null,r.a.createElement(c.a,null,r.a.createElement(d.a,null,r.a.createElement(J.a,{dataSource:e,rowKey:"id"},r.a.createElement(L,{title:"Tipo",dataIndex:"tipoImovel",key:"tipoImovel"}),r.a.createElement(L,{title:"Valor",dataIndex:"aluguel",key:"aluguel"}),r.a.createElement(L,{title:"Endere\xe7o",dataIndex:"localizacao",key:"localizacao"}),r.a.createElement(L,{title:"A\xe7\xe3o",key:"action",render:function(){return r.a.createElement("span",null,r.a.createElement("a",null,"Editar"),r.a.createElement(G.a,{type:"vertical"}),r.a.createElement("a",null,"Deletar"))}}))))))},H=(t(411),t(89)),M=(t(171),t(57)),Q=M.a.Option,W=function(){return r.a.createElement(w,{showSidebar:!0,sidebarCurrentKey:"create"},r.a.createElement(c.a,{type:"flex",justify:"center",align:"top",gutter:16},r.a.createElement(k.a,{style:{textAlign:"left",width:360}},r.a.createElement(c.a,null,r.a.createElement(k.a.Item,{label:"Tipo de Im\xf3vel"},r.a.createElement(M.a,{defaultValue:"casa"},r.a.createElement(Q,{value:"casa"},"Casa"),r.a.createElement(Q,{value:"apartamento"},"Apartamento")))),r.a.createElement(c.a,{gutter:16},r.a.createElement(d.a,{span:12},r.a.createElement(k.a.Item,{label:"Valor (R$)"},r.a.createElement(H.a,{style:{textAlign:"left",width:"100%"},formatter:function(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,".")},parser:function(e){return e.replace(/[R]\$\s?|(\.*)/g,"")},required:!0}))),r.a.createElement(d.a,{span:12},r.a.createElement(k.a.Item,{label:"N\xfamero de Quartos"},r.a.createElement(H.a,{style:{textAlign:"left",width:"100%"},required:!0})))),r.a.createElement(c.a,{gutter:16},r.a.createElement(d.a,{span:12},r.a.createElement(k.a.Item,{label:"Tamanho (m\xb2)"},r.a.createElement(H.a,{style:{textAlign:"left",width:"100%"},required:!0}))),r.a.createElement(d.a,{span:12},r.a.createElement(k.a.Item,{label:"Garagem"},r.a.createElement(H.a,{style:{textAlign:"left",width:"100%"},required:!0})))),r.a.createElement(c.a,null,r.a.createElement(k.a.Item,{label:"Endere\xe7o"},r.a.createElement(s.a,null))),r.a.createElement(c.a,null,r.a.createElement(k.a.Item,{label:"Descri\xe7\xe3o"},r.a.createElement(s.a.TextArea,{rows:4,required:!0}))),r.a.createElement(c.a,null,r.a.createElement(d.a,{offset:5},r.a.createElement(P.a,{type:"primary",htmlType:"submit",style:{width:"80%"}},"Salvar"))))))};var U=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:z}),r.a.createElement(m.a,{path:"/imovel/:id",component:K}),r.a.createElement(m.a,{path:"/login",component:V}),r.a.createElement(m.a,{path:"/dashboard",component:$}),r.a.createElement(m.a,{path:"/novo",component:W})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,a,t){var l=t(260).imoveis;a.findProducts=function(){return l},a.findProduct=function(e){return l.filter((function(a){return a.id===parseInt(e)}))[0]}}},[[195,1,2]]]);
//# sourceMappingURL=main.f30aabe0.chunk.js.map
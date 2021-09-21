(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],v=0,d=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vueflix/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"1a18":function(e,t,i){"use strict";i("46c4")},"299f":function(e,t,i){},"3e14":function(e,t,i){"use strict";i("ce69")},"46c4":function(e,t,i){},"4fff":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=i("4af9"),a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bienvenue"},[i("h1",[e._v("Bienvenue dans votre application VueFlix !")]),i("p",[e._v("Sélectionnez une action dans la barre de navigation pour commencer")])])}],o={name:"Acceuil"},l=o,c=(i("1a18"),i("2877")),u=Object(c["a"])(l,a,s,!1,null,null,null),v=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Films","data-app":""}},[n("img",{staticClass:"mainLogo",attrs:{alt:"Vue logo",src:i("cf05")}}),n("H1",[e._v("Bienvenue sur Votre VueFlix !")]),n("label",{attrs:{for:"filtre"}},[e._v("filtrer par catégorie:")]),e.loading?n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?i:i[0]}}},[n("option",{attrs:{value:""}},[e._v("tous")]),e._l(e.options,(function(t){return n("option",{key:t.id,domProps:{value:t.name}},[e._v(" "+e._s(e._f("capitalize")(t.name))+" ")])}))],2):e._e(),n("p",[n("i",[e._v("Vous avez "+e._s(e.comptage)+" films")])]),e._l(e.filmsByGender,(function(e){return n("div",{key:e.id},[n("Movie",{staticClass:"Movie",attrs:{film:e,id:"Movie"+e.id}})],1)})),n("MovieCreation",{attrs:{categories:this.options}})],2)},f=[],m=i("5530"),p=(i("4de4"),i("caad"),i("2532"),i("d81d"),i("a434"),i("d3b7"),i("25f0"),new n["default"]),h=i("7338"),g=i.n(h),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"Movie"}},[i("h2",[e._v(e._s(e.film.title))]),i("p",[e._v(" genres : "),e._l(e.film.genres,(function(t){return i("span",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),i("p",[e._v(" note : "),i("v-rating",{attrs:{hover:"",length:"10",readonly:"",size:e.screenSize,value:e.film.rating}})],1),i("router-link",{staticClass:"detail",attrs:{to:{name:"detail",params:{id:e.film.id,film:e.film,screenSize:e.screenSize}}}},[i("v-btn",{staticClass:"detail",attrs:{elevation:"1","x-small":""}},[e._v("détails")])],1),i("v-btn",{staticClass:"suppr",attrs:{elevation:"1","x-small":""},on:{click:e.deleteMovie}},[e._v("supprimer")])],1)},_=[],y=i("b85c"),w=(i("b0c0"),i("0e07")),x={name:"Movie",mixins:[w["a"].VueScreenSizeMixin],data:function(){return{categories:[]}},methods:{deleteMovie:function(){p.$emit("deleteMovie",this.film.id)}},computed:{screenSize:function(){return this.$vssWidth>=540?20:this.$vssWidth<=420?8:10}},props:{film:{type:Object}},filters:{idToGenre:function(e){var t,i=Object(y["a"])(this.categories);try{for(i.s();!(t=i.n()).done;){var n=t.value;return e==n.id?e=n.name:e}}catch(r){i.e(r)}finally{i.f()}}}},k=x,M=Object(c["a"])(k,b,_,!1,null,null,null),O=M.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"MovieCreation"}},[i("h1",[e._v("Ajouter un film")]),i("form",{on:{submit:function(t){return t.preventDefault(),e.addFilm(t)}}},[i("v-toolbar",{attrs:{dark:"",color:"teal"}},[i("v-toolbar-title",[i("pre",[e._v("Titre  ")])]),i("v-combobox",{staticClass:"mx-4",attrs:{items:e.movieProposition,"search-input":e.search,flat:"","hide-no-data":"","hide-details":"",label:"quel est le titre du film ?","solo-inverted":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},model:{value:e.movie.title,callback:function(t){e.$set(e.movie,"title",t)},expression:"movie.title"}}),i("v-btn",{on:{click:e.autocomplete}},[e._v("ok")])],1),i("v-text-field",{attrs:{dark:"",label:"Genres",filled:"",placeholder:"Adventure, Thriller"},model:{value:e.movie.genres,callback:function(t){e.$set(e.movie,"genres",t)},expression:"movie.genres"}}),i("v-text-field",{attrs:{dark:"",label:"Review",filled:"",placeholder:"J'ai passé un super moment"},model:{value:e.movie.review,callback:function(t){e.$set(e.movie,"review",t)},expression:"movie.review"}}),i("v-text-field",{attrs:{dark:"",label:"Description",filled:"",placeholder:"Harry est un jeune sorcier qui vit..."},model:{value:e.movie.description,callback:function(t){e.$set(e.movie,"description",t)},expression:"movie.description"}}),i("v-rating",{attrs:{hover:"",length:"10",size:"25",value:"3"},model:{value:e.movie.rating,callback:function(t){e.$set(e.movie,"rating",t)},expression:"movie.rating"}}),i("p",{staticClass:"petitMessage"},[e._v(' Ou cliquez simplement sur "ok" après avoir saisi le nom du film pour vous laisser guider ')]),i("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[e._v("ajouter le film ")])],1)])},S=[],C=(i("ac1f"),i("841c"),i("a4d3"),i("e01a"),{name:"MovieCreation",props:["categories"],data:function(){return{pushcategorie:[],search:null,movie:{title:"",genres:"",rating:0,review:"",description:""},movies:[],movieProposition:[]}},watch:{search:function(e){this.movie.title=this.search,e&&e!==this.select&&this.getResult(e)}},methods:{autocomplete:function(){var e=this;this.movies.filter((function(t){if(t.title===e.movie.title){e.pushcategorie=[];var i,n=Object(y["a"])(t.genre_ids);try{for(n.s();!(i=n.n()).done;){var r,a=i.value,s=Object(y["a"])(e.categories);try{for(s.s();!(r=s.n()).done;){var o=r.value;a==o.id&&(a=o.name,e.pushcategorie.push(a))}}catch(l){s.e(l)}finally{s.f()}}}catch(l){n.e(l)}finally{n.f()}console.log(t.genre_ids),e.movie.genres=e.pushcategorie,e.movie.rating=t.vote_average,e.movie.review=t.overview,e.movie.description=t.overview}}))},addFilm:function(){p.$emit("createMovie",this.movie),this.movie.title="",this.movie.genres="",this.movie.rating=0,this.movie.review="",this.movie.description=""},getResult:function(e){var t=this;this.movieProposition=[],this.movies=[],g.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"80d0dd074cbffeb2db4b0123882c7f44",query:e}}).then((function(e){var i,n=Object(y["a"])(e.data.results);try{for(n.s();!(i=n.n()).done;){var r=i.value;t.movieProposition.push(r.title),t.movies.push(r)}}catch(a){n.e(a)}finally{n.f()}})).catch((function(){return console.log("raté")}))}}}),$=C,F=(i("bca3"),Object(c["a"])($,j,S,!1,null,null,null)),P=F.exports,z={name:"Films",components:{Movie:O,MovieCreation:P},data:function(){return{loading:!1,options:[],title:"Bienvenue sur VueFlix !",titre:"",categories:"",note:0,revue:"",desc:"",selected:"",films:[{id:1,title:"Parasite",genres:["Comedy","Drama","Thriller"],rating:9,review:"With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",description:"Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."},{id:2,title:"Tenet",genres:["Action","Science Fiction"],rating:7.6,review:"With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",description:"Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…"},{id:3,title:"Joker",genres:["Drama"],rating:8.8,review:"With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",description:"Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. "}]}},computed:{comptage:function(){return this.filmsByGender.length},filmsByGender:function(){var e=this;return""===this.selected?this.films:this.films.filter((function(t){return t.genres.includes(e.selected)}))}},methods:{addMovie:function(e){var t=this.films.length+1,i=parseFloat(e.rating);this.films.push(Object(m["a"])(Object(m["a"])({},e),{},{rating:i,id:t}))},deleteMovie:function(e){var t=this.films.map((function(e){return e.id})).indexOf(e);console.log(t),this.films.splice(t,1)}},filters:{capitalize:function(e){return e?(e=e.toString(),e.toUpperCase()):""}},watch:{films:function(){localStorage.setItem("films",JSON.stringify(this.films))}},created:function(){var e=this;if(p.$on("createMovie",this.addMovie),p.$on("deleteMovie",this.deleteMovie),g.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44").then((function(t){e.loading=!0,e.options=t.data.genres,console.log(t)})).catch((function(e){console.log(e)})),localStorage.getItem("films"))try{this.films=JSON.parse(localStorage.getItem("films"))}catch(t){localStorage.removeItem("films")}}},B=z,T=Object(c["a"])(B,d,f,!1,null,null,null),A=T.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app","data-app":""}},[i("div",{staticClass:"ma-12 pa-12"},[i("v-card",[i("v-navigation-drawer",{attrs:{permanent:"","expand-on-hover":""}},[i("v-list",[i("v-list-item",{attrs:{link:""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[e._v(" VueFlix ")]),i("v-list-item-subtitle",[e._v("Barre de navigation")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item",{attrs:{link:""}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-star")])],1),i("v-list-item-title",[i("router-link",{attrs:{to:"/Films"}},[e._v("Mes films")])],1)],1),i("v-list-item",{attrs:{link:""}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-star")])],1),i("v-list-item-title",[i("router-link",{attrs:{to:"/"}},[e._v("Page d'acceuil")])],1)],1)],1)],1)],1)],1),i("router-view")],1)},J=[],V={name:"App"},q=V,E=(i("5c0b"),Object(c["a"])(q,D,J,!1,null,null,null)),G=E.exports,I=i("ce5b"),R=i.n(I);i("bf40"),i("8b61"),i("d5e8"),i("5363");n["default"].use(R.a);var W=new R.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"MovieDetail"}},[i("div",{staticClass:"header"},[i("h2",[e._v(e._s(e.film.title))]),i("p",[e._v(" genres : "),e._l(e.film.genres,(function(t){return i("span",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),i("p",[e._v(" note : "),i("v-rating",{attrs:{hover:"",length:"10",readonly:"",size:e.screenSize,value:e.film.rating}})],1)]),i("div",{staticClass:"texte"},[i("div",{staticClass:"description"},[i("h2",[e._v("Description")]),i("p",[e._v(e._s(e.film.description))])]),i("div",{staticClass:"review"},[i("h2",[e._v("Review")]),i("p",[e._v(e._s(e.film.review))])])])])},N=[],K={name:"MovieDetail",data:function(){return{categories:[],id:0,film:null,screenSize:20}},filters:{idToGenre:function(e){var t,i=Object(y["a"])(this.categories);try{for(i.s();!(t=i.n()).done;){var n=t.value;return e==n.id?e=n.name:e}}catch(r){i.e(r)}finally{i.f()}}},created:function(){this.id=this.$route.params.id,this.film=this.$route.params.film,this.screenSize=this.$route.params.screenSize}},L=K,U=(i("3e14"),Object(c["a"])(L,H,N,!1,null,null,null)),Q=U.exports;n["default"].use(r["a"]),n["default"].config.productionTip=!1;var X=[{path:"/",component:v},{path:"/Films",component:A},{path:"/MovieDetail/:id",name:"detail",component:Q}],Y=new r["a"]({routes:X});new n["default"]({vuetify:W,router:Y,render:function(e){return e(G)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("4fff")},bca3:function(e,t,i){"use strict";i("299f")},ce69:function(e,t,i){},cf05:function(e,t,i){e.exports=i.p+"img/logo.b8ea3c31.png"}});
//# sourceMappingURL=app.88ab9ff7.js.map
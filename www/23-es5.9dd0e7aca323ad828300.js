(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{f2YF:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("mrSG"),o=e("r28Q"),i=e("ZZ/e"),r=e("Zr1d");class a{constructor(l,n,e,u,t,o,i){this.route=l,this.server=n,this.toastController=e,this.keyboard=u,this.nav=t,this.loadingController=o,this.events=i,this.phone="",this.txtbnt="Verificar",localStorage.getItem("confirmationResult")||this.nav.navigateForward("/home")}ngOnInit(){this.windowsRef=this.server.windowRef,this.windowsRef.recaptchaVerifier=localStorage.getItem("confirmationResult"),this.phone=localStorage.getItem("phone"),this.user_id=localStorage.getItem("user_id")}verfyCode(){return t.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"Validando..."});if(yield l.present(),this.Code&&this.Code.toString().length>=4&&this.Code.toString().length<=8){let n=this.Code.toString();this.windowsRef.confirmationResult.confirm(n).then(n=>{console.log("paso..."+n),this.server.SignPhone({phone:this.phone,user_id:this.user_id}).subscribe(n=>{n&&(l.dismiss(),this.presentToast("Registro completo...","success"),this.nav.navigateForward("/city"))})}).catch(l=>{this.presentToast("Algo ha ocurrido."+l,"danger")})}else l.dismiss(),this.presentToast("Porfavor Ingresa un Codigo valido!","danger")}))}presentToast(l,n){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l,duration:3e3,position:"top",mode:"ios",color:n})).present()}))}}class s{}var b=e("pMnS"),c=e("oBZk"),d=e("s7LF"),h=e("SVse"),g=e("iInd"),p=u.Bb({encapsulation:0,styles:[[""]],data:{}});function f(l){return u.Zb(0,[(l()(),u.Db(0,0,null,null,37,"ion-content",[],null,null,null,c.qb,c.o)),u.Cb(1,49152,null,0,i.y,[u.j,u.p,u.F],null,null),(l()(),u.Db(2,0,null,0,35,"div",[],null,null,null,null,null)),(l()(),u.Db(3,0,null,null,14,"ion-card-header",[],null,null,null,c.kb,c.j)),u.Cb(4,49152,null,0,i.s,[u.j,u.p,u.F],null,null),(l()(),u.Db(5,0,null,0,7,"ion-row",[],null,null,null,c.Pb,c.N)),u.Cb(6,49152,null,0,i.nb,[u.j,u.p,u.F],null,null),(l()(),u.Db(7,0,null,0,5,"ion-col",[],null,null,null,c.pb,c.n)),u.Cb(8,49152,null,0,i.x,[u.j,u.p,u.F],null,null),(l()(),u.Db(9,0,null,0,3,"h1",[["class","welcome_text"]],null,null,null,null,null)),(l()(),u.Xb(-1,null,[" Verifique su"])),(l()(),u.Db(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Xb(-1,null,[" bandeja de SMS "])),(l()(),u.Db(13,0,null,0,4,"p",[["style","color: rgb(85, 85, 85);font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 14px;"]],null,null,null,null,null)),(l()(),u.Xb(-1,null,[" Se ha enviado un codigo al Telefono "])),(l()(),u.Db(15,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Xb(16,null,["",""])),(l()(),u.Xb(-1,null,[" Verifica tu bandeja. "])),(l()(),u.Db(18,0,null,null,13,"ion-item",[],null,null,null,c.Db,c.y)),u.Cb(19,49152,null,0,i.L,[u.j,u.p,u.F],null,null),(l()(),u.Db(20,0,null,0,2,"ion-label",[["position","floating"],["style","font-family: 'SF Pro Display';font-weight: 400;font-style: normal;font-size: 12px"]],null,null,null,c.Eb,c.C)),u.Cb(21,49152,null,0,i.R,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Xb(-1,0,["Ingresa el codigo"])),(l()(),u.Db(23,0,null,0,8,"ion-input",[["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Pb(l,26)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Pb(l,26)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.Code=e)&&t),t}),c.zb,c.x)),u.Cb(24,16384,null,0,d.l,[],{required:[0,"required"]},null),u.Ub(1024,null,d.d,(function(l){return[l]}),[d.l]),u.Cb(26,16384,null,0,i.Pb,[u.p],null,null),u.Ub(1024,null,d.e,(function(l){return[l]}),[i.Pb]),u.Cb(28,671744,null,0,d.j,[[8,null],[6,d.d],[8,null],[6,d.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Ub(2048,null,d.f,null,[d.j]),u.Cb(30,16384,null,0,d.g,[[4,d.f]],null,null),u.Cb(31,49152,null,0,i.K,[u.j,u.p,u.F],{required:[0,"required"],type:[1,"type"]},null),(l()(),u.Db(32,0,null,null,5,"p",[["align","center"],["style","font-family: 'SF Pro Display';font-weight: 400;font-style: normal"]],null,null,null,null,null)),(l()(),u.Xb(-1,null,["No obtuviste el codigo? "])),(l()(),u.Db(34,0,null,null,3,"a",[["routerDirection","forward"],["routerLink","/home"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Pb(l,35).onClick(e)&&t),"click"===n&&(t=!1!==u.Pb(l,36).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t}),null,null)),u.Cb(35,737280,null,0,i.Tb,[h.h,i.Nb,u.p,g.m,[2,g.n]],{routerDirection:[0,"routerDirection"]},null),u.Cb(36,671744,null,0,g.o,[g.m,g.a,h.h],{routerLink:[0,"routerLink"]},null),(l()(),u.Xb(-1,null,["Reenviar"])),(l()(),u.Db(38,0,null,null,4,"ion-footer",[["style","text-align: center;"]],null,null,null,c.tb,c.r)),u.Cb(39,49152,null,0,i.D,[u.j,u.p,u.F],null,null),(l()(),u.Db(40,0,null,0,2,"ion-button",[["expand","block"],["style","font-family: 'SF Pro Display';font-weight: 500;font-size: 16px;"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.verfyCode()&&u),u}),c.hb,c.f)),u.Cb(41,49152,null,0,i.o,[u.j,u.p,u.F],{expand:[0,"expand"]},null),(l()(),u.Xb(42,0,["",""]))],(function(l,n){var e=n.component;l(n,21,0,"floating"),l(n,24,0,""),l(n,28,0,e.Code),l(n,31,0,"","number"),l(n,35,0,"forward"),l(n,36,0,"/home"),l(n,41,0,"block")}),(function(l,n){var e=n.component;l(n,16,0,e.phone),l(n,23,0,u.Pb(n,24).required?"":null,u.Pb(n,30).ngClassUntouched,u.Pb(n,30).ngClassTouched,u.Pb(n,30).ngClassPristine,u.Pb(n,30).ngClassDirty,u.Pb(n,30).ngClassValid,u.Pb(n,30).ngClassInvalid,u.Pb(n,30).ngClassPending),l(n,34,0,u.Pb(n,36).target,u.Pb(n,36).href),l(n,42,0,e.txtbnt)}))}var m=u.zb("app-verfycode",a,(function(l){return u.Zb(0,[(l()(),u.Db(0,0,null,null,1,"app-verfycode",[],null,null,null,f,p)),u.Cb(1,114688,null,0,a,[g.a,o.a,i.Wb,r.a,i.Nb,i.Kb,i.h],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);e.d(n,"VerfycodePageModuleNgFactory",(function(){return C}));var C=u.Ab(s,[],(function(l){return u.Mb([u.Nb(512,u.m,u.lb,[[8,[b.a,m]],[3,u.m],u.D]),u.Nb(4608,h.l,h.k,[u.z,[2,h.t]]),u.Nb(4608,d.n,d.n,[]),u.Nb(4608,i.c,i.c,[u.F,u.g]),u.Nb(4608,i.Mb,i.Mb,[i.c,u.m,u.w]),u.Nb(4608,i.Rb,i.Rb,[i.c,u.m,u.w]),u.Nb(1073742336,h.b,h.b,[]),u.Nb(1073742336,d.m,d.m,[]),u.Nb(1073742336,d.b,d.b,[]),u.Nb(1073742336,i.Ib,i.Ib,[]),u.Nb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),u.Nb(1073742336,s,s,[]),u.Nb(1024,g.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
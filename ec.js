;(function(root){
 'use strict';

 let doJs=(_code,caller)=>{
  let code=_code
  jsCode(_code,(d)=>{
   let error=(d.error.length===0)?false:true
   ,obj=d
   ,message=[d.log,d.error].reduce((a,b)=>a.concat(b),[]).join("\n")||""
   caller({message:message,error:error,obj:obj})   
  })
 }
 let doPug=(_code,caller)=>{
  let code=_code
  ;
  pug.render(code,{compileDebug:true},(err)=>{
   let error=(err)?true:false
   ,html=(err)?void 0:pug.render(code,{pretty:true})
   ,obj={html:html||''}
   ,message=err||''
   caller({message:message,error:error,obj:obj})
  })
 }


 let cssoption={
  "box-model":true
  ,"display-property-grouping":true
  , "duplicate-properties":true
  , "empty-rules":true
  , "known-properties":true
 }
 let doCss=(_code,caller)=>{
  let code=_code
  ,results = CSSLint.verify(code,cssoption)
  ,messages = results.messages
  ,one =messages[0]
  ;
  let error=true
  ,obj=results
  ,message=void 0
  if(messages.length===0){
   error=false;
   message="";
  }
  else{
   error=true;
   message=`"${one.evidence}"<--${one.message}`
  }
  caller({message:message,error:error,obj:obj})
  ;
 }  
//scss too heavy
 Sass.options({
  style: Sass.style.expanded,
  precision: -1,
  comments: true,
  indent: '  ',
  linefeed: '\n',
 },()=>{});
 let doScss=(_code,caller)=>{
  let code=_code
  ,onload=(results)=>{
   let messages = results.message
   ,error=true
   ,obj=results
   ,message=void 0
   if(!messages){
    error=false;
    message="";
   }
   else{
    error=true;
    message=results.formatted
   }
   caller({message:message,error:error,obj:obj})
   ;
  }
  Sass.compile(code,onload)
 }
//*/
 let o={}
 o.ec=(code,mode,caller)=>{
  if(!o[mode||''])return //console.warn('Dont accept mode',mode)
  if(!caller)return //console.warn('need caller',caller)  
  ;
  let def={code:code,mode:mode,error:true,message:void 0,obj:void 0}
  let me=o;
  o[mode](me,def,caller)
 }
 o.pug=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }
  doPug(d.code,onload)
 }
 o.js=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message   
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }
  doJs(d.code,onload)
 }
 o.css=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message   
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }
  doCss(d.code,onload)
 }
 ///*
 o.scss=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message   
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }  
  doScss(d.code,onload)
 }
//*/
 root.errorConsole = o;
 root.ec=o.ec;
})(this);

/*
let css='body{width:3rem}'
ec(css,'css',(d)=>{
 console.log(d)
})

let pugt='head \n script(src="https://gnjo.github.io/use.js")\n a. r '
ec(pugt,'pug',(d)=>{
 console.log(d)
})

let jsc="console.log(1);function y(){console.log(2)};y()"
ec(jsc,'js',(d)=>{
 console.log(d)
})

let scss='$someVar: 123px; .some-selector { width: $someVar; }';
ec(scss,'scss',(d)=>{
 console.log(d)
})
*/

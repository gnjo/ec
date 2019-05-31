# ec
error console


# need scripts
```
 script(src="https://gnjo.github.io/ec/csslint.js")
 script(src="https://gnjo.github.io/ec/pug.js")
 script(src="https://gnjo.github.io/ec/jsCode.js")
 script(src="https://gnjo.github.io/ec/sass.sync.js") 
 
 script(src="https://gnjo.github.io/ec/ec.js") 
```

# dev
https://codepen.io/gnjo/pen/XwmmOR?editors=1010



ec(code,mode,caller)

```mode```=> ```scss,css,pug,js```

stand alone compiler
https://codepen.io/gnjo/pen/joqpNz

```js
/*usage*/
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
```
# apply codeable + ec
```pug
//pug
head
 script(src="https://gnjo.github.io/ec/csslint.js")
 script(src="https://gnjo.github.io/ec/pug.js")
 script(src="https://gnjo.github.io/ec/jsCode.js")
 script(src="https://gnjo.github.io/ec/sass.sync.js") 
 
 script(src="https://gnjo.github.io/ec/ec.js") 

 script(src="https://gnjo.github.io/use.js")
 script(src="https://gnjo.github.io/codeable/codemirror.pack.js")
 script(src="https://gnjo.github.io/codeable/codeable.js")
 link(href="https://gnjo.github.io/codeable/codemirror.pack.css" rel="stylesheet")
body
 .frame
  .con
  .edwrap
   .ed
```
```js
let getmode=(mode)=>{
 if(/^javascript|^js/.test(mode))return 'js'
 if(/^pug/.test(mode))return 'pug'
 if(/^text\/x-scss/.test(mode))return 'scss'
 if(/^css/.test(mode))return 'css'
 return void 0;
}
let getmessage=(d)=>{
  let m=(d.error)?d.message:JSON.stringify(d,null,'  ')
  if((!d.error)&&d.mode==='pug') m=d.obj.html.trim()
  if((!d.error)&&d.mode==='js') m=d.message
  if((!d.error)&&d.mode==='scss') m=d.obj.text
  if((!d.error)&&d.mode==='css') m=d.code
  return m; 
}

codeable('.ed',(el,obj)=>{
 let mode=getmode(el.dataset.mode)
 ,code=el.dataset.text
 ,caller=(d)=>{ 
  //console.log(d)
  fn.q('.con').textContent=getmessage(d)
 }
 if(mode) ec(code,mode,caller)
})

```

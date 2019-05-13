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

scss is delete it. too heavy

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


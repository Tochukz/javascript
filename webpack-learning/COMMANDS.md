### Commands  
##### Here are the commands ran during the course of this work.  
###### Initilize a package.json file using default parameters  
`$ npm init -y`  
###### Install webpack locally  
`$ npm install webpack --save-dev`  
###### Install CSS loader  
`$ npm install css-loader --save-dev` 
CSS loader will help webpack compile CSS code  
###### Install Style loader  
`$ npm install style-loader --save-dev`  
Style loader will embed this css using a style tag in the head section of the HTML.  
###### Install babel loader and babel core  
`$ npm install --save-dev babel-loader @babel/core  
###### Install env preset babel plugin  
`$ npm install @babel/preset-env --save-dev`  
The env present plugin enables transformations for ES2015+  
Remember to create you .babelrc  configuration file in your root directory and add the preset :  
`
 {  
   "presets": ["@babel/preset-env"]
 }
 `  
 ##### Install sass-loader and node-sass compiler  
 `$ npm install sass-loader node-sass --save-dev`  
 sass-loader takes care of the webpack process and node-sass is the sass compile to transform SCSSs code to CSS.  

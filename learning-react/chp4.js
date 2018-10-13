/*Chapter 4: Pure React */

var dish = React.createElement('h1', null, 'Rice');
 ReactDOM.render(dish, document.getElementById('react-container'));

 var elem = React.createElement('section', null,
                        React.createElement('h1', {style:{color:"red"}}, 'Trying out React'),
                        React.createElement('ul', null, 
                            React.createElement('li', null, 'PHP'),
                            React.createElement('li', null, 'C#'),
                            React.createElement('li', null, 'Xamarin'),
                            React.createElement('li', null, 
                                React.createElement('strong', {title:'react.js'}, 'React.js')
                            )
                        )
                 );
ReactDOM.render(elem, document.getElementById('react-containerA'));

let tools = ['PHP', 'C#', 'Laravel', 'React', 'ASP.NET', 'Xamarin'];
var myTools = React.createElement('ul', null, 
                  tools.map((tool, i) => React.createElement('li', {key:i}, tool))
              );
ReactDOM.render(myTools, document.getElementById('react-containerB'));

/*:::::::::::Creatng react components::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

/* Method 1: Using React.createClass() ::::::::::::::::*/
var ulComp = React.createClass({
    displayName:'myTools',
    render(){
        return React.createElement('ul', {className:'list-class'},
                       React.createElement('li', null, 'PHP'),
                       React.createElement('li', null, 'C#'),
                       React.createElement('li', null, 'Laravel'),
                       React.createElement('li', null, 'ASP.NET')
               );
    }
});
var ulCompElem = React.createElement(ulComp, null, null);
ReactDOM.render(ulCompElem, document.getElementById('react-container1'));

var ulComp2 = React.createClass({
        displayName: 'myTools2',
        render(){
            return React.createElement('ul', {className:'ul-style'}, 
                this.props.myTools2.map( (tool, i) => React.createElement('li', {key:i}, tool))
            )
        }
});
var myTools2 = ['PHP', 'JavaScript', 'MySQL'];
var ulComp2Elem = React.createElement(ulComp2, {myTools2}, null);
ReactDOM.render(ulComp2Elem, document.getElementById('react-container2'));

var ulComp3 = React.createClass({
    displayName:'ulComp3',
    renderTool(tool, i){
        return React.createElement('li', {key:i}, tool);
    },
    render(){
        return React.createElement('ul', {className:'mystyle3'}, 
                  this.props.myTools3.map(this.renderTool)
               );    
    }
});
var myTools3 = [...myTools2, 'Laravel'];
var ulCompElem3 = React.createElement(ulComp3, {myTools3}, null);
ReactDOM.render(ulCompElem3, document.getElementById('react-container3'));

/*Method 2: Using React.Component :::::::::::::::::::::::::::::::::::*/

class MyToolsComp extends React.Component
{
    renderTool(tool, i){
        return React.createElement('li', {key:i}, tool);
    }
    render(){
        return React.createElement('ul', {className:'mytools'},
                    this.props.myTools4.map(this.renderTool)
        )
    }

}

var myTools4 = [...myTools3, 'BootStrap'];
var myToolsElem4 = React.createElement(MyToolsComp, {myTools4}, null);
ReactDOM.render(myToolsElem4, document.getElementById('react-container4'));

/* Nethod 3: Stateless functional concept :::::::::::::::::::::::::::::*/

const myTools5Comp = props => React.createElement('ul', {className: 'mytools-5'},
                              props.myTools5.map((tool, i) => React.createElement('li', {key:i}, tool))
                       );
var myTools5 = [...myTools4, 'C#', 'ASP.NET'];
var myTool5Elem = React.createElement(myTools5Comp, {myTools5}, null);
ReactDOM.render(myTool5Elem, document.getElementById('react-container5'));

//destructuring the property argument
const myToolsComp6 = ({myTools6}) => React.createElement('ul', {className:'my-tools-6'},
                          myTools6.map((tool, i) => React.createElement('li', {key:i}, tool))                
                  );
var myTools6 = [...myTools5, 'REACT.js'];
var myTool6Elem = React.createElement(myToolsComp6, {myTools6}, null);
ReactDOM.render(myTool6Elem, document.getElementById('react-container6'));

/*:::::::::::::Factories:::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
let h4Elem = React.DOM.h4({style:{color:'green'}}, 'Trying out react facctory');
ReactDOM.render(h4Elem, document.getElementById('react-container7'));

let ulElem = React.DOM.ul({className:'ul-fact'}, 
                         React.DOM.li(null, 'Xamarin'),
                         React.DOM.li(null, 'ReactNative'),
                         React.DOM.li(null, 'Flutter')
             );
ReactDOM.render(ulElem, document.getElementById('react-container8'));

var mobileTools = ['Xamarin', 'ReactNative', 'Flutter'];
let ulElem2 = React.DOM.ul({className:'ul-elme2'}, 
                   mobileTools.map((tool, i) => React.DOM.li({key:i}, tool))
);
ReactDOM.render(ulElem2, document.getElementById('react-container9'));

/*:::::::::Using Factory With Component :::::::::::::::::::::::*/

var factComp = React.createClass({
    render(){
        return React.DOM.ul({className:'fact-ul'}, 
             this.props.myTools7.map((tool, i) => React.DOM.li({key:i}, tool))
        );
    }
});
var myTools7 = [...myTools6, 'AWS'];
var factCompElem = React.createElement(factComp, {myTools7}, null);
ReactDOM.render(factCompElem, document.getElementById('react-container10'));

/*If you would like to simplify your code by calling components as functions, you need
to explicitly create a factory*/

var {render} = ReactDOM;
var factComp2 = ({myTools8}) => React.createElement('ul', {className:'explicit'}, 
                        myTools8.map((tool, i) => React.createElement('li', {key:i}, tool))
                );
var factTools = React.createFactory(factComp2);
let myTools8 = [...myTools7, 'SQL Server'];
render(factTools({myTools8}), document.getElementById('react-container11'));





import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import data from './data/recipes';

window.React = React;

/*Validating properties */
class Summary extends React.Component{
    static propTypes = {
        title:PropTypes.string,
        ingredients:PropTypes.array,
        steps:PropTypes.array
    };    
    render(){             
       const {title, ingredients, steps} = this.props;
       return (                
                <div className="summmary">
                    <h1>{title}</h1>
                    <p>
                        <span> {ingredients.length} Ingredients </span> |
                        <span> {steps.length} Steps</span>
                    </p>
                </div>
            )
    }
};
//ReactDOM.render(<Summary title={data[0].name} ingredients={data[0].ingredients} steps={data[0].steps} />,  document.getElementById('summary-container'));
ReactDOM.render(<Summary title="recipe" ingredients="string value instead of array" steps="string steps instaed of arrau" />, document.getElementById('summary-container'));                                            

/* Validating properties and setting default values */
class Summary2 extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
    };
    static defaultProps = {
        title:'summay 2'
    }
    render(){
        const {title, ingredients, steps} = this.props;
        return (
                <div>
                    <h1>{title}</h1>
                    <p>
                        <span>{ingredients} Ingredients</span> |
                        <span>{steps} Steps</span>
                    </p>
                </div>
        );
    }
}
ReactDOM.render(<Summary2 />, document.getElementById('summary2-container'));


/*Validating properties and setting default values */
var Summary3  = ({title='unknown', ingredients=0, steps=0}) => {
        return  <div>
                    <h1>{title}</h1>
                    <p>               
                        <span>{ingredients} Ingrdients</span> |
                        <span>{steps} Steps</span>
                    </p>        
                </div> 
}
Summary3.propTypes = {    
    ingredients: PropTypes.array,
    steps: PropTypes.array,
    title: (props, propName) => (typeof props[propName] !== 'string')? new Error('title must be a string') : 
                                                                       (props[propName].length < 5)? new Error('title must be more than 5 charaters') : null
}
ReactDOM.render(<Summary3 title={'chi'} />, document.getElementById('summary3-container'));

/*Using References and inverse data flow*/
class AddColorForm extends React.Component{
    static propTypes ={
        onNewColor: PropTypes.func
    };
    static defaultProps = {
        onNewColor: f=>f
    };
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        const {_title, _color } = this.refs;
        //alert(`Title: ${_title.value}, Color: ${_color.value}`);
        if(this.props.oNewColor){
            this.props.onNewColor(_title.value, _color.value);
        }        
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
    render(){
        return (
            <form onSubmit={this.submit}>
                <input type="text" ref="_title" placeholder="Enter color title " required />
                <input type="color" ref="_color" required />
                <button>Add</button>
            </form>
        ) 
    }
}
/*Inverse data flow */
const logColor = (_title, _color) => console.log(`Title: ${_title}, Color: ${_color}`);
ReactDOM.render(<AddColorForm onNewColor={logColor} />, document.getElementById('add-color-form'));


/*Reference in stateless functional components: */
const AddColorForm2 = ({onNewColor = f=>f}) => {
    let _title, _color;
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };
    return (
        <form onSubmit={submit}>
            <input type="text" ref={input => _title = input} placeholder="Add color" required />
            <input type="color" ref={input => _color = input} required />
            <button>Add</button>
        </form>
    );
}
AddColorForm2.propTypes = {
    onNewColor: PropTypes.func
}
ReactDOM.render(<AddColorForm2 />, document.getElementById('add-color-form2'));

/*Component State */
const Star = ({selected = false, onClick = f=>f}) => 
         <div className={(selected)? 'star select': 'star'} onClick={onClick}></div>
Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

class StarRating extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            starsSelected: props.starsSelected || 0
        };
        this.change = this.change.bind(this);
    }    
    change(starsSelected){
        this.setState({starsSelected})
    }
    render(){
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return(
            <div className="star-rating">
                {[...Array(totalStars)].map((elem, i) => 
                    <Star key={i} selected={i<starsSelected} onClick={() => this.change(i+1)} />    
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }

}
StarRating.propTypes = {
    totalStars:PropTypes.number
}
StarRating.defaultProperty = {
    starsSelected: 7
}
ReactDOM.render(<StarRating totalStars={5} />, document.getElementById('star-rating'));
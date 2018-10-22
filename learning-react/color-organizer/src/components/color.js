import React  from 'react';
import PropTypes from 'prop-types';
import StarRating from './star-rating';

// const Color  = ({title, color, rating = 0, onRemove = r => r, onRate = t => t}) =>     
//     <section className="color">
//         <button onClick={onRemove}>x</button>
//         <h1>{title}</h1>
//         <div className="color" style={{backgroundColor: color}}></div>
//         <div>
//             <StarRating starsSelected={rating} onRate={onRate}/>
//         </div>
//     </section>

// Color.propTypes = {
//     title: PropTypes.string,
//     color: PropTypes.string.isRequired,
//     rating: PropTypes.number
// }

/*Using mounting and updating lifecylce methods */
class Color extends React.Component
{
    constructor(props){
        super(props);       
    }
    componentWillMount(){
        this.style = {backgroundColor: '#ccc'};
    }
    shouldComponentUpdate(nextProps){
        const {rating} = this.props; //Old properties
        return rating !== nextProps.rating; //New proprties
    }
    componentWillUpdate(nextProps){
        const {title, rating} = this.props;
        this.style = null;               
        this.refs.title.style.backgroundColor = '#f00';
        this.refs.title.style.color = '#fff';        
        alert(`${title}: ${rating} -> ${nextProps.rating}`);
    }    
    componentDidUpdate(prevProps){
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating)? 'better' : 'worse';        
        console.log(`${title} is getting ${status}`);
        this.refs.title.style.backgroundColor = '#fff';
        this.refs.title.style.color = '#000';
    }
    render(){
        const {title, color, rating, onRemove, onRate} = this.props;
        return (
            <section className="color" style={this.style}>
                <button onClick={onRemove}>x</button>
                <h3 ref="title">{title}</h3>
                <div className="color" style={{backgroundColor:color}}></div>
                <div>
                    <StarRating starsSelected={rating}  onRate={onRate} />
                </div>                
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
}
Color.defaultProp = {
    title: 'untitled',
    color:'#000',
    rating:0,
    onRemove: f => f,
    onRate: f => f
}
export default Color;
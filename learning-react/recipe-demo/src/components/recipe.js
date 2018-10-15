import IngredentList from './ingredientList';
import Instructions from './instructions';

const Recipe = ({name, ingredients, steps}) => 
    <section id={name.toLowerCase().replace(/ /g, '-')}> 
        <h1>{name}</h1>
        <IngredentList  list={ingredients} />
        <Instructions title="Coohing Instructions" steps={steps} />
    </section>


export default Recipe;
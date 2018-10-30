import React from 'react';

const ColorForm = ({onAddColor = f=>f}) => {
    let colorName, colorValue;
    const submit = e => {
        e.preventDefault();
        onAddColor(colorName.value, colorValue.value);
        colorName.value = '';
        colorValue.value = '#000';
        colorName.focus();
    }; 
    return (
        <form onSubmit={submit}>
            <input type="text" ref={input => colorName = input}  required placeholder="Enter color name" /> &nbsp;
            <input type="color" ref={input => colorValue = input} required /> &nbsp;
            <button>Add Color</button>
        </form>
    )
}
export default ColorForm;

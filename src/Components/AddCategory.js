import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('hola');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.setCategories( list => [inputValue, ...list]);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory

import React, { useState } from 'react';
import Error from './Error';

const Form = ({setState}) => {

    const [keyWord, setKeyWord] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if (keyWord.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        setState({searching:keyWord});


    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='E.g Coffee'
                        onBlur={e => setKeyWord(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type='submit'
                        className='btn btn-lg btn-success btn-block'
                        value='search'
                    />
                </div>
            </div>

            {error ? <Error message='Please tell us what you are looking for :)'/> : null}
        </form>
     );
}
 
export default Form;
// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    const handleChanges = updatedValues => {
      setValues(updatedValues);
    }

    return [values, setValues, handleChanges];

}

export default useForm;

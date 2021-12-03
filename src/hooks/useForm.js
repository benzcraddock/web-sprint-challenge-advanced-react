// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    return [values, setValues, showSuccessMessage, setShowSuccessMessage];
}

export default useForm;

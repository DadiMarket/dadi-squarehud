import { useState, useEffect } from 'react';


function useLocalStorage(key, initialValue) {
    // Estado local para almacenar el valor
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Intenta obtener el valor del localStorage por la clave proporcionada
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error getting value from localStorage for key '${key}':`, error);
            return initialValue;
        }
    });

    // Función para actualizar el valor almacenado en el localStorage
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setStoredValue(valueToStore);
        } catch (error) {
            console.error(`Error setting value in localStorage for key '${key}':`, error);
        }
    };

    useEffect(() => {
        setStoredValue((prevStoredValue) => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : prevStoredValue;
            } catch (error) {
                console.error(`Error getting value from localStorage for key '${key}':`, error);
                return prevStoredValue;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]); // Solo ejecuta el efecto cuando la clave cambia

    return [storedValue, setValue];
}


export default useLocalStorage;
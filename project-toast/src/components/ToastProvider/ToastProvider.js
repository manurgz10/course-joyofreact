import React from 'react';
import { useKeydown } from '../../hooks/use-keydown';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const handleEscape = React.useCallback(() => {
        setToasts([]);
    }, []);

    useKeydown('Escape', handleEscape);

    function createToast(message, variant) {
        const newToast = {
            id: crypto.randomUUID(),
            message,
            variant,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    }

    function removeToast(id) {
        const nextToasts = toasts.filter((toast) => {
            return toast.id !== id;
        });
        setToasts(nextToasts);
    }

    function clearToasts() {
        setToasts([]);
    }

    return (
        <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
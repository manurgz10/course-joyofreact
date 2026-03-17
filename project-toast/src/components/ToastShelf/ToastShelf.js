import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';
function ToastShelf() {
    const ctx = React.useContext(ToastContext);
    return (
        <ol className={styles.wrapper}>
            {ctx.toasts?.map((toast) => (
                <li key={toast.id} className={styles.toastWrapper}>
                    <Toast id={toast.id} message={toast.message} variant={toast.variant} />
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;

import { useState, useEffect } from 'react';

export function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Verifica se há dados de usuário no sessionStorage quando o componente monta
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return { user, login, logout };
}
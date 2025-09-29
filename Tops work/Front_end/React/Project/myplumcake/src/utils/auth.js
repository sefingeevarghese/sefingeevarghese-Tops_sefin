// Authentication utility functions

export const isAuthenticated = () => {
    return localStorage.getItem('u_id') !== null;
};

export const isAdmin = () => {
    return localStorage.getItem('isAdmin') === 'true';
};

export const getCurrentUser = () => {
    if (!isAuthenticated()) return null;
    
    return {
        id: localStorage.getItem('u_id'),
        name: localStorage.getItem('u_name'),
        email: localStorage.getItem('u_email'),
        mobile: localStorage.getItem('u_mobile'),
        isAdmin: isAdmin()
    };
};

export const logout = () => {
    localStorage.removeItem('u_id');
    localStorage.removeItem('u_name');
    localStorage.removeItem('u_email');
    localStorage.removeItem('u_mobile');
    localStorage.removeItem('isAdmin');
};

export const requireAuth = (Component) => {
    return (props) => {
        if (!isAuthenticated()) {
            // Redirect to login if not authenticated
            window.location.href = '/login';
            return null;
        }
        return <Component {...props} />;
    };
};

export const requireAdmin = (Component) => {
    return (props) => {
        if (!isAuthenticated()) {
            window.location.href = '/login';
            return null;
        }
        
        if (!isAdmin()) {
            // Redirect to home if not admin
            window.location.href = '/';
            return null;
        }
        
        return <Component {...props} />;
    };
};

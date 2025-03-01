import React, { useState, useEffect } from 'react';
import Loader from './components/loader';
import LoginForm from './components/Login_v3/LoginForm.tsx';
import NavBar from './components/MainMenu/NavBar.tsx'
import '../src/files/bower_components/bootstrap/css/bootstrap.min.css';
import './files/assets/icon/font-awesome/css/font-awesome.min.css';
import './files/assets/icon/icofont/css/icofont.css';
import './files/assets/icon/themify-icons/themify-icons.css';
import './files/assets/pages/waves/css/waves.min.css';
import './files/assets/css/style.css';
const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Temizlik için geri çağırma fonksiyonu
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return<>
        <NavBar/>
        <LoginForm/>
    </>
};

export default App;

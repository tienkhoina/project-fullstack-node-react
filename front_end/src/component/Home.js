import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const Home = () => {
    return (
        <div className="Dangnhapdangky"> 
            <Link to="/signin">
                <button>Đăng nhập</button>
            </Link>
            <Link to="/signup">
                <button>Đăng kí</button>
            </Link>
        </div>
    );
};

export default Home;

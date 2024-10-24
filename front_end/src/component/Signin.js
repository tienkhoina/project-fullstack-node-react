import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate thay vì useHistory

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient'); // Mặc định là bệnh nhân
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gửi dữ liệu đến server (bạn cần thay đổi URL theo đúng API của bạn)
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Thực hiện điều hướng sau khi đăng nhập thành công
            navigate('/'); // Điều hướng về trang chính
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Đăng nhập thất bại!');
        });
    };

    return (
        <div className="login-container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Tài khoản"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                <div>
                    <input
                        type="radio"
                        id="doctor"
                        name="role"
                        value="doctor"
                        checked={role === 'doctor'}
                        onChange={() => setRole('doctor')}
                        required
                    />
                    <label htmlFor="doctor">Bác sĩ</label>
                    <input
                        type="radio"
                        id="patient"
                        name="role"
                        value="patient"
                        checked={role === 'patient'}
                        onChange={() => setRole('patient')}
                        required
                    />
                    <label htmlFor="patient">Bệnh nhân</label>
                </div>
                <input type="submit" value="Đăng nhập" />
            </form>

            {/* CSS Styles */}
            <style>
                {`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .login-container {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    width: 300px;
                    text-align: center;
                }
                .login-container h2 {
                    margin-bottom: 20px;
                }
                .login-container input[type="text"],
                .login-container input[type="password"] {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .login-container input[type="radio"] {
                    margin-right: 5px;
                }
                .login-container label {
                    margin-right: 10px;
                }
                .login-container input[type="submit"] {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    width: 100%;
                }
                .login-container input[type="submit"]:hover {
                    background-color: #45a049;
                }
                `}
            </style>
        </div>
    );
};

export default Signin;

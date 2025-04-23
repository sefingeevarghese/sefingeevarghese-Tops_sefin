import React from 'react'

import './mystyle1.css';
import './mystyle2.css';

function React_css() {
    const inlineBoxStyle = {
        width: '150px',
        height: '150px',
        backgroundColor: '#FF9800',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        margin: '20px',
        borderRadius: '20px',
        animation: 'bounce 2s infinite'
    }

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            padding: '20px'
        }}>
            <style>
                {`
                    @keyframes bounce {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                    }
                `}
            </style>

            <h1 style={{ 
                color: '#333', 
                textAlign: 'center',
                marginBottom: '30px'
            }}>
                Animation Demo
            </h1>

            {/* Pulsing Box */}
            <div className='animated-box'>
                Pulsing Box
            </div>

            {/* Rotating Box */}
            <div className='animated-box-2'>
                Rotating Box
            </div>

            {/* Bouncing Box */}
            <div style={inlineBoxStyle}>
                Bouncing Box
            </div>
        </div>
    )
}

export default React_css
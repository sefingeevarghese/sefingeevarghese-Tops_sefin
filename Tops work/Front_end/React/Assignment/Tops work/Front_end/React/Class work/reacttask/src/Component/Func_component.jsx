import React from 'react'

const Func_component = () => {
    return (
        <div>
            <style>
                {`                    
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                        background-color: #f0f0f0;
                    }
                    .container {
                        max-width: 400px;
                        margin: 0 auto;
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #333;
                        text-align: center;
                    }
                    .input-group {
                        margin-bottom: 15px;
                    }
                    input {
                        width: 100%;
                        padding: 8px;
                        margin-top: 5px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    }
                    button {
                        width: 100%;
                        padding: 10px;
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #45a049;
                    }
                    #result {
                        margin-top: 20px;
                        padding: 10px;
                        background-color: #f9f9f9;
                        border-radius: 4px;
                        text-align: center;
                        font-size: 18px;
                    }
                `}
            </style>

            <div className="container">
                <h1>Prime Number Checker</h1>
                <div className="input-group">
                    <label>Enter a number:</label>
                    <input 
                        type="number" 
                        id="numberInput"
                        placeholder="Enter a number to check"
                        min="2"
                    />
                </div>
                <button 
                    onClick={() => {
                        const input = document.getElementById('numberInput').value;
                        const result = document.getElementById('result');
                        const num = parseInt(input);
                        
                        if (isNaN(num) || num < 2) {
                            result.textContent = 'Please enter a valid number greater than 1';
                            result.style.color = 'red';
                            return;
                        }

                        let isPrime = true;
                        
                        // Check if number is prime
                        for (let i = 2; i <= Math.sqrt(num); i++) {
                            if (num % i === 0) {
                                isPrime = false;
                                break;
                            }
                        }

                        if (isPrime) {
                            result.textContent = `${num} is a prime number`;
                            result.style.color = 'green';
                        } else {
                            result.textContent = `${num} is not a prime number`;
                            result.style.color = 'red';
                        }
                    }}
                >
                    Check Prime
                </button>
                <div id="result"></div>
            </div>
        </div>
    )
}

export default Func_component 
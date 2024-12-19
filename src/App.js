import React from 'react';

function App() {
    const callApi = async () => {
        try {
            const response = await fetch('https://localhost:44383/api/HelloWorld');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const message = await response.text();
            alert(message);
        } catch (error) {
            console.error('Failed to fetch:', error);
            alert('Failed to fetch data from the API');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={callApi}>Call API</button>
            </header>
        </div>
    );
}

export default App;
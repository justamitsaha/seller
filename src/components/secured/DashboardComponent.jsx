import React, { useState, useEffect } from 'react';

const DashboardComponent = () => {
    const [lauru, setLauru] = useState('');
    useEffect(() => {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setLauru('Lauru');
                }
            )
    }, [])

    return (
        <h1>Hello {lauru}</h1>
    );
}

export default DashboardComponent;
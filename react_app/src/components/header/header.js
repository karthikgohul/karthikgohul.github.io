import React from 'react';
import header from './header.css';

class App extends React.Component{
    render(){
        return (
            <div className="header">
                <div className='container'>
                    <ul>
                        <li>Resume</li>
                        <li>Acheivements</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
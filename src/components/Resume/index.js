import React from 'react';

function Resume() {
    return (
        <header className="section-header" >
            <h2 className="section-h2">Click the button to see my resume!</h2>
            <p>
                This link will give you access to my resume and provide you with a snapchost of my work history, proficiencies, and education!
            </p>
            <form action="https://docs.google.com/document/d/1A_GH68zxbWGciIBp--g8pi9mwNPx_LtuXG-54iallSo/edit?usp=sharing">
         <button className="button" type="submit">See Resume</button>
      </form>
        </header>
    );
}

export default Resume;
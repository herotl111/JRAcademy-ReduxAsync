import React from 'react'

const WelcomeList = (props) => {
    return (
        props.welcomeList.map((element) => {
            return <p key={element.id}>{`My name is ${element.author}, ${element.content}`}</p>;
        })
    );
}

export default WelcomeList;
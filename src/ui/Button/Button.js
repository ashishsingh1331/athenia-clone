import React from 'react';
import {Link} from 'react-router-dom';

function Button(props) {
    let  classes = props.classes ? props.classes:[];

    switch (props.variant) {
        case 'secondary':
            classes = classes.concat(['text-white', 'duration-150', 'ease','text-sm','transition-bg','uppercase','tracking-widest', 'bg-dark-gray','font-semibold','py-3','lg:py-5','px-4','lg:px-5','rounded-none','focus:outline-none','focus-visible:ring-2','focus-visible:ring-white','focus-visible:ring-offset-2','focus-visible:ring-offset-gray-900','hover:bg-white','hover:text-dark-gray']);
            break;
    
        default:
            classes = classes.concat(['text-white', 'duration-150', 'ease','text-sm','border-2','transition-bg','border-solid','border-white','uppercase','tracking-widest', 'bg-transparent','font-semibold','py-3','lg:py-5','px-4','lg:px-5','rounded-none','focus:outline-none','focus-visible:ring-2','focus-visible:ring-white','focus-visible:ring-offset-2','focus-visible:ring-offset-gray-900','hover:bg-gray-700','hover:border-transparent']);
            break;
    }
    // For simple button
    if(props.norouter){
        return (
            <a onClick={props.onClick} className={classes.join(' ')}>{props.text}</a>
        )
    }


    return (
        <Link className={classes.join(' ')} to={props.to || '/'}>{props.text} </Link>
    );
}

export default Button;
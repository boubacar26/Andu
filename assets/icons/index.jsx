import React from 'react'
import ArrowLeft from "./ArrowLeft";

const icons = {
    arrowLeft: ArrowLeft,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
    return (
      <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWirth={props.strokeWirth || 1.9}
        color='#000'
        {...props}
      />
    );
}

export default Icon;
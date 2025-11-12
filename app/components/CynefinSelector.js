const CynefinSelector = ({handleClick, disabled = false, highlightDomain, ...others}) => {
    const handlePathClick = (domain) => {
        if (!disabled && handleClick) {
            handleClick(domain);
        }
    };

    const getFillClass = (domain) => {
        if (highlightDomain && highlightDomain === domain) {
            // Clases explícitas para que Tailwind las detecte
            if (domain === 'simple') return 'fill-ldc-simple';
            if (domain === 'complicado') return 'fill-ldc-complicado';
            if (domain === 'complejo') return 'fill-ldc-complejo';
            if (domain === 'caotico') return 'fill-ldc-caotico';
        }
        return 'fill-white';
    };

    const getHoverClass = (domain) => {
        if (!highlightDomain && !disabled) {
            // Clases explícitas para que Tailwind las detecte
            if (domain === 'simple') return 'hover:fill-ldc-simple ';
            if (domain === 'complicado') return 'hover:fill-ldc-complicado';
            if (domain === 'complejo') return 'hover:fill-ldc-complejo';
            if (domain === 'caotico') return 'hover:fill-ldc-caotico';
        }
        return '';
    };

    return (
    <svg width="305" height="306" viewBox="0 0 305 306" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            onClick={() => handlePathClick('complejo')} 
            className={`${getFillClass('complejo')} ${getHoverClass('complejo')} transition-colors duration-300 cursor-pointer ${disabled ? 'opacity-50' : ''}`}
            d="M26.4506 150.353C26.4651 146.744 26.6324 143.125 26.963 139.505C29.7944 108.505 44.1109 79.682 67.1017 58.6951C89.7858 37.9884 119.298 26.3866 149.982 26.0805L149.982 92.2509C135.806 92.5519 122.202 97.9829 111.709 107.561C100.909 117.42 94.1839 130.96 92.8538 145.522C92.7065 147.134 92.6319 148.746 92.6183 150.354L26.4506 150.353Z" 
            stroke="black"
        />
        <path 
            onClick={() => handlePathClick('caotico')} 
            className={`${getFillClass('caotico')} ${getHoverClass('caotico')} transition-colors duration-300 cursor-pointer ${disabled ? 'opacity-50' : ''}`}
            d="M26.4506 154.759C26.4651 158.368 26.6324 161.987 26.963 165.607C29.7944 196.607 44.1109 225.43 67.1017 246.417C89.7858 267.123 119.298 278.725 149.982 279.031L149.982 212.861C135.806 212.56 122.202 207.129 111.709 197.55C100.909 187.692 94.1839 174.152 92.8538 159.59C92.7065 157.977 92.6319 156.365 92.6183 154.758L26.4506 154.759Z" 
            stroke="black"
        />
        <path 
            onClick={() => handlePathClick('simple')} 
            className={`${getFillClass('simple')} ${getHoverClass('simple')} transition-colors duration-300 cursor-pointer ${disabled ? 'opacity-50' : ''}`}
            d="M277.87 154.759C277.856 158.368 277.688 161.987 277.358 165.607C274.527 196.607 260.21 225.43 237.219 246.417C214.535 267.123 185.022 278.725 154.339 279.031L154.339 212.861C168.515 212.56 182.119 207.129 192.612 197.55C203.412 187.692 210.137 174.152 211.467 159.59C211.614 157.977 211.689 156.365 211.703 154.758L277.87 154.759Z" 
            stroke="black"
        />
        <path 
            onClick={() => handlePathClick('complicado')} 
            className={`${getFillClass('complicado')} ${getHoverClass('complicado')} transition-colors cursor-pointer duration-300 ${disabled ? 'opacity-50' : ''}`}
            d="M277.87 150.353C277.856 146.744 277.688 143.125 277.358 139.505C274.527 108.505 260.21 79.682 237.219 58.6951C214.535 37.9884 185.022 26.3866 154.339 26.0805L154.339 92.2509C168.515 92.5519 182.119 97.9829 192.612 107.561C203.412 117.42 210.137 130.96 211.467 145.522C211.614 147.134 211.689 148.746 211.703 150.354L277.87 150.353Z" 
            stroke="black"
        />
    </svg>
    );
}

export default CynefinSelector;
const Button = ({ text, onClick, type = 'button', className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`
             text-white font-bold py-2 px-4 rounded
                ${className}  // Allow custom classes to override defaults
            `}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
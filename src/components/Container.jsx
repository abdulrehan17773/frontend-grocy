function Container({ children, ...props }) {
    return (
      <div className={`container mx-auto px-4 ${props.className || ''}`}>
        {children}
      </div>
    );
  }
  
  export default Container;
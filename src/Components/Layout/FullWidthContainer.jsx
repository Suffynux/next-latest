const FullWidthContainer = ({ children, bg = '', className = '' }) => {
  return (
    <div className={`${bg} w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default FullWidthContainer;

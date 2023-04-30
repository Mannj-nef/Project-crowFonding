const handlerHeading = (type, defaultClassName, className, children) => {
  switch (type) {
    case "h2":
      return <h2 className={`${defaultClassName} ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`${defaultClassName} ${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`${defaultClassName} ${className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${defaultClassName} ${className}`}>{children}</h5>;
    case "h6":
      return <h6 className={`${defaultClassName} ${className}`}>{children}</h6>;

    default:
      return <h1 className={`${defaultClassName} ${className}`}>{children}</h1>;
  }
};

export default handlerHeading;

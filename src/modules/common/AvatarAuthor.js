const AvatarAuthor = ({ avararImg = "/Logo.png", className = "" }) => {
  return (
    <img
      src={avararImg}
      className={`rounded-full ${className}`}
      alt="crowfunding-app"
    />
  );
};

export default AvatarAuthor;

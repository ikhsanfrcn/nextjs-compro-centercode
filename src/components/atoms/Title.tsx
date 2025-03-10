type TitleProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
    return <p className={`text-2xl md:text-4xl font-bold ${className}`}>{children}</p>;
  };
  
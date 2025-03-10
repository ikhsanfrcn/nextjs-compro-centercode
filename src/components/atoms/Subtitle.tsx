type SubitleProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Subtitle: React.FC<SubitleProps> = ({ children, className = '' }) => {
    return <p className={`text-md md:text-xl font-bold ${className}`}>{children}</p>;
  };
  
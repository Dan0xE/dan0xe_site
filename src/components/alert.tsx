const Alert = ({
  children,
  style,
  ...props
}: {
  children: any;
  style: any;
}) => {
  return (
    <div
      className={`block rounded-md text-sm font-medium text-gray-700 ${style}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Alert;

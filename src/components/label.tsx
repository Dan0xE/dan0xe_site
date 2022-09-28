const Label = ({ children, ...props }: { children: any }) => {
  return (
    <label
      className="block rounded-md bg-blue-200 px-2 text-sm font-medium text-gray-700"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

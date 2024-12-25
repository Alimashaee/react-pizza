function ErrorMessage({ children }) {
  return (
    <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
      {children}
    </p>
  );
}

export default ErrorMessage;

export function Button({ className, children, ...props }) {
    return (
      <button
        className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
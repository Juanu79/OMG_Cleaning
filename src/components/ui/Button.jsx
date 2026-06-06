export default function Button({ children, variant = 'primary', onClick }) {
  const styles = {
    primary: 'bg-omg-orange text-white hover:opacity-90',
    secondary: 'bg-omg-teal text-white hover:opacity-90',
    outline: 'border-2 border-omg-orange text-omg-orange hover:bg-omg-orange hover:text-white',
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${styles[variant]}`}
    >
      {children}
    </button>
  )
}
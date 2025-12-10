export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 5L35 15V25L20 35L5 25V15L20 5Z" 
        fill="currentColor" 
        fillOpacity="0.1"
      />
      <path 
        d="M20 5L35 15V25L20 35L5 25V15L20 5Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M20 15L27 20L20 25L13 20L20 15Z" 
        fill="currentColor"
      />
    </svg>
  )
}
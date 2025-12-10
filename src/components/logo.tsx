"use client"

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img
      src="/icon.png"
      alt="Vectorkub Logo"
      className={className}
      style={{ 
        objectFit: 'contain',
        borderRadius: '10px'
      }}
    />
  )
}
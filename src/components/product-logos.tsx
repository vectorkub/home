export const ProductLogos = {
  VectorPay: ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 20H34M14 28H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="36" cy="28" r="2" fill="currentColor"/>
    </svg>
  ),
  
  VectorAuth: ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8L36 14V26C36 32 30 38 24 40C18 38 12 32 12 26V14L24 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 24L22 26L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  VectorAI: ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="20" r="2" fill="currentColor"/>
      <circle cx="30" cy="20" r="2" fill="currentColor"/>
      <path d="M18 30C18 30 20 34 24 34C28 34 30 30 30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 24H12M36 24H40M24 8V12M24 36V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  
  VectorCloud: ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 20C32 14 28 10 22 10C16 10 12 14 12 20C8 20 6 23 6 26C6 29 8 32 12 32H32C36 32 38 29 38 26C38 23 36 20 32 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 38L24 42L28 38M24 32V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  VectorCMS: ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 18H26M14 24H34M14 30H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="30" y="16" width="4" height="4" fill="currentColor"/>
    </svg>
  ),
  
  VectorAnalytics: ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="28" width="8" height="12" stroke="currentColor" strokeWidth="2"/>
      <rect x="20" y="20" width="8" height="20" stroke="currentColor" strokeWidth="2"/>
      <rect x="32" y="16" width="8" height="24" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 8L16 16L24 12L40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}
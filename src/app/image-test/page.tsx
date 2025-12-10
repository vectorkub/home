export default function ImageTestPage() {
  return (
    <div className="shell py-20">
      <h1 className="text-2xl font-bold mb-8">Image Test</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Direct img tag:</h2>
          <img src="/icon.png" alt="Test 1" className="w-32 h-32 border border-red-500" />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">With full path:</h2>
          <img src="/icon.png" alt="Test 2" width="128" height="128" className="border border-blue-500" />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">Logo Component:</h2>
          <div className="border border-green-500 inline-block">
            <Logo className="w-32 h-32" />
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">Available images in public:</h2>
          <p className="font-mono text-sm">icon.png, favicon.ico</p>
        </div>
      </div>
    </div>
  )
}

import Logo from "@/components/logo"
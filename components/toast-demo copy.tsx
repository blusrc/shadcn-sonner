"use client"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function ToastDemo() {
  const handleToast = () => {
    toast.success("This is a toast", {
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <Button onClick={handleToast}>Render</Button>

      {/* Add Toaster to the root layout */}
      <Toaster />
    </div>
  )
}

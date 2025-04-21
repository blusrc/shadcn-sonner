"use client"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function ToastDemo() {
  // Option 1: Non-dismissable toast
  const handleUpdatePassword = () => {
    toast.warning("Password updated successfully", {
      dismissible: false,
      duration: Number.POSITIVE_INFINITY,
      description: "This is a description",
      action: {
        label: "Undo",
        onClick: () => {
          toast.success("Password updated successfully", {
            duration: 100000, // 100 seconds in milliseconds
          })
        },
      },
    })
  }
  // Option 2: Toast active for 100 seconds
  const handleUpdatePasswordLongDuration = () => {
    toast.success("Password updated successfully", {
      duration: 100000, // 100 seconds in milliseconds
    })
  }

  // Update the return statement to include both buttons
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <h1 className="text-2xl font-bold">Password Update Demo</h1>
      <div className="flex gap-4">
        <Button onClick={handleUpdatePassword}>Non-dismissable Toast</Button>
        <Button onClick={handleUpdatePasswordLongDuration}>100-second Toast</Button>
      </div>
      {/* <Toaster position="bottom-right" icons={{
        success: <CheckCircleIcon />,
        info: <InfoIcon />,
        warning: <AlertTriangleIcon />,
        error: <XCircleIcon />,
        loading: <Loader2Icon />,
      }}/> */}
      <Toaster />
    </div>
  )
}

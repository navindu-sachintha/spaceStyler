import { auth, googleProvider } from "@/config/firebase"
import { clsx, type ClassValue } from "clsx"
import { signInWithPopup, signOut } from "firebase/auth"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider)
  } catch (error) {
    console.error("Error signing in with Google: ", error)
  }
}

export const handleSignOut = async () =>{
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Error signing out: ", error)
  }
}
'use client'

import Image from "next/image";
import { Button } from "../core/utils/Button";
import { signIn } from "next-auth/react";
import { useState } from "react";


export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google", { callbackUrl: '/dashboard' })
    } catch (error) {
      throw new Error(String(error))
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="hero h-[calc(100vh-138px)] bg-dark-primary text-[#fff] relative">
      <div className="card w-96 shadow-xl shadow-dark-secondary/40 bg-dark-primary rounded-none border border-white/10 absolute md:top-40 lg:top-44 xl:top-52">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">Login</h2>
          <p className="text-white/50">Welcome Back!</p>
          <Button
            className="bg-slate-200 text-black hover:bg-slate-300"
            onClick={handleSignIn}>
            {loading ?
              <span className="loading loading-spinner"></span> :
              <Image
                src={'/icons/icon-google.svg'}
                alt="google icon"
                width={20}
                height={20} />}
            Continue with Google
          </Button>
        </div>
      </div>
    </main>
  )
}
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form" 
import { z } from "zod"

import { Label } from  "@/components/ui/label"   
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Link } from "react-router-dom"

const signInForm = z.object({
  email: z.string().email(),
  
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState:{isSubmitted} } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm){
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    
    toast.success('Enviamos um link de autenticação para seu e-mail.')
  }
  return (
  <>
    <Helmet title="Login"/>
    <div className="p-8">
      <Button asChild variant="ghost" className=" absolute top-8 right-8">
        <Link to="/sign-up" className="bg-green">
        Novo estabelicimento
        </Link>
      </Button>

   
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className=" flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">Acessar painel</h1>
          <p className="text-sm text-muted-foreground">Acessar suas vendas pelo painel do parceiro!</p>
          
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} placeholder="Digite seu e-mail"/>

          </div>
          <Button disabled={isSubmitted} className="flex justify-center w-full bg-red-600 hover:bg-red-500 cursor-pointer " type="submit">Entrar</Button>
        </form>
      </div>
      
    </div>
   </>
  )
}
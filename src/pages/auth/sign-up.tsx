/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form" 
import { z } from "zod"

import { Label } from  "@/components/ui/label"   
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"


const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const { 
    register, 
    handleSubmit, formState:{isSubmitted} 
  } = useForm<SignUpForm>()
 
  async function handleSignUp(data: SignUpForm){
    try {  
      console.log(data)

        await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Login',
            onClick: () => navigate('/sign-in'),
        },
      });
    } catch {   
      toast.error('Ocorreu um erro ao cadastrar o restaurante. Tente novamente mais tarde.', {
          action: {
          label: 'Tentar novamente',
            onClick: () => handleSignUp(data),
          }    
      });
    }
  }

   return (

    <>
      <Helmet title="Cadastro"/>

      <div className="p-8">
      <Button asChild variant="ghost" className=" absolute top-8 right-8">
          <Link to="/sign-in" className="bg-green">
          Fazer Login
          </Link>
        </Button>


        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className=" flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um Parceiro e comece suas vendas!</p>
            
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                <Input 
                  id="restaurantName" 
                  type="text" 
                  {...register('restaurantName')} 
                  placeholder="Digite o Estabelecimento"
                />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input 
                id="managerName" 
                type="text" 
                {...register('managerName')} 
                placeholder="Digite seu Nome"
                />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
                <Input 
                id="email" 
                type="email" 
                {...register('email')} 
                placeholder="Digite seu e-mail"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="">Seu Tel</Label>
              <Input 
              id="phone" 
              type="tel" 
              {...register('phone')} 
              placeholder="Digite seu Tel"/>
            </div>

            <Button disabled={isSubmitted} className="flex justify-center w-full bg-red-600 hover:bg-red-500 cursor-pointer " type="submit">
              Finalizar Cadastro
            </Button>
            
            <p className=" px-6 text-sm text-muted-foreground text-center">

              Ao se cadastrar, você concorda com os nossos 
              <a href="#" className="underline underline-offset-4">{' '}
                Termos de Serviço {' '}
              </a> 
                e 
              <a href="#" className="underline underline-offset-4">{' '}
                Política de Privacidade.
              </a> 
            </p>
          </form>
        </div>
        
      </div>
   </>
  )
}
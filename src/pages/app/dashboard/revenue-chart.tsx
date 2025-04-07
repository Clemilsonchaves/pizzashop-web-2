import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid,  } from "recharts";
import colors from "tailwindcss/colors"

const data = [
  { date:'07/04', revenue: 900 },
  { date:'08/04', revenue: 400},
  { date:'09/04', revenue: 500 },
  { date:'10/04', revenue: 200 },
  { date:'11/04', revenue: 1100 },
  { date:'12/04', revenue: 700 },
  { date:'13/04', revenue: 900 },

]
  


export function RevenueChart(){
  return (
    <Card className="col-span-6 ">
      <CardHeader className=" flex-row items-center justify-between  pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium"> Receita no período</CardTitle>
            <CardDescription>Receita diária no período</CardDescription>
          </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data} style={{fontSize: 12}} >
             <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>

             <YAxis 
              stroke="#888" 
              axisLine={false} 
              tickLine={false}
              width={88}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                })
              }
              />

              <CartesianGrid vertical={false} className="stroke-muted" />
              
              <Line 
              type="linear" 
              strokeWidth={2} 
              dataKey="revenue"
              stroke={colors.violet[500]}
              /> 

           
            
            </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
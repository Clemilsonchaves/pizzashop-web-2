
import { Helmet } from "react-helmet-async"
import { MonthRevenueCard } from "./month-revenue-card"
import { MonthOrdersAmountCard } from "./month-orders-amount-card"
export function Dashboard() { 
  return (
    <>
      <Helmet title="Dashboard"/>
      <div className="flex flex-col gap-4"> 
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
           <MonthRevenueCard />
           <MonthOrdersAmountCard />
          </div>
      </div>
          
    </>
  )
}
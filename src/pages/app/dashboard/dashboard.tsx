
import { Helmet } from "react-helmet-async"
import { MonthRevenueCard } from "./month-revenue-card"
import { MonthOrdersAmountCard } from "./month-orders-amount-card"
import { DayOrdersAmountCard } from "./day-orders-amount-card"
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card"
import { RevenueChart } from "./revenue-chart"
import { PopularProductsChart } from "./popular-products-chart"
export function Dashboard() { 
  return (
    <>
      <Helmet title="Dashboard"/>
      <div className="flex flex-col gap-4 "> 
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
           <MonthRevenueCard />
           <MonthOrdersAmountCard />
           <DayOrdersAmountCard />
           <MonthCanceledOrdersAmountCard />
          </div>

          <div className="grid grid-cols-9 gap-4 "> 
            <div className="col-span-9 lg:col-span-5">
              <RevenueChart />
            </div>
            <div className="col-span-9 lg:col-span-4">
              <PopularProductsChart />
            </div>
          </div>
      </div>
          
    </>
  )
}
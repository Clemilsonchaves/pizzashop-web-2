import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "@/pages/app/orders/order-details";

// export interface OrderTableRowProps {}
export function OrderTableRow() {
  return (
    <TableRow >
    <TableCell className="w-[100px]">
      <Dialog> 
        <DialogTrigger asChild > 
          <Button variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedidos</span>
          </Button>
        </DialogTrigger>
        <OrderDetails />
      </Dialog>
     
    </TableCell>
    <TableCell className="font-mono text-xs font-medium">
      #123456
    </TableCell>
    <TableCell className="text-muted-foreground">
      há 15 minutos
    </TableCell>
    <TableCell>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400"/>
        <span className="font-medium text-muted-foreground">Pendente</span>
      </div>
    </TableCell>
    <TableCell className="font-medium">
      Clemilson Chaves
    </TableCell>
    <TableCell className="font-medium">
      R$ 1.200,00
    </TableCell>
    <TableCell>
      <Button variant="outline" size="xs">
        <ArrowRight className=" mr-2 h-3 w-3 text-green-700" />
      Aprovar
      </Button>
    </TableCell>
    <TableCell>
      <Button variant="ghost" size="xs">
        <X className="mr-2 h-3 w-3 text-red-600" />
        Cancelar
      </Button>
    </TableCell>

  </TableRow>
  )
}
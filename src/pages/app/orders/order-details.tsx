
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent >
      <DialogHeader>
        <DialogTitle>
          Pedido: efff123hj6
        </DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-8">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">Status</TableCell>
                  <TableCell className="flex justify-end">Pendente</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">Cliente</TableCell>
                  <TableCell className="flex justify-end">Clemilson Chaves</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">Telefone</TableCell>
                  <TableCell className="flex justify-end">(11) 95283-8766</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">E-mail</TableCell>
                  <TableCell className="flex justify-end"> clemilsonchaves@gmail.com</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">Realizado há</TableCell>
                  <TableCell className="flex justify-end">Há 3 minutos</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table >
              <TableHeader>
                <TableRow >
                  <TableHead className="text-left">Produto</TableHead>
                  <TableHead className="text-right">Quantidade</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">Pizza peperone</TableCell>
                  <TableCell className="text-muted-foreground text-right">2</TableCell>
                  <TableCell className="text-muted-foreground text-right">R$ 60,00</TableCell>
                  <TableCell className="text-muted-foreground text-right">R$ 120,00</TableCell>
                </TableRow>
              </TableBody>

              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">Pizza calabresa</TableCell>
                  <TableCell className="text-muted-foreground text-right">1</TableCell>
                  <TableCell className="text-muted-foreground text-right">R$ 50,00</TableCell>
                  <TableCell className="text-muted-foreground text-right">R$ 50,00</TableCell>
                </TableRow>
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total do pedido</TableCell>
                  <TableCell className="font-medium text-right">R$ 170,00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
      </div>

    </DialogContent>
  );
}
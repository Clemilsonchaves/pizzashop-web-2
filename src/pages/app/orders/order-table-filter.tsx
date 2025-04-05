import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilter(){
   return (
    <form className="flex flex-wrap items-center gap-2"> 
      <span className="text-sm font-semibold whitespace-nowrap">Filtros</span>
      <Input placeholder="ID do pedido" className="h-8 w-full sm:w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-full sm:w-[320px]" />

      <Select defaultValue="all">
      <SelectTrigger className="h-8 w-full sm:w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos os status</SelectItem>
        <SelectItem value="pending">Pendente</SelectItem>
        <SelectItem value="canceled">Cancelado</SelectItem>
        <SelectItem value="processing">Em preparo</SelectItem>
        <SelectItem value="delivering">Em entrega</SelectItem>
        <SelectItem value="delivered">Entregue</SelectItem>
      </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="xs" className="w-full sm:w-auto">
      <Search className="h-4 w-4 mr-2" />
      Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs" className="w-full sm:w-auto">
      <X className="h-4 w-4 mr-2 text-red-600" />
      Remover Filtros
      </Button>
    </form>
   )
}
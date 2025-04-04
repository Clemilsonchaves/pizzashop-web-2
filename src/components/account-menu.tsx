import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <Button variant="outline" className="flex items-center gap-2 select-none">
           Pizza Shop 
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Clemilson Chaves</span>
          <span className="text-xs font-normal text-muted-foreground">clemilson@gmail.com</span>
        </DropdownMenuLabel>  
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className=" h-4 w-4 mr-2" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LogOut className="text-rose-500 dark:text-rose-400" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
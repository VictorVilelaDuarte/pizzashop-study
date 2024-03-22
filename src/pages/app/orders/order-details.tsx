import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 182d3ff21ut</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="flex flex-col space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className=" flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className=" flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    Victor Vilela Duarte
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className=" flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    (12) 98235-0312
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className=" flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    victorvduarte@gmail.com
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className=" flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    há 3 minutos
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Magnifica</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,90</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Frango c/ Catupiry</TableCell>
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">R$49,90</TableCell>
              <TableCell className="text-right">R$149,70</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido:</TableCell>
              <TableCell className="text-right font-medium">R$289,50</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}

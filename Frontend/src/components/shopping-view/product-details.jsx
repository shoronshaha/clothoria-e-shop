import { Dialog, DialogContent } from "@radix-ui/react-dialog";

function ProducDetailsDialog(open, setOpen) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent></DialogContent>
    </Dialog>
  );
}

export default ProducDetailsDialog;

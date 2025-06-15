import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { EditInvoice } from "@/components/EditInvoice";
import { notFound } from "next/navigation";
import React from "react";

async function getData(invoiceId: string, userId: string) {
  const data = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
      userId: userId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{ invoiceid: string }>;
const EditInvoiceRoute = async ({ params }: { params: Params }) => {
  const { invoiceid } = await params;
  const session = await requireUser();
  const userId = session?.user?.id as string;

  const data = await getData(invoiceid, userId);

  return <EditInvoice data={data} />;
};

export default EditInvoiceRoute;

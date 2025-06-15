import prisma from "@/app/utils/db"
import { sendInvoiceReminder } from "@/app/utils/emailFormat/sendInvoiceReminder"
import { requireUser } from "@/app/utils/hooks"
import { NextResponse } from "next/server"

export async function POST(request: Request, {params}: {params: Promise<{invoiceid: string}>}){

    try {
        const {invoiceid} = await params
    const session = await requireUser()

    const invoiceData = await prisma.invoice.findUnique({
        where: {
            id: invoiceid,
            userId: session.user?.id
        },
    })

    if(!invoiceData){
        return new Response("Invoice not found", {status: 404})
    }

    await sendInvoiceReminder({
        id: invoiceData.id,
        senderName: invoiceData.fromName,
        clientName: invoiceData.clientName,
        clientEmail: invoiceData.clientEmail,
        invoiceNumber: invoiceData.invoiceNumber,
        dueDate: new Date(invoiceData.date),
        total: invoiceData.total,
        currency: invoiceData.currency as "USD" | "EUR" | "INR",
    })

    return NextResponse.json({success:true})
    } catch (error) {
        return NextResponse.json({error: 'Failed to send email'}, {status: 500})
    }
}
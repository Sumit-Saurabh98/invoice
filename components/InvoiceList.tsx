import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import InvoiceActions from './InvoiceActions'
import prisma from '@/app/utils/db'
import { requireUser } from '@/app/utils/hooks'
import { formatCurrency } from '@/app/utils/formatCurrency'
import { Badge } from './ui/badge'

async function getData(userId: string) {
    const data = await prisma.invoice.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            clientName: true,
            total: true,
            createdAt: true,
            status: true,
            invoiceNumber: true,
            currency: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return data
}

const InvoiceList = async () => {

    const session = await requireUser()
    const userId = session?.user?.id

    const data = await getData(userId as string)

  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                data.map((invoice) =>(
                    <TableRow key={invoice.id}>
                <TableCell>#{invoice.invoiceNumber}</TableCell>
                <TableCell>{invoice.clientName}</TableCell>
                <TableCell>{formatCurrency({amount: invoice.total, currency: invoice.currency as 'USD' | 'EUR' | 'INR'})}</TableCell>
                <TableCell>
                    <Badge variant={invoice.status === 'PAID' ? 'default' : 'destructive'}>
                    {invoice.status}
                    </Badge>
                </TableCell>
                <TableCell>{invoice.createdAt.toDateString()}</TableCell>
                <TableCell className='text-right'>
                    <InvoiceActions id={invoice.id} status={invoice.status}/>
                </TableCell>
            </TableRow>
                ))
            }
        </TableBody>
    </Table>
  )
}

export default InvoiceList

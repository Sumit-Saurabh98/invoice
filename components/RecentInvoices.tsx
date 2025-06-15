import prisma from "@/app/utils/db";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { requireUser } from "@/app/utils/hooks";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getData(userId: string) {
  const data = await prisma.invoice.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      clientName: true,
      clientEmail: true,
      total: true,
      currency: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });

  return data;
}

export async function RecentInvoices() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">
          Recent Invoices
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {data.map((item) => (
            <div 
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150" 
              key={item.id}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <Avatar className="size-10 flex-shrink-0 bg-gradient-to-br from-blue-400 to-blue-600">
                  <AvatarFallback className="bg-transparent text-white font-semibold text-sm">
                    {item.clientName.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.clientName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {item.clientEmail}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                  +{formatCurrency({
                    amount: item.total,
                    currency: item.currency as "USD" | "EUR" | "INR",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
        {data.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-sm text-gray-500">No recent invoices found</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
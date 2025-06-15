"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

interface iAppProps {
  data: {
    date: string;
    amount: number;
  }[];
}

export function Graph({ data }: iAppProps) {
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[300px] flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500 text-sm">No data available</p>
      </div>
    );
  }

  const chartConfig = {
    amount: {
      label: "Amount",
      color: "#3b82f6",
    },
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Paid Invoices</h3>
        <p className="text-sm text-gray-500">
          Invoices which have been paid in the last 30 days.
        </p>
      </div>

      <div className="p-4">
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                vertical={false}
              />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                tickFormatter={(value) => `$${value}`}
              />

              <ChartTooltip
                content={
                  <ChartTooltipContent
                    indicator="dot"
                    labelFormatter={(label) => `Date: ${label}`}
                    formatter={(value) => [`$${value}`, " Amount"]}
                  />
                }
                cursor={{
                  stroke: "#3b82f6",
                  strokeWidth: 1,
                  strokeDasharray: "5 5",
                }}
              />

              <Area
                type="monotone"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#colorAmount)"
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                  fill: "#ffffff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Stats Summary */}
      <div className="px-6 pb-6">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full p-4 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-2 min-w-[200px] justify-center">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Total Records:
            </span>
            <span className="text-slate-900 dark:text-slate-100 font-semibold">
              {data.length}
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-[200px] justify-center">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Max Amount:
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              ${Math.max(...data.map((d) => d.amount)).toLocaleString("en-US")}
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-[200px] justify-center">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Total:
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              $
              {data
                .reduce((sum, d) => sum + d.amount, 0)
                .toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

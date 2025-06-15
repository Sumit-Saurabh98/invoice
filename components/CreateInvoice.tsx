"use client";

import React, { useActionState, useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";
import SubmitButton from "./SubmitButton";
import { createInvoice } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { invoiceSchema } from "@/app/utils/zodSchemas";
import { formatCurrency } from "@/app/utils/formatCurrency";

interface IUserInfo {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
}

const CreateInvoice = ({firstName, lastName, address, email}: IUserInfo) => {
  const [lastResult, action] = useActionState(createInvoice, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: invoiceSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<"USD" | "EUR" | "INR">("USD");

  const calculateTotal = () => {
    const total = (parseFloat(rate) || 0) * (parseFloat(quantity) || 0);
    return total.toFixed(2);
  };

  const total = useMemo(() => calculateTotal(), [rate, quantity]);

  useEffect(() => {
    setAmount(total);
  }, [total]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent>
        <form id={form.id} action={action} onSubmit={form.onSubmit} noValidate>
          <input
            type="hidden"
            name={fields.date.name}
            value={selectedDate?.toISOString()}
          />

          <input
            type="hidden"
            name={fields.total.name}
            value={Number(amount)}
          />
          <div className="flex flex-col gap-1 w-fit mb-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Draft</Badge>
              <Input
                placeholder="Test 123"
                name={fields.invoiceName.name}
                key={fields.invoiceName.key}
                defaultValue={fields.invoiceName.initialValue}
              />
            </div>
            <p className="text-sm text-red-500">{fields.invoiceName.errors}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-y-1">
              <Label>Invoice No.</Label>
              <div className="flex">
                <span className="px-3 border border-r-0 rounded-l-md bg-muted flex items-center">
                  #
                </span>
                <Input
                  className="rounded-l-none"
                  placeholder="5"
                  name={fields.invoiceNumber.name}
                  key={fields.invoiceNumber.key}
                  defaultValue={fields.invoiceNumber.initialValue}
                />
              </div>
              <p className="text-sm text-red-500">
                {fields.invoiceNumber.errors}
              </p>
            </div>
            <div className="flex flex-col gap-y-1">
              <Label>Currency</Label>
              <Select
                defaultValue="USD"
                name={fields.currency.name}
                key={fields.currency.key}
                onValueChange={(e) => setCurrency(e as "USD" | "EUR" | "INR")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">US Dollar -- USD</SelectItem>
                  <SelectItem value="INR">Indian Rupee -- INR</SelectItem>
                  <SelectItem value="EUR">Euro -- EUR</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-red-500">{fields.currency.errors}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-y-1">
              <Label>From</Label>
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  name={fields.fromName.name}
                  key={fields.fromName.key}
                  defaultValue={firstName + " " + lastName}
                />
                <p className="text-sm text-red-500">{fields.fromName.errors}</p>
                <Input
                  placeholder="Your Email"
                  name={fields.fromEmail.name}
                  key={fields.fromEmail.key}
                  defaultValue={email}
                />
                <p className="text-sm text-red-500">
                  {fields.fromEmail.errors}
                </p>
                <Input
                  placeholder="Your Address"
                  name={fields.fromAddress.name}
                  key={fields.fromAddress.key}
                  defaultValue={address}
                />
                <p className="text-sm text-red-500">
                  {fields.fromAddress.errors}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <Label>To</Label>
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  name={fields.clientName.name}
                  key={fields.clientName.key}
                  defaultValue={fields.clientName.initialValue}
                />
                <p className="text-sm text-red-500">
                  {fields.clientName.errors}
                </p>
                <Input
                  placeholder="Your Email"
                  name={fields.clientEmail.name}
                  key={fields.clientEmail.key}
                  defaultValue={fields.clientEmail.initialValue}
                />
                <p className="text-sm text-red-500">
                  {fields.clientEmail.errors}
                </p>
                <Input
                  placeholder="Your Address"
                  name={fields.clientAddress.name}
                  key={fields.clientAddress.key}
                  defaultValue={fields.clientAddress.initialValue}
                />
                <p className="text-sm text-red-500">
                  {fields.clientAddress.errors}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-y-1">
              <Label>Date</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="text-left justify-start">
                    <CalendarIcon className="mr-2 size-4" />
                    {selectedDate ? (
                      <p>{selectedDate.toISOString().split("T")[0]}</p>
                    ) : (
                      <span>Pick a Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setOpen(false);
                    }}
                    disabled={(date) => {
                      const yesterday = new Date();
                      yesterday.setDate(yesterday.getDate() - 1);
                      return date < yesterday;
                    }}
                  />
                </PopoverContent>
              </Popover>
              <p className="text-sm text-red-500">{fields.date.errors}</p>
            </div>

            <div className="flex flex-col gap-y-1">
              <Label>Invoice Due</Label>
              <Select
                name={fields.dueDate.name}
                key={fields.dueDate.key}
                defaultValue={fields.dueDate.initialValue}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Due Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Due on Receipt</SelectItem>
                  <SelectItem value="15">Net 15</SelectItem>
                  <SelectItem value="30">Net 30</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-red-500">{fields.dueDate.errors}</p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-12 gap-4 mb-2 font-medium">
              <p className="col-span-6">Description</p>
              <p className="col-span-2">Quantity</p>
              <p className="col-span-2">Rate</p>
              <p className="col-span-2">Amount</p>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-6">
                <Textarea
                  placeholder="Items name and description"
                  name={fields.invoiceItemDescription.name}
                  key={fields.invoiceItemDescription.key}
                  defaultValue={fields.invoiceItemDescription.initialValue}
                />
                <p className="text-sm text-red-500">
                  {fields.invoiceItemDescription.errors}
                </p>
              </div>
              <div className="col-span-2">
                <Input
                  type="number"
                  placeholder="0"
                  name={fields.invoiceItemQuantity.name}
                  key={fields.invoiceItemQuantity.key}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <p className="text-sm text-red-500">
                  {fields.invoiceItemQuantity.errors}
                </p>
              </div>
              <div className="col-span-2">
                <Input
                  type="number"
                  placeholder="0"
                  name={fields.invoiceItemRate.name}
                  key={fields.invoiceItemRate.key}
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <p className="text-sm text-red-500">
                  {fields.invoiceItemRate.errors}
                </p>
              </div>
              <div className="col-span-2">
                <Input
                  type="string"
                  placeholder="0"
                  disabled
                  value={formatCurrency({ amount: Number(total), currency })}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-1/3">
              <div>
                <span>Subtotal</span>
                <span className="float-right">
                  {formatCurrency({ amount: Number(total), currency })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Total ({currency})</span>
                <span className="font-medium underline underline-offset-2">
                  {formatCurrency({ amount: Number(total), currency })}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <Label>Note</Label>
            <Textarea
              placeholder="Add your note..."
              name={fields.note.name}
              key={fields.note.key}
              defaultValue={fields.note.initialValue}
            />
            <p className="text-sm text-red-500">{fields.note.errors}</p>
          </div>

          <div className="flex justify-end items-center mt-6">
            <div>
              <SubmitButton text="Send Invoice to Client" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateInvoice;

import { z, type ZodType } from "zod";

export const GetBillSchema = z.object({
  id: z.string()
})

export const CreateBillSchema = z.object({
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  description: z.string(),
  quantity: z.number(),
  UnitPrice: z.number(),
  amount: z.number(),
  billTo: z.string(),
  numMonth: z.number(),
})

export const CreateAutoBillSchema = z.object({
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  description: z.string(),
  quantity: z.number(),
  UnitPrice: z.number(),
  amount: z.number(),
  billTo: z.string(),
  numMonth: z.number(),
  billNumber: z.number(),
})

export const DeleteAutoBillSchema = z.object({
  id: z.string()
})


type InvoiceData = {
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  description: string;
  quantity: number;
  UnitPrice: number;
  amount: number;
  billTo: string;
};

// schema for adding a new bill client side. 
export const invoiceSchema: ZodType<InvoiceData> = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  phone: z.string().min(1, 'Phone number is required'),
  billTo: z.string().min(1, 'Bill to is required'),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  UnitPrice: z.number().min(0.01, 'Unit price must be at least 0.01'),
  amount: z.number().min(0.01, 'Amount must be at least 0.01'),
})

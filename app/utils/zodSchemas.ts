import {z} from 'zod'

export const onboardingSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }),
    address: z.string().min(2, { message: "Address must be at least 2 characters long" }),
})
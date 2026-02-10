import { z } from "zod";

export const leadFormSchema = z.object({
  companyName: z.string().min(1, "El nombre de la empresa es obligatorio"),
  email: z.string().email("Ingresá un email válido"),
  contactName: z.string().min(1, "El nombre de contacto es obligatorio"),
  phone: z.string().min(6, "Ingresá un teléfono válido"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

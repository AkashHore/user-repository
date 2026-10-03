import z from "zod";

export const loginSchema = z.object({
  email: z
    .email({ error: "Valid Email Required" })
    .max(64, { error: "Email should not exceed 64 Characters" }),
  password: z
    .string()
    .min(8, { error: "Password should be atleast 8 Characters" })
    .max(128, { error: "Character Limit Reached" }),
  rememberMe: z.boolean().optional(),
});

export type LoginType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { error: "Atleast 2 Characters Required" })
      .max(32, { error: "Name should not exceed 32 Characters" }),
    email: z
      .email({ error: "Valid Email Required" })
      .max(64, { error: "Email should not exceed 64 Characters" }),
    password: z
      .string()
      .min(8, { error: "Password should be atleast 8 Characters" })
      .max(128, { error: "Character Limit Reached" }),
    confirmPassword: z
      .string()
      .min(8, { error: "Password should be atleast 8 Characters" })
      .max(128, { error: "Character Limit Reached" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    error: "Password didn't match",
    path: ["confirmPassword"],
  });

export type RegisterType = z.infer<typeof registerSchema>;

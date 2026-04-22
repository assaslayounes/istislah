// schemas/requestSchemas.ts
import { z } from "zod";

export const step1Schema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    birthDate: z.string(),
    birthPlace: z.string(),
    address: z.string(),
    residenceCommuneId: z.string(),
    fatherName: z.string(),
    motherFirstName: z.string(),
    motherLastName: z.string(),
});

export const step2Schema = z.object({
    nationalIdentificationNumber: z.string().length(18),
    idCardNumber: z.string(),
    releaseDate: z.string(),
    issuingAuthority: z.string(),
});

export const step3Schema = z.object({
    commune: z.string(),
    oceanNaming: z.string(),
    area: z.number().positive(),
});

export const step4Schema = z.object({
    biometricIdCard: z.any(),
    residenceCard: z.any(),
    landContract: z.any(),
});
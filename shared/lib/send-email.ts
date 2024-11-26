import {Resend} from "resend";
import {PayOrderTemplate} from "@/shared/components/shared/email-templates/pay-order";
import React from "react";

export const sendEmail = async (to: string, subject: string, template: React.ReactNode) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to,
        subject,
        text: '',
        react: template,
    });

    if (error) {
        throw error;
    }

    res.status(200).json(data);
}
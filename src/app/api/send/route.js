// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST() {
  try {
    return "okay";
  } catch (error) {
    return NextResponse.json({ error });
  }
}

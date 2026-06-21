"use client";

import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { type FormEvent, type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { routePaths } from "@/content/routes";
import { cn } from "@/lib/utils";

// TODO: 실제 SLIT 문의 이메일로 교체
const CONTACT_EMAIL = "contact@slit.team";

const INQUIRY_TYPES = [
  "AX 프로젝트 문의",
  "Recova 도입 상담",
  "협업·파트너십",
  "채용",
  "기타",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  name?: string;
  company?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
  consent?: string;
};

function controlClass(hasError: boolean): string {
  return cn(
    "w-full rounded-[4px] border bg-white px-3.5 py-2.5 text-[15px] leading-[1.6] text-[rgb(55,53,47)] outline-none transition-colors placeholder:text-[rgb(55_53_47/0.4)] focus:border-[rgb(55,53,47)] focus:ring-2 focus:ring-[rgb(55_53_47/0.12)]",
    hasError
      ? "border-[var(--destructive)] focus:border-[var(--destructive)] focus:ring-[var(--destructive)]/15"
      : "border-[rgb(55_53_47/0.18)]",
  );
}

function Field({
  htmlFor,
  label,
  required = false,
  error,
  children,
}: {
  readonly htmlFor: string;
  readonly label: string;
  readonly required?: boolean;
  readonly error?: string;
  readonly children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[13px] font-bold text-[rgb(55,53,47)]"
        htmlFor={htmlFor}
      >
        {label}
        {required ? (
          <span className="ml-1 text-[var(--destructive)]">*</span>
        ) : (
          <span className="ml-1 font-normal text-[rgb(55_53_47/0.45)]">
            (선택)
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p
          className="text-[12px] leading-4 text-[var(--destructive)]"
          id={`${htmlFor}-error`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SuccessView({ mailto }: { readonly mailto: string }) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-[6px] border border-[rgb(55_53_47/0.13)] bg-[rgb(55_53_47/0.03)] px-6 py-10">
      <span className="flex size-11 items-center justify-center rounded-full bg-[rgb(154,226,196)]">
        <Check className="size-5 text-[rgb(55,53,47)]" />
      </span>
      <div className="flex flex-col gap-2">
        <h2 className="text-[22px] font-bold leading-[1.3] text-[rgb(55,53,47)]">
          문의 감사합니다.
        </h2>
        <p className="max-w-[44ch] text-[15px] leading-[1.65] text-[rgb(55_53_47/0.7)]">
          작성해 주신 연락처로 곧 연락드리겠습니다. 메일 앱이 자동으로 열리지
          않았다면 아래에서 다시 보내실 수 있습니다.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button
          asChild
          className="h-10 rounded-lg px-5 text-[14px] font-bold"
        >
          <Link href={routePaths.home}>메인으로 돌아가기</Link>
        </Button>
        <a
          className="text-[14px] font-medium text-[rgb(55_53_47/0.65)] underline underline-offset-4 transition-colors hover:text-[rgb(55,53,47)]"
          href={mailto}
        >
          메일 앱으로 다시 열기
        </a>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sentMailto, setSentMailto] = useState<string | null>(null);

  function clearError(key: keyof FieldErrors) {
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "이름을 입력해 주십시오.";
    if (!company.trim()) next.company = "회사명을 입력해 주십시오.";
    if (!email.trim()) next.email = "이메일을 입력해 주십시오.";
    else if (!EMAIL_PATTERN.test(email.trim()))
      next.email = "올바른 이메일 형식이 아닙니다.";
    if (!inquiryType) next.inquiryType = "문의 유형을 선택해 주십시오.";
    if (!message.trim()) next.message = "문의 내용을 입력해 주십시오.";
    if (!consent) next.consent = "개인정보 수집·이용에 동의해 주십시오.";
    return next;
  }

  function buildMailto(): string {
    const subject = `[SLIT 문의] ${inquiryType} - ${company.trim()}`;
    const body = [
      `이름: ${name.trim()}`,
      `회사: ${company.trim()}`,
      `이메일: ${email.trim()}`,
      `연락처: ${phone.trim() || "-"}`,
      `문의 유형: ${inquiryType}`,
      "",
      "문의 내용:",
      message.trim(),
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    const mailto = buildMailto();
    setSentMailto(mailto);
    window.location.href = mailto;
  }

  if (sentMailto) {
    return <SuccessView mailto={sentMailto} />;
  }

  return (
    <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field error={errors.name} htmlFor="name" label="이름" required>
          <input
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className={controlClass(Boolean(errors.name))}
            id="name"
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
            placeholder="성함을 입력해 주십시오"
            type="text"
            value={name}
          />
        </Field>
        <Field error={errors.company} htmlFor="company" label="회사" required>
          <input
            aria-invalid={Boolean(errors.company)}
            autoComplete="organization"
            className={controlClass(Boolean(errors.company))}
            id="company"
            onChange={(e) => {
              setCompany(e.target.value);
              clearError("company");
            }}
            placeholder="회사명을 입력해 주십시오"
            type="text"
            value={company}
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field error={errors.email} htmlFor="email" label="이메일" required>
          <input
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={controlClass(Boolean(errors.email))}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
            placeholder="name@company.com"
            type="email"
            value={email}
          />
        </Field>
        <Field htmlFor="phone" label="연락처">
          <input
            autoComplete="tel"
            className={controlClass(false)}
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="연락 가능한 번호를 입력해 주십시오"
            type="tel"
            value={phone}
          />
        </Field>
      </div>
      <Field
        error={errors.inquiryType}
        htmlFor="inquiryType"
        label="문의 유형"
        required
      >
        <div className="relative">
          <select
            aria-invalid={Boolean(errors.inquiryType)}
            className={cn(controlClass(Boolean(errors.inquiryType)), "appearance-none pr-10", inquiryType ? "" : "text-[rgb(55_53_47/0.4)]")}
            id="inquiryType"
            onChange={(e) => {
              setInquiryType(e.target.value);
              clearError("inquiryType");
            }}
            value={inquiryType}
          >
            <option disabled value="">
              문의 유형을 선택해 주십시오
            </option>
            {INQUIRY_TYPES.map((type) => (
              <option className="text-[rgb(55,53,47)]" key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[rgb(55_53_47/0.45)]" />
        </div>
      </Field>
      <Field
        error={errors.message}
        htmlFor="message"
        label="문의 내용"
        required
      >
        <textarea
          aria-invalid={Boolean(errors.message)}
          className={cn(controlClass(Boolean(errors.message)), "min-h-[140px] resize-y")}
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
            clearError("message");
          }}
          placeholder="어떤 업무를 자동화하고 싶으신지, 지금은 어떤 순서로 처리하시는지 적어 주십시오."
          rows={6}
          value={message}
        />
      </Field>
      <div className="flex flex-col gap-1.5">
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            aria-invalid={Boolean(errors.consent)}
            checked={consent}
            className="mt-0.5 size-4 flex-none rounded-[3px] border-[rgb(55_53_47/0.3)] accent-[rgb(55,53,47)]"
            onChange={(e) => {
              setConsent(e.target.checked);
              clearError("consent");
            }}
            type="checkbox"
          />
          <span className="text-[13px] leading-[1.6] text-[rgb(55_53_47/0.75)]">
            개인정보 수집·이용에 동의합니다.
            <span className="ml-1 text-[var(--destructive)]">(필수)</span>
          </span>
        </label>
        {errors.consent ? (
          <p
            className="text-[12px] leading-4 text-[var(--destructive)]"
            role="alert"
          >
            {errors.consent}
          </p>
        ) : null}
      </div>
      <Button
        className="mt-1 h-12 w-full rounded-lg text-[15px] font-bold"
        type="submit"
      >
        문의 보내기
      </Button>
    </form>
  );
}

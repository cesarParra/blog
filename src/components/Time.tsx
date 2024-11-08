import React from "react";
import {formatDate} from "../hooks/formatDate.ts";

export function Time({ date, children, className }: { date: Date; children: React.ReactNode; className?: string }) {
  return <time dateTime={formatDate(date)} className={className}>
    {children}
  </time>
}

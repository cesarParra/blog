import clsx from 'clsx'
import React from "react";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')} {...props} />
  )
}

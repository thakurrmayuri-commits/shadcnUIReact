import { cn } from "/Users/ruchi/Documents/React_JS/shadcnUI/shadcnUIReact/src/lib/utils.ts"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }

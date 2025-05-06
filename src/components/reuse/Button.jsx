import { buttonVariants } from "@/components/ui/button"; // Shadcn’s button

export function Button({ children, variant = "default" }) {
  return (
    <button className={buttonVariants({ variant })}>
      {children}
    </button>
  );
}
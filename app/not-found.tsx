import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="font-mono text-sm text-muted-foreground">404</span>
      <h1 className="mt-3 text-2xl font-medium tracking-tight text-foreground">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className={buttonVariants({ variant: "secondary", size: "md", className: "mt-8" })}
      >
        Back to home
      </Link>
    </Container>
  );
}

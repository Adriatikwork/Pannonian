import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { withBasePath } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-background px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src={withBasePath('/logos/footer-logo.png')}
            alt="Pannonian Logistics"
            width={200}
            height={80}
            className="h-auto w-48"
          />
        </div>

        {/* 404 Heading */}
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>

        {/* Message */}
        <h2 className="mb-2 text-2xl font-semibold text-foreground">
          Faqja nuk u gjet
        </h2>
        <p className="mb-8 text-muted-foreground">
          Faqja që po kërkoni nuk ekziston ose është zhvendosur.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">Kthehu në faqen kryesore</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/contact">Na kontaktoni</Link>
          </Button>
        </div>

        {/* Phone Link */}
        <div className="mt-8 text-sm text-muted-foreground">
          Ose na telefononi:{' '}
          <a
            href="tel:+38344123389"
            className="font-medium text-primary hover:underline"
          >
            044 123 389
          </a>
        </div>
      </div>
    </div>
  )
}

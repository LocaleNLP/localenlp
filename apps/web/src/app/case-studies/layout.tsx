interface CaseStudiesLayoutProps {
  children: React.ReactNode
}

export default function CaseStudiesLayout({ children }: CaseStudiesLayoutProps) {
  return (
    <div className="container relative">
      <div className="mx-auto max-w-4xl py-12">
        {children}
      </div>
    </div>
  )
}

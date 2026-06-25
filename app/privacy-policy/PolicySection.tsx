// components/PolicySection.tsx

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export const PolicySection = ({
  title,
  children,
}: PolicySectionProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#003C46] mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
};
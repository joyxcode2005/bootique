export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string })  {
  return (
    <div className="text-center mb-16 cursor-pointer">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
        {title}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#36172D] rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
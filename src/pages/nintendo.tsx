import { SectionCards } from "@/components/section-cards";

export default function Nintendo() {
  return (
    <div className="flex flex-col gap-4 py-4 px-4 lg:px-6 md:gap-6 md:py-6">
      <div>
        <h3 className="text-[32px] font-semibold">Hello Eric Omotolani</h3>
        <p className="text-[16px]">Welcome to your dashboard</p>
      </div>
      <SectionCards />
    </div>
  );
}

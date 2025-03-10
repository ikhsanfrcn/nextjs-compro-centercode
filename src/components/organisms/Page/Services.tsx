import { WorkContent } from "../../molecules/WorkContent";
import { WorkImage } from "../../molecules/WorkImage";

export const Services: React.FC = () => {
  return (
    <section className="container mx-auto lg:max-w-[70%] p-5">
      <div className="md:flex justify-between items-center gap-20">
        <WorkImage />
        <WorkContent />
      </div>
    </section>
  );
};

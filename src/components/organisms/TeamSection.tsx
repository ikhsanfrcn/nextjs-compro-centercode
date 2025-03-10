import { Title } from "../atoms/Title";
import TeamSlider from "../molecules/TeamSlider";

export const TeamSection: React.FC = () => {
  return (
    <section className="container mx-auto">
      <Title className="text-center">Our Team</Title>
      <div className="flex flex-col items-center justify-center pt-10">
        <TeamSlider />
      </div>
    </section>
  );
};

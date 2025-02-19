import TeamHeader from "@/components/team/team-header";
import TeamMember from "@/components/team/team-member";
import TeamRepeatableSection from "@/components/team/team-repeatable-section";

export default function Team() {
  return (
    <div>
      <TeamHeader />
      <TeamRepeatableSection />
      <TeamMember />
    </div>
  );
}

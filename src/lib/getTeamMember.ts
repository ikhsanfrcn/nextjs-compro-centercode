export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
  };
  
  export async function getTeamMembers(): Promise<TeamMember[]> {
    const res = await fetch("https://randomuser.me/api/?results=5&nat=us");
    const data = await res.json();
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.results.map((user: any) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      role: ["CEO", "CTO", "COO", "CFO", "CMO" ][Math.floor(Math.random() * 5)],
      image: user.picture.large,
    }));
  }
  
import '../styles/team.css';

export default function Team() {
  const team = [
    {
      name: "Ali",
      tasks: ["Create/Join Events", "Leaderboard", "Results"],
    },
    {
      name: "Alex",
      tasks: ["Database", "Map", "Chat"],
    },
    {
      name: "Ray",
      tasks: ["Submission", "Lobby", "UI Mockup"],
    },
    {
      name: "Karen",
      tasks: ["Profile", "History", "UI Mockup"],
    },
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <h2 className="team-title">Team Breakdown</h2>
        <p>Who will be doing what for the next iterations?</p>

        <div className="team-grid">
          {team.map((member, index) => (
            <article key={index} className="team-member">
              <h3>{member.name}</h3>
              <ul>
                {member.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

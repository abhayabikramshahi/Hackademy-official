// Example Discord server data API
export default function handler(req, res) {
  res.status(200).json({
    name: "Hackademy Discord",
    roles: ["Admin", "Moderator", "Member"],
    members: [
      { name: "John Doe", role: "Admin" },
      { name: "Jane Smith", role: "Moderator" },
      { name: "Alex Johnson", role: "Member" }
    ]
  });
}

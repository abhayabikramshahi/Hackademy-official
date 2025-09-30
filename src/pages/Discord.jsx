import React, { useEffect, useState } from "react";

function Discord() {
  // Bot IDs to filter out
  const botIds = [
    "437808476106784770",
    "962773074070077470",
    "302050872383242240",
    "500658624109084682",
    "944016826751389717",
    "651095740390834176",
    "1088851993242634064",
  ];

  // Fallback server data
  const SERVER = {
    name: "Hackademy Discord",
    members: [
      { id: "1001", username: "John Doe", avatar_url: "" },
      { id: "1002", username: "Jane Smith", avatar_url: "" },
      { id: "1003", username: "Alex Johnson", avatar_url: "" },
      { id: "9999", username: "ServerBot", avatar_url: "" },
    ],
  };

  const [serverData, setServerData] = useState(SERVER);

  useEffect(() => {
    const DISCORD_WIDGET_URL =
      "https://discord.com/api/guilds/1377314023405518969/widget.json";

    fetch(DISCORD_WIDGET_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Raw Discord members:", data.members);
        setServerData(data);
      })
      .catch((err) => console.error("Error fetching Discord data:", err));
  }, []);

  // Filter out members whose ID is in botIds
  const displayedMembers =
    serverData.members?.filter((member) => !botIds.includes(member.id)) || [];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">{serverData.name}</h1>

        {serverData.instant_invite && (
          <a
            href={serverData.instant_invite}
            target="_blank"
            rel="noreferrer"
            className="inline-block mb-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Join Server
          </a>
        )}

        <div className="flex items-center gap-4 mb-2">
          <p>Online Users: {displayedMembers.length}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Online Members</h2>
          <div className="grid grid-cols-2 gap-4">
            {displayedMembers.length > 0 ? (
              displayedMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 bg-gray-100 rounded-lg p-2"
                >
                  {member.avatar_url ? (
                    <img
                      src={member.avatar_url}
                      alt={member.username}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-700">
                      {member.username?.charAt(0) || "?"}
                    </div>
                  )}
                  <p>{member.username}</p>
                </div>
              ))
            ) : (
              <p>No online users available</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Discord;
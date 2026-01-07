import {
  Mail,
  Inbox,
  MessageSquare,
  Users,
  Cloud,
  Folder,
  Database,
  Box,
  Share2,
  Github,
  Gitlab,
  Bug,
  LayoutGrid,
} from "lucide-react";

const INTEGRATIONS = [
  {
    category: "Communication",
    items: [
      {
        name: "Gmail",
        logo: "https://cdn.simpleicons.org/gmail",
      },
      {
        name: "Outlook",
        logo: "/icons/outlook.png",
      },
      {
        name: "Slack",
        logo: "https://cdn.simpleicons.org/slack",
      },
      {
        name: "Microsoft Teams",
        logo: "/icons/microsoftTeams.png",
      },
    ],
  },
  {
    category: "Cloud Storage",
    items: [
      {
        name: "Google Drive",
        logo: "https://cdn.simpleicons.org/googledrive",
      },
      {
        name: "OneDrive",
        logo: "/icons/onedrive.png",
      },
      {
        name: "Dropbox",
        logo: "https://cdn.simpleicons.org/dropbox",
      },
      {
        name: "Box",
        logo: "https://cdn.simpleicons.org/box",
      },
      {
        name: "SharePoint",
        logo: "/icons/sharepoint.png",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        name: "GitHub",
        logo: "/icons/github.png",
      },
      {
        name: "GitLab",
        logo: "https://cdn.simpleicons.org/gitlab",
      },
      {
        name: "Jira",
        logo: "https://cdn.simpleicons.org/jira",
      },
      {
        name: "Linear",
        logo: "https://cdn.simpleicons.org/linear",
      },
    ],
  },
];

export default function SupportedIntegrationsSection() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Supported Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-400 text-xl">
            Connect to the tools your teams already use. Pre-built MCP
            connectors for popular enterprise systems.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {INTEGRATIONS.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.category}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-xl bg-black/40 py-3 text-gray-300"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

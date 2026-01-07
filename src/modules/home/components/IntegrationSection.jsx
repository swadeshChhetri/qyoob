// import { integrations } from "../data/integrations";

const IntegrationSection = () => {
  return (
    <section className="bg-black py-28">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Qyoob doesn&apos;t replace your systems. It connects them.
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-6xl text-xl leading-relaxed text-gray-400">
          Your agents plug into the tools your teams already use. Data stays
          where it is. Permissions stay intact.
          <br />
          No migrations, no duplication—just instant access across everything.
        </p>

        {/* Integrations Grid */}
        <div className="mt-20 mx-auto grid max-w-6xl grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/5 px-4 py-5 transition hover:bg-white/10"
            >
              {/* Logo */}
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-12 w-12 object-contain opacity-90"
                loading="lazy"
              />

              {/* Name */}
              <span className="max-w-full truncate text-sm font-medium text-gray-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;

// data/integrations.js
export const integrations = [
  {
    name: "Google Drive",
    logo: "https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg",
  },
  {
    name: "GitLab",
    logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
  },
  {
    name: "Asana",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/asana-icon.svg",
  },
  {
    name: "Microsoft SharePoint",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Microsoft_Office_SharePoint_%282019%E2%80%932025%29.svg",
  },
  {
    name: "Microsoft OneDrive",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/microsoft-onedrive.svg",
  },
  {
    name: "Microsoft Outlook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg",
  },
  {
    name: "Box",
    logo: "https://www.vectorlogo.zone/logos/box/box-icon.svg",
  },
  {
    name: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  },
  {
    name: "Zendesk",
    logo: "https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg",
  },
  {
    name: "Microsoft Teams",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/microsoft-teams.svg",
  },
  {
    name: "Gmail",
    logo: "https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg",
  },
  {
    name: "Confluence",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/confluence.svg",
  },
  {
    name: "Slack",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
  },
  {
    name: "Jira",
    logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
  },
  {
    name: "Salesforce",
    logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
  },
  {
    name: "Dropbox",
    logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg",
  },
  {
    name: "Notion",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/notion-icon.svg",
  },
  {
    name: "Linear",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/linear-icon.svg",
  },
];

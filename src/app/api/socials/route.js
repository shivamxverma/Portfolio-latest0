import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [githubRes, twitterRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/shivamxverma`, { next: { revalidate: 3600 } }).then(res => res.json()),
      fetch(`https://api.fxtwitter.com/Shivam_v99`, { next: { revalidate: 3600 } }).then(res => res.json())
    ]);

    const githubData = githubRes.status === "fulfilled" ? githubRes.value : {};
    const twitterData = twitterRes.status === "fulfilled" ? twitterRes.value?.user || {} : {};

    return NextResponse.json({
      github: {
        name: githubData.name || githubData.login || "Shivam Verma",
        username: githubData.login || "shivamxverma",
        avatar: githubData.avatar_url || "https://github.com/shivamxverma.png",
        bio: githubData.bio || "I work on AI, LLMs, and building developer tools on top of them",
        location: githubData.location || "India",
        stats: [
          { label: "Repositories", value: githubData.public_repos || 60 },
          { label: "Followers", value: githubData.followers || 180 }
        ]
      },
      twitter: {
        name: twitterData.name || "Shivam",
        username: twitterData.screen_name || "Shivam_v99",
        avatar: twitterData.avatar_url?.replace("_normal", "") || "https://github.com/shivamxverma.png",
        banner: twitterData.banner_url || "https://pbs.twimg.com/profile_banners/1186556526917324800/1757151975/1500x500",
        bio: twitterData.description || "Building the future with AI",
        location: twitterData.location || "India",
        stats: [
          { label: "Following", value: twitterData.following || 100 },
          { label: "Followers", value: twitterData.followers || 100 }
        ]
      },
      linkedin: {
        name: "Shivam Verma",
        username: "Building AI Agents",
        avatar: "https://github.com/shivamxverma.png",
        banner: "https://media.licdn.com/dms/image/v2/D5616AQHsUhEEUkcobw/profile-displaybackgroundimage-shrink_350_1400/B56ZzKNUp8IcAg-/0/1772919017837?e=1778716800&v=beta&t=3txh8G3KbnSs8-eaLxbnAs6iQtSbhQAXShVKjcVJ-rw",
        bio: "",
        location: "India",
        stats: [
          { label: "connections", value: "500+" }
        ]
      },
      discord: {
        name: "Shivam",
        username: "shivamverma9005",
        avatar: "https://github.com/shivamxverma.png",
        bio: "Always learning",
        location: "Online",
        stats: []
      },
      email: {
        name: "Drop an Email",
        username: "shivam.verma.dev00@gmail.com",
        avatar: "https://github.com/shivamxverma.png",
        bio: "Whether you have a question, a project idea, or just want to say hi, feel free to reach out!",
        location: "Inbox",
        stats: []
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

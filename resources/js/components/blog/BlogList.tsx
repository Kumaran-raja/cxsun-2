"use client"
import { BlogPost } from "@/pages/web/blogs";

interface BannerInfo {
  title: string;
  description: string;
  image: string;
}

interface BlogListProps {
  blogs: BlogPost[];
  banner: BannerInfo;
}
export const Blogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Smart Homes in Modern Construction",
    description: `
      <h2>The Future of Smart Homes in Modern Construction</h2>
      <p>
        The construction industry is evolving rapidly with the integration of smart home technologies.
        Modern homes are now designed for comfort, efficiency, and automation, enabling homeowners
        to control lighting, security, climate, and appliances from a single interface.
      </p>

      <h3>Advantages of Smart Homes</h3>
      <ul>
        <li><strong>Energy Efficiency:</strong> Automated lighting and HVAC systems reduce energy consumption.</li>
        <li><strong>Enhanced Security:</strong> Smart locks, cameras, and alarms for complete home safety.</li>
        <li><strong>Remote Management:</strong> Control and monitor your home from anywhere in the world.</li>
        <li><strong>Future-Ready Designs:</strong> Homes equipped for integration with AI and IoT devices.</li>
      </ul>

      <h3>Impact on the Construction Industry</h3>
      <p>
        Builders and developers are leveraging smart technologies to create high-value homes.
        This trend is transforming design standards, improving sustainability, and attracting tech-savvy buyers.
      </p>
    `,
    PostImage: "/assets/projects/project1.jpg",
    author: {
      name: "Ravi",
      avatar: "/assets/team/image.png",
    },
    date: "September 5, 2025",
    category: "Construction & Technology",
    tags: [
      "Smart Homes",
      "Construction Technology",
      "Automation",
      "Sustainable Living",
      "Future Homes",
    ],
    isComment: false,
  },
  {
    id: "2",
    title: "Top 5 Trends in Commercial Building Design for 2025",
    description: `
      <h2>Top 5 Trends in Commercial Building Design for 2025</h2>
      <p>
        Commercial construction is witnessing exciting trends as businesses demand functional, sustainable,
        and visually appealing spaces. From eco-friendly materials to flexible office layouts, the design landscape is shifting.
      </p>

      <h3>Key Commercial Construction Trends</h3>
      <ul>
        <li><strong>Green Buildings:</strong> Incorporating sustainable materials and energy-efficient designs.</li>
        <li><strong>Open Workspaces:</strong> Flexible layouts that encourage collaboration.</li>
        <li><strong>Smart Infrastructure:</strong> IoT-enabled systems for lighting, HVAC, and security.</li>
        <li><strong>Adaptive Reuse:</strong> Renovating old buildings for modern commercial needs.</li>
        <li><strong>Wellness-Oriented Design:</strong> Incorporating natural light, ventilation, and relaxation zones.</li>
      </ul>

      <h3>Benefits for Businesses & Tenants</h3>
      <p>
        These trends enhance productivity, reduce operational costs, and improve employee satisfaction while boosting the value of commercial properties.
      </p>
    `,
    PostImage: "/assets/projects/project2.jpg",
    author: {
      name: "Ananya",
      avatar: "/assets/team/image.png",
    },
    date: "September 12, 2025",
    category: "Commercial Construction",
    tags: [
      "Green Buildings",
      "Commercial Design",
      "Smart Infrastructure",
      "Workplace Trends",
      "Sustainability",
    ],
    isComment: false,
  },
  {
    id: "3",
    title: "Essential Tips for Planning Industrial Construction Projects",
    description: `
      <h2>Essential Tips for Planning Industrial Construction Projects</h2>
      <p>
        Industrial construction requires meticulous planning, efficient layouts, and strict adherence to safety standards.
        Proper project management ensures that factories, warehouses, and logistics hubs operate smoothly.
      </p>

      <h3>Planning Considerations</h3>
      <ul>
        <li><strong>Site Assessment:</strong> Evaluate terrain, utilities, and logistics access.</li>
        <li><strong>Regulatory Compliance:</strong> Follow local and international safety and building standards.</li>
        <li><strong>Workflow Optimization:</strong> Design layouts that streamline production and storage.</li>
        <li><strong>Material Selection:</strong> Durable and sustainable materials to withstand heavy use.</li>
      </ul>

      <h3>Benefits of Proper Planning</h3>
      <p>
        A well-planned industrial project reduces operational costs, ensures worker safety, and increases overall efficiency and productivity.
      </p>
    `,
    PostImage: "/assets/projects/project3.jpg",
    author: {
      name: "Karthik",
      avatar: "/assets/team/image.png",
    },
    date: "September 20, 2025",
    category: "Industrial Construction",
    tags: [
      "Industrial Projects",
      "Project Planning",
      "Construction Safety",
      "Warehouse Design",
      "Factories",
    ],
    isComment: false,
  },
];
function BlogList({ blogs, banner }: BlogListProps) {
  const categories = [...new Set(blogs.map((blog) => blog.category))];
  const tags = [...new Set(blogs.flatMap((blog) => blog.tags))];


const handleBlog = (id: string) => {
  window.location.assign(`/blogs/${id}`);
};


  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] w-full hidden md:block">
        <img
          src={banner.image}
          alt="Sample"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="md:w-2/3 px-5 lg:px-[10%] text-foreground space-y-4">
            <h1 className="text-2xl text-white lg:text-6xl font-bold animate__animated animate__fadeIn animate__fast">
              {banner.title}
            </h1>
            <p className="text-sm sm:text-md text-white lg:text-lg text-justify animate__animated animate__fadeIn animate__slow">
              {banner.description}
            </p>
          </div>
        </div>
      </div>

      {/* 📱 Simplified Banner for mobile */}
      <div className="block md:hidden text-foreground px-5 py-5 space-y-3 text-center">
        <h1 className="text-4xl font-bold">{banner.title}</h1>
        <p className="text-sm text-justify">{banner.description}</p>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-[70%_30%] gap-5 px-5 md:px-[10%]">
        {/* Blog List */}
        <div className="space-y-5 pt-20 md:pb-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlog(blog.id)}
              className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 p-3 border border-ring/30 rounded-md hover:shadow cursor-pointer transition"
            >
              <img
                src={blog.PostImage}
                alt={blog.title}
                loading="lazy"
                className="object-scale-down w-full h-full"
              />
              <div className="flex flex-col justify-between pr-4">
                <div>
                  <h2 className="text-xl font-bold line-clamp-2">
                    {blog.title}
                  </h2>
                  <div
                    className="text-sm line-clamp-2 md:line-clamp-3 mt-1 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground flex flex-wrap gap-2">
                  <span className="font-semibold">{blog.author.name}</span>
                  <span>{blog.date}</span>
                  <span className="bg-primary/10 px-2 rounded text-primary">
                    {blog.category}
                  </span>
                  {/* <span>👍 {blog.l}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:border-l py-20 lg:pl-5 border-ring/30">
          <hr className="lg:hidden border-ring/30" />
          {/* <GlobalSearch
            onSearchApi={""}
            onNavigate={function (path: string): void {
              throw new Error("Function not implemented.");
            }}
          /> */}

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-primary cursor-pointer">
                  • {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-foreground text-background px-2 py-1 rounded cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;

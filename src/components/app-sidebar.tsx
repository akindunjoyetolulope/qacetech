import * as React from "react";
import { Frame, Map, PieChart } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import logo from "@/assets/logo.svg";
import { NavSubscripts } from "./nav-subscript";

// This is sample data.
const data = {
  subscripts: [
    {
      name: "IBM",
      url: "#",
      icon: Frame,
    },
    {
      name: "Log Out",
      url: "#",
      icon: PieChart,
    },
  ],
  projects: [
    {
      name: "Nintendo",
      url: "/nintendo",
      icon: Frame,
    },
    {
      name: "IBM",
      url: "#",
      icon: PieChart,
    },
    {
      name: "The Walt Disney Company",
      url: "#",
      icon: Map,
    },
    {
      name: "Louis Vuitton",
      url: "#",
      icon: Map,
    },
    {
      name: "Pizza Hut",
      url: "#",
      icon: Map,
    },
    {
      name: "MasterCard",
      url: "#",
      icon: Map,
    },
    {
      name: "Bank of America",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center shrink-0 py-4 px-4">
          <img src={logo} className="w-[153px] h-[63px]" alt="qacetech logo" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavSubscripts subscripts={data.subscripts} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

export function NavSubscripts({
  subscripts,
}: {
  subscripts: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { pathname } = useLocation();
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu className="text-white mt-[16px]">
        {subscripts.map((item) => (
          <SidebarMenuItem className="py-[4px]" key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.url}
              onClick={() => {
                isMobile && toggleSidebar();
              }}
            >
              <NavLink to={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

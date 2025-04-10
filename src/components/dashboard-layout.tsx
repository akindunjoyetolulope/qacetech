import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "./ui/input";
import { ChevronDown, Search } from "lucide-react";
import { Outlet } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import profile from "@/assets/profile.svg";
import branch from "@/assets/branch.svg";
import notification from "@/assets/notification.svg";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex flex-col lg:flex-row justify-between p-[18px] shrink-0 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 block lg:hidden" />

            <Input
              icon={<Search strokeWidth={1} />}
              placeholder="Search Parameter & Params"
              className="min-w-[360px]"
            />
          </div>
          <div className="flex gap-2 flex-col lg:flex-row">
            <div className="flex items-center gap-2 text-[14px]">
              <p>Thur, Dec 11, 2024 15:32</p>
              <p>
                <span className="font-medium"> Business Date:</span> Thur, Dec
                11, 2024 15:32
              </p>
            </div>
            <div className="flex items-center gap-2 text-[14px]">
              <div className="flex justify-center items-center rounded-full p-[8px] bg-[#F4F4F4]">
                <img
                  src={notification}
                  className="w-[20px] h-[20px]"
                  alt="notification"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex gap-2 text-[14px] cursor-pointer justify-center items-center rounded-[80px] p-[8px] bg-[#F4F4F4]">
                    <img
                      src={branch}
                      className="w-[20px] h-[20px]"
                      alt="branch"
                    />
                    Ikoyi Branch <ChevronDown width={20} height={20} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex gap-2 text-[14px] cursor-pointer justify-center items-center rounded-[80px] p-[8px] bg-[#F4F4F4]">
                    <img
                      src={profile}
                      className="w-[20px] h-[20px]"
                      alt="profile"
                    />
                    Eric Alawoya <ChevronDown width={20} height={20} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Frame, User } from "lucide-react";

export default function AddNintendo() {
  return (
    <div className="flex flex-col gap-4 py-4 px-4 lg:px-6 md:gap-6 md:py-6">
      <div>
        <h3 className="text-[32px] font-semibold">Nintendo</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/nintendo">
                <div className="flex items-center gap-2">
                  <Frame width={16} height={16} /> Dashboard
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <div className="flex items-center gap-2">
                  <User width={16} height={16} /> Nintendo
                </div>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center">
        <Card className="min-w-[968px] p-[40px]">
          <form>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="designer">Web Designer</Label>
                <Input id="designer" required placeholder="Enter asset name" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="coordinator">Marketing Coordinator</Label>
                </div>
                <Textarea
                  id="coordinator"
                  placeholder="Enter asset description"
                />
              </div>
              <div className="flex gap-2">
                <div className="grid gap-2"></div>
                <div></div>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

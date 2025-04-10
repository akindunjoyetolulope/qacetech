import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import user from "@/assets/user.svg";
import { useNavigate } from "react-router-dom";

export function SectionCards() {
  const navigate = useNavigate();
  return (
    <div className="@xl/main:grid-cols-2 @5xl/main:grid-cols-3 grid grid-cols-1 gap-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card  ">
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <Card
            key={index}
            className="group @container/card cursor-pointer hover:bg-[#F9E9E9] hover:border-[#A93636]"
            onClick={() => navigate("/nintendo/add")}
          >
            <CardHeader className="relative">
              <div className="flex justify-center items-center rounded-full w-[48px] h-[48px] bg-[#E8E8E8] group-hover:bg-[#F9E9E9] group-hover:transition group-hover:duration-200">
                <img src={user} alt="React logo" />
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <p className="text-[18px] font-semibold">Marketing Coordinator</p>
              <div className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}

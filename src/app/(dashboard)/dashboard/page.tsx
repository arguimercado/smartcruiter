"use client";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/data/constants/routes";
import { PhoneCall, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import PreviousInterviewGrid from "./_components/PreviousInterviewGrid";

const DashboardPage = () => {

  const router = useRouter();

  const handleCreateInterview = () => {
    router.push(ROUTES.INTERVIEW_CREATE)
  }
  return(
    <>
      <h2 className="text-2xl font-bold mb-4">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="card-button" onClick={handleCreateInterview}>
          <VideoIcon className="w-6 h-6 mr-2 text-primary-200" />
          <h4 className="text-base font-bold">Create New Interview</h4>
          <p className="text-sm text-gray-500">
            Create AI interviews and schedule them with candidates.
          </p>
        </Card>
         <Card className="card-button">
          <PhoneCall className="w-6 h-6 mr-2 text-primary-200" />
          <h4 className="text-base font-bold">Create Phone Screening Call</h4>
          <p className="text-sm text-gray-500">
            Schedule phone screening calls with candidates to assess their fit.
          </p>
        </Card>
      </div>
      <div className="w-full mt-8 flex-col text-neutral-400">
        <h1 className="text-2xl font-bold pb-2 border-b border-gray-200">Previous Created Interview</h1>
        <Card className="mt-4 card-border">
          <PreviousInterviewGrid />
        </Card>
      </div>
    </>
  )
}

export default DashboardPage;
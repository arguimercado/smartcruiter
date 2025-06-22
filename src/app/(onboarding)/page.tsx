import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChartColumn, LucideClock, User2Icon } from "lucide-react";
import Link from "next/link";

import React from "react";
import Video from "./_components/Video";

const SectionPartComponent = ({
   id,
   children,
   className,
}: {
   id: string;
   children: React.ReactNode;
   className?: string;
}) => (
   <section
      id={id}
      className={cn(
         "py-16 md:py-24 flex items-center justify-center",
         className
      )}
   >
      <div className="container px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {children}
         </div>
      </div>
   </section>
);

const HeaderSection = ({
   title,
   description,
}: {
   title?: string;
   description?: string;
}) => (
   <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
         {title}
      </h2>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed">
         {description}
      </p>
   </div>
);

const Home = () => {
   return (
      <div>
         <section className="py-20 flex items-center justify-center w-full md:py-28 grad-primary hero-background">
            <div className="container px-4 md:px-6">
               <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="flex flex-col justify-center space-y-4">
                     <div className="space-y-2">
                        <h1 className="text-3xl text-secondary-foreground-100  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                           AI-Powered{" "}
                           <span className="text-primary-200 text-shadow-2xs text-shadow_dark">
                              Interview Assistant
                           </span>{" "}
                           for Modern Recruitment
                        </h1>
                        <p className="text-primary-100 text-sm md:text-base leading-relaxed">
                           Let our AI voice agent handle candidate interviews
                           while you focus on selecting the perfect hire. Our
                           platform leverages advanced AI technology to conduct
                           efficient and effective interviews, ensuring you find
                           the best candidates for your team. With features like
                           automated scheduling, intelligent candidate
                           evaluation, and real-time feedback, we make your
                           hiring process smarter, faster, and fairer
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                           <Button
                              className="!bg-secondary-100 text-secondary-foreground-100"
                              asChild
                           >
                              <Link href="/demo">Request a Demo</Link>
                           </Button>
                        </div>
                     </div>
                  </div>
                  <div className="mx-auto lg:mx-0 relative">
                     <Video />
                  </div>
               </div>
            </div>
         </section>
         <SectionPartComponent id="features" className="bg-white">
            <HeaderSection
               title="Streamline Your Hiring Process"
               description=" Our AI interview assistant simplifies the recruitment process
                  by automating scheduling, conducting interviews, and providing
                  real-time feedback. Focus on what matters most—finding the
                  right talent for your organization."
            />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
               <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <LucideClock className="h-12 w-12 text-primary-200" />
                  <h3 className="text-xl font-bold">Save Time</h3>
                  <p>
                     Automate scheduling and interview processes to reduce time
                     spent on administrative tasks.
                  </p>
               </div>
               <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <ChartColumn className="h-12 w-12 text-primary-200" />
                  <h3 className="text-xl font-bold">Data Driven Insights</h3>
                  <p>
                     Leverage AI to analyze candidate responses and provide
                     data-driven insights for better hiring decisions.
                  </p>
               </div>
               <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <User2Icon className="h-12 w-12 text-primary-200" />

                  <h3 className="text-xl font-bold">Reduce Bias in Hiring</h3>
                  <p>
                     Our AI assistant helps minimize unconscious bias by
                     standardizing interview questions and evaluations, ensuring
                     a fairer hiring process.
                  </p>
               </div>
            </div>
         </SectionPartComponent>
         <SectionPartComponent id="how-it-works">
            <HeaderSection
               title="How It Works"
               description="Our AI interview assistant is designed to simplify the recruitment process. Here's how it works:"
            />
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
               <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                     <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Create Interview</h3>
                  <p className="text-center text-gray-500">
                     Set up your interview by defining the role, skills
                     required, and preferred interview format. Our AI will guide
                     you through the process.
                  </p>
               </div>
               <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                     <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Share Links</h3>
                  <p className="text-center text-gray-500">
                     Share the interview link with candidates. They can join the
                     interview at their convenience, ensuring flexibility and
                     ease of access.
                  </p>
               </div>

               <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                     <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Review Results</h3>
                  <p className="text-center text-gray-500">
                     After the interview, our AI assistant provides a detailed
                     analysis of candidate responses, highlighting strengths and
                     areas for improvement. You can also access recorded
                     sessions for further review.
                  </p>
               </div>
            </div>
         </SectionPartComponent>
         <SectionPartComponent id="get-started" className="bg-white">
            <HeaderSection
               title="Get Started Today"
               description="Join hundreds of companies already using AICruiter to find the best talent."
            />
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
               <Button className="btn" asChild>
                  <Link href="/demo">Request a Demo</Link>
               </Button>
            </div>
         </SectionPartComponent>
      </div>
   );
};

export default Home;

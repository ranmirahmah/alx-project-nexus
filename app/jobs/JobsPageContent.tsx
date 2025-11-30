"use client";

import Filter, { JobsData } from "@/components/jobs/Herojobs/Filter";
import Herojobs from "@/components/jobs/Herojobs/Herojobs";
import PageLayout from "@/components/layout/PageLayout";
import { useJobStore } from "@/store/useJobStore";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const JobsPageContent = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const getJobsByCategory = useJobStore((state) => state.getJobsByCategory);

  const fetchedJobs: JobsData = useMemo(() => {
    if (!categoryId) return [];
    const jobs = getJobsByCategory(categoryId);
    return jobs;
  }, [categoryId, getJobsByCategory]);

  return (
    <PageLayout>
      <Herojobs />
      <Filter jobs={fetchedJobs} />
    </PageLayout>
  );
};

export default JobsPageContent;

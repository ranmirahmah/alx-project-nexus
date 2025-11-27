"use client";

import Filter, { JobsData } from "@/components/jobs/Herojobs/Filter";
import Herojobs from "@/components/jobs/Herojobs/Herojobs";
import PageLayout from "@/components/layout/PageLayout";
import { useJobStore } from "@/store/useJobStore";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const JobsPage = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  // fetch function from the store
  const getJobsByCategory = useJobStore((state) => state.getJobsByCategory);

  // derive fetchedJobs without using setState
  const fetchedJobs: JobsData = useMemo(() => {
    if (!categoryId) return [];
    const jobs = getJobsByCategory(categoryId);
    console.log("Category ID:", categoryId);
    console.log("Fetched Jobs:", jobs);
    return jobs;
  }, [categoryId, getJobsByCategory]);

  return (
    <PageLayout>
      <Herojobs />
      <Filter jobs={fetchedJobs} />
    </PageLayout>
  );
};

export default JobsPage;

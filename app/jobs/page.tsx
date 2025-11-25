
import Filter from '@/components/jobs/Herojobs/Filter'
import Herojobs from '@/components/jobs/Herojobs/Herojobs'
import PageLayout from '@/components/layout/PageLayout'
import React from 'react'

const JobsPage = () => {
  return (
    <PageLayout>
      <Herojobs/>
      <Filter/>
    </PageLayout>
  )
}

export default JobsPage

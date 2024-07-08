import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Tab {
  value: string
  text: string
  content: React.ReactNode
}

interface Props {
  tab1: Tab
  tab2: Tab
}

const CommonTabs = ({ tab1, tab2 }: Props) => {
  return (
    <Tabs defaultValue={tab1.value} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className="inline-flex items-center justify-center" value={tab1.value}>
          {tab1.text}
        </TabsTrigger>
        <TabsTrigger className="inline-flex items-center justify-center" value={tab2.value}>
          {tab2.text}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={tab1.value}>{tab1.content}</TabsContent>
      <TabsContent value={tab2.value}>{tab2.content}</TabsContent>
    </Tabs>
  )
}

export default CommonTabs

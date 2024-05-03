import SKILLS from '@/data/skills'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Skills</h2>

      {SKILLS.map((item, id) => {
        return (
          <div key={id}>
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <div className="mb-10 flex flex-wrap gap-5">
              {item.skills.map((skill, id) => {
                return (
                  <TooltipProvider key={id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <skill.icon className="h-8 w-8" title="" />
                      </TooltipTrigger>
                      <TooltipContent>{skill.skill}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

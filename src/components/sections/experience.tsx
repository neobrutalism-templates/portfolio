import PAST_ROLES from '@/data/experience'
import { Building2, Briefcase, Users, Lightbulb, Rocket, Plane } from 'lucide-react'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role, id) => {
        // Choose icon based on company
        let Icon = Building2 // default icon
        if (role.company === 'the LEGO Group') Icon = Building2
        else if (role.company === 'Applied') Icon = Briefcase
        else if (role.company === 'Bud') Icon = Users
        else if (role.company === 'Collectively') Icon = Lightbulb
        else if (role.company === 'Qubit') Icon = Rocket
        else if (role.company === 'Travelsys') Icon = Plane

        return (
          <div className="mb-8" key={id}>
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              <h3 className="text-lg font-heading sm:text-xl">
                {role.role} @ {role.company}
              </h3>
            </div>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <div className="whitespace-pre-line list-disc pl-4">{role.description}</div>
          </div>
        )
      })}
    </div>
  )
}

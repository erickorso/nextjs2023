import {
    ArrowPathIcon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon
  } from '@heroicons/react/24/outline'

export const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: ArrowPathIcon,
    },
  ]
  export const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  export const resources = [
    {
      name: 'useCallback',
      description: 'https://www.youtube.com/watch?v=6ruYpcCSMOg',
      href: '/hooks/callback',
      icon: LifebuoyIcon,
    },
    {
      name: 'useReducer',
      description: 'https://www.youtube.com/watch?v=0xgErk7grSM',
      href: '/hooks/reducer',
      icon: BookmarkSquareIcon,
    },
    {
      name: 'useRef',
      description: 'https://www.youtube.com/watch?v=KzOxmCg8X3k',
      href: '/hooks/ref',
      icon: CalendarIcon,
    },
    { name:'useContext',
      description: 'https://www.youtube.com/watch?v=J-sphMQwZHA',
      href: '/hooks/context',
      icon: ShieldCheckIcon
    },
  ]
  export const recentTests = [
    { id: 1, name: 'AutoComplete', href: '/test' },
    { id: 2, name: 'Kanban', href: '/test/vanhack' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
  ]
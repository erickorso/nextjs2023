import { Popover } from '@headlessui/react'
import Nav, { NavMobile } from '@/components/nav'

export default function MainHeader() {
    return (
        <Popover className="relative bg-white">
            <Nav />
            <NavMobile />
        </Popover>
    )
}

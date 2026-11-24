import { PhoneFrame } from './DeviceFrame'

// A closed deck of phone screens that fans out when the parent `.group` is hovered or focused.
// First image is the centre card (the one visible at rest); the next two sit behind it.
const EASE = '[transition-timing-function:cubic-bezier(.2,.9,.3,1.15)]'
const BASE = `absolute bottom-0 left-1/2 w-32 origin-bottom transition-transform duration-500 motion-reduce:transition-none ${EASE}`

export function PhoneDeck({ images, name }: { images: string[]; name: string }) {
  const [centre, left, right] = images
  return (
    <div className="relative h-full w-full">
      {left && (
        <div
          aria-hidden="true"
          className={`${BASE} -translate-x-[62%] -rotate-3 group-hover:-translate-x-[150%] group-hover:-rotate-[16deg] group-focus-within:-translate-x-[150%] group-focus-within:-rotate-[16deg]`}
        >
          <PhoneFrame src={left} alt="" />
        </div>
      )}
      {right && (
        <div
          aria-hidden="true"
          className={`${BASE} -translate-x-[38%] rotate-3 group-hover:translate-x-[50%] group-hover:rotate-[16deg] group-focus-within:translate-x-[50%] group-focus-within:rotate-[16deg]`}
        >
          <PhoneFrame src={right} alt="" />
        </div>
      )}
      <div className={`${BASE} z-10 -translate-x-1/2 group-hover:-translate-y-2 group-focus-within:-translate-y-2`}>
        <PhoneFrame src={centre} alt={`${name} preview`} />
      </div>
    </div>
  )
}

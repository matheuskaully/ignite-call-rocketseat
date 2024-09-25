import ArrowRight02Icon from '@/assets/icons/arrow-right-02-stroke-rounded'

export default function ClaimUsernameForm() {
  return (
    <form
      action=""
      className="sm:grid-cols-form mt-1 grid grid-cols-[1fr] gap-2 rounded-md bg-zinc-900 p-4 shadow-shape"
    >
      <div className="flex items-center rounded-md bg-zinc-950 px-4 py-2 shadow-shape">
        <span className="text-zinc-500">ignite.com/</span>
        <input type="text" className="bg-transparent outline-none" />
      </div>
      <button className="flex items-center justify-center gap-2 rounded-md bg-emerald-500 p-2 font-alt font-medium shadow-shape">
        Reservar
        <ArrowRight02Icon className="size-5 text-zinc-100" />
      </button>
    </form>
  )
}

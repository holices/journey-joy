import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  openGuestsModal: () => void
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  openGuestsModal,
  openConfirmTripModal
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button onClick={openGuestsModal} type="button" className='flex gap-2 items-center flex-1'>
        <UserRoundPlus className='size-5 text-zinc-400' />
        { emailsToInvite.length > 0 ? (
          <span className='text-zinc-100'>
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : <span className='text-lg text-zinc-400 outline-none left-0'>Quem estará na viagem?</span> }
      </button>

      <div className='w-px h-6 bg-zinc-800' />

      <button onClick={openConfirmTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
        Confirmar viagem
        <ArrowRight className='size-5' />
      </button>
    </div>
  )
}
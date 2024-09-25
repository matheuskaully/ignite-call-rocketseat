import Image from 'next/image'
import appPreviewImg from '@/assets/app-preview.png'
import ClaimUsernameForm from '@/components/claim-username-form'

export default function Home() {
  return (
    <main className="ml-auto flex h-screen max-w-[calc(100vw-(100vw-1160px)/2)] items-center gap-24">
      <div className="max-w-[480px] space-y-6 px-2.5">
        <h1 className="font-alt text-5xl font-semibold sm:text-6xl">
          Agendamento descomplicado
        </h1>
        <p className="text-lg leading-relaxed text-zinc-500">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
        {/* <button className="flex items-center gap-2 rounded-md bg-[#DB4437] px-6 py-3 shadow-shape hover:brightness-75">
          <div>
            <GoogleIcon className="size-6 text-zinc-100" />
          </div>
          Criar conta com Google{' '}
        </button> */}
        <ClaimUsernameForm />
      </div>
      <div className="hidden overflow-hidden pr-2 sm:inline">
        <Image
          src={appPreviewImg}
          alt="Calendário simbolizando a aplicação"
          height={400}
          quality={100}
          priority
        />
      </div>
    </main>
  )
}

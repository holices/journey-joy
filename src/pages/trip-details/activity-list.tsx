import { CircleCheck, CircleDashed } from "lucide-react";

export function ActivityList() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>
        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleCheck className="size-5 text-lime-300" />
            <p className="text-zinc-100 text-md">Corrida de Kart</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">14:00h</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 19</span>
          <span className="text-xs text-zinc-500">Segunda-feira</span>
        </div>
        
        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleCheck className="size-5 text-lime-300" />
            <p className="text-zinc-100 text-md">Academia em grupo</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">08:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleCheck className="size-5 text-lime-300" />
            <p className="text-zinc-100 text-md">Almoço</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">12:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleCheck className="size-5 text-lime-300" />
            <p className="text-zinc-100 text-md">Gaming session</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">14:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleCheck className="size-5 text-lime-300" />
            <p className="text-zinc-100 text-md">Jantar</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">21:00h</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 20</span>
          <span className="text-xs text-zinc-500">Terça-feira</span>
        </div>
        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleCheck className="size-5 text-lime-300" />
            <p className="text-zinc-100 text-md">Academia em grupo</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">08:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleDashed className="size-5 text-zinc-400" />
            <p className="text-zinc-100 text-md">Almoço</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">12:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleDashed className="size-5 text-zinc-400" />
            <p className="text-zinc-100 text-md">Jantar</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">21:00h</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 21</span>
          <span className="text-xs text-zinc-500">Quarta-feira</span>
        </div>
        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleDashed className="size-5 text-zinc-400" />
            <p className="text-zinc-100 text-md">Churrasco</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">21:00h</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 22</span>
          <span className="text-xs text-zinc-500">Quinta-feira</span>
        </div>
        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleDashed className="size-5 text-zinc-400" />
            <p className="text-zinc-100 text-md">Academia em grupo</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">08:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleDashed className="size-5 text-zinc-400" />
            <p className="text-zinc-100 text-md">Almoço</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">12:00h</span>
          </div>
        </div>

        <div className="flex items-center px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl justify-between">
          <div className="flex gap-3 items-center">
            <CircleDashed className="size-5 text-zinc-400" />
            <p className="text-zinc-100 text-md">Jantar</p>
          </div>
          <div>
            <span className="text-sm text-zinc-400">21:00h</span>
          </div>
        </div>              
      </div>

      <div className="space-y-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 23</span>
          <span className="text-xs text-zinc-500">Sexta-feira</span>
        </div>
        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
      </div>
    </div>
  )
}
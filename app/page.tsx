'use client'

import { Button } from "@/components/ui/button";
import * as actions from '@/app/actions'

export default function Home() {
  return (
    <div>
      <form action={actions.signOut}>
        <Button type="submit" className="bg-slate-700">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit" className="bg-slate-700">Sign Out</Button>
      </form>
    </div>
  );
}

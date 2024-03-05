import { Button } from '@pb-test/shared';

export default async function Page() {
  return (
    <div className="bg-slate-600 h-screen w-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-6xl">PB POC</h1>
      <div>
        <Button>Shared button</Button>
      </div>
    </div>
  );
}

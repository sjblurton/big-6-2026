import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-1">
      <Button size="lg">Test Button Large</Button>
      <Button>Test Button Medium</Button>
      <Button size="sm">Test Button Small</Button>
      <Button size="xs">Test Button Extra Small</Button>
      <Button variant="outline">Test Button Outline</Button>
      <Button variant="destructive">Test Button Destructive</Button>
      <Button variant="link">Test Button Link</Button>
      <Button variant="ghost">Test Button Ghost</Button>
      <Button variant="secondary">Test Button Secondary</Button>
    </div>
  );
}

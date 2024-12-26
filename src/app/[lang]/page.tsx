import { getDictionary } from "../i18n/dictionary";


export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  const lang = (await params).lang
  const t = await (await getDictionary(lang)).homepage

  return (
      <main className="flex flex-col gap-8 row-start-2 items-center">
       <h1 className="text-6xl">{t.title}</h1>
       <h2 className="text-2xl">{t.description}</h2>
      </main>
      
  );
}

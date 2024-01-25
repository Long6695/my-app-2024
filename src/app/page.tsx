import ThemeSwitcher from '@/components/shared/theme-switcher'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitcher />
    </main>
  )
}

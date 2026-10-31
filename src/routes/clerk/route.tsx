/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { ClerkProvider } from '@clerk/react'
import { ExternalLink, Key } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ConfigDrawer } from '@/components/config-drawer'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'
import { Main } from '@/components/layout/main'
import { ThemeSwitch } from '@/components/theme-switch'

export const Route = createFileRoute('/clerk')({
  component: RouteComponent,
})

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function RouteComponent() {
  if (!PUBLISHABLE_KEY) {
    return <MissingClerkPubKey />
  }

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl='/clerk/sign-in'
      signInUrl='/clerk/sign-in'
      signUpUrl='/clerk/sign-up'
      signInFallbackRedirectUrl='/clerk/user-management'
      signUpFallbackRedirectUrl='/clerk/user-management'
    >
      <Outlet />
    </ClerkProvider>
  )
}

function MissingClerkPubKey() {
  const codeBlock =
    'bg-foreground/10 rounded-sm py-0.5 px-1 text-xs text-foreground font-bold'
  return (
    <AuthenticatedLayout>
      <div className='bg-backgroundh-16 flex justify-between p-4'>
        <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
        <div className='space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
        </div>
      </div>
      <Main className='flex flex-col items-center justify-start'>
        <div className='max-w-2xl'>
          <Alert>
            <Key className='size-4' />
            <AlertTitle>未找到可发布的密钥！</AlertTitle>
            <AlertDescription>
              <p className='text-balance'>
                你需要从 Clerk 生成可发布密钥，并将其放入 <code className={codeBlock}>.env</code> 文件中。
              </p>
            </AlertDescription>
          </Alert>

          <h1 className='mt-4 text-2xl font-bold'>设置你的 Clerk API 密钥</h1>
          <div className='mt-4 flex flex-col gap-y-4 text-foreground/75'>
            <ol className='list-inside list-decimal space-y-1.5'>
              <li>
                在{' '}
                <a
                  href='https://go.clerk.com/GttUAaK'
                  target='_blank'
                  className='underline decoration-dashed underline-offset-4 hover:decoration-solid'
                >
                  Clerk
                  <sup>
                    <ExternalLink className='inline-block size-4' />
                  </sup>
                </a>{' '}
                控制台中，进入 API 密钥页面。
              </li>
              <li>
                在 <strong>快速复制</strong> 区域，复制你的 Clerk 可发布密钥。
              </li>
              <li>
                重命名 <code className={codeBlock}>.env.example</code> 为{' '}
                <code className={codeBlock}>.env</code>
              </li>
              <li>
                将密钥粘贴到你的 <code className={codeBlock}>.env</code>{' '}
                文件中。
              </li>
            </ol>
            <p>最终结果应类似于以下内容：</p>

            <div className='@container space-y-2 rounded-md bg-slate-800 px-3 py-3 text-sm text-slate-200'>
              <span className='ps-1'>.env</span>
              <pre className='overflow-auto overscroll-x-contain rounded bg-slate-950 px-2 py-1 text-xs'>
                <code>
                  <span className='before:text-slate-400 md:before:pe-2 md:before:content-["1."]'>
                    VITE_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
                  </span>
                </code>
              </pre>
            </div>
          </div>

          <Separator className='my-4 w-full' />

          <Alert>
            <AlertTitle>Clerk 集成是可选的</AlertTitle>
            <AlertDescription>
              <p className='text-balance'>
                Clerk 集成完全位于{' '}
                <code className={codeBlock}>src/routes/clerk</code>。如果你计划将 Clerk 作为认证服务，可以将{' '}
                <code className={codeBlock}>ClerkProvider</code> 放在根路由。
              </p>
              <p>
                不过，如果你不打算使用 Clerk，可以安全地删除该目录及相关依赖{' '}
                <code className={codeBlock}>@clerk/react</code>.
              </p>
              <p className='mt-2 text-sm'>
                此设置采用模块化设计，不会影响应用程序的其余部分。
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </Main>
    </AuthenticatedLayout>
  )
}

import { ContentSection } from '../components/content-section'
import { ProfileForm } from './profile-form'

export function SettingsProfile() {
  return (
    <ContentSection
      title='个人资料'
      desc='这是其他人在站点上看到你的样子。'
    >
      <ProfileForm />
    </ContentSection>
  )
}

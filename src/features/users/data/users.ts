import { getName, getPhoneNumber } from '@/lib/chinese-names'
import type { User } from './schema'

// 确定性生成 500 个中文用户，保证每次运行数据一致。
const STATUSES = ['active', 'inactive', 'invited', 'suspended'] as const
const ROLES = ['superadmin', 'admin', 'cashier', 'manager'] as const

export const users: User[] = Array.from({ length: 500 }, (_, i) => {
  const name = getName(i)
  const seq = 1000 + i
  return {
    id: 'USR-' + (1000 + i),
    firstName: name.surname,
    lastName: name.given,
    username: name.py + seq,
    email: name.py + seq + '@example.com',
    phoneNumber: getPhoneNumber(i),
    status: STATUSES[i % STATUSES.length],
    role: ROLES[i % ROLES.length],
    createdAt: new Date(2023, i % 12, ((i * 7) % 27) + 1),
    updatedAt: new Date(2024, i % 12, ((i * 13) % 27) + 1),
  }
})

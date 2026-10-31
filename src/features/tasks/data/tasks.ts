import { getName } from '@/lib/chinese-names'
import type { Task } from './schema'

// 确定性生成 100 个中文任务，保证每次运行数据一致。
const STATUSES = ['backlog', 'todo', 'in progress', 'done', 'canceled'] as const
const LABELS = ['bug', 'feature', 'documentation'] as const
const PRIORITIES = ['low', 'medium', 'high'] as const

const TITLES = [
  '优化首页加载速度',
  '修复登录页表单校验',
  '梳理用户权限体系',
  '重构订单导出逻辑',
  '升级依赖到最新版本',
  '编写接口自动化测试',
  '优化数据库查询性能',
  '设计新版仪表盘',
  '整理产品需求文档',
  '修复消息推送延迟',
  '完善多语言支持',
  '调整移动端布局',
  '接入第三方支付',
  '清理冗余代码',
  '制作运营数据报表',
  '优化搜索结果排序',
  '修复日历组件错位',
  '新增批量导入功能',
  '重构通知中心',
  '升级日志采集方案',
  '绘制用户增长曲线',
  '压缩静态资源体积',
  '修复时区显示错误',
  '梳理错误码规范',
  '优化图片懒加载',
  '编写部署脚本',
  '设计权限申请流程',
  '修复导出中文乱码',
  '改进表单交互体验',
  '搭建监控告警系统',
]

const DESCRIPTIONS = [
  '该任务需要评估当前实现并给出优化方案，目标是提升系统稳定性与用户体验。',
  '涉及前后端联调，请先与相关负责人沟通后再动手修改。',
  '存在多处边界情况未处理，建议补充单测覆盖常见异常路径。',
  '上线前需在预发环境验证，确认无回归后再合并到主干。',
  '属于技术债清理，优先处理影响较大的模块。',
  '需要补充产品侧说明，避免后续理解偏差。',
  '建议拆分为多个小任务逐步推进，降低单次改动风险。',
  '涉及数据库变更，请同步更新迁移脚本与文档。',
  '需要关注性能瓶颈，优先解决高耗时接口。',
  '该问题在弱网环境下更容易复现，请重点测试。',
  '需要与设计确认交互细节后再实现。',
  '属于体验优化，不阻塞主流程但能明显提升满意度。',
  '请参考既有规范编写代码，保持风格一致。',
  '涉及第三方服务，注意处理超时与重试。',
  '需要补充埋点，便于后续数据分析。',
  '建议增加缓存以降低重复计算开销。',
  '注意中文字符编码，避免导出时出现乱码。',
  '需要在多浏览器下验证兼容性。',
  '属于安全相关，务必遵循最小权限原则。',
  '请于本周内给出排期并同步至项目看板。',
]

export const tasks: Task[] = Array.from({ length: 100 }, (_, i) => {
  const name = getName(i)
  const title = TITLES[i % TITLES.length]
  const description = DESCRIPTIONS[i % DESCRIPTIONS.length]
  return {
    id: 'TASK-' + (1000 + i),
    title,
    status: STATUSES[i % STATUSES.length],
    label: LABELS[i % LABELS.length],
    priority: PRIORITIES[i % PRIORITIES.length],
    createdAt: new Date(2023, i % 12, ((i * 5) % 27) + 1),
    updatedAt: new Date(2024, i % 12, ((i * 11) % 27) + 1),
    assignee: name.full,
    description,
    dueDate: new Date(2024, (i * 3) % 12, ((i * 17) % 27) + 1),
  }
})

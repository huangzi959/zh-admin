// 中文姓名数据（带拼音，用于生成账号/邮箱）。确定性生成，保证每次运行结果一致。
type NameItem = { han: string; py: string }

export const SURNAMES: NameItem[] = [
  { han: '王', py: 'wang' },
  { han: '李', py: 'li' },
  { han: '张', py: 'zhang' },
  { han: '刘', py: 'liu' },
  { han: '陈', py: 'chen' },
  { han: '杨', py: 'yang' },
  { han: '赵', py: 'zhao' },
  { han: '黄', py: 'huang' },
  { han: '周', py: 'zhou' },
  { han: '吴', py: 'wu' },
  { han: '徐', py: 'xu' },
  { han: '孙', py: 'sun' },
  { han: '胡', py: 'hu' },
  { han: '朱', py: 'zhu' },
  { han: '高', py: 'gao' },
  { han: '林', py: 'lin' },
  { han: '何', py: 'he' },
  { han: '郭', py: 'guo' },
  { han: '马', py: 'ma' },
  { han: '罗', py: 'luo' },
  { han: '梁', py: 'liang' },
  { han: '宋', py: 'song' },
  { han: '郑', py: 'zheng' },
  { han: '谢', py: 'xie' },
  { han: '韩', py: 'han' },
  { han: '唐', py: 'tang' },
  { han: '冯', py: 'feng' },
  { han: '于', py: 'yu' },
  { han: '董', py: 'dong' },
  { han: '程', py: 'cheng' },
]

export const GIVEN_NAMES: NameItem[] = [
  { han: '伟', py: 'wei' },
  { han: '芳', py: 'fang' },
  { han: '娜', py: 'na' },
  { han: '敏', py: 'min' },
  { han: '静', py: 'jing' },
  { han: '丽', py: 'li' },
  { han: '强', py: 'qiang' },
  { han: '磊', py: 'lei' },
  { han: '军', py: 'jun' },
  { han: '洋', py: 'yang' },
  { han: '勇', py: 'yong' },
  { han: '艳', py: 'yan' },
  { han: '杰', py: 'jie' },
  { han: '娟', py: 'juan' },
  { han: '涛', py: 'tao' },
  { han: '明', py: 'ming' },
  { han: '超', py: 'chao' },
  { han: '霞', py: 'xia' },
  { han: '平', py: 'ping' },
  { han: '刚', py: 'gang' },
  { han: '辉', py: 'hui' },
  { han: '婷', py: 'ting' },
  { han: '雪', py: 'xue' },
  { han: '欣', py: 'xin' },
  { han: '宇', py: 'yu' },
  { han: '浩然', py: 'haoran' },
  { han: '子轩', py: 'zixuan' },
  { han: '梓涵', py: 'zihan' },
  { han: '思琪', py: 'siqi' },
  { han: '雨欣', py: 'yuxin' },
]

export type GeneratedName = {
  surname: string
  given: string
  full: string
  py: string
}

// 根据索引确定性地生成一个中文姓名（姓与名取自不同步长，尽量避免重复）。
export function getName(index: number): GeneratedName {
  const sur = SURNAMES[index % SURNAMES.length]
  const giv = GIVEN_NAMES[(index * 7 + 3) % GIVEN_NAMES.length]
  return {
    surname: sur.han,
    given: giv.han,
    full: sur.han + giv.han,
    py: sur.py + giv.py,
  }
}

const PHONE_PREFIXES = [
  '138',
  '139',
  '136',
  '135',
  '137',
  '188',
  '186',
  '159',
  '150',
  '151',
]

// 根据索引生成一个合法的中国手机号（11 位）。
export function getPhoneNumber(index: number): string {
  const prefix = PHONE_PREFIXES[index % PHONE_PREFIXES.length]
  const tail = 10000000 + ((index * 9876543) % 90000000)
  return prefix + String(tail)
}

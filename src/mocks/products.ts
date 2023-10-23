import type { Product } from '@/types/product'

const products: Product[] = [
  {
    id: 1,
    title: 'AI 모델링',
    content: "AI를 통해 만들어질 '누구나 행복한 세상'을 기대하며 투자하고 연구",
  },
  {
    id: 2,
    title: 'AI 학습데이터',
    content:
      '인공지능이 학습할 수 있도록 원본데이터에 라벨링한 데이터로 인공지능 학습데이터 구축',
  },
  {
    id: 3,
    title: '빅데이터분석',
    content: "정형/비정형 데이터의 네트워크 관계를 '다차원', '실시간'으로 분석",
  },
]

export default products

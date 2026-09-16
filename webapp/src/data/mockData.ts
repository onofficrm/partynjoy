import { StoryCase, NewsPost } from '../types';
import boards from './boards.json';

export const STORY_CASES: StoryCase[] = boards.stories as StoryCase[];
export const NEWS_POSTS: NewsPost[] = boards.news as NewsPost[];

export const SITE = {
  brand: '김포개인회생',
  phone: '0503-6982-1000',
  phoneTel: '050369821000',
  kakao: 'https://pf.kakao.com/_tZbTn/chat',
  court: '인천지방법원 본원',
} as const;
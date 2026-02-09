# 빛마루 마케팅 랜딩페이지

블로그 기자단 포스팅 상품을 소개하는 전환율 중심의 브릿지 랜딩페이지입니다.

## 빠른 시작

```bash
# 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

개발 서버: http://localhost:3000

---

## 📝 변경해야 할 값 (Config)

모든 텍스트, 링크, 패키지 정보는 **한 곳**에서 관리됩니다:

```
src/config/landing.ts
```

### 크몽 링크 변경
```typescript
// src/config/landing.ts
export const siteConfig = {
  kmongUrl: "https://kmong.com/gig/638867", // ← 여기 변경
  // ...
};
```

### 패키지/가격 변경
```typescript
// src/config/landing.ts
export const packages = {
  items: [
    {
      name: "STANDARD",
      price: "10,000원",      // ← 여기 변경
      charCount: "300~500자", // ← 여기 변경
      // ...
    },
    // ...
  ],
};
```

### SEO/도메인 변경
```typescript
// src/config/landing.ts
seo: {
  title: "빛마루 마케팅 | 블로그 기자단 포스팅 운영",
  description: "...",
  url: "https://your-domain.com", // ← 배포 후 변경
},
```

---

## 🖼️ Placeholder 이미지 교체

### 1. 포스팅 구성 예시
`VisualEvidence.tsx` 컴포넌트에서 첫 번째 카드

**교체 방법:**
1. 이미지를 `public/images/posting-example.png`로 저장
2. `src/config/landing.ts`의 `visualEvidence.items[0]`을 수정:
```typescript
{
  type: "image",
  title: "포스팅 구성 예시",
  imageSrc: "/images/posting-example.png", // placeholder: false로 변경
  caption: "실제 발행 포스팅 레이아웃 예시",
}
```
3. `VisualEvidence.tsx`에서 이미지 렌더링 로직 추가

### 2. 리포트/정리 예시
동일한 방식으로 세 번째 카드 교체

---

## 🌐 OG 이미지 확인

### 로컬 확인
```
public/og.png (1200x630)
```

### 배포 후 확인
1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### OG 이미지 교체
1. 새 이미지를 `public/og.png`로 저장 (1200x630px 권장)
2. 캐시 무효화를 위해 `robots.txt` 또는 Debugger 도구 사용

---

## 📊 전환 체크리스트

배포 전 확인 사항:

### 모바일 (최우선)
- [ ] 상단 Sticky Bar 노출 확인
- [ ] 하단 CTA 버튼 터치 영역 충분한지
- [ ] 패키지 카드 스크롤 원활한지
- [ ] FAQ 아코디언 터치 반응

### CTA 동작
- [ ] 모든 "크몽에서 구매" 버튼 → 크몽 링크 (새 탭)
- [ ] 모든 "크몽에서 문의" 버튼 → 크몽 링크 (새 탭)
- [ ] 패키지별 버튼 동작 확인

### 전환 포인트
- [ ] 10초 요약 카드 "한눈에" 이해되는지
- [ ] 패키지 선택 → 10초 이내 결정 가능한지
- [ ] FAQ → 불안 해소되는지

### 트래킹
- [ ] 개발자 도구에서 `window.dataLayer` 확인
- [ ] CTA 클릭 시 이벤트 기록 확인

---

## 📁 파일 구조

```
bitmaru-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # 레이아웃 + SEO 메타
│   │   ├── page.tsx        # 메인 페이지
│   │   └── globals.css     # 전역 스타일
│   ├── components/
│   │   └── sections/       # 11개 섹션 컴포넌트
│   │       ├── TopStickyBar.tsx
│   │       ├── Hero.tsx
│   │       ├── QuickSummary.tsx
│   │       ├── VisualEvidence.tsx
│   │       ├── CustomerPainPoints.tsx
│   │       ├── Process.tsx
│   │       ├── Packages.tsx
│   │       ├── TrustElements.tsx
│   │       ├── FAQ.tsx
│   │       ├── FinalCTA.tsx
│   │       └── MobileBottomCTA.tsx
│   ├── config/
│   │   └── landing.ts      # ⭐ 모든 텍스트/링크 관리
│   └── lib/
│       └── tracking.ts     # 트래킹 유틸리티
├── public/
│   ├── og.png              # OG 이미지
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

---

## 🔧 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Noto Sans KR (Google Fonts)

---

## 📌 참고 사항

- 이 랜딩페이지는 크몽 상품 페이지로 유도하는 **브릿지 페이지**입니다
- 상품 정보는 크몽 페이지(https://kmong.com/gig/638867)에서 추출했습니다
- 크몽 상품 정보가 변경되면 `src/config/landing.ts`를 업데이트하세요
- 과장/보장 표현은 의도적으로 배제되었습니다

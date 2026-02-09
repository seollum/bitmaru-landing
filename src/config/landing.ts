// 빛마루 마케팅 랜딩페이지 Config
// 모든 텍스트, 링크, 패키지 정보를 여기서 관리합니다.
// 크몽 상품 정보가 변경되면 이 파일만 수정하면 됩니다.

export const siteConfig = {
    // 브랜드 정보
    brandName: "빛마루 마케팅",

    // 크몽 상품 링크 (고정)
    kmongUrl: "https://kmong.com/gig/638867",

    // SEO 메타 정보
    seo: {
        title: "빛마루 마케팅 | 블로그 기자단 포스팅 운영",
        description: "기획-작성-검수-발행까지. 검수 기준과 수정 규정을 투명하게 안내합니다. 크몽에서 구매/문의하세요.",
        url: "https://your-domain.com", // 배포 후 변경
        ogImage: "/og.png",
    },

    // 상단 슬로건
    slogan: "조건은 투명하게, 운영은 꼼꼼하게.",

    // CTA 버튼 텍스트
    cta: {
        buy: "크몽에서 구매",
        inquiry: "크몽에서 문의",
    },
} as const;

// Hero 섹션
export const heroContent = {
    headline: "블로그 기자단 포스팅, 필요한 만큼 깔끔하게.",
    subheadline: "기획–작성–검수–발행. 크몽 상품 기준으로 명확히 진행합니다.",
    benefits: [
        { icon: "Target", text: "업종/목적에 맞춘 구성" },
        { icon: "CheckCircle", text: "검수 기준에 따른 수정" },
        { icon: "FileText", text: "발행 후 확인/정리 안내" },
    ],
} as const;

// 10초 요약 (크몽에서 추출한 핵심 조건)
export const quickSummary = {
    title: "핵심 조건 한눈에",
    items: [
        { label: "작업 기간", value: "7일", description: "결제 후 7일 이내 완료" },
        { label: "수정 규정", value: "1회", description: "발행 후 1주일 이내 요청" },
        { label: "포함 항목", value: "원고료 포함", description: "공정위 문구 필수 포함" },
        { label: "유지 기간", value: "180일", description: "크몽 상품 상세 기준" },
    ],
} as const;

// 시각적 증거 섹션 (placeholder)
export const visualEvidence = {
    title: "설명보다 형식을 먼저 보여드립니다.",
    items: [
        {
            type: "image" as const,
            title: "포스팅 구성 예시",
            placeholder: true,
            caption: "실제 발행 포스팅 레이아웃 예시",
        },
        {
            type: "text" as const,
            title: "문장 톤 예시",
            before: "저희 제품은 최고입니다. 꼭 사세요.",
            after: "일상에서 자연스럽게 쓰게 되는 이유가 있습니다.",
            caption: "광고 느낌 없이 자연스러운 톤으로 작성",
        },
        {
            type: "image" as const,
            title: "리포트/정리 예시",
            placeholder: true,
            caption: "발행 후 전달되는 정리 양식 예시",
        },
    ],
} as const;

// 고객 고민 (과장 없이 현실형)
export const customerPainPoints = {
    title: "이런 고민, 한 번쯤 생깁니다.",
    items: [
        "꾸준히 올리는데 흐름이 없다",
        "광고처럼 보여서 반응이 약하다",
        "키워드/구성이 매번 어렵다",
        "작성 톤이 들쭉날쭉하다",
        "검수/수정 커뮤니케이션이 번거롭다",
    ],
    conclusion: "그래서 '운영'이 필요합니다.",
} as const;

// 진행 프로세스 5단계
export const processSteps = {
    title: "진행은 5단계로 단순하게.",
    steps: [
        { step: 1, title: "기획", description: "업종/목적에 맞는 방향 설정" },
        { step: 2, title: "섭외", description: "적합한 등급의 블로그 매칭" },
        { step: 3, title: "작성", description: "키워드 반영, 자연스러운 톤" },
        { step: 4, title: "검수", description: "기준에 따른 확인 및 수정" },
        { step: 5, title: "발행", description: "발행 후 안내/리포트 전달" },
    ],
} as const;

// 패키지 정보 (크몽에서 추출)
export const packages = {
    title: "지금 상황엔 이걸 고르시면 됩니다.",
    note: "자세한 사양은 크몽 상세 기준",
    items: [
        {
            name: "STANDARD",
            price: "10,000원",
            blogGrade: "준최적화 4등급",
            charCount: "300~500자",
            workDays: "7일",
            revisions: "1회",
            maintenance: "180일",
            recommendation: "간단한 소식/후기형 포스팅",
        },
        {
            name: "DELUXE",
            price: "20,000원",
            blogGrade: "준최적화 4등급",
            charCount: "800~1,000자",
            workDays: "7일",
            revisions: "1회",
            maintenance: "180일",
            recommendation: "상세 설명이 필요한 서비스/제품 소개",
        },
        {
            name: "PREMIUM",
            price: "50,000원",
            blogGrade: "준최적화 5~6등급",
            charCount: "1,000~1,500자",
            workDays: "7일",
            revisions: "1회",
            maintenance: "180일",
            recommendation: "깊이 있는 콘텐츠, 높은 등급 블로그 필요 시",
        },
    ],
    additionalOptions: [
        { name: "최적화 블로그", price: "80,000원", note: "최적화 등급 블로그 사용" },
        { name: "인플루언서 블로그", price: "별도 문의", note: "영향력 있는 블로그 섭외" },
        { name: "인스타 기자단", price: "팔로워 수 따라 변동", note: "문의 후 견적" },
    ],
} as const;

// 신뢰 요소 (보장 대신 기준)
export const trustElements = {
    title: "노출을 약속하지 않습니다. 대신 기준을 약속합니다.",
    items: [
        {
            icon: "ClipboardCheck",
            title: "검수 기준 중심",
            description: "발행 전 내부 기준에 따라 확인",
        },
        {
            icon: "Edit3",
            title: "수정 규정 명확",
            description: "1회, 발행 후 1주일 이내",
        },
        {
            icon: "Calendar",
            title: "일정/진행 흐름 투명",
            description: "7일 내 완료, 단계별 안내",
        },
    ],
} as const;

// FAQ (크몽 기준 반영)
export const faqItems = [
    {
        question: "상위노출 보장하나요?",
        answer: "노출을 보장하거나 확정하지 않습니다. 블로그 포스팅은 검색 알고리즘에 따라 노출이 달라지며, 저희는 검수 기준에 맞는 품질 관리와 운영 방식으로 접근합니다. 상위노출이 목적이시라면 이 부분을 충분히 이해하신 후 진행해 주세요.",
        defaultOpen: true,
    },
    {
        question: "수정은 어디까지 되나요?",
        answer: "수정은 1회에 한하여 진행됩니다. 글이 발행된 후 1주일 이내에 요청해 주셔야 합니다. 콘텐츠 수정 시 노출률이 변경될 수 있어 이 점 참고 부탁드립니다. (크몽 상품 상세 기준)",
        defaultOpen: true,
    },
    {
        question: "작업 기간은 얼마나 걸리나요?",
        answer: "결제 완료 후 7일 이내에 작업이 완료됩니다. 모든 패키지 동일합니다. (크몽 상품 상세 기준)",
        defaultOpen: false,
    },
    {
        question: "키워드는 누가 정하나요?",
        answer: "맞춤형 키워드를 분석하여 전략을 제공합니다. 의뢰인과 협의하여 최종 키워드를 결정합니다. (크몽 상품 상세 기준)",
        defaultOpen: false,
    },
    {
        question: "업종 제한이 있나요?",
        answer: "특별한 업종 제한은 없으나, 문의를 통해 상담 후 진행 여부를 안내드립니다. (크몽 상품 상세 기준)",
        defaultOpen: false,
    },
    {
        question: "공정위 문구 포함되나요?",
        answer: "네, 모든 블로그 포스팅에는 공정위 문구가 필수로 포함됩니다. (크몽 상품 상세 기준)",
        defaultOpen: false,
    },
    {
        question: "발행 후 유지 관련 안내는?",
        answer: "유지 기간은 180일입니다. 이 기간 동안 포스팅이 유지됩니다. (크몽 상품 상세 기준)",
        defaultOpen: false,
    },
    {
        question: "취소/환불은 어떻게 되나요?",
        answer: "크몽 규정을 준수합니다. 용역 개시 전에는 취소 및 환불이 가능하며, 용역 개시 후에는 미진행 범위에 한해 협의가 가능합니다. 작업이 진행되지 않을 경우 100% 환불 처리됩니다. 자세한 내용은 크몽 상품 페이지의 취소/환불 규정을 참고해 주세요.",
        defaultOpen: false,
    },
] as const;

// Final CTA
export const finalCTA = {
    line1: "조건은 투명하게 정리했습니다.",
    line2: "이제 크몽에서 구매/문의만 남았습니다.",
    note: "상세 조건/사양/규정은 크몽 상품 페이지 기준",
} as const;

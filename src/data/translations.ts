
export const translations = {
    ko: {
        common: {
            home: "홈",
            career: "커리어",
            portfolio: "포트폴리오",
            marketingView: "Marketing View",
            poView: "PO / Planning View",
            footerRights: "All rights reserved.",
            contactMsg: "커피챗은 언제나 환영입니다.",
            downloadPdf: "포트폴리오(PDF) 다운로드"
        },
        hero: {
            title: "Problem Solver, 위승주.",
            subtitle: "Data로 검증하고, AI로 구현하여, 실체를 만듭니다.",
            marketingAction: "Marketing (Creative & Data)",
            poAction: "PO/Planning (Tech & Product)"
        },
        about: {
            title: "About Me",
            description: "기획과 개발의 언어를 모두 구사하며, AI를 통해 실행 속도를 10배 높이는 인재입니다.",
            education: "홍익대학교 (2026.02 졸업 예정)",
            keywords: ["#AI-Native", "#Data-Driven", "#Full-Stack_Understanding"],
            skills: {
                marketing: ["Amplitude", "GA4", "ADsP", "Figma"],
                tech: ["React Native", "Python", "Cursor", "SQL", "Git"]
            }
        },
        projects: {
            marketing: [
                {
                    title: "Gourmevel",
                    subtitle: "0 to 10,000, 팬덤을 만드는 브랜딩",
                    description: "타겟 분석을 통한 톤앤매너 정립으로 팔로워 1만 명 달성. 미식 경험을 콘텐츠화.",
                    tags: ["Branding", "Content Marketing", "Instagram"]
                },
                {
                    title: "Planfit",
                    subtitle: "데이터 기반 그로스 마케팅",
                    description: "이탈률 00% 개선. 개발 지식을 활용해 기술적 제약 없는 마케팅 실험 설계.",
                    tags: ["Growth", "Amplitude", "A/B Testing"]
                }
            ],
            po: [
                {
                    title: "Planfit",
                    subtitle: "AI-Native Solver, 1인 스쿼드",
                    description: "기획-디자인-개발-배포 전 과정 리드. AI(Sora, Cursor)를 도입해 리드타임 85% 단축.",
                    tags: ["Product Management", "AI Tools", "Full Cycle"]
                },
                {
                    title: "Drinkig",
                    subtitle: "팀 해체를 극복한 1인 개발 런칭",
                    description: "시장성 검증(경진대회 수상)부터 React Native 리빌딩 후 런칭까지. 끝까지 해내는 Gritt.",
                    tags: ["React Native", "iOS Launch", "Solo Dev"]
                }
            ]
        },
        career: {
            title: "Career & Experience",
            items: [
                {
                    role: "Product Engineer / Growth Intern",
                    company: "플랜핏 (Planfit)",
                    period: "2025.06 - 2025.12",
                    description: "Amplitude 분석, A/B 테스트, React Native 유지보수."
                },
                {
                    role: "Founder & Developer",
                    company: "드링키지 (Drinkig)",
                    period: "2025.01 - 2026.01",
                    description: "iOS 앱 런칭, 1인 전담 개발."
                },
                {
                    role: "Editor in Chief",
                    company: "고메블 (Gourmevel)",
                    period: "2023.01 - 현재",
                    description: "1만 팔로워 매거진 운영."
                }
            ]
        }
    },
    en: {
        common: {
            home: "Home",
            career: "Career",
            portfolio: "Portfolio",
            marketingView: "Marketing View",
            poView: "PO / Planning View",
            footerRights: "All rights reserved.",
            contactMsg: "Coffee chats are always welcome.",
            downloadPdf: "Download Portfolio (PDF)"
        },
        hero: {
            title: "Problem Solver, Seungju Wi.",
            subtitle: "Proving value with Data, implementing with AI.",
            marketingAction: "Marketing (Creative & Data)",
            poAction: "PO/Planning (Tech & Product)"
        },
        about: {
            title: "About Me",
            description: "Fluent in both Planning and Development languages, accelerating execution speed by 10x using AI.",
            education: "Hongik University (Graduating Feb 2026)",
            keywords: ["#AI-Native", "#Data-Driven", "#Full-Stack_Understanding"],
            skills: {
                marketing: ["Amplitude", "GA4", "ADsP", "Figma"],
                tech: ["React Native", "Python", "Cursor", "SQL", "Git"]
            }
        },
        projects: {
            marketing: [
                {
                    title: "Gourmevel",
                    subtitle: "0 to 10,000, Branding that builds fandom",
                    description: "Achieved 10k followers through target analysis and tone & manner definition. Contentizing gourmet experiences.",
                    tags: ["Branding", "Content Marketing", "Instagram"]
                },
                {
                    title: "Planfit",
                    subtitle: "Data-Driven Growth Marketing",
                    description: "Improved churn rate by 00%. Designed marketing experiments without technical constraints using dev knowledge.",
                    tags: ["Growth", "Amplitude", "A/B Testing"]
                }
            ],
            po: [
                {
                    title: "Planfit",
                    subtitle: "AI-Native Solver, One-Man Squad",
                    description: "Led the entire process from planning to design, dev, and deployment. Reduced lead time by 85% using AI tools.",
                    tags: ["Product Management", "AI Tools", "Full Cycle"]
                },
                {
                    title: "Drinkig",
                    subtitle: "Solo Launch Overcoming Team Dissolution",
                    description: "From market validation (Award Winner) to React Native rebuilding and launch. Gritt to finish what I start.",
                    tags: ["React Native", "iOS Launch", "Solo Dev"]
                }
            ]
        },
        career: {
            title: "Career & Experience",
            items: [
                {
                    role: "Product Engineer / Growth Intern",
                    company: "Planfit",
                    period: "2025.06 - 2025.12",
                    description: "Amplitude analysis, A/B testing, React Native maintenance."
                },
                {
                    role: "Founder & Developer",
                    company: "Drinkig",
                    period: "2025.01 - 2026.01",
                    description: "iOS App Launch, Solo Development."
                },
                {
                    role: "Editor in Chief",
                    company: "Gourmevel",
                    period: "2023.01 - Present",
                    description: "Managing Magazine with 10k Followers."
                }
            ]
        }
    }
};

export type Language = 'ko' | 'en';
export type Translation = typeof translations.ko;

// ── i18n Translations ────────────────────────────────────────────────────────
const translations = {
    en: {
        // Nav
        'nav-01': 'Intro', 'nav-02': 'About', 'nav-03': 'Zhipu AI',
        'nav-04': 'Mirror', 'nav-05': 'LandIt', 'nav-06': 'USC Lab',
        'nav-07': 'AIGC', 'nav-08': 'Connect',
        // Hero
        'hero-badge': 'AI Product Manager',
        'hero-summary': 'Bridging creative media and technical AI — hands-on with agentic pipelines, generative AI, and enterprise AI safety across USC, Tsinghua, and top Chinese AI companies.',
        'htag-1': 'Agentic Pipelines', 'htag-2': 'Generative AI',
        'htag-3': 'AI Safety', 'htag-4': 'Prompt Engineering',
        'hero-tl-label': 'Career Path',
        'hero-tl-hint': 'This portfolio unfolds chronologically →',
        'tln-nm-1': 'Film Academy', 'tln-nm-2': 'Zhipu AI',
        'tln-nm-3': 'Cinematic Mirror', 'tln-nm-4': 'USC Lab',
        // About
        'about-chapter-tag': 'About',
        'apc-label-1': 'Beijing Film Academy · Graduation',
        'apc-label-2': 'Grad School · Tsinghua University',
        'about-quote': 'I didn\'t pivot to AI. AI came to me — at exactly the right moment.',
        'about-heading': 'Why AI Product <span class="gradient-text-gold">Management?</span>',
        'story-p-1': '<strong class="story-section-title">It started with Netflix.</strong> During my undergraduate studies at <strong>Beijing Film Academy</strong>, my professor led a deep analysis of Netflix\'s evolution — from DVD rentals to a data-driven content empire. That was the moment I realized: <span class="story-hi">the future of media isn\'t just creative — it\'s technical.</span> I decided then that my edge would be the ability to bridge content and technology.',
        'story-p-2': '<strong class="story-section-title">Then AI arrived — faster than I expected.</strong> While preparing for graduate school, generative AI exploded. ChatGPT, Sora, Stable Diffusion — the intersection I\'d been drawn to was suddenly the center of the industry. I didn\'t pivot to AI. AI came to me.',
        'story-p-3': 'I started hands-on: training LoRA models and building AIGC pipelines at <strong>Enlight Media</strong> (the studio behind <em>Ne Zha 2</em>). Then I moved deeper into product — defining the vision for a multimodal AI companion at <strong>Zhipu AI</strong>, shipping features to 1,500+ beta testers. At <strong>Tianji Cloud</strong>, I independently built and launched an AI-native consumer app. Now at <strong>USC\'s AI Trust Lab</strong>, I\'m tackling the harder question: how do we make AI systems trustworthy enough for enterprise adoption?',
        'story-p-4': '<strong class="story-section-title">What I bring that most PM candidates don\'t:</strong> I come from a world where story, aesthetics, and audience experience are everything. Most PMs optimize for metrics. I optimize for metrics <em>and</em> for how the product feels. At USC and Tsinghua, I\'m now building the technical foundation — machine learning, deep learning, data science — so I can speak both languages fluently: the language of engineering, and the language of human experience.',
        'story-p-5': 'The thread connecting all of it: I don\'t just want to build AI products that <em>work</em> — I want to build AI products that people <em>trust, enjoy, and remember</em>.',
        // Zhipu
        'zhipu-chapter': 'Chapter 03 — AI Life',
        'zhipu-desc': 'World\'s first multimodal AI companion &amp; social platform — shipped to internal beta with <strong>1500+ testers</strong> and showcased at <strong>WAIC 2025</strong>.',
        'zstat-testers': 'Beta Testers', 'zstat-genrate': 'Gen Success Rate',
        'zstat-stability': 'Video Stability', 'zstat-engineers': 'Engineers',
        'interactive-hint-zhipu': 'Tap a feature below to view its demo',
        'pill-hint-phone': 'Click a feature',
        'phone-caption-default': 'Click any feature pill to preview →',
        'zpill-1': 'Photo to Life', 'zpill-2': 'Immersive Companion',
        'zpill-3': 'Social Matchmaking', 'zpill-4': 'Cloud Travel', 'zpill-5': 'Roaming Mode',
        'zhipu-rp-header': 'My Role · 5 Phases',
        'zhipu-phase-1-title': 'Product Positioning &amp; Discovery',
        'zhipu-phase-1-content': '<ul><li>Co-led IP direction from Jellycat-cute to Labubu-inspired "ugly-cute" monsters based on youth preferences &amp; market research</li><li>Proposed AI pets with autonomy (roaming) + deep sociality (anthropomorphic interactions) for an immersive "AI life" experience</li><li>Ran youth preference studies; deconstructed hit IPs to inform positioning &amp; feature hypotheses</li><li>Generated pet visuals &amp; trained LoRA — bootstrapped dataset from model-generated outputs</li></ul>',
        'zhipu-phase-2-title': 'Feature Ideation &amp; Requirements',
        'zhipu-phase-2-content': '<ul><li>Co-created &amp; down-selected 5 core features: Photo Awakening, Immersive Companion, Cloud Travel, Social Icebreaker, Roaming Mode</li><li>Designed an MBTI-like quiz to generate bespoke pets; explored voice timbre customization for differentiation</li><li>Wrote Cloud Travel story snippets; drove automated storytelling feasibility discussions</li></ul>',
        'zhipu-phase-3-title': 'Tech Alignment &amp; Feasibility',
        'zhipu-phase-3-content': '<ul><li>Benchmarked 3rd-party (Midjourney) vs. in-house models on quality / cost / control; logged bad &amp; good cases to inform trade-offs</li><li>Resolved motion interruption continuity in Immersive Companionship via state machine, transition frames &amp; temporal constraints</li></ul>',
        'zhipu-phase-4-title': 'Core Features Shipped (Owner)',
        'zhipu-phase-4-content': '<ul><li><strong>Photo Awakening</strong> — Prompt design, bad/good case analysis, model selection &amp; parameterization</li><li><strong>Immersive Companion</strong> — Motion continuity &amp; live-session state management; delivered transition fixes</li><li><strong>Cloud Travel</strong> — Narrative demos, scene templates, automated storytelling pipeline</li></ul>',
        'zhipu-phase-5-title': 'Product Process &amp; Review',
        'zhipu-phase-5-content': '<ul><li>MVP planning: prioritized Photo Awakening + Companionship for Phase 1; Cloud Travel / Icebreaker / Roaming for Phase 2</li><li>Contributed to demo IA, key interactions, and usability design</li><li>Ran feature walkthroughs, captured usability &amp; stability feedback, drove iteration backlog</li></ul>',
        // Mirror
        'mirror-chapter': 'Chapter 04 — Independent Builds',
        'mirror-title': 'Cinematic Mirror Agent',
        'mirror-desc': 'A personality-first styling system — not a trend engine. Built to help users dress <em>authentically</em>, not algorithmically.',
        'mirror-prob-1': '<strong>Homogenized recommendations</strong> — algorithms optimize for trends, not individuality.',
        'mirror-prob-2': '<strong>No personality foundation</strong> — body type &amp; trends, but never temperament or identity.',
        'interactive-hint-mirror': 'Tap a stage below to view its demo',
        'try-it': 'Try it →',
        'cm-caption-default': 'Live preview — tap a stage to switch view',
        'cm-stage-1-title': 'Cinematic Interview',
        'cm-stage-1-desc': 'Natural dialogue → multidimensional Cinematic Personality Profile',
        'cm-stage-2-title': 'Film Character Match',
        'cm-stage-2-desc': 'Character archetype → Style Guide: silhouette, color system, outfit logic',
        'cm-stage-3-title': 'Live Director Mode',
        'cm-stage-3-desc': 'Real-time video: color alignment, silhouette, accessories, posture',
        'mirror-mvp-title': 'Scope',
        'mirror-mvp-content': '<p style="font-size:0.7rem;color:var(--text-dim);margin:0 0 6px;">Included</p><ul><li>Conversational personality modeling</li><li>Single character match + detailed outfit analysis</li><li>Basic real-time video styling feedback</li><li>Credit-based consultation system</li></ul><p style="font-size:0.7rem;color:var(--text-dim);margin:8px 0 6px;">Excluded</p><ul><li>E-commerce integration / AR try-on / community</li></ul>',
        'mirror-okr-title': 'Success Metrics',
        'mirror-okr-content': '<p style="font-size:0.7rem;color:var(--accent-gold);margin:0 0 6px;">North Star — Post-session styling satisfaction score</p><ul><li>Video session conversion rate</li><li>Credit repurchase rate</li><li>7-day retention rate &amp; outfit adoption rate</li></ul><p style="font-size:0.7rem;color:var(--text-dim);margin:8px 0 4px;">Core question: do users treat this as an ongoing companion, not a one-time quiz?</p>',
        'mirror-tradeoff-title': 'Tradeoffs',
        'mirror-tradeoff-content': '<ul><li><strong>Personality modeling</strong> adds complexity → creates defensibility &amp; long-term engagement</li><li><strong>Live video inference</strong> raises infra cost → enables premium pricing &amp; trust</li><li><strong>CV accuracy limits</strong> → prioritize silhouette logic &amp; aesthetic coherence over garment recognition</li><li><strong>Positioning risk</strong> → interface must deliver wearable suggestions, not just cinematic framing</li></ul>',
        // LandIt
        'landit-chapter': 'Chapter 05 — Independent Builds',
        'landit-title': 'LandIt',
        'landit-desc': 'A preparation system, not a question generator — structured role-specific training that improves candidates across an entire interview cycle.',
        'landit-prob-1': '<strong>Fragmented prep</strong> — resume, research, questions, advice all disconnected. No system.',
        'landit-prob-2': '<strong>Shallow tools</strong> — question banks lack personalization; mock tools lack structured feedback; copilots raise ethics issues.',
        'landit-rp-header': '5-Agent Architecture',
        'landit-loop-title': 'Preparation Loop',
        'landit-loop-content': '<ul><li><strong>Background Builder</strong> — persistent digital profile from resume &amp; context</li><li><strong>Role Context Agent</strong> — job-specific criteria from JD input</li><li><strong>Interview Orchestrator</strong> — adaptive pacing, difficulty, follow-ups</li><li><strong>Scoring Agent</strong> — 6-dimension evaluation with role-adjusted weights</li><li><strong>Progress Tracker</strong> — feeds weaknesses into next simulation</li></ul>',
        'landit-okr-title': 'Success Metrics',
        'landit-okr-content': '<p style="font-size:0.7rem;color:var(--accent-gold);margin:0 0 6px;">North Star — Score improvement across 3 consecutive mock sessions</p><ul><li>Mock completion rate · 7-day return rate</li><li>Sessions per Target Role · subscription conversion</li><li>Weakness convergence rate</li></ul>',
        'landit-tradeoff-title': 'Tradeoffs',
        'landit-tradeoff-content': '<ul><li><strong>Deep personalization</strong> → modular agents + clean data flows to avoid brittle chains</li><li><strong>Adaptive orchestration</strong> → balance realism with response speed</li><li><strong>Video analysis deferred</strong> → prioritize structured text scoring in MVP</li><li><strong>Positioning risk</strong> → must emphasize growth, not just another mock tool</li></ul>',
        // USC Lab
        'usc-chapter': 'Chapter 06 — The Pursuit of Trust',
        'usc-title': 'USC AI Trust Lab',
        'usc-desc': 'Contributing to the AI Trust Score™ — a B2B platform assessing safety risks in multi-agent pipelines. <a href="https://tumeryk.com/" target="_blank" class="usc-site-link">Visit Tumeryk.com →</a>',
        'usc-card': '<h4>Research Focus</h4><ul><li>Redesigned risk taxonomy: <strong>9 technical categories → 7 principle-based dimensions</strong> for enterprise interpretability</li><li>Evaluated <strong>5+ red-teaming frameworks</strong> — Microsoft PyRIT, NVIDIA Garak — mapped to redesigned taxonomy</li><li>Aligned with NIST AI RMF &amp; EU AI Act compliance needs</li><li>Bridging USC communication lens: enabling enterprise clients to map trust assessments to AI procurement decisions</li></ul>',
        // AIGC
        'aigc-chapter': 'Chapter 07 — Creative Foundations',
        'aigc-title': 'AIGC Works',
        'aigc-desc': 'The technical foundation beneath the product work — LoRA training, multimodal generation, and cinematic AI at Enlight Media.',
        'aigc-card-1': '<h4>Key Contributions</h4><ul><li>Trained custom LoRA models for character consistency</li><li>Text-to-video workflows: Runway, Sora, Kling</li><li>Nominated for BFA Animation Awards — <em>Writing Pen</em></li><li>Visual style transfer across genres</li></ul>',
        'aigc-card-2': '<h4>Tools &amp; Tech</h4><ul><li>Stable Diffusion + LoRA Fine-tuning</li><li>ComfyUI Workflows</li><li>Runway Gen-3 / Kling / Sora</li><li>Prompt Engineering</li></ul>',
        'aigc-video-1-title': 'Cellular City (Tsinghua 12 Hours)',
        'aigc-video-1-desc': 'Won Visual Effects Special Award at Tsinghua University SDG Open Innovation Hackathon',
        'aigc-video-2-title': 'The Pen',
        'aigc-video-2-desc': 'Nominated for 25th Beijing Film Academy Animation Awards; won 2nd Prize (Alipay) and AI Intelligent Video Excellence Award at the 5th Future Audio-Visual Innovation Competition',
        'aigc-video-3-caption': 'Sunflower Village',
        'aigc-video-4-caption': 'Zooom Character Demo',
        'aigc-pdf-title': 'Cellular City Presentation',
        'aigc-pdf-desc': 'Project pitch deck for the Tsinghua University SDG Hackathon',
        // Connect
        'connect-eyebrow': 'End of Portfolio · Beginning of Conversation',
        'connect-heading': 'Let\'s <span class="gradient-text">Connect</span>',
        'connect-sub': 'I\'m always open to new opportunities, collaborations, and conversations about AI product, media, and everything in between.',
        'cc-email-label': 'Email',
        'connect-footer': '<p>&copy; 2026 Yudie Deng &nbsp;·&nbsp; From Script to Screen to Silicon</p>',
    },
    zh: {
        // Nav
        'nav-01': '简介', 'nav-02': '关于我', 'nav-03': '智谱华章',
        'nav-04': '镜像', 'nav-05': 'LandIt', 'nav-06': '南加实验室',
        'nav-07': 'AIGC作品', 'nav-08': '联系我',
        // Hero
        'hero-badge': 'AI产品经理',
        'hero-summary': '连接创意媒体与前沿AI技术 — 深度参与智能体流水线、生成式AI产品与企业AI安全，跨越南加大、清华与中国头部AI公司。',
        'htag-1': '智能体流水线', 'htag-2': '生成式AI',
        'htag-3': 'AI安全', 'htag-4': '提示工程',
        'hero-tl-label': '职业路径',
        'hero-tl-hint': '本作品集按时间顺序展开 →',
        'tln-nm-1': '北京电影学院', 'tln-nm-2': '智谱华章',
        'tln-nm-3': '电影镜像', 'tln-nm-4': '南加实验室',
        // About
        'about-chapter-tag': '关于我',
        'apc-label-1': '北京电影学院 · 毕业典礼',
        'apc-label-2': '研究生 · 清华大学',
        'about-quote': '我并没有转型AI。AI向我走来了 — 在最恰当的时刻。',
        'about-heading': '为什么是AI产品<span class="gradient-text-gold">管理？</span>',
        'story-p-1': '<strong class="story-section-title">一切从Netflix开始。</strong> 在<strong>北京电影学院</strong>学习文化产业管理期间，我的教授带领我们深度拆解Netflix的演变史 — 从DVD租赁到数据驱动的内容帝国。那一刻我意识到：<span class="story-hi">媒体的未来不只是创意，更是技术。</span> 我决定，我从影视行业带来的优势，就是连接内容与技术的能力。',
        'story-p-2': '<strong class="story-section-title">然后，AI来了 — 比我预想的更快。</strong> 在备考研究生的同时，生成式AI爆发了。ChatGPT、Sora、Stable Diffusion — 我一直被吸引的那个交叉口，突然成了行业的中心。我并没有转型AI。AI向我走来了。',
        'story-p-3': '我从动手实践开始：在<strong>光线传媒</strong>（《哪吒2》出品方）训练LoRA模型、搭建AIGC流水线。随后深入产品 — 在<strong>智谱华章</strong>定义多模态AI伴侣产品的核心愿景，将功能推向1500+内测用户。在<strong>天机云科技</strong>，我独立构建并上线了一款AI原生消费级应用。如今在<strong>南加州大学AI信任实验室</strong>，我在追问更难的问题：如何让AI系统可信到足以支撑企业级采用？',
        'story-p-4': '<strong class="story-section-title">我能带来大多数PM候选人没有的东西：</strong> 我来自一个以故事、美学与受众体验为核心的世界。大多数PM优化指标。我在优化指标<em>的同时</em>，也优化产品的感受。在南加大和清华，我正在构建技术基础 — 机器学习、深度学习、数据科学 — 让自己能流利地说两种语言：工程的语言，以及人类体验的语言。',
        'story-p-5': '贯穿始终的逻辑：我不只想构建<em>有效</em>的AI产品 — 我想构建人们愿意<em>信任、享受和铭记</em>的AI产品。',
        // Zhipu
        'zhipu-chapter': '第三章 — AI生活',
        'zhipu-desc': '全球首个多模态AI伴侣与社交平台 — 内测用户突破<strong>1500+</strong>，并在<strong>WAIC 2025</strong>世界人工智能大会亮相。',
        'zstat-testers': '内测用户', 'zstat-genrate': '生成成功率',
        'zstat-stability': '视频稳定性', 'zstat-engineers': '协作工程师',
        'interactive-hint-zhipu': '点击下方功能标签查看演示',
        'pill-hint-phone': '点击功能标签',
        'phone-caption-default': '点击任意功能标签预览 →',
        'zpill-1': '照片唤醒', 'zpill-2': '沉浸式陪伴',
        'zpill-3': '社交破冰', 'zpill-4': '云端旅行', 'zpill-5': '漫游模式',
        'zhipu-rp-header': '我的角色 · 五个阶段',
        'zhipu-phase-1-title': '产品定位 &amp; 发现',
        'zhipu-phase-1-content': '<ul><li>联合主导IP方向，从Jellycat可爱风转向Labubu风格"丑萌"怪兽，基于年轻用户偏好与市场调研</li><li>提出具有自主性（漫游）+ 深度社交（拟人互动）的AI宠物，打造沉浸式"AI生活"体验</li><li>开展青年偏好研究，拆解爆款IP，为产品定位与功能假设提供依据</li><li>生成宠物形象并训练LoRA模型 — 从模型生成结果中自举数据集</li></ul>',
        'zhipu-phase-2-title': '功能创意 &amp; 需求',
        'zhipu-phase-2-content': '<ul><li>共创并筛选5个核心功能：照片唤醒、沉浸式陪伴、云端旅行、社交破冰、漫游模式</li><li>设计MBTI式测评生成专属宠物；探索声音音色定制化差异点</li><li>撰写云端旅行故事片段；推进自动化叙事可行性讨论</li></ul>',
        'zhipu-phase-3-title': '技术对齐 &amp; 可行性',
        'zhipu-phase-3-content': '<ul><li>对比第三方（Midjourney）与自研模型在质量/成本/可控性上的差异；记录正负样本以辅助决策</li><li>通过状态机、过渡帧与时序约束，解决沉浸式陪伴中的动作连续性中断问题</li></ul>',
        'zhipu-phase-4-title': '核心功能落地（负责人）',
        'zhipu-phase-4-content': '<ul><li><strong>照片唤醒</strong> — 提示词设计、正负样本分析、模型选型与参数化</li><li><strong>沉浸式陪伴</strong> — 动作连续性与实时会话状态管理；交付过渡优化方案</li><li><strong>云端旅行</strong> — 叙事样板、场景模板、自动化故事流水线</li></ul>',
        'zhipu-phase-5-title': '产品流程 &amp; 评审',
        'zhipu-phase-5-content': '<ul><li>MVP规划：Phase 1优先落地照片唤醒+陪伴；Phase 2排期云端旅行/破冰/漫游</li><li>参与Demo信息架构、核心交互与可用性设计</li><li>主持功能走查，收集可用性与稳定性反馈，推进迭代Backlog</li></ul>',
        // Mirror
        'mirror-chapter': '第四章 — 独立产品',
        'mirror-title': 'Cinematic Mirror Agent',
        'mirror-desc': '以个性为核心的穿搭系统 — 而非趋势引擎。帮助用户以<em>真实自我</em>而非算法逻辑穿搭。',
        'mirror-prob-1': '<strong>同质化推荐</strong> — 算法优化的是趋势，而非个性。',
        'mirror-prob-2': '<strong>缺乏人格基础</strong> — 只考虑体型与潮流，忽视气质与身份。',
        'interactive-hint-mirror': '点击下方阶段查看演示',
        'try-it': '立即体验 →',
        'cm-caption-default': '实时预览 — 点击阶段切换视图',
        'cm-stage-1-title': '电影式访谈',
        'cm-stage-1-desc': '自然对话 → 多维电影人格档案',
        'cm-stage-2-title': '角色匹配',
        'cm-stage-2-desc': '电影角色原型 → 风格指南：廓形、配色系统、穿搭逻辑',
        'cm-stage-3-title': '实时导演模式',
        'cm-stage-3-desc': '实时视频：色彩匹配、廓形、配饰、体态',
        'mirror-mvp-title': '范围',
        'mirror-mvp-content': '<p style="font-size:0.7rem;color:var(--text-dim);margin:0 0 6px;">纳入</p><ul><li>对话式人格建模</li><li>单角色匹配 + 详细穿搭分析</li><li>基础实时视频穿搭反馈</li><li>积分制咨询系统</li></ul><p style="font-size:0.7rem;color:var(--text-dim);margin:8px 0 6px;">排除</p><ul><li>电商整合 / AR试穿 / 社区功能</li></ul>',
        'mirror-okr-title': '成功指标',
        'mirror-okr-content': '<p style="font-size:0.7rem;color:var(--accent-gold);margin:0 0 6px;">北极星指标 — 会话后穿搭满意度评分</p><ul><li>视频会话转化率</li><li>积分复购率</li><li>7日留存率 &amp; 穿搭采纳率</li></ul><p style="font-size:0.7rem;color:var(--text-dim);margin:8px 0 4px;">核心问题：用户是否将其视为持续伴侣，而非一次性测试？</p>',
        'mirror-tradeoff-title': '权衡',
        'mirror-tradeoff-content': '<ul><li><strong>人格建模</strong>增加复杂性 → 形成壁垒与长期粘性</li><li><strong>实时视频推理</strong>提高基础设施成本 → 支撑高端定价与信任感</li><li><strong>CV精度限制</strong> → 优先廓形逻辑与美学一致性，而非服装识别</li><li><strong>定位风险</strong> → 界面必须提供可穿着的建议，而非纯电影化框架</li></ul>',
        // LandIt
        'landit-chapter': '第五章 — 独立产品',
        'landit-title': 'LandIt',
        'landit-desc': '一套备考系统，而非题库 — 针对特定岗位的结构化训练，贯穿整个面试周期。',
        'landit-prob-1': '<strong>碎片化备考</strong> — 简历、调研、题目、建议各自独立，毫无系统。',
        'landit-prob-2': '<strong>浅层工具</strong> — 题库缺乏个性化；模拟工具缺乏结构化反馈；AI辅助工具存在伦理隐患。',
        'landit-rp-header': '五智能体架构',
        'landit-loop-title': '备考循环',
        'landit-loop-content': '<ul><li><strong>背景构建器</strong> — 从简历与上下文生成持久数字画像</li><li><strong>岗位情境智能体</strong> — 从JD输入提取岗位专属标准</li><li><strong>面试编排器</strong> — 自适应节奏、难度与追问</li><li><strong>评分智能体</strong> — 六维评估，权重按岗位动态调整</li><li><strong>进度追踪器</strong> — 将弱点反哺下一次模拟</li></ul>',
        'landit-okr-title': '成功指标',
        'landit-okr-content': '<p style="font-size:0.7rem;color:var(--accent-gold);margin:0 0 6px;">北极星指标 — 3次连续模拟中的评分提升</p><ul><li>模拟完成率 · 7日回访率</li><li>目标岗位场次数 · 付费转化率</li><li>弱点收敛率</li></ul>',
        'landit-tradeoff-title': '权衡',
        'landit-tradeoff-content': '<ul><li><strong>深度个性化</strong> → 模块化智能体 + 清晰数据流，避免脆弱链路</li><li><strong>自适应编排</strong> → 在真实感与响应速度间取得平衡</li><li><strong>视频分析延后</strong> → MVP优先落地结构化文本评分</li><li><strong>定位风险</strong> → 必须强调成长性，而非又一款模拟工具</li></ul>',
        // USC Lab
        'usc-chapter': '第六章 — 信任的追求',
        'usc-title': 'USC AI信任实验室',
        'usc-desc': '参与构建AI信任评分™ — 一个评估多智能体流水线安全风险的B2B平台。<a href="https://tumeryk.com/" target="_blank" class="usc-site-link">访问 Tumeryk.com →</a>',
        'usc-card': '<h4>研究方向</h4><ul><li>重构风险分类体系：<strong>9个技术类别 → 7个原则性维度</strong>，提升企业客户可解释性</li><li>评估<strong>5+ 红队测试框架</strong> — Microsoft PyRIT、NVIDIA Garak — 与新分类体系的映射</li><li>对齐NIST AI RMF与EU AI Act合规需求</li><li>引入USC传播学视角：帮助企业客户将信任评估与AI采购决策直接挂钩</li></ul>',
        // AIGC
        'aigc-chapter': '第七章 — 创意基础',
        'aigc-title': 'AIGC作品',
        'aigc-desc': '产品工作背后的技术基础 — LoRA训练、多模态生成，以及在光线传媒的电影级AI实践。',
        'aigc-card-1': '<h4>核心贡献</h4><ul><li>训练自定义LoRA模型保障角色一致性</li><li>文生视频工作流：Runway、Sora、可灵</li><li>入围北京电影学院动画节 — <em>《写字的笔》</em></li><li>跨风格视觉迁移</li></ul>',
        'aigc-card-2': '<h4>工具 &amp; 技术</h4><ul><li>Stable Diffusion + LoRA微调</li><li>ComfyUI工作流</li><li>Runway Gen-3 / 可灵 / Sora</li><li>提示词工程</li></ul>',
        'aigc-video-1-title': '《细胞城市》（清华12小时）',
        'aigc-video-1-desc': '荣获清华大学SDG开放创新黑客马拉松视觉特效特别奖',
        'aigc-video-2-title': '《写字的笔》',
        'aigc-video-2-desc': '入围第25届北京电影学院动画节；荣获第五届未来视听创新大赛支付宝二等奖及AI智能视频优秀奖',
        'aigc-video-3-caption': '《向日葵村》',
        'aigc-video-4-caption': 'Zooom角色演示',
        'aigc-pdf-title': '《细胞城市》路演PPT',
        'aigc-pdf-desc': '清华大学SDG黑客马拉松项目路演文档',
        // Connect
        'connect-eyebrow': '作品集尾声 · 对话开启',
        'connect-heading': '与我<span class="gradient-text">联系</span>',
        'connect-sub': '欢迎关于AI产品、媒体与一切相关话题的机会、合作与对话。',
        'cc-email-label': '邮箱',
        'connect-footer': '<p>&copy; 2026 邓雨蝶 &nbsp;·&nbsp; 从剧本到银幕，再到硅谷</p>',
    }
};

let currentLang = 'en';

function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    currentLang = lang;
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = lang === 'en' ? '中文' : 'EN';
        btn.classList.toggle('active-zh', lang === 'zh');
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

document.addEventListener('DOMContentLoaded', function () {

    // ── Root Swiper ──────────────────────────────────────────
    const rootSwiper = new Swiper('.root-swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        keyboard: true,
        speed: 900,
        pagination: {
            el: '.root-pagination',
            clickable: true,
        },
        // navigation handled manually below to avoid Swiper adding swiper-button-* classes
        on: {
            // Clear fly-ins immediately when slide starts changing
            slideChange: function () {
                document.querySelectorAll('.swiper-slide').forEach(s => {
                    s.classList.remove('slide-visible');
                });
                const activeSlide = this.slides[this.activeIndex];
                const chapter = activeSlide ? activeSlide.getAttribute('data-chapter') : null;
                updateChapterColors(chapter);
                updateSidebar(this.activeIndex);
            },
            // Trigger fly-ins AFTER the page-flip transition completes
            transitionEnd: function () {
                const active = this.slides[this.activeIndex];
                if (active) active.classList.add('slide-visible');
            },
            // Fly in slide 0 on first load
            init: function () {
                setTimeout(() => {
                    if (this.slides[0]) this.slides[0].classList.add('slide-visible');
                }, 250);
            }
        }
    });

    // ── Page nav buttons (manual, so Swiper won't add swiper-button-* classes) ──
    document.querySelector('.next-page').addEventListener('click', () => rootSwiper.slideNext());
    document.querySelector('.prev-page').addEventListener('click', () => rootSwiper.slidePrev());

    // ── Sidebar sync ─────────────────────────────────────────
    function updateSidebar(index) {
        document.querySelectorAll('.chapter-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    document.querySelectorAll('.chapter-item').forEach((item) => {
        item.addEventListener('click', () => {
            rootSwiper.slideTo(parseInt(item.dataset.slide));
        });
    });

    const gallerySwiperEl = document.querySelector('.gallery-swiper');
    if (gallerySwiperEl) {
        new Swiper(gallerySwiperEl, {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            navigation: {
                nextEl: gallerySwiperEl.querySelector('.gallery-next'),
                prevEl: gallerySwiperEl.querySelector('.gallery-prev'),
            },
            nested: true,
            // Prevent gallery arrow clicks from bubbling to root swiper
            on: {
                navigationNext: function () { },
                navigationPrev: function () { },
            },
        });
    }

    // ── Zhipu idle reel (CSS crossfade, no Swiper) ───────────
    const reelImgs = document.querySelectorAll('.phone-reel-img');
    if (reelImgs.length) {
        let reelIdx = 0;
        setInterval(() => {
            reelImgs[reelIdx].classList.remove('active');
            reelIdx = (reelIdx + 1) % reelImgs.length;
            reelImgs[reelIdx].classList.add('active');
        }, 2600);
    }

    // ── Zhipu GIF demos (phone mockup) ───────────────────────
    // Click a feature pill → fade in that feature's GIF on phone
    // Click same pill again → toggle off
    const gifOverlay = document.querySelector('.zhipu-gif-overlay');
    if (gifOverlay) {
        let activeFeatureIdx = null;

        const featureCaptionsEn = [
            '01 · Photo to Life', '02 · Immersive Companion',
            '03 · Social Matchmaking', '04 · Cloud Travel', '05 · Roaming Mode',
        ];
        const featureCaptionsZh = [
            '01 · 照片唤醒', '02 · 沉浸式陪伴',
            '03 · 社交破冰', '04 · 云端旅行', '05 · 漫游模式',
        ];
        function getFeatureCaptions() {
            return currentLang === 'zh' ? featureCaptionsZh : featureCaptionsEn;
        }

        function setCaption(text) {
            const el = document.querySelector('.phone-caption');
            if (!el) return;
            el.style.opacity = '0';
            setTimeout(() => { el.textContent = text; el.style.opacity = '1'; }, 180);
        }

        document.querySelectorAll('.zf-pill').forEach((item, i) => {
            item.addEventListener('click', () => {
                if (activeFeatureIdx === i) {
                    activeFeatureIdx = null;
                    item.classList.remove('active');
                    gifOverlay.classList.remove('visible');
                    setTimeout(() => { gifOverlay.style.display = 'none'; gifOverlay.src = ''; }, 350);
                    setCaption(currentLang === 'zh' ? '点击任意功能标签预览 →' : 'Click any feature pill to preview →');
                } else {
                    activeFeatureIdx = i;
                    document.querySelectorAll('.zf-pill').forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                    gifOverlay.src = item.dataset.gif;
                    gifOverlay.style.display = 'block';
                    requestAnimationFrame(() => requestAnimationFrame(() => {
                        gifOverlay.classList.add('visible');
                    }));
                    setCaption(getFeatureCaptions()[i]);
                }
            });
        });
    }

    // ── Chapter ambient color shift ───────────────────────────
    const chapterColors = {
        '1': { a: 'rgba(197, 160, 89, 0.10)', b: 'rgba(26, 26, 26, 0.04)' },
        '2': { a: 'rgba(110, 20, 40, 0.09)', b: 'rgba(28, 59, 121, 0.04)' },
        '3': { a: 'rgba(20, 110, 70, 0.09)', b: 'rgba(255, 255, 255, 0.03)' },
        '4': { a: 'rgba(197, 160, 89, 0.09)', b: 'rgba(50, 50, 121, 0.07)' },
        '5': { a: 'rgba(28, 59, 121, 0.10)', b: 'rgba(10, 10, 10, 0.08)' },
        '6': { a: 'rgba(197, 160, 89, 0.12)', b: 'rgba(197, 160, 89, 0.04)' }
    };

    function updateChapterColors(chapter) {
        if (chapter && chapterColors[chapter]) {
            const c = chapterColors[chapter];
            document.documentElement.style.setProperty('--diffuse-1-a', c.a);
            document.documentElement.style.setProperty('--diffuse-1-b', c.b);
        }
    }

    // ── Three.js ripple background ────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const canvas = renderer.domElement;
    canvas.id = 'ripple-canvas';
    Object.assign(canvas.style, {
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '100%',
        zIndex: '-1', pointerEvents: 'none'
    });
    document.body.appendChild(canvas);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const vertexShader = `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
    `;
    const fragmentShader = `
        uniform vec2 uMouse;
        uniform float uTime;
        varying vec2 vUv;
        void main() {
            vec2 uv = vUv;
            vec2 dir = normalize(uv - vec2(0.5));
            float d = length(uv - uMouse);
            float wave = sin(d * 12.0 - uTime * 1.2) * 0.006;
            float mask = smoothstep(0.65, 0.0, d);
            uv += dir * wave * mask;
            vec3 color = vec3(0.04, 0.04, 0.055);
            float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
            color += noise * 0.012;
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 }
        },
        vertexShader, fragmentShader, transparent: true
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    let mousePos = new THREE.Vector2(0.5, 0.5);
    window.addEventListener('mousemove', e => {
        mousePos.x = e.clientX / window.innerWidth;
        mousePos.y = 1.0 - e.clientY / window.innerHeight;
    });

    (function animate(t) {
        material.uniforms.uTime.value = t * 0.001;
        material.uniforms.uMouse.value.lerp(mousePos, 0.04);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    })();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── Cinematic Mirror stage pills ──────────────────────────
    const cmStageBtns = document.querySelectorAll('.cm-stage-btn');
    const cmCaptionEl = document.querySelector('.cm-caption');
    const cmGifOverlay = document.querySelector('.cm-gif-overlay');
    const cmStageCaptionsEn = ['I · Cinematic Interview', 'II · Film Character Match', 'III · Live Director Mode'];
    const cmStageCaptionsZh = ['I · 电影式访谈', 'II · 角色匹配', 'III · 实时导演模式'];
    function getCmStageCaptions() { return currentLang === 'zh' ? cmStageCaptionsZh : cmStageCaptionsEn; }

    cmStageBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            cmStageBtns.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');

            // Check if this stage has a GIF demo
            const gifSrc = btn.dataset.cmGif;
            if (gifSrc && cmGifOverlay) {
                cmGifOverlay.src = gifSrc;
                cmGifOverlay.style.display = 'block';
                requestAnimationFrame(() => requestAnimationFrame(() => {
                    cmGifOverlay.classList.add('visible');
                }));
            } else if (cmGifOverlay) {
                // No GIF — hide overlay, show live iframe
                cmGifOverlay.classList.remove('visible');
                setTimeout(() => { cmGifOverlay.style.display = 'none'; cmGifOverlay.src = ''; }, 350);
            }

            if (cmCaptionEl) {
                cmCaptionEl.style.opacity = '0';
                setTimeout(() => {
                    cmCaptionEl.textContent = getCmStageCaptions()[i];
                    cmCaptionEl.style.opacity = '1';
                }, 180);
            }
        });
    });

    // Home button — back to live iframe preview
    const cmHomeBtn = document.querySelector('.cm-home-btn');
    if (cmHomeBtn) {
        cmHomeBtn.addEventListener('click', () => {
            cmStageBtns.forEach(el => el.classList.remove('active'));
            if (cmGifOverlay) {
                cmGifOverlay.classList.remove('visible');
                setTimeout(() => { cmGifOverlay.style.display = 'none'; cmGifOverlay.src = ''; }, 350);
            }
            if (cmCaptionEl) {
                cmCaptionEl.style.opacity = '0';
                setTimeout(() => {
                    cmCaptionEl.textContent = currentLang === 'zh' ? '实时预览 — 点击阶段切换视图' : 'Live preview — tap a stage to switch view';
                    cmCaptionEl.style.opacity = '1';
                }, 180);
            }
        });
    }

    // ── Language toggle ───────────────────────────────────────
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            applyLanguage(currentLang === 'en' ? 'zh' : 'en');
        });
    }

    // Init
    updateChapterColors('1');
    updateSidebar(0);
});

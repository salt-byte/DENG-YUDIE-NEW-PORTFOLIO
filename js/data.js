// Video Data with Categories
var videosData = [
    // AIGC Works
    {
        id: 1,
        title: 'Zooo',
        thumbnail: 'images/photos/zooo.png',
        videoUrl: 'https://zooo.oss-cn-shanghai.aliyuncs.com/zooo.mp4',
        description: '北京智谱华章公司动动动物园的宣传片部分 | Promotional video for Beijing Zhipu Huazhang Company\'s Dynamic Zoo',
        date: '2023-06-15',
        duration: '2:30',
        views: '1.5k',
        category: 'AIGC Works'
    },
    {
        id: 3,
        title: 'Writing Pen',
        thumbnail: 'images/photos/执笔8.8.png',
        videoUrl: 'https://zooo.oss-cn-shanghai.aliyuncs.com/%E6%89%A7%E7%AC%948.8.mp4',
        description: '执笔，参与首届"中国AIGC原创动画大赛" | Writing Pen, participated in the first "China AIGC Original Animation Competition"',
        date: '2023-04-18',
        duration: '4:10',
        views: '3.2k',
        category: 'AIGC Works'
    },
    {
        id: 2,
        title: 'Sunflower Village',
        thumbnail: 'images/photos/向日葵村.png',
        videoUrl: 'https://zooo.oss-cn-shanghai.aliyuncs.com/%E5%90%91%E6%97%A5%E8%91%B5%E6%9D%91.mp4',
        description: '向日葵村：文旅商业概念片 | Sunflower Village: Cultural Tourism Commercial Concept Film',
        date: '2023-05-20',
        duration: '3:15',
        views: '2.8k',
        category: 'AIGC Works'
    },
    {
        id: 4,
        title: 'Tsinghua Twelve Hours',
        thumbnail: 'images/photos/清华十二时辰.png',
        videoUrl: 'https://zooo.oss-cn-shanghai.aliyuncs.com/%E6%B8%85%E5%8D%8E%E5%8D%81%E4%BA%8C%E6%97%B6%E8%BE%B0.mp4',
        description: '清华十二时辰：AIGC展现清华大学学生的日常 | Tsinghua Twelve Hours: AIGC showcasing daily life of Tsinghua University students',
        date: '2023-03-27',
        duration: '5:45',
        views: '4.1k',
        category: 'AIGC Works'
    },

    // Filming Works
    {
        id: 5,
        title: 'Deaf-Mute',
        thumbnail: 'images/photos/聋哑.png',
        videoUrl: 'https://zooo.oss-cn-shanghai.aliyuncs.com/%E8%81%8B%E5%93%91.mp4',
        description: '聋哑：大一期末作业 | Deaf-Mute: Freshman final project',
        date: '2023-02-15',
        duration: '8:20',
        views: '6.7k',
        category: 'Filming Works'
    },
    {
        id: 6,
        title: 'Diary',
        thumbnail: 'images/photos/日记.png',
        videoUrl: 'https://zooo.oss-cn-shanghai.aliyuncs.com/%E6%97%A5%E8%AE%B0.mp4',
        description: '日记：大二期末作业，改编自《唐探》电影 | Diary: Sophomore final project, adapted from the "Detective Chinatown" movie',
        date: '2023-01-10',
        duration: '7:15',
        views: '5.3k',
        category: 'Filming Works'
    },

];

// Photo Data
var photosData = [
    // AIGC海报
    {
        id: 1,
        title: '清华校园印象',
        image: 'images/photos/AIGC海报/清华/a36eef992434d574ca89fe5c9fb3a2bc.jpg',
        description: 'AIGC生成的创意海报设计，展示了AI在视觉设计领域的创新应用。',
        date: '2023-08-11',
        category: 'AIGC海报'
    },
    {
        id: 2,
        title: '现代设计美学',
        image: 'images/photos/AIGC海报/清华/截屏2025-08-11 17.52.27.png',
        description: '使用AIGC技术创作的视觉海报，融合了现代设计理念。',
        date: '2023-08-11',
        category: 'AIGC海报'
    },
    {
        id: 3,
        title: '艺术风格探索',
        image: 'images/photos/AIGC海报/小倩/截屏2025-08-11 21.26.49.png',
        description: 'AI生成的艺术海报，展现了独特的视觉风格和创意表达。',
        date: '2023-08-11',
        category: 'AIGC海报'
    },
    {
        id: 4,
        title: '创意设计实验',
        image: 'images/photos/AIGC海报/小倩/截屏2025-08-11 21.27.05.png',
        description: '创新的AIGC海报设计，体现了人工智能在创意设计中的潜力。',
        date: '2023-08-11',
        category: 'AIGC海报'
    },
    {
        id: 5,
        title: '技术与艺术融合',
        image: 'images/photos/AIGC海报/小倩/截屏2025-08-11 21.27.15.png',
        description: '精美的AI生成海报，展示了技术与艺术的完美结合。',
        date: '2023-08-11',
        category: 'AIGC海报'
    },
    // AI换脸
    {
        id: 6,
        title: 'AI换脸作品 1',
        image: 'images/photos/AI换脸/截屏2025-08-11 21.27.41.png',
        description: 'AI换脸技术的创新应用，展示了深度学习在图像处理中的强大能力。',
        date: '2023-08-11',
        category: 'AI换脸'
    },
    {
        id: 7,
        title: 'AI换脸作品 2',
        image: 'images/photos/AI换脸/截屏2025-08-11 21.28.40.png',
        description: '精准的面部替换技术，体现了AI在人像处理方面的技术突破。',
        date: '2023-08-11',
        category: 'AI换脸'
    },
    {
        id: 8,
        title: 'AI换脸作品 3',
        image: 'images/photos/AI换脸/截屏2025-08-11 21.28.58.png',
        description: '高质量的AI换脸效果，展现了先进算法的实际应用价值。',
        date: '2023-08-11',
        category: 'AI换脸'
    },
    // LoRA训练
    {
        id: 9,
        title: 'LoRA训练成果 1',
        image: 'images/photos/lora训练/截屏2025-08-11 21.32.34.png',
        description: 'LoRA模型训练的优秀成果，展示了个性化AI模型的训练效果。',
        date: '2023-08-11',
        category: 'LoRA训练'
    },
    {
        id: 10,
        title: 'LoRA训练成果 2',
        image: 'images/photos/lora训练/截屏2025-08-11 21.32.45.png',
        description: '定制化LoRA模型的训练结果，体现了微调技术的精确控制能力。',
        date: '2023-08-11',
        category: 'LoRA训练'
    },
    {
        id: 11,
        title: 'LoRA训练成果 3',
        image: 'images/photos/lora训练/截屏2025-08-11 21.40.28.png',
        description: '专业的LoRA模型训练案例，展现了AI模型个性化定制的可能性。',
        date: '2023-08-11',
        category: 'LoRA训练'
    },
    {
        id: 12,
        title: 'LoRA训练成果 4',
        image: 'images/photos/lora训练/截屏2025-08-11 21.40.50.png',
        description: '高质量的LoRA训练输出，证明了细致调优的重要性和效果。',
        date: '2023-08-11',
        category: 'LoRA训练'
    },
    // 风景摄影
    {
        id: 13,
        title: '城市夜景',
        image: 'images/photos/风景摄影/竖/11b9a616b4eab7df65402960119c3f7e.jpg',
        description: '城市夜晚的灯光构成了一幅美丽的画面，反映了现代都市的活力与魅力。',
        date: '2023-06-20',
        category: '风景摄影'
    },
    {
        id: 14,
        title: '日落海滩',
        image: 'images/photos/风景摄影/1/2104a0fa9aaea7ce44a265be793e6817.jpg',
        description: '金色的阳光洒在海滩上，创造出令人心旷神怡的日落景观。',
        date: '2023-05-25',
        category: '风景摄影'
    },
    {
        id: 15,
        title: '自然风光',
        image: 'images/photos/风景摄影/1/3534a7dbb223a244a3b357a4e2ef41f9.jpg',
        description: '大自然的美丽景色，展现了自然界的和谐与宁静。',
        date: '2023-05-15',
        category: '风景摄影'
    },
    {
        id: 16,
        title: '山水景观',
        image: 'images/photos/风景摄影/4/5028ca363127b9c5f9531a540a294b06.jpg',
        description: '壮丽的山水风景，展现了大自然的鬼斧神工和无限魅力。',
        date: '2023-06-10',
        category: '风景摄影'
    },
    {
        id: 17,
        title: '自然美景',
        image: 'images/photos/风景摄影/竖/86483c81784d982b2435862db5f851d5.jpg',
        description: '纯净的自然风光，捕捉了大自然最美的瞬间。',
        date: '2023-05-20',
        category: '风景摄影'
    },
    {
        id: 18,
        title: '风景摄影',
        image: 'images/photos/风景摄影/3/9ba1d2b89bb63f5c0c527b9a5413c0d9.jpg',
        description: '精美的风景摄影作品，捕捉了大自然的瞬间美丽。',
        date: '2023-05-10',
        category: '风景摄影'
    },
    {
        id: 19,
        title: '田园风光',
        image: 'images/photos/风景摄影/4/b98b7c2147a58d0c48e888ed3811b596.jpg',
        description: '宁静的田园景色，展现了乡村生活的美好与纯朴。',
        date: '2023-05-05',
        category: '风景摄影'
    },
    {
        id: 20,
        title: '湖光山色',
        image: 'images/photos/风景摄影/3/ec9b4ef5cd912339791cd8723709aca8.jpg',
        description: '清澈的湖水与远山相映，构成了一幅诗意的画面。',
        date: '2023-04-30',
        category: '风景摄影'
    },
    {
        id: 21,
        title: '森林景观',
        image: 'images/photos/风景摄影/2/f3209fc72f8f38a9ac830478e127061d.jpg',
        description: '茂密的森林景观，展现了自然生态的丰富多样性。',
        date: '2023-04-25',
        category: '风景摄影'
    },
    {
        id: 22,
        title: '山峦叠嶂',
        image: 'images/photos/风景摄影/2/f37d754628974da2639703703e0e2d54.jpg',
        description: '层层叠叠的山峦，展现了大自然的雄伟壮观。',
        date: '2023-04-20',
        category: '风景摄影'
    }
];

// 以下是旧数据，已被替换
/*
旧数据已删除
*/